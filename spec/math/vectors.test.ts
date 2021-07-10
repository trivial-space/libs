import { normalize, vec } from 'math/vectors'

describe('math vectors', () => {
	describe('vec', () => {
		it('copies other vecs', () => {
			const v1 = [2, 0, 0]
			const v2 = vec(v1)
			const v3 = vec(v2)
			normalize(v1, v1)

			expect(v3[0]).toBe(2)
			expect(v3[1]).toBe(0)
			expect(v2[0]).toBe(2)
			expect(v2[1]).toBe(0)
			expect(v1[0]).toBe(1)
			expect(v1[1]).toBe(0)

			normalize(v2, v2)

			expect(v3[0]).toBe(2)
			expect(v3[1]).toBe(0)
			expect(v2[0]).toBe(1)
			expect(v2[1]).toBe(0)
			expect(v1[0]).toBe(1)
			expect(v1[1]).toBe(0)
		})
	})
})
