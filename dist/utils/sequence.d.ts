export interface Sequence<T> {
    length: number;
    [n: number]: T;
    [Symbol.iterator](): IterableIterator<T>;
}
export declare type Collection<T> = Sequence<T> | T[] | {
    [key: string]: T;
};
export declare function pickRandom<T>(arr: Sequence<T>): T;
export declare function doTimes(fn: (i: number) => void, count: number): void;
export declare function times<T>(fn: (i: number) => T, count: number, res?: T[]): T[];
export declare function zip<A, B, C>(fn: (a: A, b: B) => C, as: Sequence<A>, bs: Sequence<B>, res?: Sequence<C>): C[];
export declare function flatten<T>(array: Sequence<T>[], res?: T[]): T[];
export declare function mapcat<A, B>(fn: (a: A) => Sequence<B>, array: Sequence<A>, res?: Sequence<B>[]): B[];
export declare const flatMap: typeof mapcat;
export declare function shuffle<T>(arr: T[]): T[];
export declare function map<A, B>(fn: (val: A, key: string) => B, coll: {
    [key: string]: A;
}, result?: {
    [key: string]: B;
}): {
    [key: string]: B;
};
export declare function map<A, B>(fn: (val: A, key: number) => B, coll: Sequence<A> | A[], result?: B[]): B[];
export declare function each<A>(fn: (val: A, key?: any) => any, coll: Collection<A>): void;
