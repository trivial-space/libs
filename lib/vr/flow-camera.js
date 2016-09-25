import { mat4, vec3 } from '../math/gl-matrix';
export const camera = {
    'props.fovy': { val: Math.PI * 0.6 },
    'props.aspect': { val: window.innerWidth / window.innerHeight },
    'props.near': { val: 0.1 },
    'props.far': { val: 1000 },
    'props.rotateX': { val: 0, isEvent: true },
    'props.rotateY': { val: 0, isEvent: true },
    'props.moveForward': { val: 0, isEvent: true },
    'props.moveLeft': { val: 0, isEvent: true },
    'props.moveUp': { val: 0, isEvent: true },
    'perspective': {
        stream: {
            deps: {
                fovy: 'H #props.fovy',
                aspect: 'H #props.aspect',
                near: 'H #props.near',
                far: 'H #props.far'
            },
            do: ({ fovy, aspect, near, far }) => mat4.perspective(mat4.create(), fovy, aspect, near, far)
        }
    },
    'rotationX': {
        val: mat4.create(),
        stream: {
            deps: { m: 'A', rotX: 'H #props.rotateX' },
            do: ({ m, rotX }) => rotX ? mat4.rotateX(m, m, rotX) : m
        }
    },
    'rotationY': {
        val: mat4.create(),
        stream: {
            deps: { m: 'A', rotY: 'H #props.rotateY' },
            do: ({ m, rotY }) => rotY ? mat4.rotateY(m, m, rotY) : m
        }
    },
    'position': {
        val: [0, 0, 0],
        stream: {
            deps: {
                p: 'A',
                forward: 'H #props.moveForward',
                left: 'H #props.moveLeft',
                up: 'H #props.moveUp',
                rot: 'C #rotationY'
            },
            do: ({ p, forward, left, up, rot }) => {
                if (forward) {
                    let v = [rot[8], rot[9], rot[10]];
                    vec3.add(p, p, vec3.scale(v, v, -forward));
                }
                if (left) {
                    let v = [rot[0], rot[1], rot[2]];
                    vec3.add(p, p, vec3.scale(v, v, -left));
                }
                if (up) {
                    let v = [rot[4], rot[5], rot[6]];
                    vec3.add(p, p, vec3.scale(v, v, up));
                }
                return p;
            }
        }
    },
    'view': {
        val: mat4.create(),
        stream: {
            deps: {
                view: 'A',
                rotY: 'H #rotationY',
                rotX: 'H #rotationX',
                pos: 'H #position'
            },
            do: ({ view, rotY, rotX, pos }) => {
                mat4.fromTranslation(view, pos);
                mat4.multiply(view, view, rotY);
                mat4.multiply(view, view, rotX);
                mat4.invert(view, view);
                return view;
            }
        }
    }
};
export default camera;
//# sourceMappingURL=flow-camera.js.map