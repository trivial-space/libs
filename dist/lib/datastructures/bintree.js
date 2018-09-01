export class Node {
    constructor(nil, key, value) {
        this.parent = nil,
            this.left = nil,
            this.right = nil,
            this.key = key;
        this.value = value;
    }
}
export const nil = (function () {
    const nil = {
        parent: null,
        left: null,
        right: null,
        key: null
    };
    nil.parent = nil;
    nil.left = nil;
    nil.right = nil;
    return nil;
})();
export function walkInOrder(tree, walkRoot, cb) {
    if (walkRoot !== tree.nil) {
        walkInOrder(tree, walkRoot.left, cb);
        cb(walkRoot);
        walkInOrder(tree, walkRoot.right, cb);
    }
}
export function next(tree, node) {
    if (node.right !== tree.nil) {
        return min(tree, node.right);
    }
    let parent = node.parent;
    while (parent !== tree.nil && node === parent.right) {
        node = parent;
        parent = parent.parent;
    }
    return parent;
}
export function prev(tree, node) {
    if (node.left !== tree.nil) {
        return max(tree, node.right);
    }
    let parent = node.parent;
    while (parent !== tree.nil && node === parent.left) {
        node = parent;
        parent = parent.parent;
    }
    return parent;
}
export function insert(tree, node) {
    let y = tree.nil;
    let x = tree.root;
    while (x !== tree.nil) {
        y = x;
        if (tree.compare(node.key, x.key) < 0) {
            x = x.left;
        }
        else {
            x = x.right;
        }
    }
    node.parent = y;
    if (y === tree.nil) {
        tree.root = node;
    }
    else if (tree.compare(node.key, y.key) < 0) {
        y.left = node;
    }
    else {
        y.right = node;
    }
}
export function search(tree, startNode, key) {
    while (startNode !== tree.nil && startNode.key !== key) {
        if (tree.compare(key, startNode.key) < 0) {
            startNode = startNode.left;
        }
        else {
            startNode = startNode.right;
        }
    }
    return startNode;
}
export function transplant(tree, oldNode, newNode) {
    if (oldNode.parent === tree.nil) {
        tree.root = newNode;
    }
    else if (oldNode === oldNode.parent.left) {
        oldNode.parent.left = newNode;
    }
    else {
        oldNode.parent.right = newNode;
    }
    newNode.parent = oldNode.parent;
}
export function remove(tree, node) {
    if (node.left === tree.nil) {
        transplant(tree, node, node.right);
    }
    else if (node.right === tree.nil) {
        transplant(tree, node, node.left);
    }
    else {
        const y = min(tree, node.right);
        if (y.parent !== node) {
            transplant(tree, y, y.right);
            y.right = node.right;
            y.right.parent = y;
        }
        transplant(tree, node, y);
        y.left = node.left;
        y.left.parent = y;
    }
}
export function min(tree, startNode) {
    while (startNode !== tree.nil && startNode.left !== tree.nil) {
        startNode = startNode.left;
    }
    return startNode;
}
export function max(tree, startNode) {
    while (startNode.right !== tree.nil) {
        startNode = startNode.right;
    }
    return startNode;
}
export function rotateLeft(tree, node) {
    const y = node.right;
    node.right = y.left;
    if (y.left !== tree.nil) {
        y.left.parent = node;
    }
    y.parent = node.parent;
    if (node.parent === tree.nil) {
        tree.root = y;
    }
    else if (node === node.parent.left) {
        node.parent.left = y;
    }
    else {
        node.parent.right = y;
    }
    y.left = node;
    node.parent = y;
}
export function rotateRight(tree, node) {
    const y = node.left;
    node.left = y.right;
    if (y.right !== tree.nil) {
        y.right.parent = node;
    }
    y.parent = node.parent;
    if (node.parent === tree.nil) {
        tree.root = y;
    }
    else if (node === node.parent.right) {
        node.parent.right = y;
    }
    else {
        node.parent.left = y;
    }
    y.right = node;
    node.parent = y;
}
export function walkToRoot(tree, startNode, callback) {
    if (!(startNode && startNode !== tree.nil)) {
        return;
    }
    while (startNode !== tree.nil) {
        callback(startNode);
        startNode = startNode.parent;
    }
}
export class BinaryTree {
    constructor(compareFn, newNil = nil) {
        this.count = 0;
        this.compare = compareFn;
        this.root = newNil;
        this.nil = newNil;
    }
    createNode(key, value) {
        return new Node(this.nil, key, value);
    }
    insert(key, value) {
        const n = this.createNode(key, value);
        insert(this, n);
        this.count++;
        return n;
    }
    getNode(key) {
        return search(this, this.root, key);
    }
    get(key) {
        const n = this.getNode(key);
        return n === this.nil ? n : n.value;
    }
    keys() {
        const arr = [];
        walkInOrder(this, this.root, n => arr.push(n.key));
        return arr;
    }
    min() {
        return min(this, this.root).key;
    }
    max() {
        return max(this, this.root).key;
    }
    remove(key) {
        const node = search(this, this.root, key);
        if (node !== this.nil) {
            remove(this, node);
            this.count--;
        }
    }
    size() {
        return this.count;
    }
}
//# sourceMappingURL=bintree.js.map