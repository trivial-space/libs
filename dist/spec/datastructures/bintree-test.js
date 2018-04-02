import { expect } from 'chai';
import { BinaryTree, walkToRoot, min } from 'datastructures/bintree';
import { numericalCompare, stringCompare } from 'algorithms/base';
describe('datastructures binary tree', function () {
    describe('numberical', function () {
        var tree;
        beforeEach(function () {
            tree = new BinaryTree(numericalCompare);
        });
        it('is initially empty', function () {
            expect(tree.root).to.equal(tree.nil);
        });
        it('can insert nodes', function () {
            tree.insert(3);
            tree.insert(4, 'foo');
            tree.insert(2);
            expect(tree.root).to.not.equal(tree.nil);
            expect(tree.root.key).to.equal(3);
            expect(tree.root.left.key).to.equal(2);
            expect(tree.root.right.key).to.equal(4);
            expect(tree.root.right.value).to.equal('foo');
            expect(tree.root.left.value).to.be.undefined;
        });
        it('can get sorted keys', function () {
            tree.insert(3);
            tree.insert(4, 'foo');
            tree.insert(2);
            expect(tree.keys()).to.deep.equal([2, 3, 4]);
        });
        it('can search for a key', function () {
            tree.insert(3);
            tree.insert(4, 'foo');
            expect(tree.get(4)).to.equal('foo');
            expect(tree.get(3)).to.be.undefined;
            expect(tree.get(2)).to.equal(tree.nil);
        });
        it('can retrieve the minimum and maximum', function () {
            tree.insert(3);
            tree.insert(4);
            tree.insert(2);
            expect(tree.min()).to.equal(2);
            expect(tree.max()).to.equal(4);
        });
        it('can remove items', function () {
            tree.insert(3);
            tree.insert(4);
            tree.insert(2);
            tree.remove(3);
            expect(tree.keys()).to.deep.equal([2, 4]);
        });
        it('has an element count', function () {
            expect(tree.size()).to.equal(0);
            tree.insert(3);
            expect(tree.size()).to.equal(1);
            tree.insert(4);
            expect(tree.size()).to.equal(2);
            tree.insert(2);
            expect(tree.size()).to.equal(3);
            tree.remove(3);
            expect(tree.size()).to.equal(2);
            tree.remove(5);
            expect(tree.size()).to.equal(2);
            tree.remove(2);
            expect(tree.size()).to.equal(1);
            tree.remove(4);
            expect(tree.size()).to.equal(0);
            tree.remove(4);
            expect(tree.size()).to.equal(0);
        });
    });
    describe('custom keys', function () {
        it('can be given a custom compare function', function () {
            var tree = new BinaryTree(stringCompare);
            tree.insert('foo');
            tree.insert('bar');
            tree.insert('bazz');
            tree.insert('A');
            tree.insert('a');
            expect(tree.keys()).to.deep.equal(['a', 'A', 'bar', 'bazz', 'foo']);
        });
    });
    describe('functions', function () {
        it('can walk to root', function () {
            var tree = new BinaryTree(numericalCompare);
            tree.insert(4);
            tree.insert(3);
            tree.insert(2);
            tree.insert(1);
            var height = 0;
            var keys = [];
            walkToRoot(tree, min(tree, tree.root), function (n) {
                height++;
                keys.push(n.key);
            });
            expect(height).to.equal(4);
            expect(keys).to.deep.equal([1, 2, 3, 4]);
        });
    });
});
//# sourceMappingURL=bintree-test.js.map