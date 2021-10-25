export declare function animateWithTPF(callback: (tpf: number) => void): () => void;
export declare function animate(callback: (time?: number) => void): () => void;
export declare function createAnimator(animateFunction?: typeof animateWithTPF): {
    start: () => void;
    stop: () => void;
    step: () => void;
    addUpdate: (update: Function) => void;
    removeUpdate: (update: Function) => void;
};
