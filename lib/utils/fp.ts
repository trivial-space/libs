export function curry<A, B, C>(fn: (a: A, b: B) => C) {

	function curried(a: A, b: B): C
	function curried(a: A): (b: B) => C
	function curried(a: A, b?: B) {
		if (typeof b !== 'undefined') return fn(a, b)
		return (b: B) => fn(a, b)
	}
	return curried
}


export function partial<A, B>(fn: (a: A) => B, a: A): () => B
export function partial<A, B, C>(fn: (a: A, b: B) => C, a: A): (b: B) => C
export function partial<A, B, C>(fn: (a: A, b: B) => C, a: A, b: B): () => C
export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A ): (b: B, c: C) => D
export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A, b: B): (c: C) => D
export function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A, b: B, c: C): () => D
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A ): (b: B, c: C, d: D) => E
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B): (c: C, d: D) => E
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B, c: C): (d: D) => E
export function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B, c: C, d: D): () => E
export function partial(fn: Function, ...args: any[]) {
	return fn.bind(null, ...args)
}
