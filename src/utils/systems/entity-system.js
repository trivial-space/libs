goog.provide('ts.utils.systems.EntitySystem');
goog.require('goog.object');
goog.require('goog.array');
goog.require('ts.utils.math');


/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ts.utils.systems.EntitySystem = function() {
    this.entities = {};
    this.reactions = {};
    this.actions = {};
    this.changes = {};
};


goog.scope(function() {

    var obj = goog.object,
        EntitySystem = ts.utils.systems.EntitySystem;


    EntitySystem.prototype.addValues = function(values) {
        obj.extend(this.entities, values);
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


    EntitySystem.prototype.addEntity = function(id, props) {
        this.processRequire(props);
        var deps = props.dependencies = props.dependencies || [];

        // handle entity initialization
        if (props.init) {
            if (deps.length) {
                this.updateReactionsTree(
                    id, deps,
                    {init: props.init}
                );
            } else {
                this.changeEntity(id, deps, props.init);
            }
        }

        // handle reactions
        if (props.reactions) {
            for (var key in props.reactions) {
                deps = this.processEntityString(key);
                this.updateReactionsTree(
                    id, deps,
                    props.reactions[key]
                );
            }
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

        var id = ts.utils.math.generateUUID();
        reaction.entity = entityId;
        this.actions[id] = reaction;

        for (i in actors) {
            actor = actors[i];
            r = this.reactions[actor] = this.reactions[actor] || {};
            r[entityId] = id;
        }
    };


    EntitySystem.prototype.propagateChange = function(id, order) {
        var nextIds = this.reactions[id],
            nextId, change, actionId;

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

                this.propagateChange(nextId, order + 1);
            }
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
            p, o, i, result;

        for (actionId in this.changes) {
            change = this.changes[actionId];
            p = process[change.order] = process[change.order] || [];
            if (this.actions[actionId].init) {
                p.unshift(actionId);
            } else {
                p.push(actionId);
            }
        }

        for (o in process) {
            actions = process[o];

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

    };


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


    EntitySystem.prototype.processRequire = function(spec) {
        if (spec && spec.require) {
            spec.dependencies = this.processEntityString(spec.require);
        }
    };


    EntitySystem.prototype.processEntityString = function(es) {
        return es.split(/\s+/);
    };
});
