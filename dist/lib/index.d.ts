import * as mathCore from './math/core';
import * as mathCoords from './math/coords';
import * as mathNoise from './math/noise';
import * as mathVectors from './math/vectors';
import * as mathGeometry from './math/geometry';
import * as vrCamera from './vr/camera';
import * as vrFlowCamera from './vr/flow-camera';
import * as vrFlowPainterUtils from './vr/flow-painter-utils';
import * as eventsDom from './events/dom';
import * as eventsKey from './events/keyboard';
import * as eventsMouse from './events/mouse';
import * as eventsAnimation from './events/animation';
import * as utilsString from './utils/string';
import * as utilsSequence from './utils/sequence';
import * as utilsPredicates from './utils/predicates';
import * as graphicsColors from './graphics/colors';
import * as graphicsTextures from './graphics/textures';
import * as graphicsPixesls from './graphics/pixel-context';
export declare const math: {
    core: typeof mathCore;
    noise: typeof mathNoise;
    coords: typeof mathCoords;
    vectors: typeof mathVectors;
    geometry: typeof mathGeometry;
};
export declare const vr: {
    camera: typeof vrCamera;
    flowCamera: typeof vrFlowCamera;
    flowPainterUtils: typeof vrFlowPainterUtils;
};
export declare const events: {
    dom: typeof eventsDom;
    mouse: typeof eventsMouse;
    keyboard: typeof eventsKey;
    animation: typeof eventsAnimation;
};
export declare const utils: {
    string: typeof utilsString;
    seq: typeof utilsSequence;
    predicates: typeof utilsPredicates;
};
export declare const graphics: {
    colors: typeof graphicsColors;
    pixels: typeof graphicsPixesls;
    textures: typeof graphicsTextures;
};
declare const _default: {
    math: {
        core: typeof mathCore;
        noise: typeof mathNoise;
        coords: typeof mathCoords;
        vectors: typeof mathVectors;
        geometry: typeof mathGeometry;
    };
    vr: {
        camera: typeof vrCamera;
        flowCamera: typeof vrFlowCamera;
        flowPainterUtils: typeof vrFlowPainterUtils;
    };
    events: {
        dom: typeof eventsDom;
        mouse: typeof eventsMouse;
        keyboard: typeof eventsKey;
        animation: typeof eventsAnimation;
    };
    utils: {
        string: typeof utilsString;
        seq: typeof utilsSequence;
        predicates: typeof utilsPredicates;
    };
    graphics: {
        colors: typeof graphicsColors;
        pixels: typeof graphicsPixesls;
        textures: typeof graphicsTextures;
    };
};
export default _default;
