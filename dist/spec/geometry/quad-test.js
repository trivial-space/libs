import { expect } from 'chai';
import { top, right, bottom, left, divideHorizontal, divideVertical, extrudeTop, extrudeRight, extrudeBottom, extrudeLeft, combineEdges, quadTriangles, triangulate } from 'geometry/quad';
describe('geometry quad', function () {
    it('has clockwise sides', function () {
        const q = [[1], [2], [3], [4]];
        expect(top(q)).to.deep.equal([[1], [2]]);
        expect(right(q)).to.deep.equal([[2], [3]]);
        expect(bottom(q)).to.deep.equal([[3], [4]]);
        expect(left(q)).to.deep.equal([[4], [1]]);
    });
    it('can be divided horizontally', function () {
        const q = [[1], [2], [3], [4]];
        const q1 = divideHorizontal(0.5, 0.25, q);
        expect(q1).to.deep.equal([
            [[1], [2], [2.25], [2.5]],
            [[2.5], [2.25], [3], [4]]
        ]);
        expect(bottom(q1[0])).to.deep.equal(top(q1[1]).reverse());
    });
    it('can be divided vertically', function () {
        const q = [[1], [2], [3], [4]];
        const q1 = divideVertical(0.5, 0.25, q);
        expect(q1).to.deep.equal([
            [[1], [1.5], [3.75], [4]],
            [[1.5], [2], [3], [3.75]]
        ]);
        expect(right(q1[0])).to.deep.equal(left(q1[1]).reverse());
    });
    it('can be extruded from one of the side edges', function () {
        const e = [[1], [2]];
        const dir = [3];
        const q1 = extrudeTop(dir, e);
        const q2 = extrudeRight(dir, e);
        const q3 = extrudeBottom(dir, e);
        const q4 = extrudeLeft(dir, e);
        expect(q1).to.deep.equal([[4], [5], [2], [1]]);
        expect(q2).to.deep.equal([[1], [4], [5], [2]]);
        expect(q3).to.deep.equal([[1], [2], [5], [4]]);
        expect(q4).to.deep.equal([[4], [1], [2], [5]]);
    });
    it('can be created from 2 edges', function () {
        expect(combineEdges([[1], [2]], [[3], [4]])).to.deep.equal([
            [1],
            [2],
            [4],
            [3]
        ]);
    });
    it('can generate triangleIndizes', function () {
        expect(triangulate(1)).to.deep.equal(quadTriangles);
        expect(triangulate(2)).to.deep.equal([
            [0, 2, 1],
            [0, 3, 2],
            [4, 6, 5],
            [4, 7, 6]
        ]);
        expect(triangulate(3)).to.deep.equal([
            [0, 2, 1],
            [0, 3, 2],
            [4, 6, 5],
            [4, 7, 6],
            [8, 10, 9],
            [8, 11, 10]
        ]);
    });
});
//# sourceMappingURL=quad-test.js.map