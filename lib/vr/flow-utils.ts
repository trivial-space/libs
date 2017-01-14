import {EntityFactory, EntityRef} from 'tvs-flow/lib/utils/entity-reference'
import {WindowSizeState} from '../events/dom'
import * as renderer from 'tvs-renderer/lib/renderer'
import {Context} from 'tvs-renderer/lib/renderer-types'


export function makeContext({val, stream, asyncStreamStart}: EntityFactory, windowSizeEntity: EntityRef<WindowSizeState>) {


  const context = val(renderer.create())


  const canvas = asyncStreamStart<HTMLCanvasElement>(
    [context.COLD],
    (send, ctx: Context) => {

      const canvas = ctx.gl.canvas
      document.body.appendChild(canvas)

      send(canvas)

      return () => {
        document.body.removeChild(canvas)
      }
    }
  )


  const canvasSize = stream(
    [canvas.HOT, windowSizeEntity.HOT],
    (canvas: HTMLCanvasElement) => ({
      width: canvas.clientWidth,
      height: canvas.clientHeight
    })
  )


  context.react(
    'updateSize',
    [canvasSize.HOT],
    renderer.updateSize
  )


  return { context, canvas, canvasSize }
}
