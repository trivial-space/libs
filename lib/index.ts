import * as mathCore from './math/core'
import * as mathCoords from './math/coords'
import * as mathNoise from './math/noise'
import * as mathVectors from './math/vectors'
import * as mathGeometry from './math/geometry'
import * as vrCamera from './vr/camera'
import * as vrFlowCamera from './vr/flow-camera'
import * as vrFlowPainterUtils from './vr/flow-painter-utils'
import * as eventsDom from './events/dom'
import * as eventsKey from './events/keyboard'
import * as eventsMouse from './events/mouse'
import * as utilsString from './utils/string'
import * as utilsAnimation from './events/animation'
import * as utilsSequence from './utils/sequence'
import * as graphicsColors from './graphics/colors'
import * as graphicsTextures from './graphics/textures'
import * as graphicsPixesls from './graphics/pixel-context'
import * as flowTree from './flow/tree'


export const math = {
	core: mathCore,
	noise: mathNoise,
	coords: mathCoords,
	vectors: mathVectors,
	geometry: mathGeometry
}


export const vr = {
	camera: vrCamera,
	flowCamera: vrFlowCamera,
	flowPainterUtils: vrFlowPainterUtils
}


export const events = {
	dom: eventsDom,
	mouse: eventsMouse,
	keyboard: eventsKey
}


export const utils = {
	animation: utilsAnimation,
	string: utilsString,
	seq: utilsSequence
}


export const graphics = {
	colors: graphicsColors,
	pixels: graphicsPixesls,
	textures: graphicsTextures
}


export const flow = {
	tree: flowTree
}


export default { math, vr, events, utils, graphics, flow }
