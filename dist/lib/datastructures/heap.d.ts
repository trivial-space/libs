export interface Heap<T> {
    insert: (item: T) => void;
    getTop: () => T;
    pull: () => T;
    size: () => number;
    fromArray: (items: T[]) => void;
}
export declare type HeapCompareFn<T> = (parent: T, child: T) => boolean;
export declare function parentIndex(currentIndex: number): number;
export declare function rightIndex(currentIndex: number): number;
export declare function leftIndex(currentIndex: number): number;
export declare function heapifyAt<T>(compareFn: HeapCompareFn<T>, arr: T[], i: number): void;
export declare function heapify<T>(compareFn: HeapCompareFn<T>, arr: T[]): void;
export declare function insert<T>(compareFn: HeapCompareFn<T>, arr: T[], item: T): void;
export declare function createHeap<T>(compareFn: HeapCompareFn<T>): Heap<T>;
export declare function maxHeapCompareFn(parent: number, child: number): boolean;
