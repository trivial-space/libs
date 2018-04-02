export function parentIndex(currentIndex) {
    return Math.floor(currentIndex / 2);
}
export function rightIndex(currentIndex) {
    return currentIndex * 2 + 1;
}
export function leftIndex(currentIndex) {
    return currentIndex * 2;
}
function swap(i, j, arr) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
export function heapifyAt(compareFn, arr, i) {
    var l = leftIndex(i);
    var r = rightIndex(i);
    var top = i;
    if (l < arr.length && compareFn(arr[top], arr[l]) < 0) {
        top = l;
    }
    if (r < arr.length && compareFn(arr[top], arr[r]) < 0) {
        top = r;
    }
    if (top !== i) {
        swap(i, top, arr);
        heapifyAt(compareFn, arr, top);
    }
}
export function heapify(compareFn, arr) {
    for (var i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
        heapifyAt(compareFn, arr, i);
    }
}
export function insert(compareFn, arr, item) {
    arr.push(item);
    if (arr.length > 1) {
        var i = arr.length - 1;
        var p = parentIndex(i);
        while (i > 0 && compareFn(arr[p], arr[i]) < 0) {
            swap(p, i, arr);
            i = p;
            p = parentIndex(i);
        }
    }
}
export function createHeap(compareFn) {
    var arr = [];
    function size() {
        return arr.length;
    }
    function fromArray(a) {
        arr = a.concat();
        heapify(compareFn, arr);
    }
    function pull() {
        var top = arr.shift();
        heapifyAt(compareFn, arr, 0);
        return top;
    }
    function getTop() {
        return arr[0];
    }
    return {
        size: size,
        fromArray: fromArray,
        pull: pull,
        getTop: getTop,
        insert: function (item) { return insert(compareFn, arr, item); }
    };
}
//# sourceMappingURL=heap.js.map