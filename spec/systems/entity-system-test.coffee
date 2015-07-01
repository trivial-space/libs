ES = require 'systems/entity-system'


describe 'EntitySystem', ->

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
      .to.contain.all.keys ['entities', 'names', 'actions', 'changes']


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
          init: (foo, bar) ->
            foo + bar
          require: 'foo bar'

      ES.addValues sys, 'foo': 3, 'bar': 5

      ES.addEntities sys, spec

      expect ES.get sys, 'test'
        .to.equal 8



  describe 'reactions', ->

    it 'happen on dependency change', ->
      ES.addEntities sys,
        'x':
          value: 3
        'foo':
          require: 'x'
          init: (x) -> x + 1

      expect ES.get sys, 'foo'
        .to.equal 4

      ES.set sys, 'x', 10
      ES.flush sys

      expect ES.get sys, 'foo'
        .to.equal 11


    it 'can be defined explicitly', ->
      spec =
        x:
          init: -> 3
        foo:
          init: -> 1
          reactions:
            x: (foo, x) -> foo + x

      ES.addEntities sys, spec

      expect ES.get sys, 'foo'
        .to.equal 4

      ES.set sys, 'x', 5
      ES.flush sys

      expect ES.get sys, 'foo'
        .to.equal 9


    it 'can react on multiple dependencies', ->
      spec =
        x:
          init: -> 3
        y:
          init: -> 4
        test:
          init: -> 2
          reactions:
            'x y':
              (test, x, y) ->
                test + x - y

      ES.addEntities sys, spec

      expect ES.get sys, 'test'
        .to.equal 1


    it 'can have extra dependencies that are not reactive', ->
      spec =
        x: init: -> 1
        y: init: -> 2
        z: reactions:
          'x':
            require: 'y'
            update: (z, x, y) -> x + y

      ES.addEntities sys, spec

      expect ES.get sys, 'z'
        .to.equal 3

      ES.set sys, 'x', 2
      ES.flush sys

      expect ES.get sys, 'z'
        .to.equal 4

      ES.set sys, 'y', 5
      ES.flush sys

      expect ES.get sys, 'z'
        .to.equal 4

      ES.set sys, 'x', 3
      ES.flush sys

      expect ES.get sys, 'z'
        .to.equal 8


    xit 'can be stopped by returning false', ->
      spec =
        x:
          init: -> {value: 4}
        y:
          init: -> {value: 0}
          reactions:
            'x':
              (y, x) ->
                y.value = x.value + 1
                if x.value % 2 == 0
                  return
                else
                  return false
        z:
          init: -> {value: 0}
          reactions:
            'y':
              (z, y) ->
                z.value = y.value + 1
                return

      sys.addEntities spec

      expect sys.entities.y.value
        .to.equal 5
      expect sys.entities.z.value
        .to.equal 6

      sys.resetEntity 'x', {value: 5}
      sys.flush()

      expect sys.entities.y.value
        .to.equal 6
      expect sys.entities.z.value
        .to.equal 6


      sys.resetEntity 'x', {value: 6}
      sys.flush()

      expect sys.entities.y.value
        .to.equal 7
      expect sys.entities.z.value
        .to.equal 8


    it 'preserve reaction state after reinit reations', ->
      spec =
        'foo':
          value: 'foo_value'
        'bar':
          value: 'bar_value'
        'test':
          require: 'bar'
          init: (bar) ->
            myTest: 'test_value',
            myBar: bar
          reactions:
            'foo':
              (test, foo) ->
                test.myFoo = foo
                return

      ES.addEntities sys, spec

      expect ES.get sys, 'test'
        .to.deep.equal
          myTest: 'test_value'
          myFoo: 'foo_value'
          myBar: 'bar_value'

      ES.set sys, 'bar', 'bar_new_value'
      ES.flush sys

      expect ES.get sys, 'test'
        .to.deep.equal
          myTest: 'test_value'
          myFoo: 'foo_value'
          myBar: 'bar_new_value'


    it 'calls reactions only once', ->
      reaction = sinon.stub()
      spec =
        'foo':
          value: 'foo_value'
        'bar':
          value: 'bar_value'
        'baz':
          value: 'baz_value'
        'test':
          require: 'bar'
          init: (bar) -> 'test_value'
          reactions:
            'foo baz ': reaction

      ES.addEntities sys, spec

      expect reaction
        .to.be.calledOnce
      reaction.reset()

      ES.set sys, 'foo', 'foo_new_value'
      ES.set sys, 'bar', 'bar_new_value'
      ES.set sys, 'baz', 'baz_new_value'
      ES.flush sys

      expect reaction
        .to.be.calledOnce
      expect reaction
        .to.be.calledWith 'test_value', 'foo_new_value', 'baz_new_value'


  it 'can be triggered by a touch', ->

    spec =
      counter:
        value: 0
        reactions:
          trigger:
            (counter) -> counter + 1

    ES.addEntities sys, spec

    expect ES.get sys, 'counter'
      .to.equal 1

    for i in [1..10]
      ES.touch sys, 'trigger'
      ES.flush sys

    expect ES.get sys, 'counter'
      .to.equal 11



  describe 'Entitystring parsing', ->

    it 'parses ids separated by whitespace into an array of ids', ->
      expect ES.processEntityString '  foo  bar '
        .to.deep.equal ['foo', 'bar']

      expect ES.processEntityString '\nfoo\tbar '
        .to.deep.equal ['foo', 'bar']


    it 'retrieves entity ids from a entity name string', ->
      ES.addValues sys, foo: 'fooVal', bar: 'barVal'

      ids = ES.entityIdsFromNames sys, ['foo', 'bar']

      expect ids.length
        .to.equal 2
      expect ES.get sys, ids[0]
        .to.equal 'fooVal'
      expect ES.get sys, ids[1]
        .to.equal 'barVal'


    it 'throws if no id for name found', ->
      ES.addValues sys, foo: 'fooVal'

      test = -> ES.entityIdsFromNames sys, ['foo', 'bar']
      expect test
        .to.throw /name bar/


