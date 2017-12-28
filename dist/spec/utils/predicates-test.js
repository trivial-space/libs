import { and, not, equalArray, equalObject } from 'utils/predicates';
import { expect } from 'chai';
describe('utils predicates', function () {
    describe('and', function () {
        it('takes two predicates and returns an composed predicate', function () {
            var p11 = function (a) { return a < 100; };
            var p12 = function (b) { return b > 10; };
            var p1 = and(p11, p12);
            expect(p1(5)).to.be.false;
            expect(p1(15)).to.be.true;
            expect(p1(115)).to.be.false;
            var p21 = function (a, b) { return a < b; };
            var p22 = function (a, b) { return a + b > 100; };
            var p2 = and(p21, p22);
            expect(p2(5, 10)).to.be.false;
            expect(p2(110, 10)).to.be.false;
            expect(p2(10, 110)).to.be.true;
        });
    });
    describe('not', function () {
        it('takes a predicate and negates its value', function () {
            var p11 = function (a) { return a < 100; };
            var p1 = not(p11);
            expect(p1(5)).to.be.false;
            expect(p1(115)).to.be.true;
            var p21 = function (a, b) { return a < b; };
            var p2 = not(p21);
            expect(p2(5, 10)).to.be.false;
            expect(p2(10, 5)).to.be.true;
        });
    });
    describe('equalArray', function () {
        it('shallow compares if two arrays are equal', function () {
            var obj = { foo: 'bar' };
            expect(equalArray([1, 2], [1, 2])).to.be.true;
            expect(equalArray([obj], [obj])).to.be.true;
            expect(equalArray([obj], [{ foo: 'bar' }])).to.be.false;
            expect(equalArray([1, 2], [2, 1])).to.be.false;
            expect(equalArray([1], [1, 2])).to.be.false;
            expect(equalArray([], [1])).to.be.false;
        });
    });
    describe('equalObject', function () {
        it('shallow compares if two objects are equal', function () {
            var obj = { foo: 'bar' };
            expect(equalObject({ foo: 'bar' }, obj)).to.be.true;
            expect(equalObject(obj, obj)).to.be.true;
            expect(equalObject({ foo: obj }, { foo: obj })).to.be.true;
            expect(equalObject({ foo: obj }, { foo: { foo: 'bar' } })).to.be.false;
            expect(equalObject({ foo: 'bar', bar: 'kuku' }, obj)).to.be.false;
            expect(equalObject({ bar: 'bar' }, obj)).to.be.false;
        });
    });
});
//# sourceMappingURL=predicates-test.js.map