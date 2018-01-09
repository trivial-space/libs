import { zip } from '../utils/sequence'
import { partial } from '../fp/core'
import { lerp } from '../math/core'
import { Vec, add, normalize, cross, sub } from '../math/vectors'


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

export function translate (vec: Vec, g: Edge): Edge
export function translate (vec: Vec, g: Geometry): Geometry
export function translate (vec: Vec, g: Geometry): Geometry {
	return g.map(partial(add, vec))
}


export function rotateLeftInPlace (g: Geometry): Geometry {
	g.unshift(g.pop() as number[])
	return g
}


export function rotateRightInPlace (g: Geometry): Geometry {
	g.push(g.shift() as number[])
	return g
}


export function rotateLeft(g: Geometry): Geometry {
	return rotateLeftInPlace(g.concat())
}


export function rotateRight(g: Geometry): Geometry {
	return rotateRightInPlace(g.concat())
}


// computed counter clockwise normal from clockwise geometry
export function normal (g: Geometry): number[] {
	return normalize(cross(sub(g[2], g[0]), sub(g[1], g[0])))
}
