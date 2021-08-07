import { Opt } from '../types'

export interface DoubleLinkedNode<T> {
	readonly val: T
	readonly next: Opt<DoubleLinkedNode<T>>
	readonly prev: Opt<DoubleLinkedNode<T>>
}

export interface DoubleLinkedList<T> extends Iterable<T> {
	readonly first: Opt<DoubleLinkedNode<T>>
	readonly last: Opt<DoubleLinkedNode<T>>
	readonly size: number

	at(n: number): Opt<DoubleLinkedNode<T>>

	readonly reverted: Iterable<T>

	append(...vals: [T, ...T[]]): DoubleLinkedList<T>
	appendAt(node: DoubleLinkedNode<T>, ...vals: [T, ...T[]]): DoubleLinkedList<T>

	prepend(...vals: [T, ...T[]]): DoubleLinkedList<T>
	prependAt(
		node: DoubleLinkedNode<T>,
		...vals: [T, ...T[]]
	): DoubleLinkedList<T>

	drop(n?: number): DoubleLinkedList<T>
	dropAt(node: DoubleLinkedNode<T>, n?: number): DoubleLinkedList<T>

	empty(): DoubleLinkedList<T>
}

class Node<T> implements DoubleLinkedNode<T> {
	next: Opt<Node<T>> = null
	prev: Opt<Node<T>> = null
	readonly val: T

	constructor(val: T) {
		this.val = val
	}

	setNext(newNext?: Opt<Node<T>>) {
		this.next = newNext || null
	}
	setPrev(newPrev?: Opt<Node<T>>) {
		this.prev = newPrev || null
	}
}

export function createDoubleLinkedList<T>(...vals: T[]): DoubleLinkedList<T> {
	let size = 0
	let first: Opt<Node<T>> = null
	let last: Opt<Node<T>> = null

	function appendValAt(val: T, oldNode: Node<T>) {
		const node = new Node(val)
		const oldNext = oldNode.next
		oldNode.setNext(node)
		node.setPrev(oldNode)
		node.setNext(oldNext)
		if (oldNext) {
			oldNext.setPrev(node)
		} else {
			last = node
		}
		size++
		return node
	}

	function appendVal(val: T) {
		const node = new Node(val)
		if (!last) {
			first = last = node
			size = 1
		} else {
			last.setNext(node)
			node.setPrev(last)
			last = node
			size++
		}
	}

	function prependValAt(val: T, oldNode: Node<T>) {
		const node = new Node(val)
		const oldPrev = oldNode.prev
		oldNode.setPrev(node)
		node.setNext(oldNode)
		node.setPrev(oldPrev)
		if (oldPrev) {
			oldPrev.setNext(node)
		} else {
			first = node
		}
		size++
		return node
	}

	function prependVal(val: T) {
		const node = new Node(val)
		if (!first) {
			first = last = node
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

		at(n) {
			const reverse = n < 0
			let count = Math.abs(n)
			let prev = reverse ? last : first
			let next = prev
			while (count > 0 && next) {
				next = reverse ? prev && prev.prev : prev && prev.next
				count--
				if (next) {
					prev = next
				}
			}
			return prev
		},

		append(...vals) {
			let i = 0
			let val: T | undefined
			while ((val = vals[i])) {
				appendVal(val)
				i++
			}
			return list
		},

		appendAt(node, ...vals) {
			let i = 0
			let val: T | undefined
			while ((val = vals[i])) {
				node = appendValAt(val, node as Node<T>)
				i++
			}
			return list
		},

		prepend(...vals) {
			for (let i = vals.length - 1; i >= 0; i--) {
				prependVal(vals[i])
			}
			return list
		},

		prependAt(node, ...vals) {
			for (let i = vals.length - 1; i >= 0; i--) {
				node = prependValAt(vals[i], node as Node<T>)
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

		dropAt(node: Node<T>, n = 1) {
			const reverse = n < 0
			let count = Math.abs(n)
			let currentNode: Opt<Node<T>> = node as Node<T>
			while (count > 0 && currentNode) {
				currentNode = reverse ? currentNode.prev : currentNode.next
				count--
				size--
			}
			if (size === 0) {
				last = null
				first = null
			} else if (reverse) {
				if (node.next) {
					node.next.setPrev(currentNode)
				} else {
					last = currentNode
				}
				if (currentNode) {
					currentNode.setNext(node.next)
				} else {
					first = node.next
				}
			} else {
				if (node.prev) {
					node.prev.setNext(currentNode)
				} else {
					first = currentNode
				}
				if (currentNode) {
					currentNode.setPrev(node.prev)
				} else {
					last = node.prev
				}
			}
			return list
		},

		empty() {
			size = 0
			first = null
			last = null
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

	if (vals && vals.length) {
		list.append(...(vals as [T, ...T[]]))
	}

	return list
}
