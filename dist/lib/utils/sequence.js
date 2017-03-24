import { randInt } from '../math/core';
export function pick(arr) {
    return arr[randInt(arr.length)];
}
export function doTimes(count, fn) {
    for (var j = 0; j < count; j++) {
        fn(j);
    }
}
export function yieldTimes(count, fn) {
    var arr = [];
    doTimes(count, function (i) { return arr.push(fn(i)); });
    return arr;
}
//# sourceMappingURL=sequence.js.map