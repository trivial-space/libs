Entity System Data Format
=========================

Data Specification that represents an entity system.
Consists of pure JSON data.


Secification Metainformation
----------------------------

* DefaultLanguage
    * the default code language in the spec
    * defaults to Javascript



EntitySpec
----------

* Id: [namespace / ] name
    * required.
    * can be generated from namspace and name, separated by "/".

* Name: string
    * required.
    * can be generated from id.
    * The name of the Entity.

* Namespace: string
    * optional. generated from id.
    * Group in which entity names must be unique.
    * Each namespace is unique.
    * Usefull for grouping entities.

* InitialValue: JSON
    * optional.
    * The initial value to be set on this entity.
    * Can be any valid JSON.

* ValueType: string
    * optional.
    * type identifier of the value type.
    * helpfull metainformation for editors and viewers.

* Factory: FactorySpec
    * optional.

* Reactions: [ ReactionSpec... ]
    * optional.



FactorySpec
-----------

* Code: string
    * the code of the procedure

* Language: option
    * default: Javascript
    * the language the procedure code is written in

* Procedure: fn (Dependency values) -> new Receiver value
    * required.
    * The factory operation.

* Dependencies: [eids...]
    * optional.
    * The entities who's values are required for the value generation.



ReactionSpec
------------

* Code: string
    * the code of the procedure

* Language: option
    * default: Javascript
    * the language the procedure code is written in

* Procedure: fn (Dependency values) -> new Receiver value | void | null
    * required.
    * The reaction operation.

* Triggers: [eids...]
    * required.
    * Entity IDs that cause the reaction to be executed.

* Supplements: [eids...]
    * optional.
    * Entity IDs that are used by this reaction but don't trigger it.



