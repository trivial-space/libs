export const Buttons = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
}

export interface PointerState {
	pressed: { [btn: number]: PointerEvent }
	drag: {
		x: number
		y: number
		dX: number
		dY: number
		xMax: number
		yMax: number
		event?: PointerEvent
	}
	dragging: boolean
	holding: boolean
	touching: boolean
}

export interface PointerOpts {
	element?: HTMLElement
	enableRightButton?: boolean
	holdDelay?: number
	holdRadius?: number
}

export function pointer(callback: (val: PointerState) => void): () => void
export function pointer(
	opts: PointerOpts,
	callback: (val: PointerState) => void,
): () => void
export function pointer(
	opts: PointerOpts | ((val: PointerState) => void),
	callback?: (val: PointerState) => void,
) {
	const cb = callback || (opts as (val: PointerState) => void)

	const {
		element = document,
		enableRightButton,
		holdDelay = 400,
		holdRadius = 5,
	} = opts as PointerOpts

	const state: PointerState = {
		pressed: {},
		drag: { x: 0, y: 0, dX: 0, dY: 0, xMax: 0, yMax: 0 },
		dragging: false,
		holding: false,
		touching: false,
	}

	let x = 0,
		y = 0,
		oX = 0,
		oY = 0,
		timeout: any = null

	function onPointerDown(e: PointerEvent) {
		if (e.isPrimary) {
			state.pressed[e.button] = e
			x = oX = e.clientX
			y = oY = e.clientY
			state.dragging = true
			timeout != null && clearTimeout(timeout)
			timeout = setTimeout(() => {
				if (state.drag.xMax < holdRadius && state.drag.yMax < holdRadius) {
					state.holding = true
					cb(state)
				}
			}, holdDelay)
		} else {
			state.pressed[Buttons.RIGHT] = e
		}
		cb(state)
	}

	function onPointerUp(_e: PointerEvent) {
		state.pressed = {}
		delete state.drag.event
		state.drag.x = 0
		state.drag.y = 0
		state.drag.dX = 0
		state.drag.dY = 0
		state.drag.xMax = 0
		state.drag.yMax = 0
		state.dragging = false
		state.holding = false
		timeout != null && clearTimeout(timeout)
		timeout = null
		cb(state)
	}

	function onPointerMove(e: PointerEvent) {
		if (state.dragging) {
			state.drag.event = e

			state.drag.x = x - e.clientX
			state.drag.y = y - e.clientY
			state.drag.dX = oX - e.clientX
			state.drag.dY = oY - e.clientY
			state.drag.xMax = Math.max(Math.abs(state.drag.x), state.drag.xMax)
			state.drag.yMax = Math.max(Math.abs(state.drag.y), state.drag.yMax)

			oX = e.clientX
			oY = e.clientY

			cb(state)
		}
	}

	function preventDefault(e: Event) {
		e.preventDefault()
	}

	function onTouchStart() {
		state.touching = true
		cb(state)
	}
	function onTouchEnd() {
		state.touching = false
		cb(state)
	}

	element.addEventListener('pointerdown', onPointerDown as EventListener)
	document.addEventListener('pointermove', onPointerMove)
	document.addEventListener('pointerup', onPointerUp)
	document.addEventListener('pointerleave', onPointerUp)
	document.addEventListener('pointercancel', onPointerUp)
	document.addEventListener('touchstart', onTouchStart)
	document.addEventListener('touchend', onTouchEnd)

	if (enableRightButton) {
		element.addEventListener('contextmenu', preventDefault)
	}

	cb(state)

	return function destroy() {
		element.removeEventListener('pointerdown', onPointerDown as EventListener)
		document.removeEventListener('pointermove', onPointerMove)
		document.removeEventListener('pointerup', onPointerUp)
		document.removeEventListener('pointerleave', onPointerUp)
		document.removeEventListener('pointercancel', onPointerUp)
		document.removeEventListener('touchstart', onTouchStart)
		document.removeEventListener('touchend', onTouchEnd)
		if (enableRightButton) {
			element.removeEventListener('contextmenu', preventDefault)
		}
	}
}

export interface PointerObserver {
	Buttons: typeof Buttons
	state: PointerState
	destroy: () => void
}

export function pointerObserver(opts: any = {}): PointerObserver {
	const observer: PointerObserver = {
		Buttons,
		state: {} as PointerState,
		destroy: () => {},
	}

	function callback(state: PointerState) {
		observer.state = state
	}

	observer.destroy = pointer(opts, callback)

	return observer
}
