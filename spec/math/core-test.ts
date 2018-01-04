import { sign, lerp, clamp } from 'math/core'
import { expect } from 'chai'


describe('math core', function() {

	it('sign', function() {
		expect(sign(20)).to.equal(1)
		expect(sign(-0.201)).to.equal(-1)
		expect(sign(0)).to.equal(0)
	})


	it('lerp', () => {
		expect(lerp(1, 10, 20)).to.equal(20)
		expect(lerp(0, 10, 20)).to.equal(10)
		expect(lerp(0.5, 10, 20)).to.equal(15)
	})


	it('clamp', function() {
		expect(clamp(1, 2, 10)).to.equal(2)
		expect(clamp(1, 2, 0)).to.equal(1)
		expect(clamp(1, 2, 1.4)).to.equal(1.4)
	})
})
