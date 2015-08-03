parser = require 'systems/object-spec-parser'


describe 'Entity system object specification parser', ->

  it 'creates a basic system specification out of a js object', ->

    barInit = ->
    barReaction = ->
    bazInit = ->
    bazReaction = ->
    bazReaction2 = ->

    spec =
      'foo':
        value: 200

      'kuku/foo':
        value: 1

      'kuku/bar':
        value: 2

      'baz':
        init:
          require: 'foo bar'
          do: bazInit

        reactions:
          'trigger1 trigger2':
            require: 'biz'
            do: bazReaction
          'kuku/bar': bazReaction2

      'bar':
        init: barInit
        reactions:
          'foo': barReaction


    result = parser.parse spec
    console.log result.entities

    expect result
      .to.deep.equal {
        entities: [
          id: 'foo'
          name: 'foo'
          namespace: ''
          initialValue: 200
        ,
          id: 'kuku/foo'
          name: 'foo'
          namespace: 'kuku'
          initialValue: 1
        ,
          id: 'kuku/bar'
          name: 'bar'
          namespace: 'kuku'
          initialValue: 2
        ,
          id: 'baz'
          name: 'baz'
          namespace: ''
          factory:
            dependencies: ['foo', 'bar']
            procedure: bazInit
          reactions: [
            triggers: ['trigger1', 'trigger2']
            supplements: ['biz']
            procedure: bazReaction
          ,
            triggers: ['kuku/bar']
            procedure: bazReaction2
          ]
        ,
          id: 'bar'
          name: 'bar'
          namespace: ''
          factory:
            procedure: barInit
          reactions: [
            triggers: ['foo']
            procedure: barReaction
          ]
        ]
      }


