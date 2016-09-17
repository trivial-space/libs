export const Buttons = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};
export function mouseObserver(opts = {}) {
    const { element = document, enableRightButton } = opts;
    const pressed = {};
    const dragDelta = { x: 0, y: 0 };
    let x = 0, y = 0, dragging = false;
    function onMouseDown(e) {
        pressed[e.button] = Date.now();
        if (e.button === Buttons.LEFT) {
            x = e.clientX;
            y = e.clientY;
            dragging = true;
        }
    }
    function onMouseUp(e) {
        delete pressed[e.button];
        dragDelta.x = 0;
        dragDelta.y = 0;
        dragging = false;
    }
    function onMouseMove(e) {
        if (dragging) {
            dragDelta.x = x - e.clientX;
            dragDelta.y = y - e.clientY;
        }
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
    function destroy() {
        element.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        if (enableRightButton) {
            element.removeEventListener("contextmenu", preventDefault);
        }
    }
    return {
        Buttons: Buttons,
        state: {
            pressed,
            dragDelta
        },
        destroy
    };
}
//# sourceMappingURL=mouse.js.map