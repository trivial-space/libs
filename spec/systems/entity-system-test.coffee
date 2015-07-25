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
      .to.contain.all.keys ['entities', 'actions', 'changes']


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
      .to.contain.all.keys [ 'id', 'value' ]
    expect entity
      .to.contain.all.keys id: 'fufu', value: 'lululu'


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
          'trigger':
            (counter) -> counter + 1

    ES.addEntities sys, spec

    expect ES.get sys, 'counter'
      .to.equal 1

    for i in [1..10]
      ES.touch sys, 'trigger'
      ES.flush sys

    expect ES.get sys, 'counter'
      .to.equal 11



  describe 'actions', ->

    it 'can be added to sys and called', ->
      ES.addValues sys,
        foo: 3
        bar: 4

      action = (foo, bar) -> "foobar"

      id = ES.addAction sys, 'foo bar', action

      expect id
        .to.be.a 'string'

      expect sys.actions[id]
        .to.exist

      expect ES.callAction sys, id
        .to.equal 'foobar'




  describe 'callbacks', ->

    it 'can be added to sys', ->
      ES.addValues sys,
        foo: 3
        bar: 4

      callback = (foo, bar) -> "foobar"

      id = ES.addCallback sys, 'foo bar', callback

      expect id
        .to.be.a 'string'

      expect sys.actions[id]
        .to.exist

      expect ES.callAction sys, id
        .to.equal 'foobar'

      expect ES.getEntity(sys, 'foo').callbacks.length
        .to.equal 1


    it 'are called on entity change', ->
      cb = sinon.stub()

      ES.addEntities sys,
        'foo':
          init: -> 10

        'bar':
          require: 'foo'
          init: (foo) -> foo + 2
          callback: cb

      ES.update sys, 'foo', (foo) -> foo - 5
      ES.flush sys

      expect ES.get sys, 'bar'
        .to.equal 7

      expect cb
        .to.be.calledWith 7


    xit 'can be more than one', ->
      cb1 = sinon.stub()
      cb2 = sinon.stub()

      sys.addValue 'foo', 'foo_value'
      sys.addCallback 'foo', cb1
      sys.addCallback 'foo', cb2

      sys.resetEntity 'foo', 'new_foo_value'
      sys.flush()

      expect cb1
        .to.be.calledWith 'new_foo_value'
      expect cb2
        .to.be.calledWith 'new_foo_value'


    it 'is called only once even if registered for many entities', ->
      cb = sinon.stub()

      ES.addValues sys,
        foo: 'foo_value'
        bar: 'bar_value'

      ES.addCallback sys, 'foo bar', cb

      ES.set sys, 'foo', 'new_foo_value'
      ES.set sys, 'bar', 'new_bar_value'
      ES.flush sys

      expect cb
        .to.be.calledOnce
      expect cb
        .to.be.calledWith 'new_foo_value', 'new_bar_value'


    it 'can be removed', ->
      cb = sinon.stub()

      ES.set sys, 'foo', 'foo_value'
      id = ES.addCallback sys, 'foo', cb

      ES.set sys, 'foo', 'new_foo_value'
      ES.flush sys

      expect cb
        .to.be.called

      cb.reset()
      ES.removeCallback sys, id

      ES.set sys, 'foo', 'new_foo_value2'
      ES.flush sys

      expect cb
        .to.not.be.called

      expect sys.actions[id]
        .to.not.be.defined

      expect ES.getEntity(sys, 'foo').callbacks.length
        .to.equal 0




  describe 'Entitystring parsing', ->

    it 'parses ids separated by whitespace into an array of ids', ->
      expect ES.processEntityString '  foo  bar '
        .to.deep.equal ['foo', 'bar']

      expect ES.processEntityString '\nfoo\tbar '
        .to.deep.equal ['foo', 'bar']
