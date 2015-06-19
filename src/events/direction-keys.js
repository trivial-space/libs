import EntityEvent from './event-entity'


export default class DirectionKeys extends EntityEvent {

    constructor (options) {

        this.options = {
            enableWASD: false
        };

        Object.assign(this.options, options);

        this.entityName = 'inputEvent.keyDirection';

        this.value.forth = false;
        this.value.back = false;
        this.value.left = false;
        this.value.right = false;
        this.value.up = false;
        this.value.down = false;

        this._stop = false;

        document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        document.addEventListener("keydown", this.onKeyDown.bind(this), false);
    }


    onKeyUp (e) {
        e.preventDefault();

        switch (e.keyCode) {
            case 38:
            case 87:
                this.value.forth = false;
                break;
            case 37:
            case 65:
                this.value.left = false;
                break;
            case 40:
            case 83:
                this.value.back = false;
                break;
            case 39:
            case 68:
                this.value.right = false;
                break;
            case 82:
                this.value.up = false;
                break;
            case 70:
                this.value.down = false;
                break;
        }

        this._stop = true;
    }


    onKeyDown (e) {
        e.preventDefault();

        switch (e.keyCode) {
            case 38:
            case 87:
                this.value.forth = true;
                break;
            case 37:
            case 65:
                this.value.left = true;
                break;
            case 40:
            case 83:
                this.value.back = true;
                break;
            case 39:
            case 68:
                this.value.right = true;
                break;
            case 82:
                this.value.up = true;
                break;
            case 70:
                this.value.down = true;
                break;
        }
    }

    sample () {
        if (this.value.forth ||
            this.value.back ||
            this.value.left ||
            this.value.right ||
            this.value.up ||
            this.value.down ||
            this._stop) {

            this.entitySystem.propagateChange(this.entityName);
            this._stop = false;
        }
    }
}



