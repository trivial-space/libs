import assert from 'node:assert'
import { numericalCompare } from '../../dist/algorithms/base.js'
import { min, next, walkInOrder } from '../../dist/datastructures/bintree.js'
import { RBTree } from '../../dist/datastructures/rbtree.js'
import { times } from '../../dist/utils/sequence.js'

const tree = new RBTree(numericalCompare)

const randomSeq = times(() => Math.floor(Math.random() * 1000) + 1, 1000)

randomSeq.forEach(n => tree.insert(n))

const initialSum = randomSeq.reduce((a, b) => a + b)

function traverseWithNext(tree) {
	let sum = 0
	let node = min(tree, tree.root)
	while (node !== tree.nil) {
		sum += node.key
		node = next(tree, node)
	}
	assert(sum === initialSum)
}

function traverseWithRecursion(tree) {
	let sum = 0
	walkInOrder(tree, tree.root, n => (sum += n.key))
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
