ES = require '../systems/entity-system'

NAME_PREFIX = 'inputEvent:keyDirection:'
FORTH = NAME_PREFIX + 'forth'
BACK = NAME_PREFIX + 'back'
LEFT = NAME_PREFIX + 'left'
RIGHT = NAME_PREFIX + 'right'
UP = NAME_PREFIX + 'up'
DOWN = NAME_PREFIX + 'down'


init = (sys) ->

  ES.set sys, FORTH, forth = false
  ES.set sys, BACK, back = false
  ES.set sys, LEFT, left = false
  ES.set sys, RIGHT, right = false
  ES.set sys, UP, up = false
  ES.set sys, DOWN, down = false


  onKeyDown = (e) ->
    e.preventDefault()
    switch e.keyCode
      when 38, 87
        unless forth
          ES.set sys, FORTH, forth = true
      when 37, 65
        unless left
          ES.set sys, LEFT, left = true
      when 40, 83
        unless back
          ES.set sys, BACK, back = true
      when 39, 68
        unless right
          ES.set sys, RIGHT, right = true
      when 82
        unless up
          ES.set sys, UP, up = true
      when 70
        unless down
          ES.set sys, DOWN, down = true

    return


  onKeyUp = (e) ->
    e.preventDefault()
    switch e.keyCode
      when 38, 87
        ES.set sys, FORTH, forth = false
      when 37, 65
        ES.set sys, LEFT, left = false
      when 40, 83
        ES.set sys, BACK, back = false
      when 39, 68
        ES.set sys, RIGHT, right = false
      when 82
        ES.set sys, UP, up = false
      when 70
        ES.set sys, DOWN, down = false

    return

  document.addEventListener "keyup", onKeyUp, false
  document.addEventListener "keydown", onKeyDown, false

  return


module.exports = {
  init
  NAME_PREFIX
  LEFT
  RIGHT
  FORTH
  BACK
  UP
  DOWN
}
