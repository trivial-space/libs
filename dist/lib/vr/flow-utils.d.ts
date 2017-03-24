import { EntityRef } from 'tvs-flow/dist/lib/utils/entity-reference';
import { WindowSizeState } from '../events/dom';
import { Context } from 'tvs-renderer/dist/lib/renderer-types';
export declare function makeContext(windowSizeEntity: EntityRef<WindowSizeState>): {
    context: EntityRef<Context>;
    canvas: EntityRef<HTMLCanvasElement>;
    canvasSize: EntityRef<{
        width: number;
        height: number;
    }>;
};
