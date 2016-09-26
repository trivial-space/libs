export declare const camera: {
    'props.fovy': {
        val: number;
    };
    'props.aspect': {
        val: number;
    };
    'props.near': {
        val: number;
    };
    'props.far': {
        val: number;
    };
    'props.rotationX': {
        val: number;
    };
    'props.rotationY': {
        val: number;
    };
    'props.moveForward': {
        val: number;
        isEvent: boolean;
    };
    'props.moveLeft': {
        val: number;
        isEvent: boolean;
    };
    'props.moveUp': {
        val: number;
        isEvent: boolean;
    };
    'perspective': {
        val: Float32Array | number[];
        stream: {
            deps: {
                fovy: string;
                aspect: string;
                near: string;
                far: string;
                mat: string;
            };
            do: ({mat, fovy, aspect, near, far}: {
                mat: any;
                fovy: any;
                aspect: any;
                near: any;
                far: any;
            }) => Float32Array | number[];
        };
    };
    'rotationX': {
        val: Float32Array | number[];
        stream: {
            deps: {
                m: string;
                rotX: string;
            };
            do: ({m, rotX}: {
                m: any;
                rotX: any;
            }) => Float32Array | number[];
        };
    };
    'rotationY': {
        val: Float32Array | number[];
        stream: {
            deps: {
                m: string;
                rotY: string;
            };
            do: ({m, rotY}: {
                m: any;
                rotY: any;
            }) => Float32Array | number[];
        };
    };
    'position': {
        val: number[];
        stream: {
            deps: {
                p: string;
                forward: string;
                left: string;
                up: string;
                rot: string;
            };
            do: ({p, forward, left, up, rot}: {
                p: any;
                forward: any;
                left: any;
                up: any;
                rot: any;
            }) => any;
        };
    };
    'view': {
        val: Float32Array | number[];
        stream: {
            deps: {
                view: string;
                rotY: string;
                rotX: string;
                pos: string;
            };
            do: ({view, rotY, rotX, pos}: {
                view: any;
                rotY: any;
                rotX: any;
                pos: any;
            }) => any;
        };
    };
};
export default camera;
