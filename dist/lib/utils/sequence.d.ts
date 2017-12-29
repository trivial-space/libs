export declare function pickRandom<T>(arr: T[]): T;
export declare function doTimes(fn: (i: number) => void, count: number): void;
export declare function times<T>(fn: (i: number) => T, count: number): T[];
export declare function zip<A, B, C>(fn: (a: A, b: B) => C, as: A[], bs: B[]): C[];
export declare function flatten<T>(array: T[][]): T[];
export declare function mapcat<A, B>(fn: (a: A) => B[], array: A[]): B[];
export declare function shuffle<T>(arr: T[]): T[];
