import { equalArray } from 'utils/predicates'
import { each, map, shuffle, flatMap } from 'utils/sequence'
import { N, S } from '../types'

describe('utils sequence', function () {
	describe('shuffle', function () {
		it('shuffles an array', function () {
			const arr = [1, 3, 2, 4, 3, 5, 7, 8, 9]
			const shuffled = shuffle(arr)

			expect(arr).not.toBe(shuffled)
			expect(arr.length).toBe(shuffled.length)
			expect(equalArray(arr, shuffled)).toBe(false)
			expect(equalArray(arr.sort(), shuffled.sort())).toBe(true)
		})
	})

	describe('map', function () {
		it('maps over arrays ', function () {
			const arr = [1, 3, 4, 5]
			const fn = (x: N, k: N) => x + k
			expect(map(fn, arr)).toEqual(arr.map(fn))
		})

		it('maps over typedarrays', function () {
			const vals = [1, 3, 4, 5]
			const arr = new Uint8Array(vals)
			const resArr = new Uint8Array(4)
			const fn = (x: N, k: N) => x + k
			expect(map(fn, arr)).toEqual(vals.map(fn))
			expect(map(fn, arr, resArr as any)).toEqual(arr.map(fn))
		})

		it('maps over objects', function () {
			const coll = { foo: 1, bar: 3, baz: 5 }
			const fn = (x: N) => x + 2
			expect(map(fn, coll)).toEqual({
				foo: 3,
				bar: 5,
				baz: 7,
			})
		})
	})

	describe('flatMap', () => {
		it('flatMaps sequences', () => {
			const vals = [1, 3, 4, 5]
			const arr = new Uint8Array(vals)
			const fn = (n: N) => [n * n]
			expect(flatMap(fn, vals)).toEqual(vals.map(x => x * x))
			expect(flatMap(fn, arr)).toEqual(vals.map(x => x * x))
		})
	})

	describe('each', function () {
		it('iterates over arrays as native forEach', function () {
			const arr = [1, 3, 4, 5]
			const res1: any[] = []
			const res2: any[] = []
			const fn1 = (x: N) => res1.push(x + 2)
			const fn2 = (x: N) => res2.push(x + 2)
			each(fn1, arr)
			arr.forEach(fn2)
			expect(res1).toEqual(res2)
		})

		it('maps over objects', function () {
			const coll = { foo: 1, bar: 3, baz: 5 }
			const res: any = {}
			const fn = (x: N, k: S) => (res[k] = x + 2)
			each(fn, coll)
			expect(res).toEqual({
				foo: 3,
				bar: 5,
				baz: 7,
			})
		})
	})
})
