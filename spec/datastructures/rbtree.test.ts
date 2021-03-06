import { numericalCompare, stringCompare } from 'algorithms/base'
import { min, walkInOrder, walkToRoot } from 'datastructures/bintree'
import { RBNode, RBTree } from 'datastructures/rbtree'
import { shuffle, times } from 'utils/sequence'
import { N } from '../types'

describe('datastructures red black tree', function() {
	describe('numberical', function() {
		let tree: RBTree<N, any>

		beforeEach(function() {
			tree = new RBTree(numericalCompare)
		})

		it('is initially empty', function() {
			expect(tree.root).toBe(tree.nil)
		})

		it('can insert nodes', function() {
			tree.insert(3)
			tree.insert(4, 'foo')
			tree.insert(2)

			expect(tree.root).not.toBe(tree.nil)
			expect(tree.root.key).toBe(3)
			expect(tree.root.left.key).toBe(2)
			expect(tree.root.right.key).toBe(4)
			expect(tree.root.right.value).toBe('foo')
			expect(tree.root.left.value).toBeUndefined
		})

		it('can get sorted keys', function() {
			tree.insert(3)
			tree.insert(4, 'foo')
			tree.insert(2)

			expect(tree.keys()).toEqual([2, 3, 4])
		})

		it('can search for a key', function() {
			tree.insert(3)
			tree.insert(4, 'foo')

			expect(tree.get(4)).toBe('foo')
			expect(tree.get(3)).toBeUndefined
			expect(tree.get(2)).toBe(tree.nil)
		})

		it('can retrieve the minimum and maximum', function() {
			tree.insert(3)
			tree.insert(4)
			tree.insert(2)

			expect(tree.min()).toBe(2)
			expect(tree.max()).toBe(4)
		})

		it('can remove items', function() {
			tree.insert(3)
			tree.insert(4)
			tree.insert(2)

			tree.remove(3)
			expect(tree.keys()).toEqual([2, 4])
		})

		it('has an element count', function() {
			expect(tree.size()).toBe(0)
			tree.insert(3)
			expect(tree.size()).toBe(1)
			tree.insert(4)
			expect(tree.size()).toBe(2)
			tree.insert(2)
			expect(tree.size()).toBe(3)

			tree.remove(3)
			expect(tree.size()).toBe(2)
			tree.remove(5)
			expect(tree.size()).toBe(2)
			tree.remove(2)
			expect(tree.size()).toBe(1)
			tree.remove(4)
			expect(tree.size()).toBe(0)
			tree.remove(4)
			expect(tree.size()).toBe(0)
		})
	})

	describe('custom keys', function() {
		it('can be given a custom compare function', function() {
			const tree = new RBTree(stringCompare)

			tree.insert('foo')
			tree.insert('bar')
			tree.insert('bazz')
			tree.insert('A')
			tree.insert('a')

			expect(tree.keys()).toEqual(['a', 'A', 'bar', 'bazz', 'foo'])
		})
	})

	describe('red black property', function() {
		it('tree height is always max log(n) * 2 and has same black node count', function() {
			const numbers = times(Math.random, 100).map(n => Math.floor(n * 100))

			const tree = new RBTree(numericalCompare)

			let count = 0

			for (const n of numbers) {
				tree.insert(n)
				count++

				let minBlackCount = 0
				const minNode = min(tree, tree.root)
				walkToRoot(tree, minNode, n => {
					if (!(n as RBNode<number>).red) {
						minBlackCount++
					}
				})

				walkInOrder(tree, tree.root, n => {
					if (n.left === tree.nil && n.right === tree.nil) {
						let height = 0
						let blackCount = 0
						walkToRoot(tree, n, n => {
							height++
							if (!(n as RBNode<number>).red) {
								blackCount++
							}
						})

						expect(blackCount).toBe(minBlackCount)
						expect(height).toBeLessThan(
							Math.floor(Math.log2(count + 1) * 2 + 1),
						)
					}
				})
			}

			expect(count === numbers.length && count === tree.size()).toBe(true)

			const shuffled = shuffle(numbers)

			for (const n of shuffled) {
				tree.remove(n)
				count--

				let minBlackCount = 0
				const minNode = min(tree, tree.root)
				walkToRoot(tree, minNode, n => {
					if (!(n as RBNode<number>).red) {
						minBlackCount++
					}
				})

				walkInOrder(tree, tree.root, n => {
					if (n.left === tree.nil && n.right === tree.nil) {
						let height = 0
						let blackCount = 0
						walkToRoot(tree, n, n => {
							height++
							if (!(n as RBNode<number>).red) {
								blackCount++
							}
						})

						expect(blackCount).toBe(minBlackCount)
						expect(height).toBeLessThan(
							Math.floor(Math.log2(count + 1) * 2 + 1),
						)
					}
				})
			}
		})
	})
})
