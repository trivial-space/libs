export const Buttons = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
}

export interface MouseState {
	pressed: { [btn: number]: MouseEvent }
	drag: {
		x: number
		y: number
		dX: number
		dY: number
		event?: MouseEvent
	}
	dragging: boolean
}

export interface MouseOpts {
	element?: HTMLElement
	enableRightButton?: boolean
	keepDefault?: boolean
	propagate?: boolean
}

export function mouse(callback: (val: MouseState) => void, opts?: MouseOpts) {
	const {
		element = document,
		enableRightButton,
		keepDefault,
		propagate,
	} = opts || {}

	const state: MouseState = {
		pressed: {},
		drag: { x: 0, y: 0, dX: 0, dY: 0 },
		dragging: false,
	}

	let x = 0,
		y = 0,
		oX = 0,
		oY = 0

	function onMouseDown(e: MouseEvent) {
		state.pressed[e.button] = e

		if (e.button === Buttons.LEFT) {
			x = oX = e.clientX
			y = oY = e.clientY
			state.dragging = true
		}

		callback(state)

		if (!keepDefault) {
			e.preventDefault()
		}
		if (!propagate) {
			e.stopPropagation()
		}
	}

	function onMouseUp(e: MouseEvent) {
		delete state.pressed[e.button]
		delete state.drag.event

		state.drag.x = 0
		state.drag.y = 0
		state.drag.dX = 0
		state.drag.dY = 0
		state.dragging = false

		callback(state)

		// if (!propagate) {
		// 	e.stopPropagation()
		// }
	}

	function onMouseMove(e: MouseEvent) {
		if (state.dragging) {
			state.drag.event = e

			state.drag.x = x - e.clientX
			state.drag.y = y - e.clientY
			state.drag.dX = oX - e.clientX
			state.drag.dY = oY - e.clientY

			oX = e.clientX
			oY = e.clientY

			callback(state)

			// if (!propagate) {
			// 	e.stopPropagation()
			// }
		}
	}

	function preventDefault(e: Event) {
		e.preventDefault()
	}

	element.addEventListener('mousedown', onMouseDown as EventListener)
	document.addEventListener('mouseup', onMouseUp)
	document.addEventListener('mousemove', onMouseMove)

	if (enableRightButton) {
		element.addEventListener('contextmenu', preventDefault)
	}

	callback(state)

	return function destroy() {
		element.removeEventListener('mousedown', onMouseDown as EventListener)
		document.removeEventListener('mousemove', onMouseMove)
		document.removeEventListener('mouseup', onMouseUp)
		if (enableRightButton) {
			element.removeEventListener('contextmenu', preventDefault)
		}
	}
}

export interface MouseObserver {
	Buttons: typeof Buttons
	state: MouseState
	destroy: () => void
}

export function mouseObserver(opts?: MouseOpts): MouseObserver {
	const observer: MouseObserver = {
		Buttons,
		state: {} as MouseState,
		destroy: () => {},
	}

	function callback(state: MouseState) {
		observer.state = state
	}

	observer.destroy = mouse(callback, opts)

	return observer
}
