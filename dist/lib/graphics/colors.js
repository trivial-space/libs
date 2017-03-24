import { lerp } from '../math/core';
export var BLACK = [0, 0, 0, 255];
export var WHITE = [255, 255, 255, 255];
export function mixColors(_a, _b) {
    var r1 = _a[0], g1 = _a[1], b1 = _a[2], a1 = _a[3];
    var r2 = _b[0], g2 = _b[1], b2 = _b[2], a2 = _b[3];
    var step = a2 / 255.0;
    var r = Math.floor(lerp(r1, r2, step));
    var g = Math.floor(lerp(g1, g2, step));
    var b = Math.floor(lerp(b1, b2, step));
    return [r, g, b, a1];
}
export function grey(scale, alpha) {
    if (alpha == null) {
        alpha = 255;
    }
    return [scale, scale, scale, alpha];
}
export function colorRgbaToCSS(_a) {
    var r = _a[0], g = _a[1], b = _a[2], a = _a[3];
    return "rgba(" + r + ", " + g + ", " + b + ", " + (a / 255) + ")";
}
export function intToFloat(color) {
    return color.map(function (v) { return v / 255; });
}
export function floatToInt(color) {
    return color.map(function (v) { return Math.floor(v * 255); });
}
export function hexToRgb(hex) {
    hex = Math.floor(hex);
    var r = (hex >> 16 & 255), g = (hex >> 8 & 255), b = (hex & 255);
    return [r, g, b];
}
export function hexStringToRgb(s) {
    var a = s.split('#');
    return hexToRgb(parseInt(a[a.length - 1], 16));
}
//# sourceMappingURL=colors.js.map