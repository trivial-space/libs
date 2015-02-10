goog.provide('tslibs.events.DragElement');
goog.require('tslibs.events.EntityEvent');


/**
 * @constructor
 * @extends {tslibs.events.EntityEvent}
 */
tslibs.events.DragElement = function(element) {
    tslibs.events.EntityEvent.call(this);

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

    element.addEventListener("mousedown", goog.bind(this.onMouseDown, this), false);

    document.addEventListener("mousemove", goog.bind(this.onMouseMove, this), false);
    document.addEventListener("mouseup", goog.bind(this.onMouseUp, this), false);
};
goog.inherits(tslibs.events.DragElement, tslibs.events.EntityEvent);


goog.scope(function() {

    var DragElement = tslibs.events.DragElement;

    DragElement.prototype.onMouseMove = function(e) {
        if (this._dragging) {
            this._oldDeltaX = this.value.deltaX;
            this._oldDeltaY = this.value.deltaY;
            this.value.deltaX = this._x - e.screenX;
            this.value.deltaY = this._y - e.screenY;
            this._x = e.screenX;
            this._y = e.screenY;
        }
    };

    DragElement.prototype.onMouseUp = function() {
        this.value.deltaX = this._oldDeltaX = 0;
        this.value.deltaY = this._oldDeltaY = 0;
        this._dragging = false;
    };

    DragElement.prototype.onMouseDown = function(e) {
        if (e.button === 0) {
            this._x = e.screenX;
            this._y = e.screenY;
            this._dragging = true;
            this._stop = true;
        }
    };

    DragElement.prototype.sample = function() {
        if ((this.value.deltaX && this.value.deltaX != this._oldDeltaX) ||
            (this.value.deltaY && this.value.deltaY != this._oldDeltaY) ||
            this._stop) {

            this.entitySystem.propagateChange(this.entityName);
            this._stop = false;
        }
    };
});
