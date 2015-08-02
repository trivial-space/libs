parseRequireString = (es) ->
  es.trim().split /\s+/


module.exports.parse = (spec) ->

  entities:
    for eid, eSpec of spec
      e = id: eid

      if eSpec.value?
        e.initialValue = eSpec.value

      if eSpec.init
        e.factory = procedure: eSpec.init.update or eSpec.init
        deps = eSpec.init.require and parseRequireString eSpec.init.require
        e.factory.dependencies = deps if deps

      if eSpec.reactions
        e.reactions =
          for depString, rSpec of eSpec.reactions
            r =
              triggers: parseRequireString depString
              procedure: rSpec.update or rSpec
            if rSpec.require
              r.supplements = parseRequireString rSpec.require
            r

      e



