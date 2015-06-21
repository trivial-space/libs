ES = require 'systems/new-entity-system'


describe 'New EntitySystem', ->

  sys = null

  beforeEach ->
    sys = ES.create()


  it 'has a incrementing function', ->

    id1 = ES.newUid()
    id2 = ES.newUid()

    expect id2 > id1
      .to.be.true


  it 'creates a Entity System data structur', ->

    expect sys
      .to.have.all.keys ['entities', 'names']


  it 'can set and get entity values', ->

    expect Object.keys(sys.entities).length
      .to.equal 0

    expect ES.get sys, 'newVal'
      .to.be.undefined

    ES.set sys, 'newVal', 42

    expect Object.keys(sys.entities).length
      .to.equal 1

    expect ES.get sys, 'newVal'
      .to.equal 42
