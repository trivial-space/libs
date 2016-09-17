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
//# sourceMappingURL=colors.js.map