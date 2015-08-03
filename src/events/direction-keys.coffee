NAME_PREFIX = 'inputEvent:keyDirection:'
FORTH = NAME_PREFIX + 'forth'
BACK = NAME_PREFIX + 'back'
LEFT = NAME_PREFIX + 'left'
RIGHT = NAME_PREFIX + 'right'
UP = NAME_PREFIX + 'up'
DOWN = NAME_PREFIX + 'down'


init = (sys) ->

  sys.set FORTH, forth = false
  sys.set BACK, back = false
  sys.set LEFT, left = false
  sys.set RIGHT, right = false
  sys.set UP, up = false
  sys.set DOWN, down = false


  onKeyDown = (e) ->
    e.preventDefault()
    switch e.keyCode
      when 38, 87
        unless forth
          sys.set FORTH, forth = true
      when 37, 65
        unless left
          sys.set LEFT, left = true
      when 40, 83
        unless back
          sys.set BACK, back = true
      when 39, 68
        unless right
          sys.set RIGHT, right = true
      when 82
        unless up
          sys.set UP, up = true
      when 70
        unless down
          sys.set DOWN, down = true

    return


  onKeyUp = (e) ->
    e.preventDefault()
    switch e.keyCode
      when 38, 87
        sys.set FORTH, forth = false
      when 37, 65
        sys.set LEFT, left = false
      when 40, 83
        sys.set BACK, back = false
      when 39, 68
        sys.set RIGHT, right = false
      when 82
        sys.set UP, up = false
      when 70
        sys.set DOWN, down = false

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
