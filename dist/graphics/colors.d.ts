export declare type ColorRGBA = [number, number, number, number];
export declare type ColorRGB = [number, number, number];
export declare type Color = ColorRGB | ColorRGBA;
/**
 * @property h hue in range 0 - 1
 * @property s saturation in range 0 - 1
 * @property l lightness in range 0 - 1
 */
export interface HSLColor {
    h: number;
    s: number;
    l: number;
}
export declare const BLACK: number[];
export declare const WHITE: number[];
export declare function mixColors([r1, g1, b1, a1]: ColorRGBA, [r2, g2, b2, a2]: ColorRGBA): ColorRGBA;
export declare function grey(scale: number, alpha?: number): ColorRGBA;
export declare function colorRgbaToCSS([r, g, b, a]: ColorRGBA): string;
export declare function intToFloat(color: Color): Color;
export declare function floatToInt(color: Color): Color;
export declare function hexToRgb(hex: number): ColorRGB;
export declare function rgbToHexString([r, g, b]: Color): string;
export declare function hexStringToRgb(s: string): ColorRGB;
/**
 * @param rgb FloatColor with ranges 0 - 1
 */
export declare function rgbToHSL([r, g, b]: Color): HSLColor;
export declare function hslToRGB({ h, s, l }: HSLColor): number[];
export declare function adjustHue(hue: number): number;
export declare function updateHue(hsl: HSLColor, degree: number): HSLColor;
export declare function updateSaturation(hsl: HSLColor, delta: number): HSLColor;
export declare function updateLightness(hsl: HSLColor, delta: number): HSLColor;
