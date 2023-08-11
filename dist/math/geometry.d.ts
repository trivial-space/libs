import { Vec } from './vectors.js';
export declare function planeFromNormalAndCoplanarPoint(n: Vec, point: Vec): number[];
export declare function planeFromThreeCoplanarPoints(p1: Vec, p2: Vec, p3: Vec): number[];
export declare function normalFromThreeCoplanarPoints(p1: Vec, p2: Vec, p3: Vec): number[];
export declare function mirrorMatrixFromPlane(plane: Vec): number[];
export declare function getYRotQuat(rotYAngle: number): Vec;
export declare function getXRotQuat(rotXAngle: number): Vec;
export declare function getZRotQuat(rotZAngle: number): Vec;
