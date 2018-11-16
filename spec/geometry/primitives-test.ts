import { expect } from 'chai'
import { lerp } from 'math/core'
import {
	interpolate,
	lerpVecs,
	split,
	translate,
	rotateLeftInPlace,
	rotateRightInPlace,
	rotateLeft,
	rotateRight,
	normal,
	side,
	Edge
} from 'geometry/primitives'

describe('geometry primitives', function() {
	describe('operations', function() {
		it('interpolate', function() {
			expect(interpolate(lerp, 0.5, [1], [3])).to.deep.equal([2])
			expect(lerpVecs(0.5, [1], [3])).to.deep.equal([2])
		})

		it('split', function() {
			expect(split(0.5, [[1], [3]])).to.deep.equal([[[1], [2]], [[2], [3]]])
			expect(split(0.25, [[1, 5], [3, 1]])).to.deep.equal([
				[[1, 5], [1.5, 4]],
				[[1.5, 4], [3, 1]]
			])
		})

		it('translate', function() {
			const g = [[1], [2], [3]]
			const t = translate([4], g)
			expect(t).to.deep.equal([[5], [6], [7]])
			expect(g).to.not.deep.equal(t)
			expect(translate([4, 4], [[1, 1], [2, 2], [3, 3]])).to.deep.equal([
				[5, 5],
				[6, 6],
				[7, 7]
			])
		})

		it('normal', function() {
			const n = normal([[-1, 1, 0], [0, 1, 0], [0, -1, 0]])
			expect(n).to.deep.equal([0, 0, 1])
		})

		it('side', function() {
			const e: Edge = [[0, 0], [0, 1]]
			const p1 = [1, 0]
			const p2 = [-1, 0]
			const p3 = [0, 2]

			expect(side(e, p1)).to.be.greaterThan(0)
			expect(side(e, p2)).to.be.lessThan(0)
			expect(side(e, p3)).to.equal(0)
		})
	})

	describe('rotations', function() {
		it('can happen in place', function() {
			const g = [[1], [2], [3]]

			const g1 = rotateLeftInPlace(g)
			expect(g1).to.deep.equal([[3], [1], [2]])
			expect(g1).to.equal(g)

			const g2 = rotateRightInPlace(g)
			expect(g2).to.deep.equal([[1], [2], [3]])
			expect(g2).to.equal(g)
		})

		it('can happen in place', function() {
			const g = [[1], [2], [3]]

			const g1 = rotateLeft(g)
			expect(g1).to.deep.equal([[3], [1], [2]])
			expect(g1).to.not.equal(g)

			const g2 = rotateRight(g)
			expect(g2).to.deep.equal([[2], [3], [1]])
			expect(g2).to.not.equal(g)
		})
	})
})
