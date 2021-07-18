export declare type Predicate = (...a: any[]) => boolean;
export declare const and: (p1: Predicate, p2: Predicate) => Predicate;
export declare const not: (p: Predicate) => Predicate;
export declare const notEmpty: Predicate;
export declare const unequal: Predicate;
export declare const equal: Predicate;
export declare function equalArray(arr1?: any[], arr2?: any[]): boolean;
export declare function equalObject(obj1: {
    [key: string]: any;
}, obj2?: {
    [key: string]: any;
}): boolean;
