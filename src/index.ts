import * as mathCore from "./math/core"
import * as mathCoords from "./math/coords"
import * as mathNoise from "./math/noise"
import * as mathVectors from "./math/vectors"
import * as mathLinAlg from "./math/gl-matrix"
import * as mathGeometry from "./math/geometry"
import * as vrCamera from "./vr/camera"
import * as eventsDom from "./events/dom"
import * as eventsKey from "./events/keyboard"
import * as eventsMouse from "./events/mouse"
import * as utilsString from "./utils/string"
import * as utilsAnimation from "./utils/animation"


export const math = {
  core: mathCore,
  noise: mathNoise,
  coords: mathCoords,
  vectors: mathVectors,
  linAlg: mathLinAlg,
  geometry: mathGeometry
}


export const vr = {
  camera: vrCamera
}


export const events = {
  dom: eventsDom,
  mouse: eventsMouse,
  keyboard: eventsKey
}


export const utils = {
  animation: utilsAnimation,
  string: utilsString
}


export default { math, vr, events, utils }
