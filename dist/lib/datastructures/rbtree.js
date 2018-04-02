var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as BT from './bintree';
var RBNode = (function (_super) {
    __extends(RBNode, _super);
    function RBNode(nil, key, value) {
        var _this = _super.call(this, nil, key, value) || this;
        _this.red = true;
        return _this;
    }
    return RBNode;
}(BT.Node));
export { RBNode };
export var rbNil = __assign({}, BT.nil, { red: false });
export function insertFixup(tree, node) {
    while (node.parent.red) {
        if (node.parent === node.parent.parent.left) {
            var y = node.parent.parent.right;
            if (y.red) {
                node.parent.red = false;
                y.red = false;
                node.parent.parent.red = true;
                node = node.parent.parent;
            }
            else {
                if (node === node.parent.right) {
                    node = node.parent;
                    BT.rotateLeft(tree, node);
                }
                node.parent.red = false;
                node.parent.parent.red = true;
                BT.rotateRight(tree, node.parent.parent);
            }
        }
        else {
            var y = node.parent.parent.left;
            if (y.red) {
                node.parent.red = false;
                y.red = false;
                node.parent.parent.red = true;
                node = node.parent.parent;
            }
            else {
                if (node === node.parent.left) {
                    node = node.parent;
                    BT.rotateRight(tree, node);
                }
                node.parent.red = false;
                node.parent.parent.red = true;
                BT.rotateLeft(tree, node.parent.parent);
            }
        }
    }
    tree.root.red = false;
}
export function remove(tree, node) {
    var y = node;
    var red = node.red;
    var x;
    if (node.left === tree.nil) {
        x = node.right;
        BT.transplant(tree, node, node.right);
    }
    else if (node.right === tree.nil) {
        x = node.left;
        BT.transplant(tree, node, node.left);
    }
    else {
        y = BT.min(tree, node.right);
        red = y.red;
        x = y.right;
        if (y.parent === node) {
            x.parent = y;
        }
        else {
            BT.transplant(tree, y, y.right);
            y.right = node.right;
            y.right.parent = y;
        }
        BT.transplant(tree, node, y);
        y.left = node.left;
        y.left.parent = y;
        y.red = node.red;
    }
    if (!red) {
        while (x !== tree.root && !x.red) {
            if (x === x.parent.left) {
                var w = x.parent.right;
                if (w.red) {
                    w.red = false;
                    x.parent.red = true;
                    BT.rotateLeft(tree, x.parent);
                    w = x.parent.right;
                }
                if (!w.left.red && !w.right.red) {
                    w.red = true;
                    x = x.parent;
                }
                else {
                    if (!w.right.red) {
                        w.left.red = false;
                        w.red = true;
                        BT.rotateRight(tree, w);
                        w = x.parent.right;
                    }
                    w.red = x.parent.red;
                    x.parent.red = false;
                    w.right.red = false;
                    BT.rotateLeft(tree, x.parent);
                    x = tree.root;
                }
            }
            else {
                var w = x.parent.left;
                if (w.red) {
                    w.red = false;
                    x.parent.red = true;
                    BT.rotateRight(tree, x.parent);
                    w = x.parent.left;
                }
                if (!w.left.red && !w.right.red) {
                    w.red = true;
                    x = x.parent;
                }
                else {
                    if (!w.left.red) {
                        w.right.red = false;
                        w.red = true;
                        BT.rotateLeft(tree, w);
                        w = x.parent.left;
                    }
                    w.red = x.parent.red;
                    x.parent.red = false;
                    w.left.red = false;
                    BT.rotateRight(tree, x.parent);
                    x = tree.root;
                }
            }
        }
        x.red = false;
    }
}
var RBTree = (function (_super) {
    __extends(RBTree, _super);
    function RBTree(compareFn, newNil) {
        if (newNil === void 0) { newNil = rbNil; }
        return _super.call(this, compareFn, newNil) || this;
    }
    RBTree.prototype.createNode = function (key, value) {
        return new RBNode(this.nil, key, value);
    };
    RBTree.prototype.insert = function (key, value) {
        var node = this.createNode(key, value);
        BT.insert(this, node);
        insertFixup(this, node);
        this.count++;
    };
    RBTree.prototype.remove = function (key) {
        var node = BT.search(this, this.root, key);
        if (node !== this.nil) {
            remove(this, node);
            this.count--;
        }
    };
    return RBTree;
}(BT.BinaryTree));
export { RBTree };
//# sourceMappingURL=rbtree.js.map