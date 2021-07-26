function createNode(val) {
    let next = null;
    let prev = null;
    const node = {
        get val() {
            return val;
        },
        get next() {
            return next;
        },
        get prev() {
            return prev;
        },
        setNext(node) {
            next = node || null;
        },
        setPrev(node) {
            prev = node || null;
        },
    };
    return node;
}
export function createDoubleLinkedList(...vals) {
    let size = 0;
    let first = null;
    let last = null;
    function appendVal(val) {
        const node = createNode(val);
        if (!last) {
            first = last = createNode(val);
            size = 1;
        }
        else {
            last.setNext(node);
            node.setPrev(last);
            last = node;
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
        append(...vals) {
            vals.forEach(appendVal);
        },
    };
    if (vals) {
        list.append(...vals);
    }
    return list;
}
//# sourceMappingURL=double-linked-list.js.map