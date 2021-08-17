import { Opt } from '../types';
export interface DoubleLinkedNode<T> {
    readonly val: T;
    readonly next: Opt<DoubleLinkedNode<T>>;
    readonly prev: Opt<DoubleLinkedNode<T>>;
    readonly list: DoubleLinkedList<T>;
    set: (val: T) => void;
}
export interface DoubleLinkedList<T> extends Iterable<T> {
    readonly first: Opt<DoubleLinkedNode<T>>;
    readonly last: Opt<DoubleLinkedNode<T>>;
    readonly size: number;
    at(n: number): Opt<DoubleLinkedNode<T>>;
    readonly reverted: Iterable<T>;
    append(...vals: [T, ...T[]]): DoubleLinkedList<T>;
    appendAt(node: DoubleLinkedNode<T>, ...vals: [T, ...T[]]): DoubleLinkedList<T>;
    prepend(...vals: [T, ...T[]]): DoubleLinkedList<T>;
    prependAt(node: DoubleLinkedNode<T>, ...vals: [T, ...T[]]): DoubleLinkedList<T>;
    drop(n?: number): DoubleLinkedList<T>;
    dropAt(node: DoubleLinkedNode<T>, n?: number): DoubleLinkedList<T>;
    splitAt(node: DoubleLinkedNode<T>): [DoubleLinkedList<T>, DoubleLinkedList<T>];
    empty(): DoubleLinkedList<T>;
}
export declare function createDoubleLinkedList<T>(...vals: T[]): DoubleLinkedList<T>;
