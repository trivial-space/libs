export type CompareFn<T> = (parent: T, child: T) => number;
export declare const numericalCompare: CompareFn<number>;
export declare const stringCompare: CompareFn<string>;
