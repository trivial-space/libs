export function windowSize (send) {
  function resize () {
    send({
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
