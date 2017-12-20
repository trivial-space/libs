export function sign (num: number): number {
	if (num > 0) {
		return 1
	} else if (num < 0) {
		return -1
	} else {
		return 0
	}
}


export function lerp (
	start: number,
	end: number,
	step: number
): number {

	return start + step * (end - start)
}


export function clamp (
	min: number,
	max: number,
	value: number
): number {

	return Math.max(min, Math.min(value, max))
}


export const DEG_TO_RAD_FACTOR = Math.PI / 180

export function degToRad (degrees: number): number {
	return degrees * DEG_TO_RAD_FACTOR
}
