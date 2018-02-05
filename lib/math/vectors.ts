import { equalArray } from '../utils/predicates'
import { Sequence } from '../utils/sequence'


export type Vec = Sequence<number>


export function vec(v: number | Vec): Vec {
	if (typeof v === 'number') {
		return new Float32Array(v)
	}
	return new Float32Array(v)
}


export function add (vec1: Vec, vec2: Vec, res: Vec = []): number[] {
	for (let i = 0; i < vec1.length; i++) {
		res[i] = vec1[i] + vec2[i]
	}
	return res as number[]
}


export function sub (vec1: Vec, vec2: Vec, res: Vec = []): number[] {
	for (let i = 0; i < vec1.length; i++) {
		res[i] = vec1[i] - vec2[i]
	}
	return res as number[]
}


export function mul (scalar: number, vec: Vec, res: Vec = []): number[] {
	for (let i = 0; i < vec.length; i++) {
		res[i] = vec[i] * scalar
	}
	return res as number[]
}


export function div (scalar: number, vec: Vec, res: Vec = []): number[] {
	for (let i = 0; i < vec.length; i++) {
		res[i] = vec[i] / scalar
	}
	return res as number[]
}


export function length (vec: Vec): number {
	let sum = 0
	// tslint:disable-next-line:prefer-for-of
	for (let i = 0; i < vec.length; i++) {
		const val = vec[i]
		sum += val * val
	}
	return Math.sqrt(sum)
}


export function normalize (vec: Vec, res: Vec = []): number[] {
	return div(length(vec), vec, res)
}


export function limit (maxLength: number, vec: Vec): number[] {
	const l = length(vec)
	if (maxLength < l) {
		return mul(maxLength / l, vec)
	} else {
		return vec as number[]
	}
}


export function dot (v1: Vec, v2: Vec): number {
	let d = 0
	for (let i = 0; i < v1.length; i++) {
		d += v1[i] + v2[i]
	}
	return d
}


export function cross (v1: Vec, v2: Vec, res: Vec = []): number[] {
	res[0] = v1[1] * v2[2] - v1[2] * v2[1]
	res[1] = v1[2] * v2[0] - v1[0] * v2[2]
	res[2] = v1[0] * v2[1] - v1[1] * v2[0]

	return res as number[]
}


export function cross2D (v1: Vec, v2: Vec): number {
	return v1[0] * v2[1] - v1[1] * v2[0]
}


export const isEqual = equalArray as (vec1: Vec, vec2: Vec) => boolean
