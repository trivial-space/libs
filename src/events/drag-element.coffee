ES = require '../systems/entity-system'

NAME_PREFIX = 'inputEvent:mouseDrag:'
DELTA_X = NAME_PREFIX + 'deltaX'
DELTA_Y = NAME_PREFIX + 'deltaY'


init = (sys, element = document) ->

  _x = 0
  _y = 0
  _dragging = false
  _oldDeltaX = 0
  _oldDeltaY = 0

  element.addEventListener "mousedown", onMouseDown, false
  document.addEventListener "mousemove", onMouseMove, false
  document.addEventListener "mouseup", onMouseUp, false


  onMouseMove = (e) ->
    if _dragging
      _oldDeltaX = deltaX
      _oldDeltaY = deltaY
      deltaX = _x - e.screenX
      deltaY = _y - e.screenY
      if deltaX != _oldDeltaX
        ES.set sys, DELTA_X, deltaX
      if deltaY != _oldDeltaY
        ES.set sys, DELTA_Y, deltaY
      _x = e.screenX
      _y = e.screenY


  onMouseUp = () ->
    ES.set sys, DELTA_X, deltaX = _oldDeltaX = 0
    ES.set sys, DELTA_Y, deltaY = _oldDeltaY = 0
    _dragging = false


  onMouseDown = (e) ->
    if e.button is 0
      _x = e.screenX
      _y = e.screenY
      _dragging = true

  return


module.exports = {
  init
  NAME_PREFIX
  DELTA_X
  DELTA_Y
}
