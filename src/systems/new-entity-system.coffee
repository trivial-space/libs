create = ->
  entities: {}
  names: {}


get = (sys, name) ->
  entity = getEntity sys, name
  entity?.value


set = (sys, name, val) ->
  entity = getEntity sys, name
  entity ?= createEntity sys, name
  entity.value = val


getEntity = (sys, name) ->
  sys.entities[name] or sys.entities[sys.names[name]]


createEntity = (sys, name) ->
  entity = {}
  id = newUid()
  sys.entities[id] = entity
  if name and typeof name is 'string'
    sys.names[name] = id
  entity




# ===== helper methods =====

newUid = do ->
  id = 1
  -> id++


# ===== interface =====

module.exports = {
  create
  get
  set

  newUid
}
