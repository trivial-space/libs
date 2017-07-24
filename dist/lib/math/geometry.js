import { vec3, vec4, mat4 } from 'gl-matrix';
export function planeFromNormalAndCoplanarPoint(n, point) {
    var d = -vec3.dot(n, point);
    return vec4.fromValues(n[0], n[1], n[2], d);
}
export function planeFromThreeCoplanarPoints(p1, p2, p3) {
    return planeFromNormalAndCoplanarPoint(normalFromThreeCoplanarPoints(p1, p2, p3), p1);
}
export function normalFromThreeCoplanarPoints(p1, p2, p3) {
    var n = vec3.cross(vec3.create(), vec3.sub(vec3.create(), p3, p2), vec3.sub(vec3.create(), p1, p2));
    return vec3.normalize(n, n);
}
export function mirrorMatrixFromPlane(plane) {
    var _a = plane, a = _a[0], b = _a[1], c = _a[2], d = _a[3];
    return mat4.fromValues(1 - 2 * a * a, -2 * a * b, -2 * a * c, 0, -2 * a * b, 1 - 2 * b * b, -2 * b * c, 0, -2 * a * c, -2 * b * c, 1 - 2 * c * c, 0, -2 * a * d, -2 * b * d, -2 * c * d, 1);
}
export function getYawQuat(quat, rotYAngle) {
    rotYAngle *= 0.5;
    quat[0] = 0;
    quat[1] = Math.sin(rotYAngle);
    quat[2] = 0;
    quat[3] = Math.cos(rotYAngle);
    return quat;
}
export function getPitchQuat(quat, rotXAngle) {
    rotXAngle *= 0.5;
    quat[0] = Math.sin(rotXAngle);
    quat[1] = 0;
    quat[2] = 0;
    quat[3] = Math.cos(rotXAngle);
    return quat;
}
export function getRollQuat(quat, rotZAngle) {
    rotZAngle *= 0.5;
    quat[0] = 0;
    quat[1] = 0;
    quat[2] = Math.sin(rotZAngle);
    quat[3] = Math.cos(rotZAngle);
    return quat;
}
//# sourceMappingURL=geometry.js.map