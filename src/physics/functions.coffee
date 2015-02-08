### 
Copyright (c) 2013 Thomas Gorny
The MIT License (see MIT-LICENSE.txt)
###

define [

  "lib/utils/math/vectors"

], ({add, sub, mul, div, length}) ->


  gravity: (attractor, accelerator, G) ->
    force = sub attractor.position, accelerator.position
    distance = length force
    unless distance
      force
    else
      m = (G * attractor.mass * accelerator.mass) / (distance * distance)
      mul div(force, distance), m


  drag: (obj, C) ->
    dragVec = obj.velocity
    speed = length dragVec
    unless speed
      dragVec
    else
      dragMag = C * speed * speed * -1
      mul div(dragVec, speed), dragMag
