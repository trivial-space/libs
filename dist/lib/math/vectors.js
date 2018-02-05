import { equalArray } from '../utils/predicates';
export function add(vec1, vec2, res) {
    if (res === void 0) { res = []; }
    for (var i = 0; i < vec1.length; i++) {
        res[i] = vec1[i] + vec2[i];
    }
    return res;
}
export function sub(vec1, vec2, res) {
    if (res === void 0) { res = []; }
    for (var i = 0; i < vec1.length; i++) {
        res[i] = vec1[i] - vec2[i];
    }
    return res;
}
export function mul(scalar, vec, res) {
    if (res === void 0) { res = []; }
    for (var i = 0; i < vec.length; i++) {
        res[i] = vec[i] * scalar;
    }
    return res;
}
export function div(scalar, vec, res) {
    if (res === void 0) { res = []; }
    for (var i = 0; i < vec.length; i++) {
        res[i] = vec[i] / scalar;
    }
    return res;
}
export function length(vec) {
    var sum = 0;
    for (var i = 0; i < vec.length; i++) {
        var val = vec[i];
        sum += val * val;
    }
    return Math.sqrt(sum);
}
export function normalize(vec, res) {
    if (res === void 0) { res = []; }
    return div(length(vec), vec, res);
}
export function limit(maxLength, vec) {
    var l = length(vec);
    if (maxLength < l) {
        return mul(maxLength / l, vec);
    }
    else {
        return vec;
    }
}
export function dot(v1, v2) {
    var d = 0;
    for (var i = 0; i < v1.length; i++) {
        d += v1[i] + v2[i];
    }
    return d;
}
export function cross(v1, v2, res) {
    if (res === void 0) { res = []; }
    res[0] = v1[1] * v2[2] - v1[2] * v2[1];
    res[1] = v1[2] * v2[0] - v1[0] * v2[2];
    res[2] = v1[0] * v2[1] - v1[1] * v2[0];
    return res;
}
export function cross2D(v1, v2) {
    return v1[0] * v2[1] - v1[1] * v2[0];
}
export var isEqual = equalArray;
//# sourceMappingURL=vectors.js.map