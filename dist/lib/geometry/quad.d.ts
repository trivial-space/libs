import { Edge } from './primitives';
import { Vec } from '../math/vectors';
export declare type Quad = [Vec, Vec, Vec, Vec];
export declare function top(q: Quad): Edge;
export declare function right(q: Quad): Edge;
export declare function bottom(q: Quad): Edge;
export declare function left(q: Quad): Edge;
export declare function combineEdges(e1: Edge, e2: Edge): Quad;
export declare function extrudeTop(direction: Vec, edge: Edge): Quad;
export declare function extrudeRight(direction: Vec, edge: Edge): Quad;
export declare function extrudeBottom(direction: Vec, edge: Edge): Quad;
export declare function extrudeLeft(direction: Vec, edge: Edge): Quad;
export declare function divideHorizontal(leftRatio: number, rightRatio: number, [v1, v2, v3, v4]: Quad): Quad[];
export declare function divideVertical(topRatio: number, bottomRatio: number, [v1, v2, v3, v4]: Quad): Quad[];
export declare const quadTriangles: number[][];
export declare function triangulate(quadCount: number): number[][];
