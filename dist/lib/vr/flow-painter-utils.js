import { asyncStreamStart, stream, asyncStream } from 'tvs-flow/dist/lib/utils/entity-reference';
import { create } from 'tvs-painter/dist/lib/painter';
import { getContext } from 'tvs-painter/dist/lib/utils/context';
import { unequal } from '../utils/predicates';
export function makePainterCanvas(windowSizeEntity, painterSettings) {
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
    })
        .accept(unequal);
    var canvasSize = stream([canvas.HOT, windowSizeEntity.HOT], function (canvas) { return ({
        width: canvas.clientWidth,
        height: canvas.clientHeight
    }); });
    painter.react([canvasSize.HOT], function (p, _) { return p.resize(); }, 'updateSize');
    if (painterSettings) {
        painter.react([painterSettings.HOT], function (p, s) { return p.updateDrawSettings(s); });
    }
    return { canvas: canvas, painter: painter, gl: gl, canvasSize: canvasSize };
}
export function makeShadeEntity(painter, data) {
    var entity = asyncStream([painter.HOT], function (send, painter) {
        var shade = painter.createShade();
        send(shade);
        return shade.destroy;
    });
    if (data) {
        entity.react([data.HOT], function (entity, data) { return entity.update(data); });
    }
    return entity;
}
export function makeFormEntity(painter, data) {
    var entity = asyncStream([painter.HOT], function (send, painter) {
        var form = painter.createForm();
        send(form);
        return form.destroy;
    });
    if (data) {
        entity.react([data.HOT], function (entity, data) { return entity.update(data); });
    }
    return entity;
}
export function makeSketchEntity(painter, data) {
    var entity = asyncStream([painter.HOT], function (send, painter) {
        var sketch = painter.createSketch();
        send(sketch);
        return sketch.destroy;
    });
    if (data) {
        entity.react([data.HOT], function (entity, data) { return entity.update(data); });
    }
    return entity;
}
export function makeFlatSketchEntity(painter, data) {
    var entity = asyncStream([painter.HOT], function (send, painter) {
        var sketch = painter.createFlatSketch();
        send(sketch);
        return sketch.destroy;
    });
    if (data) {
        entity.react([data.HOT], function (entity, data) { return entity.update(data); });
    }
    return entity;
}
export function makeStaticLayerEntity(painter, data) {
    var entity = asyncStream([painter.HOT], function (send, painter) {
        var layer = painter.createStaticLayer();
        send(layer);
        return layer.destroy;
    });
    if (data) {
        entity.react([data.HOT], function (entity, data) { return entity.update(data); });
    }
    return entity;
}
export function makeDrawingLayerEntity(painter, data) {
    var entity = asyncStream([painter.HOT], function (send, painter) {
        var layer = painter.createDrawingLayer();
        send(layer);
        return layer.destroy;
    });
    if (data) {
        entity.react([data.HOT], function (entity, data) { return entity.update(data); });
    }
    return entity;
}
export function makeEffectLayerEntity(painter, data) {
    var entity = asyncStream([painter.HOT], function (send, painter) {
        var layer = painter.createEffectLayer();
        send(layer);
        return layer.destroy;
    });
    if (data) {
        entity.react([data.HOT], function (entity, data) { return entity.update(data); });
    }
    return entity;
}
//# sourceMappingURL=flow-painter-utils.js.map