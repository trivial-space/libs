import * as flowSourcesAnimation from "./flow/sources/animation";
import * as flowSourcesDom from "./flow/sources/dom";
import * as mathCore from "./math/core";
import * as mathCoords from "./math/coords";
import * as mathNoise from "./math/noise";
import * as mathVectors from "./math/vectors";

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
    polar: mathCoords,
    vectors: mathVectors
  }
}
