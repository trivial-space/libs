export type CompareFn<T> = (parent: T, child: T) => number

export const numericalCompare: CompareFn<number> = (a: number, b: number) =>
	a - b
export const stringCompare: CompareFn<string> = (a: string, b: string) =>
	a.localeCompare(b)
