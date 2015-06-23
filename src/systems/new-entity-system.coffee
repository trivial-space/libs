create = ->
  entities: {}
  names: {}
  actions: {}


get = (sys, name) ->
  entity = getEntity sys, name
  entity?.value


set = (sys, name, val) ->
  entity = getOrCreateEntity sys, name
  entity.value = val
  propagateChange sys, entity


update = (sys, name, fn) ->
  set sys, name, fn get sys, name


getEntity = (sys, name) ->
  sys.entities[name] or sys.entities[sys.names[name]]


createEntity = (sys, name) ->
  id = newUid()
  entity = { id }
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
  sys


addEntity = (sys, name, spec) ->
  entity = getOrCreateEntity sys, name

  if spec.value
    entity.initialValue = spec.value

  if spec.init
    entity.constuctor = spec.init
    if spec.require
      entity.depNames = processEntityString spec.require
      updateReactions sys, entity, entity.depNames, spec.init
      entity.dependencies = entityIdsFromNames sys, entity.depNames

  if spec.reactions
    for rnamesString, reaction of spec.reactions
      rnames = processEntityString rnamesString
      updateReactions sys, entity, [name, rnames...], reaction

  initEntity sys, entity
  sys


initEntity = (sys, entity) ->
  if entity.initialValue?
    entity.value = entity.initialValue
  if entity.constuctor?
    deps = entity.dependencies or []
    vals = deps.map (id) -> get sys, id
    entity.value = entity.constuctor.apply null, vals
  sys


updateReactions = (sys, entity, depNames, action) ->
  actionId = newUid()

  for name in depNames
    if name isnt entity.name
      depEntity = getOrCreateEntity sys, name
      depEntity.reactions ?= {}
      depEntity.reactions[entity.id] = actionId

  sys.actions[actionId] =
    action: action
    dependencies: entityIdsFromNames sys, depNames
  sys


# ===== change management =====

applyChange = (sys, entity, deps, fn) ->
  args = (sys.entities[dep].value for dep in deps)
  res = fn.apply null, args
  entity.value = res if res
  sys


propagateChange = (sys, entity)->
  if entity.reactions?
    for rid, aid of entity.reactions
      {dependencies, action} = sys.actions[aid]
      nextEntity = sys.entities[rid]
      applyChange sys, nextEntity, dependencies, action
      propagateChange sys, nextEntity
  sys


flush = ->


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
  update
  getEntity

  addValues
  addEntity
  addEntities

  flush

  newUid
  processEntityString
  entityIdsFromNames
}
