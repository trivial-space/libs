{getEntityIdFromNameNamespace} = require '../systems/types'

NAMESPACE = 'inputEvent.mouseButton'
LEFT_BTN = getEntityIdFromNameNamespace 'leftButton', NAMESPACE
MIDDLE_BTN = getEntityIdFromNameNamespace 'middleButton', NAMESPACE
RIGHT_BTN = getEntityIdFromNameNamespace 'rightButton', NAMESPACE


init = (sys, element = document, options) ->

  enableRightButton = options.enableRightButton

  entityName = 'inputEvent.mouseButton'

  sys.set LEFT_BTN, leftButton = false
  sys.set MIDDLE_BTN, middleButton = false
  sys.set RIGHT_BTN, rightButton = false


  onMouseUp = (e) ->
    e.preventDefault()
    if leftButton
      sys.set LEFT_BTN, leftButton = false
    if middleButton
      sys.set MIDDLE_BTN, middleButton = false
    if rightButton
      sys.set RIGHT_BTN, rightButton = false
    return


  onMouseDown = (e) ->
    e.preventDefault()
    switch e.button
      when 0
        sys.set LEFT_BTN, leftButton = true
      when 1
        sys.set MIDDLE_BTN, middleButton = true
      when 2
        sys.set RIGHT_BTN, rightButton = true
    return


  element.addEventListener "mousedown", onMouseDown, false
  document.addEventListener "mouseup", onMouseUp, false

  if enableRightButton
    element.addEventListener "contextmenu", ((e) -> e.preventDefault()) , false

  return


module.exports = {
  init
  NAMESPACE
  LEFT_BTN
  MIDDLE_BTN
  RIGHT_BTN
}
