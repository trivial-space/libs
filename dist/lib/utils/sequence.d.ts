export declare type Sequence<T> = {
    length: number;
    [n: number]: T;
};
export declare function pickRandom<T>(arr: Sequence<T>): T;
export declare function doTimes(fn: (i: number) => void, count: number): void;
export declare function times<T>(fn: (i: number) => T, count: number, res?: T[]): T[];
export declare function zip<A, B, C>(fn: (a: A, b: B) => C, as: Sequence<A>, bs: Sequence<B>, res?: Sequence<C>): C[];
export declare function flatten<T>(array: T[][], res?: T[]): T[];
export declare function mapcat<A, B>(fn: (a: A) => B[], array: A[], res?: B[]): B[];
export declare function shuffle<T>(arr: T[]): T[];
