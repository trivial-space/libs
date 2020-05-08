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
export declare function repeat<T>(count: number, item: T): T[];
export declare function concat<T>(arr: T[], ...arrs: T[][]): T[];
export declare function zip<A, B, C>(fn: (a: A, b: B) => C, as: Sequence<A>, bs: Sequence<B>, res?: Sequence<C>): C[];
export declare function flatten<T>(array: Sequence<T>[], res?: T[]): T[];
export declare function mapcat<A, B>(fn: (a: A) => Sequence<B>, array: Sequence<A>, res?: Sequence<B>[]): B[];
export declare const flatMap: typeof mapcat;
export declare function reverse<T>(arr: Sequence<T>, res?: T[]): T[];
export declare function shuffle<T>(arr: Sequence<T>, res?: T[]): T[];
export declare function map<A, B>(fn: (val: A, key: number) => B, coll: Sequence<A>, res?: B[]): B[];
export declare function each<A>(fn: (val: A, key?: any) => any, coll: Collection<A>): void;
export declare function reduce<A, B>(fn: (sum: B, item: A) => B, start: B, arr: Sequence<A>): B;
export declare function fold<T>(fn: (sum: T, item: T) => T, arr: Sequence<T>): T;
