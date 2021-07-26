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
	})
})
