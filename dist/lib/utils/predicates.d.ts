export declare type Predicate1 = (a: any) => boolean;
export declare type Predicate2 = (a: any, b: any) => boolean;
export declare const unequal: Predicate2;
export declare const defined: Predicate1;
export declare const notEmpty: Predicate1;
export declare const and: (p1: Predicate2, p2: Predicate2) => Predicate2;
