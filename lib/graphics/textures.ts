import {tileNoise} from '../math/noise'


function to8Bit(noise) {
  return Math.floor((noise + 1) * 127)
}


export function drawTileNoiseTexture(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number
): void {

  const width = ctx.canvas.width,
        height = ctx.canvas.height,
        noise1 = tileNoise(width, height, startX, startY),
        noise2 = tileNoise(width, height, startX * 2.1, startY * 2.1),
        noise3 = tileNoise(width, height, startX * 4.2, startY * 4.2),
        noise4 = tileNoise(width, height, startX * 8.3, startY * 8.3),
        imgData = ctx.getImageData(0, 0, width, height)

  for (let i = 0; i < noise1.length - 1; i++) {
    let i4 = i * 4
    imgData.data[i4] = to8Bit(noise1[i])
    imgData.data[i4 + 1] = to8Bit(noise2[i])
    imgData.data[i4 + 2] = to8Bit(noise3[i])
    imgData.data[i4 + 3] = to8Bit(noise4[i])
  }
  ctx.putImageData(imgData, 0, 0)
}
