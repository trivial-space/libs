import {lerp} from '../math/core'


export type ColorRGBA = [number, number, number, number]
export type ColorRGB = [number, number, number]


export const BLACK = [0, 0, 0, 255]

export const WHITE = [255, 255, 255, 255]


export function mixColors(
  [r1, g1, b1, a1]: ColorRGBA,
  [r2, g2, b2, a2]: ColorRGBA
): ColorRGBA {

  const step = a2 / 255.0
  const r = Math.floor(lerp(r1, r2, step))
  const g = Math.floor(lerp(g1, g2, step))
  const b = Math.floor(lerp(b1, b2, step))
  return [r, g, b, a1]
}


export function grey(
  scale: number,
  alpha: number
): ColorRGBA {

  if (alpha == null) {
    alpha = 255
  }
  return [scale, scale, scale, alpha]
}


export function colorRgbaToCSS(
  [r, g, b, a]: ColorRGBA
): string {

  return "rgba(" + r + ", " + g + ", " + b + ", " + (a / 255) + ")"
}
