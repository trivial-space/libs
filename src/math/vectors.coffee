goog.provide 'tslibs.math.vectors'


goog.scope ->

  fns = tslibs.math.vectors


  fns.add = (vec1, vec2) ->
    for i in [0..vec1.length-1]
      vec1[i] + vec2[i]


  fns.addScalar = (vec, scalar) ->
    for i in vec
      i + scalar


  fns.sub = (vec1, vec2) ->
    for i in [0..vec1.length-1]
      vec1[i] - vec2[i]


  fns.subScalar = (vec, scalar) ->
    for i in vec
      i - scalar


  fns.mul = (vec, scalar) ->
    for val in vec
      val * scalar


  fns.div = (vec, scalar) ->
    if scalar
      val / scalar for val in vec


  fns.length = (vec) ->
    sum = 0
    sum += val * val for val in vec
    Math.sqrt sum


  fns.normalize = (vec) ->
    fns.div vec, fns.length vec


  fns.limit = (vec, maxLenght) ->
    if maxLenght < fns.length vec
      fns.mul fns.normalize(vec), maxLenght
    else
      vec


  fns.isEqual = (vec1, vec2) ->
    equal = true
    for i in [0..vec1.length-1]
      unless vec1[i] == vec2[i]
        equal = false
    equal
