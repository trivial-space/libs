/// <reference types="gl-matrix" />
import { vec3, vec4, mat4, quat } from 'gl-matrix';
export declare type GLVec3 = vec3 | number[];
export declare type GLVec4 = vec4 | number[];
export declare type GLQuat = quat | number[];
export declare function planeFromNormalAndCoplanarPoint(n: GLVec3, point: GLVec3): vec4;
export declare function planeFromThreeCoplanarPoints(p1: GLVec3, p2: GLVec3, p3: GLVec3): vec4;
export declare function normalFromThreeCoplanarPoints(p1: GLVec3, p2: GLVec3, p3: GLVec3): vec3;
export declare function mirrorMatrixFromPlane(plane: GLVec4): mat4;
export declare function getYawQuat(quat: GLQuat, rotYAngle: number): GLQuat;
export declare function getPitchQuat(quat: GLQuat, rotXAngle: number): GLQuat;
export declare function getRollQuat(quat: GLQuat, rotZAngle: number): GLQuat;
