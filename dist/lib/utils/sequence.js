import { randInt, randIntInRange } from '../math/random';
export function pickRandom(arr) {
    return arr[randInt(arr.length)];
}
export function doTimes(fn, count) {
    for (let i = 0; i < count; i++) {
        fn(i);
    }
}
export function times(fn, count, res = []) {
    for (let i = 0; i < count; i++) {
        res[i] = fn(i);
    }
    return res;
}
export function zip(fn, as, bs, res = []) {
    const length = Math.min(as.length, bs.length);
    for (let i = 0; i < length; i++) {
        res[i] = fn(as[i], bs[i]);
    }
    return res;
}
export function flatten(array, res = []) {
    for (const subarray of array) {
        const currentLength = res.length;
        for (let i = 0; i < subarray.length; i++) {
            res[i + currentLength] = subarray[i];
        }
    }
    return res;
}
export function mapcat(fn, array, res = []) {
    return flatten(array.map(fn), res);
}
export function shuffle(arr) {
    const shuffled = [];
    for (let i = 0; i < arr.length; i++) {
        const j = randIntInRange(i, arr.length);
        const temp = shuffled[i] !== undefined ? shuffled[i] : arr[i];
        shuffled[i] = shuffled[j] !== undefined ? shuffled[j] : arr[j];
        shuffled[j] = temp;
    }
    return shuffled;
}
export function map(fn, coll) {
    if (Array.isArray(coll)) {
        return coll.map(fn);
    }
    else {
        const obj = {};
        for (const key in coll) {
            obj[key] = fn(coll[key], key);
        }
        return obj;
    }
}
export function each(fn, coll) {
    for (const key in coll) {
        fn(coll[key], key);
    }
}
//# sourceMappingURL=sequence.js.map