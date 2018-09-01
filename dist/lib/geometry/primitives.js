import { zip } from '../utils/sequence';
import { partial } from '../fp/core';
import { lerp } from '../math/core';
import { add, normalize, cross, sub, cross2D } from '../math/vectors';
export function interpolate(fn, step, start, end) {
    return zip(partial(fn, step), start, end);
}
export const lerpVecs = partial(interpolate, lerp);
export function split(part, [v1, v2]) {
    const p = lerpVecs(part, v1, v2);
    return [[v1, p], [p, v2]];
}
export function translate(vec, p) {
    return p.map(v => add(vec, v));
}
export function rotateLeftInPlace(p) {
    p.unshift(p.pop());
    return p;
}
export function rotateRightInPlace(p) {
    p.push(p.shift());
    return p;
}
export function rotateLeft(p) {
    return rotateLeftInPlace(p.concat());
}
export function rotateRight(p) {
    return rotateRightInPlace(p.concat());
}
export function normal(p) {
    return normalize(cross(sub(p[0], p[1]), sub(p[2], p[1])));
}
export function side(e, v) {
    return cross2D(sub(v, e[0]), sub(e[1], e[0]));
}
//# sourceMappingURL=primitives.js.map