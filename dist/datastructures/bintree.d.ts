import { CompareFn } from '../algorithms/base';
export declare class Node<K = any, V = any> {
    parent: Node<K, V>;
    left: Node<K, V>;
    right: Node<K, V>;
    key: K;
    value?: V;
    constructor(nil: Nil, key: K, value?: V);
}
export type Nil = Node<any, any>;
export interface BinaryTreeData<K = any, V = any> {
    root: Node<K, V>;
    nil: Nil;
    compare: CompareFn<K>;
}
export declare const nil: Node<any, any>;
export declare function walkInOrder<K, V>(tree: BinaryTreeData<K, V>, walkRoot: Node<K, V>, cb: (n: Node<K, V>) => void): void;
export declare function next<K, V>(tree: BinaryTreeData<K, V>, node: Node<K, V>): Node<K, any>;
export declare function prev<K, V>(tree: BinaryTreeData<K, V>, node: Node<K, V>): Node<K, any>;
export declare function insert<K, V>(tree: BinaryTreeData<K, V>, node: Node<K, V>): void;
export declare function search<K>(tree: BinaryTreeData<K>, startNode: Node<K>, key: K): Node<K, any>;
export declare function transplant<K>(tree: BinaryTreeData<K>, oldNode: Node<K>, newNode: Node<K>): void;
export declare function remove<K>(tree: BinaryTreeData<K>, node: Node<K>): void;
export declare function min<K>(tree: BinaryTreeData<K>, startNode: Node<K>): Node<K, any>;
export declare function max<K>(tree: BinaryTreeData<K>, startNode: Node<K>): Node<K, any>;
export declare function rotateLeft<K>(tree: BinaryTreeData<K>, node: Node<K>): void;
export declare function rotateRight<K>(tree: BinaryTreeData<K>, node: Node<K>): void;
export declare function walkToRoot<K>(tree: BinaryTreeData, startNode: Node<K>, callback: (n: Node<K>) => void): void;
export declare class BinaryTree<K, V> implements BinaryTreeData<K, V> {
    compare: CompareFn<K>;
    root: Node<K, V>;
    nil: Nil;
    count: number;
    constructor(compareFn: CompareFn<K>, newNil?: Nil);
    createNode(key: K, value?: V): Node<K, V>;
    insert(key: K, value?: V): Node<K, V>;
    getNode(key: K): Node<K, any>;
    get(key: K): any;
    keys(): K[];
    min(): K;
    max(): K;
    remove(key: K): void;
    size(): number;
}
