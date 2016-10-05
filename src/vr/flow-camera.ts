import {mat4, vec3} from '../math/gl-matrix'
import {Spec} from 'tvs-flow/lib/utils/entity-spec'


export const camera: Spec = {

  'props.fovy': { val: Math.PI * 0.6 },
  'props.aspect': { val: window.innerWidth / window.innerHeight },
  'props.near': { val: 0.1 },
  'props.far': { val: 1000 },

  'props.rotationX': { val: 0 },
  'props.rotationY': { val: 0 },

  'props.moveForward': { val: 0, isEvent: true },
  'props.moveLeft': { val: 0, isEvent: true },
  'props.moveUp': { val: 0, isEvent: true },


  'perspective': {
    val: mat4.create(),
    stream: {
      with: {
        fovy: 'H #props.fovy',
        aspect: 'H #props.aspect',
        near: 'H #props.near',
        far: 'H #props.far',
        mat: 'A' },
      do: ({mat, fovy, aspect, near, far}) =>
        mat4.perspective(mat, fovy, aspect, near, far) } },


  'rotationX': {
    val: mat4.create(),
    stream: {
      with: { m: 'A', rotX: 'H #props.rotationX' },
      do: ({m, rotX}) => mat4.fromXRotation(m, rotX) } },


  'rotationY': {
    val: mat4.create(),
    stream: {
      with: { m: 'A', rotY: 'H #props.rotationY' },
      do: ({m, rotY}) => mat4.fromYRotation(m, rotY) } },


  'position': {
    val: [0, 0, 0],
    stream: {
      with: {
        p: 'A',
        forward: 'H #props.moveForward',
        left: 'H #props.moveLeft',
        up: 'H #props.moveUp',
        rot: 'C #rotationY' },
      do: ({p, forward, left, up, rot}) => {

        if (forward) {
          let v = [rot[8], rot[9], rot[10]]
          vec3.add(p, p, vec3.scale(v, v, -forward))
        }

        if (left) {
          let v = [rot[0], rot[1], rot[2]]
          vec3.add(p, p, vec3.scale(v, v, -left))
        }

        if (up) {
          let v = [rot[4], rot[5], rot[6]]
          vec3.add(p, p, vec3.scale(v, v, up))
        }

        return p
      } } },


  'view': {
    val: mat4.create(),
    stream: {
      with: {
        view: 'A',
        rotY: 'H #rotationY',
        rotX: 'H #rotationX',
        pos: 'H #position' },
      do: ({view, rotY, rotX, pos}) => {

        mat4.fromTranslation(view, pos)
        mat4.multiply(view, view, rotY)
        mat4.multiply(view, view, rotX)
        mat4.invert(view, view)
        return view

      } } } }


export default camera
