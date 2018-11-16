// ===== stopable animation function with time per frame

export function animateWithTPF(callback: (tps: number) => void) {
	let isRunning = true
	let oldTime: number

	function next(newTime: number) {
		if (isRunning) {
			callback(newTime - (oldTime || newTime))
			oldTime = newTime
			requestAnimationFrame(next)
		}
	}

	requestAnimationFrame(next)

	return function stopAnimation() {
		isRunning = false
	}
}

// ===== stopable animation function without time per frame

export function animate(callback: (time?: number) => void) {
	let isRunning = true

	function next(time: number) {
		if (isRunning) {
			callback(time)
			requestAnimationFrame(next)
		}
	}

	requestAnimationFrame(next)

	return function stopAnimation() {
		isRunning = false
	}
}

// ===== start, stop, add and remove animated update functions

export function createAnimator(animateFunction: Function = animateWithTPF) {
	let updates: Function[] = []

	function callback() {
		for (const i in updates) {
			updates[i].apply(null, arguments)
		}
	}

	return {
		start: function() {
			this.stop = animateFunction(callback)
		},

		stop: () => {},

		step: callback,

		addUpdate: function(update: Function) {
			updates.push(update)
		},

		removeUpdate: function(update: Function) {
			updates = updates.filter(u => u !== update)
		}
	}
}
