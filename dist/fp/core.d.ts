export declare function curry<A, B, C>(fn: (a: A, b: B) => C): {
    (a: A, b: B): C;
    (a: A): (b: B) => C;
};
export declare function partial<A, B>(fn: (a: A) => B, a: A): () => B;
export declare function partial<A, B, C>(fn: (a: A, b: B) => C, a: A): (b: B) => C;
export declare function partial<A, B, C>(fn: (a: A, b: B) => C, a: A, b: B): () => C;
export declare function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A): (b: B, c: C) => D;
export declare function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A, b: B): (c: C) => D;
export declare function partial<A, B, C, D>(fn: (a: A, b: B, c: C) => D, a: A, b: B, c: C): () => D;
export declare function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A): (b: B, c: C, d: D) => E;
export declare function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B): (c: C, d: D) => E;
export declare function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B, c: C): (d: D) => E;
export declare function partial<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E, a: A, b: B, c: C, d: D): () => E;
export declare function pipe<A extends any[], B, C>(fn1: (...args: A) => B, fn2: (b: B) => C): (...args: A) => C;
export declare function pipe<A extends any[], B, C, D>(fn1: (...args: A) => B, fn2: (b: B) => C, fn3?: (c: C) => D): (...args: A) => D;
export declare function pipe<A extends any[], B, C, D, E>(fn1: (...args: A) => B, fn2: (b: B) => C, fn3?: (c: C) => D, fn4?: (d: D) => E): (...args: A) => E;
export declare function pipe<A extends any[], B, C, D, E, F>(fn1: (...args: A) => B, fn2: (b: B) => C, fn3?: (c: C) => D, fn4?: (d: D) => E, fn5?: (e: E) => F): (...args: A) => F;
export declare function pipe<A extends any[], B, C, D, E, F, G>(fn1: (...args: A) => B, fn2: (b: B) => C, fn3?: (c: C) => D, fn4?: (d: D) => E, fn5?: (e: E) => F, fn6?: (f: F) => G): (...args: A) => G;
