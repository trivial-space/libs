import {
	createDoubleLinkedList,
	DoubleLinkedNode,
} from 'datastructures/double-linked-list'

describe('datastructures -> double linked list', () => {
	it('can create empty list', () => {
		const list = createDoubleLinkedList()
		expect(list.size).toBe(0)
	})

	it('can append an array', () => {
		const list = createDoubleLinkedList()
		list.appendAll([1, 2, 3])
		expect([...list]).toEqual([1, 2, 3])
	})

	it('can create prefilled list', () => {
		const list = createDoubleLinkedList([1])
		expect(list.size).toBe(1)
		expect(list.first).toBe(list.last)
		expect(list.first?.next).toBe(null)
		expect(list.first?.prev).toBe(null)
		expect(list.first?.val).toBe(1)
		expect(list.first!.list).toBe(list)

		const list2 = createDoubleLinkedList([1, 2, 3])
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
		list.append(1).append(2).append(3)
		expect(list.size).toBe(3)
		expect(list.first!.next!.next).toBe(list.last)
		expect(list.last!.prev!.prev).toBe(list.first)
		expect(list.first?.prev).toBe(null)
		expect(list.last?.next).toBe(null)
		expect(list.first?.val).toBe(1)
		expect(list.last?.val).toBe(3)
		expect(list.last?.prev?.val).toBe(2)

		list.append(4).append(5).append(6)
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
		list.prepend(4).prepend(5).prepend(6)
		expect(list.size).toBe(3)
		expect(list.first!.next!.next).toBe(list.last)
		expect(list.last!.prev!.prev).toBe(list.first)
		expect(list.first?.prev).toBe(null)
		expect(list.last?.next).toBe(null)
		expect(list.first?.val).toBe(6)
		expect(list.last?.val).toBe(4)
		expect(list.first?.next?.val).toBe(5)

		list.prepend(1).prepend(2).prepend(3)
		expect(list.size).toBe(6)
		expect(list.first?.prev).toBe(null)
		expect(list.last?.next).toBe(null)
		expect(list.first?.val).toBe(3)
		expect(list.first?.next?.val).toBe(2)
		expect(list.last?.val).toBe(4)
		expect(list.last?.prev?.val).toBe(5)
		expect(list.last?.prev?.prev?.val).toBe(6)
		expect(list.last?.prev?.prev?.prev?.val).toBe(1)
		expect(list.first?.next?.next?.next?.val).toBe(6)
		expect([...list]).toEqual([3, 2, 1, 6, 5, 4])
	})

	it('can prepend an array', () => {
		const list = createDoubleLinkedList()
		list.prependAll([1, 2, 3])
		expect([...list]).toEqual([3, 2, 1])
	})

	it('is an iterator', () => {
		const arr: number[] = []
		const list = createDoubleLinkedList([1, 2, 3])
		for (const val of list) {
			arr.push(val)
		}
		expect(arr).toEqual([1, 2, 3])

		expect([...list]).toEqual([1, 2, 3])
		expect([...list.nodes].map(n => n.val)).toEqual([1, 2, 3])
	})

	it('has a reverted iterator', () => {
		const arr: number[] = []
		for (const val of createDoubleLinkedList([1]).append(2).append(3)
			.reverted) {
			arr.push(val)
		}
		expect(arr).toEqual([3, 2, 1])

		const nodes: DoubleLinkedNode<number>[] = []
		for (const node of createDoubleLinkedList([1]).append(2).append(3)
			.nodesReverted) {
			nodes.push(node)
		}
		expect(nodes.map(n => n.val)).toEqual([3, 2, 1])
	})

	it('can drop elements', () => {
		const list = createDoubleLinkedList([1, 2, 3, 4, 5, 6, 7, 8])

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

		list.append(1).append(2).append(3)
		expect(list.size).toBe(3)
		expect([...list.drop(list.size)]).toEqual([])
		expect(list.size).toBe(0)
		expect(list.first).toBe(null)
		expect(list.last).toBe(null)

		list.append(1).append(2).append(3)
		expect(list.size).toBe(3)
		expect([...list.drop(list.size + 2)]).toEqual([])
		expect(list.size).toBe(0)
		expect(list.first).toBe(null)
		expect(list.last).toBe(null)
	})

	it('can get nodes at a position', () => {
		const list = createDoubleLinkedList([1, 2, 3, 4])
		expect(list.at(0)).toBe(list.first)
		expect(list.at(1)).toBe(list.first!.next)
		expect(list.at(2)).toBe(list.first!.next!.next)
		expect(list.at(3)).toBe(list.last)
		expect(list.at(4)).toBe(list.last)
		expect(list.at(5)).toBe(list.last)
		expect(list.at(-1)).toBe(list.last!.prev)
		expect(list.at(-2)).toBe(list.last!.prev!.prev)
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
		const list = createDoubleLinkedList([1, 2, 3])
		list.appendAt(list.at(1)!, 8)
		expect(list.size).toBe(4)
		expect([...list]).toEqual([1, 2, 8, 3])

		list.appendAt(list.first!, 6)
		expect(list.size).toBe(5)
		expect([...list]).toEqual([1, 6, 2, 8, 3])

		expect(list.last!.val).toBe(3)

		list.appendAt(list.last!, 5)
		expect(list.size).toBe(6)
		expect([...list]).toEqual([1, 6, 2, 8, 3, 5])

		expect(list.last!.val).toBe(5)
	})

	it('can prepend at a certain node', () => {
		const list = createDoubleLinkedList([1, 2, 3])
		list.prependAt(list.at(1)!, 8)
		expect(list.size).toBe(4)
		expect([...list]).toEqual([1, 8, 2, 3])

		list.prependAt(list.first!, 6)
		expect(list.size).toBe(5)
		expect([...list]).toEqual([6, 1, 8, 2, 3])

		expect(list.last!.val).toBe(3)
		expect(list.first!.val).toBe(6)

		list.prependAt(list.last!, 5)
		expect(list.size).toBe(6)
		expect([...list]).toEqual([6, 1, 8, 2, 5, 3])

		expect(list.last!.val).toBe(3)
	})

	it('can empty a list', () => {
		const list = createDoubleLinkedList([12, 34])
		expect([...list.empty()]).toEqual([])
		expect(list.size).toEqual(0)
		expect(list.first).toEqual(null)
		expect(list.last).toEqual(null)
	})

	it('can drop nodes at a certain node', () => {
		const list = createDoubleLinkedList([1, 2, 3, 4, 5, 6, 7, 8])
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
		const list = createDoubleLinkedList([1, 2])
		list.at(1)?.set(3)
		expect([...list]).toEqual([1, 3])
	})

	it('can split the list at certain points', () => {
		const list = createDoubleLinkedList([1, 2, 3, 4, 5, 6])
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

	it('can have node from and reverted nodes starting at a given node', () => {
		const list = createDoubleLinkedList([1, 2, 3, 4, 5, 6])
		const node = list.at(3)
		expect([...list.nodesFrom(node)].map(n => n.val)).toEqual([4, 5, 6])
		expect([...list.nodesRevertedFrom(node)].map(n => n.val)).toEqual([
			4, 3, 2, 1,
		])
		expect([...list.nodesFrom(null)].map(n => n.val)).toEqual([])
		expect([...list.nodesFrom(list.last)].map(n => n.val)).toEqual([6])
		expect([...list.nodesFrom(list.first)].map(n => n.val)).toEqual([...list])
	})

	it('can update neighbors', () => {
		const node = () => ({
			value: 0,
			prevUpdated: 0,
			nextUpdated: 0,
		})
		const list1 = createDoubleLinkedList([node()], {
			onNextUpdated: n =>
				n.set({ ...n.val, nextUpdated: n.val.nextUpdated + 1 }),
		})
		list1.append(node())
		expect(list1.last?.prev?.val.nextUpdated).toBe(0)
		list1.append(node(), true)
		expect(list1.last?.prev?.val.nextUpdated).toBe(1)
		list1.appendAll([node()])
		expect(list1.last?.prev?.val.nextUpdated).toBe(0)
		list1.appendAll([node()], true)
		expect(list1.last?.prev?.val.nextUpdated).toBe(1)
		const n2 = list1.at(2)!
		list1.appendAt(n2, node())
		expect(n2.val.nextUpdated).toBe(0)
		list1.appendAt(n2, node(), true)
		expect(n2.val.nextUpdated).toBe(1)
		list1.appendAt(n2, node(), true)
		expect(n2.val.nextUpdated).toBe(2)

		expect(n2.prev?.val.nextUpdated).toBe(1)
		n2?.set({ ...n2.val, value: 22 })
		expect(n2.prev?.val.nextUpdated).toBe(1)
		n2?.set({ ...n2.val, value: 23 }, true)
		expect(n2.prev?.val.nextUpdated).toBe(2)

		const list2 = createDoubleLinkedList([node()], {
			onPrevUpdated: n =>
				n.set({ ...n.val, prevUpdated: n.val.prevUpdated + 1 }),
		})

		list2.prepend(node())
		expect(list2.first?.next?.val.prevUpdated).toBe(0)
		list2.prepend(node(), true)
		expect(list2.first?.next?.val.prevUpdated).toBe(1)
		list2.prependAll([node()])
		expect(list2.first?.next?.val.prevUpdated).toBe(0)
		list2.prependAll([node()], true)
		expect(list2.first?.next?.val.prevUpdated).toBe(1)
		const n22 = list2.at(2)!
		list2.prependAt(n22, node())
		expect(n22.val.prevUpdated).toBe(0)
		list2.prependAt(n22, node(), true)
		expect(n22.val.prevUpdated).toBe(1)
		list2.prependAt(n22, node(), true)
		expect(n22.val.prevUpdated).toBe(2)

		expect(n22.next?.val.prevUpdated).toBe(1)
		n22.set({ ...n22.val, value: 22 })
		expect(n22.next?.val.prevUpdated).toBe(1)
		n22.set({ ...n22.val, value: 23 }, true)
		expect(n22.next?.val.prevUpdated).toBe(2)
	})
})
