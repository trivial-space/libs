import {sub, length, mul, div} from "../math/vectors"


export function gravity (obj1, obj2, G: number) {
  const force = sub(obj1.position, obj2.position)
  const distance = length(force)
  if (!distance) {
    return force
  } else {
    const m = (G * obj1.mass * obj2.mass) / (distance * distance)
    return mul(div(force, distance), m)
  }
}


export function drag(obj, C: number) {
  const dragVec = obj.velocity
  const speed = length(dragVec)
  if (!speed) {
    return dragVec
  } else {
    const dragMag = C * speed * speed * -1
    return mul(div(dragVec, speed), dragMag)
  }
}
