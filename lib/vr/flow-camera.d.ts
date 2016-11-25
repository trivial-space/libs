import { EntityFactory, EntityRef } from 'tvs-flow/lib/utils/entity-reference';
export declare function makePerspective(entity: EntityFactory, canvasSize: EntityRef, fovyValue?: number, nearValue?: number, farValue?: number): {
    fovy: EntityRef;
    near: EntityRef;
    far: EntityRef;
    aspect: EntityRef;
    perspective: EntityRef;
};
export declare function makeFirstPersonView(entity: EntityFactory, position?: EntityRef, yaw?: EntityRef, pitch?: EntityRef): void;
