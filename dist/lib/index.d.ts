import * as mathCore from './math/core';
import * as mathCoords from './math/coords';
import * as mathNoise from './math/noise';
import * as mathVectors from './math/vectors';
import * as mathGeometry from './math/geometry';
import * as mathRandom from './math/random';
import * as eventsDom from './events/dom';
import * as eventsKey from './events/keyboard';
import * as eventsMouse from './events/mouse';
import * as eventsAnimation from './events/animation';
import * as utilsUUID from './utils/uuid';
import * as utilsSequence from './utils/sequence';
import * as utilsPredicates from './utils/predicates';
import * as utilsObject from './utils/object';
import * as fpCore from './fp/core';
import * as graphicsColors from './graphics/colors';
import * as graphicsTextures from './graphics/textures';
import * as graphicsPixesls from './graphics/pixel-context';
import * as algorithmsBase from './algorithms/base';
import * as datastructuresBintree from './datastructures/bintree';
import * as datastructuresRBTree from './datastructures/rbtree';
import * as datastructuresHeap from './datastructures/heap';
import * as geometryPrimitives from './geometry/primitives';
import * as geometryQuad from './geometry/quad';
export declare const math: {
    core: typeof mathCore;
    noise: typeof mathNoise;
    coords: typeof mathCoords;
    vectors: typeof mathVectors;
    geometry: typeof mathGeometry;
    random: typeof mathRandom;
};
export declare const events: {
    dom: typeof eventsDom;
    mouse: typeof eventsMouse;
    keyboard: typeof eventsKey;
    animation: typeof eventsAnimation;
};
export declare const utils: {
    uuid: typeof utilsUUID;
    seq: typeof utilsSequence;
    predicates: typeof utilsPredicates;
    object: typeof utilsObject;
};
export declare const fp: {
    core: typeof fpCore;
};
export declare const graphics: {
    colors: typeof graphicsColors;
    pixels: typeof graphicsPixesls;
    textures: typeof graphicsTextures;
};
export declare const geometry: {
    primitives: typeof geometryPrimitives;
    quad: typeof geometryQuad;
};
export declare const algorithms: {
    base: typeof algorithmsBase;
};
export declare const datastructures: {
    bintree: typeof datastructuresBintree;
    rbtree: typeof datastructuresRBTree;
    heap: typeof datastructuresHeap;
};
declare const _default: {
    math: {
        core: typeof mathCore;
        noise: typeof mathNoise;
        coords: typeof mathCoords;
        vectors: typeof mathVectors;
        geometry: typeof mathGeometry;
        random: typeof mathRandom;
    };
    events: {
        dom: typeof eventsDom;
        mouse: typeof eventsMouse;
        keyboard: typeof eventsKey;
        animation: typeof eventsAnimation;
    };
    utils: {
        uuid: typeof utilsUUID;
        seq: typeof utilsSequence;
        predicates: typeof utilsPredicates;
        object: typeof utilsObject;
    };
    graphics: {
        colors: typeof graphicsColors;
        pixels: typeof graphicsPixesls;
        textures: typeof graphicsTextures;
    };
    fp: {
        core: typeof fpCore;
    };
    geometry: {
        primitives: typeof geometryPrimitives;
        quad: typeof geometryQuad;
    };
    datastructures: {
        bintree: typeof datastructuresBintree;
        rbtree: typeof datastructuresRBTree;
        heap: typeof datastructuresHeap;
    };
    algorithms: {
        base: typeof algorithmsBase;
    };
};
export default _default;
