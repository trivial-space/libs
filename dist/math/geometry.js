import { cross, dot, normalize, sub } from './vectors';
export function planeFromNormalAndCoplanarPoint(n, point) {
    const d = dot(n, point);
    return [n[0], n[1], n[2], -d];
}
export function planeFromThreeCoplanarPoints(p1, p2, p3) {
    return planeFromNormalAndCoplanarPoint(normalFromThreeCoplanarPoints(p1, p2, p3), p1);
}
export function normalFromThreeCoplanarPoints(p1, p2, p3) {
    return normalize(cross(sub(p3, p2), sub(p1, p2)));
}
export function mirrorMatrixFromPlane(plane) {
    const [a, b, c, d] = plane;
    return [
        1 - 2 * a * a, -2 * a * b, -2 * a * c, 0,
        -2 * a * b, 1 - 2 * b * b, -2 * b * c, 0,
        -2 * a * c, -2 * b * c, 1 - 2 * c * c, 0,
        -2 * a * d, -2 * b * d, -2 * c * d, 1,
    ];
}
export function getYawQuat(rotYAngle) {
    rotYAngle *= 0.5;
    return [0, Math.sin(rotYAngle), 0, Math.cos(rotYAngle)];
}
export function getPitchQuat(rotXAngle) {
    rotXAngle *= 0.5;
    return [Math.sin(rotXAngle), 0, 0, Math.cos(rotXAngle)];
}
export function getRollQuat(rotZAngle) {
    rotZAngle *= 0.5;
    return [0, 0, Math.sin(rotZAngle), Math.cos(rotZAngle)];
}
//# sourceMappingURL=geometry.js.map