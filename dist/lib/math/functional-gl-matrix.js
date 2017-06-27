import * as glMatrix from 'gl-matrix';
var v3 = glMatrix.vec3;
export var fvec3 = {
    add: function (a, b) { return v3.add(v3.create(), a, b); },
    subtract: function (a, b) { return v3.subtract(v3.create(), a, b); },
    sub: function (a, b) { return v3.sub(v3.create(), a, b); },
    multiply: function (a, b) { return v3.multiply(v3.create(), a, b); },
    mul: function (a, b) { return v3.mul(v3.create(), a, b); },
    divide: function (a, b) { return v3.divide(v3.create(), a, b); },
    div: function (a, b) { return v3.div(v3.create(), a, b); },
    ceil: function (a) { return v3.ceil(v3.create(), a); },
    floor: function (a) { return v3.floor(v3.create(), a); },
    round: function (a) { return v3.round(v3.create(), a); },
    min: function (a, b) { return v3.min(v3.create(), a, b); },
    max: function (a, b) { return v3.max(v3.create(), a, b); },
    scale: function (a, b) { return v3.scale(v3.create(), a, b); },
    scaleAndAdd: function (a, b, s) { return v3.scaleAndAdd(v3.create(), a, b, s); },
    inverse: function (a) { return v3.inverse(v3.create(), a); },
    normalize: function (a) { return v3.normalize(v3.create(), a); },
    cross: function (a, b) { return v3.cross(v3.create(), a, b); }
};
//# sourceMappingURL=functional-gl-matrix.js.map