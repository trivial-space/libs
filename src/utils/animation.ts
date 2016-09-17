// ===== stopable animation function with time per frame

export function animateWithTPF(callback: (tps: number) => void) {
  let isRunning = true,
      oldTime = Date.now(),
      newTime

  function next() {
    if (isRunning) {
      newTime = Date.now()
      callback(newTime - oldTime)
      oldTime = newTime
      requestAnimationFrame(next)
    }
  }

  next()

  return function stopAnimation() {
    isRunning = false
  }
}


// ===== stopable animation function with time per frame

export function animate(callback: () => void) {
  let isRunning = true

  function next() {
    if (isRunning) {
      callback()
      requestAnimationFrame(next)
    }
  }

  next()

  return function stopAnimation() {
    isRunning = false
  }
}


// ===== start, stop, add and remove animated update functions

export function animator(animateFunction: Function) {

  let updates: Function[] = []

  function callback() {
    for(let i in updates) {
      updates[i].apply(null, arguments)
    }
  }

  return  {
    start: function() {
      this.stop = animateFunction(callback)
    },

    stop: () => {},

    step: callback,

    addUpdate: function (update: Function) {
      updates.push(update)
    },

    removeUpdate: function(update: Function) {
      updates = updates.filter(u => u !== update)
    }
  }
}
