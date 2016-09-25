export const Buttons = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};
export function mouse(callback, opts = {}) {
    const { element = document, enableRightButton } = opts;
    const state = {
        pressed: {},
        dragDelta: { x: 0, y: 0 }
    };
    let x = 0, y = 0, dragging = false;
    function onMouseDown(e) {
        state.pressed[e.button] = Date.now();
        if (e.button === Buttons.LEFT) {
            x = e.clientX;
            y = e.clientY;
            dragging = true;
        }
        callback(state);
    }
    function onMouseUp(e) {
        delete state.pressed[e.button];
        state.dragDelta.x = 0;
        state.dragDelta.y = 0;
        dragging = false;
        callback(state);
    }
    function onMouseMove(e) {
        if (dragging) {
            state.dragDelta.x = x - e.clientX;
            state.dragDelta.y = y - e.clientY;
        }
        callback(state);
    }
    function preventDefault(e) {
        e.preventDefault();
    }
    element.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    if (enableRightButton) {
        element.addEventListener("contextmenu", preventDefault);
    }
    return function destroy() {
        element.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        if (enableRightButton) {
            element.removeEventListener("contextmenu", preventDefault);
        }
    };
}
export function mouseObserver(opts = {}) {
    const observer = {
        Buttons: Buttons,
        state: {
            pressed: {},
            dragDelta: { x: 0, y: 0 }
        },
        destroy: () => { }
    };
    function callback(state) {
        observer.state = state;
    }
    observer.destroy = mouse(callback, opts);
    return observer;
}
//# sourceMappingURL=mouse.js.map