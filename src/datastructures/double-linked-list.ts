export interface DoubleLinkedNode<T> {
	readonly val: T
	readonly next: DoubleLinkedNode<T> | null
	readonly prev: DoubleLinkedNode<T> | null
	setPrev(node?: DoubleLinkedNode<T>): void
	setNext(node?: DoubleLinkedNode<T>): void
}

export interface DoubleLinkedList<T> {
	readonly first: DoubleLinkedNode<T> | null
	readonly last: DoubleLinkedNode<T> | null
	readonly size: number

	append(...vals: T[]): DoubleLinkedList<T>
	prepend(...vals: T[]): DoubleLinkedList<T>
}

function createNode<T>(val: T): DoubleLinkedNode<T> {
	let next: DoubleLinkedNode<T> | null = null
	let prev: DoubleLinkedNode<T> | null = null

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
	let first: DoubleLinkedNode<T> | null = null
	let last: DoubleLinkedNode<T> | null = null

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
		},
	} as DoubleLinkedList<T>

	if (vals) {
		list.append(...vals)
	}

	return list
}
