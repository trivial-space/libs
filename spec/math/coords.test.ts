import { cartesianToPolar2D, polarToCartesian2D } from 'math/coords'

describe('math coords', function() {
	it('cartesianToPolar2D', function() {
		expect(cartesianToPolar2D([100, 0])).toEqual([100, 0])
		expect(cartesianToPolar2D([0, 100])).toEqual([100, Math.PI / 2])
		expect(cartesianToPolar2D([-100, 0])).toEqual([100, Math.PI])
		expect(cartesianToPolar2D([0, -100])).toEqual([100, -Math.PI / 2])
	})

	it('polarToCartesian2D', function() {
		expect(polarToCartesian2D([100, 0])).toEqual([100, 0])

		let cart = polarToCartesian2D([100, Math.PI / 2])
		expect(cart[0] < 0.000001 && cart[0] > -0.000001).toBe(true)
		expect(cart[1]).toBe(100)

		cart = polarToCartesian2D([100, Math.PI])
		expect(cart[1] < 0.000001 && cart[1] > -0.000001).toBe(true)
		expect(cart[0]).toBe(-100)

		cart = polarToCartesian2D([100, -Math.PI / 2])
		expect(cart[0] < 0.000001 && cart[0] > -0.000001).toBe(true)
		expect(cart[1]).toBe(-100)
	})
})
