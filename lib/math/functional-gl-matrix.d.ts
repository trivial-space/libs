import * as glMatrix from 'gl-matrix';
export declare const fvec3: {
    add: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    subtract: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    sub: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    multiply: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    mul: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    divide: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    div: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    ceil: (a: glMatrix.GLMat) => glMatrix.GLMat;
    floor: (a: glMatrix.GLMat) => glMatrix.GLMat;
    round: (a: glMatrix.GLMat) => glMatrix.GLMat;
    min: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    max: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
    scale: (a: glMatrix.GLMat, b: number) => glMatrix.GLMat;
    scaleAndAdd: (a: glMatrix.GLMat, b: glMatrix.GLMat, s: number) => glMatrix.GLMat;
    inverse: (a: glMatrix.GLMat) => glMatrix.GLMat;
    normalize: (a: glMatrix.GLMat) => glMatrix.GLMat;
    cross: (a: glMatrix.GLMat, b: glMatrix.GLMat) => glMatrix.GLMat;
};
