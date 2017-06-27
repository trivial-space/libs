import { randInt } from '../math/core';
export function pickRandom(arr) {
    return arr[randInt(arr.length)];
}
export function doTimes(count, fn) {
    for (var i = 0; i < count; i++) {
        fn(i);
    }
}
export function yieldTimes(count, fn) {
    var arr = [];
    doTimes(count, function (i) { return arr.push(fn(i)); });
    return arr;
}
export function zip(as, bs, fn) {
    var length = Math.min(as.length, bs.length);
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(fn(as[i], bs[i]));
    }
    return result;
}
//# sourceMappingURL=sequence.js.map