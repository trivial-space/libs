import { expect } from 'chai';
import { lerp } from 'math/core';
import { interpolate, lerpVecs, split, translate, rotateLeftInPlace, rotateRightInPlace, rotateLeft, rotateRight } from 'geometry/primitives';
describe('geometry primitives', function () {
    describe('operations', function () {
        it('interpolate', function () {
            expect(interpolate(lerp, 0.5, [1], [3])).to.deep.equal([2]);
            expect(lerpVecs(0.5, [1], [3])).to.deep.equal([2]);
        });
        it('split', function () {
            expect(split(0.5, [[1], [3]])).to.deep.equal([[[1], [2]], [[2], [3]]]);
            expect(split(0.25, [[1, 5], [3, 1]])).to.deep.equal([[[1, 5], [1.5, 4]], [[1.5, 4], [3, 1]]]);
        });
        it('translate', function () {
            var g = [[1], [2], [3]];
            var t = translate([4], g);
            expect(t).to.deep.equal([[5], [6], [7]]);
            expect(g).to.not.deep.equal(t);
            expect(translate([4, 4], [[1, 1], [2, 2], [3, 3]])).to.deep.equal([[5, 5], [6, 6], [7, 7]]);
        });
    });
    describe('rotations', function () {
        it('can happen in place', function () {
            var g = [[1], [2], [3]];
            var g1 = rotateLeftInPlace(g);
            expect(g1).to.deep.equal([[3], [1], [2]]);
            expect(g1).to.equal(g);
            var g2 = rotateRightInPlace(g);
            expect(g2).to.deep.equal([[1], [2], [3]]);
            expect(g2).to.equal(g);
        });
        it('can happen in place', function () {
            var g = [[1], [2], [3]];
            var g1 = rotateLeft(g);
            expect(g1).to.deep.equal([[3], [1], [2]]);
            expect(g1).to.not.equal(g);
            var g2 = rotateRight(g);
            expect(g2).to.deep.equal([[2], [3], [1]]);
            expect(g2).to.not.equal(g);
        });
    });
});
//# sourceMappingURL=primitives-test.js.map