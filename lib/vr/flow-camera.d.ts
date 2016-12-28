import { GLVec } from '../math/gl-matrix';
import { EntityFactory, EntityRef } from 'tvs-flow/lib/utils/entity-reference';
export declare function makePerspective({val}: EntityFactory, canvasSize: EntityRef<{
    width: number;
    height: number;
}>, fovy?: EntityRef<number>, near?: EntityRef<number>, far?: EntityRef<number>): {
    fovy: EntityRef<number>;
    near: EntityRef<number>;
    far: EntityRef<number>;
    aspect: EntityRef<number>;
    perspective: EntityRef<Float32Array | number[]>;
};
export declare function makeFirstPersonView({val}: EntityFactory, position?: EntityRef<GLVec>, yaw?: EntityRef<number>, pitch?: EntityRef<number>): {
    position: EntityRef<Float32Array | number[]>;
    yaw: EntityRef<number>;
    pitch: EntityRef<number>;
    view: EntityRef<Float32Array | number[]>;
    yawQuat: EntityRef<Float32Array | number[]>;
    pitchQuat: EntityRef<Float32Array | number[]>;
    rotationQuat: EntityRef<Float32Array | number[]>;
};
