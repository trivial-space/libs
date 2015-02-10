goog.provide('tslibs.events.DirectionKeys');
goog.require('tslibs.events.EntityEvent');
goog.require('goog.object');


/**
 * @constructor
 * @extends {tslibs.events.EntityEvent}
 */
tslibs.events.DirectionKeys = function(options) {
    tslibs.events.EntityEvent.call(this);

    this.options = {
        enableWASD: false
    };
    goog.object.extend(this.options, options);

    this.entityName = 'inputEvent.keyDirection';

    this.value.forth = false;
    this.value.back = false;
    this.value.left = false;
    this.value.right = false;
    this.value.up = false;
    this.value.down = false;

    this._stop = false;

    document.addEventListener("keyup", goog.bind(this.onKeyUp, this), false);
    document.addEventListener("keydown", goog.bind(this.onKeyDown, this), false);
};
goog.inherits(tslibs.events.DirectionKeys, tslibs.events.EntityEvent);


goog.scope(function() {

    var DirectionKeys = tslibs.events.DirectionKeys;


    DirectionKeys.prototype.onKeyUp = function(e) {
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
    };


    DirectionKeys.prototype.onKeyDown = function(e) {
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
    };


    DirectionKeys.prototype.sample = function() {
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
    };
});

