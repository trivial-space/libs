!function(t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.tvsLibs = r() : t.tvsLibs = r();
}(this, function() {
    return function(t) {
        function r(a) {
            if (e[a]) return e[a].exports;
            var n = e[a] = {
                exports: {},
                id: a,
                loaded: !1
            };
            return t[a].call(n.exports, n, n.exports, r), n.loaded = !0, n.exports;
        }
        var e = {};
        return r.m = t, r.c = e, r.p = "", r(0);
    }([ function(t, r, e) {
        "use strict";
        function a(t) {
            if (t && t.__esModule) return t;
            var r = {};
            if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
            return r["default"] = t, r;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.flow = r.graphics = r.utils = r.events = r.vr = r.math = void 0;
        var n = e(1), o = a(n), u = e(2), i = a(u), l = e(4), s = a(l), f = e(3), c = a(f), M = e(5), h = a(M), d = e(17), v = a(d), m = e(18), S = a(m), I = e(19), x = a(I), F = e(20), D = a(F), b = e(22), p = a(b), E = e(23), g = a(E), w = e(24), T = a(w), A = e(25), R = a(A), P = e(26), _ = a(P), y = e(27), O = a(y), L = e(28), z = a(L), N = e(29), U = a(N), C = e(30), Y = a(C), q = e(31), B = a(q), j = r.math = {
            core: o,
            noise: s,
            coords: i,
            vectors: c,
            linAlg: h,
            geometry: v
        }, G = r.vr = {
            camera: S,
            flowCamera: x,
            flowUtils: D
        }, X = r.events = {
            dom: p,
            mouse: T,
            keyboard: g
        }, k = r.utils = {
            animation: _,
            string: R,
            seq: O
        }, H = r.graphics = {
            colors: z,
            pixels: Y,
            textures: U
        }, V = r.flow = {
            tree: B
        };
        r["default"] = {
            math: j,
            vr: G,
            events: X,
            utils: k,
            graphics: H,
            flow: V
        };
    }, function(t, r) {
        "use strict";
        function e(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function a(t, r, e) {
            return t + e * (r - t);
        }
        function n(t, r, e) {
            return Math.max(r, Math.min(t, e));
        }
        function o(t) {
            return Math.floor(Math.random() * t);
        }
        function u(t, r) {
            return o(r - t) + t;
        }
        function i() {
            return (Math.random() + Math.random() + Math.random()) / 3;
        }
        function l(t) {
            return t * s;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.sign = e, r.lerp = a, r.clamp = n, r.randInt = o, r.randIntInRange = u, r.normalRand = i, 
        r.degToRad = l;
        var s = r.DEG_TO_RAD_FACTOR = Math.PI / 180;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            return [ (0, o.length)(t), Math.atan2(t[1], t[0]) ];
        }
        function n(t) {
            var r = t[0], e = t[1];
            return [ r * Math.cos(e), r * Math.sin(e) ];
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.cartesianToPolar2D = a, r.polarToCartesian2D = n;
        var o = e(3);
    }, function(t, r) {
        "use strict";
        function e(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] + r[a];
            return e;
        }
        function a(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] + r;
            return e;
        }
        function n(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] - r[a];
            return e;
        }
        function o(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] - r;
            return e;
        }
        function u(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] * r;
            return e;
        }
        function i(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] / r;
            return e;
        }
        function l(t) {
            for (var r = 0, e = 0; e < t.length; e++) {
                var a = t[e];
                r += a * a;
            }
            return Math.sqrt(r);
        }
        function s(t) {
            return i(t, l(t));
        }
        function f(t, r) {
            return r < l(t) ? u(s(t), r) : t;
        }
        function c(t, r) {
            if (t.length != r.length) return !1;
            for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
            return !0;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.add = e, r.addScalar = a, r.sub = n, r.subScalar = o, r.mul = u, r.div = i, 
        r.length = l, r.normalize = s, r.limit = f, r.isEqual = c;
    }, function(t, r) {
        "use strict";
        function e(t) {
            return t * t * t * (t * (6 * t - 15) + 10);
        }
        function a(t, r, e) {
            return r + t * (e - r);
        }
        function n(t, r) {
            return 0 === (1 & t) ? r : -r;
        }
        function o(t) {
            var r, o, u;
            return o = ~~t, r = 255 & o, t -= o, u = e(t), a(u, n(M[r], t), n(M[r + 1], t - 1));
        }
        function u(t, r) {
            var e, a, n = 0, o = 0, u = 0, i = (t + r) * h, l = Math.floor(t + i), s = Math.floor(r + i), f = (l + s) * d, c = l - f, M = s - f, v = t - c, m = r - M;
            v > m ? (e = 1, a = 0) : (e = 0, a = 1);
            var S = v - e + d, I = m - a + d, x = v - 1 + 2 * d, p = m - 1 + 2 * d, E = 255 & l, g = 255 & s, w = .5 - v * v - m * m;
            if (w >= 0) {
                var T = 3 * D[E + F[g]];
                w *= w, n = w * w * (b[T] * v + b[T + 1] * m);
            }
            var A = .5 - S * S - I * I;
            if (A >= 0) {
                var R = 3 * D[E + e + F[g + a]];
                A *= A, o = A * A * (b[R] * S + b[R + 1] * I);
            }
            var P = .5 - x * x - p * p;
            if (P >= 0) {
                var _ = 3 * D[E + 1 + F[g + 1]];
                P *= P, u = P * P * (b[_] * x + b[_ + 1] * p);
            }
            return 70 * (n + o + u);
        }
        function i(t, r, e) {
            var a, n, o, u, i, l, s, f, c, M, h = (t + r + e) * v, d = Math.floor(t + h), S = Math.floor(r + h), I = Math.floor(e + h), x = (d + S + I) * m, p = d - x, E = S - x, g = I - x, w = t - p, T = r - E, A = e - g;
            w >= T ? T >= A ? (i = 1, l = 0, s = 0, f = 1, c = 1, M = 0) : w >= A ? (i = 1, 
            l = 0, s = 0, f = 1, c = 0, M = 1) : (i = 0, l = 0, s = 1, f = 1, c = 0, M = 1) : T < A ? (i = 0, 
            l = 0, s = 1, f = 0, c = 1, M = 1) : w < A ? (i = 0, l = 1, s = 0, f = 0, c = 1, 
            M = 1) : (i = 0, l = 1, s = 0, f = 1, c = 1, M = 0);
            var R = w - i + m, P = T - l + m, _ = A - s + m, y = w - f + 2 * m, O = T - c + 2 * m, L = A - M + 2 * m, z = w - 1 + 3 * m, N = T - 1 + 3 * m, U = A - 1 + 3 * m, C = 255 & d, Y = 255 & S, q = 255 & I, B = .6 - w * w - T * T - A * A;
            if (B < 0) a = 0; else {
                var j = 3 * D[C + F[Y + F[q]]];
                B *= B, a = B * B * (b[j] * w + b[j + 1] * T + b[j + 2] * A);
            }
            var G = .6 - R * R - P * P - _ * _;
            if (G < 0) n = 0; else {
                var X = 3 * D[C + i + F[Y + l + F[q + s]]];
                G *= G, n = G * G * (b[X] * R + b[X + 1] * P + b[X + 2] * _);
            }
            var k = .6 - y * y - O * O - L * L;
            if (k < 0) o = 0; else {
                var H = 3 * D[C + f + F[Y + c + F[q + M]]];
                k *= k, o = k * k * (b[H] * y + b[H + 1] * O + b[H + 2] * L);
            }
            var V = .6 - z * z - N * N - U * U;
            if (V < 0) u = 0; else {
                var K = 3 * D[C + 1 + F[Y + 1 + F[q + 1]]];
                V *= V, u = V * V * (b[K] * z + b[K + 1] * N + b[K + 2] * U);
            }
            return 32 * (a + n + o + u);
        }
        function l(t, r, e, a) {
            var n, o, u, i, l, s = (t + r + e + a) * S, f = Math.floor(t + s), c = Math.floor(r + s), M = Math.floor(e + s), h = Math.floor(a + s), d = (f + c + M + h) * I, v = f - d, m = c - d, x = M - d, D = h - d, b = t - v, E = r - m, g = e - x, w = a - D, T = 0, A = 0, R = 0, P = 0;
            b > E ? T++ : A++, b > g ? T++ : R++, b > w ? T++ : P++, E > g ? A++ : R++, E > w ? A++ : P++, 
            g > w ? R++ : P++;
            var _, y, O, L, z, N, U, C, Y, q, B, j;
            _ = T >= 3 ? 1 : 0, y = A >= 3 ? 1 : 0, O = R >= 3 ? 1 : 0, L = P >= 3 ? 1 : 0, 
            z = T >= 2 ? 1 : 0, N = A >= 2 ? 1 : 0, U = R >= 2 ? 1 : 0, C = P >= 2 ? 1 : 0, 
            Y = T >= 1 ? 1 : 0, q = A >= 1 ? 1 : 0, B = R >= 1 ? 1 : 0, j = P >= 1 ? 1 : 0;
            var G = b - _ + I, X = E - y + I, k = g - O + I, H = w - L + I, V = b - z + 2 * I, K = E - N + 2 * I, W = g - U + 2 * I, Q = w - C + 2 * I, Z = b - Y + 3 * I, J = E - q + 3 * I, $ = g - B + 3 * I, tt = w - j + 3 * I, rt = b - 1 + 4 * I, et = E - 1 + 4 * I, at = g - 1 + 4 * I, nt = w - 1 + 4 * I, ot = 255 & f, ut = 255 & c, it = 255 & M, lt = 255 & h, st = .6 - b * b - E * E - g * g - w * w;
            if (st < 0) n = 0; else {
                var ft = F[ot + F[ut + F[it + F[lt]]]] % 32 * 4;
                st *= st, n = st * st * (p[ft] * b + p[ft + 1] * E + p[ft + 2] * g + p[ft + 3] * w);
            }
            var ct = .6 - G * G - X * X - k * k - H * H;
            if (ct < 0) o = 0; else {
                var Mt = F[ot + _ + F[ut + y + F[it + O + F[lt + L]]]] % 32 * 4;
                ct *= ct, o = ct * ct * (p[Mt] * G + p[Mt + 1] * X + p[Mt + 2] * k + p[Mt + 3] * H);
            }
            var ht = .6 - V * V - K * K - W * W - Q * Q;
            if (ht < 0) u = 0; else {
                var dt = F[ot + z + F[ut + N + F[it + U + F[lt + C]]]] % 32 * 4;
                ht *= ht, u = ht * ht * (p[dt] * V + p[dt + 1] * K + p[dt + 2] * W + p[dt + 3] * Q);
            }
            var vt = .6 - Z * Z - J * J - $ * $ - tt * tt;
            if (vt < 0) i = 0; else {
                var mt = F[ot + Y + F[ut + q + F[it + B + F[lt + j]]]] % 32 * 4;
                vt *= vt, i = vt * vt * (p[mt] * Z + p[mt + 1] * J + p[mt + 2] * $ + p[mt + 3] * tt);
            }
            var St = .6 - rt * rt - et * et - at * at - nt * nt;
            if (St < 0) l = 0; else {
                var It = F[ot + 1 + F[ut + 1 + F[it + 1 + F[lt + 1]]]] % 32 * 4;
                St *= St, l = St * St * (p[It] * rt + p[It + 1] * et + p[It + 2] * at + p[It + 3] * nt);
            }
            return 27 * (n + o + u + i + l);
        }
        function s(t, r, e, a) {
            for (var n = [], o = 0; o < r; o++) for (var u = 0; u < t; u++) {
                var i = u / t, s = o / r, f = Math.cos(2 * i * Math.PI) * e / (2 * Math.PI), c = Math.cos(2 * s * Math.PI) * a / (2 * Math.PI), M = Math.sin(2 * i * Math.PI) * e / (2 * Math.PI), h = Math.sin(2 * s * Math.PI) * a / (2 * Math.PI);
                n.push(l(f, c, M, h));
            }
            return n;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.noise1d = o, r.noise2d = u, r.noise3d = i, r.noise4d = l, r.tileNoise = s;
        var f, c, M = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (f = c = 0; c <= 256; f = ++c) M[256 + f] = M[f];
        var h = .5 * (Math.sqrt(3) - 1), d = (3 - Math.sqrt(3)) / 6, v = 1 / 3, m = 1 / 6, S = (Math.sqrt(5) - 1) / 4, I = (5 - Math.sqrt(5)) / 20, x = new Uint8Array(256), F = new Uint8Array(512), D = new Uint8Array(512);
        for (f = 0; f < 256; f++) x[f] = 256 * Math.random();
        for (f = 0; f < 512; f++) F[f] = x[255 & f], D[f] = F[f] % 12;
        var b = new Float32Array([ 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1 ]), p = new Float32Array([ 0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0 ]);
    }, function(t, r, e) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e(6);
        Object.keys(a).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
                enumerable: !0,
                get: function() {
                    return a[t];
                }
            });
        });
        var n = e(16);
        Object.keys(n).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
                enumerable: !0,
                get: function() {
                    return n[t];
                }
            });
        });
    }, function(t, r, e) {
        r.glMatrix = e(7), r.mat2 = e(8), r.mat2d = e(9), r.mat3 = e(10), r.mat4 = e(11), 
        r.quat = e(12), r.vec2 = e(15), r.vec3 = e(13), r.vec4 = e(14);
    }, function(t, r) {
        var e = {};
        e.EPSILON = 1e-6, e.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, 
        e.RANDOM = Math.random, e.ENABLE_SIMD = !1, e.SIMD_AVAILABLE = e.ARRAY_TYPE === Float32Array && "SIMD" in this, 
        e.USE_SIMD = e.ENABLE_SIMD && e.SIMD_AVAILABLE, e.setMatrixArrayType = function(t) {
            e.ARRAY_TYPE = t;
        };
        var a = Math.PI / 180;
        e.toRadian = function(t) {
            return t * a;
        }, e.equals = function(t, r) {
            return Math.abs(t - r) <= e.EPSILON * Math.max(1, Math.abs(t), Math.abs(r));
        }, t.exports = e;
    }, function(t, r, e) {
        var a = e(7), n = {};
        n.create = function() {
            var t = new a.ARRAY_TYPE(4);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, n.clone = function(t) {
            var r = new a.ARRAY_TYPE(4);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
        }, n.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t;
        }, n.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, n.fromValues = function(t, r, e, n) {
            var o = new a.ARRAY_TYPE(4);
            return o[0] = t, o[1] = r, o[2] = e, o[3] = n, o;
        }, n.set = function(t, r, e, a, n) {
            return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t;
        }, n.transpose = function(t, r) {
            if (t === r) {
                var e = r[1];
                t[1] = r[2], t[2] = e;
            } else t[0] = r[0], t[1] = r[2], t[2] = r[1], t[3] = r[3];
            return t;
        }, n.invert = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = e * o - n * a;
            return u ? (u = 1 / u, t[0] = o * u, t[1] = -a * u, t[2] = -n * u, t[3] = e * u, 
            t) : null;
        }, n.adjoint = function(t, r) {
            var e = r[0];
            return t[0] = r[3], t[1] = -r[1], t[2] = -r[2], t[3] = e, t;
        }, n.determinant = function(t) {
            return t[0] * t[3] - t[2] * t[1];
        }, n.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = e[0], l = e[1], s = e[2], f = e[3];
            return t[0] = a * i + o * l, t[1] = n * i + u * l, t[2] = a * s + o * f, t[3] = n * s + u * f, 
            t;
        }, n.mul = n.multiply, n.rotate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = Math.sin(e), l = Math.cos(e);
            return t[0] = a * l + o * i, t[1] = n * l + u * i, t[2] = a * -i + o * l, t[3] = n * -i + u * l, 
            t;
        }, n.scale = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = e[0], l = e[1];
            return t[0] = a * i, t[1] = n * i, t[2] = o * l, t[3] = u * l, t;
        }, n.fromRotation = function(t, r) {
            var e = Math.sin(r), a = Math.cos(r);
            return t[0] = a, t[1] = e, t[2] = -e, t[3] = a, t;
        }, n.fromScaling = function(t, r) {
            return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = r[1], t;
        }, n.str = function(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, n.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
        }, n.LDU = function(t, r, e, a) {
            return t[2] = a[2] / a[0], e[0] = a[0], e[1] = a[1], e[3] = a[3] - t[2] * e[1], 
            [ t, r, e ];
        }, n.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t;
        }, n.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t;
        }, n.sub = n.subtract, n.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3];
        }, n.equals = function(t, r) {
            var e = t[0], n = t[1], o = t[2], u = t[3], i = r[0], l = r[1], s = r[2], f = r[3];
            return Math.abs(e - i) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(n - l) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(o - s) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - f) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(f));
        }, n.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t;
        }, n.multiplyScalarAndAdd = function(t, r, e, a) {
            return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t[2] = r[2] + e[2] * a, t[3] = r[3] + e[3] * a, 
            t;
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(7), n = {};
        n.create = function() {
            var t = new a.ARRAY_TYPE(6);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, n.clone = function(t) {
            var r = new a.ARRAY_TYPE(6);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], 
            r;
        }, n.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t;
        }, n.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, n.fromValues = function(t, r, e, n, o, u) {
            var i = new a.ARRAY_TYPE(6);
            return i[0] = t, i[1] = r, i[2] = e, i[3] = n, i[4] = o, i[5] = u, i;
        }, n.set = function(t, r, e, a, n, o, u) {
            return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t[4] = o, t[5] = u, t;
        }, n.invert = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], l = e * o - a * n;
            return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = e * l, 
            t[4] = (n * i - o * u) * l, t[5] = (a * u - e * i) * l, t) : null;
        }, n.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, n.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = e[0], f = e[1], c = e[2], M = e[3], h = e[4], d = e[5];
            return t[0] = a * s + o * f, t[1] = n * s + u * f, t[2] = a * c + o * M, t[3] = n * c + u * M, 
            t[4] = a * h + o * d + i, t[5] = n * h + u * d + l, t;
        }, n.mul = n.multiply, n.rotate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = Math.sin(e), f = Math.cos(e);
            return t[0] = a * f + o * s, t[1] = n * f + u * s, t[2] = a * -s + o * f, t[3] = n * -s + u * f, 
            t[4] = i, t[5] = l, t;
        }, n.scale = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = e[0], f = e[1];
            return t[0] = a * s, t[1] = n * s, t[2] = o * f, t[3] = u * f, t[4] = i, t[5] = l, 
            t;
        }, n.translate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = e[0], f = e[1];
            return t[0] = a, t[1] = n, t[2] = o, t[3] = u, t[4] = a * s + o * f + i, t[5] = n * s + u * f + l, 
            t;
        }, n.fromRotation = function(t, r) {
            var e = Math.sin(r), a = Math.cos(r);
            return t[0] = a, t[1] = e, t[2] = -e, t[3] = a, t[4] = 0, t[5] = 0, t;
        }, n.fromScaling = function(t, r) {
            return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = r[1], t[4] = 0, t[5] = 0, t;
        }, n.fromTranslation = function(t, r) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = r[0], t[5] = r[1], t;
        }, n.str = function(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
        }, n.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
        }, n.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t[4] = r[4] + e[4], t[5] = r[5] + e[5], t;
        }, n.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t[4] = r[4] - e[4], t[5] = r[5] - e[5], t;
        }, n.sub = n.subtract, n.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, 
            t[5] = r[5] * e, t;
        }, n.multiplyScalarAndAdd = function(t, r, e, a) {
            return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t[2] = r[2] + e[2] * a, t[3] = r[3] + e[3] * a, 
            t[4] = r[4] + e[4] * a, t[5] = r[5] + e[5] * a, t;
        }, n.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5];
        }, n.equals = function(t, r) {
            var e = t[0], n = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = r[0], f = r[1], c = r[2], M = r[3], h = r[4], d = r[5];
            return Math.abs(e - s) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) && Math.abs(n - f) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(o - c) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(u - M) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(i - h) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(l - d) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(d));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(7), n = {};
        n.create = function() {
            var t = new a.ARRAY_TYPE(9);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, n.fromMat4 = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[4], t[4] = r[5], t[5] = r[6], 
            t[6] = r[8], t[7] = r[9], t[8] = r[10], t;
        }, n.clone = function(t) {
            var r = new a.ARRAY_TYPE(9);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], 
            r[6] = t[6], r[7] = t[7], r[8] = t[8], r;
        }, n.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t[6] = r[6], t[7] = r[7], t[8] = r[8], t;
        }, n.fromValues = function(t, r, e, n, o, u, i, l, s) {
            var f = new a.ARRAY_TYPE(9);
            return f[0] = t, f[1] = r, f[2] = e, f[3] = n, f[4] = o, f[5] = u, f[6] = i, f[7] = l, 
            f[8] = s, f;
        }, n.set = function(t, r, e, a, n, o, u, i, l, s) {
            return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t[4] = o, t[5] = u, t[6] = i, t[7] = l, 
            t[8] = s, t;
        }, n.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, n.transpose = function(t, r) {
            if (t === r) {
                var e = r[1], a = r[2], n = r[5];
                t[1] = r[3], t[2] = r[6], t[3] = e, t[5] = r[7], t[6] = a, t[7] = n;
            } else t[0] = r[0], t[1] = r[3], t[2] = r[6], t[3] = r[1], t[4] = r[4], t[5] = r[7], 
            t[6] = r[2], t[7] = r[5], t[8] = r[8];
            return t;
        }, n.invert = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], l = r[6], s = r[7], f = r[8], c = f * u - i * s, M = -f * o + i * l, h = s * o - u * l, d = e * c + a * M + n * h;
            return d ? (d = 1 / d, t[0] = c * d, t[1] = (-f * a + n * s) * d, t[2] = (i * a - n * u) * d, 
            t[3] = M * d, t[4] = (f * e - n * l) * d, t[5] = (-i * e + n * o) * d, t[6] = h * d, 
            t[7] = (-s * e + a * l) * d, t[8] = (u * e - a * o) * d, t) : null;
        }, n.adjoint = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], l = r[6], s = r[7], f = r[8];
            return t[0] = u * f - i * s, t[1] = n * s - a * f, t[2] = a * i - n * u, t[3] = i * l - o * f, 
            t[4] = e * f - n * l, t[5] = n * o - e * i, t[6] = o * s - u * l, t[7] = a * l - e * s, 
            t[8] = e * u - a * o, t;
        }, n.determinant = function(t) {
            var r = t[0], e = t[1], a = t[2], n = t[3], o = t[4], u = t[5], i = t[6], l = t[7], s = t[8];
            return r * (s * o - u * l) + e * (-s * n + u * i) + a * (l * n - o * i);
        }, n.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = r[6], f = r[7], c = r[8], M = e[0], h = e[1], d = e[2], v = e[3], m = e[4], S = e[5], I = e[6], x = e[7], F = e[8];
            return t[0] = M * a + h * u + d * s, t[1] = M * n + h * i + d * f, t[2] = M * o + h * l + d * c, 
            t[3] = v * a + m * u + S * s, t[4] = v * n + m * i + S * f, t[5] = v * o + m * l + S * c, 
            t[6] = I * a + x * u + F * s, t[7] = I * n + x * i + F * f, t[8] = I * o + x * l + F * c, 
            t;
        }, n.mul = n.multiply, n.translate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = r[6], f = r[7], c = r[8], M = e[0], h = e[1];
            return t[0] = a, t[1] = n, t[2] = o, t[3] = u, t[4] = i, t[5] = l, t[6] = M * a + h * u + s, 
            t[7] = M * n + h * i + f, t[8] = M * o + h * l + c, t;
        }, n.rotate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = r[6], f = r[7], c = r[8], M = Math.sin(e), h = Math.cos(e);
            return t[0] = h * a + M * u, t[1] = h * n + M * i, t[2] = h * o + M * l, t[3] = h * u - M * a, 
            t[4] = h * i - M * n, t[5] = h * l - M * o, t[6] = s, t[7] = f, t[8] = c, t;
        }, n.scale = function(t, r, e) {
            var a = e[0], n = e[1];
            return t[0] = a * r[0], t[1] = a * r[1], t[2] = a * r[2], t[3] = n * r[3], t[4] = n * r[4], 
            t[5] = n * r[5], t[6] = r[6], t[7] = r[7], t[8] = r[8], t;
        }, n.fromTranslation = function(t, r) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = r[0], 
            t[7] = r[1], t[8] = 1, t;
        }, n.fromRotation = function(t, r) {
            var e = Math.sin(r), a = Math.cos(r);
            return t[0] = a, t[1] = e, t[2] = 0, t[3] = -e, t[4] = a, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, n.fromScaling = function(t, r) {
            return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = r[1], t[5] = 0, t[6] = 0, 
            t[7] = 0, t[8] = 1, t;
        }, n.fromMat2d = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = 0, t[3] = r[2], t[4] = r[3], t[5] = 0, t[6] = r[4], 
            t[7] = r[5], t[8] = 1, t;
        }, n.fromQuat = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = e + e, i = a + a, l = n + n, s = e * u, f = a * u, c = a * i, M = n * u, h = n * i, d = n * l, v = o * u, m = o * i, S = o * l;
            return t[0] = 1 - c - d, t[3] = f - S, t[6] = M + m, t[1] = f + S, t[4] = 1 - s - d, 
            t[7] = h - v, t[2] = M - m, t[5] = h + v, t[8] = 1 - s - c, t;
        }, n.normalFromMat4 = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], l = r[6], s = r[7], f = r[8], c = r[9], M = r[10], h = r[11], d = r[12], v = r[13], m = r[14], S = r[15], I = e * i - a * u, x = e * l - n * u, F = e * s - o * u, D = a * l - n * i, b = a * s - o * i, p = n * s - o * l, E = f * v - c * d, g = f * m - M * d, w = f * S - h * d, T = c * m - M * v, A = c * S - h * v, R = M * S - h * m, P = I * R - x * A + F * T + D * w - b * g + p * E;
            return P ? (P = 1 / P, t[0] = (i * R - l * A + s * T) * P, t[1] = (l * w - u * R - s * g) * P, 
            t[2] = (u * A - i * w + s * E) * P, t[3] = (n * A - a * R - o * T) * P, t[4] = (e * R - n * w + o * g) * P, 
            t[5] = (a * w - e * A - o * E) * P, t[6] = (v * p - m * b + S * D) * P, t[7] = (m * F - d * p - S * x) * P, 
            t[8] = (d * b - v * F + S * I) * P, t) : null;
        }, n.str = function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
        }, n.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
        }, n.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t[4] = r[4] + e[4], t[5] = r[5] + e[5], t[6] = r[6] + e[6], t[7] = r[7] + e[7], 
            t[8] = r[8] + e[8], t;
        }, n.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t[4] = r[4] - e[4], t[5] = r[5] - e[5], t[6] = r[6] - e[6], t[7] = r[7] - e[7], 
            t[8] = r[8] - e[8], t;
        }, n.sub = n.subtract, n.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, 
            t[5] = r[5] * e, t[6] = r[6] * e, t[7] = r[7] * e, t[8] = r[8] * e, t;
        }, n.multiplyScalarAndAdd = function(t, r, e, a) {
            return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t[2] = r[2] + e[2] * a, t[3] = r[3] + e[3] * a, 
            t[4] = r[4] + e[4] * a, t[5] = r[5] + e[5] * a, t[6] = r[6] + e[6] * a, t[7] = r[7] + e[7] * a, 
            t[8] = r[8] + e[8] * a, t;
        }, n.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5] && t[6] === r[6] && t[7] === r[7] && t[8] === r[8];
        }, n.equals = function(t, r) {
            var e = t[0], n = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = t[6], f = t[7], c = t[8], M = r[0], h = r[1], d = r[2], v = r[3], m = r[4], S = r[5], I = t[6], x = r[7], F = r[8];
            return Math.abs(e - M) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(n - h) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(o - d) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(u - v) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(i - m) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(l - S) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(s - I) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(I)) && Math.abs(f - x) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(x)) && Math.abs(c - F) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(F));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(7), n = {
            scalar: {},
            SIMD: {}
        };
        n.create = function() {
            var t = new a.ARRAY_TYPE(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, n.clone = function(t) {
            var r = new a.ARRAY_TYPE(16);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], 
            r[6] = t[6], r[7] = t[7], r[8] = t[8], r[9] = t[9], r[10] = t[10], r[11] = t[11], 
            r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15], r;
        }, n.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t[6] = r[6], t[7] = r[7], t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], 
            t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15], t;
        }, n.fromValues = function(t, r, e, n, o, u, i, l, s, f, c, M, h, d, v, m) {
            var S = new a.ARRAY_TYPE(16);
            return S[0] = t, S[1] = r, S[2] = e, S[3] = n, S[4] = o, S[5] = u, S[6] = i, S[7] = l, 
            S[8] = s, S[9] = f, S[10] = c, S[11] = M, S[12] = h, S[13] = d, S[14] = v, S[15] = m, 
            S;
        }, n.set = function(t, r, e, a, n, o, u, i, l, s, f, c, M, h, d, v, m) {
            return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t[4] = o, t[5] = u, t[6] = i, t[7] = l, 
            t[8] = s, t[9] = f, t[10] = c, t[11] = M, t[12] = h, t[13] = d, t[14] = v, t[15] = m, 
            t;
        }, n.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, n.scalar.transpose = function(t, r) {
            if (t === r) {
                var e = r[1], a = r[2], n = r[3], o = r[6], u = r[7], i = r[11];
                t[1] = r[4], t[2] = r[8], t[3] = r[12], t[4] = e, t[6] = r[9], t[7] = r[13], t[8] = a, 
                t[9] = o, t[11] = r[14], t[12] = n, t[13] = u, t[14] = i;
            } else t[0] = r[0], t[1] = r[4], t[2] = r[8], t[3] = r[12], t[4] = r[1], t[5] = r[5], 
            t[6] = r[9], t[7] = r[13], t[8] = r[2], t[9] = r[6], t[10] = r[10], t[11] = r[14], 
            t[12] = r[3], t[13] = r[7], t[14] = r[11], t[15] = r[15];
            return t;
        }, n.SIMD.transpose = function(t, r) {
            var e, a, n, o, u, i, l, s, f, c;
            return e = SIMD.Float32x4.load(r, 0), a = SIMD.Float32x4.load(r, 4), n = SIMD.Float32x4.load(r, 8), 
            o = SIMD.Float32x4.load(r, 12), u = SIMD.Float32x4.shuffle(e, a, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(n, o, 0, 1, 4, 5), 
            l = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, l), SIMD.Float32x4.store(t, 4, s), u = SIMD.Float32x4.shuffle(e, a, 2, 3, 6, 7), 
            i = SIMD.Float32x4.shuffle(n, o, 2, 3, 6, 7), f = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), 
            c = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, f), SIMD.Float32x4.store(t, 12, c), 
            t;
        }, n.transpose = a.USE_SIMD ? n.SIMD.transpose : n.scalar.transpose, n.scalar.invert = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], l = r[6], s = r[7], f = r[8], c = r[9], M = r[10], h = r[11], d = r[12], v = r[13], m = r[14], S = r[15], I = e * i - a * u, x = e * l - n * u, F = e * s - o * u, D = a * l - n * i, b = a * s - o * i, p = n * s - o * l, E = f * v - c * d, g = f * m - M * d, w = f * S - h * d, T = c * m - M * v, A = c * S - h * v, R = M * S - h * m, P = I * R - x * A + F * T + D * w - b * g + p * E;
            return P ? (P = 1 / P, t[0] = (i * R - l * A + s * T) * P, t[1] = (n * A - a * R - o * T) * P, 
            t[2] = (v * p - m * b + S * D) * P, t[3] = (M * b - c * p - h * D) * P, t[4] = (l * w - u * R - s * g) * P, 
            t[5] = (e * R - n * w + o * g) * P, t[6] = (m * F - d * p - S * x) * P, t[7] = (f * p - M * F + h * x) * P, 
            t[8] = (u * A - i * w + s * E) * P, t[9] = (a * w - e * A - o * E) * P, t[10] = (d * b - v * F + S * I) * P, 
            t[11] = (c * F - f * b - h * I) * P, t[12] = (i * g - u * T - l * E) * P, t[13] = (e * T - a * g + n * E) * P, 
            t[14] = (v * x - d * D - m * I) * P, t[15] = (f * D - c * x + M * I) * P, t) : null;
        }, n.SIMD.invert = function(t, r) {
            var e, a, n, o, u, i, l, s, f, c, M = SIMD.Float32x4.load(r, 0), h = SIMD.Float32x4.load(r, 4), d = SIMD.Float32x4.load(r, 8), v = SIMD.Float32x4.load(r, 12);
            return u = SIMD.Float32x4.shuffle(M, h, 0, 1, 4, 5), a = SIMD.Float32x4.shuffle(d, v, 0, 1, 4, 5), 
            e = SIMD.Float32x4.shuffle(u, a, 0, 2, 4, 6), a = SIMD.Float32x4.shuffle(a, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(M, h, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(d, v, 2, 3, 6, 7), 
            n = SIMD.Float32x4.shuffle(u, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(n, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.mul(a, u), 
            l = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, u), i), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(a, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), i), 
            f = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            n = SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), i), 
            s = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(n, u)), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(e, a), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), s), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), f), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), s), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(n, u)), 
            u = SIMD.Float32x4.mul(e, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(n, u)), 
            s = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            l = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), l), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(a, u)), 
            u = SIMD.Float32x4.mul(e, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), l), 
            f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(a, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, u)), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), f), 
            c = SIMD.Float32x4.mul(e, i), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c), 
            c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c), u = SIMD.Float32x4.reciprocalApproximation(c), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(u, u))), 
            (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, i)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, l)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, s)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, f)), t) : null;
        }, n.invert = a.USE_SIMD ? n.SIMD.invert : n.scalar.invert, n.scalar.adjoint = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], l = r[6], s = r[7], f = r[8], c = r[9], M = r[10], h = r[11], d = r[12], v = r[13], m = r[14], S = r[15];
            return t[0] = i * (M * S - h * m) - c * (l * S - s * m) + v * (l * h - s * M), t[1] = -(a * (M * S - h * m) - c * (n * S - o * m) + v * (n * h - o * M)), 
            t[2] = a * (l * S - s * m) - i * (n * S - o * m) + v * (n * s - o * l), t[3] = -(a * (l * h - s * M) - i * (n * h - o * M) + c * (n * s - o * l)), 
            t[4] = -(u * (M * S - h * m) - f * (l * S - s * m) + d * (l * h - s * M)), t[5] = e * (M * S - h * m) - f * (n * S - o * m) + d * (n * h - o * M), 
            t[6] = -(e * (l * S - s * m) - u * (n * S - o * m) + d * (n * s - o * l)), t[7] = e * (l * h - s * M) - u * (n * h - o * M) + f * (n * s - o * l), 
            t[8] = u * (c * S - h * v) - f * (i * S - s * v) + d * (i * h - s * c), t[9] = -(e * (c * S - h * v) - f * (a * S - o * v) + d * (a * h - o * c)), 
            t[10] = e * (i * S - s * v) - u * (a * S - o * v) + d * (a * s - o * i), t[11] = -(e * (i * h - s * c) - u * (a * h - o * c) + f * (a * s - o * i)), 
            t[12] = -(u * (c * m - M * v) - f * (i * m - l * v) + d * (i * M - l * c)), t[13] = e * (c * m - M * v) - f * (a * m - n * v) + d * (a * M - n * c), 
            t[14] = -(e * (i * m - l * v) - u * (a * m - n * v) + d * (a * l - n * i)), t[15] = e * (i * M - l * c) - u * (a * M - n * c) + f * (a * l - n * i), 
            t;
        }, n.SIMD.adjoint = function(t, r) {
            var e, a, n, o, u, i, l, s, f, c, M, h, d, e = SIMD.Float32x4.load(r, 0), a = SIMD.Float32x4.load(r, 4), n = SIMD.Float32x4.load(r, 8), o = SIMD.Float32x4.load(r, 12);
            return f = SIMD.Float32x4.shuffle(e, a, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(n, o, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(f, i, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(i, f, 1, 3, 5, 7), 
            f = SIMD.Float32x4.shuffle(e, a, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(n, o, 2, 3, 6, 7), 
            l = SIMD.Float32x4.shuffle(f, s, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(s, f, 1, 3, 5, 7), 
            f = SIMD.Float32x4.mul(l, s), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), c = SIMD.Float32x4.mul(i, f), 
            M = SIMD.Float32x4.mul(u, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, f), c), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, f), M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            f = SIMD.Float32x4.mul(i, l), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, f), c), 
            d = SIMD.Float32x4.mul(u, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(s, f)), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, f), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), 
            f = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), 
            l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, f), c), 
            h = SIMD.Float32x4.mul(u, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(l, f)), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, f), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), 
            f = SIMD.Float32x4.mul(u, i), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, f), h), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, f), d), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, f), h), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(l, f)), 
            f = SIMD.Float32x4.mul(u, s), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(l, f)), 
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, f), h), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), 
            M = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, f), M), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(i, f)), 
            f = SIMD.Float32x4.mul(u, l), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, f), M), 
            d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(i, f)), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), 
            M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(s, f)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, f), d), 
            SIMD.Float32x4.store(t, 0, c), SIMD.Float32x4.store(t, 4, M), SIMD.Float32x4.store(t, 8, h), 
            SIMD.Float32x4.store(t, 12, d), t;
        }, n.adjoint = a.USE_SIMD ? n.SIMD.adjoint : n.scalar.adjoint, n.determinant = function(t) {
            var r = t[0], e = t[1], a = t[2], n = t[3], o = t[4], u = t[5], i = t[6], l = t[7], s = t[8], f = t[9], c = t[10], M = t[11], h = t[12], d = t[13], v = t[14], m = t[15], S = r * u - e * o, I = r * i - a * o, x = r * l - n * o, F = e * i - a * u, D = e * l - n * u, b = a * l - n * i, p = s * d - f * h, E = s * v - c * h, g = s * m - M * h, w = f * v - c * d, T = f * m - M * d, A = c * m - M * v;
            return S * A - I * T + x * w + F * g - D * E + b * p;
        }, n.SIMD.multiply = function(t, r, e) {
            var a = SIMD.Float32x4.load(r, 0), n = SIMD.Float32x4.load(r, 4), o = SIMD.Float32x4.load(r, 8), u = SIMD.Float32x4.load(r, 12), i = SIMD.Float32x4.load(e, 0), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 0, 0, 0, 0), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, l);
            var s = SIMD.Float32x4.load(e, 4), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, f);
            var c = SIMD.Float32x4.load(e, 8), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, M);
            var h = SIMD.Float32x4.load(e, 12), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, d), t;
        }, n.scalar.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = r[6], f = r[7], c = r[8], M = r[9], h = r[10], d = r[11], v = r[12], m = r[13], S = r[14], I = r[15], x = e[0], F = e[1], D = e[2], b = e[3];
            return t[0] = x * a + F * i + D * c + b * v, t[1] = x * n + F * l + D * M + b * m, 
            t[2] = x * o + F * s + D * h + b * S, t[3] = x * u + F * f + D * d + b * I, x = e[4], 
            F = e[5], D = e[6], b = e[7], t[4] = x * a + F * i + D * c + b * v, t[5] = x * n + F * l + D * M + b * m, 
            t[6] = x * o + F * s + D * h + b * S, t[7] = x * u + F * f + D * d + b * I, x = e[8], 
            F = e[9], D = e[10], b = e[11], t[8] = x * a + F * i + D * c + b * v, t[9] = x * n + F * l + D * M + b * m, 
            t[10] = x * o + F * s + D * h + b * S, t[11] = x * u + F * f + D * d + b * I, x = e[12], 
            F = e[13], D = e[14], b = e[15], t[12] = x * a + F * i + D * c + b * v, t[13] = x * n + F * l + D * M + b * m, 
            t[14] = x * o + F * s + D * h + b * S, t[15] = x * u + F * f + D * d + b * I, t;
        }, n.multiply = a.USE_SIMD ? n.SIMD.multiply : n.scalar.multiply, n.mul = n.multiply, 
        n.scalar.translate = function(t, r, e) {
            var a, n, o, u, i, l, s, f, c, M, h, d, v = e[0], m = e[1], S = e[2];
            return r === t ? (t[12] = r[0] * v + r[4] * m + r[8] * S + r[12], t[13] = r[1] * v + r[5] * m + r[9] * S + r[13], 
            t[14] = r[2] * v + r[6] * m + r[10] * S + r[14], t[15] = r[3] * v + r[7] * m + r[11] * S + r[15]) : (a = r[0], 
            n = r[1], o = r[2], u = r[3], i = r[4], l = r[5], s = r[6], f = r[7], c = r[8], 
            M = r[9], h = r[10], d = r[11], t[0] = a, t[1] = n, t[2] = o, t[3] = u, t[4] = i, 
            t[5] = l, t[6] = s, t[7] = f, t[8] = c, t[9] = M, t[10] = h, t[11] = d, t[12] = a * v + i * m + c * S + r[12], 
            t[13] = n * v + l * m + M * S + r[13], t[14] = o * v + s * m + h * S + r[14], t[15] = u * v + f * m + d * S + r[15]), 
            t;
        }, n.SIMD.translate = function(t, r, e) {
            var a = SIMD.Float32x4.load(r, 0), n = SIMD.Float32x4.load(r, 4), o = SIMD.Float32x4.load(r, 8), u = SIMD.Float32x4.load(r, 12), i = SIMD.Float32x4(e[0], e[1], e[2], 0);
            r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t[6] = r[6], t[7] = r[7], t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11]), 
            a = SIMD.Float32x4.mul(a, SIMD.Float32x4.swizzle(i, 0, 0, 0, 0)), n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(i, 1, 1, 1, 1)), 
            o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(i, 2, 2, 2, 2));
            var l = SIMD.Float32x4.add(a, SIMD.Float32x4.add(n, SIMD.Float32x4.add(o, u)));
            return SIMD.Float32x4.store(t, 12, l), t;
        }, n.translate = a.USE_SIMD ? n.SIMD.translate : n.scalar.translate, n.scalar.scale = function(t, r, e) {
            var a = e[0], n = e[1], o = e[2];
            return t[0] = r[0] * a, t[1] = r[1] * a, t[2] = r[2] * a, t[3] = r[3] * a, t[4] = r[4] * n, 
            t[5] = r[5] * n, t[6] = r[6] * n, t[7] = r[7] * n, t[8] = r[8] * o, t[9] = r[9] * o, 
            t[10] = r[10] * o, t[11] = r[11] * o, t[12] = r[12], t[13] = r[13], t[14] = r[14], 
            t[15] = r[15], t;
        }, n.SIMD.scale = function(t, r, e) {
            var a, n, o, u = SIMD.Float32x4(e[0], e[1], e[2], 0);
            return a = SIMD.Float32x4.load(r, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(a, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0))), 
            n = SIMD.Float32x4.load(r, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1))), 
            o = SIMD.Float32x4.load(r, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2))), 
            t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15], t;
        }, n.scale = a.USE_SIMD ? n.SIMD.scale : n.scalar.scale, n.rotate = function(t, r, e, n) {
            var o, u, i, l, s, f, c, M, h, d, v, m, S, I, x, F, D, b, p, E, g, w, T, A, R = n[0], P = n[1], _ = n[2], y = Math.sqrt(R * R + P * P + _ * _);
            return Math.abs(y) < a.EPSILON ? null : (y = 1 / y, R *= y, P *= y, _ *= y, o = Math.sin(e), 
            u = Math.cos(e), i = 1 - u, l = r[0], s = r[1], f = r[2], c = r[3], M = r[4], h = r[5], 
            d = r[6], v = r[7], m = r[8], S = r[9], I = r[10], x = r[11], F = R * R * i + u, 
            D = P * R * i + _ * o, b = _ * R * i - P * o, p = R * P * i - _ * o, E = P * P * i + u, 
            g = _ * P * i + R * o, w = R * _ * i + P * o, T = P * _ * i - R * o, A = _ * _ * i + u, 
            t[0] = l * F + M * D + m * b, t[1] = s * F + h * D + S * b, t[2] = f * F + d * D + I * b, 
            t[3] = c * F + v * D + x * b, t[4] = l * p + M * E + m * g, t[5] = s * p + h * E + S * g, 
            t[6] = f * p + d * E + I * g, t[7] = c * p + v * E + x * g, t[8] = l * w + M * T + m * A, 
            t[9] = s * w + h * T + S * A, t[10] = f * w + d * T + I * A, t[11] = c * w + v * T + x * A, 
            r !== t && (t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15]), t);
        }, n.scalar.rotateX = function(t, r, e) {
            var a = Math.sin(e), n = Math.cos(e), o = r[4], u = r[5], i = r[6], l = r[7], s = r[8], f = r[9], c = r[10], M = r[11];
            return r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[4] = o * n + s * a, t[5] = u * n + f * a, 
            t[6] = i * n + c * a, t[7] = l * n + M * a, t[8] = s * n - o * a, t[9] = f * n - u * a, 
            t[10] = c * n - i * a, t[11] = M * n - l * a, t;
        }, n.SIMD.rotateX = function(t, r, e) {
            var a = SIMD.Float32x4.splat(Math.sin(e)), n = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], t[13] = r[13], 
            t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 4), u = SIMD.Float32x4.load(r, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, a))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, n), SIMD.Float32x4.mul(o, a))), 
            t;
        }, n.rotateX = a.USE_SIMD ? n.SIMD.rotateX : n.scalar.rotateX, n.scalar.rotateY = function(t, r, e) {
            var a = Math.sin(e), n = Math.cos(e), o = r[0], u = r[1], i = r[2], l = r[3], s = r[8], f = r[9], c = r[10], M = r[11];
            return r !== t && (t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * n - s * a, t[1] = u * n - f * a, 
            t[2] = i * n - c * a, t[3] = l * n - M * a, t[8] = o * a + s * n, t[9] = u * a + f * n, 
            t[10] = i * a + c * n, t[11] = l * a + M * n, t;
        }, n.SIMD.rotateY = function(t, r, e) {
            var a = SIMD.Float32x4.splat(Math.sin(e)), n = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[12] = r[12], t[13] = r[13], 
            t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 0), u = SIMD.Float32x4.load(r, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, a))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(u, n))), 
            t;
        }, n.rotateY = a.USE_SIMD ? n.SIMD.rotateY : n.scalar.rotateY, n.scalar.rotateZ = function(t, r, e) {
            var a = Math.sin(e), n = Math.cos(e), o = r[0], u = r[1], i = r[2], l = r[3], s = r[4], f = r[5], c = r[6], M = r[7];
            return r !== t && (t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * n + s * a, t[1] = u * n + f * a, 
            t[2] = i * n + c * a, t[3] = l * n + M * a, t[4] = s * n - o * a, t[5] = f * n - u * a, 
            t[6] = c * n - i * a, t[7] = M * n - l * a, t;
        }, n.SIMD.rotateZ = function(t, r, e) {
            var a = SIMD.Float32x4.splat(Math.sin(e)), n = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 0), u = SIMD.Float32x4.load(r, 4);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, a))), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, n), SIMD.Float32x4.mul(o, a))), 
            t;
        }, n.rotateZ = a.USE_SIMD ? n.SIMD.rotateZ : n.scalar.rotateZ, n.fromTranslation = function(t, r) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], 
            t[15] = 1, t;
        }, n.fromScaling = function(t, r) {
            return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r[1], t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = r[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, 
            t[15] = 1, t;
        }, n.fromRotation = function(t, r, e) {
            var n, o, u, i = e[0], l = e[1], s = e[2], f = Math.sqrt(i * i + l * l + s * s);
            return Math.abs(f) < a.EPSILON ? null : (f = 1 / f, i *= f, l *= f, s *= f, n = Math.sin(r), 
            o = Math.cos(r), u = 1 - o, t[0] = i * i * u + o, t[1] = l * i * u + s * n, t[2] = s * i * u - l * n, 
            t[3] = 0, t[4] = i * l * u - s * n, t[5] = l * l * u + o, t[6] = s * l * u + i * n, 
            t[7] = 0, t[8] = i * s * u + l * n, t[9] = l * s * u - i * n, t[10] = s * s * u + o, 
            t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
        }, n.fromXRotation = function(t, r) {
            var e = Math.sin(r), a = Math.cos(r);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a, t[6] = e, t[7] = 0, 
            t[8] = 0, t[9] = -e, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, n.fromYRotation = function(t, r) {
            var e = Math.sin(r), a = Math.cos(r);
            return t[0] = a, t[1] = 0, t[2] = -e, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = e, t[9] = 0, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, n.fromZRotation = function(t, r) {
            var e = Math.sin(r), a = Math.cos(r);
            return t[0] = a, t[1] = e, t[2] = 0, t[3] = 0, t[4] = -e, t[5] = a, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, n.fromRotationTranslation = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = a + a, l = n + n, s = o + o, f = a * i, c = a * l, M = a * s, h = n * l, d = n * s, v = o * s, m = u * i, S = u * l, I = u * s;
            return t[0] = 1 - (h + v), t[1] = c + I, t[2] = M - S, t[3] = 0, t[4] = c - I, t[5] = 1 - (f + v), 
            t[6] = d + m, t[7] = 0, t[8] = M + S, t[9] = d - m, t[10] = 1 - (f + h), t[11] = 0, 
            t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
        }, n.getTranslation = function(t, r) {
            return t[0] = r[12], t[1] = r[13], t[2] = r[14], t;
        }, n.getRotation = function(t, r) {
            var e = r[0] + r[5] + r[10], a = 0;
            return e > 0 ? (a = 2 * Math.sqrt(e + 1), t[3] = .25 * a, t[0] = (r[6] - r[9]) / a, 
            t[1] = (r[8] - r[2]) / a, t[2] = (r[1] - r[4]) / a) : r[0] > r[5] & r[0] > r[10] ? (a = 2 * Math.sqrt(1 + r[0] - r[5] - r[10]), 
            t[3] = (r[6] - r[9]) / a, t[0] = .25 * a, t[1] = (r[1] + r[4]) / a, t[2] = (r[8] + r[2]) / a) : r[5] > r[10] ? (a = 2 * Math.sqrt(1 + r[5] - r[0] - r[10]), 
            t[3] = (r[8] - r[2]) / a, t[0] = (r[1] + r[4]) / a, t[1] = .25 * a, t[2] = (r[6] + r[9]) / a) : (a = 2 * Math.sqrt(1 + r[10] - r[0] - r[5]), 
            t[3] = (r[1] - r[4]) / a, t[0] = (r[8] + r[2]) / a, t[1] = (r[6] + r[9]) / a, t[2] = .25 * a), 
            t;
        }, n.fromRotationTranslationScale = function(t, r, e, a) {
            var n = r[0], o = r[1], u = r[2], i = r[3], l = n + n, s = o + o, f = u + u, c = n * l, M = n * s, h = n * f, d = o * s, v = o * f, m = u * f, S = i * l, I = i * s, x = i * f, F = a[0], D = a[1], b = a[2];
            return t[0] = (1 - (d + m)) * F, t[1] = (M + x) * F, t[2] = (h - I) * F, t[3] = 0, 
            t[4] = (M - x) * D, t[5] = (1 - (c + m)) * D, t[6] = (v + S) * D, t[7] = 0, t[8] = (h + I) * b, 
            t[9] = (v - S) * b, t[10] = (1 - (c + d)) * b, t[11] = 0, t[12] = e[0], t[13] = e[1], 
            t[14] = e[2], t[15] = 1, t;
        }, n.fromRotationTranslationScaleOrigin = function(t, r, e, a, n) {
            var o = r[0], u = r[1], i = r[2], l = r[3], s = o + o, f = u + u, c = i + i, M = o * s, h = o * f, d = o * c, v = u * f, m = u * c, S = i * c, I = l * s, x = l * f, F = l * c, D = a[0], b = a[1], p = a[2], E = n[0], g = n[1], w = n[2];
            return t[0] = (1 - (v + S)) * D, t[1] = (h + F) * D, t[2] = (d - x) * D, t[3] = 0, 
            t[4] = (h - F) * b, t[5] = (1 - (M + S)) * b, t[6] = (m + I) * b, t[7] = 0, t[8] = (d + x) * p, 
            t[9] = (m - I) * p, t[10] = (1 - (M + v)) * p, t[11] = 0, t[12] = e[0] + E - (t[0] * E + t[4] * g + t[8] * w), 
            t[13] = e[1] + g - (t[1] * E + t[5] * g + t[9] * w), t[14] = e[2] + w - (t[2] * E + t[6] * g + t[10] * w), 
            t[15] = 1, t;
        }, n.fromQuat = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = e + e, i = a + a, l = n + n, s = e * u, f = a * u, c = a * i, M = n * u, h = n * i, d = n * l, v = o * u, m = o * i, S = o * l;
            return t[0] = 1 - c - d, t[1] = f + S, t[2] = M - m, t[3] = 0, t[4] = f - S, t[5] = 1 - s - d, 
            t[6] = h + v, t[7] = 0, t[8] = M + m, t[9] = h - v, t[10] = 1 - s - c, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, n.frustum = function(t, r, e, a, n, o, u) {
            var i = 1 / (e - r), l = 1 / (n - a), s = 1 / (o - u);
            return t[0] = 2 * o * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * l, 
            t[6] = 0, t[7] = 0, t[8] = (e + r) * i, t[9] = (n + a) * l, t[10] = (u + o) * s, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * o * 2 * s, t[15] = 0, t;
        }, n.perspective = function(t, r, e, a, n) {
            var o = 1 / Math.tan(r / 2), u = 1 / (a - n);
            return t[0] = o / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (n + a) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * n * a * u, t[15] = 0, t;
        }, n.perspectiveFromFieldOfView = function(t, r, e, a) {
            var n = Math.tan(r.upDegrees * Math.PI / 180), o = Math.tan(r.downDegrees * Math.PI / 180), u = Math.tan(r.leftDegrees * Math.PI / 180), i = Math.tan(r.rightDegrees * Math.PI / 180), l = 2 / (u + i), s = 2 / (n + o);
            return t[0] = l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, 
            t[8] = -((u - i) * l * .5), t[9] = (n - o) * s * .5, t[10] = a / (e - a), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = a * e / (e - a), t[15] = 0, t;
        }, n.ortho = function(t, r, e, a, n, o, u) {
            var i = 1 / (r - e), l = 1 / (a - n), s = 1 / (o - u);
            return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * l, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * s, t[11] = 0, t[12] = (r + e) * i, t[13] = (n + a) * l, 
            t[14] = (u + o) * s, t[15] = 1, t;
        }, n.lookAt = function(t, r, e, o) {
            var u, i, l, s, f, c, M, h, d, v, m = r[0], S = r[1], I = r[2], x = o[0], F = o[1], D = o[2], b = e[0], p = e[1], E = e[2];
            return Math.abs(m - b) < a.EPSILON && Math.abs(S - p) < a.EPSILON && Math.abs(I - E) < a.EPSILON ? n.identity(t) : (M = m - b, 
            h = S - p, d = I - E, v = 1 / Math.sqrt(M * M + h * h + d * d), M *= v, h *= v, 
            d *= v, u = F * d - D * h, i = D * M - x * d, l = x * h - F * M, v = Math.sqrt(u * u + i * i + l * l), 
            v ? (v = 1 / v, u *= v, i *= v, l *= v) : (u = 0, i = 0, l = 0), s = h * l - d * i, 
            f = d * u - M * l, c = M * i - h * u, v = Math.sqrt(s * s + f * f + c * c), v ? (v = 1 / v, 
            s *= v, f *= v, c *= v) : (s = 0, f = 0, c = 0), t[0] = u, t[1] = s, t[2] = M, t[3] = 0, 
            t[4] = i, t[5] = f, t[6] = h, t[7] = 0, t[8] = l, t[9] = c, t[10] = d, t[11] = 0, 
            t[12] = -(u * m + i * S + l * I), t[13] = -(s * m + f * S + c * I), t[14] = -(M * m + h * S + d * I), 
            t[15] = 1, t);
        }, n.str = function(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
        }, n.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
        }, n.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t[4] = r[4] + e[4], t[5] = r[5] + e[5], t[6] = r[6] + e[6], t[7] = r[7] + e[7], 
            t[8] = r[8] + e[8], t[9] = r[9] + e[9], t[10] = r[10] + e[10], t[11] = r[11] + e[11], 
            t[12] = r[12] + e[12], t[13] = r[13] + e[13], t[14] = r[14] + e[14], t[15] = r[15] + e[15], 
            t;
        }, n.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t[4] = r[4] - e[4], t[5] = r[5] - e[5], t[6] = r[6] - e[6], t[7] = r[7] - e[7], 
            t[8] = r[8] - e[8], t[9] = r[9] - e[9], t[10] = r[10] - e[10], t[11] = r[11] - e[11], 
            t[12] = r[12] - e[12], t[13] = r[13] - e[13], t[14] = r[14] - e[14], t[15] = r[15] - e[15], 
            t;
        }, n.sub = n.subtract, n.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, 
            t[5] = r[5] * e, t[6] = r[6] * e, t[7] = r[7] * e, t[8] = r[8] * e, t[9] = r[9] * e, 
            t[10] = r[10] * e, t[11] = r[11] * e, t[12] = r[12] * e, t[13] = r[13] * e, t[14] = r[14] * e, 
            t[15] = r[15] * e, t;
        }, n.multiplyScalarAndAdd = function(t, r, e, a) {
            return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t[2] = r[2] + e[2] * a, t[3] = r[3] + e[3] * a, 
            t[4] = r[4] + e[4] * a, t[5] = r[5] + e[5] * a, t[6] = r[6] + e[6] * a, t[7] = r[7] + e[7] * a, 
            t[8] = r[8] + e[8] * a, t[9] = r[9] + e[9] * a, t[10] = r[10] + e[10] * a, t[11] = r[11] + e[11] * a, 
            t[12] = r[12] + e[12] * a, t[13] = r[13] + e[13] * a, t[14] = r[14] + e[14] * a, 
            t[15] = r[15] + e[15] * a, t;
        }, n.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5] && t[6] === r[6] && t[7] === r[7] && t[8] === r[8] && t[9] === r[9] && t[10] === r[10] && t[11] === r[11] && t[12] === r[12] && t[13] === r[13] && t[14] === r[14] && t[15] === r[15];
        }, n.equals = function(t, r) {
            var e = t[0], n = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = t[6], f = t[7], c = t[8], M = t[9], h = t[10], d = t[11], v = t[12], m = t[13], S = t[14], I = t[15], x = r[0], F = r[1], D = r[2], b = r[3], p = r[4], E = r[5], g = r[6], w = r[7], T = r[8], A = r[9], R = r[10], P = r[11], _ = r[12], y = r[13], O = r[14], L = r[15];
            return Math.abs(e - x) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(x)) && Math.abs(n - F) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(F)) && Math.abs(o - D) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(D)) && Math.abs(u - b) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(b)) && Math.abs(i - p) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(l - E) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(E)) && Math.abs(s - g) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(g)) && Math.abs(f - w) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(w)) && Math.abs(c - T) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(M - A) <= a.EPSILON * Math.max(1, Math.abs(M), Math.abs(A)) && Math.abs(h - R) <= a.EPSILON * Math.max(1, Math.abs(h), Math.abs(R)) && Math.abs(d - P) <= a.EPSILON * Math.max(1, Math.abs(d), Math.abs(P)) && Math.abs(v - _) <= a.EPSILON * Math.max(1, Math.abs(v), Math.abs(_)) && Math.abs(m - y) <= a.EPSILON * Math.max(1, Math.abs(m), Math.abs(y)) && Math.abs(S - O) <= a.EPSILON * Math.max(1, Math.abs(S), Math.abs(O)) && Math.abs(I - L) <= a.EPSILON * Math.max(1, Math.abs(I), Math.abs(L));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(7), n = e(10), o = e(13), u = e(14), i = {};
        i.create = function() {
            var t = new a.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.rotationTo = function() {
            var t = o.create(), r = o.fromValues(1, 0, 0), e = o.fromValues(0, 1, 0);
            return function(a, n, u) {
                var l = o.dot(n, u);
                return l < -.999999 ? (o.cross(t, r, n), o.length(t) < 1e-6 && o.cross(t, e, n), 
                o.normalize(t, t), i.setAxisAngle(a, t, Math.PI), a) : l > .999999 ? (a[0] = 0, 
                a[1] = 0, a[2] = 0, a[3] = 1, a) : (o.cross(t, n, u), a[0] = t[0], a[1] = t[1], 
                a[2] = t[2], a[3] = 1 + l, i.normalize(a, a));
            };
        }(), i.setAxes = function() {
            var t = n.create();
            return function(r, e, a, n) {
                return t[0] = a[0], t[3] = a[1], t[6] = a[2], t[1] = n[0], t[4] = n[1], t[7] = n[2], 
                t[2] = -e[0], t[5] = -e[1], t[8] = -e[2], i.normalize(r, i.fromMat3(r, t));
            };
        }(), i.clone = u.clone, i.fromValues = u.fromValues, i.copy = u.copy, i.set = u.set, 
        i.identity = function(t) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.setAxisAngle = function(t, r, e) {
            e = .5 * e;
            var a = Math.sin(e);
            return t[0] = a * r[0], t[1] = a * r[1], t[2] = a * r[2], t[3] = Math.cos(e), t;
        }, i.getAxisAngle = function(t, r) {
            var e = 2 * Math.acos(r[3]), a = Math.sin(e / 2);
            return 0 != a ? (t[0] = r[0] / a, t[1] = r[1] / a, t[2] = r[2] / a) : (t[0] = 1, 
            t[1] = 0, t[2] = 0), e;
        }, i.add = u.add, i.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = e[0], l = e[1], s = e[2], f = e[3];
            return t[0] = a * f + u * i + n * s - o * l, t[1] = n * f + u * l + o * i - a * s, 
            t[2] = o * f + u * s + a * l - n * i, t[3] = u * f - a * i - n * l - o * s, t;
        }, i.mul = i.multiply, i.scale = u.scale, i.rotateX = function(t, r, e) {
            e *= .5;
            var a = r[0], n = r[1], o = r[2], u = r[3], i = Math.sin(e), l = Math.cos(e);
            return t[0] = a * l + u * i, t[1] = n * l + o * i, t[2] = o * l - n * i, t[3] = u * l - a * i, 
            t;
        }, i.rotateY = function(t, r, e) {
            e *= .5;
            var a = r[0], n = r[1], o = r[2], u = r[3], i = Math.sin(e), l = Math.cos(e);
            return t[0] = a * l - o * i, t[1] = n * l + u * i, t[2] = o * l + a * i, t[3] = u * l - n * i, 
            t;
        }, i.rotateZ = function(t, r, e) {
            e *= .5;
            var a = r[0], n = r[1], o = r[2], u = r[3], i = Math.sin(e), l = Math.cos(e);
            return t[0] = a * l + n * i, t[1] = n * l - a * i, t[2] = o * l + u * i, t[3] = u * l - o * i, 
            t;
        }, i.calculateW = function(t, r) {
            var e = r[0], a = r[1], n = r[2];
            return t[0] = e, t[1] = a, t[2] = n, t[3] = Math.sqrt(Math.abs(1 - e * e - a * a - n * n)), 
            t;
        }, i.dot = u.dot, i.lerp = u.lerp, i.slerp = function(t, r, e, a) {
            var n, o, u, i, l, s = r[0], f = r[1], c = r[2], M = r[3], h = e[0], d = e[1], v = e[2], m = e[3];
            return o = s * h + f * d + c * v + M * m, o < 0 && (o = -o, h = -h, d = -d, v = -v, 
            m = -m), 1 - o > 1e-6 ? (n = Math.acos(o), u = Math.sin(n), i = Math.sin((1 - a) * n) / u, 
            l = Math.sin(a * n) / u) : (i = 1 - a, l = a), t[0] = i * s + l * h, t[1] = i * f + l * d, 
            t[2] = i * c + l * v, t[3] = i * M + l * m, t;
        }, i.sqlerp = function() {
            var t = i.create(), r = i.create();
            return function(e, a, n, o, u, l) {
                return i.slerp(t, a, u, l), i.slerp(r, n, o, l), i.slerp(e, t, r, 2 * l * (1 - l)), 
                e;
            };
        }(), i.invert = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = e * e + a * a + n * n + o * o, i = u ? 1 / u : 0;
            return t[0] = -e * i, t[1] = -a * i, t[2] = -n * i, t[3] = o * i, t;
        }, i.conjugate = function(t, r) {
            return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t[3] = r[3], t;
        }, i.length = u.length, i.len = i.length, i.squaredLength = u.squaredLength, i.sqrLen = i.squaredLength, 
        i.normalize = u.normalize, i.fromMat3 = function(t, r) {
            var e, a = r[0] + r[4] + r[8];
            if (a > 0) e = Math.sqrt(a + 1), t[3] = .5 * e, e = .5 / e, t[0] = (r[5] - r[7]) * e, 
            t[1] = (r[6] - r[2]) * e, t[2] = (r[1] - r[3]) * e; else {
                var n = 0;
                r[4] > r[0] && (n = 1), r[8] > r[3 * n + n] && (n = 2);
                var o = (n + 1) % 3, u = (n + 2) % 3;
                e = Math.sqrt(r[3 * n + n] - r[3 * o + o] - r[3 * u + u] + 1), t[n] = .5 * e, e = .5 / e, 
                t[3] = (r[3 * o + u] - r[3 * u + o]) * e, t[o] = (r[3 * o + n] + r[3 * n + o]) * e, 
                t[u] = (r[3 * u + n] + r[3 * n + u]) * e;
            }
            return t;
        }, i.str = function(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, i.exactEquals = u.exactEquals, i.equals = u.equals, t.exports = i;
    }, function(t, r, e) {
        var a = e(7), n = {};
        n.create = function() {
            var t = new a.ARRAY_TYPE(3);
            return t[0] = 0, t[1] = 0, t[2] = 0, t;
        }, n.clone = function(t) {
            var r = new a.ARRAY_TYPE(3);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r;
        }, n.fromValues = function(t, r, e) {
            var n = new a.ARRAY_TYPE(3);
            return n[0] = t, n[1] = r, n[2] = e, n;
        }, n.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t;
        }, n.set = function(t, r, e, a) {
            return t[0] = r, t[1] = e, t[2] = a, t;
        }, n.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t;
        }, n.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t;
        }, n.sub = n.subtract, n.multiply = function(t, r, e) {
            return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t[2] = r[2] * e[2], t;
        }, n.mul = n.multiply, n.divide = function(t, r, e) {
            return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t[2] = r[2] / e[2], t;
        }, n.div = n.divide, n.ceil = function(t, r) {
            return t[0] = Math.ceil(r[0]), t[1] = Math.ceil(r[1]), t[2] = Math.ceil(r[2]), t;
        }, n.floor = function(t, r) {
            return t[0] = Math.floor(r[0]), t[1] = Math.floor(r[1]), t[2] = Math.floor(r[2]), 
            t;
        }, n.min = function(t, r, e) {
            return t[0] = Math.min(r[0], e[0]), t[1] = Math.min(r[1], e[1]), t[2] = Math.min(r[2], e[2]), 
            t;
        }, n.max = function(t, r, e) {
            return t[0] = Math.max(r[0], e[0]), t[1] = Math.max(r[1], e[1]), t[2] = Math.max(r[2], e[2]), 
            t;
        }, n.round = function(t, r) {
            return t[0] = Math.round(r[0]), t[1] = Math.round(r[1]), t[2] = Math.round(r[2]), 
            t;
        }, n.scale = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t;
        }, n.scaleAndAdd = function(t, r, e, a) {
            return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t[2] = r[2] + e[2] * a, t;
        }, n.distance = function(t, r) {
            var e = r[0] - t[0], a = r[1] - t[1], n = r[2] - t[2];
            return Math.sqrt(e * e + a * a + n * n);
        }, n.dist = n.distance, n.squaredDistance = function(t, r) {
            var e = r[0] - t[0], a = r[1] - t[1], n = r[2] - t[2];
            return e * e + a * a + n * n;
        }, n.sqrDist = n.squaredDistance, n.length = function(t) {
            var r = t[0], e = t[1], a = t[2];
            return Math.sqrt(r * r + e * e + a * a);
        }, n.len = n.length, n.squaredLength = function(t) {
            var r = t[0], e = t[1], a = t[2];
            return r * r + e * e + a * a;
        }, n.sqrLen = n.squaredLength, n.negate = function(t, r) {
            return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t;
        }, n.inverse = function(t, r) {
            return t[0] = 1 / r[0], t[1] = 1 / r[1], t[2] = 1 / r[2], t;
        }, n.normalize = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = e * e + a * a + n * n;
            return o > 0 && (o = 1 / Math.sqrt(o), t[0] = r[0] * o, t[1] = r[1] * o, t[2] = r[2] * o), 
            t;
        }, n.dot = function(t, r) {
            return t[0] * r[0] + t[1] * r[1] + t[2] * r[2];
        }, n.cross = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = e[0], i = e[1], l = e[2];
            return t[0] = n * l - o * i, t[1] = o * u - a * l, t[2] = a * i - n * u, t;
        }, n.lerp = function(t, r, e, a) {
            var n = r[0], o = r[1], u = r[2];
            return t[0] = n + a * (e[0] - n), t[1] = o + a * (e[1] - o), t[2] = u + a * (e[2] - u), 
            t;
        }, n.hermite = function(t, r, e, a, n, o) {
            var u = o * o, i = u * (2 * o - 3) + 1, l = u * (o - 2) + o, s = u * (o - 1), f = u * (3 - 2 * o);
            return t[0] = r[0] * i + e[0] * l + a[0] * s + n[0] * f, t[1] = r[1] * i + e[1] * l + a[1] * s + n[1] * f, 
            t[2] = r[2] * i + e[2] * l + a[2] * s + n[2] * f, t;
        }, n.bezier = function(t, r, e, a, n, o) {
            var u = 1 - o, i = u * u, l = o * o, s = i * u, f = 3 * o * i, c = 3 * l * u, M = l * o;
            return t[0] = r[0] * s + e[0] * f + a[0] * c + n[0] * M, t[1] = r[1] * s + e[1] * f + a[1] * c + n[1] * M, 
            t[2] = r[2] * s + e[2] * f + a[2] * c + n[2] * M, t;
        }, n.random = function(t, r) {
            r = r || 1;
            var e = 2 * a.RANDOM() * Math.PI, n = 2 * a.RANDOM() - 1, o = Math.sqrt(1 - n * n) * r;
            return t[0] = Math.cos(e) * o, t[1] = Math.sin(e) * o, t[2] = n * r, t;
        }, n.transformMat4 = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = e[3] * a + e[7] * n + e[11] * o + e[15];
            return u = u || 1, t[0] = (e[0] * a + e[4] * n + e[8] * o + e[12]) / u, t[1] = (e[1] * a + e[5] * n + e[9] * o + e[13]) / u, 
            t[2] = (e[2] * a + e[6] * n + e[10] * o + e[14]) / u, t;
        }, n.transformMat3 = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2];
            return t[0] = a * e[0] + n * e[3] + o * e[6], t[1] = a * e[1] + n * e[4] + o * e[7], 
            t[2] = a * e[2] + n * e[5] + o * e[8], t;
        }, n.transformQuat = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = e[0], i = e[1], l = e[2], s = e[3], f = s * a + i * o - l * n, c = s * n + l * a - u * o, M = s * o + u * n - i * a, h = -u * a - i * n - l * o;
            return t[0] = f * s + h * -u + c * -l - M * -i, t[1] = c * s + h * -i + M * -u - f * -l, 
            t[2] = M * s + h * -l + f * -i - c * -u, t;
        }, n.rotateX = function(t, r, e, a) {
            var n = [], o = [];
            return n[0] = r[0] - e[0], n[1] = r[1] - e[1], n[2] = r[2] - e[2], o[0] = n[0], 
            o[1] = n[1] * Math.cos(a) - n[2] * Math.sin(a), o[2] = n[1] * Math.sin(a) + n[2] * Math.cos(a), 
            t[0] = o[0] + e[0], t[1] = o[1] + e[1], t[2] = o[2] + e[2], t;
        }, n.rotateY = function(t, r, e, a) {
            var n = [], o = [];
            return n[0] = r[0] - e[0], n[1] = r[1] - e[1], n[2] = r[2] - e[2], o[0] = n[2] * Math.sin(a) + n[0] * Math.cos(a), 
            o[1] = n[1], o[2] = n[2] * Math.cos(a) - n[0] * Math.sin(a), t[0] = o[0] + e[0], 
            t[1] = o[1] + e[1], t[2] = o[2] + e[2], t;
        }, n.rotateZ = function(t, r, e, a) {
            var n = [], o = [];
            return n[0] = r[0] - e[0], n[1] = r[1] - e[1], n[2] = r[2] - e[2], o[0] = n[0] * Math.cos(a) - n[1] * Math.sin(a), 
            o[1] = n[0] * Math.sin(a) + n[1] * Math.cos(a), o[2] = n[2], t[0] = o[0] + e[0], 
            t[1] = o[1] + e[1], t[2] = o[2] + e[2], t;
        }, n.forEach = function() {
            var t = n.create();
            return function(r, e, a, n, o, u) {
                var i, l;
                for (e || (e = 3), a || (a = 0), l = n ? Math.min(n * e + a, r.length) : r.length, 
                i = a; i < l; i += e) t[0] = r[i], t[1] = r[i + 1], t[2] = r[i + 2], o(t, t, u), 
                r[i] = t[0], r[i + 1] = t[1], r[i + 2] = t[2];
                return r;
            };
        }(), n.angle = function(t, r) {
            var e = n.fromValues(t[0], t[1], t[2]), a = n.fromValues(r[0], r[1], r[2]);
            n.normalize(e, e), n.normalize(a, a);
            var o = n.dot(e, a);
            return o > 1 ? 0 : Math.acos(o);
        }, n.str = function(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }, n.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2];
        }, n.equals = function(t, r) {
            var e = t[0], n = t[1], o = t[2], u = r[0], i = r[1], l = r[2];
            return Math.abs(e - u) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(u)) && Math.abs(n - i) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(o - l) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(l));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(7), n = {};
        n.create = function() {
            var t = new a.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
        }, n.clone = function(t) {
            var r = new a.ARRAY_TYPE(4);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
        }, n.fromValues = function(t, r, e, n) {
            var o = new a.ARRAY_TYPE(4);
            return o[0] = t, o[1] = r, o[2] = e, o[3] = n, o;
        }, n.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t;
        }, n.set = function(t, r, e, a, n) {
            return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t;
        }, n.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t;
        }, n.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t;
        }, n.sub = n.subtract, n.multiply = function(t, r, e) {
            return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t[2] = r[2] * e[2], t[3] = r[3] * e[3], 
            t;
        }, n.mul = n.multiply, n.divide = function(t, r, e) {
            return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t[2] = r[2] / e[2], t[3] = r[3] / e[3], 
            t;
        }, n.div = n.divide, n.ceil = function(t, r) {
            return t[0] = Math.ceil(r[0]), t[1] = Math.ceil(r[1]), t[2] = Math.ceil(r[2]), t[3] = Math.ceil(r[3]), 
            t;
        }, n.floor = function(t, r) {
            return t[0] = Math.floor(r[0]), t[1] = Math.floor(r[1]), t[2] = Math.floor(r[2]), 
            t[3] = Math.floor(r[3]), t;
        }, n.min = function(t, r, e) {
            return t[0] = Math.min(r[0], e[0]), t[1] = Math.min(r[1], e[1]), t[2] = Math.min(r[2], e[2]), 
            t[3] = Math.min(r[3], e[3]), t;
        }, n.max = function(t, r, e) {
            return t[0] = Math.max(r[0], e[0]), t[1] = Math.max(r[1], e[1]), t[2] = Math.max(r[2], e[2]), 
            t[3] = Math.max(r[3], e[3]), t;
        }, n.round = function(t, r) {
            return t[0] = Math.round(r[0]), t[1] = Math.round(r[1]), t[2] = Math.round(r[2]), 
            t[3] = Math.round(r[3]), t;
        }, n.scale = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t;
        }, n.scaleAndAdd = function(t, r, e, a) {
            return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t[2] = r[2] + e[2] * a, t[3] = r[3] + e[3] * a, 
            t;
        }, n.distance = function(t, r) {
            var e = r[0] - t[0], a = r[1] - t[1], n = r[2] - t[2], o = r[3] - t[3];
            return Math.sqrt(e * e + a * a + n * n + o * o);
        }, n.dist = n.distance, n.squaredDistance = function(t, r) {
            var e = r[0] - t[0], a = r[1] - t[1], n = r[2] - t[2], o = r[3] - t[3];
            return e * e + a * a + n * n + o * o;
        }, n.sqrDist = n.squaredDistance, n.length = function(t) {
            var r = t[0], e = t[1], a = t[2], n = t[3];
            return Math.sqrt(r * r + e * e + a * a + n * n);
        }, n.len = n.length, n.squaredLength = function(t) {
            var r = t[0], e = t[1], a = t[2], n = t[3];
            return r * r + e * e + a * a + n * n;
        }, n.sqrLen = n.squaredLength, n.negate = function(t, r) {
            return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t[3] = -r[3], t;
        }, n.inverse = function(t, r) {
            return t[0] = 1 / r[0], t[1] = 1 / r[1], t[2] = 1 / r[2], t[3] = 1 / r[3], t;
        }, n.normalize = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = e * e + a * a + n * n + o * o;
            return u > 0 && (u = 1 / Math.sqrt(u), t[0] = e * u, t[1] = a * u, t[2] = n * u, 
            t[3] = o * u), t;
        }, n.dot = function(t, r) {
            return t[0] * r[0] + t[1] * r[1] + t[2] * r[2] + t[3] * r[3];
        }, n.lerp = function(t, r, e, a) {
            var n = r[0], o = r[1], u = r[2], i = r[3];
            return t[0] = n + a * (e[0] - n), t[1] = o + a * (e[1] - o), t[2] = u + a * (e[2] - u), 
            t[3] = i + a * (e[3] - i), t;
        }, n.random = function(t, r) {
            return r = r || 1, t[0] = a.RANDOM(), t[1] = a.RANDOM(), t[2] = a.RANDOM(), t[3] = a.RANDOM(), 
            n.normalize(t, t), n.scale(t, t, r), t;
        }, n.transformMat4 = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3];
            return t[0] = e[0] * a + e[4] * n + e[8] * o + e[12] * u, t[1] = e[1] * a + e[5] * n + e[9] * o + e[13] * u, 
            t[2] = e[2] * a + e[6] * n + e[10] * o + e[14] * u, t[3] = e[3] * a + e[7] * n + e[11] * o + e[15] * u, 
            t;
        }, n.transformQuat = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = e[0], i = e[1], l = e[2], s = e[3], f = s * a + i * o - l * n, c = s * n + l * a - u * o, M = s * o + u * n - i * a, h = -u * a - i * n - l * o;
            return t[0] = f * s + h * -u + c * -l - M * -i, t[1] = c * s + h * -i + M * -u - f * -l, 
            t[2] = M * s + h * -l + f * -i - c * -u, t[3] = r[3], t;
        }, n.forEach = function() {
            var t = n.create();
            return function(r, e, a, n, o, u) {
                var i, l;
                for (e || (e = 4), a || (a = 0), l = n ? Math.min(n * e + a, r.length) : r.length, 
                i = a; i < l; i += e) t[0] = r[i], t[1] = r[i + 1], t[2] = r[i + 2], t[3] = r[i + 3], 
                o(t, t, u), r[i] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r[i + 3] = t[3];
                return r;
            };
        }(), n.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, n.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3];
        }, n.equals = function(t, r) {
            var e = t[0], n = t[1], o = t[2], u = t[3], i = r[0], l = r[1], s = r[2], f = r[3];
            return Math.abs(e - i) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(n - l) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(o - s) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - f) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(f));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(7), n = {};
        n.create = function() {
            var t = new a.ARRAY_TYPE(2);
            return t[0] = 0, t[1] = 0, t;
        }, n.clone = function(t) {
            var r = new a.ARRAY_TYPE(2);
            return r[0] = t[0], r[1] = t[1], r;
        }, n.fromValues = function(t, r) {
            var e = new a.ARRAY_TYPE(2);
            return e[0] = t, e[1] = r, e;
        }, n.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t;
        }, n.set = function(t, r, e) {
            return t[0] = r, t[1] = e, t;
        }, n.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t;
        }, n.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t;
        }, n.sub = n.subtract, n.multiply = function(t, r, e) {
            return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t;
        }, n.mul = n.multiply, n.divide = function(t, r, e) {
            return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t;
        }, n.div = n.divide, n.ceil = function(t, r) {
            return t[0] = Math.ceil(r[0]), t[1] = Math.ceil(r[1]), t;
        }, n.floor = function(t, r) {
            return t[0] = Math.floor(r[0]), t[1] = Math.floor(r[1]), t;
        }, n.min = function(t, r, e) {
            return t[0] = Math.min(r[0], e[0]), t[1] = Math.min(r[1], e[1]), t;
        }, n.max = function(t, r, e) {
            return t[0] = Math.max(r[0], e[0]), t[1] = Math.max(r[1], e[1]), t;
        }, n.round = function(t, r) {
            return t[0] = Math.round(r[0]), t[1] = Math.round(r[1]), t;
        }, n.scale = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t;
        }, n.scaleAndAdd = function(t, r, e, a) {
            return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t;
        }, n.distance = function(t, r) {
            var e = r[0] - t[0], a = r[1] - t[1];
            return Math.sqrt(e * e + a * a);
        }, n.dist = n.distance, n.squaredDistance = function(t, r) {
            var e = r[0] - t[0], a = r[1] - t[1];
            return e * e + a * a;
        }, n.sqrDist = n.squaredDistance, n.length = function(t) {
            var r = t[0], e = t[1];
            return Math.sqrt(r * r + e * e);
        }, n.len = n.length, n.squaredLength = function(t) {
            var r = t[0], e = t[1];
            return r * r + e * e;
        }, n.sqrLen = n.squaredLength, n.negate = function(t, r) {
            return t[0] = -r[0], t[1] = -r[1], t;
        }, n.inverse = function(t, r) {
            return t[0] = 1 / r[0], t[1] = 1 / r[1], t;
        }, n.normalize = function(t, r) {
            var e = r[0], a = r[1], n = e * e + a * a;
            return n > 0 && (n = 1 / Math.sqrt(n), t[0] = r[0] * n, t[1] = r[1] * n), t;
        }, n.dot = function(t, r) {
            return t[0] * r[0] + t[1] * r[1];
        }, n.cross = function(t, r, e) {
            var a = r[0] * e[1] - r[1] * e[0];
            return t[0] = t[1] = 0, t[2] = a, t;
        }, n.lerp = function(t, r, e, a) {
            var n = r[0], o = r[1];
            return t[0] = n + a * (e[0] - n), t[1] = o + a * (e[1] - o), t;
        }, n.random = function(t, r) {
            r = r || 1;
            var e = 2 * a.RANDOM() * Math.PI;
            return t[0] = Math.cos(e) * r, t[1] = Math.sin(e) * r, t;
        }, n.transformMat2 = function(t, r, e) {
            var a = r[0], n = r[1];
            return t[0] = e[0] * a + e[2] * n, t[1] = e[1] * a + e[3] * n, t;
        }, n.transformMat2d = function(t, r, e) {
            var a = r[0], n = r[1];
            return t[0] = e[0] * a + e[2] * n + e[4], t[1] = e[1] * a + e[3] * n + e[5], t;
        }, n.transformMat3 = function(t, r, e) {
            var a = r[0], n = r[1];
            return t[0] = e[0] * a + e[3] * n + e[6], t[1] = e[1] * a + e[4] * n + e[7], t;
        }, n.transformMat4 = function(t, r, e) {
            var a = r[0], n = r[1];
            return t[0] = e[0] * a + e[4] * n + e[12], t[1] = e[1] * a + e[5] * n + e[13], t;
        }, n.forEach = function() {
            var t = n.create();
            return function(r, e, a, n, o, u) {
                var i, l;
                for (e || (e = 2), a || (a = 0), l = n ? Math.min(n * e + a, r.length) : r.length, 
                i = a; i < l; i += e) t[0] = r[i], t[1] = r[i + 1], o(t, t, u), r[i] = t[0], r[i + 1] = t[1];
                return r;
            };
        }(), n.str = function(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")";
        }, n.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1];
        }, n.equals = function(t, r) {
            var e = t[0], n = t[1], o = r[0], u = r[1];
            return Math.abs(e - o) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(o)) && Math.abs(n - u) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(u));
        }, t.exports = n;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            if (t && t.__esModule) return t;
            var r = {};
            if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
            return r["default"] = t, r;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.fvec3 = void 0;
        var n = e(6), o = a(n), u = o.vec3;
        r.fvec3 = {
            add: function(t, r) {
                return u.add(u.create(), t, r);
            },
            subtract: function(t, r) {
                return u.subtract(u.create(), t, r);
            },
            sub: function(t, r) {
                return u.sub(u.create(), t, r);
            },
            multiply: function(t, r) {
                return u.multiply(u.create(), t, r);
            },
            mul: function(t, r) {
                return u.mul(u.create(), t, r);
            },
            divide: function(t, r) {
                return u.divide(u.create(), t, r);
            },
            div: function(t, r) {
                return u.div(u.create(), t, r);
            },
            ceil: function(t) {
                return u.ceil(u.create(), t);
            },
            floor: function(t) {
                return u.floor(u.create(), t);
            },
            round: function(t) {
                return u.round(u.create(), t);
            },
            min: function(t, r) {
                return u.min(u.create(), t, r);
            },
            max: function(t, r) {
                return u.max(u.create(), t, r);
            },
            scale: function(t, r) {
                return u.scale(u.create(), t, r);
            },
            scaleAndAdd: function(t, r, e) {
                return u.scaleAndAdd(u.create(), t, r, e);
            },
            inverse: function(t) {
                return u.inverse(u.create(), t);
            },
            normalize: function(t) {
                return u.normalize(u.create(), t);
            },
            cross: function(t, r) {
                return u.cross(u.create(), t, r);
            }
        };
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            var e = -c.vec3.dot(t, r);
            return c.vec4.fromValues(t[0], t[1], t[2], e);
        }
        function n(t, r, e) {
            return a(o(t, r, e), t);
        }
        function o(t, r, e) {
            var a = c.fvec3.cross(c.fvec3.sub(e, r), c.fvec3.sub(t, r));
            return c.vec3.normalize(a, a);
        }
        function u(t) {
            var r = f(t, 4), e = r[0], a = r[1], n = r[2], o = r[3];
            return c.mat4.fromValues(1 - 2 * e * e, -2 * e * a, -2 * e * n, 0, -2 * e * a, 1 - 2 * a * a, -2 * a * n, 0, -2 * e * n, -2 * a * n, 1 - 2 * n * n, 0, -2 * e * o, -2 * a * o, -2 * n * o, 1);
        }
        function i(t) {
            var r = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
            return t *= .5, r[0] = 0, r[1] = Math.sin(t), r[2] = 0, r[3] = Math.cos(t), r;
        }
        function l(t) {
            var r = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
            return t *= .5, r[0] = Math.sin(t), r[1] = 0, r[2] = 0, r[3] = Math.cos(t), r;
        }
        function s(t) {
            var r = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
            return t *= .5, r[0] = 0, r[1] = 0, r[2] = Math.sin(t), r[3] = Math.cos(t), r;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var f = function() {
            function t(t, r) {
                var e = [], a = !0, n = !1, o = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(a = (u = i.next()).done) && (e.push(u.value), 
                    !r || e.length !== r); a = !0) ;
                } catch (l) {
                    n = !0, o = l;
                } finally {
                    try {
                        !a && i["return"] && i["return"]();
                    } finally {
                        if (n) throw o;
                    }
                }
                return e;
            }
            return function(r, e) {
                if (Array.isArray(r)) return r;
                if (Symbol.iterator in Object(r)) return t(r, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        r.planeFromNormalAndCoplanarPoint = a, r.planeFromThreeCoplanarPoints = n, r.normalFromThreeCoplanarPoints = o, 
        r.mirrorMatrixFromPlane = u, r.getYawQuat = i, r.getPitchQuat = l, r.getRollQuat = s;
        var c = e(5);
    }, function(t, r, e) {
        "use strict";
        function a() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], r = Object.assign({
                fovy: .6 * Math.PI,
                aspect: window.innerWidth / window.innerHeight,
                near: .1,
                far: 1e3,
                needsUpdatePerspective: !1,
                rotateX: 0,
                rotateY: 0,
                moveForward: 0,
                moveLeft: 0,
                moveUp: 0
            }, t), e = {
                view: o.mat4.create(),
                perspective: o.mat4.perspective(o.mat4.create(), r.fovy, r.aspect, r.near, r.far),
                rotationX: o.mat4.create(),
                rotationY: o.mat4.create(),
                position: [ 0, 0, 0 ]
            };
            return {
                props: r,
                state: e
            };
        }
        function n(t) {
            var r = t.props, e = t.state, a = e.view, n = e.perspective, u = e.rotationX, i = e.rotationY, l = e.position;
            r.needsUpdatePerspective && (r.needsUpdatePerspective = !1, o.mat4.perspective(n, r.fovy, r.aspect, r.near, r.far));
            var s = !1;
            if (r.rotateX && (o.mat4.rotateX(u, u, r.rotateX), r.rotateX = 0, s = !0), r.rotateY && (o.mat4.rotateY(i, i, r.rotateY), 
            r.rotateY = 0, s = !0), r.moveForward) {
                var f = [ i[8], i[9], i[10] ];
                o.vec3.add(l, l, o.vec3.scale(f, f, -r.moveForward)), r.moveForward = 0, s = !0;
            }
            if (r.moveLeft) {
                var c = [ i[0], i[1], i[2] ];
                o.vec3.add(l, l, o.vec3.scale(c, c, -r.moveLeft)), r.moveLeft = 0, s = !0;
            }
            if (r.moveUp) {
                var M = [ i[4], i[5], i[6] ];
                o.vec3.add(l, l, o.vec3.scale(M, M, r.moveUp)), r.moveUp = 0, s = !0;
            }
            s && (o.mat4.fromTranslation(a, l), o.mat4.multiply(a, a, i), o.mat4.multiply(a, a, u), 
            o.mat4.invert(a, a));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.create = a, r.update = n;
        var o = e(5);
    }, function(t, r, e) {
        "use strict";
        function a(t, r, e, a, n) {
            e = e || t(.5 * Math.PI), a = a || t(.1), n = n || t(1e3);
            var u = t(1).stream({
                "with": {
                    size: r.HOT
                },
                "do": function(t) {
                    var r = t.size;
                    return r.width / r.height;
                }
            }), i = t(o.mat4.create()).stream({
                id: "updatePosition",
                "with": {
                    m: t.SELF,
                    near: a.HOT,
                    far: n.HOT,
                    fovy: e.HOT,
                    aspect: u.HOT
                },
                "do": function(t) {
                    var r = t.m, e = t.near, a = t.far, n = t.fovy, u = t.aspect;
                    return o.mat4.perspective(r, n, u, e, a);
                }
            });
            return {
                fovy: e,
                near: a,
                far: n,
                aspect: u,
                perspective: i
            };
        }
        function n(t, r, e, a) {
            r = r || t([ 0, 0, 0 ]), e = e || t(0), a = a || t(0);
            var n = t(o.mat4.create());
            return {
                position: r,
                yaw: e,
                pitch: a,
                view: n
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.makePerspective = a, r.makeFirstPersonView = n;
        var o = e(5);
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            var e = t(n.renderer.create()), a = t().stream({
                async: !0,
                autostart: !0,
                "with": {
                    ctx: e.COLD
                },
                "do": function(t, r) {
                    var e = t.ctx, a = e.gl.canvas;
                    return document.body.appendChild(a), r(a), function() {
                        document.body.removeChild(a);
                    };
                }
            }), o = t().stream({
                "with": {
                    w: r.HOT,
                    canvas: a.HOT
                },
                "do": function(t) {
                    var r = t.canvas;
                    return {
                        width: r ? r.clientWidth : window.innerWidth,
                        height: r ? r.clientHeight : window.innerHeight
                    };
                }
            });
            return e.stream({
                id: "updateSize",
                "with": {
                    ctx: t.SELF,
                    size: o.HOT
                },
                "do": function(t) {
                    var r = t.ctx;
                    return n.renderer.updateSize(r);
                }
            }), {
                context: e,
                canvas: a,
                canvasSize: o
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.makeContext = a;
        var n = e(21);
    }, function(t, r, e) {
        !function(r, e) {
            t.exports = e();
        }(this, function() {
            return function(t) {
                function r(a) {
                    if (e[a]) return e[a].exports;
                    var n = e[a] = {
                        exports: {},
                        id: a,
                        loaded: !1
                    };
                    return t[a].call(n.exports, n, n.exports, r), n.loaded = !0, n.exports;
                }
                var e = {};
                return r.m = t, r.c = e, r.p = "", r(0);
            }([ function(t, r, e) {
                "use strict";
                var a = e(1), n = e(3), o = e(4), u = e(5);
                r.renderUtils = {
                    geometry: {
                        plane: o.plane
                    },
                    stackgl: u
                }, r.constants = n, r.renderer = a["default"], Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = a["default"];
            }, function(t, r, e) {
                "use strict";
                function a(t) {
                    null == t && (t = document.createElement("canvas"));
                    var r = t.getContext("webgl") || t.getContext("experimental-webgl");
                    if (!r) throw Error("WebGL-Context could not be initialized!");
                    var e = {
                        settings: {
                            clearColor: [ 0, 0, 0, 1 ],
                            minFilter: "LINEAR",
                            magFilter: "NEAREST",
                            wrap: "CLAMP_TO_EDGE",
                            clearBuffers: [ "DEPTH", "COLOR" ],
                            clearBits: 0,
                            enable: [ "DEPTH_TEST" ],
                            blend: [ "SRC_ALPHA", "ONE_MINUS_SRC_ALPHA" ],
                            width: t.width,
                            height: t.height
                        },
                        shaders: {},
                        geometries: {},
                        layers: {},
                        objects: {},
                        source: {},
                        target: {},
                        gl: r
                    };
                    return s(e, e.settings), M(e, "_renderQuad", g["default"].geometries.renderQuad), 
                    c(e, "_basicEffect", g["default"].shaders.basicEffect), f(e, "_result", g["default"].objects.resultScreen), 
                    v(e);
                }
                function n(t, r) {
                    return s(t, r.settings), o(t, r.shaders), i(t, r.geometries), l(t, r.objects), u(t, r.layers), 
                    v(t);
                }
                function o(t, r) {
                    if (r) for (var e in r) {
                        var a = r[e];
                        c(t, e, a);
                    }
                }
                function u(t, r) {
                    if (r) for (var e in r) {
                        var a = r[e];
                        h(t, e, a);
                    }
                }
                function i(t, r) {
                    if (r) for (var e in r) {
                        var a = r[e];
                        M(t, e, a);
                    }
                }
                function l(t, r) {
                    if (r) for (var e in r) {
                        var a = r[e];
                        f(t, e, a);
                    }
                }
                function s(t, r) {
                    void 0 === r && (r = {});
                    var e = t.gl;
                    if (null != r.clearColor && (t.settings.clearColor = r.clearColor), null != r.minFilter && (t.settings.minFilter = r.minFilter), 
                    null != r.magFilter && (t.settings.magFilter = r.magFilter), null != r.wrap && (t.settings.wrap = r.wrap), 
                    null != r.clearBuffers && (t.settings.clearBuffers = r.clearBuffers, t.settings.clearBits = I(e, r.clearBuffers)), 
                    null != r.enable) {
                        for (var a = 0, n = t.settings.enable; a < n.length; a++) {
                            var o = n[a];
                            e.disable(e[o]);
                        }
                        t.settings.enable = r.enable;
                        for (var u = 0, i = t.settings.enable; u < i.length; u++) {
                            var o = i[u];
                            e.enable(e[o]);
                        }
                    }
                    return void 0 !== r.blend && (t.settings.blend = r.blend), t.settings.blend && x(e, t.settings.blend), 
                    t;
                }
                function f(t, r, e) {
                    var a = t.objects[r], n = Object.assign({}, e, {
                        type: "initialized"
                    });
                    if (null == n.uniforms && (n.uniforms = {}), t.objects[r] = n, a && "missing" === a.type) for (var o in a.updateLayers) h(t, o, a.updateLayers[o]);
                    return t;
                }
                function c(t, r, e) {
                    var a = t.shaders[r] || {}, n = null == a.program, o = t.gl, u = "precision mediump float;\n" + e.frag;
                    n && (a.program = o.createProgram()), null == a.vert && (a.vert = o.createShader(o.VERTEX_SHADER)), 
                    null == a.frag && (a.frag = o.createShader(o.FRAGMENT_SHADER)), o.shaderSource(a.vert, e.vert), 
                    o.shaderSource(a.frag, u), o.compileShader(a.vert), o.compileShader(a.frag), o.getShaderParameter(a.vert, o.COMPILE_STATUS) || console.error("Error Compiling Vertex Shader!\n", o.getShaderInfoLog(a.vert), e.vert), 
                    o.getShaderParameter(a.frag, o.COMPILE_STATUS) || console.error("Error Compiling Fragment Shader!\n", o.getShaderInfoLog(a.frag), e.frag), 
                    n && (o.attachShader(a.program, a.vert), o.attachShader(a.program, a.frag)), o.linkProgram(a.program), 
                    a.attribs = {};
                    for (var i in e.attribs) {
                        var l = e.attribs[i], s = {
                            index: o.getAttribLocation(a.program, i),
                            type: o.FLOAT,
                            itemSize: w[l]
                        };
                        s.index < 0 && console.error('attribute "' + i + '" could not be found in shader', e.vert), 
                        a.attribs[i] = s;
                    }
                    a.uniforms = {};
                    for (var f in e.uniforms) a.uniforms[f] = {
                        index: o.getUniformLocation(a.program, f),
                        type: e.uniforms[f]
                    };
                    return t.shaders[r] = a, t;
                }
                function M(t, r, e) {
                    var a = t.gl, n = t.geometries[r] || {};
                    n.drawType = a[e.drawType], n.itemCount = e.itemCount;
                    var o = n.attribs || {};
                    for (var u in e.attribs) {
                        var i = e.attribs[u];
                        null == o[u] && (o[u] = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, o[u]), a.bufferData(a.ARRAY_BUFFER, b(i), a[(i.storeType || "STATIC") + "_DRAW"]);
                    }
                    if (n.attribs = o, e.elements) {
                        null == n.elements && (n.elements = {
                            buffer: null,
                            glType: null
                        }), null == n.elements.buffer && (n.elements.buffer = a.createBuffer());
                        var l = b(e.elements);
                        n.elements.glType = p(l, a), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, n.elements.buffer), 
                        a.bufferData(a.ELEMENT_ARRAY_BUFFER, l, a[(e.elements.storeType || "STATIC") + "_DRAW"]);
                    } else n.elements && delete n.elements;
                    return t.geometries[r] = n, t;
                }
                function h(t, r, e) {
                    var a = t.layers[r] || {};
                    if (a.noClear = !!e.noClear, a.clearColor = e.clearColor || t.settings.clearColor, 
                    e.buffered ? (a.renderTarget = {
                        width: e.width || t.settings.width,
                        height: e.height || t.settings.height,
                        frameBuffer: null,
                        texture: null,
                        depthBuffer: null
                    }, D(t.gl, a.renderTarget, e)) : delete a.renderTarget, e.asset) a.type = "static", 
                    d(t.gl, a, e); else if (e.objects) {
                        var n = a;
                        n.type = "objects", n.transparents = [], n.opaques = [], n.uniforms = e.uniforms || {};
                        for (var o = 0, u = e.objects; o < u.length; o++) {
                            var i = u[o], l = t.objects[i];
                            l ? "initialized" === l.type ? l.blend ? n.transparents.push(i) : n.opaques.push(i) : l.updateLayers[r] = e : t.objects[i] = {
                                type: "missing",
                                updateLayers: (s = {}, s[r] = e, s)
                            };
                        }
                    } else if (e.shader) {
                        var n = a;
                        n.type = "shader", n.object = {
                            type: "initialized",
                            shader: e.shader,
                            geometry: "_renderQuad",
                            uniforms: e.uniforms || {}
                        };
                    }
                    return t.layers[r] = a, t;
                    var s;
                }
                function d(t, r, e) {
                    var a = r.texture || t.createTexture();
                    t.bindTexture(t.TEXTURE_2D, a), F(t, e), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e.asset), 
                    e.minFilter && e.minFilter.indexOf("MIPMAP") > 0 && t.generateMipmap(t.TEXTURE_2D), 
                    t.bindTexture(t.TEXTURE_2D, null), r.texture = a;
                }
                function v(t) {
                    var r = t.gl, e = r.canvas.clientWidth || r.canvas.width, a = r.canvas.clientHeight || r.canvas.height;
                    return e === t.settings.width && a === t.settings.height || (r.canvas.height = t.settings.height = a, 
                    r.canvas.width = t.settings.width = e, D(t.gl, t.source, t.settings), D(t.gl, t.target, t.settings)), 
                    t;
                }
                function m(t, r) {
                    for (var e = t.gl, a = r.length - 1, n = 0; n < r.length; n++) {
                        var o = r[n], u = t.layers[o], i = n === a, l = !i && null == u.renderTarget;
                        switch (i ? (e.bindFramebuffer(e.FRAMEBUFFER, null), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight)) : l ? (e.bindFramebuffer(e.FRAMEBUFFER, t.target.frameBuffer), 
                        e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight)) : u.renderTarget && (e.bindFramebuffer(e.FRAMEBUFFER, u.renderTarget.frameBuffer), 
                        e.viewport(0, 0, u.renderTarget.width, u.renderTarget.height)), u.noClear || (e.clearColor.apply(e, u.clearColor || t.settings.clearColor), 
                        e.clear(t.settings.clearBits)), u.type) {
                          case "shader":
                            S(t, u.object);
                            break;

                          case "objects":
                            for (var s = 0, f = u.opaques; s < f.length; s++) {
                                var c = f[s];
                                S(t, t.objects[c], u.uniforms);
                            }
                            if (u.transparents.length) {
                                e.enable(e.BLEND);
                                for (var M = 0, h = u.transparents; M < h.length; M++) {
                                    var c = h[M];
                                    S(t, t.objects[c], u.uniforms);
                                }
                                e.disable(e.BLEND);
                            }
                            break;

                          case "static":
                            if (i) {
                                var d = t.objects._result;
                                S(t, d, {
                                    source: o
                                });
                            }
                        }
                        if (l) {
                            var v = t.source;
                            t.source = t.target, t.target = v;
                        }
                    }
                }
                function S(t, r, e) {
                    var a = 0, n = t.gl, o = t.shaders[r.shader], u = t.geometries[r.geometry];
                    n.useProgram(o.program);
                    for (var i in o.attribs) {
                        var l = o.attribs[i];
                        n.bindBuffer(n.ARRAY_BUFFER, u.attribs[i]), n.enableVertexAttribArray(l.index), 
                        n.vertexAttribPointer(l.index, l.itemSize, l.type, !1, 0, 0);
                    }
                    for (var i in o.uniforms) {
                        var s = o.uniforms[i], f = s.index, c = r.uniforms[i] || e && e[i];
                        switch (s.type) {
                          case "t":
                            var M = c ? t.layers[c].texture : t.source.texture;
                            n.activeTexture(n["TEXTURE" + a]), n.bindTexture(n.TEXTURE_2D, M), n.uniform1i(f, a), 
                            a++;
                            break;

                          case "f":
                          case "f 1":
                            n.uniform1f(f, c);
                            break;

                          case "f 2":
                            n.uniform2fv(f, c);
                            break;

                          case "f 3":
                            n.uniform3fv(f, c);
                            break;

                          case "f 4":
                            n.uniform4fv(f, c);
                            break;

                          case "m 2":
                            n.uniformMatrix2fv(f, !1, c);
                            break;

                          case "m 3":
                            n.uniformMatrix3fv(f, !1, c);
                            break;

                          case "m 4":
                            n.uniformMatrix4fv(f, !1, c);
                            break;

                          case "i":
                          case "i 1":
                            n.uniform1i(f, c);
                            break;

                          case "i 2":
                            n.uniform2iv(f, c);
                            break;

                          case "i 3":
                            n.uniform3iv(f, c);
                            break;

                          case "i 4":
                            n.uniform4iv(f, c);
                            break;

                          default:
                            console.error("Uniform type " + s.type + " unknown. uniform " + i + " not set!");
                        }
                    }
                    u.elements && null != u.elements.glType ? (n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, u.elements.buffer), 
                    n.drawElements(u.drawType, u.itemCount, u.elements.glType, 0)) : n.drawArrays(u.drawType, 0, u.itemCount);
                }
                function I(t, r) {
                    return r.reduce(function(r, e) {
                        return r | t[e + "_BUFFER_BIT"];
                    }, 0);
                }
                function x(t, r) {
                    t.blendFunc.apply(t, r.map(function(r) {
                        return t[r];
                    }));
                }
                function F(t, r) {
                    t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY);
                    var e, a;
                    r.wrap ? e = a = r.wrap : (a = r.wrapT, e = r.wrapS), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t[e || "CLAMP_TO_EDGE"]), 
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t[a || "CLAMP_TO_EDGE"]), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t[r.magFilter || "LINEAR"]), 
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t[r.minFilter || "LINEAR"]);
                }
                function D(t, r, e) {
                    if (null != e.width && null != e.height) {
                        null == r.frameBuffer && (r.frameBuffer = t.createFramebuffer()), null == r.texture && (r.texture = t.createTexture()), 
                        null == r.depthBuffer && (r.depthBuffer = t.createRenderbuffer()), t.bindTexture(t.TEXTURE_2D, r.texture), 
                        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e.width, e.height, 0, t.RGBA, t.UNSIGNED_BYTE, void 0), 
                        F(t, e), t.bindRenderbuffer(t.RENDERBUFFER, r.depthBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, e.width, e.height), 
                        t.bindFramebuffer(t.FRAMEBUFFER, r.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r.texture, 0), 
                        t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, r.depthBuffer);
                        var a = t.checkFramebufferStatus(t.FRAMEBUFFER);
                        a !== t.FRAMEBUFFER_COMPLETE && console.error("framebuffer error", a, e), t.bindFramebuffer(t.FRAMEBUFFER, null), 
                        t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null);
                    }
                }
                function b(t) {
                    if (E(t)) return t.buffer;
                    var r = window[t.type];
                    return new r(t.array);
                }
                function p(t, r) {
                    if (t instanceof Uint8Array) return r.UNSIGNED_BYTE;
                    if (t instanceof Uint16Array) return r.UNSIGNED_SHORT;
                    if (t instanceof Uint32Array) return r.UNSIGNED_INT;
                    throw new TypeError("invalid array type");
                }
                function E(t) {
                    return null != t.buffer;
                }
                var g = e(2);
                r.create = a, r.init = n, r.updateSettings = s, r.updateObject = f, r.updateShader = c, 
                r.updateGeometry = M, r.updateLayer = h, r.updateSize = v, r.renderLayers = m;
                var w = {
                    f: 1,
                    "f 1": 1,
                    "f 2": 2,
                    "f 3": 3,
                    "f 4": 4,
                    "m 2": 4,
                    "m 3": 9,
                    "m 4": 16
                };
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = {
                    create: a,
                    init: n,
                    updateSettings: s,
                    updateObject: f,
                    updateGeometry: M,
                    updateShader: c,
                    updateLayer: h,
                    updateSize: v,
                    renderLayers: m,
                    lib: g["default"]
                };
            }, function(t, r, e) {
                "use strict";
                var a = e(3);
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = {
                    geometries: {
                        renderQuad: {
                            attribs: (n = {}, n[a.GEOMETRY_PROP_POSITION] = {
                                buffer: new Float32Array([ -1, 1, -1, -1, 1, 1, 1, -1 ]),
                                storeType: "STATIC"
                            }, n[a.GEOMETRY_PROP_UV] = {
                                buffer: new Float32Array([ 0, 1, 0, 0, 1, 1, 1, 0 ]),
                                storeType: "STATIC"
                            }, n),
                            drawType: "TRIANGLE_STRIP",
                            itemCount: 4
                        }
                    },
                    shaders: {
                        basicEffect: {
                            vert: "\n        attribute vec2 " + a.GEOMETRY_PROP_POSITION + ";\n        attribute vec2 " + a.GEOMETRY_PROP_UV + ";\n        varying vec2 vUv;\n        void main() {\n          vUv = " + a.GEOMETRY_PROP_UV + ";\n          gl_Position = vec4(" + a.GEOMETRY_PROP_POSITION + ", 0.0, 1.0);\n        }",
                            frag: "\n        uniform sampler2D " + a.UNIFORM_SOURCE_TEXTURE + ";\n        varying vec2 vUv;\n        void main() {\n          gl_FragColor = texture2D(" + a.UNIFORM_SOURCE_TEXTURE + ", vUv);\n        }",
                            attribs: (o = {}, o[a.GEOMETRY_PROP_POSITION] = "f 2", o[a.GEOMETRY_PROP_UV] = "f 2", 
                            o),
                            uniforms: (u = {}, u[a.UNIFORM_SOURCE_TEXTURE] = "t", u)
                        }
                    },
                    objects: {
                        resultScreen: {
                            shader: "_basicEffect",
                            geometry: "_renderQuad"
                        }
                    }
                };
                var n, o, u;
            }, function(t, r) {
                "use strict";
                r.GEOMETRY_PROP_POSITION = "position", r.GEOMETRY_PROP_NORMAL = "normal", r.GEOMETRY_PROP_UV = "uv", 
                r.UNIFORM_SOURCE_TEXTURE = "source";
            }, function(t, r) {
                "use strict";
                function e(t, r, e, a) {
                    var n, o, u = t / 2, i = r / 2, l = e || 1, s = a || 1, f = l + 1, c = s + 1, M = t / l, h = r / s, d = new Float32Array(f * c * 3), v = new Float32Array(f * c * 3), m = new Float32Array(f * c * 2), S = 0, I = 0;
                    for (n = 0; c > n; n++) {
                        var x = n * h - i;
                        for (o = 0; f > o; o++) {
                            var F = o * M - u;
                            d[S] = F, d[S + 1] = -x, v[S + 2] = 1, m[I] = o / l, m[I + 1] = 1 - n / s, S += 3, 
                            I += 2;
                        }
                    }
                    S = 0;
                    var D = new (d.length / 3 > 65535 ? Uint32Array : Uint16Array)(l * s * 6);
                    for (n = 0; s > n; n++) for (o = 0; l > o; o++) {
                        var b = o + f * n, p = o + f * (n + 1), E = o + 1 + f * (n + 1), g = o + 1 + f * n;
                        D[S] = b, D[S + 1] = p, D[S + 2] = g, D[S + 3] = p, D[S + 4] = E, D[S + 5] = g, 
                        S += 6;
                    }
                    return {
                        attribs: {
                            position: {
                                buffer: d,
                                storeType: "STATIC"
                            },
                            normal: {
                                buffer: v,
                                storeType: "STATIC"
                            },
                            uv: {
                                buffer: m,
                                storeType: "STATIC"
                            }
                        },
                        elements: {
                            buffer: D
                        },
                        drawType: "TRIANGLES",
                        itemCount: D.length
                    };
                }
                r.plane = e;
            }, function(t, r, e) {
                "use strict";
                function a(t) {
                    for (var r = [], e = 0; e < t.length; e++) for (var a = t[e], n = 0; n < a.length; n++) r.push(a[n]);
                    return r;
                }
                function n(t) {
                    var e = {
                        drawType: "TRIANGLES",
                        attribs: {},
                        itemCount: 0
                    };
                    for (var n in t) {
                        var u = t[n];
                        if (n === r.STACK_GL_GEOMETRY_PROP_ELEMENTS) {
                            var i = new (u.length > 65535 ? Uint32Array : Uint16Array)(a(u));
                            e = Object.assign(e, {
                                elements: {
                                    buffer: i
                                },
                                itemCount: i.length
                            });
                        } else n === r.STACK_GL_GEOMETRY_PROP_POSITION ? e.attribs[o.GEOMETRY_PROP_POSITION] = {
                            buffer: new Float32Array(a(u))
                        } : n === r.STACK_GL_GEOMETRY_PROP_NORMAL ? e.attribs[o.GEOMETRY_PROP_NORMAL] = {
                            buffer: new Float32Array(a(u))
                        } : n === r.STACK_GL_GEOMETRY_PROP_UV ? e.attribs[o.GEOMETRY_PROP_UV] = {
                            buffer: new Float32Array(a(u))
                        } : e.attribs[n] = {
                            buffer: new Float32Array(a(u))
                        };
                    }
                    return e;
                }
                var o = e(3);
                r.STACK_GL_GEOMETRY_PROP_POSITION = "positions", r.STACK_GL_GEOMETRY_PROP_NORMAL = "normals", 
                r.STACK_GL_GEOMETRY_PROP_UV = "normals", r.STACK_GL_GEOMETRY_PROP_ELEMENTS = "cells", 
                r.convertStackGLGeometry = n;
            } ]);
        });
    }, function(t, r) {
        "use strict";
        function e(t) {
            function r() {
                t({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            return window.addEventListener("resize", r), r(), function() {
                window.removeEventListener("resize", r);
            };
        }
        function a() {
            var t = {
                size: {
                    width: 0,
                    height: 0
                }
            }, r = e(function(r) {
                return t.size = r;
            });
            return {
                state: t,
                destroy: r
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.windowSize = e, r.windowSizeObserver = a;
    }, function(t, r) {
        "use strict";
        function e(t) {
            function r(r) {
                u[r.keyCode] = Date.now(), t(u);
            }
            function e(r) {
                delete u[r.keyCode], t(u);
            }
            var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = a.element, o = void 0 === n ? window : n, u = {};
            return o.addEventListener("keyup", e, !1), o.addEventListener("keydown", r, !1), 
            t(u), function() {
                o.removeEventListener("keyup", e), o.removeEventListener("keydown", r);
            };
        }
        function a(t) {
            function r(t) {
                a.state.pressed = t;
            }
            var a = {
                Keys: n,
                state: {
                    pressed: {}
                },
                destroy: function() {}
            };
            return a.destroy = e(r, t), a;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.keyboard = e, r.keyboardObserver = a;
        var n = r.Keys = {
            CANCEL: 3,
            HELP: 6,
            BACK_SPACE: 8,
            TAB: 9,
            CLEAR: 12,
            RETURN: 13,
            ENTER: 14,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESCAPE: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINTSCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,
            SEMICOLON: 59,
            EQUALS: 61,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            CONTEXT_MENU: 93,
            NUMPAD0: 96,
            NUMPAD1: 97,
            NUMPAD2: 98,
            NUMPAD3: 99,
            NUMPAD4: 100,
            NUMPAD5: 101,
            NUMPAD6: 102,
            NUMPAD7: 103,
            NUMPAD8: 104,
            NUMPAD9: 105,
            MULTIPLY: 106,
            ADD: 107,
            SEPARATOR: 108,
            SUBTRACT: 109,
            DECIMAL: 110,
            DIVIDE: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            F13: 124,
            F14: 125,
            F15: 126,
            F16: 127,
            F17: 128,
            F18: 129,
            F19: 130,
            F20: 131,
            F21: 132,
            F22: 133,
            F23: 134,
            F24: 135,
            NUM_LOCK: 144,
            SCROLL_LOCK: 145,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            BACK_QUOTE: 192,
            OPEN_BRACKET: 219,
            BACK_SLASH: 220,
            CLOSE_BRACKET: 221,
            QUOTE: 222,
            META: 224
        };
    }, function(t, r) {
        "use strict";
        function e(t) {
            function r(r) {
                f.pressed[r.button] = Date.now(), r.button === n.LEFT && (c = r.clientX, M = r.clientY, 
                h = !0), t(f);
            }
            function e(r) {
                delete f.pressed[r.button], f.dragDelta.x = 0, f.dragDelta.y = 0, h = !1, t(f);
            }
            function a(r) {
                h && (f.dragDelta.x = c - r.clientX, f.dragDelta.y = M - r.clientY, t(f));
            }
            function o(t) {
                t.preventDefault();
            }
            var u = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], i = u.element, l = void 0 === i ? document : i, s = u.enableRightButton, f = {
                pressed: {},
                dragDelta: {
                    x: 0,
                    y: 0
                }
            }, c = 0, M = 0, h = !1;
            return l.addEventListener("mousedown", r), document.addEventListener("mouseup", e), 
            document.addEventListener("mousemove", a), s && l.addEventListener("contextmenu", o), 
            t(f), function() {
                l.removeEventListener("mousedown", r), document.removeEventListener("mousemove", a), 
                document.removeEventListener("mouseup", e), s && l.removeEventListener("contextmenu", o);
            };
        }
        function a() {
            function t(t) {
                a.state = t;
            }
            var r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], a = {
                Buttons: n,
                state: {},
                destroy: function() {}
            };
            return a.destroy = e(t, r), a;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.mouse = e, r.mouseObserver = a;
        var n = r.Buttons = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        };
    }, function(t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.generateUUID = function() {
            var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = new Array(36), e = 0, a = 0;
            return function() {
                for (var n = 0; n < 36; ) 8 === n || 13 === n || 18 === n || 23 === n ? r[n] = "-" : 14 === n ? r[n] = "4" : (e <= 2 && (e = 33554432 + 16777216 * Math.random() | 0), 
                a = 15 & e, e >>= 4, r[n] = t[19 === n ? 3 & a | 8 : a]), n += 1;
                return r.join("");
            };
        }();
    }, function(t, r) {
        "use strict";
        function e(t) {
            function r() {
                e && (n = Date.now(), t(n - a), a = n, requestAnimationFrame(r));
            }
            var e = !0, a = Date.now(), n = void 0;
            return r(), function() {
                e = !1;
            };
        }
        function a(t) {
            function r() {
                e && (t(), requestAnimationFrame(r));
            }
            var e = !0;
            return r(), function() {
                e = !1;
            };
        }
        function n(t) {
            function r() {
                for (var t in e) e[t].apply(null, arguments);
            }
            var e = [];
            return {
                start: function() {
                    this.stop = t(r);
                },
                stop: function() {},
                step: r,
                addUpdate: function(t) {
                    e.push(t);
                },
                removeUpdate: function(t) {
                    e = e.filter(function(r) {
                        return r !== t;
                    });
                }
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.animateWithTPF = e, r.animate = a, r.animator = n;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            return t[(0, u.randInt)(t.length)];
        }
        function n(t, r) {
            for (var e = 0; e < t; e++) r(e);
        }
        function o(t, r) {
            var e = [];
            return n(t, function(t) {
                return e.push(r(t));
            }), e;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.pick = a, r.doTimes = n, r.yieldTimes = o;
        var u = e(1);
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            var e = f(t, 4), a = e[0], n = e[1], o = e[2], u = e[3], i = f(r, 4), l = i[0], s = i[1], M = i[2], h = i[3], d = h / 255, v = Math.floor((0, 
            c.lerp)(a, l, d)), m = Math.floor((0, c.lerp)(n, s, d)), S = Math.floor((0, c.lerp)(o, M, d));
            return [ v, m, S, u ];
        }
        function n(t, r) {
            return null == r && (r = 255), [ t, t, t, r ];
        }
        function o(t) {
            var r = f(t, 4), e = r[0], a = r[1], n = r[2], o = r[3];
            return "rgba(" + e + ", " + a + ", " + n + ", " + o / 255 + ")";
        }
        function u(t) {
            return t.map(function(t) {
                return t / 255;
            });
        }
        function i(t) {
            return t.map(function(t) {
                return Math.floor(255 * t);
            });
        }
        function l(t) {
            t = Math.floor(t);
            var r = t >> 16 & 255, e = t >> 8 & 255, a = 255 & t;
            return [ r, e, a ];
        }
        function s(t) {
            var r = t.split("#");
            return l(parseInt(r[r.length - 1], 16));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.WHITE = r.BLACK = void 0;
        var f = function() {
            function t(t, r) {
                var e = [], a = !0, n = !1, o = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(a = (u = i.next()).done) && (e.push(u.value), 
                    !r || e.length !== r); a = !0) ;
                } catch (l) {
                    n = !0, o = l;
                } finally {
                    try {
                        !a && i["return"] && i["return"]();
                    } finally {
                        if (n) throw o;
                    }
                }
                return e;
            }
            return function(r, e) {
                if (Array.isArray(r)) return r;
                if (Symbol.iterator in Object(r)) return t(r, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        r.mixColors = a, r.grey = n, r.colorRgbaToCSS = o, r.intToFloat = u, r.floatToInt = i, 
        r.hexToRgb = l, r.hexStringToRgb = s;
        var c = e(1);
        r.BLACK = [ 0, 0, 0, 255 ], r.WHITE = [ 255, 255, 255, 255 ];
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            return Math.floor(127 * (t + 1));
        }
        function n(t, r, e) {
            for (var n = t.canvas.width, u = t.canvas.height, i = (0, o.tileNoise)(n, u, r, e), l = (0, 
            o.tileNoise)(n, u, 2.1 * r, 2.1 * e), s = (0, o.tileNoise)(n, u, 4.2 * r, 4.2 * e), f = (0, 
            o.tileNoise)(n, u, 8.3 * r, 8.3 * e), c = t.getImageData(0, 0, n, u), M = 0; M < i.length - 1; M++) {
                var h = 4 * M;
                c.data[h] = a(i[M]), c.data[h + 1] = a(l[M]), c.data[h + 2] = a(s[M]), c.data[h + 3] = a(f[M]);
            }
            t.putImageData(c, 0, 0);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.drawTileNoiseTexture = n;
        var o = e(4);
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            var e = i(t, 2), a = e[0], n = e[1], o = r.width, u = r.height;
            return a >= o && (a -= o), n >= u && (n -= u), a < 0 && (a += o), n < 0 && (n += u), 
            [ a, n ];
        }
        function n(t, r) {
            var e = i(t, 2), a = e[0], n = e[1], o = r.width, u = r.height;
            return a < 0 && (a = 0), n < 0 && (n = 0), a >= o && (a = o), n >= u && (n = u), 
            [ a, n ];
        }
        function o(t) {
            function r(r, e) {
                var a = t(e, r), n = i(a, 2), o = n[0], u = n[1];
                return 4 * (u * r.height + o);
            }
            function e(t, e) {
                var a = r(t, e);
                return [ t.data[a], t.data[a + 1], t.data[a + 2], t.data[a + 3] ];
            }
            function a(t, e, a) {
                var n = r(t, e);
                t.data[n] = a[0], t.data[n + 1] = a[1], t.data[n + 2] = a[2], t.data[n + 3] = a[3];
            }
            function o(t, r) {
                for (var e = i(r, 4), a = e[0], n = e[1], o = e[2], u = e[3], l = t.data, s = 0; s < l.length; s += 4) l[s] + a < 256 && (l[s] += a), 
                l[s + 1] + n < 256 && (l[s + 1] += n), l[s + 2] + o < 256 && (l[s + 2] += o), l[s + 3] + u < 256 && (l[s + 3] += u);
            }
            function u(t, r) {
                for (var e = i(r, 4), a = e[0], n = e[1], o = e[2], u = e[3], l = t.data, s = 0; s <= l.length; s += 4) a <= l[s] && (l[s] -= a), 
                n <= l[s + 1] && (l[s + 1] -= n), o <= l[s + 2] && (l[s + 2] -= o), u <= l[s + 3] && (l[s + 3] -= u);
            }
            function s(t, r) {
                for (var n = 0; n < t.width; n++) for (var o = 0; n < t.height; o++) a(t, [ n, o ], (0, 
                l.mixColors)(e(t, [ n, o ]), r));
            }
            function f(t, r, n) {
                for (var o = i(n, 2), u = o[0], l = o[1], s = r.width - 1, f = r.height - 1, c = 0; c < f; c++) for (var M = 0; M < s; M++) a(t, [ u + M, l + c ], e(r, [ M, c ]));
            }
            function c(t, r, n) {
                for (var o = i(n, 2), u = o[0], s = o[1], f = r.width - 1, c = r.height - 1, M = 0; M < c; M++) for (var h = 0; h < f; h++) a(t, [ u + h, s + M ], (0, 
                l.mixColors)(e(t, [ u + h, s + M ]), e(r, [ h, M ])));
            }
            return t = t || n, {
                getPixelIndex: r,
                getColorAt: e,
                setColorAt: a,
                increaseAllBy: o,
                decreaseAllBy: u,
                mixinColor: s,
                replaceWithImageDataAt: f,
                drawImageAt: c
            };
        }
        function u(t) {
            var r = document.createElement("canvas");
            r.width = t.width, r.height = t.height;
            var e = r.getContext("2d");
            if (e) return e.drawImage(t, 0, 0, t.width, t.height), e.getImageData(0, 0, t.width, t.height);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, r) {
                var e = [], a = !0, n = !1, o = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(a = (u = i.next()).done) && (e.push(u.value), 
                    !r || e.length !== r); a = !0) ;
                } catch (l) {
                    n = !0, o = l;
                } finally {
                    try {
                        !a && i["return"] && i["return"]();
                    } finally {
                        if (n) throw o;
                    }
                }
                return e;
            }
            return function(r, e) {
                if (Array.isArray(r)) return r;
                if (Symbol.iterator in Object(r)) return t(r, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        r.repeatedPosition = a, r.closedPosition = n, r.createPixelContext = o, r.createImgDataFromImage = u;
        var l = e(28);
    }, function(t, r) {
        "use strict";
        function e(t) {
            function r(t) {
                return function() {
                    for (var r in this) "function" == typeof this[r][t] && this[r][t]();
                };
            }
            function e(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a = t.split(".");
                return a.reduce(function(t, e) {
                    return t[e] = t[e] || {
                        reset: r("reset"),
                        watch: r("watch"),
                        unwatch: r("unwatch")
                    };
                }, e);
            }
            function a(r) {
                var a = t.getGraph(), n = a.entities, o = a.arcs, u = a.processes;
                return Object.keys(n).reduce(function(r, a) {
                    var i = e(a, r), l = n[a], s = Object.keys(o).map(function(t) {
                        return o[t];
                    }).filter(function(t) {
                        return t.entity == a && !t.port;
                    }).map(function(t) {
                        return t.process;
                    });
                    return i.id = a, Object.defineProperty(i, "val", {
                        get: function() {
                            return t.get(a);
                        },
                        set: function(r) {
                            return t.set(a, r);
                        }
                    }), i.update = function(r) {
                        t.update(a, r);
                    }, i.reset = function() {
                        null != l.value ? t.set(a, l.value) : null != l.json && t.set(a, JSON.parse(l.json));
                    }, i.watch = function() {
                        t.on(a, function(t) {
                            return console.log(a, t);
                        });
                    }, i.unwatch = function() {
                        t.off(a);
                    }, i.streams = {}, s.forEach(function(r) {
                        var e = r.split(".").pop();
                        e && (i.streams[e] = {
                            start: function() {
                                t.start(r);
                            }
                        }, u[r].async && (i.streams[e].stop = function() {
                            t.stop(r);
                        }));
                    }), r;
                }, r);
            }
            var n = {
                update: function() {
                    for (var t in this) "update" !== t && delete this[t];
                    a(this);
                }
            };
            return a(n);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.create = e;
    } ]);
});
//# sourceMappingURL=tvs-libs.js.map