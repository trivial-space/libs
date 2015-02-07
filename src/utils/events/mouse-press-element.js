goog.provide('ts.utils.events.MouseButtonElement');
goog.require('goog.events.EventTarget');


/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ts.utils.events.MouseButtonElement = function(element, enableRightBtn) {
    ts.utils.events.MouseButtonElement.base(this, 'constructor');

    this.leftBtn = false;
    this.middleBtn = false;
    this.rightBtn = false;


    element.addEventListener("mousedown", goog.bind(this.onMouseDown, this), false);
    document.addEventListener("mouseup", goog.bind(this.onMouseUp, this), false);

    if (enableRightBtn) {
        element.addEventListener("contextmenu", function(e) {
            e.preventDefault();
        }, false);
    }
};
goog.inherits(ts.utils.events.MouseButtonElement, goog.events.EventTarget);


goog.scope(function() {

    var MouseButtonElement = ts.utils.events.MouseButtonElement;


    MouseButtonElement.prototype.onMouseUp = function(e) {
        e.preventDefault();
        this.leftBtn = this.middleBtn = this.rightBtn = false;
    };


    MouseButtonElement.prototype.onMouseDown = function(e) {
        e.preventDefault();
        switch (e.button) {
          case 0:
            this.leftBtn = true;
            break;
          case 1:
            this.middleBtn = true;
            break;
          case 2:
            this.rightBtn = true;
            break;
        }
    };


    MouseButtonElement.prototype.sample = function() {
        if (this.rightBtn || this.middleBtn || this.leftBtn) {
            this.dispatchEvent('change');
        }
    };
});

