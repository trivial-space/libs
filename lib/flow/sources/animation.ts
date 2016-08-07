export function fpsAnimation(send) {
  let isPlaying = true,
      oldTime = Date.now(),
      newTime

  function next() {
    if (isPlaying) {
      newTime = Date.now()
      send(newTime - oldTime)
      oldTime = newTime
      requestAnimationFrame(next)
    }
  }

  next()

  return function stopAnimation() {
    isPlaying = false
  }
}


export function animation(send) {
  let isPlaying = true

  function next() {
    if (isPlaying) {
      send()
      requestAnimationFrame(next)
    }
  }

  next()

  return function stopAnimation() {
    isPlaying = false
  }
}
