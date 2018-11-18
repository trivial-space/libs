import {
	Edge,
	interpolate,
	lerpVecs,
	normal,
	rotateLeft,
	rotateLeftInPlace,
	rotateRight,
	rotateRightInPlace,
	side,
	split,
	translate,
} from 'geometry/primitives'
import { lerp } from 'math/core'

describe('geometry primitives', function() {
	describe('operations', function() {
		it('interpolate', function() {
			expect(interpolate(lerp, 0.5, [1], [3])).toEqual([2])
			expect(lerpVecs(0.5, [1], [3])).toEqual([2])
		})

		it('split', function() {
			expect(split(0.5, [[1], [3]])).toEqual([[[1], [2]], [[2], [3]]])
			expect(split(0.25, [[1, 5], [3, 1]])).toEqual([
				[[1, 5], [1.5, 4]],
				[[1.5, 4], [3, 1]],
			])
		})

		it('translate', function() {
			const g = [[1], [2], [3]]
			const t = translate([4], g)
			expect(t).toEqual([[5], [6], [7]])
			expect(g).not.toEqual(t)
			expect(translate([4, 4], [[1, 1], [2, 2], [3, 3]])).toEqual([
				[5, 5],
				[6, 6],
				[7, 7],
			])
		})

		it('normal', function() {
			const n = normal([[-1, 1, 0], [0, 1, 0], [0, -1, 0]])
			expect(n).toEqual([0, 0, 1])
		})

		it('side', function() {
			const e: Edge = [[0, 0], [0, 1]]
			const p1 = [1, 0]
			const p2 = [-1, 0]
			const p3 = [0, 2]

			expect(side(e, p1)).toBeGreaterThan(0)
			expect(side(e, p2)).toBeLessThan(0)
			expect(side(e, p3)).toBe(0)
		})
	})

	describe('rotations', function() {
		it('can happen in place', function() {
			const g = [[1], [2], [3]]

			const g1 = rotateLeftInPlace(g)
			expect(g1).toEqual([[3], [1], [2]])
			expect(g1).toBe(g)

			const g2 = rotateRightInPlace(g)
			expect(g2).toEqual([[1], [2], [3]])
			expect(g2).toBe(g)
		})

		it('can happen in place', function() {
			const g = [[1], [2], [3]]

			const g1 = rotateLeft(g)
			expect(g1).toEqual([[3], [1], [2]])
			expect(g1).not.toBe(g)

			const g2 = rotateRight(g)
			expect(g2).toEqual([[2], [3], [1]])
			expect(g2).not.toBe(g)
		})
	})
})
