import { CompareFn } from '../algorithms/base';
import * as BT from './bintree';
export declare class RBNode<K = any, V = any> extends BT.Node<K, V> {
    parent: RBNode<K, V>;
    left: RBNode<K, V>;
    right: RBNode<K, V>;
    red: boolean;
    constructor(nil: RBNil, key: K, value?: V);
}
export declare type RBNil = RBNode<any, any>;
export interface RBTreeData<K = any, V = any> extends BT.BinaryTreeData<K, V> {
    root: RBNode<K, V>;
    nil: RBNil;
}
export declare const rbNil: RBNode<any, any>;
export declare function insertFixup(tree: RBTreeData, node: RBNode): void;
export declare function remove<K>(tree: RBTreeData<K>, node: RBNode<K>): void;
export declare class RBTree<K, V> extends BT.BinaryTree<K, V> implements RBTreeData<K, V> {
    compare: CompareFn<K>;
    root: RBNode<K, V>;
    nil: RBNil;
    constructor(compareFn: CompareFn<K>, newNil?: RBNil);
    createNode(key: K, value?: V): RBNode<K, V>;
    insert(key: K, value?: V): RBNode<K, V>;
    remove(key: K): void;
}
