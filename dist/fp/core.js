export function curry(fn) {
    function curried(a, b) {
        if (typeof b !== 'undefined')
            return fn(a, b);
        return (b) => fn(a, b);
    }
    return curried;
}
export function partial(fn, ...args) {
    return fn.bind(null, ...args);
}
//# sourceMappingURL=core.js.map