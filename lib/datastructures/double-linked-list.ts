interface DoubleLinkedNode<T> {
	get(): T
	next(): DoubleLinkedNode<T> | null
	prev(): DoubleLinkedNode<T> | null
	setPrev(node?: DoubleLinkedNode<T>): void
	setNext(node?: DoubleLinkedNode<T>): void
}

interface DoubleLinkedList<T> {
	first(): DoubleLinkedNode<T> | null
	last(): DoubleLinkedNode<T> | null
	size(): number

	append(...vals: T[]): DoubleLinkedList<T>
	prepend(...vals: T[]): DoubleLinkedList<T>
}

function createNode<T>(val: T): DoubleLinkedNode<T> {
	let next: DoubleLinkedNode<T> | null = null
	let prev: DoubleLinkedNode<T> | null = null

	const node: DoubleLinkedNode<T> = {
		get() {
			return val
		},
		next() {
			return next
		},
		prev() {
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
		size() {
			return size
		},
		first() {
			return first
		},
		last() {
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
