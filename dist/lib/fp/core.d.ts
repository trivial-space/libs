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
