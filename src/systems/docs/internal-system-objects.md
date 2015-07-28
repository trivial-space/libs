Internal System Objects
=======================


Entity specification
--------------------


* Id: [namespace / ] name
    * required
    * composed of namspace and name, separated by "/"

* Value: ...
    * the current value of the entity.

* Factory: aid
    * optional.
    * the id of the action that generates this entity

* Dependencies: [ (eid -> aid)... ]
    * generated.
    * lists all entity ids that trigger operations (factory or reaction)
        on this entity.
    * maps the triggering entity ids to the executed action id.

* Influences: [ (eid -> [aid...] )... ]
    * generated.
    * lists all entities who's values are used as supplements in the
        recalculation of this entity's value without triggering an
        action directly.
    * maps the influences to all actions they are used in.

* Effects: [ (eid -> aid)... ]
    * generated.
    * lists all entities that are recalculated when this entity is changed.
    * maps the affected entity id to the operation id.

* Callbacks: [ aid... ]
    * generated.
    * all callback ids that need to be called on entity change.



Procedures on entities
----------------------


### Action

Operation on some entity values. Base type for other entity operations.

* Dependencies: [eids...]
    * The entities who's values are required for this action.

* Procedure: fn (Dependency values) -> ...
    * required.
    * The operation on the dependency values.
    * need to be called explicitly.



### Factory

Operation that generates a new entity value.
Can depend on other entity values.
Only one factory per entity is possible.

* Receiver: eid
    * required.
    * The entity who's value is generated.

* Dependencies: [eids...]
    * optional.
    * The entities who's values are required for the value generation.

* Procedure: fn (Dependency values) -> new Receiver value
    * required.
    * The factory operation.



### Reaction

Operation that is triggered by the changes of some trigger entities.
Calculates a new receiver entity value based on the old receiver value
and the dependency values.
Only one reaction with same receiver and triggers is possible.

* Receiver: eid
    * required.
    * The entity that is reacting.

* Triggers: [eids...]
    * required.
    * Entity IDs that cause the reaction to be executed.

* Supplements: [eids...]
    * optional.
    * Entity IDs that are used by this reaction but don't trigger it.

* Dependencies: Receiver + Triggers + Supplements
    * generated from above properties.
    * the entities that are given to the reation procedure.

* Procedure: fn (Dependency values..) ->
                        (new Receiver value |
                            void (only side effects, direct value manipulation) |
                            null (stop the reaction chain for this step))
    * required.
    * The executing function that operates on the required values.
    * Manipulates the current state of the Receiver, or returns a new Receiver value.
    * Can stop the reaction chain by returning null.



### Callback

Action with external side effects that is triggered on specified entity changes.

* Triggers: [eids...]
    * required.
    * Entity IDs that cause the callback.

* Supplements: [eids...]
    * optional.
    * Entity IDs that are used by this callback but don't trigger it.

* Dependencies: Triggers + Supplements
    * generated from above properties.
    * the entities that are given to the callback procedure.

* Procedure: fn (Dependency values..) -> (void (only for side effects))
    * required.
    * The executing function that operates on the required values.
