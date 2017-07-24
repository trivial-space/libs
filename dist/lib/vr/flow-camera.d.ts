/// <reference types="gl-matrix" />
import { mat4 } from 'gl-matrix';
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
    perspective: EntityRef<mat4>;
};
export declare function makeFirstPersonView(): {
    position: EntityRef<number[]>;
    rotation: EntityRef<{
        rotX: mat4;
        rotY: mat4;
    }>;
    view: EntityRef<mat4>;
    rotY: EntityRef<number>;
    rotX: EntityRef<number>;
};
