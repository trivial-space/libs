export interface DoubleLinkedNode<T> {
    readonly val: T;
    readonly next: DoubleLinkedNode<T> | null;
    readonly prev: DoubleLinkedNode<T> | null;
    setPrev(node?: DoubleLinkedNode<T>): void;
    setNext(node?: DoubleLinkedNode<T>): void;
}
export interface DoubleLinkedList<T> {
    readonly first: DoubleLinkedNode<T> | null;
    readonly last: DoubleLinkedNode<T> | null;
    readonly size: number;
    append(...vals: T[]): DoubleLinkedList<T>;
    prepend(...vals: T[]): DoubleLinkedList<T>;
}
export declare function createDoubleLinkedList<T>(...vals: T[]): DoubleLinkedList<T>;
