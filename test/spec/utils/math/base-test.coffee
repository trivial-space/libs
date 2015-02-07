goog.require 'ts.utils.math'


describe 'sign', ->

  sign = ts.utils.math.sign


  it 'returns the sign of a number', ->

    expect sign 20
      .to.equal 1

    expect sign -0.201
      .to.equal -1

    expect sign 0
      .to.equal 0
