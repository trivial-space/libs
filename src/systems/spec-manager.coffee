loadSpec = (sys, spec) ->
  for entitySpec in spec.entities
    # entities
    id = getIdFormSpec entitySpec
    sys.set id, entitySpec.initialValue

    # factories
    if entitySpec.factory
      f = entitySpec.factory
      sys.addFactory f.procedure, id, f.dependencies

    # reactions
    if entitySpec.reactions
      for rSpec in entitySpec.reactions
        sys.addReaction rSpec.procedure, id, rSpec.triggers, rSpec.supplements

  sys.flush()
  return


getIdFromNameNamespace = (name, namespace) ->
  return name unless namespace
  [namespace, name].join '/'


getIdFormSpec = (entitySpec) ->
  entitySpec.id or getIdFromNameNamespace entitySpec.name, entitySpec.namespace

# ===== interface =====

module.exports = {
  loadSpec
}
