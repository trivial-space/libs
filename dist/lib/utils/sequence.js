import { randInt } from '../math/random';
export function pickRandom(arr) {
    return arr[randInt(arr.length)];
}
export function doTimes(fn, count) {
    for (var i = 0; i < count; i++) {
        fn(i);
    }
}
export function yieldTimes(fn, count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(fn(i));
    }
    return arr;
}
export function zip(fn, as, bs) {
    var length = Math.min(as.length, bs.length);
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(fn(as[i], bs[i]));
    }
    return result;
}
export function flatten(array) {
    var results = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var subarray = array_1[_i];
        for (var _a = 0, subarray_1 = subarray; _a < subarray_1.length; _a++) {
            var el = subarray_1[_a];
            results.push(el);
        }
    }
    return results;
}
export function mapcat(fn, array) {
    return flatten(array.map(fn));
}
//# sourceMappingURL=sequence.js.map