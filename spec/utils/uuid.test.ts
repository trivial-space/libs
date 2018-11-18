import { v4 } from 'utils/uuid'

describe('utils UUID', function() {
	it('generates random strings', function() {
		const u1 = v4(),
			u2 = v4(),
			u3 = v4(),
			u4 = v4()

		expect(typeof u1).toBe('string')
		expect(typeof u2).toBe('string')
		expect(typeof u3).toBe('string')
		expect(typeof u4).toBe('string')

		expect(u1).not.toBe(u2)
		expect(u1).not.toBe(u3)
		expect(u1).not.toBe(u4)
		expect(u2).not.toBe(u3)
		expect(u2).not.toBe(u4)
		expect(u3).not.toBe(u4)
	})
})
