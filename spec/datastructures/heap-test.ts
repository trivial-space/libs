import { createHeap, Heap } from 'datastructures/heap'
import { expect } from 'chai'
import { N, S } from '../types'
import { numericalCompare } from 'algorithms/base'


describe('datastructures heap', function() {

	describe('maxHeap', function() {
		let heap: Heap<N>

		beforeEach(function() {
			heap = createHeap(numericalCompare)
		})

		it('is initially empty', function() {
			expect(heap.size()).to.equal(0)
		})

		it('can be created from an array', function() {
			heap.fromArray([1, 2, 3])
			expect(heap.size()).to.equal(3)
		})

		it('can be inspect the highest value', function() {
			heap.fromArray([1, 3, 2])
			expect(heap.getTop()).to.equal(3)
			expect(heap.size()).to.equal(3)
		})

		it('returns the biggest item by pulling', function() {
			heap.fromArray([2, 4, 3, 1])
			expect(heap.size()).to.equal(4)

			expect(heap.pull()).to.equal(4)
			expect(heap.size()).to.equal(3)

			expect(heap.pull()).to.equal(3)
			expect(heap.size()).to.equal(2)

			expect(heap.pull()).to.equal(2)
			expect(heap.size()).to.equal(1)

			expect(heap.pull()).to.equal(1)
			expect(heap.size()).to.equal(0)
		})

		it('can insert new elements', function() {
			heap.fromArray([3, 6])
			heap.insert(5)
			heap.insert(10)

			expect(heap.pull()).to.equal(10)
			expect(heap.pull()).to.equal(6)
			expect(heap.pull()).to.equal(5)
			expect(heap.pull()).to.equal(3)
		})


		it('returns undefined on pulling on empty heap', function() {
			expect(heap.pull()).to.be.undefined
			expect(heap.pull()).to.be.undefined
			expect(heap.pull()).to.be.undefined

			expect(heap.size()).to.equal(0)
		})
	})


	it('can build heaps with custom compare functions', function() {
		const minHeap = createHeap((p: N, c: N) => c - p)
		minHeap.fromArray([3, 6])
		minHeap.insert(5)
		minHeap.insert(10)

		expect(minHeap.size()).to.equal(4)

		expect(minHeap.pull()).to.equal(3)
		expect(minHeap.size()).to.equal(3)

		expect(minHeap.pull()).to.equal(5)
		expect(minHeap.size()).to.equal(2)

		expect(minHeap.pull()).to.equal(6)
		expect(minHeap.size()).to.equal(1)

		expect(minHeap.pull()).to.equal(10)
		expect(minHeap.size()).to.equal(0)


		const stringHeap = createHeap((p: S, c: S) => p.localeCompare(c))
		stringHeap.fromArray(['z', 'f'])
		stringHeap.insert('a')
		stringHeap.insert('w')
		stringHeap.insert('z')

		expect(stringHeap.size()).to.equal(5)

		expect(stringHeap.pull()).to.equal('z')
		expect(stringHeap.size()).to.equal(4)

		expect(stringHeap.pull()).to.equal('z')
		expect(stringHeap.size()).to.equal(3)

		expect(stringHeap.pull()).to.equal('w')
		expect(stringHeap.size()).to.equal(2)

		expect(stringHeap.pull()).to.equal('f')
		expect(stringHeap.size()).to.equal(1)

		expect(stringHeap.pull()).to.equal('a')
		expect(stringHeap.size()).to.equal(0)
	})
})

