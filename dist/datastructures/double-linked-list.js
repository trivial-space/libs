class Node {
    constructor(val, list) {
        this.next = null;
        this.prev = null;
        this.val = val;
        this.list = list;
    }
    setNext(newNext) {
        this.next = newNext || null;
    }
    setPrev(newPrev) {
        this.prev = newPrev || null;
    }
}
export function createDoubleLinkedList(...vals) {
    let size = 0;
    let first = null;
    let last = null;
    function appendValAt(val, oldNode) {
        const node = new Node(val, list);
        const oldNext = oldNode.next;
        oldNode.setNext(node);
        node.setPrev(oldNode);
        node.setNext(oldNext);
        if (oldNext) {
            oldNext.setPrev(node);
        }
        else {
            last = node;
        }
        size++;
        return node;
    }
    function appendVal(val) {
        const node = new Node(val, list);
        if (!last) {
            first = last = node;
            size = 1;
        }
        else {
            last.setNext(node);
            node.setPrev(last);
            last = node;
            size++;
        }
    }
    function prependValAt(val, oldNode) {
        const node = new Node(val, list);
        const oldPrev = oldNode.prev;
        oldNode.setPrev(node);
        node.setNext(oldNode);
        node.setPrev(oldPrev);
        if (oldPrev) {
            oldPrev.setNext(node);
        }
        else {
            first = node;
        }
        size++;
        return node;
    }
    function prependVal(val) {
        const node = new Node(val, list);
        if (!first) {
            first = last = node;
            size = 1;
        }
        else {
            first.setPrev(node);
            node.setNext(first);
            first = node;
            size++;
        }
    }
    const list = {
        get size() {
            return size;
        },
        get first() {
            return first;
        },
        get last() {
            return last;
        },
        at(n) {
            const reverse = n < 0;
            let count = Math.abs(n);
            let prev = reverse ? last : first;
            let next = prev;
            while (count > 0 && next) {
                next = reverse ? prev && prev.prev : prev && prev.next;
                count--;
                if (next) {
                    prev = next;
                }
            }
            return prev;
        },
        append(...vals) {
            let i = 0;
            let val;
            while ((val = vals[i])) {
                appendVal(val);
                i++;
            }
            return list;
        },
        appendAt(node, ...vals) {
            let i = 0;
            let val;
            while ((val = vals[i])) {
                node = appendValAt(val, node);
                i++;
            }
            return list;
        },
        prepend(...vals) {
            for (let i = vals.length - 1; i >= 0; i--) {
                prependVal(vals[i]);
            }
            return list;
        },
        prependAt(node, ...vals) {
            for (let i = vals.length - 1; i >= 0; i--) {
                node = prependValAt(vals[i], node);
            }
            return list;
        },
        drop(n = 1) {
            const reverse = n < 0;
            let count = Math.min(Math.abs(n), size);
            let node = reverse ? last : first;
            while (count > 0 && node) {
                node = reverse ? node.prev : node.next;
                count--;
                size--;
            }
            if (size === 0) {
                last = null;
                first = null;
            }
            else if (reverse) {
                last = node;
                node === null || node === void 0 ? void 0 : node.setNext();
            }
            else {
                first = node;
                node === null || node === void 0 ? void 0 : node.setPrev();
            }
            return list;
        },
        dropAt(node, n = 1) {
            const reverse = n < 0;
            let count = Math.abs(n);
            let currentNode = node;
            while (count > 0 && currentNode) {
                currentNode = reverse ? currentNode.prev : currentNode.next;
                count--;
                size--;
            }
            if (size === 0) {
                last = null;
                first = null;
            }
            else if (reverse) {
                if (node.next) {
                    node.next.setPrev(currentNode);
                }
                else {
                    last = currentNode;
                }
                if (currentNode) {
                    currentNode.setNext(node.next);
                }
                else {
                    first = node.next;
                }
            }
            else {
                if (node.prev) {
                    node.prev.setNext(currentNode);
                }
                else {
                    first = currentNode;
                }
                if (currentNode) {
                    currentNode.setPrev(node.prev);
                }
                else {
                    last = node.prev;
                }
            }
            return list;
        },
        empty() {
            size = 0;
            first = null;
            last = null;
            return list;
        },
        [Symbol.iterator]: function* () {
            let node = first;
            while (node) {
                yield node.val;
                node = node.next;
            }
        },
        reverted: {
            [Symbol.iterator]: function* () {
                let node = last;
                while (node) {
                    yield node.val;
                    node = node.prev;
                }
            },
        },
    };
    if (vals && vals.length) {
        list.append(...vals);
    }
    return list;
}
//# sourceMappingURL=double-linked-list.js.map