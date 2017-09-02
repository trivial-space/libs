export var and = function (p1, p2) {
    return function (a, b) { return p1(a, b) && p2(a, b); };
};
export var not = function (p) {
    return function (a, b) { return !p(a, b); };
};
export var defined = function (a) { return a != null; };
export var notEmpty = function (a) { return a && a.length; };
export var unequal = function (a, b) { return a !== b; };
export var equal = function (a, b) { return a === b; };
export function equalArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
export function equalObject(obj1, obj2) {
    var k1 = Object.keys(obj1);
    var k2 = Object.keys(obj2);
    if (!equalArray(k1, k2)) {
        return false;
    }
    for (var _i = 0, k1_1 = k1; _i < k1_1.length; _i++) {
        var key = k1_1[_i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=predicates.js.map