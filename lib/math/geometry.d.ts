import { Vec } from './vectors';
export declare function planeFromNormalAndCoplanarPoint(n: Vec, point: Vec): number[];
export declare function planeFromThreeCoplanarPoints(p1: Vec, p2: Vec, p3: Vec): number[];
export declare function normalFromThreeCoplanarPoints(p1: Vec, p2: Vec, p3: Vec): number[];
export declare function mirrorMatrixFromPlane(plane: Vec): number[];
export declare function getYawQuat(rotYAngle: number): Vec;
export declare function getPitchQuat(rotXAngle: number): Vec;
export declare function getRollQuat(rotZAngle: number): Vec;
