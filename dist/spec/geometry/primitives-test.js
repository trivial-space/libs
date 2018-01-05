import { expect } from 'chai';
import { lerp } from 'math/core';
import { interpolate, lerpVecs, split, translate } from 'geometry/primitives';
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
});
//# sourceMappingURL=primitives-test.js.map