import { Vec } from 'math/vectors'

export function almostEqual(
	n1: number,
	n2: number,
	delta = 0.00001,
	silent = false,
) {
	const result = Math.abs(n1 - n2) <= delta

	if (!result && !silent) console.error('numbers not equal', n1, n2)
	return result
}

export function almostEqualVector(
	n1: Vec,
	n2: Vec,
	delta = 0.00001,
	silent = false,
) {
	let result = true
	for (let i = 0; i < n1.length; i++) {
		result = result && almostEqual(n1[i], n2[i], delta, true)
	}
	if (!result && !silent) console.error('vectors not equal', n1, n2)
	return result
}
