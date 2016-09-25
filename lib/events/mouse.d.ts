export declare const Buttons: {
    LEFT: number;
    MIDDLE: number;
    RIGHT: number;
};
export declare function mouse(callback: (val: any) => void, opts?: any): () => void;
export declare function mouseObserver(opts?: any): {
    Buttons: {
        LEFT: number;
        MIDDLE: number;
        RIGHT: number;
    };
    state: null;
    destroy: () => void;
};
