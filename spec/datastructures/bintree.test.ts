import { numericalCompare, stringCompare } from 'algorithms/base'
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

		it('returns the inserted node', function() {
			tree.insert(3)
			const n = tree.insert(4)
			tree.insert(5)
			expect(n.key).toBe(4)
			expect(n.parent.key).toBe(3)
			expect(n.right.key).toBe(5)
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

		it('can search for a node', function() {
			tree.insert(3)
			tree.insert(4, 'foo')

			const n = tree.getNode(4)
			expect(n.key).toBe(4)
			expect(n.value).toBe('foo')
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
			const tree = new BinaryTree(stringCompare)

			tree.insert('foo')
			tree.insert('bar')
			tree.insert('bazz')
			tree.insert('A')
			tree.insert('a')

			expect(tree.keys()).toEqual(['a', 'A', 'bar', 'bazz', 'foo'])
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

			expect(result).toEqual([1, 2, 3, 4])
		})

		it('can find the next and prev node', function() {
			const tree = new BinaryTree(numericalCompare)

			const n3 = tree.insert(3)
			const n1 = tree.insert(1)
			const n2 = tree.insert(2)

			expect(next(tree, n2)).toBe(n3)
			expect(prev(tree, n2)).toBe(n1)
			expect(next(tree, n3)).toBe(tree.nil)
			expect(prev(tree, n1)).toBe(tree.nil)
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

			expect(height).toBe(4)
			expect(keys).toEqual([1, 2, 3, 4])
		})
	})
})
