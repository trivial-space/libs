import { Vec } from './vectors';
export declare function polarCoord(radius: number, angle: number): Vec;
export declare function cartesianToPolar2D(v: Vec): Vec;
export declare function polarToCartesian2D(coords: Vec): Vec;
export declare function sphereCoord(radius: number, angleY: number, angleZ: number): Vec;
export declare function cartesianToSphere3D(v: Vec): Vec;
export declare function sphereToCartesian3D(vec: Vec): Vec;
