export function windowSize(callback) {
    function resize() {
        callback({
            width: window.innerWidth,
            heigth: window.innerHeight
        });
    }
    window.addEventListener('resize', resize);
    resize();
    return function stop() {
        window.removeEventListener('resize', resize);
    };
}
export function windowSizeObserver() {
    const state = {
        size: null
    };
    const destroy = windowSize(s => state.size = s);
    return { state, destroy };
}
//# sourceMappingURL=dom.js.map