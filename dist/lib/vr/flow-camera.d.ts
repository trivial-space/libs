import { EntityRef } from 'tvs-flow/dist/lib/utils/entity-reference';
export declare function makePerspective(canvasSize: EntityRef<{
    width: number;
    height: number;
}>): {
    fovy: EntityRef<number>;
    aspect: EntityRef<number>;
    near: EntityRef<number>;
    far: EntityRef<number>;
    perspective: EntityRef<number[] | Float32Array>;
};
export declare function makeFirstPersonView(): {
    position: EntityRef<number[]>;
    yaw: EntityRef<number>;
    pitch: EntityRef<number>;
    yawQuat: EntityRef<number[] | Float32Array>;
    pitchQuat: EntityRef<number[] | Float32Array>;
    rotationQuat: EntityRef<number[] | Float32Array>;
    view: EntityRef<number[] | Float32Array>;
};
