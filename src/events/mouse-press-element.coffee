ES = require '../systems/entity-system'

NAME_PREFIX = 'inputEvent:mouseButton:'
LEFT_BTN = NAME_PREFIX + 'leftButton'
MIDDLE_BTN = NAME_PREFIX + 'middleButton'
RIGHT_BTN = NAME_PREFIX + 'rightButton'


init = (sys, element = document, options) ->

  enableRightButton = options.enableRightButton

  entityName = 'inputEvent.mouseButton'

  ES.set sys, LEFT_BTN, leftButton = false
  ES.set sys, MIDDLE_BTN, middleButton = false
  ES.set sys, RIGHT_BTN, rightButton = false


  onMouseUp = (e) ->
    e.preventDefault()
    if leftButton
      ES.set sys, LEFT_BTN, leftButton = false
    if middleButton
      ES.set sys, MIDDLE_BTN, middleButton = false
    if rightButton
      ES.set sys, RIGHT_BTN, rightButton = false
    return


  onMouseDown = (e) ->
    e.preventDefault()
    switch e.button
      when 0
        ES.set sys, LEFT_BTN, leftButton = true
      when 1
        ES.set sys, MIDDLE_BTN, middleButton = true
      when 2
        ES.set sys, RIGHT_BTN, rightButton = true
    return


  element.addEventListener "mousedown", onMouseDown, false
  document.addEventListener "mouseup", onMouseUp, false

  if enableRightButton
    element.addEventListener "contextmenu", ((e) -> e.preventDefault()) , false

  return


module.exports = {
  init
  NAME_PREFIX
  LEFT_BTN
  MIDDLE_BTN
  RIGHT_BTN
}
