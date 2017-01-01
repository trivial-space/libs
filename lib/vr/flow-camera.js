import { mat4, quat } from '../math/gl-matrix';
import { getYawQuat, getPitchQuat } from '../math/geometry';
export function makePerspective({ val }, canvasSize) {
    const fovy = val(Math.PI * 0.6);
    const near = val(0.1);
    const far = val(1000);
    const aspect = val(1)
        .react([canvasSize.HOT], (self, size) => size ? size.width / size.height : self);
    const perspective = val(mat4.create())
        .react('updatePosition', [
        fovy.HOT,
        aspect.HOT,
        near.HOT,
        far.HOT
    ], mat4.perspective);
    return {
        fovy, aspect, near, far, perspective
    };
}
export function makeFirstPersonView({ val }) {
    const position = val([0, 0, 0]);
    const yaw = val(0);
    const pitch = val(0);
    const yawQuat = val(quat.create())
        .react([yaw.HOT], getYawQuat);
    const pitchQuat = val(quat.create())
        .react([pitch.HOT], getPitchQuat);
    const rotationQuat = val(quat.create())
        .react([pitchQuat.HOT, yawQuat.HOT], quat.multiply);
    const view = val(mat4.create())
        .react([rotationQuat.HOT, position.HOT], mat4.fromRotationTranslation);
    return { position, yaw, pitch, yawQuat, pitchQuat, rotationQuat, view };
}
//# sourceMappingURL=flow-camera.js.map