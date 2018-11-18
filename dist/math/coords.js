import { length } from './vectors';
export function cartesianToPolar2D(v) {
    return [length(v), Math.atan2(v[1], v[0])];
}
export function polarToCartesian2D(coords) {
    const r = coords[0], phi = coords[1];
    return [r * Math.cos(phi), r * Math.sin(phi)];
}
//# sourceMappingURL=coords.js.map