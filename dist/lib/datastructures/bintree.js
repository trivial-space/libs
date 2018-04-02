var Node = (function () {
    function Node(nil, key, value) {
        this.parent = nil,
            this.left = nil,
            this.right = nil,
            this.key = key;
        this.value = value;
    }
    return Node;
}());
export { Node };
export var nil = (function () {
    var nil = {
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
export function walkInOrder(n, nil, cb) {
    if (n !== nil) {
        walkInOrder(n.left, nil, cb);
        cb(n);
        walkInOrder(n.right, nil, cb);
    }
}
export function insert(tree, node) {
    var y = tree.nil;
    var x = tree.root;
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
export function search(tree, node, key) {
    while (node !== tree.nil && node.key !== key) {
        if (tree.compare(key, node.key) < 0) {
            node = node.left;
        }
        else {
            node = node.right;
        }
    }
    return node;
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
        var y = min(tree, node.right);
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
export function min(tree, node) {
    while (node !== tree.nil && node.left !== tree.nil) {
        node = node.left;
    }
    return node;
}
export function max(tree, node) {
    while (node.right !== tree.nil) {
        node = node.right;
    }
    return node;
}
export function rotateLeft(tree, node) {
    var y = node.right;
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
    var y = node.left;
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
export function walkToRoot(tree, node, callback) {
    if (!(node && node !== tree.nil)) {
        return;
    }
    while (node !== tree.nil) {
        callback(node);
        node = node.parent;
    }
}
var BinaryTree = (function () {
    function BinaryTree(compareFn, newNil) {
        if (newNil === void 0) { newNil = nil; }
        this.count = 0;
        this.compare = compareFn;
        this.root = newNil;
        this.nil = newNil;
    }
    BinaryTree.prototype.createNode = function (key, value) {
        return new Node(this.nil, key, value);
    };
    BinaryTree.prototype.insert = function (key, value) {
        insert(this, this.createNode(key, value));
        this.count++;
    };
    BinaryTree.prototype.keys = function () {
        var arr = [];
        walkInOrder(this.root, this.nil, function (n) { return arr.push(n.key); });
        return arr;
    };
    BinaryTree.prototype.get = function (key) {
        var n = search(this, this.root, key);
        return n === this.nil ? n : n.value;
    };
    BinaryTree.prototype.min = function () {
        return min(this, this.root).key;
    };
    BinaryTree.prototype.max = function () {
        return max(this, this.root).key;
    };
    BinaryTree.prototype.remove = function (key) {
        var node = search(this, this.root, key);
        if (node !== this.nil) {
            remove(this, node);
            this.count--;
        }
    };
    BinaryTree.prototype.size = function () {
        return this.count;
    };
    return BinaryTree;
}());
export { BinaryTree };
//# sourceMappingURL=bintree.js.map