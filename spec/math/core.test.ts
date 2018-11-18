import { clamp, lerp, sign } from 'math/core'

describe('math core', function() {
	it('sign', function() {
		expect(sign(20)).toBe(1)
		expect(sign(-0.201)).toBe(-1)
		expect(sign(0)).toBe(0)
	})

	it('lerp', () => {
		expect(lerp(1, 10, 20)).toBe(20)
		expect(lerp(0, 10, 20)).toBe(10)
		expect(lerp(0.5, 10, 20)).toBe(15)
	})

	it('clamp', function() {
		expect(clamp(1, 2, 10)).toBe(2)
		expect(clamp(1, 2, 0)).toBe(1)
		expect(clamp(1, 2, 1.4)).toBe(1.4)
	})
})
