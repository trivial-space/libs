import { partial } from '../fp/core'
import { lerp } from '../math/core'
import { add, cross, cross2D, normalize, sub, Vec } from '../math/vectors'
import { zip } from '../utils/sequence'

/**
 * Clockwise Polygon
 */
export type Polygon = Vec[]

export type Edge = [Vec, Vec]

export function interpolate(
	fn: (step: number, start: number, end: number) => number,
	step: number,
	start: Vec,
	end: Vec,
) {
	return zip(partial(fn, step), start, end)
}

export const lerpVecs = partial(interpolate, lerp)

export function split(part: number, [v1, v2]: Edge): Edge[] {
	const p = lerpVecs(part, v1, v2)
	return [[v1, p], [p, v2]]
}

export function translate(vec: Vec, e: Edge): Edge
export function translate(vec: Vec, p: Polygon): Polygon
export function translate(vec: Vec, p: Polygon): Polygon {
	return p.map(v => add(vec, v))
}

export function rotateLeftInPlace(p: Polygon): Polygon {
	p.unshift(p.pop() as number[])
	return p
}

export function rotateRightInPlace(p: Polygon): Polygon {
	p.push(p.shift() as number[])
	return p
}

export function rotateLeft(p: Polygon): Polygon {
	return rotateLeftInPlace(p.concat())
}

export function rotateRight(p: Polygon): Polygon {
	return rotateRightInPlace(p.concat())
}

/**
 * Unit normal on a clockwise polygon.
 */
export function normal(p: Polygon): Vec {
	return normalize(cross(sub(p[0], p[1]), sub(p[2], p[1])))
}

/**
 * Returns a positive number if v is right of e,
 * a negative number, iv v ist left of e, and 0, if v is colinear to e.
 * @param e Edge
 * @param v Point
 */
export function side(e: Edge, v: Vec) {
	return cross2D(sub(v, e[0]), sub(e[1], e[0]))
}
