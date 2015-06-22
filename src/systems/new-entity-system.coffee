create = ->
  entities: {}
  names: {}


get = (sys, name) ->
  entity = getEntity sys, name
  entity?.value


set = (sys, name, val) ->
  entity = getOrCreateEntity sys, name
  entity.value = val


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
  return


addEntities = (sys, specs) ->
  for name, spec of specs
    addEntity sys, name, spec
  return


addEntity = (sys, name, spec) ->
  entity = getOrCreateEntity sys, name

  if spec.value
    entity.initialValue = spec.value
  if spec.init
    entity.constuctor = spec.init
  if spec.require
    entity.dependencies = entityIdsFromNames sys, spec.require
    updateReactions sys, entity.id, entity.dependencies, entity.init

  initEntity sys, entity
  return


initEntity = (sys, entity) ->
  if entity.initialValue?
    entity.value = entity.initialValue
  if entity.constuctor?
    deps = entity.dependencies or []
    vals = deps.map (id) -> get sys, id
    entity.value = entity.constuctor.apply null, vals
  return


updateReactions = (sys, id, deps, action) ->



# ===== change management =====

flush = ->

# ===== helper methods =====

newUid = do ->
  id = 1
  -> id++


processEntityString = (es) ->
  es.trim().split /\s+/


entityIdsFromNames = (sys, es) ->
  processEntityString es
    .map (name) ->
      id = sys.names[name]
      unless id?
        throw Error "No entity found with the name #{name} in '#{es}'"
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
