import { EntityFactory, EntityRef } from 'tvs-flow/lib/utils/entity-reference';
export declare function makePerspective(entity: EntityFactory, canvasSize: EntityRef, fovy?: EntityRef, near?: EntityRef, far?: EntityRef): {
    fovy: EntityRef;
    near: EntityRef;
    far: EntityRef;
    aspect: EntityRef;
    perspective: EntityRef;
};
export declare function makeFirstPersonView(entity: EntityFactory, position?: EntityRef, yaw?: EntityRef, pitch?: EntityRef): void;
