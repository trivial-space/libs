import { GLVec, GLMat } from './gl-matrix';
export declare function planeFromNormalAndCoplanarPoint(n: GLVec, point: GLVec): GLVec;
export declare function planeFromThreeCoplanarPoints(p1: GLVec, p2: GLVec, p3: GLVec): GLVec;
export declare function normalFromThreeCoplanarPoints(p1: GLVec, p2: GLVec, p3: GLVec): GLVec;
export declare function mirrorMatrixFromPlane(plane: GLVec): GLMat;
export declare function getYawQuat(quat: GLVec, rotYAngle: number): GLVec;
export declare function getPitchQuat(quat: GLVec, rotXAngle: number): GLVec;
export declare function getRollQuat(quat: GLVec, rotZAngle: number): GLVec;
