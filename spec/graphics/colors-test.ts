import * as colors from 'graphics/colors'
import { expect } from 'chai'


describe('graphics colors', function() {

	describe('colorRgbaToCSS', function () {

		it('converts a integer color to CSS rgba string', function() {
			expect(colors.colorRgbaToCSS([12, 13, 15, 255])).to.equal('rgba(12, 13, 15, 1)')
			expect(colors.colorRgbaToCSS([12, 13, 15, 0])).to.equal('rgba(12, 13, 15, 0)')
		})
	})


	describe('intToFloat', function () {

		it('converts integer color to float colors', function() {
			expect(colors.intToFloat([255, 255, 255])).to.deep.equal([1, 1, 1])
			expect(colors.intToFloat([255, 255, 255, 255])).to.deep.equal([1, 1, 1, 1])
			expect(colors.intToFloat([0, 0, 0])).to.deep.equal([0, 0, 0])
			expect(colors.intToFloat([0, 0, 0, 0])).to.deep.equal([0, 0, 0, 0])
		})
	})


	describe('floatToInt', function () {

		it('converts float color to integer colors', function() {
			expect(colors.floatToInt([1, 1, 1])).to.deep.equal([255, 255, 255])
			expect(colors.floatToInt([1, 1, 1, 1])).to.deep.equal([255, 255, 255, 255])
			expect(colors.floatToInt([0, 0, 0])).to.deep.equal([0, 0, 0])
			expect(colors.floatToInt([0, 0, 0, 0])).to.deep.equal([0, 0, 0, 0])
			expect(colors.floatToInt([0.5, 0.5, 0.5])).to.deep.equal([127, 127, 127])
		})
	})


	describe('hexToRgb', function() {

		it('converts a integer to a rgb color', function() {
			expect(colors.hexToRgb(0x2334af)).to.deep.equal([0x23, 0x34, 0xaf])
		})
	})


	describe('hexStringToRgb', function() {

		it('converts a hex string to a rgb color', function() {
			expect(colors.hexStringToRgb('#2334af')).to.deep.equal([0x23, 0x34, 0xaf])
			expect(colors.hexStringToRgb('2334af')).to.deep.equal([0x23, 0x34, 0xaf])
		})
	})

})
