import { mat4, quat } from '../math/gl-matrix';
import { getYawQuat, getPitchQuat } from '../math/geometry';
export function makePerspective(entity, canvasSize, fovy, near, far) {
    fovy = fovy || entity(Math.PI * 0.5);
    near = near || entity(0.1);
    far = far || entity(1000);
    const aspect = entity(1)
        .stream({
        with: {
            size: canvasSize.HOT,
        },
        do: ({ size }) => size.width / size.height
    });
    const perspective = entity(mat4.create())
        .stream({
        id: 'updatePosition',
        with: {
            m: entity.SELF,
            near: near.HOT,
            far: far.HOT,
            fovy: fovy.HOT,
            aspect: aspect.HOT
        },
        do: ({ m, near, far, fovy, aspect }) => mat4.perspective(m, fovy, aspect, near, far)
    });
    return {
        fovy, near, far, aspect, perspective
    };
}
export function makeFirstPersonView(entity, position, yaw, pitch) {
    position = position || entity([0, 0, 0]);
    yaw = yaw || entity(0);
    pitch = pitch || entity(0);
    const yawQuat = entity(quat.create())
        .stream({
        with: {
            q: entity.SELF,
            angle: yaw.HOT
        },
        do: ({ q, angle }) => getYawQuat(angle, q)
    });
    const pitchQuat = entity(quat.create())
        .stream({
        with: {
            q: entity.SELF,
            angle: pitch.HOT
        },
        do: ({ q, angle }) => getPitchQuat(angle, q)
    });
    const rotationQuat = entity(quat.create())
        .stream({
        with: {
            q: entity.SELF,
            yaw: yawQuat.HOT,
            pitch: pitchQuat.HOT
        },
        do: ({ q, yaw, pitch }) => quat.multiply(q, yaw, pitch)
    });
    const view = entity(mat4.create())
        .stream({
        with: {
            m: entity.SELF,
            rot: rotationQuat.HOT,
            pos: position.HOT
        },
        do: ({ m, pos, rot }) => mat4.fromRotationTranslation(m, rot, pos)
    });
    return { position, yaw, pitch, view, yawQuat, pitchQuat, rotationQuat };
}
//# sourceMappingURL=flow-camera.js.map