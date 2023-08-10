export declare const Buttons: {
    LEFT: number;
    MIDDLE: number;
    RIGHT: number;
};
export interface PointerState {
    pressed: {
        [btn: number]: PointerEvent;
    };
    drag: {
        x: number;
        y: number;
        dX: number;
        dY: number;
        xMax: number;
        yMax: number;
        event?: PointerEvent;
    };
    dragging: boolean;
    holding: boolean;
}
export interface PointerOpts {
    element?: HTMLElement;
    enableRightButton?: boolean;
    holdDelay?: number;
    holdRadius?: number;
    keepDefault?: boolean;
    propagate?: boolean;
}
export declare function pointer(callback: (val: PointerState) => void, opts?: PointerOpts): () => void;
export interface PointerObserver {
    Buttons: typeof Buttons;
    state: PointerState;
    destroy: () => void;
}
export declare function pointerObserver(opts?: PointerOpts): PointerObserver;
