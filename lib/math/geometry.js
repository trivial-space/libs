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
    return mat4.fromValues(1 - 2 * a * a, -2 * a * b, -2 * a * c, 0, -2 * a * b, 1 - 2 * b * b, -2 * b * c, 0, -2 * a * c, -2 * b * c, 1 - 2 * c * c, 0, -2 * a * d, -2 * b * d, -2 * c * d, 1);
}
export function getYawQuat(rotYAngle, quat = []) {
    rotYAngle *= 0.5;
    quat[0] = 0;
    quat[1] = Math.sin(rotYAngle);
    quat[2] = 0;
    quat[3] = Math.cos(rotYAngle);
    return quat;
}
export function getPitchQuat(rotXAngle, quat = []) {
    rotXAngle *= 0.5;
    quat[0] = Math.sin(rotXAngle);
    quat[1] = 0;
    quat[2] = 0;
    quat[3] = Math.cos(rotXAngle);
    return quat;
}
export function getRollQuat(rotZAngle, quat = []) {
    rotZAngle *= 0.5;
    quat[0] = 0;
    quat[1] = 0;
    quat[2] = Math.sin(rotZAngle);
    quat[3] = Math.cos(rotZAngle);
    return quat;
}
//# sourceMappingURL=geometry.js.map