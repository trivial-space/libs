export declare function deepmerge(obj1: any, obj2: any): any;
export declare function deepOverride<T>(obj1: T, obj2: any, opt?: {
    ignore: any;
}): T;
export declare function mapObj<A, B>(fn: (val: A, key: string) => B, coll: {
    [key: string]: A;
}, res?: {
    [key: string]: B;
}): {
    [key: string]: B;
};
