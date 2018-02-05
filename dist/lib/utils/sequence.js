import { randInt, randIntInRange } from '../math/random';
export function pickRandom(arr) {
    return arr[randInt(arr.length)];
}
export function doTimes(fn, count) {
    for (var i = 0; i < count; i++) {
        fn(i);
    }
}
export function times(fn, count, res) {
    if (res === void 0) { res = []; }
    for (var i = 0; i < count; i++) {
        res[i] = fn(i);
    }
    return res;
}
export function zip(fn, as, bs, res) {
    if (res === void 0) { res = []; }
    var length = Math.min(as.length, bs.length);
    for (var i = 0; i < length; i++) {
        res[i] = fn(as[i], bs[i]);
    }
    return res;
}
export function flatten(array, res) {
    if (res === void 0) { res = []; }
    for (var _i = 0, _a = array; _i < _a.length; _i++) {
        var subarray = _a[_i];
        var currentLength = res.length;
        for (var i = 0; i < subarray.length; i++) {
            res[i + currentLength] = subarray[i];
        }
    }
    return res;
}
export function mapcat(fn, array, res) {
    if (res === void 0) { res = []; }
    return flatten(array.map(fn), res);
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