create = ->
  entities: {}
  names: {}


get = (sys, name) ->
  entity = getEntity sys, name
  entity?.value


set = (sys, name, val) ->
  entity = getOrCreateEntity sys, name
  entity.value = val


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


addEntity = (sys, name, spec) ->
  entity = getOrCreateEntity sys, name
  if spec.value
    entity.value = spec.value
  if spec.init
    entity.constuctor = spec.init
    entity.value = spec.init()


# ===== helper methods =====

newUid = do ->
  id = 1
  -> id++


# ===== interface =====

module.exports = {
  create
  get
  set
  getEntity

  addValues
  addEntity

  newUid
}
