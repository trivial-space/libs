import { Opt } from '../types.js'

export interface DoubleLinkedNode<T> {
	readonly val: T
	readonly next: Opt<DoubleLinkedNode<T>>
	readonly prev: Opt<DoubleLinkedNode<T>>
	readonly list: DoubleLinkedList<T>
	set: (val: T, recalculate?: boolean) => void
}

export interface DoubleLinkedList<T> extends Iterable<T> {
	readonly first: Opt<DoubleLinkedNode<T>>
	readonly last: Opt<DoubleLinkedNode<T>>
	readonly size: number

	at(n: number): Opt<DoubleLinkedNode<T>>

	append(val: T, recalculate?: boolean): DoubleLinkedList<T>
	appendAt(
		node: DoubleLinkedNode<T>,
		val: T,
		recalculate?: boolean,
	): DoubleLinkedList<T>
	appendAll(vals: T[], recalculate?: boolean): DoubleLinkedList<T>

	prepend(val: T, recalculate?: boolean): DoubleLinkedList<T>
	prependAt(
		node: DoubleLinkedNode<T>,
		val: T,
		recalculate?: boolean,
	): DoubleLinkedList<T>
	prependAll(vals: T[], recalculate?: boolean): DoubleLinkedList<T>

	drop(n?: number): DoubleLinkedList<T>
	dropAt(node: DoubleLinkedNode<T>, n?: number): DoubleLinkedList<T>

	splitAt(node: DoubleLinkedNode<T>): [DoubleLinkedList<T>, DoubleLinkedList<T>]

	empty(): DoubleLinkedList<T>

	readonly reverted: Iterable<T>
	readonly nodes: Iterable<DoubleLinkedNode<T>>
	readonly nodesReverted: Iterable<DoubleLinkedNode<T>>
	nodesFrom(node: Opt<DoubleLinkedNode<T>>): Iterable<DoubleLinkedNode<T>>
	nodesRevertedFrom(
		node: Opt<DoubleLinkedNode<T>>,
	): Iterable<DoubleLinkedNode<T>>
}

class Node<T> implements DoubleLinkedNode<T> {
	next: Opt<Node<T>> = null
	prev: Opt<Node<T>> = null
	val: T
	readonly list: DoubleLinkedList<T>
	private recalculateNode: (node: Node<T>, recalculate?: boolean) => void

	constructor(
		val: T,
		list: DoubleLinkedList<T>,
		recalculateNode: (node: Node<T>, recalculate?: boolean) => void,
	) {
		this.val = val
		this.list = list
		this.recalculateNode = recalculateNode
	}

	setNext(newNext?: Opt<Node<T>>) {
		this.next = newNext || null
	}
	setPrev(newPrev?: Opt<Node<T>>) {
		this.prev = newPrev || null
	}
	set(val: T, recalculate?: boolean) {
		this.val = val
		this.recalculateNode(this, recalculate)
	}
}

export interface LinkedListOptions<T> {
	onNextUpdated?: (node: DoubleLinkedNode<T>) => void
	onPrevUpdated?: (node: DoubleLinkedNode<T>) => void
}

export function createDoubleLinkedList<T>(
	vals?: T[],
	{ onNextUpdated, onPrevUpdated }: LinkedListOptions<T> = {},
): DoubleLinkedList<T> {
	let size = 0
	let first: Opt<Node<T>> = null
	let last: Opt<Node<T>> = null

	function recalculateNode(node: Node<T>, recalculate?: boolean) {
		if (onNextUpdated && recalculate && node.prev) {
			onNextUpdated(node.prev)
		}
		if (onPrevUpdated && recalculate && node.next) {
			onPrevUpdated(node.next)
		}
	}

	function appendValAt(val: T, oldNode: Node<T>, recalculate?: boolean) {
		const node = new Node(val, list, recalculateNode)
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
		recalculateNode(node, recalculate)
		return node
	}

	function appendVal(val: T, recalculate?: boolean) {
		const node = new Node(val, list, recalculateNode)
		if (!last) {
			first = last = node
			size = 1
		} else {
			last.setNext(node)
			node.setPrev(last)
			last = node
			size++
		}
		recalculateNode(node, recalculate)
	}

	function prependValAt(val: T, oldNode: Node<T>, recalculate?: boolean) {
		const node = new Node(val, list, recalculateNode)
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
		recalculateNode(node, recalculate)
		return node
	}

	function prependVal(val: T, recalculate?: boolean) {
		const node = new Node(val, list, recalculateNode)
		if (!first) {
			first = last = node
			size = 1
		} else {
			first.setPrev(node)
			node.setNext(first)
			first = node
			size++
		}
		recalculateNode(node, recalculate)
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

		append(val, recalculate) {
			appendVal(val, recalculate)
			return list
		},

		appendAt(node, val, recalculate) {
			appendValAt(val, node as Node<T>, recalculate)
			return list
		},

		appendAll(vals, recalculate) {
			for (const val of vals) {
				appendVal(val, recalculate)
			}
			return list
		},

		prepend(val, recalculate) {
			prependVal(val, recalculate)
			return list
		},

		prependAt(node, val, recalculate) {
			prependValAt(val, node as Node<T>, recalculate)
			return list
		},

		prependAll(vals, recalculate) {
			for (const val of vals) {
				prependVal(val, recalculate)
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

		splitAt(node) {
			const list1 = createDoubleLinkedList<T>()
			const list2 = createDoubleLinkedList<T>()
			let current: DoubleLinkedNode<T> = first!
			while (current != node) {
				list1.append(current!.val)
				current = current.next!
			}
			list1.append(node.val)
			current = node
			while (current != last) {
				list2.append(current!.val)
				current = current.next!
			}
			list2.append(last.val)
			return [list1, list2]
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
		nodes: {
			[Symbol.iterator]: function* () {
				let node = first
				while (node) {
					yield node
					node = node.next
				}
			},
		},
		nodesReverted: {
			[Symbol.iterator]: function* () {
				let node = last
				while (node) {
					yield node
					node = node.prev
				}
			},
		},
		nodesFrom(node) {
			return {
				[Symbol.iterator]: function* () {
					while (node) {
						yield node
						node = node.next
					}
				},
			}
		},
		nodesRevertedFrom(node) {
			return {
				[Symbol.iterator]: function* () {
					while (node) {
						yield node
						node = node.prev
					}
				},
			}
		},
	}

	if (vals && vals.length) {
		for (const val of vals) list.append(val)
	}

	return list
}
