import {mat4} from '../math/gl-matrix'
import {EntityFactory, EntityRef} from 'tvs-flow/lib/utils/entity-reference'


export function makePerspective(
  entity: EntityFactory,
  canvasSize: EntityRef,
  fovy?: EntityRef,
  near?: EntityRef,
  far?: EntityRef
) {

  fovy = fovy || entity(Math.PI * 0.5)
  near = near || entity(0.1)
  far = far || entity(1000)


  const aspect = entity(1)
    .stream({
      with: {
        size: canvasSize.HOT,
      },
      do: ({size}) => size.width / size.height
    })


  const perspective = entity(mat4.create())
    .stream({
      id: 'updatePosition',
      with: {
        m: entity.SELF,
        near: near.HOT,
        far: far.HOT,
        fovy: fovy.HOT,
        aspect: aspect.HOT
      },
      do: ({m, near, far, fovy, aspect}) => mat4.perspective(m, fovy, aspect, near, far)
    })


  return {
    fovy, near, far, aspect, perspective
  }
}


// TODO: make quaternion implementation
export function makeFirstPersonView (
  entity: EntityFactory,
  position?: EntityRef,
  yaw?: EntityRef,
  pitch?: EntityRef
) {
    position = position || entity([0, 0, 0])
    yaw = yaw || entity(0)
    pitch = pitch || entity(0)
}
