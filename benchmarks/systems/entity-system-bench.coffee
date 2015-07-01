ES = require '../../src/systems/entity-system'
util = require 'util'

UPDATES = 10000

inc = (x) -> x + 1
length = (x) -> x.length

spec =
  'counter':
    value: 0
    reactions:
      'trigger': inc

  'counterAcc':
    value: []
    reactions:
      'counter': (acc, cnt) ->
        acc.push cnt
        return

  'accLength':
    require: 'counterAcc'
    init: (acc) -> length


sys = ES.addEntities ES.create(), spec
# console.log sys

startTime = Date.now()

for foo in [1..UPDATES]
  ES.touch sys, 'trigger'
  ES.flush sys

duration1 = Date.now() - startTime

startTime = Date.now()

counter = 0
counterAcc = []
for foo in [1..UPDATES]
  counter = inc counter
  counterAcc.push counter
  accLength = length counterAcc

duration2 = Date.now() - startTime


console.log "system: ", sys
console.log "#{UPDATES} ES updates in #{duration1} ms"
console.log "compared to vanilla js #{duration2} ms"






