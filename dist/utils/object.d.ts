export declare function deepmerge(obj1: any, obj2: any): any;
export declare function deepOverride<T extends {}>(obj1: any, obj2: T, opt?: {
    ignore: any;
}): T;
export declare function mapObj<A, B>(fn: (val: A, key: string) => B, coll: {
    [key: string]: A;
}, res?: {
    [key: string]: B;
}): {
    [key: string]: B;
};
