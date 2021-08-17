import { createDoubleLinkedList } from 'datastructures/double-linked-list'

describe('datastructures -> double linked list', () => {
	it('can create empty list', () => {
		const list = createDoubleLinkedList()
		expect(list.size).toBe(0)
	})

	it('can create prefilled list', () => {
		const list = createDoubleLinkedList(1)
		expect(list.size).toBe(1)
		expect(list.first).toBe(list.last)
		expect(list.first?.next).toBe(null)
		expect(list.first?.prev).toBe(null)
		expect(list.first?.val).toBe(1)
		expect(list.first!.list).toBe(list)

		const list2 = createDoubleLinkedList(1, 2, 3)
		expect(list2.size).toBe(3)
		expect(list2.first!.next!.next).toBe(list2.last)
		expect(list2.last!.prev!.prev).toBe(list2.first)
		expect(list2.last!.prev).toBe(list2.first!.next)
		expect(list2.first?.prev).toBe(null)
		expect(list2.last?.next).toBe(null)
		expect(list2.first?.val).toBe(1)
		expect(list2.last?.val).toBe(3)
		expect(list2.last?.prev?.val).toBe(2)
	})

	it('can append nodes', () => {
		const list = createDoubleLinkedList()
		list.append(1, 2, 3)
		expect(list.size).toBe(3)
		expect(list.first!.next!.next).toBe(list.last)
		expect(list.last!.prev!.prev).toBe(list.first)
		expect(list.first?.prev).toBe(null)
		expect(list.last?.next).toBe(null)
		expect(list.first?.val).toBe(1)
		expect(list.last?.val).toBe(3)
		expect(list.last?.prev?.val).toBe(2)

		list.append(4, 5, 6)
		expect(list.size).toBe(6)
		expect(list.first?.prev).toBe(null)
		expect(list.last?.next).toBe(null)
		expect(list.first?.val).toBe(1)
		expect(list.last?.val).toBe(6)
		expect(list.last?.prev?.val).toBe(5)
		expect(list.last?.prev?.prev?.val).toBe(4)
		expect(list.last?.prev?.prev?.prev?.val).toBe(3)
		expect(list.first?.next?.next?.next?.val).toBe(4)
	})

	it('can prepend nodes', () => {
		const list = createDoubleLinkedList()
		list.prepend(4, 5, 6)
		expect(list.size).toBe(3)
		expect(list.first!.next!.next).toBe(list.last)
		expect(list.last!.prev!.prev).toBe(list.first)
		expect(list.first?.prev).toBe(null)
		expect(list.last?.next).toBe(null)
		expect(list.first?.val).toBe(4)
		expect(list.last?.val).toBe(6)
		expect(list.first?.next?.val).toBe(5)

		list.prepend(1, 2, 3)
		expect(list.size).toBe(6)
		expect(list.first?.prev).toBe(null)
		expect(list.last?.next).toBe(null)
		expect(list.first?.val).toBe(1)
		expect(list.first?.next?.val).toBe(2)
		expect(list.last?.val).toBe(6)
		expect(list.last?.prev?.val).toBe(5)
		expect(list.last?.prev?.prev?.val).toBe(4)
		expect(list.last?.prev?.prev?.prev?.val).toBe(3)
		expect(list.first?.next?.next?.next?.val).toBe(4)
	})

	it('is an iterator', () => {
		const arr: number[] = []
		const list = createDoubleLinkedList(1, 2, 3)
		for (const val of list) {
			arr.push(val)
		}
		expect(arr).toEqual([1, 2, 3])

		expect([...list]).toEqual([1, 2, 3])
	})

	it('has a reverted iterator', () => {
		const arr: number[] = []
		for (const val of createDoubleLinkedList(1).append(2, 3).reverted) {
			arr.push(val)
		}
		expect(arr).toEqual([3, 2, 1])
	})

	it('can drop elements', () => {
		const list = createDoubleLinkedList(1, 2, 3, 4, 5, 6, 7, 8)

		expect([...list.drop(2)]).toEqual([3, 4, 5, 6, 7, 8])
		expect(list.size).toBe(6)
		expect(list.first?.prev).toBe(null)

		expect([...list.drop(-2)]).toEqual([3, 4, 5, 6])
		expect(list.size).toBe(4)
		expect(list.last?.next).toBe(null)

		expect([...list.drop(1)]).toEqual([4, 5, 6])
		expect(list.size).toBe(3)
		expect(list.first?.prev).toBe(null)

		expect([...list.drop()]).toEqual([5, 6])
		expect(list.size).toBe(2)
		expect(list.first?.prev).toBe(null)

		expect([...list.drop(-list.size)]).toEqual([])
		expect(list.size).toBe(0)
		expect(list.first).toBe(null)
		expect(list.last).toBe(null)

		list.append(1, 2, 3)
		expect(list.size).toBe(3)
		expect([...list.drop(list.size)]).toEqual([])
		expect(list.size).toBe(0)
		expect(list.first).toBe(null)
		expect(list.last).toBe(null)

		list.append(1, 2, 3)
		expect(list.size).toBe(3)
		expect([...list.drop(list.size + 2)]).toEqual([])
		expect(list.size).toBe(0)
		expect(list.first).toBe(null)
		expect(list.last).toBe(null)
	})

	it('can get nodes at a position', () => {
		const list = createDoubleLinkedList(1, 2, 3, 4)
		expect(list.at(0)).toBe(list.first)
		expect(list.at(1)).toBe(list.first?.next)
		expect(list.at(2)).toBe(list.first?.next?.next)
		expect(list.at(3)).toBe(list.last)
		expect(list.at(4)).toBe(list.last)
		expect(list.at(5)).toBe(list.last)
		expect(list.at(-1)).toBe(list.last?.prev)
		expect(list.at(-2)).toBe(list.last?.prev?.prev)
		expect(list.at(-3)).toBe(list.first)
		expect(list.at(-4)).toBe(list.first)

		expect(list.at(0)?.val).toBe(1)
		expect(list.at(1)?.val).toBe(2)
		expect(list.at(2)?.val).toBe(3)
		expect(list.at(3)?.val).toBe(4)
		expect(list.at(4)?.val).toBe(4)
		expect(list.at(4)?.val).toBe(4)
		expect(list.at(-1)?.val).toBe(3)
		expect(list.at(-2)?.val).toBe(2)
		expect(list.at(-3)?.val).toBe(1)
		expect(list.at(-4)?.val).toBe(1)

		const list2 = createDoubleLinkedList()
		expect(list2.at(0)).toBe(list2.first)
		expect(list2.at(1)).toBe(list2.first)
		expect(list2.at(2)).toBe(list2.last)
		expect(list2.at(-1)).toBe(list2.last)
		expect(list2.at(-2)).toBe(list2.first)
	})

	it('can append at a certain node', () => {
		const list = createDoubleLinkedList(1, 2, 3)
		list.appendAt(list.at(1)!, 8, 9)
		expect(list.size).toBe(5)
		expect([...list]).toEqual([1, 2, 8, 9, 3])

		list.appendAt(list.first!, 6, 7)
		expect(list.size).toBe(7)
		expect([...list]).toEqual([1, 6, 7, 2, 8, 9, 3])

		expect(list.last!.val).toBe(3)

		list.appendAt(list.last!, 5)
		expect(list.size).toBe(8)
		expect([...list]).toEqual([1, 6, 7, 2, 8, 9, 3, 5])

		expect(list.last!.val).toBe(5)
	})

	it('can prepend at a certain node', () => {
		const list = createDoubleLinkedList(1, 2, 3)
		list.prependAt(list.at(1)!, 8, 9)
		expect(list.size).toBe(5)
		expect([...list]).toEqual([1, 8, 9, 2, 3])

		list.prependAt(list.first!, 6, 7)
		expect(list.size).toBe(7)
		expect([...list]).toEqual([6, 7, 1, 8, 9, 2, 3])

		expect(list.last!.val).toBe(3)
		expect(list.first!.val).toBe(6)

		list.prependAt(list.last!, 5)
		expect(list.size).toBe(8)
		expect([...list]).toEqual([6, 7, 1, 8, 9, 2, 5, 3])

		expect(list.last!.val).toBe(3)
	})

	it('can empty a list', () => {
		const list = createDoubleLinkedList(12, 34)
		expect([...list.empty()]).toEqual([])
		expect(list.size).toEqual(0)
		expect(list.first).toEqual(null)
		expect(list.last).toEqual(null)
	})

	it('can drop nodes at a certain node', () => {
		const list = createDoubleLinkedList(1, 2, 3, 4, 5, 6, 7, 8)
		expect([...list.dropAt(list.at(2)!, 2)]).toEqual([1, 2, 5, 6, 7, 8])
		expect([...list.dropAt(list.at(3)!, -2)]).toEqual([1, 2, 7, 8])
		expect(list.last?.val).toBe(8)
		expect([...list.dropAt(list.last!, -2)]).toEqual([1, 2])
		expect(list.first?.val).toBe(1)
		expect(list.last?.val).toBe(2)
		expect([...list.dropAt(list.first!)]).toEqual([2])
		expect(list.first?.val).toBe(2)
		expect([...list.dropAt(list.last!)]).toEqual([])
		expect(list.size).toBe(0)
		expect(list.first).toBe(null)
		expect(list.last).toBe(null)
	})

	it('can set node values', () => {
		const list = createDoubleLinkedList(1, 2)
		list.at(1)?.set(3)
		expect([...list]).toEqual([1, 3])
	})

	it('can split the list at certain points', () => {
		const list = createDoubleLinkedList(1, 2, 3, 4, 5, 6)
		const [list1, list2] = list.splitAt(list.at(3)!)
		expect([...list1]).toEqual([1, 2, 3, 4])
		expect([...list2]).toEqual([4, 5, 6])
		expect(list1.first?.val).toEqual(1)
		expect(list1.last?.val).toEqual(4)
		expect(list2.first?.val).toEqual(4)
		expect(list2.last?.val).toEqual(6)
		expect(list1.size).toEqual(4)
		expect(list2.size).toEqual(3)

		const [list3, list4] = list.splitAt(list.first!)
		expect([...list3]).toEqual([1])
		expect([...list4]).toEqual([...list])

		const [list5, list6] = list.splitAt(list.last!)
		expect([...list5]).toEqual([...list])
		expect([...list6]).toEqual([6])

		expect([...list]).toEqual([1, 2, 3, 4, 5, 6])

		expect(list.first?.list).toEqual(list)
		expect(list1.first?.list).toEqual(list1)
		expect(list2.first?.list).toEqual(list2)
		expect(list3.first?.list).toEqual(list3)
		expect(list4.first?.list).toEqual(list4)
		expect(list5.first?.list).toEqual(list5)
	})
})
