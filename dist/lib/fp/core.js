export function curry(fn) {
    function curried(a, b) {
        if (typeof b !== 'undefined')
            return fn(a, b);
        return function (b) { return fn(a, b); };
    }
    return curried;
}
export function partial(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return fn.bind.apply(fn, [null].concat(args));
}
//# sourceMappingURL=core.js.map