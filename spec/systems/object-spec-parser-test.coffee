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

      'baz':
        init:
          require: 'foo bar'
          update: bazInit

        reactions:
          'trigger1 trigger2':
            require: 'biz'
            update: bazReaction
          'trigger3': bazReaction2

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
          initialValue: 200
        ,
          id: 'baz'
          factory:
            dependencies: ['foo', 'bar']
            procedure: bazInit
          reactions: [
            triggers: ['trigger1', 'trigger2']
            supplements: ['biz']
            procedure: bazReaction
          ,
            triggers: ['trigger3']
            procedure: bazReaction2
          ]
        ,
          id: 'bar'
          factory:
            procedure: barInit
          reactions: [
            triggers: ['foo']
            procedure: barReaction
          ]
        ]
      }


