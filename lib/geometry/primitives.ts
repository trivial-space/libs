import { zip } from '../utils/sequence'
import { partial } from '../fp/core'
import { lerp } from '../math/core'
import { Vec, add } from 'math/vectors'


export type Geometry = number[][]

export type Edge = [number[], number[]]


export function interpolate (
	fn: (step: number, start: number, end: number) => number,
	step: number, start: number[], end: number[]
) {
	return zip(partial(fn, step), start, end)
}


export const lerpVecs = partial(interpolate, lerp)


export function split (part: number, [v1, v2]: Edge): Edge[] {
	const p = lerpVecs(part, v1, v2)
	return [[v1, p], [p, v2]]
}


export function translate (vec: Vec, g: Geometry): Geometry {
	return g.map(partial(add, vec))
}
