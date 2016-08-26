export function windowSize (callback) {
  function resize () {
    callback({
      width: window.innerWidth,
      heigth: window.innerHeight
    })
  }

  window.addEventListener('resize', resize)

  resize()

  return function stop() {
    window.removeEventListener('resize', resize)
  }
}
