import { and, equalArray, equalObject, not } from 'utils/predicates'
import { N } from '../types'

describe('utils predicates', function() {
	describe('and', function() {
		it('takes two predicates and returns an composed predicate', function() {
			const p11 = (a: N) => a < 100
			const p12 = (b: N) => b > 10
			const p1 = and(p11, p12)
			expect(p1(5)).toBe(false)
			expect(p1(15)).toBe(true)
			expect(p1(115)).toBe(false)

			const p21 = (a: N, b: N) => a < b
			const p22 = (a: N, b: N) => a + b > 100
			const p2 = and(p21, p22)
			expect(p2(5, 10)).toBe(false)
			expect(p2(110, 10)).toBe(false)
			expect(p2(10, 110)).toBe(true)
		})
	})

	describe('not', function() {
		it('takes a predicate and negates its value', function() {
			const p11 = (a: N) => a < 100
			const p1 = not(p11)
			expect(p1(5)).toBe(false)
			expect(p1(115)).toBe(true)

			const p21 = (a: N, b: N) => a < b
			const p2 = not(p21)
			expect(p2(5, 10)).toBe(false)
			expect(p2(10, 5)).toBe(true)
		})
	})

	describe('equalArray', function() {
		it('shallow compares if two arrays are equal', function() {
			const obj = { foo: 'bar' }
			expect(equalArray([1, 2], [1, 2])).toBe(true)
			expect(equalArray([obj], [obj])).toBe(true)
			expect(equalArray([obj], [{ foo: 'bar' }])).toBe(false)
			expect(equalArray([1, 2], [2, 1])).toBe(false)
			expect(equalArray([1], [1, 2])).toBe(false)
			expect(equalArray([], [1])).toBe(false)
			expect(equalArray([])).toBe(false)
			expect(equalArray(undefined, [])).toBe(false)
			expect(equalArray()).toBe(true)
		})
	})

	describe('equalObject', function() {
		it('shallow compares if two objects are equal', function() {
			const obj = { foo: 'bar' }
			expect(equalObject({ foo: 'bar' }, obj)).toBe(true)
			expect(equalObject(obj, obj)).toBe(true)
			expect(equalObject({ foo: obj }, { foo: obj })).toBe(true)
			expect(equalObject({ foo: obj }, { foo: { foo: 'bar' } })).toBe(false)
			expect(equalObject({ foo: 'bar', bar: 'kuku' }, obj)).toBe(false)
			expect(equalObject({ bar: 'bar' }, obj)).toBe(false)
		})
	})
})
