import EntityEvent from './event-entity'


export default class DragElement extends EntityEvent {

    constructor(element) {

        this.entityName = 'inputEvent.mouseDrag';

        this.value = {
            deltaX: 0,
            deltaY: 0
        };

        this._x = 0;
        this._y = 0;
        this._dragging = false;
        this._oldDeltaX = 0;
        this._oldDeltaY = 0;
        this._stop = false;

        element.addEventListener("mousedown", this.onMouseDown.bind(this), false);
        document.addEventListener("mousemove", this.onMouseMove.bind(this), false);
        document.addEventListener("mouseup", this.onMouseUp.bind(this), false);
    }

    onMouseMove (e) {
        if (this._dragging) {
            this._oldDeltaX = this.value.deltaX;
            this._oldDeltaY = this.value.deltaY;
            this.value.deltaX = this._x - e.screenX;
            this.value.deltaY = this._y - e.screenY;
            this._x = e.screenX;
            this._y = e.screenY;
        }
    }

    onMouseUp () {
        this.value.deltaX = this._oldDeltaX = 0;
        this.value.deltaY = this._oldDeltaY = 0;
        this._dragging = false;
    }

    onMouseDown (e) {
        if (e.button === 0) {
            this._x = e.screenX;
            this._y = e.screenY;
            this._dragging = true;
            this._stop = true;
        }
    }

    sample () {
        if ((this.value.deltaX && this.value.deltaX != this._oldDeltaX) ||
            (this.value.deltaY && this.value.deltaY != this._oldDeltaY) ||
            this._stop) {

            this.entitySystem.propagateChange(this.entityName);
            this._stop = false;
        }
    }
}




