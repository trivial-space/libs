import { expect } from 'chai';
import { RBTree } from 'datastructures/rbtree';
import { numericalCompare, stringCompare } from 'algorithms/base';
import { times, shuffle } from 'utils/sequence';
import { min, walkInOrder, walkToRoot } from 'datastructures/bintree';
describe('datastructures red black tree', function () {
    describe('numberical', function () {
        var tree;
        beforeEach(function () {
            tree = new RBTree(numericalCompare);
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
            var tree = new RBTree(stringCompare);
            tree.insert('foo');
            tree.insert('bar');
            tree.insert('bazz');
            tree.insert('A');
            tree.insert('a');
            expect(tree.keys()).to.deep.equal(['a', 'A', 'bar', 'bazz', 'foo']);
        });
    });
    describe('red black property', function () {
        it('tree height is always max log(n) * 2 and has same black node count', function () {
            var numbers = times(Math.random, 100)
                .map(function (n) { return Math.floor(n * 100); });
            var tree = new RBTree(numericalCompare);
            var count = 0;
            var _loop_1 = function (n) {
                tree.insert(n);
                count++;
                var minBlackCount = 0;
                var minNode = min(tree, tree.root);
                walkToRoot(tree, minNode, function (n) {
                    if (!n.red) {
                        minBlackCount++;
                    }
                });
                walkInOrder(tree.root, tree.nil, function (n) {
                    if (n.left === tree.nil && n.right === tree.nil) {
                        var height_1 = 0;
                        var blackCount_1 = 0;
                        walkToRoot(tree, n, function (n) {
                            height_1++;
                            if (!n.red) {
                                blackCount_1++;
                            }
                        });
                        expect(blackCount_1).to.equal(minBlackCount);
                        expect(height_1).to.be.lessThan(Math.floor(Math.log2(count + 1) * 2 + 1));
                    }
                });
            };
            for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
                var n = numbers_1[_i];
                _loop_1(n);
            }
            expect(count === numbers.length && count === tree.size()).to.be.true;
            var shuffled = shuffle(numbers);
            var _loop_2 = function (n) {
                tree.remove(n);
                count--;
                var minBlackCount = 0;
                var minNode = min(tree, tree.root);
                walkToRoot(tree, minNode, function (n) {
                    if (!n.red) {
                        minBlackCount++;
                    }
                });
                walkInOrder(tree.root, tree.nil, function (n) {
                    if (n.left === tree.nil && n.right === tree.nil) {
                        var height_2 = 0;
                        var blackCount_2 = 0;
                        walkToRoot(tree, n, function (n) {
                            height_2++;
                            if (!n.red) {
                                blackCount_2++;
                            }
                        });
                        expect(blackCount_2).to.equal(minBlackCount);
                        expect(height_2).to.be.lessThan(Math.floor(Math.log2(count + 1) * 2 + 1));
                    }
                });
            };
            for (var _a = 0, shuffled_1 = shuffled; _a < shuffled_1.length; _a++) {
                var n = shuffled_1[_a];
                _loop_2(n);
            }
        });
    });
});
//# sourceMappingURL=rbtree-test.js.map