import { EntityRef, asyncStreamStart, stream } from 'tvs-flow/dist/lib/utils/entity-reference'
import { WindowSizeState } from '../events/dom'
import { create } from 'tvs-renderer/dist/lib/painter'
import { getContext } from 'tvs-renderer/dist/lib/utils/context'


export function makePainterCanvas (windowSizeEntity: EntityRef<WindowSizeState>) {

  const canvas = asyncStreamStart<HTMLCanvasElement>(
    null,
    (send) => {

      const canvas = document.createElement('canvas')
      document.body.appendChild(canvas)

      send(canvas)

      return () => {
        document.body.removeChild(canvas)
      }
    }
  )

  const gl = stream([canvas.HOT], getContext)

  const painter = stream([gl.HOT], create)

  const canvasSize = stream(
    [canvas.HOT, windowSizeEntity.HOT],
    (canvas: HTMLCanvasElement) => ({
      width: canvas.clientWidth,
      height: canvas.clientHeight
    })
  )

  painter.react(
    [canvasSize.HOT],
    (p, _) => {
      p.resize()
      return p
    },
    'updateSize',
  )


  return { context, gl, canvasSize }
}
