import { shuffle, map, each } from 'utils/sequence'
import { expect } from 'chai'
import { equalArray } from 'utils/predicates'
import { N, S } from '../types'


describe('utils sequence', function() {

	describe('shuffle', function() {

		it('shuffles an array', function() {
			const arr = [1, 3, 2, 4, 3, 5, 7, 8, 9]
			const shuffled = shuffle(arr)

			expect(arr).to.not.equal(shuffled)
			expect(arr.length).to.equal(shuffled.length)
			expect(equalArray(arr, shuffled)).to.be.false
			expect(equalArray(arr.sort(), shuffled.sort())).to.be.true
		})
	})


	describe('map', function() {
		it ('maps over arrays as native map', function() {
			const arr = [1, 3, 4, 5]
			const fn = (x: N, k: N) => x + k
			expect(map(fn, arr)).to.deep.equal(arr.map(fn))
		})

		it ('maps over objects', function() {
			const coll = {foo: 1, bar: 3, baz: 5}
			const fn = (x: N) => x + 2
			expect(map(fn, coll)).to.deep.equal({
				foo: 3, bar: 5, baz: 7
			})
		})
	})


	describe('each', function() {
		it ('iterates over arrays as native forEach', function() {
			const arr = [1, 3, 4, 5]
			const res1: any[] = []
			const res2: any[] = []
			const fn1 = (x: N) => res1.push(x + 2)
			const fn2 = (x: N) => res2.push(x + 2)
			each(fn1, arr)
			arr.forEach(fn2)
			expect(res1).to.deep.equal(res2)
		})

		it ('maps over objects', function() {
			const coll = {foo: 1, bar: 3, baz: 5}
			const res: any = {}
			const fn = (x: N, k: S) => res[k] = x + 2
			each(fn, coll)
			expect(res).to.deep.equal({
				foo: 3, bar: 5, baz: 7
			})
		})
	})
})
