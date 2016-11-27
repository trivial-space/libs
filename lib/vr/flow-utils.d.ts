import { EntityFactory, EntityRef } from 'tvs-flow/lib/utils/entity-reference';
import { WindowSizeState } from '../events/dom';
import { Context } from 'tvs-renderer';
export declare function makeContext(entity: EntityFactory, windowSizeEntity: EntityRef<WindowSizeState>): {
    context: EntityRef<Context>;
    canvas: EntityRef<HTMLCanvasElement>;
    canvasSize: EntityRef<{
        width: number;
        height: number;
    }>;
};
