import { val, asyncStreamStart, stream } from 'tvs-flow/dist/lib/utils/entity-reference';
import * as renderer from 'tvs-renderer/dist/lib/renderer';
export function makeContext(windowSizeEntity) {
    var context = val(renderer.create());
    var canvas = asyncStreamStart([context.COLD], function (send, ctx) {
        var canvas = ctx.gl.canvas;
        document.body.appendChild(canvas);
        send(canvas);
        return function () {
            document.body.removeChild(canvas);
        };
    });
    var canvasSize = stream([canvas.HOT, windowSizeEntity.HOT], function (canvas) { return ({
        width: canvas.clientWidth,
        height: canvas.clientHeight
    }); });
    context.react('updateSize', [canvasSize.HOT], renderer.updateSize);
    return { context: context, canvas: canvas, canvasSize: canvasSize };
}
//# sourceMappingURL=flow-utils.js.map