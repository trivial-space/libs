Runtime = require 'systems/runtime'
SSM = require 'systems/spec-manager'

describe 'System Specification Manager', ->

  sys = null

  beforeEach ->
    sys = Runtime.create()


  describe 'entity spec loader', ->


    it 'can set entities', ->

      SSM.loadSpec sys,
        entities: [
          id: 'myNewEntity'
        ]

      entity = sys.getEntity 'myNewEntity'

      expect entity
        .to.exist


    it 'can set many entities', ->

      SSM.loadSpec sys,
        entities: [
          id: 'e1'
        ,
          id: 'e2'
        ,
          id: 'e3'
        ,
          id: 'e4'
        ]

      expect sys.getEntity 'e1'
        .to.exist
      expect sys.getEntity 'e2'
        .to.exist
      expect sys.getEntity 'e3'
        .to.exist
      expect sys.getEntity 'e4'
        .to.exist


    it 'can load entities from name and namespace', ->

      SSM.loadSpec sys,
        entities: [
          name: 'foo'
        ,
          name: 'bar'
          namespace: 'baz'
        ]

      expect sys.getEntity 'foo'
        .to.exist
      expect sys.getEntity 'baz/bar'
        .to.exist


    it 'can set initial Values', ->

      SSM.loadSpec sys,
        entities: [
          id: 'foo'
          initialValue: 'lala'
        ]

      expect sys.get 'foo'
        .to.equal 'lala'


    it 'can set a factory', ->

      SSM.loadSpec sys,
        entities: [
          id: 'foo'
          factory:
            procedure: -> 33
        ]

      expect sys.get 'foo'
        .to.equal 33


    it 'can set a factory with dependencies', ->

      SSM.loadSpec sys,
        entities: [
          name: 'bar'
          namespace: 'baz'
          initialValue: 22
        ,
          id: 'foo'
          factory:
            procedure: (bar) -> bar + 11
            dependencies: ['baz/bar']
        ]

      expect sys.get 'foo'
        .to.equal 33


    it 'can load entities with reactions', ->

      SSM.loadSpec sys,
        entities: [
          id: 'foo'
          factory:
            dependencies: ['baz']
            procedure: (baz) -> baz + 10
          reactions: [
            procedure: (foo, bar) -> foo + bar
            triggers: ['bar']
          ]
        ,
          id: 'bar'
          initialValue: 10
        ,
          id: 'baz'
          initialValue: 20
        ]

      expect sys.get 'foo'
        .to.equal 40

      sys.set 'baz', 30
      sys.flush()

      expect sys.get 'foo'
        .to.equal 50


    it 'initializes system regardless of the entity order', ->

      SSM.loadSpec sys,
        entities: [
          id: 'bar'
          initialValue: 10
        ,
          id: 'baz'
          initialValue: 20
        ,
          id: 'foo'
          factory:
            dependencies: ['baz']
            procedure: (baz) -> baz + 10
          reactions: [
            procedure: (foo, bar) -> foo + bar
            triggers: ['bar']
          ]
        ]

      expect sys.get 'foo'
        .to.equal 40

      sys.set 'baz', 30
      sys.flush()

      expect sys.get 'foo'
        .to.equal 50


  xdescribe 'createSpec', ->

    it 'generates a spec from a initialized system', ->
      reaction = (foo) -> foo + 1

      sys.set 'foo', 30
      sys.set 'bar', 20
      sys.addReaction reaction, 'bar', ['foo']

      spec = SSM.createSpec sys

      expect spec
        .to.deep.equal {
          entities: [
            id: 'bar'
            reactions: [
              triggers: ['foo']
              procedure: reaction
            ]
          ,
            id: 'foo'
          ]
        }



