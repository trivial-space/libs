export type Unpacked<T> = T extends (infer U)[]
	? U
	: T extends (...args: any[]) => infer U
	? U
	: T extends Promise<infer U>
	? U
	: T

export type Maybe<T> = T | undefined | null
export type Opt<T> = T | null

export function defined<T>(x: Maybe<T>): x is T {
	return x != null
}

type Falsy = false | 0 | '' | null | undefined

export function truthy<T>(x: T): x is Exclude<T, Falsy> {
	return !!x
}
