export declare type ColorRGBA = [number, number, number, number];
export declare type ColorRGB = [number, number, number];
export declare type Color = ColorRGB | ColorRGBA;
/**
 * @property h hue in range 0 - 1
 * @property s saturation in range 0 - 1
 * @property l lightness in range 0 - 1
 */
export interface ColorHSL {
    h: number;
    s: number;
    l: number;
}
/**
 * @param h hue in range 0 - 1
 * @param s saturation in range 0 - 1
 * @param l lightness in range 0 - 1
 */
export declare const hsl: (h: number, s: number, l: number) => ColorHSL;
export declare const BLACK: Color;
export declare const WHITE: ColorRGBA;
export declare function mixColors([r1, g1, b1, a1]: ColorRGBA, [r2, g2, b2, a2]: ColorRGBA): ColorRGBA;
export declare function grey(scale: number, alpha?: number): ColorRGBA;
export declare function colorRgbaToCSS([r, g, b, a]: ColorRGBA): string;
export declare function intToFloat<C extends Color>(color: C): C;
export declare function floatToInt<C extends Color>(color: C): C;
export declare function hexToRgb(hex: number): ColorRGB;
export declare function rgbToHexString([r, g, b]: Color): string;
export declare function hexStringToRgb(s: string): ColorRGB;
/**
 * @param rgb FloatColor with ranges 0 - 1
 */
export declare function rgbToHSL([r, g, b]: Color): ColorHSL;
export declare function hslToRGB({ h, s, l }: ColorHSL): ColorRGB;
export declare function adjustHue(hue: number): number;
export declare function updateHue(hsl: ColorHSL, degree: number): ColorHSL;
export declare function updateSaturation(hsl: ColorHSL, delta: number): ColorHSL;
export declare function updateLightness(hsl: ColorHSL, delta: number): ColorHSL;
