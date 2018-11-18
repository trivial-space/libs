import { CompareFn } from '../algorithms/base';
export interface Heap<T> {
    insert: (item: T) => void;
    getTop: () => T;
    pull: () => T;
    size: () => number;
    fromArray: (items: T[]) => void;
}
export declare function parentIndex(currentIndex: number): number;
export declare function rightIndex(currentIndex: number): number;
export declare function leftIndex(currentIndex: number): number;
export declare function heapifyAt<T>(compareFn: CompareFn<T>, arr: T[], i: number): void;
export declare function heapify<T>(compareFn: CompareFn<T>, arr: T[]): void;
export declare function insert<T>(compareFn: CompareFn<T>, arr: T[], item: T): void;
export declare function createHeap<T>(compareFn: CompareFn<T>): Heap<T>;
