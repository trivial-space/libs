export const DEG_TO_RAD_FACTOR = Math.PI / 180;
export function sign(num) {
    if (num > 0) {
        return 1;
    }
    else if (num < 0) {
        return -1;
    }
    else {
        return 0;
    }
}
export function lerp(start, end, step) {
    return start + step * (end - start);
}
export function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}
export function randInt(int) {
    return Math.floor(Math.random() * int);
}
export function randIntInRange(from, to) {
    return randInt(to - from) + from;
}
export function normalRand() {
    return (Math.random() + Math.random() + Math.random()) / 3;
}
export function degToRad(degrees) {
    return degrees * DEG_TO_RAD_FACTOR;
}
//# sourceMappingURL=core.js.map