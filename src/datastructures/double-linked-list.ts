import { Opt } from '../types'

export interface DoubleLinkedNode<T> {
	readonly val: T
	readonly next: Opt<DoubleLinkedNode<T>>
	readonly prev: Opt<DoubleLinkedNode<T>>
	setPrev(node?: DoubleLinkedNode<T>): void
	setNext(node?: DoubleLinkedNode<T>): void
}

export interface DoubleLinkedList<T> extends Iterable<T> {
	readonly first: Opt<DoubleLinkedNode<T>>
	readonly last: Opt<DoubleLinkedNode<T>>
	readonly size: number

	readonly reverted: Iterable<T>

	append(...vals: T[]): DoubleLinkedList<T>
	prepend(...vals: T[]): DoubleLinkedList<T>
	drop(n?: number): DoubleLinkedList<T>
}

function createNode<T>(val: T): DoubleLinkedNode<T> {
	let next: Opt<DoubleLinkedNode<T>> = null
	let prev: Opt<DoubleLinkedNode<T>> = null

	const node: DoubleLinkedNode<T> = {
		get val() {
			return val
		},
		get next() {
			return next
		},
		get prev() {
			return prev
		},
		setNext(node) {
			next = node || null
		},
		setPrev(node) {
			prev = node || null
		},
	}

	return node
}

export function createDoubleLinkedList<T>(...vals: T[]): DoubleLinkedList<T> {
	let size = 0
	let first: Opt<DoubleLinkedNode<T>> = null
	let last: Opt<DoubleLinkedNode<T>> = null

	function appendValAt(val: T, oldNode: DoubleLinkedNode<T>) {
		const node = createNode(val)
		const oldNext = oldNode.next
		oldNode.setNext(node)
		node.setPrev(oldNode)
		oldNext?.setPrev(node)
		size++
	}

	function prependValAt(val: T, oldNode: DoubleLinkedNode<T>) {
		const node = createNode(val)
		const oldPrev = oldNode.prev
		oldNode.setPrev(node)
		node.setNext(oldNode)
		oldPrev?.setNext(node)
		size++
	}

	function appendVal(val: T) {
		const node = createNode(val)
		if (!last) {
			first = last = createNode(val)
			size = 1
		} else {
			last.setNext(node)
			node.setPrev(last)
			last = node
			size++
		}
	}

	function prependVal(val: T) {
		const node = createNode(val)
		if (!first) {
			first = last = createNode(val)
			size = 1
		} else {
			first.setPrev(node)
			node.setNext(first)
			first = node
			size++
		}
	}

	const list: DoubleLinkedList<T> = {
		get size() {
			return size
		},
		get first() {
			return first
		},
		get last() {
			return last
		},
		append(...vals) {
			vals.forEach(appendVal)
			return list
		},
		prepend(...vals) {
			for (let i = vals.length - 1; i >= 0; i--) {
				prependVal(vals[i])
			}
			return list
		},
		drop(n = 1) {
			const reverse = n < 0
			let count = Math.min(Math.abs(n), size)
			let node = reverse ? last : first
			while (count > 0 && node) {
				node = reverse ? node.prev : node.next
				count--
				size--
			}
			if (size === 0) {
				last = null
				first = null
			} else if (reverse) {
				last = node
				node?.setNext()
			} else {
				first = node
				node?.setPrev()
			}
			return list
		},
		[Symbol.iterator]: function* () {
			let node = first
			while (node) {
				yield node.val
				node = node.next
			}
		},
		reverted: {
			[Symbol.iterator]: function* () {
				let node = last
				while (node) {
					yield node.val
					node = node.prev
				}
			},
		},
	}

	if (vals) {
		list.append(...vals)
	}

	return list
}
