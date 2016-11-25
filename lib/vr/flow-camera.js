import { mat4 } from '../math/gl-matrix';
export function makePerspective(entity, canvasSize, fovyValue = Math.PI * 0.5, nearValue = 0.1, farValue = 1000) {
    const fovy = entity(fovyValue);
    const near = entity(nearValue);
    const far = entity(farValue);
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
}
//# sourceMappingURL=flow-camera.js.map