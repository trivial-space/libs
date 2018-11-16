import { CompareFn } from '../algorithms/base'

export interface Heap<T> {
	insert: (item: T) => void
	getTop: () => T
	pull: () => T
	size: () => number
	fromArray: (items: T[]) => void
}

export function parentIndex(currentIndex: number) {
	return Math.floor(currentIndex / 2)
}

export function rightIndex(currentIndex: number) {
	return currentIndex * 2 + 1
}

export function leftIndex(currentIndex: number) {
	return currentIndex * 2
}

function swap(i: number, j: number, arr: any[]) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

export function heapifyAt<T>(compareFn: CompareFn<T>, arr: T[], i: number) {
	const l = leftIndex(i)
	const r = rightIndex(i)
	let top = i
	if (l < arr.length && compareFn(arr[top], arr[l]) < 0) {
		top = l
	}
	if (r < arr.length && compareFn(arr[top], arr[r]) < 0) {
		top = r
	}
	if (top !== i) {
		swap(i, top, arr)
		heapifyAt(compareFn, arr, top)
	}
}

export function heapify<T>(compareFn: CompareFn<T>, arr: T[]) {
	for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
		heapifyAt(compareFn, arr, i)
	}
}

export function insert<T>(compareFn: CompareFn<T>, arr: T[], item: T) {
	arr.push(item)
	if (arr.length > 1) {
		let i = arr.length - 1
		let p = parentIndex(i)
		while (i > 0 && compareFn(arr[p], arr[i]) < 0) {
			swap(p, i, arr)
			i = p
			p = parentIndex(i)
		}
	}
}

export function createHeap<T>(compareFn: CompareFn<T>) {
	let arr: T[] = []

	function size() {
		return arr.length
	}

	function fromArray(a: T[]) {
		arr = a.concat()
		heapify(compareFn, arr)
	}

	function pull() {
		const top = arr.shift()
		heapifyAt(compareFn, arr, 0)
		return top
	}

	function getTop() {
		return arr[0]
	}

	return {
		size,
		fromArray,
		pull,
		getTop,
		insert: (item: T) => insert(compareFn, arr, item)
	} as Heap<T>
}
