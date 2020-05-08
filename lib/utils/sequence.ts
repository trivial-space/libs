import { randInt, randIntInRange } from '../math/random'

export interface Sequence<T> {
	length: number
	[n: number]: T
	[Symbol.iterator](): IterableIterator<T>
}

export type Collection<T> = Sequence<T> | T[] | { [key: string]: T }

export function pickRandom<T>(arr: Sequence<T>): T {
	return arr[randInt(arr.length)]
}

export function doTimes(fn: (i: number) => void, count: number): void {
	for (let i = 0; i < count; i++) {
		fn(i)
	}
}

export function times<T>(
	fn: (i: number) => T,
	count: number,
	res: T[] = [],
): T[] {
	for (let i = 0; i < count; i++) {
		res[i] = fn(i)
	}
	return res
}

export function zip<A, B, C>(
	fn: (a: A, b: B) => C,
	as: Sequence<A>,
	bs: Sequence<B>,
	res: Sequence<C> = [],
): C[] {
	const length = Math.min(as.length, bs.length)
	for (let i = 0; i < length; i++) {
		res[i] = fn(as[i], bs[i])
	}
	return res as C[]
}

export function flatten<T>(array: Sequence<T>[], res: T[] = []): T[] {
	for (const subarray of array) {
		const currentLength = res.length
		for (let i = 0; i < subarray.length; i++) {
			res[i + currentLength] = subarray[i]
		}
	}
	return res
}

export function mapcat<A, B>(
	fn: (a: A) => Sequence<B>,
	array: Sequence<A>,
	res: Sequence<B>[] = [],
): B[] {
	return flatten(map(fn, array, res))
}

export const flatMap = mapcat

export function reverse<T>(arr: Sequence<T>, res: T[] = []): T[] {
	for (let i = 0; i < arr.length; i++) {
		res[i] = arr[arr.length - 1 - i]
	}

	return res
}

export function shuffle<T>(arr: Sequence<T>, res: T[] = []): T[] {
	for (let i = 0; i < arr.length; i++) {
		const j = randIntInRange(i, arr.length)
		const temp = res[i] !== undefined ? res[i] : arr[i]
		res[i] = res[j] !== undefined ? res[j] : arr[j]
		res[j] = temp
	}

	return res
}

export function map<A, B>(
	fn: (val: A, key: number) => B,
	coll: Sequence<A>,
	res: B[] = [],
): B[] {
	for (let i = 0; i < coll.length; i++) {
		res[i] = fn(coll[i], i)
	}
	return res
}

export function each<A>(
	fn: (val: A, key?: any) => any,
	coll: Collection<A>,
): void {
	for (const key in coll) {
		fn((coll as any)[key], key)
	}
}

export function reduce<A, B>(
	fn: (sum: B, item: A) => B,
	start: B,
	arr: Sequence<A>,
): B {
	for (let i = 0; i < arr.length; i++) {
		start = fn(start, arr[i])
	}
	return start
}

export function fold<T>(fn: (sum: T, item: T) => T, arr: Sequence<T>): T {
	const [start, ...rest] = arr
	return reduce(fn, start, rest)
}
