import { Edge } from './primitives';
export declare type Quad = [number[], number[], number[], number[]];
export declare function top(q: Quad): Edge;
export declare function right(q: Quad): Edge;
export declare function bottom(q: Quad): Edge;
export declare function left(q: Quad): Edge;
