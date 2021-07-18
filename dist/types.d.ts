export declare type Unpacked<T> = T extends (infer U)[] ? U : T extends (...args: any[]) => infer U ? U : T extends Promise<infer U> ? U : T;
export declare type Maybe<T> = T | undefined | null;
export declare type Opt<T> = T | null;
export declare function defined<T>(x: Maybe<T>): x is T;
declare type Falsy = false | 0 | '' | null | undefined;
export declare function truthy<T>(x: T): x is Exclude<T, Falsy>;
export {};
