types = require './types'

# ===== runtime factory =====

# Generates an empty entity system runtime.
module.exports.create = ->

  # ===== permanent state =====

  # All entity data.
  entities = {}

  # All actions operating on the entities.
  actions = {}


  # ===== temporal state =====

  # Stores all changes and processes them at flush.
  # Empty after each flush.
  changes = {}

  # Callbacks executed after changes are processed.
  # Empty after each flush.
  calls = {}


  getState = ->
    {entities, actions, changes, calls}


  # ===== system topology updates =====

  addEntity = ->
    entity = types.createEntity arguments...
    entities[entity.id] = entity


  removeEntity = (eid) ->
    throw new Error 'remove Entity not yet implemented'


  addFactory = ->
    factory = types.createFactory arguments...
    aid = setupAction factory
    entity = getOrCreateEntity factory.receiver
    if factory.dependencies.length
      entity.factory = aid
      updateEntityReactions entity, aid, factory.dependencies
    entity.value = executeAction factory
    propagateChange entity
    aid


  removeFactory = (eid) ->
    throw new Error 'remove Factory not yet implemented'


  addReaction = ->
    reaction = types.createReaction arguments...
    aid = setupAction reaction
    entity = getOrCreateEntity reaction.receiver
    updateEntityReactions entity, aid, reaction.triggers
    touch depid for depid of entity.dependencies
    aid


  removeReaction = (eid) ->
    throw new Error 'remove Reaction not yet implemented'


  updateEntityReactions = (entity, actionId, dependencies) ->
    entity.dependencies ?= {}
    for depid in dependencies
      entity.dependencies[depid] = actionId
      depEntity = getOrCreateEntity depid
      depEntity.effects ?= {}
      depEntity.effects[entity.id] = actionId
    return


  addAction = ->
    setupAction types.createAction arguments...


  removeAction = (eid) ->
    throw new Error 'remove Action not yet implemented'


  addCallback = ->
    callback = types.createCallback arguments...
    aid = setupAction callback
    for eid in callback.triggers
      entity = getOrCreateEntity eid
      entity.callbacks ?= []
      if entity.callbacks.indexOf(aid) < 0
        entity.callbacks.push aid
    aid


  removeCallback = (cid) ->
    deps = actions[cid].triggers
    for id in deps
      e = entities[id]
      e.callbacks = e.callbacks.filter (cb) -> cb != cid
    delete calls[cid]
    delete actions[cid]
    return


  setupAction = (action) ->
    actions[action.id] = action
    action.id


  # ===== interacting with entities =====

  get = (eid) ->
    entities[eid]?.value


  set = (eid, val) ->
    entity = getOrCreateEntity eid
    entity.value = val
    propagateChange entity


  update = (eid, fn) ->
    set eid, fn get eid


  touch = (eid) ->
    propagateChange entities[eid]


  getOrCreateEntity = (eid) ->
    entities[eid] or addEntity {id: eid}


  getEntity = (eid) -> entities[eid]


  # ===== change management =====

  updateChange = (entity, aid, order) ->
    change = changes[aid] ?=
      order: order
      entity: entity
    if change.order < order
      change.order = order
    return


  propagateChange = (entity, order) ->
    if entity.effects?
      order or= 1
      for eid, aid of entity.effects
        nextEntity = entities[eid]
        updateChange nextEntity, aid, order

        # restore reactions state after reinitialization
        if actions[aid].type is types.ActionTypes.FACTORY
          for did, rid of nextEntity.dependencies
            updateChange nextEntity, rid, order

        propagateChange nextEntity, order + 1

    # handle callbacks
    if entity.callbacks and entity.callbacks.length
      for cid in entity.callbacks
        calls[cid] = true

    return


  flush = ->
    process = {}
    for aid, change of changes
      action = actions[aid]
      steps = process[change.order] or= []
      unit = {action, entity: change.entity}
      if action.type is types.ActionTypes.FACTORY
        steps.unshift unit
      else
        steps.push unit

    changes = {}

    for order, steps of process
      for {action, entity} in steps
        res = executeAction action
        if res?
          entity.value = res
        else if res is null
          console.warn 'TODO: implement propagation stop!'

    for cid of calls
      executeAction actions[cid]

    calls = {}
    return


  executeAction = (action) ->
    args = []
    for depId, i in action.dependencies
      args[i] = entities[depId].value
    action.procedure.apply null, args


  callAction = (actionId) -> executeAction actions[actionId]


  # ===== system interface =====

  return {
    get
    set
    touch
    update

    addEntity
    removeEntity
    addFactory
    removeFactory
    addReaction
    removeReaction
    addAction
    removeAction
    addCallback
    removeCallback

    flush
    callAction

    getEntity
    getState
  }
