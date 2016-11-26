import {EntityFactory, EntityRef} from 'tvs-flow/lib/utils/entity-reference'
import {renderer} from 'tvs-renderer'


export function makeContext(entity: EntityFactory, windowSizeEntity: EntityRef) {


  const context = entity(renderer.create())


  const canvas = entity()
    .stream({
      async: true,
      autostart: true,
      with: {
        ctx: context.COLD
      },
      do: ({ctx}, send) => {

        const canvas = ctx.gl.canvas
        document.body.appendChild(canvas)

        send(canvas)

        return () => {
          document.body.removeChild(canvas)
        }
      }
    })


  const canvasSize = entity()
    .stream({
      with: {
        w: windowSizeEntity.HOT,
        canvas: canvas.HOT
      },
      do: ({canvas}) => {
        return {
          width: canvas ? canvas.clientWidth : window.innerWidth,
          height: canvas ? canvas.clientHeight : window.innerHeight
        }
      }
    })


  context.stream({
    id: 'updateSize',
    with: {
      ctx: entity.SELF,
      size: canvasSize.HOT
    },
    do: ({ctx}) => renderer.updateSize(ctx)
  })


  return { context, canvas, canvasSize }
}
