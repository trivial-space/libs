export var Buttons = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};
export function mouse(opts, callback) {
    var cb = callback || opts;
    var _a = opts, _b = _a.element, element = _b === void 0 ? document : _b, enableRightButton = _a.enableRightButton;
    var state = {
        pressed: {},
        drag: { x: 0, y: 0, dX: 0, dY: 0 },
        dragging: false
    };
    var x = 0, y = 0, oX = 0, oY = 0;
    function onMouseDown(e) {
        state.pressed[e.button] = e;
        if (e.button === Buttons.LEFT) {
            x = oX = e.clientX;
            y = oY = e.clientY;
            state.dragging = true;
        }
        cb(state);
    }
    function onMouseUp(e) {
        delete state.pressed[e.button];
        delete state.drag.event;
        state.drag.x = 0;
        state.drag.y = 0;
        state.drag.dX = 0;
        state.drag.dY = 0;
        state.dragging = false;
        cb(state);
    }
    function onMouseMove(e) {
        if (state.dragging) {
            state.drag.event = e;
            state.drag.x = x - e.clientX;
            state.drag.y = y - e.clientY;
            state.drag.dX = oX - e.clientX;
            state.drag.dY = oY - e.clientY;
            oX = e.clientX;
            oY = e.clientY;
            cb(state);
        }
    }
    function preventDefault(e) {
        e.preventDefault();
    }
    element.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    if (enableRightButton) {
        element.addEventListener('contextmenu', preventDefault);
    }
    cb(state);
    return function destroy() {
        element.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        if (enableRightButton) {
            element.removeEventListener('contextmenu', preventDefault);
        }
    };
}
export function mouseObserver(opts) {
    if (opts === void 0) { opts = {}; }
    var observer = {
        Buttons: Buttons,
        state: {},
        destroy: function () { }
    };
    function callback(state) {
        observer.state = state;
    }
    observer.destroy = mouse(opts, callback);
    return observer;
}
//# sourceMappingURL=mouse.js.map