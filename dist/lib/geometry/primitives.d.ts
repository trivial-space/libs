import { Vec } from '../math/vectors';
export declare type Geometry = number[][];
export declare type Edge = [number[], number[]];
export declare function interpolate(fn: (step: number, start: number, end: number) => number, step: number, start: number[], end: number[]): number[];
export declare const lerpVecs: (b: number, c: number[], d: number[]) => number[];
export declare function split(part: number, [v1, v2]: Edge): Edge[];
export declare function translate(vec: Vec, g: Edge): Edge;
export declare function translate(vec: Vec, g: Geometry): Geometry;
export declare function rotateLeftInPlace(g: Geometry): Geometry;
export declare function rotateRightInPlace(g: Geometry): Geometry;
export declare function rotateLeft(g: Geometry): Geometry;
export declare function rotateRight(g: Geometry): Geometry;
export declare function normal(g: Geometry): number[];
