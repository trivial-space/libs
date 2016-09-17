import { vec3, fvec3, vec4, mat4 } from './gl-matrix';
export function planeFromNormalAndCoplanarPoint(n, point) {
    const d = -vec3.dot(n, point);
    return vec4.fromValues(n[0], n[1], n[2], d);
}
export function planeFromThreeCoplanarPoints(p1, p2, p3) {
    return planeFromNormalAndCoplanarPoint(normalFromThreeCoplanarPoints(p1, p2, p3), p1);
}
export function normalFromThreeCoplanarPoints(p1, p2, p3) {
    const n = fvec3.cross(fvec3.sub(p3, p2), fvec3.sub(p1, p2));
    return vec3.normalize(n, n);
}
export function mirrorMatrixFromPlane(plane) {
    let [a, b, c, d] = plane;
    return mat4.fromValues(1 - 2 * a * a, -2 * a * b, -2 * a * c, -2 * a * d, -2 * b * a, 1 - 2 * b * b, -2 * b * c, -2 * b * d, -2 * c * a, -2 * c * b, 1 - 2 * c * c, -2 * c * d, 0, 0, 0, 1);
}
//# sourceMappingURL=geometry.js.map