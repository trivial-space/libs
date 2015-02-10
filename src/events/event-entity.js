goog.provide('tslibs.events.EntityEvent');


/**
 * @constructor
 */
tslibs.events.EntityEvent = function() {
    this.entitySystem = null;
    this.entityName = "";
    this.value = {};
};


goog.scope(function() {

    var EntityEvent = tslibs.events.EntityEvent;


    EntityEvent.prototype.registerEntity = function(system, entityName) {
        this.entitySystem = system;
        if (entityName) {
            this.entityName = entityName;
        }

        system.addValue(this.entityName, this.value);
    };


    EntityEvent.prototype.sample = function() {
        this.entitySystem.resetEntity(this.entityName, this.value);
    };
});

