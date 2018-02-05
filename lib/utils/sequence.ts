import { randInt, randIntInRange } from '../math/random'


export type Sequence<T> = {
	length: number
	[n: number]: T
}


export function pickRandom<T>(arr: Sequence<T>): T {
	return arr[randInt(arr.length)]
}


export function doTimes (
	fn: (i: number) => void,
	count: number
): void {
	for (let i = 0; i < count; i++) { fn(i) }
}


export function times<T>(
	fn: (i: number) => T,
	count: number,
	res: T[] = []
): T[] {
	for (let i = 0; i < count; i++) { res[i] = fn(i) }
	return res
}


export function zip<A, B, C>(
	fn: (a: A, b: B) => C,
	as: Sequence<A>,
	bs: Sequence<B>,
	res: Sequence<C> = []
): C[] {
	const length = Math.min(as.length, bs.length)
	for (let i = 0; i < length; i++) {
		res[i] = fn(as[i], bs[i])
	}
	return res as C[]
}


export function flatten<T>(array: T[][], res: T[] = []): T[] {
	for (const subarray of array as Sequence<T>[]) {
		const currentLength = res.length
		for (let i = 0; i < subarray.length; i++) {
			res[i + currentLength] = subarray[i]
		}
	}
	return res
}


export function mapcat<A, B>(fn: (a: A) => B[], array: A[], res: B[] = []): B[] {
	return flatten(array.map(fn), res)
}


export function shuffle<T>(arr: T[]): T[] {
	const shuffled: T[] = []

	for (let i = 0; i < arr.length; i++) {
		const j = randIntInRange(i, arr.length)
		const temp = (shuffled[i] !== undefined) ? shuffled[i] : arr[i]
		shuffled[i] = (shuffled[j] !== undefined) ? shuffled[j] : arr[j]
		shuffled[j] = temp
	}

	return shuffled
}
