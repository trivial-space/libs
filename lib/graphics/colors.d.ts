export declare type ColorRGBA = [number, number, number, number];
export declare type ColorRGB = [number, number, number];
export declare type Color = ColorRGB | ColorRGBA;
export declare const BLACK: number[];
export declare const WHITE: number[];
export declare function mixColors([r1, g1, b1, a1]: ColorRGBA, [r2, g2, b2, a2]: ColorRGBA): ColorRGBA;
export declare function grey(scale: number, alpha: number): ColorRGBA;
export declare function colorRgbaToCSS([r, g, b, a]: ColorRGBA): string;
export declare function intToFloat(color: Color): Color;
export declare function floatToInt(color: Color): Color;
export declare function hexToRgb(hex: number): ColorRGB;
export declare function hexStringToRgb(s: string): ColorRGB;