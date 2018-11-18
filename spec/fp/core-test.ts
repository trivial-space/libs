import { expect } from 'chai'
import { curry, partial } from 'fp/core'
import { N, S } from '../types'

describe('functional programming core', function() {
	describe('curry', function() {
		it('curries a 2 argument function', function() {
			const fn = (a: N, b: N) => a + b

			const curriedFn = curry(fn)
			expect(curriedFn).to.be.a('function')
			expect(curriedFn(2, 3)).to.equal(5)

			const add2 = curriedFn(2)
			expect(add2).to.be.a('function')
			expect(add2(3)).to.equal(5)
		})
	})

	describe('partial', function() {
		it('patrially applies arguments to a function', function() {
			const fn = (a: N, b: N) => a + b
			const fn2 = (a: S, b: S, c: S) => a + b + c

			const add2 = partial(fn, 2)
			expect(add2).to.be.a('function')
			expect(add2(3)).to.equal(5)

			expect(partial(fn, 2, 3)()).to.equal(5)

			expect(partial(fn2, '2', '3', '4')()).to.equal('234')
			expect(partial(fn2, '2', '3')('4')).to.equal('234')
			expect(partial(fn2, '2')('3', '4')).to.equal('234')
		})
	})
})
