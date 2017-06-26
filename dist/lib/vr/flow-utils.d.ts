import { EntityRef } from 'tvs-flow/dist/lib/utils/entity-reference';
import { WindowSizeState } from '../events/dom';
import { Painter, Shade, Form, Sketch, Layer } from "tvs-renderer/dist/lib/render-types";
export declare function makePainterCanvas(windowSizeEntity: EntityRef<WindowSizeState>): {
    canvas: EntityRef<HTMLCanvasElement>;
    painter: EntityRef<Painter>;
    gl: EntityRef<WebGLRenderingContext>;
    canvasSize: EntityRef<{
        width: number;
        height: number;
    }>;
};
export declare function makeShadeEntity(painter: EntityRef<Painter>): EntityRef<Shade>;
export declare function makeFormEntity(painter: EntityRef<Painter>): EntityRef<Form>;
export declare function makeSketchEntity(painter: EntityRef<Painter>): EntityRef<Sketch>;
export declare function makeFlatSketchEntity(painter: EntityRef<Painter>): EntityRef<Sketch>;
export declare function makeStaticLayerEntity(painter: EntityRef<Painter>): EntityRef<Layer>;
export declare function makeDrawingLayerEntity(painter: EntityRef<Painter>): EntityRef<Layer>;
export declare function makeEffectLayerEntity(painter: EntityRef<Painter>): EntityRef<Layer>;
