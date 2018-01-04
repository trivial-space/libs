import { lerp } from '../math/core'


export type ColorRGBA = [number, number, number, number]
export type ColorRGB = [number, number, number]
export type Color = ColorRGB | ColorRGBA


export const BLACK = [0, 0, 0, 255]

export const WHITE = [255, 255, 255, 255]


export function mixColors (
	[r1, g1, b1, a1]: ColorRGBA,
	[r2, g2, b2, a2]: ColorRGBA
): ColorRGBA {

	const step = a2 / 255
	const r = Math.floor(lerp(step, r1, r2))
	const g = Math.floor(lerp(step, g1, g2))
	const b = Math.floor(lerp(step, b1, b2))
	return [r, g, b, a1]
}


export function grey (
	scale: number,
	alpha: number
): ColorRGBA {

	if (alpha == null) {
		alpha = 255
	}
	return [scale, scale, scale, alpha]
}


export function colorRgbaToCSS (
	[r, g, b, a]: ColorRGBA
): string {

	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (a / 255) + ')'
}


export function intToFloat (color: Color): Color {
	return color.map(v => v / 255) as Color
}


export function floatToInt (color: Color): Color {
	return color.map(v => Math.floor(v * 255)) as Color
}


export function hexToRgb (hex: number): ColorRGB {
	hex = Math.floor(hex)

	const r = (hex >> 16 & 255),
		g = (hex >> 8 & 255),
		b = (hex & 255)

	return [r, g, b]
}


export function hexStringToRgb (s: string): ColorRGB {
	const a = s.split('#')
	return hexToRgb(parseInt(a[a.length - 1], 16))
}
