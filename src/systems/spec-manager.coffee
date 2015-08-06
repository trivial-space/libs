{getEntityIdFromNameNamespace, getNameNamespaceFromEntityId} = require './types'

# ===== spec loading =====

loadSpec = (sys, spec) ->
  for _, entitySpec of spec.entities
    entitySpec.id ?= getIdFormSpec entitySpec
    sys.addEntity entitySpec

  for _, factorySpec of spec.factories
    sys.addFactory factorySpec

  for _, reactionSpec of spec.reactions
    sys.addReaction reactionSpec

  sys.flush()
  return


getIdFormSpec = ({id, name, namespace}) ->
  id or getEntityIdFromNameNamespace name, namespace


# ===== spec creation =====

entitySpecFromId = (id) ->
  [name, namespace] = getNameNamespaceFromEntityId id
  {id, name, namespace}


# ===== interface =====

module.exports = {
  loadSpec

  entitySpecFromId
}
