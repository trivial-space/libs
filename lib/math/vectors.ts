export type Vec = number[] | Float32Array


export function add (vec1: Vec, vec2: Vec): number[] {
	const results: number[] = []
	for (let i = 0; i < vec1.length; i++) {
		results[i] = vec1[i] + vec2[i]
	}
	return results
}


export function addScalar (vec: Vec, scalar: number): number[] {
	const results: number[] = []
	for (let i = 0; i < vec.length; i++) {
		results[i] = vec[i] + scalar
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


export function subScalar (vec: Vec, scalar: number): number[] {
	const results: number[] = []
	for (let i = 0; i < vec.length; i++) {
		results[i] = vec[i] - scalar
	}
	return results
}


export function mul (vec: Vec, scalar: number): number[] {
	const results: number[] = []
	for (let i = 0; i < vec.length; i++) {
		results[i] = vec[i] * scalar
	}
	return results
}


export function div (vec: Vec, scalar: number): number[] {
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
	return div(vec, length(vec))
}


export function limit (vec: Vec, maxLenght: number): Vec {
	if (maxLenght < length(vec)) {
		return mul(normalize(vec), maxLenght)
	} else {
		return vec
	}
}


export function isEqual (vec1: Vec, vec2: Vec): boolean {
	if (vec1.length !== vec2.length) return false
	for (let i = 0; i < vec1.length; i++) {
		if (vec1[i] !== vec2[i]) {
			return false
		}
	}
	return true
}
