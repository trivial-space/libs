import { Vec } from '../math/vectors';
/**
 * Clockwise Polygon
 */
export declare type Polygon = Vec[];
export declare type Edge = [Vec, Vec];
export declare function interpolate(fn: (step: number, start: number, end: number) => number, step: number, start: Vec, end: Vec): number[];
export declare const lerpVecs: (b: number, c: Vec, d: Vec) => number[];
export declare function split(part: number, [v1, v2]: Edge): Edge[];
export declare function translate(vec: Vec, e: Edge): Edge;
export declare function translate(vec: Vec, p: Polygon): Polygon;
export declare function rotateLeftInPlace(p: Polygon): Polygon;
export declare function rotateRightInPlace(p: Polygon): Polygon;
export declare function rotateLeft(p: Polygon): Polygon;
export declare function rotateRight(p: Polygon): Polygon;
/**
 * Unit normal on a clockwise polygon.
 */
export declare function normal(p: Polygon): Vec;
/**
 * Returns a positive number if v is right of e,
 * a negative number, iv v ist left of e, and 0, if v is colinear to e.
 * @param e Edge
 * @param v Point
 */
export declare function side(e: Edge, v: Vec): number;
