import {mat4, quat, GLVec} from '../math/gl-matrix'
import {EntityFactory, EntityRef} from 'tvs-flow/lib/utils/entity-reference'
import {getYawQuat, getPitchQuat} from '../math/geometry'


export function makePerspective(
  {val}: EntityFactory,
  canvasSize: EntityRef<{width: number, height: number}>,
  fovy?: EntityRef<number>,
  near?: EntityRef<number>,
  far?: EntityRef<number>
) {

  fovy = fovy || val(Math.PI * 0.5)
  near = near || val(0.1)
  far = far || val(1000)

  const aspect = val(1)
    .react(
      [canvasSize.HOT],
      size => size.width / size.height
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
  position?: EntityRef<GLVec>,
  yaw?: EntityRef<number>,
  pitch?: EntityRef<number>
) {

    position = position || val([0, 0, 0])
    yaw = yaw || val(0)
    pitch = pitch || val(0)

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
