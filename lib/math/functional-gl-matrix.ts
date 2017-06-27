import * as glMatrix from 'gl-matrix'

const v3 = glMatrix.vec3

type V = glMatrix.GLVec
//type M = glMatrix.GLVec

export const fvec3 = {
	add: (a: V, b: V) => v3.add(v3.create(), a, b),
	subtract: (a: V, b: V) => v3.subtract(v3.create(), a, b),
	sub: (a: V, b: V) => v3.sub(v3.create(), a, b),
	multiply: (a: V, b: V) => v3.multiply(v3.create(), a, b),
	mul: (a: V, b: V) => v3.mul(v3.create(), a, b),
	divide: (a: V, b: V) => v3.divide(v3.create(), a, b),
	div: (a: V, b: V) => v3.div(v3.create(), a, b),
	ceil: (a: V) => v3.ceil(v3.create(), a),
	floor: (a: V) => v3.floor(v3.create(), a),
	round: (a: V) => v3.round(v3.create(), a),
	min: (a: V, b: V) => v3.min(v3.create(), a, b),
	max: (a: V, b: V) => v3.max(v3.create(), a, b),
	scale: (a: V, b: number) => v3.scale(v3.create(), a, b),
	scaleAndAdd: (a: V, b: V, s: number) => v3.scaleAndAdd(v3.create(), a, b, s),
	inverse: (a: V) => v3.inverse(v3.create(), a),
	normalize: (a: V) => v3.normalize(v3.create(), a),
	cross: (a: V, b: V) => v3.cross(v3.create(), a, b)
}
