require 'babel-core/polyfill'
EntitySystem = require 'systems/old-entity-system'


describe 'Old EntitySystem', ->

  sys = null


  beforeEach ->
    sys = new EntitySystem()


  describe 'constructor function', ->

    it 'creates object with entities, reactions, components, actions', ->

      expect sys.entities
        .to.exist

      expect sys.reactions
        .to.exist

      expect sys.actions
        .to.exist

      expect sys.callbacks
        .to.exist


  describe 'values', ->

    it 'can be added', ->
      values =
        x: 100
        y: 200

      sys.addValues values

      expect sys.entities
        .to.deep.equal x: 100, y: 200


  describe 'entity specs', ->

    it 'can have initial values', ->
      spec =
        value: 123

      sys.addEntity 'foo', spec

      expect sys.entities.foo
        .to.equal 123


    it 'initializes entities programatically', ->
      spec = init: -> "newEntity"

      sys.addEntity 'foo', spec

      expect sys.entities.foo
        .to.equal 'newEntity'


    it 'can describe dependencies for init method', ->
      spec =
        test:
          init: (foo, bar) -> foo + bar
          require: 'foo bar'

      sys.entities = 'foo': 3, 'bar': 5

      sys.addEntities spec

      expect sys.entities.test
        .to.equal 8


    it 'can be added collectively', ->
      sys.addEntities
        foo:
          init: -> 3
        bar:
          init: -> 4

      expect sys.entities
        .to.deep.equal foo: 3, bar: 4



  describe 'entity updates', ->

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


  describe 'reactions', ->

    it 'happen on dependency change', ->
      sys.addEntities
        'x':
          init: -> 3
        'foo':
          require: 'x'
          init: (x) -> x + 1

      expect sys.entities.foo
        .to.equal 4

      sys.resetEntity 'x', 10
      sys.flush()

      expect sys.entities.foo
        .to.equal 11


    it 'can be defined explicitly', ->
      spec =
        x:
          init: -> 3
        foo:
          init: -> 1
          reactions:
            x: (foo, x) -> foo + x

      sys.addEntities spec

      expect sys.entities.foo
        .to.equal 4

      sys.resetEntity 'x', 5
      sys.flush()

      expect sys.entities.foo
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

      sys.addEntities spec

      expect sys.entities.test
        .to.equal 1


    it 'properly sets the reactions and reactionDeps properties', ->
      spec =
        x:
          init: ->
          require: 'foo bar'
          reactions:
            'laa': ->
        y:
          reactions:
            'x z': ->

      sys.addEntities spec

      expect sys.reactions['laa']['x']
        .to.exist
      expect sys.reactions['foo']['x']
        .to.exist
      expect sys.reactions['bar']['x']
        .to.exist
      expect sys.reactions['x']['y']
        .to.exist
      expect sys.reactions['z']['y']
        .to.exist


    it 'can have extra dependencies that are not reactive', ->
      spec =
        x: init: -> 1
        y: init: -> 2
        z: reactions:
          'x':
            require: 'y'
            update: (z, x, y) -> x + y

      sys.addEntities spec

      expect sys.entities.z
        .to.equal 3

      sys.resetEntity 'x', 2
      sys.flush()

      expect sys.entities.z
        .to.equal 4

      sys.resetEntity 'y', 5
      sys.flush()

      expect sys.entities.z
        .to.equal 4


    it 'can be stopped by returning false', ->
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

      sys.addEntities spec

      expect sys.entities.test
        .to.deep.equal
          myTest: 'test_value'
          myFoo: 'foo_value'
          myBar: 'bar_value'

      sys.resetEntity 'bar', 'bar_new_value'
      sys.flush()

      expect sys.entities.test
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

      sys.addEntities spec

      expect reaction
        .to.be.calledOnce
      reaction.reset()

      sys.resetEntity 'foo', 'foo_new_value'
      sys.resetEntity 'bar', 'bar_new_value'
      sys.resetEntity 'baz', 'baz_new_value'
      sys.flush()

      expect reaction
        .to.be.calledOnce
      expect reaction
        .to.be.calledWith 'test_value', 'foo_new_value', 'baz_new_value'




  describe 'actions', ->

    it 'can be registered', ->
      action = {}

      sys.addAction 'testAction', action

      expect sys.actions.testAction
        .to.deep.equal action


    it 'can be registered collectively', ->
      actions =
        action1: 'a1'
        action2: 'a2'

      sys.addActions actions

      expect sys.actions
        .to.deep.equal actions


    it 'can be executed', ->
      action =
        require: 'x y'
        update: sinon.stub()

      values = x: 'xVal', y: 'yVal'

      sys.addAction 'testAction', action
      sys.addValues values

      sys.callAction 'testAction'

      expect action.update
        .to.be.calledWith 'xVal', 'yVal'


  describe 'Entitystring parsing', ->

    it 'parses ids separated by whitespace into an array of ids', ->

      expect EntitySystem.processEntityString '  foo  bar '
        .to.deep.equal ['foo', 'bar']

      expect EntitySystem.processEntityString '\nfoo\tbar '
        .to.deep.equal ['foo', 'bar']


