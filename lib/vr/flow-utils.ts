import { EntityRef, asyncStreamStart, stream, asyncStream } from 'tvs-flow/dist/lib/utils/entity-reference'
import { WindowSizeState } from '../events/dom'
import { create } from 'tvs-renderer/dist/lib/painter'
import { getContext } from 'tvs-renderer/dist/lib/utils/context'
import { Painter, Shade, Form, Sketch, Layer, GL } from 'tvs-renderer/dist/lib/render-types'
import { unequal } from '../utils/predicates'


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

	const painter = asyncStream<Painter, GL>(
		[gl.HOT],
		(send, gl) => {
			const p = create(gl)
			send(p)
			return p.destroy
		}
	)
	.accept(unequal)

	const canvasSize = stream(
		[canvas.HOT, windowSizeEntity.HOT],
		(canvas: HTMLCanvasElement) => ({
			width: canvas.clientWidth,
			height: canvas.clientHeight
		})
	)

	painter.react(
		[canvasSize.HOT],
		(p, _) => p.resize(),
		'updateSize'
	)

	return { canvas, painter, gl, canvasSize }
}


export function makeShadeEntity (painter: EntityRef<Painter>): EntityRef<Shade> {
	return asyncStream(
		[painter.HOT],
		(send, painter) => {
			const shade = painter.createShade()
			send(shade)
			return shade.destroy
		}
	)
}

export function makeFormEntity (painter: EntityRef<Painter>): EntityRef<Form> {
	return asyncStream(
		[painter.HOT],
		(send, painter) => {
			const form = painter.createForm()
			send(form)
			return form.destroy
		}
	)
}

export function makeSketchEntity (painter: EntityRef<Painter>): EntityRef<Sketch> {
	return asyncStream(
		[painter.HOT],
		(send, painter) => {
			const sketch = painter.createSketch()
			send(sketch)
			return sketch.destroy
		}
	)
}

export function makeFlatSketchEntity (painter: EntityRef<Painter>): EntityRef<Sketch> {
	return asyncStream(
		[painter.HOT],
		(send, painter) => {
			const sketch = painter.createFlatSketch()
			send(sketch)
			return sketch.destroy
		}
	)
}

export function makeStaticLayerEntity (painter: EntityRef<Painter>): EntityRef<Layer> {
	return asyncStream(
		[painter.HOT],
		(send, painter) => {
			const layer = painter.createStaticLayer()
			send(layer)
			return layer.destroy
		}
	)
}

export function makeDrawingLayerEntity (painter: EntityRef<Painter>): EntityRef<Layer> {
	return asyncStream(
		[painter.HOT],
		(send, painter) => {
			const layer = painter.createDrawingLayer()
			send(layer)
			return layer.destroy
		}
	)
}

export function makeEffectLayerEntity (painter: EntityRef<Painter>): EntityRef<Layer> {
	return asyncStream(
		[painter.HOT],
		(send, painter) => {
			const layer = painter.createEffectLayer()
			send(layer)
			return layer.destroy
		}
	)
}
