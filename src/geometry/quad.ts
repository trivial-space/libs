import { Vec } from '../math/vectors'
import { flatten, times } from '../utils/sequence'
import { Edge, lerpVecs, rotateLeft, translate } from './primitives'

export type Quad = [Vec, Vec, Vec, Vec]

export function top(q: Quad): Edge {
	return [q[0], q[1]]
}

export function right(q: Quad): Edge {
	return [q[1], q[2]]
}

export function bottom(q: Quad): Edge {
	return [q[2], q[3]]
}

export function left(q: Quad): Edge {
	return [q[3], q[0]]
}

export function combineEdges(e1: Edge, e2: Edge): Quad {
	return e1.concat(rotateLeft(e2)) as Quad
}

export function extrudeTop(direction: Vec, edge: Edge): Quad {
	return combineEdges(translate(direction, edge), edge)
}

export function extrudeRight(direction: Vec, edge: Edge): Quad {
	return rotateLeft(extrudeTop(direction, edge)) as Quad
}

export function extrudeBottom(direction: Vec, edge: Edge): Quad {
	return combineEdges(edge, translate(direction, edge))
}

export function extrudeLeft(direction: Vec, edge: Edge): Quad {
	return rotateLeft(extrudeBottom(direction, edge)) as Quad
}

export function divideHorizontal(
	leftRatio: number,
	rightRatio: number,
	[v1, v2, v3, v4]: Quad,
): Quad[] {
	const v11 = lerpVecs(leftRatio, v1, v4)
	const v22 = lerpVecs(rightRatio, v2, v3)
	return [[v1, v2, v22, v11], [v11, v22, v3, v4]]
}

export function divideVertical(
	topRatio: number,
	bottomRatio: number,
	[v1, v2, v3, v4]: Quad,
): Quad[] {
	const v11 = lerpVecs(topRatio, v1, v2)
	const v44 = lerpVecs(bottomRatio, v4, v3)
	return [[v1, v11, v44, v4], [v11, v2, v3, v44]]
}

// Triangles in WebGL go counter clockwise: https://webglfundamentals.org/webgl/lessons/webgl-3d-orthographic.html
// Make triangles conform stackGL cells specification
export const quadTriangles = [[0, 2, 1], [0, 3, 2]]

export function triangulate(quadCount: number) {
	return flatten(
		times(i => quadTriangles.map(t => t.map(j => 4 * i + j)), quadCount),
	)
}
