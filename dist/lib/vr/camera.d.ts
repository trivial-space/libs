export declare function create(opts?: {}): {
    props: {
        fovy: number;
        aspect: number;
        near: number;
        far: number;
        needsUpdatePerspective: boolean;
        rotateX: number;
        rotateY: number;
        moveForward: number;
        moveLeft: number;
        moveUp: number;
    };
    state: {
        view: number[] | Float32Array;
        perspective: number[] | Float32Array;
        rotationX: number[] | Float32Array;
        rotationY: number[] | Float32Array;
        position: number[];
    };
};
export declare function update({props, state: {view, perspective, rotationX, rotationY, position}}: {
    props: any;
    state: {
        view: any;
        perspective: any;
        rotationX: any;
        rotationY: any;
        position: any;
    };
}): void;
