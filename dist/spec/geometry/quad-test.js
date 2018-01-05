import { expect } from 'chai';
import { top, right, bottom, left } from 'geometry/quad';
describe('geometry quad', function () {
    it('has clockwise sides', function () {
        var q = [[1], [2], [3], [4]];
        expect(top(q)).to.deep.equal([[1], [2]]);
        expect(right(q)).to.deep.equal([[2], [3]]);
        expect(bottom(q)).to.deep.equal([[3], [4]]);
        expect(left(q)).to.deep.equal([[4], [1]]);
    });
});
//# sourceMappingURL=quad-test.js.map