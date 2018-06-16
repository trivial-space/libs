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
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var subarray = array_1[_i];
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
export function map(fn, coll) {
    if (Array.isArray(coll)) {
        return coll.map(fn);
    }
    else {
        var obj = {};
        for (var key in coll) {
            obj[key] = fn(coll[key], key);
        }
        return obj;
    }
}
export function each(fn, coll) {
    for (var key in coll) {
        fn(coll[key], key);
    }
}
//# sourceMappingURL=sequence.js.map