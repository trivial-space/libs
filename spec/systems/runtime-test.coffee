runtime = require 'systems/runtime'


describe 'System runtime', ->

  sys = null

  beforeEach ->
    sys = runtime.create()


  it 'can expose its internal state', ->

    expect sys.getState()
      .to.contain.all.keys ['entities', 'actions', 'changes', 'calls']


  it 'can set and get entity values', ->

    {entities} = sys.getState()

    expect Object.keys(entities).length
      .to.equal 0

    expect sys.get 'newVal'
      .to.be.undefined

    sys.set 'newVal', 42

    expect Object.keys(entities).length
      .to.equal 1

    expect sys.get 'newVal'
      .to.equal 42


  it 'can retrieve entities', ->

    sys.set 'fufu', 'lululu'

    entity = sys.getEntity 'fufu'

    expect entity
      .to.contain.all.keys [ 'id', 'value' ]
    expect entity
      .to.contain.all.keys id: 'fufu', value: 'lululu'


  it 'updates by function', ->

    sys.set 'foo', 10
    sys.update 'foo', (x) -> x + 3

    expect sys.get 'foo'
      .to.equal 13



  describe 'factory', ->

    it 'initializes entities programatically', ->

      factory = -> "newEntity"

      sys.addFactory factory, 'foo'

      expect sys.get 'foo'
        .to.equal 'newEntity'


    it 'can specify dependencies', ->

      factory = (foo, bar) ->
        foo + bar

      sys.set 'foo', 3
      sys.set 'bar', 5
      sys.addFactory factory, 'test', ['foo', 'bar']

      expect sys.get 'test'
        .to.equal 8


    it 'reruns on dependency change', ->

      init = (x) -> x + 1

      sys.set 'x', 3
      sys.addFactory init, 'foo', ['x']

      expect sys.get 'foo'
        .to.equal 4

      sys.set 'x', 10
      sys.flush()

      expect sys.get 'foo'
        .to.equal 11



  describe 'reactions', ->

    it 'can be defined explicitly', ->
      reaction = (foo, x) -> foo + x
      sys.set 'x', 3
      sys.set 'foo', 1
      sys.addReaction reaction, 'foo', ['x']

      expect sys.get 'foo'
        .to.equal 1

      sys.flush()

      expect sys.get 'foo'
        .to.equal 4

      sys.set 'x', 5
      sys.flush()

      expect sys.get 'foo'
        .to.equal 9


    it 'can react on multiple dependencies', ->

      sys.set 'x', 3
      sys.set 'y', 4
      sys.set 'test', 2
      reaction = (test, x, y) ->
        test + x - y

      sys.addReaction reaction, 'test', ['x', 'y']
      sys.flush()

      expect sys.get 'test'
        .to.equal 1


    it 'can have extra supplements that are not reactive', ->

      sys.set 'x', 1
      sys.set 'y', 2
      sys.addReaction ((z, x, y) -> x + y),  'z', ['x'], ['y']
      sys.flush()

      expect sys.get 'z'
        .to.equal 3

      sys.set 'x', 2
      sys.flush()

      expect sys.get 'z'
        .to.equal 4

      sys.set 'y', 5
      sys.flush()

      expect sys.get 'z'
        .to.equal 4

      sys.set 'x', 3
      sys.flush()

      expect sys.get 'z'
        .to.equal 8


    it 'preserve reaction state after reinit reations', ->

      sys.set 'foo', 'foo_value'
      sys.set 'bar', 'bar_value'
      init = (bar) ->
        myTest: 'test_value',
        myBar: bar
      reaction = (test, foo) ->
        test.myFoo = foo
        return

      sys.addFactory init, 'test', ['bar']
      sys.addReaction reaction, 'test', ['foo']
      sys.flush()

      expect sys.get  'test'
        .to.deep.equal
          myTest: 'test_value'
          myFoo: 'foo_value'
          myBar: 'bar_value'

      sys.set 'bar', 'bar_new_value'
      sys.flush()

      expect sys.get 'test'
        .to.deep.equal
          myTest: 'test_value'
          myFoo: 'foo_value'
          myBar: 'bar_new_value'


    it 'calls reactions only once', ->

      reaction = sinon.stub()
      sys.set 'foo', 'foo_value'
      sys.set 'bar', 'bar_value'
      sys.set 'baz', 'baz_value'
      sys.addFactory ((bar) -> 'test_value'), 'test', ['bar']
      sys.addReaction reaction, 'test', ['foo', 'baz']
      sys.flush()

      expect reaction
        .to.be.calledOnce
      reaction.reset()

      sys.set 'foo', 'foo_new_value'
      sys.set 'bar', 'bar_new_value'
      sys.set 'baz', 'baz_new_value'
      sys.flush()

      expect reaction
        .to.be.calledOnce
      expect reaction
        .to.be.calledWith 'test_value', 'foo_new_value', 'baz_new_value'


    it 'can be triggered by a touch', ->

      sys.set 'counter', 0
      sys.addReaction ((counter) -> counter + 1), 'counter', ['trigger']
      sys.flush()

      expect sys.get 'counter'
        .to.equal 1

      for i in [1..10]
        sys.touch 'trigger'
        sys.flush()

      expect sys.get 'counter'
        .to.equal 11



  describe 'actions', ->

    it 'can be added to system and called', ->
      sys.set 'foo', 3
      sys.set 'bar', 4

      action = (foo, bar) -> "foobar#{foo + bar}"

      id = sys.addAction action, ['foo', 'bar']

      expect id
        .to.be.a 'string'

      expect sys.getState().actions[id]
        .to.exist

      expect sys.callAction id
        .to.equal 'foobar7'



  describe 'callbacks', ->

    it 'can be added to system', ->

      sys.set 'foo', 3
      sys.set 'bar', 4

      callback = (foo, bar) -> "foobar"

      id = sys.addCallback callback, ['foo', 'bar']

      expect id
        .to.be.a 'string'

      expect sys.getState().actions[id]
        .to.exist

      expect sys.callAction id
        .to.equal 'foobar'

      expect sys.getEntity('foo').callbacks.length
        .to.equal 1
      expect sys.getEntity('bar').callbacks.length
        .to.equal 1


    it 'are called on entity change', ->

      cb = sinon.stub()

      sys.set 'foo', 10
      sys.addFactory ((foo) -> foo + 2), 'bar', ['foo']
      sys.addCallback cb, ['bar']

      sys.update  'foo', (foo) -> foo - 5
      sys.flush()

      expect sys.get  'bar'
        .to.equal 7

      expect cb
        .to.be.calledWith 7


    it 'can be more than one', ->

      cb1 = sinon.stub()
      cb2 = sinon.stub()

      sys.set 'foo', 'foo_value'
      sys.addCallback cb1, ['foo']
      sys.addCallback cb2, ['foo']

      sys.set 'foo', 'new_foo_value'
      sys.flush()

      expect cb1
        .to.be.calledWith 'new_foo_value'
      expect cb2
        .to.be.calledWith 'new_foo_value'


    it 'is called only once even if registered for many entities', ->

      cb = sinon.stub()

      sys.set 'foo', 'foo_value'
      sys.set 'bar', 'bar_value'

      sys.addCallback cb, ['foo','bar']

      sys.set  'foo', 'new_foo_value'
      sys.set  'bar', 'new_bar_value'
      sys.flush()

      expect cb
        .to.be.calledOnce
      expect cb
        .to.be.calledWith 'new_foo_value', 'new_bar_value'


    it 'can be removed', ->

      cb = sinon.stub()

      id = sys.addCallback cb, ['foo']
      sys.set 'foo', 'foo_value'
      sys.flush()

      expect cb
        .to.be.called

      cb.reset()

      sys.set 'foo', 'new_foo_value'
      sys.removeCallback id
      sys.flush()

      expect cb
        .to.not.be.called

      expect sys.getState().actions[id]
        .to.not.be.defined

      expect sys.getEntity('foo').callbacks.length
        .to.equal 0