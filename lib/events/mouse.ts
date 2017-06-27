export const Buttons = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2
}


export interface MouseState {
	pressed: { [btn: number]: MouseEvent }
	dragDelta: {
		x: number,
		y: number,
		event?: MouseEvent
	},
}


export function mouse (callback: (val: MouseState) => void, opts: any = {}) {

	const {
		element = document,
		enableRightButton
	} = opts

	const state: MouseState = {
		pressed: {},
		dragDelta: { x: 0, y: 0 }
	}

	let x = 0,
		y = 0,
		dragging = false


	function onMouseDown (e: MouseEvent) {

		state.pressed[e.button] = e

		if (e.button === Buttons.LEFT) {
			x = e.clientX
			y = e.clientY
			dragging = true
		}

		callback(state)
	}


	function onMouseUp (e: MouseEvent) {

		delete state.pressed[e.button]
		delete state.dragDelta.event

		state.dragDelta.x = 0
		state.dragDelta.y = 0

		dragging = false

		callback(state)
	}


	function onMouseMove (e: MouseEvent) {
		if (dragging) {

			state.dragDelta.event = e

			state.dragDelta.x = x - e.clientX
			state.dragDelta.y = y - e.clientY
			x = e.clientX
			y = e.clientY

			callback(state)
		}
	}


	function preventDefault (e: Event) {
		e.preventDefault()
	}


	element.addEventListener('mousedown', onMouseDown)
	document.addEventListener('mouseup', onMouseUp)
	document.addEventListener('mousemove', onMouseMove)

	if (enableRightButton) {
		element.addEventListener('contextmenu', preventDefault)
	}

	callback(state)

	return function destroy () {
		element.removeEventListener('mousedown', onMouseDown)
		document.removeEventListener('mousemove', onMouseMove)
		document.removeEventListener('mouseup', onMouseUp)
		if (enableRightButton) {
			element.removeEventListener('contextmenu', preventDefault)
		}
	}
}


export interface MouseObserver {
	Buttons: typeof Buttons,
	state: MouseState,
	destroy: () => void
}


export function mouseObserver (opts: any = {}): MouseObserver {

	const observer: MouseObserver = {
		Buttons,
		state: {} as MouseState,
		destroy: () => { }
	}

	function callback (state: MouseState) {
		observer.state = state
	}

	observer.destroy = mouse(callback, opts)

	return observer
}
