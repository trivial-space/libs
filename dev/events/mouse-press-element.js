import EntityEvent from './event-entity'

export default class MouseButtonElement extends EntityEvent {

    constructor(element, options) {

        this.options = {
            enableRightButton: false
        };
        Object.assign(this.options, options);

        this.entityName = 'inputEvent.mouseButton';

        this.value.leftButton = false;
        this.value.middleButton = false;
        this.value.rightButton = false;

        this._stop = false;

        element.addEventListener("mousedown", this.onMouseDown.bind(this), false);
        document.addEventListener("mouseup", this.onMouseUp.bind(this), false);

        if (this.options.enableRightButton) {
            element.addEventListener("contextmenu", function (e) {
                e.preventDefault();
            }, false);
        }
    }


    onMouseUp (e) {
        e.preventDefault();
        this.value.leftButton = this.value.middleButton = this.value.rightButton = false;
        this._stop = true;
    }


    onMouseDown (e) {
        e.preventDefault();
        switch (e.button) {
            case 0:
                this.value.leftButton = true;
                break;
            case 1:
                this.value.middleButton = true;
                break;
            case 2:
                this.value.rightButton = true;
                break;
        }
    }


    sample () {
        if (this.value.rightButton ||
            this.value.middleButton ||
            this.value.leftButton ||
            this._stop) {

            this.entitySystem.propagateChange(this.entityName);
            this._stop = false;
        }
    }

}



