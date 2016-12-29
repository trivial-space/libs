import {mat4, quat} from '../math/gl-matrix'
import {EntityFactory, EntityRef} from 'tvs-flow/lib/utils/entity-reference'
import {getYawQuat, getPitchQuat} from '../math/geometry'


export function makePerspective(
  {val}: EntityFactory,
  canvasSize: EntityRef<{width: number, height: number}>
) {

  const fovy = val(Math.PI * 0.6)
  const near = val(0.1)
  const far = val(1000)

  const aspect = val(1)
    .react(
      [canvasSize.HOT],
      (self, size) => size ? size.width / size.height : self
    )

  const perspective = val(mat4.create())
    .react(
      'updatePosition',
      [
        fovy.HOT,
        aspect.HOT,
        near.HOT,
        far.HOT
      ],
      mat4.perspective
    )

  return {
    fovy, near, far, aspect, perspective
  }
}


export function makeFirstPersonView (
  {val}: EntityFactory,
) {

    const position = val([0, 0, 0])
    const yaw = val(0)
    const pitch = val(0)

    const yawQuat = val(quat.create())
      .react(
        [yaw.HOT],
        getYawQuat
      )

    const pitchQuat = val(quat.create())
      .react(
        [pitch.HOT],
        getPitchQuat
      )

    const rotationQuat = val(quat.create())
      .react(
        [yawQuat.HOT, pitchQuat.HOT],
        quat.multiply
      )

    const view = val(mat4.create())
      .react(
        [rotationQuat.HOT, position.HOT],
        mat4.fromRotationTranslation
      )

    return { position, yaw, pitch, view, yawQuat, pitchQuat, rotationQuat }
}
