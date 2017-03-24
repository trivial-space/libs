export function windowSize(callback) {
    function resize() {
        callback({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    window.addEventListener('resize', resize);
    resize();
    return function stop() {
        window.removeEventListener('resize', resize);
    };
}
export function windowSizeObserver() {
    var state = {
        size: { width: 0, height: 0 }
    };
    var destroy = windowSize(function (s) { return state.size = s; });
    return { state: state, destroy: destroy };
}
//# sourceMappingURL=dom.js.map