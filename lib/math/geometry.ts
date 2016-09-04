import {Vec, Mat, vec3, fvec3, vec4, mat4} from './gl-matrix'


export function planeFromNormalAndCoplanarPoint(
  n: Vec,
  point: Vec
): Vec {
  const d = -vec3.dot(n, point)
  return vec4.fromValues(n[0], n[1], n[2], d)
}


export function planeFromThreeCoplanarPoints(
  p1: Vec,
  p2: Vec,
  p3: Vec
): Vec {
  return planeFromNormalAndCoplanarPoint(
    normalFromThreeCoplanarPoints(p1, p2, p3), p1
  )
}


export function normalFromThreeCoplanarPoints(
  p1: Vec,
  p2: Vec,
  p3: Vec
): Vec {
  const n = fvec3.cross(fvec3.sub(p3, p2), fvec3.sub(p1, p2))
  return vec3.normalize(n, n)
}


/*            | 1-2Nx2   -2NxNy  -2NxNz  -2NxD |
Mreflection = |  -2NxNy 1-2Ny2   -2NyNz  -2NyD |
              |  -2NxNz  -2NyNz 1-2Nz2   -2NzD |
              |    0       0       0       1   |
http://khayyam.kaplinski.com/2011/09/reflective-water-with-glsl-part-i.html

              mat.m._00 = 1-2*a*a;	mat.m._01 = -2*a*b;	mat.m._02 = -2*a*c;	mat.m._03 = -2*a*d;
              mat.m._10 = -2*a*b; mat.m._11 = 1-2*b*b;	mat.m._12 = -2*b*c;	mat.m._13 = -2*b*d;
              mat.m._20 = -2*a*c;	mat.m._21 = -2*b*c;	mat.m._22 = 1-2*c*c;	mat.m._23 = -2*c*d;
              mat.m._30 = 0.0f;	mat.m._31 = 0.0f;	mat.m._32 = 0.0f;	mat.m._33 = 1.0f;
https://www.opengl.org/discussion_boards/showthread.php/147784-Mirror-Matrices
*/

export function mirrorMatrixFromPlane(plane: Vec): Mat {
  let [a, b, c, d] = plane as number[]

  return mat4.fromValues(
    1-2*a*a, -2*a*b, -2*a*c, -2*a*d,
    -2*b*a, 1-2*b*b, -2*b*c, -2*b*d,
    -2*c*a, -2*c*b, 1-2*c*c, -2*c*d,
    0, 0, 0, 1
  )

}
