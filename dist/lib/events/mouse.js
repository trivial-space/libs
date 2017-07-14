export var Buttons = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};
export function mouse(callback, opts) {
    if (opts === void 0) { opts = {}; }
    var _a = opts.element, element = _a === void 0 ? document : _a, enableRightButton = opts.enableRightButton;
    var state = {
        pressed: {},
        drag: { x: 0, y: 0 }
    };
    var x = 0, y = 0, dragging = false;
    function onMouseDown(e) {
        state.pressed[e.button] = e;
        if (e.button === Buttons.LEFT) {
            x = e.clientX;
            y = e.clientY;
            dragging = true;
        }
        callback(state);
    }
    function onMouseUp(e) {
        delete state.pressed[e.button];
        delete state.drag.event;
        state.drag.x = 0;
        state.drag.y = 0;
        dragging = false;
        callback(state);
    }
    function onMouseMove(e) {
        if (dragging) {
            state.drag.event = e;
            state.drag.x = x - e.clientX;
            state.drag.y = y - e.clientY;
            callback(state);
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
    callback(state);
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
    observer.destroy = mouse(callback, opts);
    return observer;
}
//# sourceMappingURL=mouse.js.map