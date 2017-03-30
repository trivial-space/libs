export var unequal = function (a, b) { return a !== b; };
export var defined = function (a) { return a != null; };
export var notEmpty = function (a) { return a && a.length; };
export var and = function (p1, p2) { return function (a, b) { return p1(a, b) && p2(a, b); }; };
//# sourceMappingURL=predicates.js.map