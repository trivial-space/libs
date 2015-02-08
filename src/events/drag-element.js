goog.provide('tslibs.events.DragElement');
goog.require('goog.events.EventTarget');


/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
tslibs.events.DragElement = function(element) {
    tslibs.events.DragElement.base(this, 'constructor');

    this.deltaX = 0;
    this.deltaY = 0;

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
goog.inherits(tslibs.events.DragElement, goog.events.EventTarget);


goog.scope(function() {

    var DragElement = tslibs.events.DragElement;

    DragElement.prototype.onMouseMove = function(e) {
        if (this._dragging) {
            this._oldDeltaX = this.deltaX;
            this._oldDeltaY = this.deltaY;
            this.deltaX = this._x - e.screenX;
            this.deltaY = this._y - e.screenY;
            this._x = e.screenX;
            this._y = e.screenY;
        }
    };

    DragElement.prototype.onMouseUp = function() {
        this.deltaX = this._oldDeltaX = 0;
        this.deltaY = this._oldDeltaY = 0;
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
        if ((this.deltaX && this.deltaX != this._oldDeltaX) ||
            (this.deltaY && this.deltaY != this._oldDeltaY)) {
            this.dispatchEvent({
                type: 'change',
                deltaX: this.deltaX,
                deltaY: this.deltaY
            });
        }

        if (this._stop) {
            this.dispatchEvent({
                type: 'change',
                deltaX: 0,
                deltaY: 0
            });
            this._stop = false;
        }
    };
});
