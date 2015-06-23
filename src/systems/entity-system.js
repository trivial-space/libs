import math from '../math/base'


export default class EntitySystem {

    constructor() {
        this.entities = {};
        this.reactions = {};
        this.actions = {};
        this.changes = {};
        this.calls = {};
        this.callbacks = {};
        this.reactionsByEntity = {};
    }


    // ===== Entity registration =====

    addValues(values) {
        Object.assign(this.entities, values);
    }


    addValue(name, value) {
        this.entities[name] = value;
    }


    addEntities(spec) {
        for (let id in spec) {
            this.addEntity(id, spec[id]);
        }

        for (let id in this.entities) {
            this.propagateChange(id);
        }
        this.flush();
    }


    addEntity(id, spec) {
        EntitySystem.processRequire(spec);

        const deps = spec.dependencies = spec.dependencies || [];

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
            for (let key in spec.reactions) {
                let reactionDeps = EntitySystem.processEntityString(key);
                let reaction = this.updateReactionsTree(
                    id, reactionDeps,
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
    }


    resetEntity(id, newValue) {
        this.entities[id] = newValue;
        this.propagateChange(id);
    }


    updateEntity(id, fn) {
        this.changeEntity(id, [id], fn);
        this.propagateChange(id);
    }


    // ===== Change propagation =====

    updateReactionsTree(entityId, actors, reaction) {
        const deps = [entityId].concat(actors);

        if (typeof reaction == "object") {
            if (reaction.init) {
                reaction.dependencies = actors;
                reaction.update = reaction.init;
            } else {
                EntitySystem.processRequire(reaction);
                reaction.dependencies = reaction.dependencies || [];
                reaction.dependencies = deps.concat(reaction.dependencies);
            }
        } else if (typeof reaction == "function") {
            reaction = {
                dependencies: deps,
                update: reaction
            };
        }

        const id = math.generateUUID();

        reaction.entity = entityId;
        this.actions[id] = reaction;

        for (let i in actors) {
            let actor = actors[i];
            let r = this.reactions[actor] = this.reactions[actor] || {};
            r[entityId] = id;
        }

        return id;
    }


    propagateChange(id, order) {
        const nextIds = this.reactions[id],
            callbacks = this.callbacks[id];

        // register reactions
        if (nextIds) {
            order = order || 1;

            for (let nextId in nextIds) {

                let actionId = nextIds[nextId],
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

                    let reactions = this.reactionsByEntity[nextId];

                    for (let j in reactions) {

                        let reactionId = reactions[j];
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
            for (let i in callbacks) {
                let cbId = callbacks[i];
                this.calls[cbId] = true;
            }
        }
    }


    changeEntity(entityId, deps, fn) {
        const args = [];
        for (let i in deps) {
            args[i] = this.entities[deps[i]];
        }

        const val = fn.apply(null, args);

        if (val === false) {
            return val;
        } else if (val != null) {
            this.entities[entityId] = val;
        }
    }


    stopChange(id) {
        const nextIds = this.reactions[id];

        if (nextIds) {
            for (let nextId in nextIds) {

                let actionId = nextIds[nextId],
                    change = this.changes[actionId];

                change.count--;

                this.stopChange(nextId);
            }
        }
    }


    flush() {
        const process = {};

        for (let actionId in this.changes) {
            let change = this.changes[actionId],
                p = process[change.order] = process[change.order] || [];

            if (this.actions[actionId].init) {
                p.unshift(actionId);
            } else {
                p.push(actionId);
            }
        }

        // call all changes and reaction updates
        for (let order in process) {
            let actions = process[order];

            for (let i in actions) {
                let actionId = actions[i],
                    action = this.actions[actionId];

                if (this.changes[actionId].count > 0) {
                    let result = this.changeEntity(action.entity, action.dependencies, action.update);
                    if (result === false) {
                        this.stopChange(action.entity);
                    }
                }

                delete this.changes[actionId];
            }
        }

        // call callbacks
        for (let cbId in this.calls) {
            this.callAction(cbId);
        }
        this.calls = {};

    }


    // ===== Actions =====

    addAction(id, action) {
        EntitySystem.processRequire(action);
        this.actions[id] = action;
    }


    addActions(actions) {
        for (let a in actions) {
            this.addAction(a, actions[a]);
        }
    }


    callAction(id) {
        var action = this.actions[id];
        this.changeEntity(null, action.dependencies, action.update);
    }


    // ===== Callbacks =====

    addCallback(entityString, callback) {
        const deps = EntitySystem.processEntityString(entityString),
            cbId = math.generateUUID();


        for (let k in deps) {
            let cbs = this.callbacks[deps[k]] = this.callbacks[deps[k]] || [];
            cbs.push(cbId);
        }

        this.addAction(cbId, {
            dependencies: deps,
            update: callback
        });

        return cbId;
    }


    removeCallback(cbId) {
        delete this.actions[cbId];
        delete this.calls[cbId];

        for (let entityId in this.callbacks) {
            let callbacks = this.callbacks[entityId],
                index = callbacks.indexOf(cbId);

            if (index >= 0) {
                callbacks.splice(index, 1);
            }
        }
    }


    // ===== Helpers =====

    static processRequire(spec) {
        if (spec && spec.require) {
            spec.dependencies = EntitySystem.processEntityString(spec.require);
        }
    }


    static processEntityString(es) {
        return es.trim().split(/\s+/);
    }
}
