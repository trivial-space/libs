import { zip } from '../utils/sequence';
import { partial } from '../fp/core';
import { lerp } from '../math/core';
import { add } from 'math/vectors';
export function interpolate(fn, step, start, end) {
    return zip(partial(fn, step), start, end);
}
export var lerpVecs = partial(interpolate, lerp);
export function split(part, _a) {
    var v1 = _a[0], v2 = _a[1];
    var p = lerpVecs(part, v1, v2);
    return [[v1, p], [p, v2]];
}
export function translate(vec, g) {
    return g.map(partial(add, vec));
}
//# sourceMappingURL=primitives.js.map