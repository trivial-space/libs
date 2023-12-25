export function randInt(int: number): number {
	return Math.floor(Math.random() * int)
}

export function randIntInRange(from: number, to: number): number {
	return randInt(to - from) + from
}

/**
 * @returns number between [0, 1] with a normal distribution arround 0.5
 */
export function normalRand01(): number {
	return (Math.random() + Math.random() + Math.random()) / 3
}

/**
 * @returns number between [-1, 1] with a normal distribution arround 0.5
 */
export function normalRand11(): number {
	return (Math.random() + Math.random() + Math.random()) / 1.5 - 1
}
