import { mat4, quat } from '../math/gl-matrix';
import { val } from 'tvs-flow/dist/lib/utils/entity-reference';
import { getYawQuat, getPitchQuat } from '../math/geometry';
export function makePerspective(canvasSize) {
    var fovy = val(Math.PI * 0.6);
    var near = val(0.1);
    var far = val(1000);
    var aspect = val(1)
        .react([canvasSize.HOT], function (self, size) { return size ? size.width / size.height : self; });
    var perspective = val(mat4.create())
        .react('updatePosition', [
        fovy.HOT,
        aspect.HOT,
        near.HOT,
        far.HOT
    ], mat4.perspective);
    return {
        fovy: fovy, aspect: aspect, near: near, far: far, perspective: perspective
    };
}
export function makeFirstPersonView() {
    var position = val([0, 0, 0]);
    var yaw = val(0);
    var pitch = val(0);
    var yawQuat = val(quat.create())
        .react([yaw.HOT], getYawQuat);
    var pitchQuat = val(quat.create())
        .react([pitch.HOT], getPitchQuat);
    var rotationQuat = val(quat.create())
        .react([pitchQuat.HOT, yawQuat.HOT], quat.multiply);
    var view = val(mat4.create())
        .react([rotationQuat.HOT, position.HOT], mat4.fromRotationTranslation);
    return { position: position, yaw: yaw, pitch: pitch, yawQuat: yawQuat, pitchQuat: pitchQuat, rotationQuat: rotationQuat, view: view };
}
//# sourceMappingURL=flow-camera.js.map