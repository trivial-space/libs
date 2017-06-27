import { sub, length, mul, div } from '../math/vectors';
export function gravity(obj1, obj2, G) {
    var force = sub(obj1.position, obj2.position);
    var distance = length(force);
    if (!distance) {
        return force;
    }
    else {
        var m = (G * obj1.mass * obj2.mass) / (distance * distance);
        return mul(div(force, distance), m);
    }
}
export function drag(obj, C) {
    var dragVec = obj.velocity;
    var speed = length(dragVec);
    if (!speed) {
        return dragVec;
    }
    else {
        var dragMag = C * speed * speed * -1;
        return mul(div(dragVec, speed), dragMag);
    }
}
//# sourceMappingURL=core.js.map