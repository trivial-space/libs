export type Predicate = (...a: any[]) => boolean

export const and = (p1: Predicate, p2: Predicate): Predicate => (a, b) =>
	p1(a, b) && p2(a, b)

export const not = (p: Predicate): Predicate => (...args) => !p(...args)

export const defined: Predicate = a => a != null

export const notEmpty: Predicate = a => a && a.length

export const unequal: Predicate = (a, b) => a !== b

export const equal: Predicate = (a, b) => a === b

export function equalArray(arr1?: any[], arr2?: any[]) {
	if (arr1 === arr2) {
		return true
	}
	if (!arr2 || !arr1) {
		return false
	}
	if (arr1.length !== arr2.length) {
		return false
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false
		}
	}
	return true
}

export function equalObject(
	obj1: { [key: string]: any },
	obj2?: { [key: string]: any },
) {
	if (obj1 === obj2) {
		return true
	}
	if (!obj2) {
		return false
	}
	const k1 = Object.keys(obj1)
	const k2 = Object.keys(obj2)
	if (!equalArray(k1, k2)) {
		return false
	}

	for (const key of k1) {
		if (obj1[key] !== obj2[key]) {
			return false
		}
	}

	return true
}
