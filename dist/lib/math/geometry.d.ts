/// <reference types="gl-matrix" />
import { vec3, vec4, mat4, quat } from 'gl-matrix';
export declare type GLVec3 = vec3 | number[];
export declare type GLVec4 = vec4 | number[];
export declare type GLQuat = quat | number[];
export declare function planeFromNormalAndCoplanarPoint(n: GLVec3, point: GLVec3): vec4;
export declare function planeFromThreeCoplanarPoints(p1: GLVec3, p2: GLVec3, p3: GLVec3): vec4;
export declare function normalFromThreeCoplanarPoints(p1: GLVec3, p2: GLVec3, p3: GLVec3): vec3;
export declare function mirrorMatrixFromPlane(plane: GLVec4): mat4;
export declare function getYawQuat(quat: quat | number[], rotYAngle: number): quat;
export declare function getPitchQuat(quat: quat | number[], rotXAngle: number): quat;
export declare function getRollQuat(quat: quat | number[], rotZAngle: number): quat;
