import { lerp } from './core'

const p1 = [
	151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
	36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234,
	75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237,
	149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48,
	27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105,
	92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73,
	209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86,
	164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38,
	147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189,
	28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101,
	155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232,
	178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12,
	191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31,
	181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
	138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215,
	61, 156, 180,
]

for (let i = 0; i <= 256; i++) {
	p1[256 + i] = p1[i]
}

function fade(t: number) {
	return t * t * t * (t * (t * 6 - 15) + 10)
}

function grad(hash: number, x: number) {
	if ((hash & 1) === 0) {
		return x
	} else {
		return -x
	}
}

export function noise1d(x: number) {
	let X, floorX, u
	floorX = ~~x
	X = floorX & 255
	x -= floorX
	u = fade(x)
	return lerp(u, grad(p1[X], x), grad(p1[X + 1], x - 1))
}

/*
 * A fast javascript implementation of simplex noise by Jonas Wagner
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 *
 *
 * Copyright (C) 2012 Jonas Wagner
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

const F2 = 0.5 * (Math.sqrt(3.0) - 1.0),
	G2 = (3.0 - Math.sqrt(3.0)) / 6.0,
	F3 = 1.0 / 3.0,
	G3 = 1.0 / 6.0,
	F4 = (Math.sqrt(5.0) - 1.0) / 4.0,
	G4 = (5.0 - Math.sqrt(5.0)) / 20.0,
	p = new Uint8Array(256),
	perm = new Uint8Array(512),
	permMod12 = new Uint8Array(512)

for (let i = 0; i < 256; i++) {
	p[i] = Math.random() * 256
}

for (let i = 0; i < 512; i++) {
	perm[i] = p[i & 255]
	permMod12[i] = perm[i] % 12
}

const grad3 = new Float32Array([
	1, 1, 0, -1, 1, 0, 1, -1, 0,

	-1, -1, 0, 1, 0, 1, -1, 0, 1,

	1, 0, -1, -1, 0, -1, 0, 1, 1,

	0, -1, 1, 0, 1, -1, 0, -1, -1,
])

const grad4 = new Float32Array([
	0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1,
	0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1,
	-1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1,
	0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1,
	-1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0,
	-1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0,
])

export function noise2d(xin: number, yin: number) {
	let n0 = 0,
		n1 = 0,
		n2 = 0 // Noise contributions from the three corners
	// Skew the input space to determine which simplex cell we're in
	const s = (xin + yin) * F2 // Hairy factor for 2D
	const i = Math.floor(xin + s)
	const j = Math.floor(yin + s)
	const t = (i + j) * G2
	const X0 = i - t // Unskew the cell origin back to (x,y) space
	const Y0 = j - t
	const x0 = xin - X0 // The x,y distances from the cell origin
	const y0 = yin - Y0
	// For the 2D case, the simplex shape is an equilateral triangle.
	// Determine which simplex we are in.
	let i1, j1 // Offsets for second (middle) corner of simplex in (i,j) coords
	if (x0 > y0) {
		i1 = 1
		j1 = 0
	} // lower triangle, XY order: (0,0)->(1,0)->(1,1)
	else {
		i1 = 0
		j1 = 1
	} // upper triangle, YX order: (0,0)->(0,1)->(1,1)
	// A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
	// a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
	// c = (3-sqrt(3))/6
	const x1 = x0 - i1 + G2 // Offsets for middle corner in (x,y) unskewed coords
	const y1 = y0 - j1 + G2
	const x2 = x0 - 1.0 + 2.0 * G2 // Offsets for last corner in (x,y) unskewed coords
	const y2 = y0 - 1.0 + 2.0 * G2
	// Work out the hashed gradient indices of the three simplex corners
	const ii = i & 255
	const jj = j & 255
	// Calculate the contribution from the three corners
	let t0 = 0.5 - x0 * x0 - y0 * y0
	if (t0 >= 0) {
		const gi0 = permMod12[ii + perm[jj]] * 3
		t0 *= t0
		n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0) // (x,y) of grad3 used for 2D gradient
	}
	let t1 = 0.5 - x1 * x1 - y1 * y1
	if (t1 >= 0) {
		const gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3
		t1 *= t1
		n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1)
	}
	let t2 = 0.5 - x2 * x2 - y2 * y2
	if (t2 >= 0) {
		const gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3
		t2 *= t2
		n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2)
	}
	// Add contributions from each corner to get the final noise value.
	// The result is scaled to return values in the interval [-1,1].
	return 70.0 * (n0 + n1 + n2)
}

// 3D simplex noise
export function noise3d(xin: number, yin: number, zin: number) {
	let n0, n1, n2, n3 // Noise contributions from the four corners
	// Skew the input space to determine which simplex cell we're in
	const s = (xin + yin + zin) * F3 // Very nice and simple skew factor for 3D
	const i = Math.floor(xin + s)
	const j = Math.floor(yin + s)
	const k = Math.floor(zin + s)
	const t = (i + j + k) * G3
	const X0 = i - t // Unskew the cell origin back to (x,y,z) space
	const Y0 = j - t
	const Z0 = k - t
	const x0 = xin - X0 // The x,y,z distances from the cell origin
	const y0 = yin - Y0
	const z0 = zin - Z0
	// For the 3D case, the simplex shape is a slightly irregular tetrahedron.
	// Determine which simplex we are in.
	let i1, j1, k1 // Offsets for second corner of simplex in (i,j,k) coords
	let i2, j2, k2 // Offsets for third corner of simplex in (i,j,k) coords
	if (x0 >= y0) {
		if (y0 >= z0) {
			i1 = 1
			j1 = 0
			k1 = 0
			i2 = 1
			j2 = 1
			k2 = 0
		} // X Y Z order
		else if (x0 >= z0) {
			i1 = 1
			j1 = 0
			k1 = 0
			i2 = 1
			j2 = 0
			k2 = 1
		} // X Z Y order
		else {
			i1 = 0
			j1 = 0
			k1 = 1
			i2 = 1
			j2 = 0
			k2 = 1
		} // Z X Y order
	} else {
		// x0<y0
		if (y0 < z0) {
			i1 = 0
			j1 = 0
			k1 = 1
			i2 = 0
			j2 = 1
			k2 = 1
		} // Z Y X order
		else if (x0 < z0) {
			i1 = 0
			j1 = 1
			k1 = 0
			i2 = 0
			j2 = 1
			k2 = 1
		} // Y Z X order
		else {
			i1 = 0
			j1 = 1
			k1 = 0
			i2 = 1
			j2 = 1
			k2 = 0
		} // Y X Z order
	}
	// A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
	// a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
	// a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
	// c = 1/6.
	const x1 = x0 - i1 + G3 // Offsets for second corner in (x,y,z) coords
	const y1 = y0 - j1 + G3
	const z1 = z0 - k1 + G3
	const x2 = x0 - i2 + 2.0 * G3 // Offsets for third corner in (x,y,z) coords
	const y2 = y0 - j2 + 2.0 * G3
	const z2 = z0 - k2 + 2.0 * G3
	const x3 = x0 - 1.0 + 3.0 * G3 // Offsets for last corner in (x,y,z) coords
	const y3 = y0 - 1.0 + 3.0 * G3
	const z3 = z0 - 1.0 + 3.0 * G3
	// Work out the hashed gradient indices of the four simplex corners
	const ii = i & 255
	const jj = j & 255
	const kk = k & 255
	// Calculate the contribution from the four corners
	let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0
	if (t0 < 0) n0 = 0.0
	else {
		const gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3
		t0 *= t0
		n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0)
	}
	let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1
	if (t1 < 0) n1 = 0.0
	else {
		const gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3
		t1 *= t1
		n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1)
	}
	let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2
	if (t2 < 0) n2 = 0.0
	else {
		const gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3
		t2 *= t2
		n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2)
	}
	let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3
	if (t3 < 0) n3 = 0.0
	else {
		const gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3
		t3 *= t3
		n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3)
	}
	// Add contributions from each corner to get the final noise value.
	// The result is scaled to stay just inside [-1,1]
	return 32.0 * (n0 + n1 + n2 + n3)
}

// 4D simplex noise, better simplex rank ordering method 2012-03-09
export function noise4d(x: number, y: number, z: number, w: number) {
	let n0, n1, n2, n3, n4 // Noise contributions from the five corners
	// Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
	const s = (x + y + z + w) * F4 // Factor for 4D skewing
	const i = Math.floor(x + s)
	const j = Math.floor(y + s)
	const k = Math.floor(z + s)
	const l = Math.floor(w + s)
	const t = (i + j + k + l) * G4 // Factor for 4D unskewing
	const X0 = i - t // Unskew the cell origin back to (x,y,z,w) space
	const Y0 = j - t
	const Z0 = k - t
	const W0 = l - t
	const x0 = x - X0 // The x,y,z,w distances from the cell origin
	const y0 = y - Y0
	const z0 = z - Z0
	const w0 = w - W0
	// For the 4D case, the simplex is a 4D shape I won't even try to describe.
	// To find out which of the 24 possible simplices we're in, we need to
	// determine the magnitude ordering of x0, y0, z0 and w0.
	// Six pair-wise comparisons are performed between each possible pair
	// of the four coordinates, and the results are used to rank the numbers.
	let rankx = 0
	let ranky = 0
	let rankz = 0
	let rankw = 0
	if (x0 > y0) rankx++
	else ranky++
	if (x0 > z0) rankx++
	else rankz++
	if (x0 > w0) rankx++
	else rankw++
	if (y0 > z0) ranky++
	else rankz++
	if (y0 > w0) ranky++
	else rankw++
	if (z0 > w0) rankz++
	else rankw++
	let i1, j1, k1, l1 // The integer offsets for the second simplex corner
	let i2, j2, k2, l2 // The integer offsets for the third simplex corner
	let i3, j3, k3, l3 // The integer offsets for the fourth simplex corner
	// simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
	// Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
	// impossible. Only the 24 indices which have non-zero entries make any sense.
	// We use a thresholding to set the coordinates in turn from the largest magnitude.
	// Rank 3 denotes the largest coordinate.
	i1 = rankx >= 3 ? 1 : 0
	j1 = ranky >= 3 ? 1 : 0
	k1 = rankz >= 3 ? 1 : 0
	l1 = rankw >= 3 ? 1 : 0
	// Rank 2 denotes the second largest coordinate.
	i2 = rankx >= 2 ? 1 : 0
	j2 = ranky >= 2 ? 1 : 0
	k2 = rankz >= 2 ? 1 : 0
	l2 = rankw >= 2 ? 1 : 0
	// Rank 1 denotes the second smallest coordinate.
	i3 = rankx >= 1 ? 1 : 0
	j3 = ranky >= 1 ? 1 : 0
	k3 = rankz >= 1 ? 1 : 0
	l3 = rankw >= 1 ? 1 : 0
	// The fifth corner has all coordinate offsets = 1, so no need to compute that.
	const x1 = x0 - i1 + G4 // Offsets for second corner in (x,y,z,w) coords
	const y1 = y0 - j1 + G4
	const z1 = z0 - k1 + G4
	const w1 = w0 - l1 + G4
	const x2 = x0 - i2 + 2.0 * G4 // Offsets for third corner in (x,y,z,w) coords
	const y2 = y0 - j2 + 2.0 * G4
	const z2 = z0 - k2 + 2.0 * G4
	const w2 = w0 - l2 + 2.0 * G4
	const x3 = x0 - i3 + 3.0 * G4 // Offsets for fourth corner in (x,y,z,w) coords
	const y3 = y0 - j3 + 3.0 * G4
	const z3 = z0 - k3 + 3.0 * G4
	const w3 = w0 - l3 + 3.0 * G4
	const x4 = x0 - 1.0 + 4.0 * G4 // Offsets for last corner in (x,y,z,w) coords
	const y4 = y0 - 1.0 + 4.0 * G4
	const z4 = z0 - 1.0 + 4.0 * G4
	const w4 = w0 - 1.0 + 4.0 * G4
	// Work out the hashed gradient indices of the five simplex corners
	const ii = i & 255
	const jj = j & 255
	const kk = k & 255
	const ll = l & 255
	// Calculate the contribution from the five corners
	let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0
	if (t0 < 0) n0 = 0.0
	else {
		const gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4
		t0 *= t0
		n0 =
			t0 *
			t0 *
			(grad4[gi0] * x0 +
				grad4[gi0 + 1] * y0 +
				grad4[gi0 + 2] * z0 +
				grad4[gi0 + 3] * w0)
	}
	let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1
	if (t1 < 0) n1 = 0.0
	else {
		const gi1 =
			(perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4
		t1 *= t1
		n1 =
			t1 *
			t1 *
			(grad4[gi1] * x1 +
				grad4[gi1 + 1] * y1 +
				grad4[gi1 + 2] * z1 +
				grad4[gi1 + 3] * w1)
	}
	let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2
	if (t2 < 0) n2 = 0.0
	else {
		const gi2 =
			(perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4
		t2 *= t2
		n2 =
			t2 *
			t2 *
			(grad4[gi2] * x2 +
				grad4[gi2 + 1] * y2 +
				grad4[gi2 + 2] * z2 +
				grad4[gi2 + 3] * w2)
	}
	let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3
	if (t3 < 0) n3 = 0.0
	else {
		const gi3 =
			(perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4
		t3 *= t3
		n3 =
			t3 *
			t3 *
			(grad4[gi3] * x3 +
				grad4[gi3 + 1] * y3 +
				grad4[gi3 + 2] * z3 +
				grad4[gi3 + 3] * w3)
	}
	let t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4
	if (t4 < 0) n4 = 0.0
	else {
		const gi4 =
			(perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4
		t4 *= t4
		n4 =
			t4 *
			t4 *
			(grad4[gi4] * x4 +
				grad4[gi4 + 1] * y4 +
				grad4[gi4 + 2] * z4 +
				grad4[gi4 + 3] * w4)
	}
	// Sum up and scale the result to cover the range [-1,1]
	return 27.0 * (n0 + n1 + n2 + n3 + n4)
}

export function tileNoise(
	width: number,
	height: number,
	dx: number,
	dy: number,
): number[] {
	const noise: number[] = []
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const s = x / width,
				t = y / height,
				nx = (Math.cos(s * 2 * Math.PI) * dx) / (2 * Math.PI),
				ny = (Math.cos(t * 2 * Math.PI) * dy) / (2 * Math.PI),
				nz = (Math.sin(s * 2 * Math.PI) * dx) / (2 * Math.PI),
				nw = (Math.sin(t * 2 * Math.PI) * dy) / (2 * Math.PI)
			noise.push(noise4d(nx, ny, nz, nw))
		}
	}
	return noise
}
