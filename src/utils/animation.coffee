###*
# Takes a update function and animaties it.
# Hands the time per frame to the step funciton.

# @return stop function that stops the animation.
###
animate = (step) ->

  isPlaying = true
  oldTime = Date.now()
  newTime = null

  next = ->
    if isPlaying
      newTime = Date.now()
      step newTime - oldTime
      oldTime = newTime
      requestAnimationFrame next

  next()

  stop = ->
    isPlaying = false
    return


###*
# Animator factory to create objects with a start, stop and step function.
# takes an update function wich receives the tpf ms as first parameter at each call.
###
animator = (step) ->
  step: step
  start: ->
    @stop()
    @stop = animate step
    return
  stop: ->

module.exports = {
  animate
  animator
}
