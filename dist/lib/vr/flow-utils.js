import { asyncStreamStart, stream } from 'tvs-flow/dist/lib/utils/entity-reference';
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
    var painter = stream([gl.HOT], create);
    var canvasSize = stream([canvas.HOT, windowSizeEntity.HOT], function (canvas) { return ({
        width: canvas.clientWidth,
        height: canvas.clientHeight
    }); });
    painter.react([canvasSize.HOT], function (p, _) {
        p.resize();
        return p;
    }, 'updateSize');
    return { context: context, gl: gl, canvasSize: canvasSize };
}
//# sourceMappingURL=flow-utils.js.map