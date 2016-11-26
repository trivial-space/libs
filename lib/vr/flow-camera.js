import { mat4 } from '../math/gl-matrix';
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
    const view = entity(mat4.create());
    return { position, yaw, pitch, view };
}
//# sourceMappingURL=flow-camera.js.map