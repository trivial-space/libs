import { EntityFactory, EntityRef } from 'tvs-flow/lib/utils/entity-reference';
export declare function makePerspective({val}: EntityFactory, canvasSize: EntityRef<{
    width: number;
    height: number;
}>): {
    fovy: EntityRef<number>;
    aspect: EntityRef<number>;
    near: EntityRef<number>;
    far: EntityRef<number>;
    perspective: EntityRef<Float32Array | number[]>;
};
export declare function makeFirstPersonView({val}: EntityFactory): {
    position: EntityRef<number[]>;
    yaw: EntityRef<number>;
    pitch: EntityRef<number>;
    yawQuat: EntityRef<Float32Array | number[]>;
    pitchQuat: EntityRef<Float32Array | number[]>;
    rotationQuat: EntityRef<Float32Array | number[]>;
    view: EntityRef<Float32Array | number[]>;
};
