import { equalArray } from '../utils/predicates'

export type Vec = number[] | Float32Array


export function add (vec1: Vec, vec2: Vec): number[] {
	const results: number[] = []
	for (let i = 0; i < vec1.length; i++) {
		results[i] = vec1[i] + vec2[i]
	}
	return results
}


export function sub (vec1: Vec, vec2: Vec): number[] {
	const results: number[] = []
	for (let i = 0; i < vec1.length; i++) {
		results[i] = vec1[i] - vec2[i]
	}
	return results
}


export function mul (scalar: number, vec: Vec): number[] {
	const results: number[] = []
	for (let i = 0; i < vec.length; i++) {
		results[i] = vec[i] * scalar
	}
	return results
}


export function div (scalar: number, vec: Vec): number[] {
	const results: number[] = []
	for (let i = 0; i < vec.length; i++) {
		results[i] = vec[i] / scalar
	}
	return results
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


export function normalize (vec: Vec): number[] {
	return div(length(vec), vec)
}


export function limit (maxLength: number, vec: Vec): Vec {
	const l = length(vec)
	if (maxLength < l) {
		return mul(maxLength / l, vec)
	} else {
		return vec
	}
}


export function dot (v1: Vec, v2: Vec): number {
	let d = 0
	for (let i = 0; i < v1.length; i++) {
		d += v1[i] + v2[i]
	}
	return d
}


export function cross (v1: Vec, v2: Vec): number[] {
	return [
		v1[1] * v2[2] - v1[2] * v2[1],
		v1[2] * v2[0] - v1[0] * v2[2],
		v1[0] * v2[1] - v1[1] * v2[0]
	]
}


export const isEqual = equalArray as (vec1: Vec, vec2: Vec) => boolean
