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


  it 'creates an entity system data structur', ->

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


  it 'can add values', ->
    values =
      x: 100
      y: 200

    ES.addValues sys, values

    expect ES.get sys, 'x'
      .to.equal 100
    expect ES.get sys, 'y'
      .to.equal 200


  it 'can retrieve entities', ->
    ES.set sys, 'fufu', 'lululu'

    entity = ES.getEntity sys, 'fufu'

    expect entity
      .to.contain.all.keys [ 'id', 'name', 'value' ]
    expect entity
      .to.contain.all.keys name: 'fufu', value: 'lululu'


  describe 'entity specs', ->

    it 'can have initial values', ->
      spec =
        value: 123

      ES.addEntity sys, 'foo', spec

      expect ES.get sys, 'foo'
        .to.equal 123


    it 'initializes entities programatically', ->
      spec = init: -> "newEntity"

      ES.addEntity sys, 'foo', spec

      expect ES.get sys, 'foo'
        .to.equal 'newEntity'


    xit 'can describe dependencies for init method', ->
      spec =
        test:
          init: (foo, bar) -> foo + bar
          require: 'foo bar'

      sys.entities = 'foo': 3, 'bar': 5

      sys.addEntities spec

      expect sys.entities.test
        .to.equal 8


    xit 'can be added collectively', ->
      sys.addEntities
        foo:
          init: -> 3
        bar:
          init: -> 4

      expect sys.entities
        .to.deep.equal foo: 3, bar: 4



  xdescribe 'entity updates', ->

    it 'by reset', ->
      sys.addValues 'foo': false
      sys.resetEntity 'foo', true
      expect sys.entities.foo
        .to.be.true


    it 'by update', ->
      sys.addValues 'foo': 10
      sys.updateEntity 'foo', (x) -> x + 3
      expect sys.entities.foo
        .to.equal 13


