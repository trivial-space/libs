import { expect } from 'chai'
import { top, Quad, right, bottom, left, divideHorizontal, divideVertical } from 'geometry/quad'


describe('geometry quad', function() {

	it('has clockwise sides', function() {
		const q: Quad = [[1], [2], [3], [4]]
		expect(top(q)).to.deep.equal([[1], [2]])
		expect(right(q)).to.deep.equal([[2], [3]])
		expect(bottom(q)).to.deep.equal([[3], [4]])
		expect(left(q)).to.deep.equal([[4], [1]])
	})

	it('can be divided horizontally', function() {
		const q: Quad = [[1], [2], [3], [4]]
		const q1 = divideHorizontal(0.5, 0.25, q)
		expect(q1)
			.to.deep.equal([
				[[1], [2], [2.25], [2.5]],
				[[2.5], [2.25], [3], [4]]
			])
		expect(bottom(q1[0])).to.deep.equal(top(q1[1]).reverse())
	})

	it('can be divided vertically', function() {
		const q: Quad = [[1], [2], [3], [4]]
		const q1 = divideVertical(0.5, 0.25, q)
		expect(q1)
			.to.deep.equal([
				[[1], [1.5], [3.75], [4]],
				[[1.5], [2], [3], [3.75]]
			])

		expect(right(q1[0])).to.deep.equal(left(q1[1]).reverse())
	})
})


