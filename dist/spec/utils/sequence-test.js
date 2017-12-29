import { shuffle } from 'utils/sequence';
import { expect } from 'chai';
import { equalArray } from 'utils/predicates';
describe('utils sequence', function () {
    describe('shuffle', function () {
        it('shuffles an array', function () {
            var arr = [1, 3, 2, 4, 3, 5, 7, 8];
            var shuffled = shuffle(arr);
            expect(arr).to.not.equal(shuffled);
            expect(arr.length).to.equal(shuffled.length);
            expect(equalArray(arr, shuffled)).to.be.false;
            expect(equalArray(arr.sort(), shuffled.sort())).to.be.true;
        });
    });
});
//# sourceMappingURL=sequence-test.js.map