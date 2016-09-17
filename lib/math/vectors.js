export function add(vec1, vec2) {
    const results = [];
    for (let i = 0; i < vec1.length; i++) {
        results[i] = vec1[i] + vec2[i];
    }
    return results;
}
export function addScalar(vec, scalar) {
    const results = [];
    for (let i = 0; i < vec.length; i++) {
        results[i] = vec[i] + scalar;
    }
    return results;
}
export function sub(vec1, vec2) {
    const results = [];
    for (let i = 0; i < vec1.length; i++) {
        results[i] = vec1[i] - vec2[i];
    }
    return results;
}
export function subScalar(vec, scalar) {
    const results = [];
    for (let i = 0; i < vec.length; i++) {
        results[i] = vec[i] - scalar;
    }
    return results;
}
export function mul(vec, scalar) {
    const results = [];
    for (let i = 0; i < vec.length; i++) {
        results[i] = vec[i] * scalar;
    }
    return results;
}
export function div(vec, scalar) {
    if (scalar) {
        const results = [];
        for (let i = 0; i < vec.length; i++) {
            results[i] = vec[i] / scalar;
        }
        return results;
    }
}
export function length(vec) {
    let sum = 0;
    for (let i = 0; i < vec.length; i++) {
        const val = vec[i];
        sum += val * val;
    }
    return Math.sqrt(sum);
}
export function normalize(vec) {
    return div(vec, length(vec));
}
export function limit(vec, maxLenght) {
    if (maxLenght < length(vec)) {
        return mul(normalize(vec), maxLenght);
    }
    else {
        return vec;
    }
}
export function isEqual(vec1, vec2) {
    if (vec1.length != vec2.length)
        return false;
    for (let i = 0; i < vec1.length; i++) {
        if (vec1[i] !== vec2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=vectors.js.map