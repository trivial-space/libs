export type Predicate1 = (a: any) => boolean
export type Predicate2 = (a: any, b: any) => boolean


export const unequal: Predicate2 = (a, b) => a !== b

export const defined: Predicate1 = a => a != null

export const notEmpty: Predicate1 = a => a && a.length

export const and = (p1: Predicate2, p2: Predicate2): Predicate2 => (a, b) => p1(a, b) && p2(a, b)
