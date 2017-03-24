export declare const Buttons: {
    LEFT: number;
    MIDDLE: number;
    RIGHT: number;
};
export interface MouseState {
    pressed: {
        [btn: number]: number;
    };
    dragDelta: {
        x: number;
        y: number;
    };
}
export declare function mouse(callback: (val: MouseState) => void, opts?: any): () => void;
export interface MouseObserver {
    Buttons: typeof Buttons;
    state: MouseState;
    destroy: () => void;
}
export declare function mouseObserver(opts?: any): MouseObserver;
