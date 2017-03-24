import * as mathCore from './math/core';
import * as mathCoords from './math/coords';
import * as mathNoise from './math/noise';
import * as mathVectors from './math/vectors';
import * as mathLinAlg from './math/gl-matrix';
import * as mathGeometry from './math/geometry';
import * as vrCamera from './vr/camera';
import * as vrFlowCamera from './vr/flow-camera';
import * as vrFlowUtils from './vr/flow-utils';
import * as eventsDom from './events/dom';
import * as eventsKey from './events/keyboard';
import * as eventsMouse from './events/mouse';
import * as utilsString from './utils/string';
import * as utilsAnimation from './utils/animation';
import * as utilsSequence from './utils/sequence';
import * as graphicsColors from './graphics/colors';
import * as graphicsTextures from './graphics/textures';
import * as graphicsPixesls from './graphics/pixel-context';
import * as flowTree from './flow/tree';
export var math = {
    core: mathCore,
    noise: mathNoise,
    coords: mathCoords,
    vectors: mathVectors,
    linAlg: mathLinAlg,
    geometry: mathGeometry
};
export var vr = {
    camera: vrCamera,
    flowCamera: vrFlowCamera,
    flowUtils: vrFlowUtils
};
export var events = {
    dom: eventsDom,
    mouse: eventsMouse,
    keyboard: eventsKey
};
export var utils = {
    animation: utilsAnimation,
    string: utilsString,
    seq: utilsSequence
};
export var graphics = {
    colors: graphicsColors,
    pixels: graphicsPixesls,
    textures: graphicsTextures
};
export var flow = {
    tree: flowTree
};
export default { math: math, vr: vr, events: events, utils: utils, graphics: graphics, flow: flow };
//# sourceMappingURL=index.js.map