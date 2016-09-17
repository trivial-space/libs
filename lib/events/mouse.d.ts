export declare const Buttons: {
    LEFT: number;
    MIDDLE: number;
    RIGHT: number;
};
export declare function mouseObserver(opts?: any): {
    Buttons: {
        LEFT: number;
        MIDDLE: number;
        RIGHT: number;
    };
    state: {
        pressed: {};
        dragDelta: {
            x: number;
            y: number;
        };
    };
    destroy: () => void;
};
