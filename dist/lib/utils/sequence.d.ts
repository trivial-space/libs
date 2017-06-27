export declare function pickRandom<T>(arr: T[]): T;
export declare function doTimes(count: number, fn: (i: number) => void): void;
export declare function yieldTimes<T>(count: number, fn: (i: number) => T): T[];
export declare function zip<A, B, C>(as: A[], bs: B[], fn: (a: A, b: B) => C): C[];
