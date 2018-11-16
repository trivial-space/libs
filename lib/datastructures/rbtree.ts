// compare to https://github.com/vadimg/js_bintrees for reference
import { CompareFn } from '../algorithms/base'
import * as BT from './bintree'

export class RBNode<K = any, V = any> extends BT.Node<K, V> {
	parent!: RBNode<K, V>
	left!: RBNode<K, V>
	right!: RBNode<K, V>
	red: boolean = true

	constructor(nil: RBNil, key: K, value?: V) {
		super(nil, key, value)
	}
}

export type RBNil = RBNode<any, any>

export interface RBTreeData<K = any, V = any> extends BT.BinaryTreeData<K, V> {
	root: RBNode<K, V>
	nil: RBNil
}

export const rbNil = {
	...BT.nil,
	red: false
} as RBNode<any, any>

export function insertFixup(tree: RBTreeData, node: RBNode) {
	while (node.parent.red) {
		if (node.parent === node.parent.parent.left) {
			const y = node.parent.parent.right
			if (y.red) {
				node.parent.red = false
				y.red = false
				node.parent.parent.red = true
				node = node.parent.parent
			} else {
				if (node === node.parent.right) {
					node = node.parent
					BT.rotateLeft(tree, node)
				}
				node.parent.red = false
				node.parent.parent.red = true
				BT.rotateRight(tree, node.parent.parent)
			}
		} else {
			const y = node.parent.parent.left
			if (y.red) {
				node.parent.red = false
				y.red = false
				node.parent.parent.red = true
				node = node.parent.parent
			} else {
				if (node === node.parent.left) {
					node = node.parent
					BT.rotateRight(tree, node)
				}
				node.parent.red = false
				node.parent.parent.red = true
				BT.rotateLeft(tree, node.parent.parent)
			}
		}
	}
	tree.root.red = false
}

export function remove<K>(tree: RBTreeData<K>, node: RBNode<K>) {
	let y = node
	let red = node.red
	let x
	if (node.left === tree.nil) {
		x = node.right
		BT.transplant(tree, node, node.right)
	} else if (node.right === tree.nil) {
		x = node.left
		BT.transplant(tree, node, node.left)
	} else {
		y = BT.min(tree, node.right) as RBNode
		red = y.red
		x = y.right
		if (y.parent === node) {
			x.parent = y
		} else {
			BT.transplant(tree, y, y.right)
			y.right = node.right
			y.right.parent = y
		}
		BT.transplant(tree, node, y)
		y.left = node.left
		y.left.parent = y
		y.red = node.red
	}
	if (!red) {
		// removeFixup
		while (x !== tree.root && !x.red) {
			if (x === x.parent.left) {
				let w = x.parent.right
				if (w.red) {
					w.red = false
					x.parent.red = true
					BT.rotateLeft(tree, x.parent)
					w = x.parent.right
				}
				if (!w.left.red && !w.right.red) {
					w.red = true
					x = x.parent
				} else {
					if (!w.right.red) {
						w.left.red = false
						w.red = true
						BT.rotateRight(tree, w)
						w = x.parent.right
					}
					w.red = x.parent.red
					x.parent.red = false
					w.right.red = false
					BT.rotateLeft(tree, x.parent)
					x = tree.root
				}
			} else {
				// symmetric
				let w = x.parent.left
				if (w.red) {
					w.red = false
					x.parent.red = true
					BT.rotateRight(tree, x.parent)
					w = x.parent.left
				}
				if (!w.left.red && !w.right.red) {
					w.red = true
					x = x.parent
				} else {
					if (!w.left.red) {
						w.right.red = false
						w.red = true
						BT.rotateLeft(tree, w)
						w = x.parent.left
					}
					w.red = x.parent.red
					x.parent.red = false
					w.left.red = false
					BT.rotateRight(tree, x.parent)
					x = tree.root
				}
			}
		}
		x.red = false
	}
}

export class RBTree<K, V> extends BT.BinaryTree<K, V>
	implements RBTreeData<K, V> {
	compare!: CompareFn<K>
	root!: RBNode<K, V>
	nil!: RBNil

	constructor(compareFn: CompareFn<K>, newNil: RBNil = rbNil) {
		super(compareFn, newNil)
	}

	createNode(key: K, value?: V) {
		return new RBNode(this.nil, key, value)
	}

	insert(key: K, value?: V) {
		const node = this.createNode(key, value)
		BT.insert(this, node)
		insertFixup(this, node)
		this.count++
		return node
	}

	remove(key: K) {
		const node = BT.search(this, this.root, key) as RBNode
		if (node !== this.nil) {
			remove(this, node)
			this.count--
		}
	}
}
