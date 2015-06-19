export default class EntityEvent {

    constructor () {
        this.entitySystem = null;
        this.entityName = "";
        this.value = {};
    }

    registerEntity (system, entityName) {
        this.entitySystem = system;
        if (entityName) {
            this.entityName = entityName;
        }
        system.addValue(this.entityName, this.value);
    }

    sample () {
        this.entitySystem.resetEntity(this.entityName, this.value);
    }
}
