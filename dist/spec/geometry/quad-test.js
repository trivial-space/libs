import { expect } from 'chai';
import { top, right, bottom, left, divideHorizontal, divideVertical, extrudeTop, extrudeRight, extrudeBottom, extrudeLeft, combineEdges, quadTriangles, triangulate } from 'geometry/quad';
describe('geometry quad', function () {
    it('has clockwise sides', function () {
        var q = [[1], [2], [3], [4]];
        expect(top(q)).to.deep.equal([[1], [2]]);
        expect(right(q)).to.deep.equal([[2], [3]]);
        expect(bottom(q)).to.deep.equal([[3], [4]]);
        expect(left(q)).to.deep.equal([[4], [1]]);
    });
    it('can be divided horizontally', function () {
        var q = [[1], [2], [3], [4]];
        var q1 = divideHorizontal(0.5, 0.25, q);
        expect(q1)
            .to.deep.equal([
            [[1], [2], [2.25], [2.5]],
            [[2.5], [2.25], [3], [4]]
        ]);
        expect(bottom(q1[0])).to.deep.equal(top(q1[1]).reverse());
    });
    it('can be divided vertically', function () {
        var q = [[1], [2], [3], [4]];
        var q1 = divideVertical(0.5, 0.25, q);
        expect(q1)
            .to.deep.equal([
            [[1], [1.5], [3.75], [4]],
            [[1.5], [2], [3], [3.75]]
        ]);
        expect(right(q1[0])).to.deep.equal(left(q1[1]).reverse());
    });
    it('can be extruded from one of the side edges', function () {
        var e = [[1], [2]];
        var dir = [3];
        var q1 = extrudeTop(dir, e);
        var q2 = extrudeRight(dir, e);
        var q3 = extrudeBottom(dir, e);
        var q4 = extrudeLeft(dir, e);
        expect(q1).to.deep.equal([[4], [5], [2], [1]]);
        expect(q2).to.deep.equal([[1], [4], [5], [2]]);
        expect(q3).to.deep.equal([[1], [2], [5], [4]]);
        expect(q4).to.deep.equal([[4], [1], [2], [5]]);
    });
    it('can be created from 2 edges', function () {
        expect(combineEdges([[1], [2]], [[3], [4]])).to.deep.equal([[1], [2], [4], [3]]);
    });
    it('can generate triangleIndizes', function () {
        expect(triangulate(1)).to.deep.equal(quadTriangles);
        expect(triangulate(2)).to.deep.equal([1, 2, 3, 1, 3, 4, 5, 6, 7, 5, 7, 8]);
        expect(triangulate(3)).to.deep.equal([1, 2, 3, 1, 3, 4, 5, 6, 7, 5, 7, 8, 9, 10, 11, 9, 11, 12]);
    });
});
//# sourceMappingURL=quad-test.js.map