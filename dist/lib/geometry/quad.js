import { lerpVecs, translate, rotateLeft } from './primitives';
import { times, flatten } from '../utils/sequence';
export function top(q) {
    return [q[0], q[1]];
}
export function right(q) {
    return [q[1], q[2]];
}
export function bottom(q) {
    return [q[2], q[3]];
}
export function left(q) {
    return [q[3], q[0]];
}
export function combineEdges(e1, e2) {
    return e1.concat(rotateLeft(e2));
}
export function extrudeTop(direction, edge) {
    return combineEdges(translate(direction, edge), edge);
}
export function extrudeRight(direction, edge) {
    return rotateLeft(extrudeTop(direction, edge));
}
export function extrudeBottom(direction, edge) {
    return combineEdges(edge, translate(direction, edge));
}
export function extrudeLeft(direction, edge) {
    return rotateLeft(extrudeBottom(direction, edge));
}
export function divideHorizontal(leftRatio, rightRatio, _a) {
    var v1 = _a[0], v2 = _a[1], v3 = _a[2], v4 = _a[3];
    var v11 = lerpVecs(leftRatio, v1, v4);
    var v22 = lerpVecs(rightRatio, v2, v3);
    return [[v1, v2, v22, v11], [v11, v22, v3, v4]];
}
export function divideVertical(topRatio, bottomRatio, _a) {
    var v1 = _a[0], v2 = _a[1], v3 = _a[2], v4 = _a[3];
    var v11 = lerpVecs(topRatio, v1, v2);
    var v44 = lerpVecs(bottomRatio, v4, v3);
    return [[v1, v11, v44, v4], [v11, v2, v3, v44]];
}
export var quadTriangles = [[1, 2, 3], [1, 3, 4]];
export function triangulate(quadCount) {
    return flatten(times(function (i) { return quadTriangles.map((function (t) { return t.map(function (j) { return 4 * i + j; }); })); }, quadCount));
}
//# sourceMappingURL=quad.js.map