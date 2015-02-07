goog.provide('ts.utils.events.DirectionKeys');
goog.require('goog.events.EventTarget');


/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ts.utils.events.DirectionKeys = function(enableWASD) {
    ts.utils.events.DirectionKeys.base(this, 'constructor');

    this.forth = false;
    this.back = false;
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;

    this._enableWASD = enableWASD;

    document.addEventListener("keyup", goog.bind(this.onKeyUp, this), false);
    document.addEventListener("keydown", goog.bind(this.onKeyDown, this), false);
};
goog.inherits(ts.utils.events.DirectionKeys, goog.events.EventTarget);


goog.scope(function() {

    var DirectionKeys = ts.utils.events.DirectionKeys;


    DirectionKeys.prototype.onKeyUp = function(e) {
        e.preventDefault();

        switch (e.keyCode) {
            case 38:
            case 87:
                this.forth = false;
                break;
            case 37:
            case 65:
                this.left = false;
                break;
            case 40:
            case 83:
                this.back = false;
                break;
            case 39:
            case 68:
                this.right = false;
                break;
            case 82:
                this.up = false;
                break;
            case 70:
                this.down = false;
                break;
        }
    };


    DirectionKeys.prototype.onKeyDown = function(e) {
        e.preventDefault();

        switch (e.keyCode) {
            case 38:
            case 87:
                this.forth = true;
                break;
            case 37:
            case 65:
                this.left = true;
                break;
            case 40:
            case 83:
                this.back = true;
                break;
            case 39:
            case 68:
                this.right = true;
                break;
            case 82:
                this.up = true;
                break;
            case 70:
                this.down = true;
                break;
        }
    };


    DirectionKeys.prototype.sample = function() {
        if (this.forth || this.back || this.left || this.right || this.up || this.down) {
            this.dispatchEvent('change');
        }
    };
});

