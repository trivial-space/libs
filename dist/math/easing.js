/**
 * various easing functions.
 *
 * see https://easings.net/
 */
export function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
}
export function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}
export function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}
//# sourceMappingURL=easing.js.map