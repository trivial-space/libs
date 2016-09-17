import { lerp } from '../math/core';
export const BLACK = [0, 0, 0, 255];
export const WHITE = [255, 255, 255, 255];
export function mixColors([r1, g1, b1, a1], [r2, g2, b2, a2]) {
    const step = a2 / 255.0;
    const r = Math.floor(lerp(r1, r2, step));
    const g = Math.floor(lerp(g1, g2, step));
    const b = Math.floor(lerp(b1, b2, step));
    return [r, g, b, a1];
}
export function grey(scale, alpha) {
    if (alpha == null) {
        alpha = 255;
    }
    return [scale, scale, scale, alpha];
}
export function colorRgbaToCSS([r, g, b, a]) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + (a / 255) + ")";
}
export function intToFloat(color) {
    return color.map(v => v / 255);
}
export function floatToInt(color) {
    return color.map(v => Math.floor(v * 255));
}
export function hexToRgb(hex) {
    hex = Math.floor(hex);
    let r = (hex >> 16 & 255), g = (hex >> 8 & 255), b = (hex & 255);
    return [r, g, b];
}
export function hexStringToRgb(s) {
    const a = s.split('#');
    return hexToRgb(parseInt(a[a.length - 1], 16));
}
//# sourceMappingURL=colors.js.map