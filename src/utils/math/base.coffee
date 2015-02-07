goog.provide 'ts.utils.math'


ts.utils.math =

  generateUUID: do ->

      # http://www.broofa.com/Tools/Math.uuid.htm
      chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split ''
      uuid = new Array 36
      rnd = 0
      r = null

      ->
        i = 0
        while i < 36
          if i == 8 or i == 13 or i == 18 or i == 23
            uuid[i] = '-'
          else if i is 14
            uuid[i] = '4'
          else
            if rnd <= 0x02
              rnd = 0x2000000 + ( Math.random() * 0x1000000 ) | 0
            r = rnd & 0xf
            rnd = rnd >> 4
            uuid[i] = chars[if i == 19 then ( r & 0x3 ) | 0x8 else r]
          i += 1

        uuid.join ''


  sign: (num) ->
    if num > 0
      1
    else if num < 0
      -1
    else
      0


  lerp: (start, end, step) ->
    start + step * (end - start)


  clamp: (value, min, max) ->
    Math.max min, Math.min value, max


  randInt: (int) ->
    Math.floor Math.random() * int


  normalRand: ->
    (Math.random() * 2 - 1) +
    (Math.random() * 2 - 1) +
    (Math.random() * 2 - 1)
