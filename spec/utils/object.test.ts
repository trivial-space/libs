import { deepmerge, deepOverride, mapObj } from 'utils/object'

describe('utils object', function () {
	describe('deepmerge', function () {
		it('deepmerges two objects', function () {
			const obj1 = {
				lala: 2,
				foo: {
					kuku: 3,
					bar: {
						kuku: 1,
					},
				},
			}

			const obj2 = {
				foo: {
					kuku: 4,
					bar: {
						lulu: 3,
					},
				},
			}

			const result = deepmerge(obj1, obj2)

			expect(result).toEqual({
				lala: 2,
				foo: {
					kuku: 4,
					bar: {
						kuku: 1,
						lulu: 3,
					},
				},
			})

			expect(result).not.toBe(obj1)
			expect(result).not.toBe(obj2)
		})

		it('doesnt merge arrays', function () {
			const obj1 = { arr: { foo: 'bar' } }
			const obj2 = { arr: [1, 4, 5, 6] }

			const result1 = deepmerge(obj1, obj2)
			const result2 = deepmerge(obj2, obj1)

			expect(result1).toEqual({
				arr: [1, 4, 5, 6],
			})
			expect(result1.arr).toBe(obj2.arr)

			expect(result2).toEqual({
				arr: { foo: 'bar' },
			})
			expect(result2.arr).toBe(obj1.arr)
		})

		it('returns second arg if args are not objects', function () {
			const obj = { fuu: 'bar' }
			const arr = [1, 2, 3]
			const val = 'baz'

			expect(deepmerge(obj, arr)).toBe(arr)
			expect(deepmerge(obj, val)).toBe(val)
			expect(deepmerge(arr, obj)).toBe(obj)
			expect(deepmerge(val, obj)).toBe(obj)
		})

		it('removes a property when assigned to undefined', function () {
			const obj = { foo: 'bar', kuku: 'kaka' }

			expect(deepmerge(obj, { kuku: undefined })).toEqual({
				foo: 'bar',
			})
		})

		it('doesnt merge equal objects', function () {
			const nested = { foo: 'bar' }
			const o1 = { kuu: 1, nested }
			const o2 = { kuu: 5, nested }

			const o = deepmerge(o1, o2)
			expect(o.nested).toBe(nested)
		})
	})

	describe('deepOverride', function () {
		it('recursively overrides the values of obj1 without changing its structure', function () {
			const obj1 = {
				lala: 2,
				foo: {
					kuku: 3,
					bar: {
						kuku: 1,
						lulu: 3,
					},
				},
			}

			const obj2 = {
				foo: {
					kuku: 4,
					bar: {
						kuku: 3,
					},
				},
				ffff: 666,
			}

			const result = deepOverride(obj1, obj2)

			expect(result).toEqual({
				lala: 2,
				foo: {
					kuku: 4,
					bar: {
						kuku: 3,
						lulu: 3,
					},
				},
			})

			expect(result).toBe(obj1)
			expect(result).not.toBe(obj2)
		})

		it('doesnt merge arrays', function () {
			const obj1 = { arr: { foo: 'bar' } }
			const obj2 = { arr: [1, 4, 5, 6] }

			const result1 = deepOverride({ ...obj1 }, obj2)
			const result2 = deepOverride({ ...obj2 }, obj1)

			expect(result1).toEqual({
				arr: [1, 4, 5, 6],
			})
			expect(result1.arr).toBe(obj2.arr)

			expect(result2).toEqual({
				arr: { foo: 'bar' },
			})
			expect(result2.arr).toBe(obj1.arr)
		})

		it('returns second arg if args are not objects', function () {
			const obj = { fuu: 'bar' }
			const arr = [1, 2, 3]
			const val = 'baz'

			expect(deepmerge(obj, arr)).toBe(arr)
			expect(deepmerge(obj, val)).toBe(val)
			expect(deepmerge(arr, obj)).toBe(obj)
			expect(deepmerge(val, obj)).toBe(obj)
		})

		it('doesnt merge equal objects', function () {
			const nested = { foo: 'bar' }
			const o1 = { kuu: 1, nested }
			const o2 = { kuu: 5, nested }

			const o = deepOverride(o1, o2)
			expect(o.nested).toBe(nested)
			expect(o1.kuu).toBe(5)
		})

		it('has an option to ignore properties', () => {
			const obj1 = {
				kuku: 1,
				foo: {
					kuku: 3,
					bar: {
						kuku: 1,
						lulu: 3,
						lala: {
							fufu: 1,
							kuku: 5,
						},
					},
				},
			}

			const obj2 = {
				kuku: 2,
				foo: {
					kuku: 4,
					bar: {
						kuku: 3,
						lulu: 7,
						lala: {
							fufu: 2,
							kuku: 2,
						},
					},
				},
			}

			const result = deepOverride(obj1, obj2, {
				ignore: {
					kuku: true,
					foo: {
						kuku: true,
						bar: {
							kuku: true,
							lala: true,
						},
					},
				},
			})

			expect(result).toEqual({
				kuku: 1,
				foo: {
					kuku: 3,
					bar: {
						kuku: 1,
						lulu: 7,
						lala: {
							fufu: 1,
							kuku: 5,
						},
					},
				},
			})
		})
	})

	describe('mapObj', () => {
		it('maps over objects', function () {
			const coll = { foo: 1, bar: 3, baz: 5 }
			const fn = (x: number) => x + 2
			expect(mapObj(fn, coll)).toEqual({
				foo: 3,
				bar: 5,
				baz: 7,
			})
		})
	})
})
