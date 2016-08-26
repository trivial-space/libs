export function fpsAnimation(callback) {
  let isPlaying = true,
      oldTime = Date.now(),
      newTime

  function next() {
    if (isPlaying) {
      newTime = Date.now()
      callback(newTime - oldTime)
      oldTime = newTime
      requestAnimationFrame(next)
    }
  }

  next()

  return function stopAnimation() {
    isPlaying = false
  }
}


export function animation(callback) {
  let isPlaying = true

  function next() {
    if (isPlaying) {
      callback()
      requestAnimationFrame(next)
    }
  }

  next()

  return function stopAnimation() {
    isPlaying = false
  }
}
