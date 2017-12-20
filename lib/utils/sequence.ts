import { randInt } from '../math/random'


export function pickRandom<T>(arr: T[]): T {
	return arr[randInt(arr.length)]
}


export function doTimes (
	fn: (i: number) => void,
	count: number
): void {
	for (let i = 0; i < count; i++) { fn(i) }
}


export function yieldTimes<T>(
	fn: (i: number) => T,
	count: number
): T[] {
	const arr: T[] = []
	for (let i = 0; i < count; i++) { arr.push(fn(i)) }
	return arr
}


export function zip<A, B, C>(fn: (a: A, b: B) => C, as: A[], bs: B[]): C[] {
	const length = Math.min(as.length, bs.length)
	const result: C[] = []
	for (let i = 0; i < length; i++) {
		result.push(fn(as[i], bs[i]))
	}
	return result
}


export function flatten<T>(array: T[][]): T[] {
	const results: T[] = []

	for (const subarray of array) {
		for (const el of subarray) {
			results.push(el)
		}
	}
	return results
}


export function mapcat<A, B>(fn: (a: A) => B[], array: A[]): B[] {
	return flatten(array.map(fn))
}
