import { EntityFactory, EntityRef } from 'tvs-flow/lib/utils/entity-reference';
export declare function makeContext(entity: EntityFactory, windowSizeEntity: EntityRef): {
    context: EntityRef;
    canvas: EntityRef;
    canvasSize: EntityRef;
};
