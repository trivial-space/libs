export declare type Vec = number[] | Float32Array;
export declare function add(vec1: Vec, vec2: Vec): number[];
export declare function sub(vec1: Vec, vec2: Vec): number[];
export declare function mul(scalar: number, vec: Vec): number[];
export declare function div(scalar: number, vec: Vec): number[];
export declare function length(vec: Vec): number;
export declare function normalize(vec: Vec): number[];
export declare function limit(maxLength: number, vec: Vec): Vec;
export declare const isEqual: (vec1: number[] | Float32Array, vec2: number[] | Float32Array) => boolean;
