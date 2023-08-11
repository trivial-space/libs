import { Opt } from '../types.js';
export interface DoubleLinkedNode<T> {
    readonly val: T;
    readonly next: Opt<DoubleLinkedNode<T>>;
    readonly prev: Opt<DoubleLinkedNode<T>>;
    readonly list: DoubleLinkedList<T>;
    set: (val: T, recalculate?: boolean) => void;
}
export interface DoubleLinkedList<T> extends Iterable<T> {
    readonly first: Opt<DoubleLinkedNode<T>>;
    readonly last: Opt<DoubleLinkedNode<T>>;
    readonly size: number;
    at(n: number): Opt<DoubleLinkedNode<T>>;
    append(val: T, recalculate?: boolean): DoubleLinkedList<T>;
    appendAt(node: DoubleLinkedNode<T>, val: T, recalculate?: boolean): DoubleLinkedList<T>;
    appendAll(vals: T[], recalculate?: boolean): DoubleLinkedList<T>;
    prepend(val: T, recalculate?: boolean): DoubleLinkedList<T>;
    prependAt(node: DoubleLinkedNode<T>, val: T, recalculate?: boolean): DoubleLinkedList<T>;
    prependAll(vals: T[], recalculate?: boolean): DoubleLinkedList<T>;
    drop(n?: number): DoubleLinkedList<T>;
    dropAt(node: DoubleLinkedNode<T>, n?: number): DoubleLinkedList<T>;
    splitAt(node: DoubleLinkedNode<T>): [DoubleLinkedList<T>, DoubleLinkedList<T>];
    empty(): DoubleLinkedList<T>;
    readonly reverted: Iterable<T>;
    readonly nodes: Iterable<DoubleLinkedNode<T>>;
    readonly nodesReverted: Iterable<DoubleLinkedNode<T>>;
    nodesFrom(node: Opt<DoubleLinkedNode<T>>): Iterable<DoubleLinkedNode<T>>;
    nodesRevertedFrom(node: Opt<DoubleLinkedNode<T>>): Iterable<DoubleLinkedNode<T>>;
}
export interface LinkedListOptions<T> {
    onNextUpdated?: (node: DoubleLinkedNode<T>) => void;
    onPrevUpdated?: (node: DoubleLinkedNode<T>) => void;
}
export declare function createDoubleLinkedList<T>(vals?: T[], { onNextUpdated, onPrevUpdated }?: LinkedListOptions<T>): DoubleLinkedList<T>;
