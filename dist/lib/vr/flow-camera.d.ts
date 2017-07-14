import { EntityRef } from 'tvs-flow/dist/lib/utils/entity-reference';
export interface PerspectiveSettings {
    near: number;
    far: number;
    fovy: number;
    aspect: number;
}
export declare function makePerspective(canvasSize: EntityRef<{
    width: number;
    height: number;
}>): {
    perspectiveSettings: EntityRef<PerspectiveSettings>;
    perspective: EntityRef<number[] | Float32Array>;
};
export declare function makeFirstPersonView(): {
    position: EntityRef<number[]>;
    rotation: EntityRef<{
        rotX: number[] | Float32Array;
        rotY: number[] | Float32Array;
    }>;
    view: EntityRef<number[] | Float32Array>;
    rotY: EntityRef<number>;
    rotX: EntityRef<number>;
};
