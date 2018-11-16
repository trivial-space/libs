import { tileNoise } from '../math/noise'

function to8Bit(noise: number) {
	return Math.floor((noise + 1) * 127)
}

export function drawTileNoiseTexture(
	startX: number,
	startY: number,
	ctx: CanvasRenderingContext2D
): void {
	const width = ctx.canvas.width
	const height = ctx.canvas.height
	const noise1 = tileNoise(width, height, startX, startY)
	const noise2 = tileNoise(width, height, startX * 2.1, startY * 2.1)
	const noise3 = tileNoise(width, height, startX * 4.2, startY * 4.2)
	const noise4 = tileNoise(width, height, startX * 8.3, startY * 8.3)
	const imgData = ctx.getImageData(0, 0, width, height)

	for (let i = 0; i < noise1.length - 1; i++) {
		const i4 = i * 4
		imgData.data[i4] = to8Bit(noise1[i])
		imgData.data[i4 + 1] = to8Bit(noise2[i])
		imgData.data[i4 + 2] = to8Bit(noise3[i])
		imgData.data[i4 + 3] = to8Bit(noise4[i])
	}
	ctx.putImageData(imgData, 0, 0)
}
