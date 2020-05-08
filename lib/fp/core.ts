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
export function partial<A, B, C, D>(
	fn: (a: A, b: B, c: C) => D,
	a: A,
): (b: B, c: C) => D
export function partial<A, B, C, D>(
	fn: (a: A, b: B, c: C) => D,
	a: A,
	b: B,
): (c: C) => D
export function partial<A, B, C, D>(
	fn: (a: A, b: B, c: C) => D,
	a: A,
	b: B,
	c: C,
): () => D
export function partial<A, B, C, D, E>(
	fn: (a: A, b: B, c: C, d: D) => E,
	a: A,
): (b: B, c: C, d: D) => E
export function partial<A, B, C, D, E>(
	fn: (a: A, b: B, c: C, d: D) => E,
	a: A,
	b: B,
): (c: C, d: D) => E
export function partial<A, B, C, D, E>(
	fn: (a: A, b: B, c: C, d: D) => E,
	a: A,
	b: B,
	c: C,
): (d: D) => E
export function partial<A, B, C, D, E>(
	fn: (a: A, b: B, c: C, d: D) => E,
	a: A,
	b: B,
	c: C,
	d: D,
): () => E
export function partial(fn: Function, ...args: any[]) {
	return fn.bind(null, ...args)
}

export function pipe<A extends any[], B, C>(
	fn1: (...args: A) => B,
	fn2: (b: B) => C,
): (...args: A) => C
export function pipe<A extends any[], B, C, D>(
	fn1: (...args: A) => B,
	fn2: (b: B) => C,
	fn3?: (c: C) => D,
): (...args: A) => D
export function pipe<A extends any[], B, C, D, E>(
	fn1: (...args: A) => B,
	fn2: (b: B) => C,
	fn3?: (c: C) => D,
	fn4?: (d: D) => E,
): (...args: A) => C
export function pipe<A extends any[], B, C, D, E, F>(
	fn1: (...args: A) => B,
	fn2: (b: B) => C,
	fn3?: (c: C) => D,
	fn4?: (d: D) => E,
	fn5?: (e: E) => F,
): (...args: A) => F
export function pipe<A extends any[], B, C, D, E, F, G>(
	fn1: (...args: A) => B,
	fn2: (b: B) => C,
	fn3?: (c: C) => D,
	fn4?: (d: D) => E,
	fn5?: (e: E) => F,
	fn6?: (f: F) => G,
): (...args: A) => G
export function pipe(
	fn1: Function,
	fn2: Function,
	fn3?: Function,
	fn4?: Function,
	fn5?: Function,
	fn6?: Function,
) {
	return (...args: any[]) => {
		let res = fn2(fn1(...args))
		if (fn3) {
			res = fn3(res)
		}
		if (fn4) {
			res = fn4(res)
		}
		if (fn5) {
			res = fn5(res)
		}
		if (fn6) {
			res = fn6(res)
		}
		return res
	}
}
