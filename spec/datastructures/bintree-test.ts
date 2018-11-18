import { numericalCompare, stringCompare } from 'algorithms/base'
import { expect } from 'chai'
import {
	BinaryTree,
	min,
	next,
	prev,
	walkInOrder,
	walkToRoot,
} from 'datastructures/bintree'
import { N } from '../types'

describe('datastructures binary tree', function() {
	describe('numberical', function() {
		let tree: BinaryTree<N, any>

		beforeEach(function() {
			tree = new BinaryTree(numericalCompare)
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

		it('returns the inserted node', function() {
			tree.insert(3)
			const n = tree.insert(4)
			tree.insert(5)
			expect(n.key).to.equal(4)
			expect(n.parent.key).to.equal(3)
			expect(n.right.key).to.equal(5)
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

		it('can search for a node', function() {
			tree.insert(3)
			tree.insert(4, 'foo')

			const n = tree.getNode(4)
			expect(n.key).to.equal(4)
			expect(n.value).to.equal('foo')
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
			const tree = new BinaryTree(stringCompare)

			tree.insert('foo')
			tree.insert('bar')
			tree.insert('bazz')
			tree.insert('A')
			tree.insert('a')

			expect(tree.keys()).to.deep.equal(['a', 'A', 'bar', 'bazz', 'foo'])
		})
	})

	describe('functions', function() {
		it('can walk a tree in order', function() {
			const tree = new BinaryTree(numericalCompare)

			tree.insert(3)
			tree.insert(4)
			tree.insert(1)
			tree.insert(2)

			const result: any[] = []
			walkInOrder(tree, tree.root, n => result.push(n.key))

			expect(result).to.deep.equal([1, 2, 3, 4])
		})

		it('can find the next and prev node', function() {
			const tree = new BinaryTree(numericalCompare)

			const n3 = tree.insert(3)
			const n1 = tree.insert(1)
			const n2 = tree.insert(2)

			expect(next(tree, n2)).to.equal(n3)
			expect(prev(tree, n2)).to.equal(n1)
			expect(next(tree, n3)).to.equal(tree.nil)
			expect(prev(tree, n1)).to.equal(tree.nil)
		})

		it('can walk to root', function() {
			const tree = new BinaryTree(numericalCompare)

			tree.insert(4)
			tree.insert(3)
			tree.insert(2)
			tree.insert(1)

			let height = 0
			const keys: number[] = []
			walkToRoot(tree, min(tree, tree.root), n => {
				height++
				keys.push(n.key)
			})

			expect(height).to.equal(4)
			expect(keys).to.deep.equal([1, 2, 3, 4])
		})
	})
})
