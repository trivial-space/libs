export function randInt(int: number): number {
	return Math.floor(Math.random() * int)
}

export function randIntInRange(from: number, to: number): number {
	return randInt(to - from) + from
}

export function normalRand(): number {
	return (Math.random() + Math.random() + Math.random()) / 3
}
