import * as glMatrix from 'gl-matrix';
const v3 = glMatrix.vec3;
export const fvec3 = {
    add: (a, b) => v3.add(v3.create(), a, b),
    subtract: (a, b) => v3.subtract(v3.create(), a, b),
    sub: (a, b) => v3.sub(v3.create(), a, b),
    multiply: (a, b) => v3.multiply(v3.create(), a, b),
    mul: (a, b) => v3.mul(v3.create(), a, b),
    divide: (a, b) => v3.divide(v3.create(), a, b),
    div: (a, b) => v3.div(v3.create(), a, b),
    ceil: (a) => v3.ceil(v3.create(), a),
    floor: (a) => v3.floor(v3.create(), a),
    round: (a) => v3.round(v3.create(), a),
    min: (a, b) => v3.min(v3.create(), a, b),
    max: (a, b) => v3.max(v3.create(), a, b),
    scale: (a, b) => v3.scale(v3.create(), a, b),
    scaleAndAdd: (a, b, s) => v3.scaleAndAdd(v3.create(), a, b, s),
    inverse: (a) => v3.inverse(v3.create(), a),
    normalize: (a) => v3.normalize(v3.create(), a),
    cross: (a, b) => v3.cross(v3.create(), a, b),
};
//# sourceMappingURL=functional-gl-matrix.js.map