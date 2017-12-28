import * as mathCore from './math/core'
import * as mathCoords from './math/coords'
import * as mathNoise from './math/noise'
import * as mathVectors from './math/vectors'
import * as mathGeometry from './math/geometry'
import * as eventsDom from './events/dom'
import * as eventsKey from './events/keyboard'
import * as eventsMouse from './events/mouse'
import * as eventsAnimation from './events/animation'
import * as utilsString from './utils/string'
import * as utilsSequence from './utils/sequence'
import * as utilsPredicates from './utils/predicates'
import * as utilsFp from './utils/fp'
import * as graphicsColors from './graphics/colors'
import * as graphicsTextures from './graphics/textures'
import * as graphicsPixesls from './graphics/pixel-context'


export const math = {
	core: mathCore,
	noise: mathNoise,
	coords: mathCoords,
	vectors: mathVectors,
	geometry: mathGeometry
}


export const events = {
	dom: eventsDom,
	mouse: eventsMouse,
	keyboard: eventsKey,
	animation: eventsAnimation
}


export const utils = {
	string: utilsString,
	seq: utilsSequence,
	predicates: utilsPredicates,
	fp: utilsFp
}


export const graphics = {
	colors: graphicsColors,
	pixels: graphicsPixesls,
	textures: graphicsTextures
}


export default { math, events, utils, graphics }
