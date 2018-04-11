import { CompareFn } from '../algorithms/base'


export class Node<K = any, V = any> {
	parent: Node<K, V>
	left: Node<K, V>
	right: Node<K, V>
	key: K
	value?: V

	constructor (nil: Nil, key: K, value?: V) {
		this.parent = nil,
		this.left = nil,
		this.right = nil,
		this.key = key
		this.value = value
	}
}

export type Nil = Node<any, any>

export interface BinaryTreeData<K = any, V = any> {
	root: Node<K, V>
	nil: Nil,
	compare: CompareFn<K>
}


export const nil = (function () {
	const nil = {
		parent: null as any,
		left: null as any,
		right: null as any,
		key: null
	}
	nil.parent = nil
	nil.left = nil
	nil.right = nil
	return nil
})()as Node<any, any>


export function walkInOrder<K, V>(tree: BinaryTreeData<K, V>, walkRoot: Node<K, V>, cb: (n: Node<K, V>) => void) {
	if (walkRoot !== tree.nil) {
		walkInOrder(tree, walkRoot.left, cb)
		cb(walkRoot)
		walkInOrder(tree, walkRoot.right, cb)
	}
}


export function next<K, V>(tree: BinaryTreeData<K, V>, node: Node<K, V>) {
	if (node.right !== tree.nil) {
		return min(tree, node.right)
	}
	let parent = node.parent
	while (parent !== tree.nil && node === parent.right) {
		node = parent
		parent = parent.parent
	}
	return parent
}


export function prev<K, V>(tree: BinaryTreeData<K, V>, node: Node<K, V>) {
	if (node.left !== tree.nil) {
		return max(tree, node.right)
	}
	let parent = node.parent
	while (parent !== tree.nil && node === parent.left) {
		node = parent
		parent = parent.parent
	}
	return parent
}


export function insert<K, V>(tree: BinaryTreeData<K, V>, node: Node<K, V>) {
	let y = tree.nil
	let x = tree.root
	while (x !== tree.nil) {
		y = x
		if (tree.compare(node.key, x.key) < 0) {
			x = x.left
		} else {
			x = x.right
		}
	}
	node.parent = y
	if (y === tree.nil) {
		tree.root = node
	} else if (tree.compare(node.key, y.key) < 0) {
		y.left = node
	} else {
		y.right = node
	}
}


export function search<K>(tree: BinaryTreeData<K>, startNode: Node<K>, key: K) {
	while (startNode !== tree.nil && startNode.key !== key) {
		if (tree.compare(key, startNode.key) < 0) {
			startNode = startNode.left
		} else {
			startNode = startNode.right
		}
	}
	return startNode
}


export function transplant<K>(tree: BinaryTreeData<K>, oldNode: Node<K>, newNode: Node<K>) {
	if (oldNode.parent === tree.nil) {
		tree.root = newNode
	} else if (oldNode === oldNode.parent.left) {
		oldNode.parent.left = newNode
	} else {
		oldNode.parent.right = newNode
	}
	newNode.parent = oldNode.parent
}


export function remove<K>(tree: BinaryTreeData<K>, node: Node<K>) {
	if (node.left === tree.nil) {
		transplant(tree, node, node.right)
	} else if (node.right === tree.nil) {
		transplant(tree, node, node.left)
	} else {
		const y = min(tree, node.right)
		if (y.parent !== node) {
			transplant(tree, y, y.right)
			y.right = node.right
			y.right.parent = y
		}
		transplant(tree, node, y)
		y.left = node.left
		y.left.parent = y
	}
}


export function min<K>(tree: BinaryTreeData<K>, startNode: Node<K>) {
	while (startNode !== tree.nil && startNode.left !== tree.nil) {
		startNode = startNode.left
	}
	return startNode
}


export function max<K>(tree: BinaryTreeData<K>, startNode: Node<K>) {
	while (startNode.right !== tree.nil) {
		startNode = startNode.right
	}
	return startNode
}


export function rotateLeft<K>(tree: BinaryTreeData<K>, node: Node<K>) {
	const y = node.right
	node.right = y.left
	if (y.left !== tree.nil) {
		y.left.parent = node
	}
	y.parent = node.parent
	if (node.parent === tree.nil) {
		tree.root = y
	} else if (node === node.parent.left) {
		node.parent.left = y
	} else {
		node.parent.right = y
	}
	y.left = node
	node.parent = y
}


export function rotateRight<K>(tree: BinaryTreeData<K>, node: Node<K>) {
	const y = node.left
	node.left = y.right
	if (y.right !== tree.nil) {
		y.right.parent = node
	}
	y.parent = node.parent
	if (node.parent === tree.nil) {
		tree.root = y
	} else if (node === node.parent.right) {
		node.parent.right = y
	} else {
		node.parent.left = y
	}
	y.right = node
	node.parent = y
}


export function walkToRoot<K>(tree: BinaryTreeData, startNode: Node<K>, callback: (n: Node<K>) => void) {
	if (!(startNode && startNode !== tree.nil)) {
		return
	}
	while (startNode !== tree.nil) {
		callback(startNode)
		startNode = startNode.parent
	}
}


export class BinaryTree<K, V> implements BinaryTreeData<K, V> {
	compare: CompareFn<K>
	root: Node<K, V>
	nil: Nil
	count: number = 0

	constructor (compareFn: CompareFn<K>, newNil: Nil = nil) {
		this.compare = compareFn
		this.root = newNil
		this.nil = newNil
	}

	createNode (key: K, value?: V) {
		return new Node(this.nil, key, value)
	}

	insert (key: K, value?: V) {
		const n = this.createNode(key, value)
		insert(this, n)
		this.count++
		return n
	}

	getNode (key: K) {
		return search(this, this.root, key)
	}

	get (key: K) {
		const n = this.getNode(key)
		return n === this.nil ? n : n.value
	}

	keys () {
		const arr: K[] = []
		walkInOrder(this, this.root, n => arr.push(n.key))
		return arr
	}

	min () {
		return min(this, this.root).key
	}

	max () {
		return max(this, this.root).key
	}

	remove (key: K) {
		const node = search(this, this.root, key)
		if (node !== this.nil) {
			remove(this, node)
			this.count--
		}
	}

	size () {
		return this.count
	}
}
