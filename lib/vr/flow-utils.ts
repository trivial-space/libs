import {EntityFactory, EntityRef} from 'tvs-flow/lib/utils/entity-reference'
import {WindowSizeState} from '../events/dom'
import * as renderer from 'tvs-renderer/lib/renderer'
import {Context} from 'tvs-renderer/lib/renderer-types'


export function makeContext(entity: EntityFactory, windowSizeEntity: EntityRef<WindowSizeState>) {


  const context = entity<Context>(renderer.create())


  const canvas = entity<HTMLCanvasElement>()
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


  const canvasSize = entity<{width: number, height: number}>()
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
