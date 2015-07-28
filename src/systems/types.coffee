# ===== entity system types =====

createEntity = (id, value) ->
  {
    id
    value
    factory: null
    dependencies: null
    influences: null
    effects: null
    callbacks: null
  }


ActionTypes = {
  ACTION: "ts.entitysystem/action"
  FACTORY: "ts.entitysystem/factory"
  REACTION: "ts.entitysystem/reaction"
  CALLBACK: "ts.entitysystem/callback"
}


createAction = (procedure, dependencies) ->
  {
    id: getActionId dependencies
    procedure
    dependencies
    type: ActionTypes.ACTION
  }


createFactory = (procedure, receiver, dependencies = []) ->
  {
    id: getReactionId receiver, dependencies
    receiver
    procedure
    dependencies
    type: ActionTypes.FACTORY
  }


createReaction = (procedure, receiver, triggers, supplements = []) ->
  dependencies = [receiver, triggers..., supplements...]
  {
    id: getReactionId receiver, triggers
    receiver
    procedure
    dependencies
    triggers
    supplements
    type: ActionTypes.REACTION
  }


createCallback = (procedure, triggers, supplements = []) ->
  dependencies = [triggers..., supplements...]
  {
    id: getActionId dependencies
    procedure
    dependencies
    triggers
    supplements
    type: ActionTypes.CALLBACK
  }


# ===== helper functions =====

newUid = do ->
  id = 1
  -> id++


getReactionId = (eid, dependencies) ->
  "!R:#{eid}::" + dependencies.join ':'


getActionId = (dependencies) ->
  '!A:' + dependencies.join(':') + ':' + newUid()


parseEntityId = (id) ->
  [name, namespace] = id.trim().split('/').reverse()
  {name, namespace}


# ===== module interface =====

module.exports = {
  ActionTypes
  createEntity
  createAction
  createFactory
  createReaction
  createCallback

  newUid
}


