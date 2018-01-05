import { Edge } from './primitives'


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
