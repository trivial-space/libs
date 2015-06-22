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


  it 'updates by function', ->
    ES.addValues sys, 'foo': 10
    ES.update sys, 'foo', (x) -> x + 3

    expect ES.get sys, 'foo'
      .to.equal 13



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


    it 'can be added collectively', ->
      ES.addEntities sys,
        foo:
          init: -> 3
        bar:
          init: -> 4

      expect ES.get sys, 'foo'
        .to.equal 3
      expect ES.get sys, 'bar'
        .to.equal 4


    it 'can describe dependencies for init method', ->
      spec =
        test:
          init: (foo, bar) -> foo + bar
          require: 'foo bar'

      ES.addValues sys, 'foo': 3, 'bar': 5

      ES.addEntities sys, spec

      expect ES.get sys, 'test'
        .to.equal 8



  describe 'Entitystring parsing', ->

    it 'parses ids separated by whitespace into an array of ids', ->
      expect ES.processEntityString '  foo  bar '
        .to.deep.equal ['foo', 'bar']

      expect ES.processEntityString '\nfoo\tbar '
        .to.deep.equal ['foo', 'bar']


    it 'retrieves entity ids from a entity name string', ->
      ES.addValues sys, foo: 'fooVal', bar: 'barVal'

      ids = ES.entityIdsFromNames sys, 'foo bar'

      expect ids.length
        .to.equal 2
      expect ES.get sys, ids[0]
        .to.equal 'fooVal'
      expect ES.get sys, ids[1]
        .to.equal 'barVal'


    it 'throws if no id for name found', ->
      ES.addValues sys, foo: 'fooVal'

      test = -> ES.entityIdsFromNames sys, 'foo bar'
      expect test
        .to.throw /name bar/

