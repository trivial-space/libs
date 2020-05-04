import { Vec } from './vectors';
/**
 * @param radius distance from origin
 * @param angle counter clockwise
 */
export declare function polarCoord(radius: number, angle: number): Vec;
export declare function cartesianToPolar2D(v: Vec): Vec;
export declare function polarToCartesian2D([r, phi]: Vec): Vec;
/**
 * Sphere coordinate vector.
 *
 * Angles rotate counterclockwise. Sphere coordinate [1, 0, 0] corresponds to cartesian coord [0, 0, 1].
 *
 * @param radius distance from origin
 * @param angleY polar angle, rotating around y axis, 0 - PI (0° - 180°)
 * @param angleZ azimuth angle, rotating around z axis, 0 - 2*PI (0° - 360°)
 */
export declare function sphereCoord(radius: number, angleY: number, angleZ: number): Vec;
export declare function cartesianToSphere3D([x, y, z]: Vec): Vec;
export declare function sphereToCartesian3D(vec: Vec): Vec;
