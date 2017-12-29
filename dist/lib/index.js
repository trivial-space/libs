import * as mathCore from './math/core';
import * as mathCoords from './math/coords';
import * as mathNoise from './math/noise';
import * as mathVectors from './math/vectors';
import * as mathGeometry from './math/geometry';
import * as eventsDom from './events/dom';
import * as eventsKey from './events/keyboard';
import * as eventsMouse from './events/mouse';
import * as eventsAnimation from './events/animation';
import * as utilsUUID from './utils/uuid';
import * as utilsSequence from './utils/sequence';
import * as utilsPredicates from './utils/predicates';
import * as fpCore from './fp/core';
import * as graphicsColors from './graphics/colors';
import * as graphicsTextures from './graphics/textures';
import * as graphicsPixesls from './graphics/pixel-context';
export var math = {
    core: mathCore,
    noise: mathNoise,
    coords: mathCoords,
    vectors: mathVectors,
    geometry: mathGeometry
};
export var events = {
    dom: eventsDom,
    mouse: eventsMouse,
    keyboard: eventsKey,
    animation: eventsAnimation
};
export var utils = {
    uuid: utilsUUID,
    seq: utilsSequence,
    predicates: utilsPredicates
};
export var fp = {
    core: fpCore
};
export var graphics = {
    colors: graphicsColors,
    pixels: graphicsPixesls,
    textures: graphicsTextures
};
export default { math: math, events: events, utils: utils, graphics: graphics, fp: fp };
//# sourceMappingURL=index.js.map