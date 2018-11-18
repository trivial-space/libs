import { numericalCompare } from 'algorithms/base'
import { createHeap, Heap } from 'datastructures/heap'
import { N, S } from '../types'

describe('datastructures heap', function() {
	describe('maxHeap', function() {
		let heap: Heap<N>

		beforeEach(function() {
			heap = createHeap(numericalCompare)
		})

		it('is initially empty', function() {
			expect(heap.size()).toBe(0)
		})

		it('can be created from an array', function() {
			heap.fromArray([1, 2, 3])
			expect(heap.size()).toBe(3)
		})

		it('can be inspect the highest value', function() {
			heap.fromArray([1, 3, 2])
			expect(heap.getTop()).toBe(3)
			expect(heap.size()).toBe(3)
		})

		it('returns the biggest item by pulling', function() {
			heap.fromArray([2, 4, 3, 1])
			expect(heap.size()).toBe(4)

			expect(heap.pull()).toBe(4)
			expect(heap.size()).toBe(3)

			expect(heap.pull()).toBe(3)
			expect(heap.size()).toBe(2)

			expect(heap.pull()).toBe(2)
			expect(heap.size()).toBe(1)

			expect(heap.pull()).toBe(1)
			expect(heap.size()).toBe(0)
		})

		it('can insert new elements', function() {
			heap.fromArray([3, 6])
			heap.insert(5)
			heap.insert(10)

			expect(heap.pull()).toBe(10)
			expect(heap.pull()).toBe(6)
			expect(heap.pull()).toBe(5)
			expect(heap.pull()).toBe(3)
		})

		it('returns undefined on pulling on empty heap', function() {
			expect(heap.pull()).toBeUndefined
			expect(heap.pull()).toBeUndefined
			expect(heap.pull()).toBeUndefined

			expect(heap.size()).toBe(0)
		})
	})

	it('can build heaps with custom compare functions', function() {
		const minHeap = createHeap((p: N, c: N) => c - p)
		minHeap.fromArray([3, 6])
		minHeap.insert(5)
		minHeap.insert(10)

		expect(minHeap.size()).toBe(4)

		expect(minHeap.pull()).toBe(3)
		expect(minHeap.size()).toBe(3)

		expect(minHeap.pull()).toBe(5)
		expect(minHeap.size()).toBe(2)

		expect(minHeap.pull()).toBe(6)
		expect(minHeap.size()).toBe(1)

		expect(minHeap.pull()).toBe(10)
		expect(minHeap.size()).toBe(0)

		const stringHeap = createHeap((p: S, c: S) => p.localeCompare(c))
		stringHeap.fromArray(['z', 'f'])
		stringHeap.insert('a')
		stringHeap.insert('w')
		stringHeap.insert('z')

		expect(stringHeap.size()).toBe(5)

		expect(stringHeap.pull()).toBe('z')
		expect(stringHeap.size()).toBe(4)

		expect(stringHeap.pull()).toBe('z')
		expect(stringHeap.size()).toBe(3)

		expect(stringHeap.pull()).toBe('w')
		expect(stringHeap.size()).toBe(2)

		expect(stringHeap.pull()).toBe('f')
		expect(stringHeap.size()).toBe(1)

		expect(stringHeap.pull()).toBe('a')
		expect(stringHeap.size()).toBe(0)
	})
})
