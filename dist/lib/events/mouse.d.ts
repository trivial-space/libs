export declare const Buttons: {
    LEFT: number;
    MIDDLE: number;
    RIGHT: number;
};
export interface MouseState {
    pressed: {
        [btn: number]: MouseEvent;
    };
    drag: {
        x: number;
        y: number;
        event?: MouseEvent;
    };
}
export interface MouseOpts {
    element?: HTMLElement;
    enableRightButton?: boolean;
}
export declare function mouse(callback: (val: MouseState) => void): () => void;
export declare function mouse(opts: MouseOpts, callback: (val: MouseState) => void): () => void;
export interface MouseObserver {
    Buttons: typeof Buttons;
    state: MouseState;
    destroy: () => void;
}
export declare function mouseObserver(opts?: any): MouseObserver;
