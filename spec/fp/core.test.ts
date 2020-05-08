import { curry, partial, pipe } from 'fp/core'
import { N, S } from '../types'
import { map, reverse, fold } from 'utils/sequence'

describe('functional programming core', function () {
	describe('curry', function () {
		it('curries a 2 argument function', function () {
			const fn = (a: N, b: N) => a + b

			const curriedFn = curry(fn)
			expect(typeof curriedFn).toBe('function')
			expect(curriedFn(2, 3)).toBe(5)

			const add2 = curriedFn(2)
			expect(typeof add2).toBe('function')
			expect(add2(3)).toBe(5)
		})
	})

	describe('partial', function () {
		it('patrially applies arguments to a function', function () {
			const fn = (a: N, b: N) => a + b
			const fn2 = (a: S, b: S, c: S) => a + b + c

			const add2 = partial(fn, 2)
			expect(typeof add2).toBe('function')
			expect(add2(3)).toBe(5)

			expect(partial(fn, 2, 3)()).toBe(5)

			expect(partial(fn2, '2', '3', '4')()).toBe('234')
			expect(partial(fn2, '2', '3')('4')).toBe('234')
			expect(partial(fn2, '2')('3', '4')).toBe('234')
		})
	})

	describe('pipe', () => {
		it('composes functions left to right', () => {
			const mapPow2 = (ns: number[]) => map(partial(Math.pow, 2), ns)

			const inc = (i: number) => i + 1
			const add = (a: number, b: number) => a + b

			const fn = pipe(mapPow2, reverse, partial(fold, add), inc)
			expect(fn([1, 2, 3])).toBe(15)
		})
	})
})
