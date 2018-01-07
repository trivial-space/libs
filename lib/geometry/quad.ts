import { Edge, lerpVecs } from './primitives'


export type Quad = [number[], number[], number[], number[]]


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


export function divideHorizontal(leftRatio: number, rightRatio: number, [v1, v2, v3, v4]: Quad): Quad[] {
	const v11 = lerpVecs(leftRatio, v1, v4)
	const v22 = lerpVecs(rightRatio, v2, v3)
	return [[v1, v2, v22, v11], [v11, v22, v3, v4]]
}


export function divideVertical(topRatio: number, bottomRatio: number, [v1, v2, v3, v4]: Quad): Quad[] {
	const v11 = lerpVecs(topRatio, v1, v2)
	const v44 = lerpVecs(bottomRatio, v4, v3)
	return [[v1, v11, v44, v4], [v11, v2, v3, v44]]
}
