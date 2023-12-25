export function randInt(int) {
    return Math.floor(Math.random() * int);
}
export function randIntInRange(from, to) {
    return randInt(to - from) + from;
}
/**
 * @returns number between [0, 1] with a normal distribution arround 0.5
 */
export function normalRand01() {
    return (Math.random() + Math.random() + Math.random()) / 3;
}
/**
 * @returns number between [-1, 1] with a normal distribution arround 0.5
 */
export function normalRand11() {
    return (Math.random() + Math.random() + Math.random()) / 1.5 - 1;
}
//# sourceMappingURL=random.js.map