import { asyncStreamStart, stream, asyncStream } from 'tvs-flow/dist/lib/utils/entity-reference';
import { create } from 'tvs-renderer/dist/lib/painter';
import { getContext } from 'tvs-renderer/dist/lib/utils/context';
export function makePainterCanvas(windowSizeEntity) {
    var canvas = asyncStreamStart(null, function (send) {
        var canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        send(canvas);
        return function () {
            document.body.removeChild(canvas);
        };
    });
    var gl = stream([canvas.HOT], getContext);
    var painter = asyncStream([gl.HOT], function (send, gl) {
        var p = create(gl);
        send(p);
        return p.destroy;
    });
    var canvasSize = stream([canvas.HOT, windowSizeEntity.HOT], function (canvas) { return ({
        width: canvas.clientWidth,
        height: canvas.clientHeight
    }); });
    painter.react([canvasSize.HOT], function (p, _) {
        p.resize();
        return p;
    }, 'updateSize');
    return { canvas: canvas, painter: painter, gl: gl, canvasSize: canvasSize };
}
export function makeShadeEntity(painter) {
    return asyncStream([painter.HOT], function (send, painter) {
        var shade = painter.createShade();
        send(shade);
        return shade.destroy;
    });
}
export function makeFormEntity(painter) {
    return asyncStream([painter.HOT], function (send, painter) {
        var form = painter.createForm();
        send(form);
        return form.destroy;
    });
}
export function makeSketchEntity(painter) {
    return asyncStream([painter.HOT], function (send, painter) {
        var sketch = painter.createSketch();
        send(sketch);
        return sketch.destroy;
    });
}
export function makeFlatSketchEntity(painter) {
    return asyncStream([painter.HOT], function (send, painter) {
        var sketch = painter.createFlatSketch();
        send(sketch);
        return sketch.destroy;
    });
}
export function makeStaticLayerEntity(painter) {
    return asyncStream([painter.HOT], function (send, painter) {
        var layer = painter.createStaticLayer();
        send(layer);
        return layer.destroy;
    });
}
export function makeDrawingLayerEntity(painter) {
    return asyncStream([painter.HOT], function (send, painter) {
        var layer = painter.createDrawingLayer();
        send(layer);
        return layer.destroy;
    });
}
export function makeEffectLayerEntity(painter) {
    return asyncStream([painter.HOT], function (send, painter) {
        var layer = painter.createEffectLayer();
        send(layer);
        return layer.destroy;
    });
}
//# sourceMappingURL=flow-utils.js.map