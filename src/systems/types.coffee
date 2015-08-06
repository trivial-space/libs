# ===== entity system types =====

ActionTypes = {
  ACTION: "ts.entitysystem/action"
  FACTORY: "ts.entitysystem/factory"
  REACTION: "ts.entitysystem/reaction"
  CALLBACK: "ts.entitysystem/callback"
}


createEntity = ({id, initialValue: value}) ->
  {
    id
    value
    factory: null
    dependencies: null
    effects: null
    callbacks: null
  }


createAction = ({id, procedure, dependencies}) ->
  id ?= getActionId dependencies

  {
    id
    procedure
    dependencies
    type: ActionTypes.ACTION
  }


createFactory = ({id, procedure, receiver, dependencies}) ->
  dependencies ?= []
  id ?= getFactoryId receiver

  {
    id
    receiver
    procedure
    dependencies
    type: ActionTypes.FACTORY
  }


createReaction = ({id, procedure, receiver, triggers, supplements}) ->
  id ?= getReactionId receiver, triggers
  supplements ?= []
  dependencies = [receiver, triggers..., supplements...]

  {
    id
    receiver
    procedure
    dependencies
    triggers
    supplements
    type: ActionTypes.REACTION
  }


createCallback = ({id, procedure, triggers, supplements}) ->
  supplements ?= []
  dependencies = [triggers..., supplements...]
  id ?= getActionId dependencies

  {
    id
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


getFactoryId = (eid) ->
  "!F:#{eid}"


getReactionId = (eid, dependencies) ->
  "!R:#{eid}::" + dependencies.join ':'


getActionId = (dependencies) ->
  '!A:' + dependencies.join(':') + ':' + newUid()


getEntityIdFromNameNamespace = (name, namespace) ->
  return name unless namespace
  [namespace, name].join '/'


getNameNamespaceFromEntityId = (id) ->
  [namespace, name] = id.split '/'
  unless name
    name = namespace
    namespace = ''
  [name, namespace]


# ===== module interface =====

module.exports = {
  ActionTypes

  createEntity
  createAction
  createFactory
  createReaction
  createCallback

  newUid
  getFactoryId
  getReactionId
  getActionId
  getNameNamespaceFromEntityId
  getEntityIdFromNameNamespace
}


