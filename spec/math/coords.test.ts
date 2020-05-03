import {
	cartesianToPolar2D,
	polarToCartesian2D,
	sphereToCartesian3D,
	cartesianToSphere3D,
} from 'math/coords'
import { almostEqual, almostEqualVector } from '../testUtils'

describe('math coords', function () {
	describe('polar coordinates', () => {
		it('cartesianToPolar2D', function () {
			expect(cartesianToPolar2D([100, 0])).toEqual([100, 0])
			expect(cartesianToPolar2D([0, 100])).toEqual([100, Math.PI / 2])
			expect(cartesianToPolar2D([-100, 0])).toEqual([100, Math.PI])
			expect(cartesianToPolar2D([0, -100])).toEqual([100, -Math.PI / 2])
		})

		it('polarToCartesian2D', function () {
			expect(polarToCartesian2D([100, 0])).toEqual([100, 0])

			let cart = polarToCartesian2D([100, Math.PI / 2])
			expect(almostEqual(0, cart[0])).toBe(true)
			expect(cart[1]).toBe(100)

			cart = polarToCartesian2D([100, Math.PI])
			expect(almostEqual(cart[1], 0.000001)).toBe(true)
			expect(cart[0]).toBe(-100)

			cart = polarToCartesian2D([100, -Math.PI / 2])
			expect(almostEqual(cart[0], 0.000001)).toBe(true)
			expect(cart[1]).toBe(-100)
		})

		it('can convert polar back and forth', () => {
			const coord = [21, 2.5]

			let newCoord = polarToCartesian2D(cartesianToPolar2D(coord))
			expect(almostEqualVector(newCoord, coord)).toBe(true)

			newCoord = cartesianToPolar2D(polarToCartesian2D(coord))
			expect(almostEqualVector(newCoord, coord)).toBe(true)
		})
	})

	describe('sphere coordinates', () => {
		it('converts to cartesian coords', () => {
			expect(sphereToCartesian3D([0, 23, 33])).toEqual([0, 0, 0])
			expect(sphereToCartesian3D([0, 0, 0])).toEqual([0, 0, 0])

			expect(almostEqualVector(sphereToCartesian3D([1, 0, 0]), [0, 0, 1])).toBe(
				true,
			)
			expect(
				almostEqualVector(sphereToCartesian3D([1, Math.PI / 2, 0]), [1, 0, 0]),
			).toBe(true)
			expect(
				almostEqualVector(sphereToCartesian3D([1, Math.PI, 0]), [0, 0, -1]),
			).toBe(true)

			expect(
				almostEqualVector(sphereToCartesian3D([1, 0, Math.PI / 2]), [0, 0, 1]),
			).toBe(true)
			expect(
				almostEqualVector(sphereToCartesian3D([1, 0, Math.PI]), [0, 0, 1]),
			).toBe(true)
			expect(
				almostEqualVector(sphereToCartesian3D([1, Math.PI / 2, Math.PI / 2]), [
					0,
					1,
					0,
				]),
			).toBe(true)
			expect(
				almostEqualVector(sphereToCartesian3D([1, Math.PI / 2, Math.PI]), [
					-1,
					0,
					0,
				]),
			).toBe(true)
			expect(
				almostEqualVector(
					sphereToCartesian3D([1, Math.PI / 2, 1.5 * Math.PI]),
					[0, -1, 0],
				),
			).toBe(true)
		})

		it('converts to sphere coords', () => {
			expect(
				almostEqualVector(cartesianToSphere3D([1, 0, 0]), [1, Math.PI / 2, 0]),
			).toBe(true)
		})

		it('can convert sphere back and forth', () => {
			let coord = [21, 1.5, 2.5]

			let newCoord = sphereToCartesian3D(cartesianToSphere3D(coord))
			expect(almostEqualVector(newCoord, coord)).toBe(true)

			newCoord = cartesianToSphere3D(sphereToCartesian3D(coord))
			expect(almostEqualVector(newCoord, coord)).toBe(true)

			coord = [0.5, 0.5, 0.5]

			newCoord = sphereToCartesian3D(cartesianToSphere3D(coord))
			expect(almostEqualVector(newCoord, coord)).toBe(true)

			newCoord = cartesianToSphere3D(sphereToCartesian3D(coord))
			expect(almostEqualVector(newCoord, coord)).toBe(true)

			coord = [0.5, 2.5, 5.5]

			newCoord = sphereToCartesian3D(cartesianToSphere3D(coord))
			expect(almostEqualVector(newCoord, coord)).toBe(true)

			newCoord = cartesianToSphere3D(sphereToCartesian3D(coord))
			expect(almostEqualVector(newCoord, coord)).toBe(true)
		})
	})
})
