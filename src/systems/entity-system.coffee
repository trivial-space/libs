create = ->
  entities: {}
  names: {}
  actions: {}
  changes: {}


get = (sys, name) ->
  entity = getEntity sys, name
  entity?.value


set = (sys, name, val) ->
  entity = getOrCreateEntity sys, name
  entity.value = val
  propagateChange sys, entity


update = (sys, name, fn) ->
  set sys, name, fn get sys, name


touch = (sys, name) ->
  propagateChange sys, getEntity sys, name


getEntity = (sys, name) ->
  sys.entities[name] or sys.entities[sys.names[name]]


createEntity = (sys, name) ->
  id = newUid()
  entity = {id}
  sys.entities[id] = entity
  if name
    sys.names[name] = id
    entity.name = name
  entity


getOrCreateEntity = (sys, name) ->
  entity = getEntity sys, name
  entity ?= createEntity sys, name
  entity


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
      entity.depNames = processEntityString spec.require
      entity.constructor = updateReactions sys, entity, entity.depNames, spec.init
      entity.dependencies = entityIdsFromNames sys, entity.depNames
      sys.actions[entity.constructor].init = true
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
  entity = getEntity sys, name
  rnames = processEntityString depString
  rid = updateReactions sys, entity, [name, rnames...], reaction
  entity.stateComputations ?= {}
  for rname in rnames
    entity.stateComputations[sys.names[rname]] = rid


updateReactions = (sys, entity, depNames, action) ->
  actionId = newUid()

  if action.require
    additionalDeps = processEntityString action.require
    depNames = depNames.concat additionalDeps

  for name in depNames
    if name isnt entity.name and
        (not additionalDeps or additionalDeps.indexOf(name) < 0)
      depEntity = getOrCreateEntity sys, name
      depEntity.reactions ?= {}
      depEntity.reactions[entity.id] = actionId

  sys.actions[actionId] =
    action: action.update or action
    dependencies: entityIdsFromNames sys, depNames
  actionId


# ===== change management =====

applyChange = (sys, entity, deps, fn) ->
  sys


updateChange = (sys, entity, aid, order) ->
  change = sys.changes[aid] ?=
    order: order
    entity: entity
  change.count = (change.count and change.count + 1) or 1
  if change.order < order
    change.order = order
  return


propagateChange = (sys, entity, order) ->
  if entity.reactions?
    order ?= 1
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
    step = process[change.order] ?= []
    unit = {action, entity: change.entity}
    if action.init
      step.unshift unit
    else
      step.push unit

  sys.changes = {}

  for order, actions of process
    for {action, entity} in actions
      args = (sys.entities[dep].value for dep in action.dependencies)
      res = action.action.apply null, args
      entity.value = res if res

  sys


# ===== helper methods =====

newUid = do ->
  id = 1
  -> id++


processEntityString = (es) ->
  es.trim().split /\s+/


entityIdsFromNames = (sys, names) ->
  names.map (name) ->
    id = sys.names[name]
    unless id?
      throw Error "No entity found with the name #{name} in '#{names.join ' '}'"
    id


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
  entityIdsFromNames
}
