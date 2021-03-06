import * as algorithmsBase from './algorithms/base';
import * as datastructuresBintree from './datastructures/bintree';
import * as datastructuresHeap from './datastructures/heap';
import * as datastructuresRBTree from './datastructures/rbtree';
import * as eventsAnimation from './events/animation';
import * as eventsDom from './events/dom';
import * as eventsKey from './events/keyboard';
import * as eventsMouse from './events/mouse';
import * as fpCore from './fp/core';
import * as geometryPrimitives from './geometry/primitives';
import * as geometryQuad from './geometry/quad';
import * as graphicsColors from './graphics/colors';
import * as graphicsPixesls from './graphics/pixel-context';
import * as graphicsTextures from './graphics/textures';
import * as mathCoords from './math/coords';
import * as mathCore from './math/core';
import * as mathGeometry from './math/geometry';
import * as mathNoise from './math/noise';
import * as mathRandom from './math/random';
import * as mathVectors from './math/vectors';
import * as utilsObject from './utils/object';
import * as utilsPredicates from './utils/predicates';
import * as utilsSequence from './utils/sequence';
import * as utilsUUID from './utils/uuid';
export const math = {
    core: mathCore,
    noise: mathNoise,
    coords: mathCoords,
    vectors: mathVectors,
    geometry: mathGeometry,
    random: mathRandom,
};
export const events = {
    dom: eventsDom,
    mouse: eventsMouse,
    keyboard: eventsKey,
    animation: eventsAnimation,
};
export const utils = {
    uuid: utilsUUID,
    seq: utilsSequence,
    predicates: utilsPredicates,
    object: utilsObject,
};
export const fp = {
    core: fpCore,
};
export const graphics = {
    colors: graphicsColors,
    pixels: graphicsPixesls,
    textures: graphicsTextures,
};
export const geometry = {
    primitives: geometryPrimitives,
    quad: geometryQuad,
};
export const algorithms = {
    base: algorithmsBase,
};
export const datastructures = {
    bintree: datastructuresBintree,
    rbtree: datastructuresRBTree,
    heap: datastructuresHeap,
};
export * from './types';
export default {
    math,
    events,
    utils,
    graphics,
    fp,
    geometry,
    datastructures,
    algorithms,
};
//# sourceMappingURL=index.js.map