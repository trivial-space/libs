import { sub, length, mul, div } from '../math/vectors'

export function gravity(obj1: any, obj2: any, G: number) {
	const force = sub(obj1.position, obj2.position)
	const distance = length(force)
	if (!distance) {
		return force
	} else {
		const m = (G * obj1.mass * obj2.mass) / (distance * distance)
		return mul(m, div(distance, force))
	}
}

export function drag(obj: any, C: number) {
	const dragVec = obj.velocity
	const speed = length(dragVec)
	if (!speed) {
		return dragVec
	} else {
		const dragMag = C * speed * speed * -1
		return mul(dragMag, div(speed, dragVec))
	}
}
