import * as colors from 'graphics/colors'

describe('graphics colors', function() {
	describe('colorRgbaToCSS', function() {
		it('converts a integer color to CSS rgba string', function() {
			expect(colors.colorRgbaToCSS([12, 13, 15, 255])).toBe(
				'rgba(12, 13, 15, 1)',
			)
			expect(colors.colorRgbaToCSS([12, 13, 15, 0])).toBe('rgba(12, 13, 15, 0)')
		})
	})

	describe('intToFloat', function() {
		it('converts integer color to float colors', function() {
			expect(colors.intToFloat([255, 255, 255])).toEqual([1, 1, 1])
			expect(colors.intToFloat([255, 255, 255, 255])).toEqual([
				1,
				1,
				1,
				1,
			])
			expect(colors.intToFloat([0, 0, 0])).toEqual([0, 0, 0])
			expect(colors.intToFloat([0, 0, 0, 0])).toEqual([0, 0, 0, 0])
		})
	})

	describe('floatToInt', function() {
		it('converts float color to integer colors', function() {
			expect(colors.floatToInt([1, 1, 1])).toEqual([255, 255, 255])
			expect(colors.floatToInt([1, 1, 1, 1])).toEqual([
				255,
				255,
				255,
				255,
			])
			expect(colors.floatToInt([0, 0, 0])).toEqual([0, 0, 0])
			expect(colors.floatToInt([0, 0, 0, 0])).toEqual([0, 0, 0, 0])
			expect(colors.floatToInt([0.5, 0.5, 0.5])).toEqual([127, 127, 127])
		})
	})

	describe('hexToRgb', function() {
		it('converts a integer to a rgb color', function() {
			expect(colors.hexToRgb(0x2334af)).toEqual([0x23, 0x34, 0xaf])
		})
	})

	describe('hexStringToRgb', function() {
		it('converts a hex string to a rgb color', function() {
			expect(colors.hexStringToRgb('#2334af')).toEqual([0x23, 0x34, 0xaf])
			expect(colors.hexStringToRgb('2334af')).toEqual([0x23, 0x34, 0xaf])
			expect(colors.hexStringToRgb('234')).toEqual([0x22, 0x33, 0x44])
		})
	})

	describe('rgbToHSL', function() {
		it('converts rgb colors to hsl colors', function() {
			expect(colors.rgbToHSL([1, 1, 1])).toEqual({ h: 0, s: 0, l: 1 })
			expect(colors.rgbToHSL([0.5, 0, 0.5])).toEqual({
				h: 5 / 6,
				s: 1,
				l: 0.25,
			})
			expect(colors.rgbToHSL([0, 0, 0])).toEqual({ h: 0, s: 0, l: 0 })
			expect(colors.rgbToHSL([0.25, 0.75, 0.75])).toEqual({
				h: 0.5,
				s: 0.5,
				l: 0.5,
			})
		})
	})

	describe('hslToRGB', function() {
		it('converts hsl to rgb', function() {
			expect(colors.hslToRGB({ h: 0, s: 0, l: 1 })).toEqual([1, 1, 1])
			expect(colors.hslToRGB({ h: 5 / 6, s: 1, l: 0.25 })).toEqual([
				0.5,
				0,
				0.5,
			])
			expect(colors.hslToRGB({ h: 0.5, s: 0.5, l: 0.5 })).toEqual([
				0.25,
				0.75,
				0.75,
			])
			expect(colors.hslToRGB({ h: 0, s: 0, l: 0 })).toEqual([0, 0, 0])
		})
	})
})
