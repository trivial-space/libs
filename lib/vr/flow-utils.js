import * as renderer from 'tvs-renderer/lib/renderer';
export function makeContext({ val, stream, asyncStreamStart }, windowSizeEntity) {
    const context = val(renderer.create());
    const canvas = asyncStreamStart([context.COLD], (send, ctx) => {
        const canvas = ctx.gl.canvas;
        document.body.appendChild(canvas);
        send(canvas);
        return () => {
            document.body.removeChild(canvas);
        };
    });
    const canvasSize = stream([canvas.HOT, windowSizeEntity.HOT], (canvas) => ({
        width: canvas ? canvas.clientWidth : window.innerWidth,
        height: canvas ? canvas.clientHeight : window.innerHeight
    }));
    context.react('updateSize', [canvasSize.HOT], renderer.updateSize);
    return { context, canvas, canvasSize };
}
//# sourceMappingURL=flow-utils.js.map