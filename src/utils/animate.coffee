###*
# Takes a update function and animaties it.
# Hands the time per frame to the step funciton.

# @return stop function that stops the animation.
###
module.exports = (step) ->

  isPlaying = true
  oldTime = Date.now()
  newTime = null

  animate = () ->
    if isPlaying
      newTime = Date.now()
      step newTime - oldTime
      oldTime = newTime
      requestAnimationFrame animate

  animate()

  stop = () ->
    isPlaying = false
    return


