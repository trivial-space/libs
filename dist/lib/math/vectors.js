import { equalArray } from '../utils/predicates';
export function add(vec1, vec2) {
    var results = [];
    for (var i = 0; i < vec1.length; i++) {
        results[i] = vec1[i] + vec2[i];
    }
    return results;
}
export function sub(vec1, vec2) {
    var results = [];
    for (var i = 0; i < vec1.length; i++) {
        results[i] = vec1[i] - vec2[i];
    }
    return results;
}
export function mul(scalar, vec) {
    var results = [];
    for (var i = 0; i < vec.length; i++) {
        results[i] = vec[i] * scalar;
    }
    return results;
}
export function div(scalar, vec) {
    var results = [];
    for (var i = 0; i < vec.length; i++) {
        results[i] = vec[i] / scalar;
    }
    return results;
}
export function length(vec) {
    var sum = 0;
    for (var i = 0; i < vec.length; i++) {
        var val = vec[i];
        sum += val * val;
    }
    return Math.sqrt(sum);
}
export function normalize(vec) {
    return div(length(vec), vec);
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
export var isEqual = equalArray;
//# sourceMappingURL=vectors.js.map