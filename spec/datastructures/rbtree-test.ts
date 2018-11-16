import { expect } from 'chai'
import { N } from '../types'
import { RBTree, RBNode } from 'datastructures/rbtree'
import { numericalCompare, stringCompare } from 'algorithms/base'
import { times, shuffle } from 'utils/sequence'
import { min, walkInOrder, walkToRoot } from 'datastructures/bintree'

describe('datastructures red black tree', function() {
	describe('numberical', function() {
		let tree: RBTree<N, any>

		beforeEach(function() {
			tree = new RBTree(numericalCompare)
		})

		it('is initially empty', function() {
			expect(tree.root).to.equal(tree.nil)
		})

		it('can insert nodes', function() {
			tree.insert(3)
			tree.insert(4, 'foo')
			tree.insert(2)

			expect(tree.root).to.not.equal(tree.nil)
			expect(tree.root.key).to.equal(3)
			expect(tree.root.left.key).to.equal(2)
			expect(tree.root.right.key).to.equal(4)
			expect(tree.root.right.value).to.equal('foo')
			expect(tree.root.left.value).to.be.undefined
		})

		it('can get sorted keys', function() {
			tree.insert(3)
			tree.insert(4, 'foo')
			tree.insert(2)

			expect(tree.keys()).to.deep.equal([2, 3, 4])
		})

		it('can search for a key', function() {
			tree.insert(3)
			tree.insert(4, 'foo')

			expect(tree.get(4)).to.equal('foo')
			expect(tree.get(3)).to.be.undefined
			expect(tree.get(2)).to.equal(tree.nil)
		})

		it('can retrieve the minimum and maximum', function() {
			tree.insert(3)
			tree.insert(4)
			tree.insert(2)

			expect(tree.min()).to.equal(2)
			expect(tree.max()).to.equal(4)
		})

		it('can remove items', function() {
			tree.insert(3)
			tree.insert(4)
			tree.insert(2)

			tree.remove(3)
			expect(tree.keys()).to.deep.equal([2, 4])
		})

		it('has an element count', function() {
			expect(tree.size()).to.equal(0)
			tree.insert(3)
			expect(tree.size()).to.equal(1)
			tree.insert(4)
			expect(tree.size()).to.equal(2)
			tree.insert(2)
			expect(tree.size()).to.equal(3)

			tree.remove(3)
			expect(tree.size()).to.equal(2)
			tree.remove(5)
			expect(tree.size()).to.equal(2)
			tree.remove(2)
			expect(tree.size()).to.equal(1)
			tree.remove(4)
			expect(tree.size()).to.equal(0)
			tree.remove(4)
			expect(tree.size()).to.equal(0)
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

			expect(tree.keys()).to.deep.equal(['a', 'A', 'bar', 'bazz', 'foo'])
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

						expect(blackCount).to.equal(minBlackCount)
						expect(height).to.be.lessThan(
							Math.floor(Math.log2(count + 1) * 2 + 1)
						)
					}
				})
			}

			expect(count === numbers.length && count === tree.size()).to.be.true

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

						expect(blackCount).to.equal(minBlackCount)
						expect(height).to.be.lessThan(
							Math.floor(Math.log2(count + 1) * 2 + 1)
						)
					}
				})
			}
		})
	})
})
