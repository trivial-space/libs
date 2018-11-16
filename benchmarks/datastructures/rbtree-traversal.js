const lib = require('../../dist/tvs-libs')
const assert = require('chai').assert

const rbtree = lib.datastructures.rbtree
const bintree = lib.datastructures.bintree

const tree = new rbtree.RBTree(
	lib.algorithms.base.numericalCompare
)

const randomSeq = lib.utils.seq.times(() => Math.floor(Math.random() * 1000) + 1, 1000)

randomSeq.forEach(n => tree.insert(n))

const initialSum = randomSeq.reduce((a, b) => a + b)

function traverseWithNext(tree) {
	let sum = 0
	let node = bintree.min(tree, tree.root)
	while (node !== tree.nil) {
		sum += node.key
		node = bintree.next(tree, node)
	}
	assert(sum === initialSum)
}

function traverseWithRecursion(tree) {
	let sum = 0
	bintree.walkInOrder(tree, tree.root, n => sum += n.key)
	assert(sum === initialSum)
}

// Performance Test
const n = 10000

let start = Date.now()
for (let i = 0; i < n; i++) {
	traverseWithNext(tree)
}
console.log(`traverseWithNext run ${n} times in ${Date.now() - start}ms`)

start = Date.now()
for (let i = 0; i < n; i++) {
	traverseWithRecursion(tree)
}
console.log(`traverseWithRecursion run ${n} times in ${Date.now() - start}ms`)
