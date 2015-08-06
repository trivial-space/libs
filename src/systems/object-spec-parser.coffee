{entitySpecFromId} = require './spec-manager'
{getFactoryId, getReactionId} = require './types'


parseRequireString = (es) ->
  es.trim().split /\s+/


module.exports.parse = (spec) ->
  entities = {}
  factories = {}
  reactions = {}

  processRequireString = (s) ->
    deps = parseRequireString s
    for dep in deps
      entities[dep] = entitySpecFromId dep
    deps

  for eid, eSpec of spec
    e = entities[eid] ?= entitySpecFromId eid

    if eSpec.value?
      e.initialValue = eSpec.value

    if eSpec.init
      fid = getFactoryId eid
      factory =
        id: fid
        receiver: eid
        procedure: eSpec.init.do or eSpec.init
      if eSpec.init.require
        factory.dependencies = processRequireString eSpec.init.require
      factories[fid] = factory

    if eSpec.reactions
      for depString, rSpec of eSpec.reactions
        deps = processRequireString depString
        rid = getReactionId eid, deps
        reaction =
          id: rid
          triggers: deps
          procedure: rSpec.do or rSpec
        if rSpec.require
          reaction.supplements = processRequireString rSpec.require
        reactions[rid] = reaction

  {entities, factories, reactions}



