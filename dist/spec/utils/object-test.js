var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { deepmerge, deepOverride } from 'utils/object';
import { expect } from 'chai';
describe('utils object', function () {
    describe('deepmerge', function () {
        it('deepmerges two objects', function () {
            var obj1 = {
                lala: 2,
                foo: {
                    kuku: 3,
                    bar: {
                        kuku: 1
                    }
                }
            };
            var obj2 = {
                foo: {
                    kuku: 4,
                    bar: {
                        lulu: 3
                    }
                }
            };
            var result = deepmerge(obj1, obj2);
            expect(result).to.deep.equal({
                lala: 2,
                foo: {
                    kuku: 4,
                    bar: {
                        kuku: 1,
                        lulu: 3
                    }
                }
            });
            expect(result).to.not.equal(obj1);
            expect(result).to.not.equal(obj2);
        });
        it('doesnt merge arrays', function () {
            var obj1 = { arr: { foo: 'bar' } };
            var obj2 = { arr: [1, 4, 5, 6] };
            var result1 = deepmerge(obj1, obj2);
            var result2 = deepmerge(obj2, obj1);
            expect(result1).to.deep.equal({
                arr: [1, 4, 5, 6]
            });
            expect(result1.arr).to.equal(obj2.arr);
            expect(result2).to.deep.equal({
                arr: { foo: 'bar' }
            });
            expect(result2.arr).to.equal(obj1.arr);
        });
        it('returns second arg if args are not objects', function () {
            var obj = { fuu: 'bar' };
            var arr = [1, 2, 3];
            var val = 'baz';
            expect(deepmerge(obj, arr)).to.equal(arr);
            expect(deepmerge(obj, val)).to.equal(val);
            expect(deepmerge(arr, obj)).to.equal(obj);
            expect(deepmerge(val, obj)).to.equal(obj);
        });
        it('removes a property when assigned to undefined', function () {
            var obj = { foo: 'bar', kuku: 'kaka' };
            expect(deepmerge(obj, { kuku: undefined })).to.deep.equal({
                foo: 'bar'
            });
        });
        it('doesnt merge equal objects', function () {
            var nested = { foo: 'bar' };
            var o1 = { kuu: 1, nested: nested };
            var o2 = { kuu: 5, nested: nested };
            var o = deepmerge(o1, o2);
            expect(o.nested).to.equal(nested);
        });
    });
    describe('deepOverride', function () {
        it('recursively overrides the values of obj1 without changing its structure', function () {
            var obj1 = {
                lala: 2,
                foo: {
                    kuku: 3,
                    bar: {
                        kuku: 1,
                        lulu: 3
                    }
                }
            };
            var obj2 = {
                foo: {
                    kuku: 4,
                    bar: {
                        kuku: 3
                    }
                },
                ffff: 666
            };
            var result = deepOverride(obj1, obj2);
            expect(result).to.deep.equal({
                lala: 2,
                foo: {
                    kuku: 4,
                    bar: {
                        kuku: 3,
                        lulu: 3
                    }
                }
            });
            expect(result).to.equal(obj1);
            expect(result).to.not.equal(obj2);
        });
        it('doesnt merge arrays', function () {
            var obj1 = { arr: { foo: 'bar' } };
            var obj2 = { arr: [1, 4, 5, 6] };
            var result1 = deepOverride(__assign({}, obj1), obj2);
            var result2 = deepOverride(__assign({}, obj2), obj1);
            expect(result1).to.deep.equal({
                arr: [1, 4, 5, 6]
            });
            expect(result1.arr).to.equal(obj2.arr);
            expect(result2).to.deep.equal({
                arr: { foo: 'bar' }
            });
            expect(result2.arr).to.equal(obj1.arr);
        });
        it('returns second arg if args are not objects', function () {
            var obj = { fuu: 'bar' };
            var arr = [1, 2, 3];
            var val = 'baz';
            expect(deepmerge(obj, arr)).to.equal(arr);
            expect(deepmerge(obj, val)).to.equal(val);
            expect(deepmerge(arr, obj)).to.equal(obj);
            expect(deepmerge(val, obj)).to.equal(obj);
        });
        it('doesnt merge equal objects', function () {
            var nested = { foo: 'bar' };
            var o1 = { kuu: 1, nested: nested };
            var o2 = { kuu: 5, nested: nested };
            var o = deepOverride(o1, o2);
            expect(o.nested).to.equal(nested);
            expect(o1.kuu).to.equal(5);
        });
        it('has an option to ignore properties', function () {
            var obj1 = {
                kuku: 1,
                foo: {
                    kuku: 3,
                    bar: {
                        kuku: 1,
                        lulu: 3,
                        lala: {
                            fufu: 1,
                            kuku: 5
                        }
                    }
                }
            };
            var obj2 = {
                kuku: 2,
                foo: {
                    kuku: 4,
                    bar: {
                        kuku: 3,
                        lulu: 7,
                        lala: {
                            fufu: 2,
                            kuku: 2
                        }
                    }
                }
            };
            var result = deepOverride(obj1, obj2, { ignore: {
                    kuku: true,
                    foo: {
                        kuku: true,
                        bar: {
                            kuku: true,
                            lala: true
                        }
                    }
                } });
            expect(result).to.deep.equal({
                kuku: 1,
                foo: {
                    kuku: 3,
                    bar: {
                        kuku: 1,
                        lulu: 7,
                        lala: {
                            fufu: 1,
                            kuku: 5
                        }
                    }
                }
            });
        });
    });
});
//# sourceMappingURL=object-test.js.map