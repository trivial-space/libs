create = ->
  entities: {}
  actions: {}
  changes: {}


get = (sys, name) ->
  sys.entities[name]?.value


set = (sys, name, val) ->
  entity = getOrCreateEntity sys, name
  entity.value = val
  propagateChange sys, entity


update = (sys, name, fn) ->
  set sys, name, fn get sys, name


touch = (sys, name) ->
  propagateChange sys, sys.entities[name]


createEntity = (sys, name) ->
  id = name or newUid()
  entity = {id}
  sys.entities[id] = entity
  entity


getOrCreateEntity = (sys, name) ->
  entity = sys.entities[name]
  entity ?= createEntity sys, name
  entity


getEntity = (sys, name) -> sys.entities[name]


# ===== entity registration =====

addValues = (sys, values) ->
  for name, val of values
    entity = getOrCreateEntity sys, name
    entity.value = val
  sys


addEntities = (sys, specs) ->
  for name, spec of specs
    addEntity sys, name, spec
  flush sys


addEntity = (sys, name, spec) ->
  entity = getOrCreateEntity sys, name

  if spec.value?
    entity.value = spec.value

  if spec.init
    if spec.require
      entity.dependencies = processEntityString spec.require
      entity.factory = updateReactions sys, entity, entity.dependencies, spec.init
      sys.actions[entity.factory].init = true
    deps = entity.dependencies or []
    vals = deps.map (id) -> get sys, id
    entity.value = spec.init.apply null, vals

  if spec.reactions
    for rnamesString, reaction of spec.reactions
      addReaction sys, name, rnamesString, reaction

  entity.spec = spec

  propagateChange sys, entity
  if entity.stateComputations
    for eid of entity.stateComputations
      propagateChange sys, sys.entities[eid]


addReaction = (sys, name, depString, reaction) ->
  entity = sys.entities[name]
  rnames = processEntityString depString
  rid = updateReactions sys, entity, [name, rnames...], reaction
  entity.stateComputations ?= {}
  for rname in rnames
    entity.stateComputations[rname] = rid


updateReactions = (sys, entity, depNames, action) ->
  actionId = newUid()

  if action.require
    additionalDeps = processEntityString action.require
    depNames = depNames.concat additionalDeps

  for name in depNames
    if name isnt entity.id and
        (not additionalDeps or additionalDeps.indexOf(name) < 0)
      depEntity = getOrCreateEntity sys, name
      depEntity.reactions ?= {}
      depEntity.reactions[entity.id] = actionId

  sys.actions[actionId] =
    action: action.update or action
    dependencies: depNames
  actionId


# ===== change management =====

applyChange = (sys, entity, deps, fn) ->
  sys


updateChange = (sys, entity, aid, order) ->
  change = sys.changes[aid] ?=
    order: order
    entity: entity
  if change.order < order
    change.order = order
  return


propagateChange = (sys, entity, order) ->
  if entity.reactions?
    order or= 1
    for eid, aid of entity.reactions
      nextEntity = sys.entities[eid]
      updateChange sys, nextEntity, aid, order

      if sys.actions[aid].init
        for rid, cid of nextEntity.stateComputations
          updateChange sys, nextEntity, cid, order

      propagateChange sys, nextEntity, order + 1
  sys


flush = (sys) ->
  process = {}
  for aid, change of sys.changes
    action = sys.actions[aid]
    step = process[change.order] or= []
    unit = {action, entity: change.entity}
    if action.init
      step.unshift unit
    else
      step.push unit

  sys.changes = {}

  for order, actions of process
    for {action, entity} in actions
      args = []
      for depId, i in action.dependencies
        args[i] = sys.entities[depId].value
      res = action.action.apply null, args
      entity.value = res if res?

  sys


# ===== helper methods =====

newUid = do ->
  id = 1
  -> id++


processEntityString = (es) ->
  es.trim().split /\s+/


# ===== interface =====

module.exports = {
  create
  get
  set
  touch
  update
  getEntity

  addValues
  addEntity
  addEntities

  flush
  propagateChange

  newUid
  processEntityString
}
