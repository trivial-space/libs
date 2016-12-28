import { EntityFactory, EntityRef } from 'tvs-flow/lib/utils/entity-reference';
import { WindowSizeState } from '../events/dom';
import { Context } from 'tvs-renderer/lib/renderer-types';
export declare function makeContext({val, stream, asyncStreamStart}: EntityFactory, windowSizeEntity: EntityRef<WindowSizeState>): {
    context: EntityRef<Context>;
    canvas: EntityRef<HTMLCanvasElement>;
    canvasSize: EntityRef<{
        width: number;
        height: number;
    }>;
};
