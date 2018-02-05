import { Vec } from '../math/vectors';
export declare type Polygon = Vec[];
export declare type Edge = [Vec, Vec];
export declare function interpolate(fn: (step: number, start: number, end: number) => number, step: number, start: Vec, end: Vec): number[];
export declare const lerpVecs: (b: number, c: {
    [n: number]: number;
    length: number;
}, d: {
    [n: number]: number;
    length: number;
}) => number[];
export declare function split(part: number, [v1, v2]: Edge): Edge[];
export declare function translate(vec: Vec, e: Edge): Edge;
export declare function translate(vec: Vec, p: Polygon): Polygon;
export declare function rotateLeftInPlace(p: Polygon): Polygon;
export declare function rotateRightInPlace(p: Polygon): Polygon;
export declare function rotateLeft(p: Polygon): Polygon;
export declare function rotateRight(p: Polygon): Polygon;
export declare function normal(p: Polygon): Vec;
export declare function side(e: Edge, v: Vec): number;
