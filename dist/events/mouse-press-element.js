goog.provide('tslibs.events.MouseButtonElement');
goog.require('tslibs.events.EntityEvent');
goog.require('goog.object');


/**
 * @constructor
 * @extends {tslibs.events.EntityEvent}
 */
tslibs.events.MouseButtonElement = function(element, options) {
    tslibs.events.EntityEvent.call(this);

    this.options = {
        enableRightButton: false
    };
    goog.object.extend(this.options, options);

    this.entityName = 'inputEvent.mouseButton';

    this.value.leftButton = false;
    this.value.middleButton = false;
    this.value.rightButton = false;

    this._stop = false;

    element.addEventListener("mousedown", goog.bind(this.onMouseDown, this), false);
    document.addEventListener("mouseup", goog.bind(this.onMouseUp, this), false);

    if (this.options.enableRightButton) {
        element.addEventListener("contextmenu", function(e) {
            e.preventDefault();
        }, false);
    }
};
goog.inherits(tslibs.events.MouseButtonElement, tslibs.events.EntityEvent);


goog.scope(function() {

    var MouseButtonElement = tslibs.events.MouseButtonElement;


    MouseButtonElement.prototype.onMouseUp = function(e) {
        e.preventDefault();
        this.value.leftButton = this.value.middleButton = this.value.rightButton = false;
        this._stop = true;
    };


    MouseButtonElement.prototype.onMouseDown = function(e) {
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
    };


    MouseButtonElement.prototype.sample = function() {
        if (this.value.rightButton ||
            this.value.middleButton ||
            this.value.leftButton ||
            this._stop) {

            this.entitySystem.propagateChange(this.entityName);
            this._stop = false;
        }
    };
});

