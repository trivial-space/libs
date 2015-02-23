goog.provide('tslibs.systems.EntitySystem');
goog.require('goog.object');
goog.require('goog.array');
goog.require('tslibs.math');


/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
tslibs.systems.EntitySystem = function() {
    this.entities = {};
    this.reactions = {};
    this.actions = {};
    this.changes = {};
    this.calls = {};
    this.callbacks = {};
    this.reactionsByEntity = {};
};

goog.scope(function() {

    var obj = goog.object,
        EntitySystem = tslibs.systems.EntitySystem;


    // ===== Entity registration =====

    EntitySystem.prototype.addValues = function(values) {
        obj.extend(this.entities, values);
    };


    EntitySystem.prototype.addValue = function(name, value) {
        this.entities[name] = value;
    };


    EntitySystem.prototype.addEntities = function(spec) {
        for (var id in spec) {
            this.addEntity(id, spec[id]);
        }

        for (id in this.entities) {
            this.propagateChange(id);
        }
        this.flush();
    };


    EntitySystem.prototype.addEntity = function(id, spec) {
        this.processRequire(spec);

        var deps = spec.dependencies = spec.dependencies || [],
            reaction;

        // handle values
        if (spec.value) {
            this.addValue(id, spec.value);
        }

        // handle entity initialization
        if (spec.init) {
            if (deps.length) {
                this.updateReactionsTree(
                    id, deps,
                    {init: spec.init}
                );
            } else {
                this.changeEntity(id, deps, spec.init);
            }
        }

        // handle reactions
        if (spec.reactions) {
            for (var key in spec.reactions) {
                deps = this.processEntityString(key);
                reaction = this.updateReactionsTree(
                    id, deps,
                    spec.reactions[key]
                );
                this.reactionsByEntity[id] = this.reactionsByEntity[id] || [];
                this.reactionsByEntity[id].push(reaction);
            }
        }

        // handle change callbacks
        if (spec.callback) {
            this.addCallback(id, spec.callback);
        }
    };


    EntitySystem.prototype.resetEntity = function(id, newValue) {
        this.entities[id] = newValue;
        this.propagateChange(id);
    };


    EntitySystem.prototype.updateEntity = function(id, fn) {
        this.changeEntity(id, [id], fn);
        this.propagateChange(id);
    };


    // ===== Change propagation =====

    EntitySystem.prototype.updateReactionsTree = function(entityId, actors, reaction) {
        var deps = [entityId].concat(actors),
            i, actor, r;

        if (typeof reaction == "object") {
            if (reaction.init) {
                reaction.dependencies = actors;
                reaction.update = reaction.init;
            } else {
                this.processRequire(reaction);
                reaction.dependencies = reaction.dependencies || [];
                reaction.dependencies = deps.concat(reaction.dependencies);
            }
        } else if (typeof reaction == "function") {
            reaction = {
                dependencies: deps,
                update: reaction
            };
        }

        var id = tslibs.math.generateUUID();
        reaction.entity = entityId;
        this.actions[id] = reaction;

        for (i in actors) {
            actor = actors[i];
            r = this.reactions[actor] = this.reactions[actor] || {};
            r[entityId] = id;
        }

        return id;
    };


    EntitySystem.prototype.propagateChange = function(id, order) {
        var nextIds = this.reactions[id],
            callbacks = this.callbacks[id],
            nextId, change, actionId,
            reactionId, reactions,
            i, j, cbId;

        // register reactions
        if (nextIds) {
            order = order || 1;
            for (nextId in nextIds) {
                actionId = nextIds[nextId];

                change = this.changes[actionId] = this.changes[actionId] || {};

                if (change.count) {
                    change.count++;
                } else {
                    change.count = 1;
                }

                if (!change.order || change.order < order) {
                    change.order = order;
                }

                // restore reaction state after reinit
                if (this.actions[actionId].init) {
                    reactions = this.reactionsByEntity[nextId];
                    for (j in reactions) {
                        reactionId = reactions[j];
                        change = this.changes[reactionId] = this.changes[reactionId] || {};

                        if (change.count) {
                            change.count++;
                        } else {
                            change.count = 1;
                        }

                        if (!change.order || change.order < order) {
                            change.order = order;
                        }
                    }
                }

                this.propagateChange(nextId, order + 1);
            }
        }

        // register callback calls
        if (callbacks) {
            for (i in callbacks) {
                cbId = callbacks[i];
                this.calls[cbId] = true;
            }
        }
    };


    EntitySystem.prototype.changeEntity = function(entityId, deps, fn) {
        var args = [];
        for (var i in deps) {
            args[i] = this.entities[deps[i]];
        }

        var val = fn.apply(null, args);

        if (val === false) {
            return val;
        } else if (val != null) {
            this.entities[entityId] = val;
        }
    };


    EntitySystem.prototype.stopChange = function(id) {
        var nextIds = this.reactions[id],
            nextId, change, actionId;

        if (nextIds) {
            for (nextId in nextIds) {
                actionId = nextIds[nextId];

                change = this.changes[actionId];
                change.count--;

                this.stopChange(nextId);
            }
        }
    };


    EntitySystem.prototype.flush = function() {
        var process = {},
            actionId, change, action, actions,
            p, i, order, result, cbId;

        for (actionId in this.changes) {
            change = this.changes[actionId];
            p = process[change.order] = process[change.order] || [];
            if (this.actions[actionId].init) {
                p.unshift(actionId);
            } else {
                p.push(actionId);
            }
        }

        // call all changes and reactio updates
        for (order in process) {
            actions = process[order];

            for (i in actions) {
                actionId = actions[i];
                action = this.actions[actionId];

                if (this.changes[actionId].count > 0) {
                    result = this.changeEntity(action.entity, action.dependencies, action.update);
                    if (result === false) {
                        this.stopChange(action.entity);
                    }
                }

                delete this.changes[actionId];
            }
        }

        // call callbacks
        for (cbId in this.calls) {
            this.callAction(cbId);
        }
        this.calls = {};

    };


    // ===== Actions =====

    EntitySystem.prototype.addAction = function(id, action) {
        this.processRequire(action);
        this.actions[id] = action;
    };


    EntitySystem.prototype.addActions = function(actions) {
        for (var a in actions) {
            this.addAction(a, actions[a]);
        }
    };


    EntitySystem.prototype.callAction = function(id) {
        var action = this.actions[id];
        this.changeEntity(null, action.dependencies, action.update);
    };


    // ===== Callbacks =====

    EntitySystem.prototype.addCallback = function(entityString, callback) {
        var deps = this.processEntityString(entityString),
            cbId = tslibs.math.generateUUID(),
            k, cbs;

        for (k in deps) {
            cbs = this.callbacks[deps[k]] = this.callbacks[deps[k]] || [];
            cbs.push(cbId);
        }

        this.addAction(cbId, {
            dependencies: deps,
            update: callback
        });

        return cbId;
    };


    EntitySystem.prototype.removeCallback = function(cbId) {
        var entityId, callbacks, index;
        delete this.actions[cbId];
        delete this.calls[cbId];

        for (entityId in this.callbacks) {
            callbacks = this.callbacks[entityId];
            index = callbacks.indexOf(cbId);
            if (index >= 0) {
                callbacks.splice(index, 1);
            }
        }
    };


    // ===== Helpers =====

    EntitySystem.prototype.processRequire = function(spec) {
        if (spec && spec.require) {
            spec.dependencies = this.processEntityString(spec.require);
        }
    };


    EntitySystem.prototype.processEntityString = function(es) {
        return es.trim().split(/\s+/);
    };
});
