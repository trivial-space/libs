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
	fn: (a: A) => B[],
	array: Sequence<A>,
	res: Sequence<B>[] = [],
): B[] {
	return flatten(map(fn, array, res))
}

export const flatMap = mapcat

export function shuffle<T>(arr: T[]): T[] {
	const shuffled: T[] = []

	for (let i = 0; i < arr.length; i++) {
		const j = randIntInRange(i, arr.length)
		const temp = shuffled[i] !== undefined ? shuffled[i] : arr[i]
		shuffled[i] = shuffled[j] !== undefined ? shuffled[j] : arr[j]
		shuffled[j] = temp
	}

	return shuffled
}

export function map<A, B>(
	fn: (val: A, key: string) => B,
	coll: {
		[key: string]: A
	},
	result?: {
		[key: string]: B
	},
): { [key: string]: B }
export function map<A, B>(
	fn: (val: A, key: number) => B,
	coll: Sequence<A> | A[],
	result?: B[],
): B[]
export function map<A, B>(
	fn: (val: A, key: any) => B,
	coll: Collection<A>,
	result?: Collection<B>,
): Collection<B> {
	if (Array.isArray(coll)) {
		return coll.map(fn)
	} else if (Symbol.iterator in coll) {
		const res = (result as Sequence<B>) || []
		for (let i = 0; i < (coll as Sequence<A>).length; i++) {
			res[i] = fn((coll as Sequence<A>)[i], i)
		}
		return res
	} else {
		const obj = (result as { [key: string]: B }) || {}
		for (const key in coll) {
			obj[key] = fn((coll as any)[key], key)
		}
		return obj
	}
}

export function each<A>(
	fn: (val: A, key?: any) => any,
	coll: Collection<A>,
): void {
	for (const key in coll) {
		fn((coll as any)[key], key)
	}
}
