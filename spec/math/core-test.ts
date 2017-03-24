import {sign, lerp} from 'math/core'
import {expect} from 'chai'


describe('math core', function() {

  it('sign', function() {
    expect(sign(20)).to.equal(1)
    expect(sign(-0.201)).to.equal(-1)
    expect(sign(0)).to.equal(0)
  })


  it('lerp', () => {
    expect(lerp(10, 20, 1)).to.equal(20)
    expect(lerp(10, 20, 0)).to.equal(10)
    expect(lerp(10, 20, 0.5)).to.equal(15)
  })
})
