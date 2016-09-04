import * as flowSourcesAnimation from "./flow/sources/animation";
import * as flowSourcesDom from "./flow/sources/dom";
import * as mathCore from "./math/core";
import * as mathCoords from "./math/coords";
import * as mathNoise from "./math/noise";
import * as mathVectors from "./math/vectors";
import * as mathLinAlg from "./math/gl-matrix";
import * as mathGeometry from "./math/geometry";
import * as vrCamera from "./vr/camera"

export default {
  flow: {
    sources: {
      animation: flowSourcesAnimation,
      dom: flowSourcesDom
    }
  },
  math: {
    core: mathCore,
    noise: mathNoise,
    coords: mathCoords,
    vectors: mathVectors,
    linAlg: mathLinAlg,
    geometry: mathGeometry
  },
  vr: {
    camera: vrCamera
  }
}
