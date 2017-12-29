import { randInt, randIntInRange } from '../math/random';
export function pickRandom(arr) {
    return arr[randInt(arr.length)];
}
export function doTimes(fn, count) {
    for (var i = 0; i < count; i++) {
        fn(i);
    }
}
export function times(fn, count) {
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
export function shuffle(arr) {
    var shuffled = [];
    for (var i = 0; i < arr.length; i++) {
        var j = randIntInRange(i, arr.length);
        var temp = (shuffled[i] !== undefined) ? shuffled[i] : arr[i];
        shuffled[i] = (shuffled[j] !== undefined) ? shuffled[j] : arr[j];
        shuffled[j] = temp;
    }
    return shuffled;
}
//# sourceMappingURL=sequence.js.map