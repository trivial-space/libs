export declare function animateWithTPF(callback: (tps: number) => void): () => void;
export declare function animate(callback: (time?: number) => void): () => void;
export declare function animator(animateFunction: Function): {
    start: () => void;
    stop: () => void;
    step: () => void;
    addUpdate: (update: Function) => void;
    removeUpdate: (update: Function) => void;
};
