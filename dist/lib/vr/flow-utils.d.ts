/// <reference types="mocha" />
import { EntityRef } from 'tvs-flow/dist/lib/utils/entity-reference';
import { WindowSizeState } from '../events/dom';
export declare function makePainterCanvas(windowSizeEntity: EntityRef<WindowSizeState>): {
    context: Mocha.IContextDefinition;
    gl: EntityRef<WebGLRenderingContext>;
    canvasSize: EntityRef<{
        width: number;
        height: number;
    }>;
};
