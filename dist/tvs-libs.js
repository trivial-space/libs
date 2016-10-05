!function(t, a) {
    "object" == typeof exports && "object" == typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? exports.tvsLibs = a() : t.tvsLibs = a();
}(this, function() {
    return function(t) {
        function a(n) {
            if (r[n]) return r[n].exports;
            var e = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(e.exports, e, e.exports, a), e.loaded = !0, e.exports;
        }
        var r = {};
        return a.m = t, a.c = r, a.p = "", a(0);
    }([ function(t, a, r) {
        "use strict";
        function n(t) {
            if (t && t.__esModule) return t;
            var a = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
            return a["default"] = t, a;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.flow = a.graphics = a.utils = a.events = a.vr = a.math = void 0;
        var e = r(1), o = n(e), u = r(2), l = n(u), i = r(4), s = n(i), M = r(3), c = n(M), f = r(5), h = n(f), d = r(17), v = n(d), m = r(18), S = n(m), I = r(19), x = n(I), D = r(20), F = n(D), p = r(21), b = n(p), w = r(22), E = n(w), A = r(23), P = n(A), y = r(24), z = n(y), g = r(25), O = n(g), L = r(26), R = n(L), _ = r(27), N = n(_), T = r(28), Y = n(T), q = a.math = {
            core: o,
            noise: s,
            coords: l,
            vectors: c,
            linAlg: h,
            geometry: v
        }, U = a.vr = {
            camera: S,
            flowCamera: x
        }, j = a.events = {
            dom: F,
            mouse: E,
            keyboard: b
        }, C = a.utils = {
            animation: z,
            string: P
        }, X = a.graphics = {
            colors: O,
            pixels: N,
            textures: R
        }, H = a.flow = {
            tree: Y
        };
        a["default"] = {
            math: q,
            vr: U,
            events: j,
            utils: C,
            graphics: X,
            flow: H
        };
    }, function(t, a) {
        "use strict";
        function r(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function n(t, a, r) {
            return t + r * (a - t);
        }
        function e(t, a, r) {
            return Math.max(a, Math.min(t, r));
        }
        function o(t) {
            return Math.floor(Math.random() * t);
        }
        function u(t, a) {
            return o(a - t) + t;
        }
        function l() {
            return 2 * Math.random() - 1 + (2 * Math.random() - 1) + (2 * Math.random() - 1);
        }
        function i(t) {
            return t * s;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.sign = r, a.lerp = n, a.clamp = e, a.randInt = o, a.randIntInRange = u, a.normalRand = l, 
        a.degToRad = i;
        var s = a.DEG_TO_RAD_FACTOR = Math.PI / 180;
    }, function(t, a, r) {
        "use strict";
        function n(t) {
            return [ (0, o.length)(t), Math.atan2(t[1], t[0]) ];
        }
        function e(t) {
            var a = t[0], r = t[1];
            return [ a * Math.cos(r), a * Math.sin(r) ];
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.cartesianToPolar2D = n, a.polarToCartesian2D = e;
        var o = r(3);
    }, function(t, a) {
        "use strict";
        function r(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] + a[n];
            return r;
        }
        function n(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] + a;
            return r;
        }
        function e(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] - a[n];
            return r;
        }
        function o(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] - a;
            return r;
        }
        function u(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] * a;
            return r;
        }
        function l(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] / a;
            return r;
        }
        function i(t) {
            for (var a = 0, r = 0; r < t.length; r++) {
                var n = t[r];
                a += n * n;
            }
            return Math.sqrt(a);
        }
        function s(t) {
            return l(t, i(t));
        }
        function M(t, a) {
            return a < i(t) ? u(s(t), a) : t;
        }
        function c(t, a) {
            if (t.length != a.length) return !1;
            for (var r = 0; r < t.length; r++) if (t[r] !== a[r]) return !1;
            return !0;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.add = r, a.addScalar = n, a.sub = e, a.subScalar = o, a.mul = u, a.div = l, 
        a.length = i, a.normalize = s, a.limit = M, a.isEqual = c;
    }, function(t, a) {
        "use strict";
        function r(t) {
            return t * t * t * (t * (6 * t - 15) + 10);
        }
        function n(t, a, r) {
            return a + t * (r - a);
        }
        function e(t, a) {
            return 0 === (1 & t) ? a : -a;
        }
        function o(t) {
            var a, o, u;
            return o = ~~t, a = 255 & o, t -= o, u = r(t), n(u, e(f[a], t), e(f[a + 1], t - 1));
        }
        function u(t, a) {
            var r, n, e = 0, o = 0, u = 0, l = (t + a) * h, i = Math.floor(t + l), s = Math.floor(a + l), M = (i + s) * d, c = i - M, f = s - M, v = t - c, m = a - f;
            v > m ? (r = 1, n = 0) : (r = 0, n = 1);
            var S = v - r + d, I = m - n + d, x = v - 1 + 2 * d, b = m - 1 + 2 * d, w = 255 & i, E = 255 & s, A = .5 - v * v - m * m;
            if (A >= 0) {
                var P = 3 * F[w + D[E]];
                A *= A, e = A * A * (p[P] * v + p[P + 1] * m);
            }
            var y = .5 - S * S - I * I;
            if (y >= 0) {
                var z = 3 * F[w + r + D[E + n]];
                y *= y, o = y * y * (p[z] * S + p[z + 1] * I);
            }
            var g = .5 - x * x - b * b;
            if (g >= 0) {
                var O = 3 * F[w + 1 + D[E + 1]];
                g *= g, u = g * g * (p[O] * x + p[O + 1] * b);
            }
            return 70 * (e + o + u);
        }
        function l(t, a, r) {
            var n, e, o, u, l, i, s, M, c, f, h = (t + a + r) * v, d = Math.floor(t + h), S = Math.floor(a + h), I = Math.floor(r + h), x = (d + S + I) * m, b = d - x, w = S - x, E = I - x, A = t - b, P = a - w, y = r - E;
            A >= P ? P >= y ? (l = 1, i = 0, s = 0, M = 1, c = 1, f = 0) : A >= y ? (l = 1, 
            i = 0, s = 0, M = 1, c = 0, f = 1) : (l = 0, i = 0, s = 1, M = 1, c = 0, f = 1) : P < y ? (l = 0, 
            i = 0, s = 1, M = 0, c = 1, f = 1) : A < y ? (l = 0, i = 1, s = 0, M = 0, c = 1, 
            f = 1) : (l = 0, i = 1, s = 0, M = 1, c = 1, f = 0);
            var z = A - l + m, g = P - i + m, O = y - s + m, L = A - M + 2 * m, R = P - c + 2 * m, _ = y - f + 2 * m, N = A - 1 + 3 * m, T = P - 1 + 3 * m, Y = y - 1 + 3 * m, q = 255 & d, U = 255 & S, j = 255 & I, C = .6 - A * A - P * P - y * y;
            if (C < 0) n = 0; else {
                var X = 3 * F[q + D[U + D[j]]];
                C *= C, n = C * C * (p[X] * A + p[X + 1] * P + p[X + 2] * y);
            }
            var H = .6 - z * z - g * g - O * O;
            if (H < 0) e = 0; else {
                var V = 3 * F[q + l + D[U + i + D[j + s]]];
                H *= H, e = H * H * (p[V] * z + p[V + 1] * g + p[V + 2] * O);
            }
            var B = .6 - L * L - R * R - _ * _;
            if (B < 0) o = 0; else {
                var k = 3 * F[q + M + D[U + c + D[j + f]]];
                B *= B, o = B * B * (p[k] * L + p[k + 1] * R + p[k + 2] * _);
            }
            var K = .6 - N * N - T * T - Y * Y;
            if (K < 0) u = 0; else {
                var W = 3 * F[q + 1 + D[U + 1 + D[j + 1]]];
                K *= K, u = K * K * (p[W] * N + p[W + 1] * T + p[W + 2] * Y);
            }
            return 32 * (n + e + o + u);
        }
        function i(t, a, r, n) {
            var e, o, u, l, i, s = (t + a + r + n) * S, M = Math.floor(t + s), c = Math.floor(a + s), f = Math.floor(r + s), h = Math.floor(n + s), d = (M + c + f + h) * I, v = M - d, m = c - d, x = f - d, F = h - d, p = t - v, w = a - m, E = r - x, A = n - F, P = 0, y = 0, z = 0, g = 0;
            p > w ? P++ : y++, p > E ? P++ : z++, p > A ? P++ : g++, w > E ? y++ : z++, w > A ? y++ : g++, 
            E > A ? z++ : g++;
            var O, L, R, _, N, T, Y, q, U, j, C, X;
            O = P >= 3 ? 1 : 0, L = y >= 3 ? 1 : 0, R = z >= 3 ? 1 : 0, _ = g >= 3 ? 1 : 0, 
            N = P >= 2 ? 1 : 0, T = y >= 2 ? 1 : 0, Y = z >= 2 ? 1 : 0, q = g >= 2 ? 1 : 0, 
            U = P >= 1 ? 1 : 0, j = y >= 1 ? 1 : 0, C = z >= 1 ? 1 : 0, X = g >= 1 ? 1 : 0;
            var H = p - O + I, V = w - L + I, B = E - R + I, k = A - _ + I, K = p - N + 2 * I, W = w - T + 2 * I, Z = E - Y + 2 * I, Q = A - q + 2 * I, G = p - U + 3 * I, J = w - j + 3 * I, $ = E - C + 3 * I, tt = A - X + 3 * I, at = p - 1 + 4 * I, rt = w - 1 + 4 * I, nt = E - 1 + 4 * I, et = A - 1 + 4 * I, ot = 255 & M, ut = 255 & c, lt = 255 & f, it = 255 & h, st = .6 - p * p - w * w - E * E - A * A;
            if (st < 0) e = 0; else {
                var Mt = D[ot + D[ut + D[lt + D[it]]]] % 32 * 4;
                st *= st, e = st * st * (b[Mt] * p + b[Mt + 1] * w + b[Mt + 2] * E + b[Mt + 3] * A);
            }
            var ct = .6 - H * H - V * V - B * B - k * k;
            if (ct < 0) o = 0; else {
                var ft = D[ot + O + D[ut + L + D[lt + R + D[it + _]]]] % 32 * 4;
                ct *= ct, o = ct * ct * (b[ft] * H + b[ft + 1] * V + b[ft + 2] * B + b[ft + 3] * k);
            }
            var ht = .6 - K * K - W * W - Z * Z - Q * Q;
            if (ht < 0) u = 0; else {
                var dt = D[ot + N + D[ut + T + D[lt + Y + D[it + q]]]] % 32 * 4;
                ht *= ht, u = ht * ht * (b[dt] * K + b[dt + 1] * W + b[dt + 2] * Z + b[dt + 3] * Q);
            }
            var vt = .6 - G * G - J * J - $ * $ - tt * tt;
            if (vt < 0) l = 0; else {
                var mt = D[ot + U + D[ut + j + D[lt + C + D[it + X]]]] % 32 * 4;
                vt *= vt, l = vt * vt * (b[mt] * G + b[mt + 1] * J + b[mt + 2] * $ + b[mt + 3] * tt);
            }
            var St = .6 - at * at - rt * rt - nt * nt - et * et;
            if (St < 0) i = 0; else {
                var It = D[ot + 1 + D[ut + 1 + D[lt + 1 + D[it + 1]]]] % 32 * 4;
                St *= St, i = St * St * (b[It] * at + b[It + 1] * rt + b[It + 2] * nt + b[It + 3] * et);
            }
            return 27 * (e + o + u + l + i);
        }
        function s(t, a, r, n) {
            for (var e = [], o = 0; o < a; o++) for (var u = 0; u < t; u++) {
                var l = u / t, s = o / a, M = Math.cos(2 * l * Math.PI) * r / (2 * Math.PI), c = Math.cos(2 * s * Math.PI) * n / (2 * Math.PI), f = Math.sin(2 * l * Math.PI) * r / (2 * Math.PI), h = Math.sin(2 * s * Math.PI) * n / (2 * Math.PI);
                e.push(i(M, c, f, h));
            }
            return e;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.noise1d = o, a.noise2d = u, a.noise3d = l, a.noise4d = i, a.tileNoise = s;
        var M, c, f = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (M = c = 0; c <= 256; M = ++c) f[256 + M] = f[M];
        var h = .5 * (Math.sqrt(3) - 1), d = (3 - Math.sqrt(3)) / 6, v = 1 / 3, m = 1 / 6, S = (Math.sqrt(5) - 1) / 4, I = (5 - Math.sqrt(5)) / 20, x = new Uint8Array(256), D = new Uint8Array(512), F = new Uint8Array(512);
        for (M = 0; M < 256; M++) x[M] = 256 * Math.random();
        for (M = 0; M < 512; M++) D[M] = x[255 & M], F[M] = D[M] % 12;
        var p = new Float32Array([ 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1 ]), b = new Float32Array([ 0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0 ]);
    }, function(t, a, r) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = r(6);
        Object.keys(n).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(a, t, {
                enumerable: !0,
                get: function() {
                    return n[t];
                }
            });
        });
        var e = r(16);
        Object.keys(e).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(a, t, {
                enumerable: !0,
                get: function() {
                    return e[t];
                }
            });
        });
    }, function(t, a, r) {
        a.glMatrix = r(7), a.mat2 = r(8), a.mat2d = r(9), a.mat3 = r(10), a.mat4 = r(11), 
        a.quat = r(12), a.vec2 = r(15), a.vec3 = r(13), a.vec4 = r(14);
    }, function(t, a) {
        var r = {};
        r.EPSILON = 1e-6, r.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, 
        r.RANDOM = Math.random, r.ENABLE_SIMD = !1, r.SIMD_AVAILABLE = r.ARRAY_TYPE === Float32Array && "SIMD" in this, 
        r.USE_SIMD = r.ENABLE_SIMD && r.SIMD_AVAILABLE, r.setMatrixArrayType = function(t) {
            r.ARRAY_TYPE = t;
        };
        var n = Math.PI / 180;
        r.toRadian = function(t) {
            return t * n;
        }, r.equals = function(t, a) {
            return Math.abs(t - a) <= r.EPSILON * Math.max(1, Math.abs(t), Math.abs(a));
        }, t.exports = r;
    }, function(t, a, r) {
        var n = r(7), e = {};
        e.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, e.clone = function(t) {
            var a = new n.ARRAY_TYPE(4);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, e.fromValues = function(t, a, r, e) {
            var o = new n.ARRAY_TYPE(4);
            return o[0] = t, o[1] = a, o[2] = r, o[3] = e, o;
        }, e.set = function(t, a, r, n, e) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = e, t;
        }, e.transpose = function(t, a) {
            if (t === a) {
                var r = a[1];
                t[1] = a[2], t[2] = r;
            } else t[0] = a[0], t[1] = a[2], t[2] = a[1], t[3] = a[3];
            return t;
        }, e.invert = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = r * o - e * n;
            return u ? (u = 1 / u, t[0] = o * u, t[1] = -n * u, t[2] = -e * u, t[3] = r * u, 
            t) : null;
        }, e.adjoint = function(t, a) {
            var r = a[0];
            return t[0] = a[3], t[1] = -a[1], t[2] = -a[2], t[3] = r, t;
        }, e.determinant = function(t) {
            return t[0] * t[3] - t[2] * t[1];
        }, e.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = r[0], i = r[1], s = r[2], M = r[3];
            return t[0] = n * l + o * i, t[1] = e * l + u * i, t[2] = n * s + o * M, t[3] = e * s + u * M, 
            t;
        }, e.mul = e.multiply, e.rotate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = Math.sin(r), i = Math.cos(r);
            return t[0] = n * i + o * l, t[1] = e * i + u * l, t[2] = n * -l + o * i, t[3] = e * -l + u * i, 
            t;
        }, e.scale = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = r[0], i = r[1];
            return t[0] = n * l, t[1] = e * l, t[2] = o * i, t[3] = u * i, t;
        }, e.fromRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = r, t[2] = -r, t[3] = n, t;
        }, e.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t;
        }, e.str = function(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
        }, e.LDU = function(t, a, r, n) {
            return t[2] = n[2] / n[0], r[0] = n[0], r[1] = n[1], r[3] = n[3] - t[2] * r[1], 
            [ t, a, r ];
        }, e.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t;
        }, e.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t;
        }, e.sub = e.subtract, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, e.equals = function(t, a) {
            var r = t[0], e = t[1], o = t[2], u = t[3], l = a[0], i = a[1], s = a[2], M = a[3];
            return Math.abs(r - l) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(o - s) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - M) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(M));
        }, e.multiplyScalar = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t;
        }, e.multiplyScalarAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t;
        }, t.exports = e;
    }, function(t, a, r) {
        var n = r(7), e = {};
        e.create = function() {
            var t = new n.ARRAY_TYPE(6);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, e.clone = function(t) {
            var a = new n.ARRAY_TYPE(6);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, e.fromValues = function(t, a, r, e, o, u) {
            var l = new n.ARRAY_TYPE(6);
            return l[0] = t, l[1] = a, l[2] = r, l[3] = e, l[4] = o, l[5] = u, l;
        }, e.set = function(t, a, r, n, e, o, u) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = e, t[4] = o, t[5] = u, t;
        }, e.invert = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], l = a[5], i = r * o - n * e;
            return i ? (i = 1 / i, t[0] = o * i, t[1] = -n * i, t[2] = -e * i, t[3] = r * i, 
            t[4] = (e * l - o * u) * i, t[5] = (n * u - r * l) * i, t) : null;
        }, e.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, e.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = r[0], M = r[1], c = r[2], f = r[3], h = r[4], d = r[5];
            return t[0] = n * s + o * M, t[1] = e * s + u * M, t[2] = n * c + o * f, t[3] = e * c + u * f, 
            t[4] = n * h + o * d + l, t[5] = e * h + u * d + i, t;
        }, e.mul = e.multiply, e.rotate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = Math.sin(r), M = Math.cos(r);
            return t[0] = n * M + o * s, t[1] = e * M + u * s, t[2] = n * -s + o * M, t[3] = e * -s + u * M, 
            t[4] = l, t[5] = i, t;
        }, e.scale = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = r[0], M = r[1];
            return t[0] = n * s, t[1] = e * s, t[2] = o * M, t[3] = u * M, t[4] = l, t[5] = i, 
            t;
        }, e.translate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = r[0], M = r[1];
            return t[0] = n, t[1] = e, t[2] = o, t[3] = u, t[4] = n * s + o * M + l, t[5] = e * s + u * M + i, 
            t;
        }, e.fromRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = r, t[2] = -r, t[3] = n, t[4] = 0, t[5] = 0, t;
        }, e.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t[4] = 0, t[5] = 0, t;
        }, e.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = a[0], t[5] = a[1], t;
        }, e.str = function(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
        }, e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
        }, e.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t[4] = a[4] + r[4], t[5] = a[5] + r[5], t;
        }, e.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t[4] = a[4] - r[4], t[5] = a[5] - r[5], t;
        }, e.sub = e.subtract, e.multiplyScalar = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * r, 
            t[5] = a[5] * r, t;
        }, e.multiplyScalarAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t[4] = a[4] + r[4] * n, t[5] = a[5] + r[5] * n, t;
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5];
        }, e.equals = function(t, a) {
            var r = t[0], e = t[1], o = t[2], u = t[3], l = t[4], i = t[5], s = a[0], M = a[1], c = a[2], f = a[3], h = a[4], d = a[5];
            return Math.abs(r - s) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(e - M) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(o - c) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(u - f) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(l - h) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(h)) && Math.abs(i - d) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(d));
        }, t.exports = e;
    }, function(t, a, r) {
        var n = r(7), e = {};
        e.create = function() {
            var t = new n.ARRAY_TYPE(9);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, e.fromMat4 = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[4], t[4] = a[5], t[5] = a[6], 
            t[6] = a[8], t[7] = a[9], t[8] = a[10], t;
        }, e.clone = function(t) {
            var a = new n.ARRAY_TYPE(9);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a[6] = t[6], a[7] = t[7], a[8] = t[8], a;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t;
        }, e.fromValues = function(t, a, r, e, o, u, l, i, s) {
            var M = new n.ARRAY_TYPE(9);
            return M[0] = t, M[1] = a, M[2] = r, M[3] = e, M[4] = o, M[5] = u, M[6] = l, M[7] = i, 
            M[8] = s, M;
        }, e.set = function(t, a, r, n, e, o, u, l, i, s) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = e, t[4] = o, t[5] = u, t[6] = l, t[7] = i, 
            t[8] = s, t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, e.transpose = function(t, a) {
            if (t === a) {
                var r = a[1], n = a[2], e = a[5];
                t[1] = a[3], t[2] = a[6], t[3] = r, t[5] = a[7], t[6] = n, t[7] = e;
            } else t[0] = a[0], t[1] = a[3], t[2] = a[6], t[3] = a[1], t[4] = a[4], t[5] = a[7], 
            t[6] = a[2], t[7] = a[5], t[8] = a[8];
            return t;
        }, e.invert = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], l = a[5], i = a[6], s = a[7], M = a[8], c = M * u - l * s, f = -M * o + l * i, h = s * o - u * i, d = r * c + n * f + e * h;
            return d ? (d = 1 / d, t[0] = c * d, t[1] = (-M * n + e * s) * d, t[2] = (l * n - e * u) * d, 
            t[3] = f * d, t[4] = (M * r - e * i) * d, t[5] = (-l * r + e * o) * d, t[6] = h * d, 
            t[7] = (-s * r + n * i) * d, t[8] = (u * r - n * o) * d, t) : null;
        }, e.adjoint = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], l = a[5], i = a[6], s = a[7], M = a[8];
            return t[0] = u * M - l * s, t[1] = e * s - n * M, t[2] = n * l - e * u, t[3] = l * i - o * M, 
            t[4] = r * M - e * i, t[5] = e * o - r * l, t[6] = o * s - u * i, t[7] = n * i - r * s, 
            t[8] = r * u - n * o, t;
        }, e.determinant = function(t) {
            var a = t[0], r = t[1], n = t[2], e = t[3], o = t[4], u = t[5], l = t[6], i = t[7], s = t[8];
            return a * (s * o - u * i) + r * (-s * e + u * l) + n * (i * e - o * l);
        }, e.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = a[6], M = a[7], c = a[8], f = r[0], h = r[1], d = r[2], v = r[3], m = r[4], S = r[5], I = r[6], x = r[7], D = r[8];
            return t[0] = f * n + h * u + d * s, t[1] = f * e + h * l + d * M, t[2] = f * o + h * i + d * c, 
            t[3] = v * n + m * u + S * s, t[4] = v * e + m * l + S * M, t[5] = v * o + m * i + S * c, 
            t[6] = I * n + x * u + D * s, t[7] = I * e + x * l + D * M, t[8] = I * o + x * i + D * c, 
            t;
        }, e.mul = e.multiply, e.translate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = a[6], M = a[7], c = a[8], f = r[0], h = r[1];
            return t[0] = n, t[1] = e, t[2] = o, t[3] = u, t[4] = l, t[5] = i, t[6] = f * n + h * u + s, 
            t[7] = f * e + h * l + M, t[8] = f * o + h * i + c, t;
        }, e.rotate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = a[6], M = a[7], c = a[8], f = Math.sin(r), h = Math.cos(r);
            return t[0] = h * n + f * u, t[1] = h * e + f * l, t[2] = h * o + f * i, t[3] = h * u - f * n, 
            t[4] = h * l - f * e, t[5] = h * i - f * o, t[6] = s, t[7] = M, t[8] = c, t;
        }, e.scale = function(t, a, r) {
            var n = r[0], e = r[1];
            return t[0] = n * a[0], t[1] = n * a[1], t[2] = n * a[2], t[3] = e * a[3], t[4] = e * a[4], 
            t[5] = e * a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t;
        }, e.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = a[0], 
            t[7] = a[1], t[8] = 1, t;
        }, e.fromRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = r, t[2] = 0, t[3] = -r, t[4] = n, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, e.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = a[1], t[5] = 0, t[6] = 0, 
            t[7] = 0, t[8] = 1, t;
        }, e.fromMat2d = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = 0, t[3] = a[2], t[4] = a[3], t[5] = 0, t[6] = a[4], 
            t[7] = a[5], t[8] = 1, t;
        }, e.fromQuat = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = r + r, l = n + n, i = e + e, s = r * u, M = n * u, c = n * l, f = e * u, h = e * l, d = e * i, v = o * u, m = o * l, S = o * i;
            return t[0] = 1 - c - d, t[3] = M - S, t[6] = f + m, t[1] = M + S, t[4] = 1 - s - d, 
            t[7] = h - v, t[2] = f - m, t[5] = h + v, t[8] = 1 - s - c, t;
        }, e.normalFromMat4 = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], l = a[5], i = a[6], s = a[7], M = a[8], c = a[9], f = a[10], h = a[11], d = a[12], v = a[13], m = a[14], S = a[15], I = r * l - n * u, x = r * i - e * u, D = r * s - o * u, F = n * i - e * l, p = n * s - o * l, b = e * s - o * i, w = M * v - c * d, E = M * m - f * d, A = M * S - h * d, P = c * m - f * v, y = c * S - h * v, z = f * S - h * m, g = I * z - x * y + D * P + F * A - p * E + b * w;
            return g ? (g = 1 / g, t[0] = (l * z - i * y + s * P) * g, t[1] = (i * A - u * z - s * E) * g, 
            t[2] = (u * y - l * A + s * w) * g, t[3] = (e * y - n * z - o * P) * g, t[4] = (r * z - e * A + o * E) * g, 
            t[5] = (n * A - r * y - o * w) * g, t[6] = (v * b - m * p + S * F) * g, t[7] = (m * D - d * b - S * x) * g, 
            t[8] = (d * p - v * D + S * I) * g, t) : null;
        }, e.str = function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
        }, e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
        }, e.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t[4] = a[4] + r[4], t[5] = a[5] + r[5], t[6] = a[6] + r[6], t[7] = a[7] + r[7], 
            t[8] = a[8] + r[8], t;
        }, e.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t[4] = a[4] - r[4], t[5] = a[5] - r[5], t[6] = a[6] - r[6], t[7] = a[7] - r[7], 
            t[8] = a[8] - r[8], t;
        }, e.sub = e.subtract, e.multiplyScalar = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * r, 
            t[5] = a[5] * r, t[6] = a[6] * r, t[7] = a[7] * r, t[8] = a[8] * r, t;
        }, e.multiplyScalarAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t[4] = a[4] + r[4] * n, t[5] = a[5] + r[5] * n, t[6] = a[6] + r[6] * n, t[7] = a[7] + r[7] * n, 
            t[8] = a[8] + r[8] * n, t;
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8];
        }, e.equals = function(t, a) {
            var r = t[0], e = t[1], o = t[2], u = t[3], l = t[4], i = t[5], s = t[6], M = t[7], c = t[8], f = a[0], h = a[1], d = a[2], v = a[3], m = a[4], S = a[5], I = t[6], x = a[7], D = a[8];
            return Math.abs(r - f) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(e - h) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - d) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(u - v) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(l - m) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(m)) && Math.abs(i - S) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(S)) && Math.abs(s - I) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(I)) && Math.abs(M - x) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(x)) && Math.abs(c - D) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(D));
        }, t.exports = e;
    }, function(t, a, r) {
        var n = r(7), e = {
            scalar: {},
            SIMD: {}
        };
        e.create = function() {
            var t = new n.ARRAY_TYPE(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.clone = function(t) {
            var a = new n.ARRAY_TYPE(16);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a[6] = t[6], a[7] = t[7], a[8] = t[8], a[9] = t[9], a[10] = t[10], a[11] = t[11], 
            a[12] = t[12], a[13] = t[13], a[14] = t[14], a[15] = t[15], a;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], 
            t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
        }, e.fromValues = function(t, a, r, e, o, u, l, i, s, M, c, f, h, d, v, m) {
            var S = new n.ARRAY_TYPE(16);
            return S[0] = t, S[1] = a, S[2] = r, S[3] = e, S[4] = o, S[5] = u, S[6] = l, S[7] = i, 
            S[8] = s, S[9] = M, S[10] = c, S[11] = f, S[12] = h, S[13] = d, S[14] = v, S[15] = m, 
            S;
        }, e.set = function(t, a, r, n, e, o, u, l, i, s, M, c, f, h, d, v, m) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = e, t[4] = o, t[5] = u, t[6] = l, t[7] = i, 
            t[8] = s, t[9] = M, t[10] = c, t[11] = f, t[12] = h, t[13] = d, t[14] = v, t[15] = m, 
            t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.scalar.transpose = function(t, a) {
            if (t === a) {
                var r = a[1], n = a[2], e = a[3], o = a[6], u = a[7], l = a[11];
                t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = r, t[6] = a[9], t[7] = a[13], t[8] = n, 
                t[9] = o, t[11] = a[14], t[12] = e, t[13] = u, t[14] = l;
            } else t[0] = a[0], t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = a[1], t[5] = a[5], 
            t[6] = a[9], t[7] = a[13], t[8] = a[2], t[9] = a[6], t[10] = a[10], t[11] = a[14], 
            t[12] = a[3], t[13] = a[7], t[14] = a[11], t[15] = a[15];
            return t;
        }, e.SIMD.transpose = function(t, a) {
            var r, n, e, o, u, l, i, s, M, c;
            return r = SIMD.Float32x4.load(a, 0), n = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), 
            o = SIMD.Float32x4.load(a, 12), u = SIMD.Float32x4.shuffle(r, n, 0, 1, 4, 5), l = SIMD.Float32x4.shuffle(e, o, 0, 1, 4, 5), 
            i = SIMD.Float32x4.shuffle(u, l, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(u, l, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, i), SIMD.Float32x4.store(t, 4, s), u = SIMD.Float32x4.shuffle(r, n, 2, 3, 6, 7), 
            l = SIMD.Float32x4.shuffle(e, o, 2, 3, 6, 7), M = SIMD.Float32x4.shuffle(u, l, 0, 2, 4, 6), 
            c = SIMD.Float32x4.shuffle(u, l, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, M), SIMD.Float32x4.store(t, 12, c), 
            t;
        }, e.transpose = n.USE_SIMD ? e.SIMD.transpose : e.scalar.transpose, e.scalar.invert = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], l = a[5], i = a[6], s = a[7], M = a[8], c = a[9], f = a[10], h = a[11], d = a[12], v = a[13], m = a[14], S = a[15], I = r * l - n * u, x = r * i - e * u, D = r * s - o * u, F = n * i - e * l, p = n * s - o * l, b = e * s - o * i, w = M * v - c * d, E = M * m - f * d, A = M * S - h * d, P = c * m - f * v, y = c * S - h * v, z = f * S - h * m, g = I * z - x * y + D * P + F * A - p * E + b * w;
            return g ? (g = 1 / g, t[0] = (l * z - i * y + s * P) * g, t[1] = (e * y - n * z - o * P) * g, 
            t[2] = (v * b - m * p + S * F) * g, t[3] = (f * p - c * b - h * F) * g, t[4] = (i * A - u * z - s * E) * g, 
            t[5] = (r * z - e * A + o * E) * g, t[6] = (m * D - d * b - S * x) * g, t[7] = (M * b - f * D + h * x) * g, 
            t[8] = (u * y - l * A + s * w) * g, t[9] = (n * A - r * y - o * w) * g, t[10] = (d * p - v * D + S * I) * g, 
            t[11] = (c * D - M * p - h * I) * g, t[12] = (l * E - u * P - i * w) * g, t[13] = (r * P - n * E + e * w) * g, 
            t[14] = (v * x - d * F - m * I) * g, t[15] = (M * F - c * x + f * I) * g, t) : null;
        }, e.SIMD.invert = function(t, a) {
            var r, n, e, o, u, l, i, s, M, c, f = SIMD.Float32x4.load(a, 0), h = SIMD.Float32x4.load(a, 4), d = SIMD.Float32x4.load(a, 8), v = SIMD.Float32x4.load(a, 12);
            return u = SIMD.Float32x4.shuffle(f, h, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(d, v, 0, 1, 4, 5), 
            r = SIMD.Float32x4.shuffle(u, n, 0, 2, 4, 6), n = SIMD.Float32x4.shuffle(n, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(f, h, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(d, v, 2, 3, 6, 7), 
            e = SIMD.Float32x4.shuffle(u, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(e, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.mul(n, u), 
            i = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), l), 
            i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), i), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(n, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), l), 
            M = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, u)), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            e = SIMD.Float32x4.swizzle(e, 2, 3, 0, 1), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), l), 
            s = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(e, u)), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(r, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), s), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), M), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), s), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(e, u)), 
            u = SIMD.Float32x4.mul(r, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(e, u)), 
            s = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            i = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), i), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(n, u)), 
            u = SIMD.Float32x4.mul(r, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), i), 
            M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(n, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), M), 
            c = SIMD.Float32x4.mul(r, l), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c), 
            c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c), u = SIMD.Float32x4.reciprocalApproximation(c), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(u, u))), 
            (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, l)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, i)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, s)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, M)), t) : null;
        }, e.invert = n.USE_SIMD ? e.SIMD.invert : e.scalar.invert, e.scalar.adjoint = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], l = a[5], i = a[6], s = a[7], M = a[8], c = a[9], f = a[10], h = a[11], d = a[12], v = a[13], m = a[14], S = a[15];
            return t[0] = l * (f * S - h * m) - c * (i * S - s * m) + v * (i * h - s * f), t[1] = -(n * (f * S - h * m) - c * (e * S - o * m) + v * (e * h - o * f)), 
            t[2] = n * (i * S - s * m) - l * (e * S - o * m) + v * (e * s - o * i), t[3] = -(n * (i * h - s * f) - l * (e * h - o * f) + c * (e * s - o * i)), 
            t[4] = -(u * (f * S - h * m) - M * (i * S - s * m) + d * (i * h - s * f)), t[5] = r * (f * S - h * m) - M * (e * S - o * m) + d * (e * h - o * f), 
            t[6] = -(r * (i * S - s * m) - u * (e * S - o * m) + d * (e * s - o * i)), t[7] = r * (i * h - s * f) - u * (e * h - o * f) + M * (e * s - o * i), 
            t[8] = u * (c * S - h * v) - M * (l * S - s * v) + d * (l * h - s * c), t[9] = -(r * (c * S - h * v) - M * (n * S - o * v) + d * (n * h - o * c)), 
            t[10] = r * (l * S - s * v) - u * (n * S - o * v) + d * (n * s - o * l), t[11] = -(r * (l * h - s * c) - u * (n * h - o * c) + M * (n * s - o * l)), 
            t[12] = -(u * (c * m - f * v) - M * (l * m - i * v) + d * (l * f - i * c)), t[13] = r * (c * m - f * v) - M * (n * m - e * v) + d * (n * f - e * c), 
            t[14] = -(r * (l * m - i * v) - u * (n * m - e * v) + d * (n * i - e * l)), t[15] = r * (l * f - i * c) - u * (n * f - e * c) + M * (n * i - e * l), 
            t;
        }, e.SIMD.adjoint = function(t, a) {
            var r, n, e, o, u, l, i, s, M, c, f, h, d, r = SIMD.Float32x4.load(a, 0), n = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), o = SIMD.Float32x4.load(a, 12);
            return M = SIMD.Float32x4.shuffle(r, n, 0, 1, 4, 5), l = SIMD.Float32x4.shuffle(e, o, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(M, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, M, 1, 3, 5, 7), 
            M = SIMD.Float32x4.shuffle(r, n, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(e, o, 2, 3, 6, 7), 
            i = SIMD.Float32x4.shuffle(M, s, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(s, M, 1, 3, 5, 7), 
            M = SIMD.Float32x4.mul(i, s), M = SIMD.Float32x4.swizzle(M, 1, 0, 3, 2), c = SIMD.Float32x4.mul(l, M), 
            f = SIMD.Float32x4.mul(u, M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, M), c), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, M), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), 
            M = SIMD.Float32x4.mul(l, i), M = SIMD.Float32x4.swizzle(M, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, M), c), 
            d = SIMD.Float32x4.mul(u, M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(s, M)), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, M), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), 
            M = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), s), M = SIMD.Float32x4.swizzle(M, 1, 0, 3, 2), 
            i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, M), c), 
            h = SIMD.Float32x4.mul(u, M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(i, M)), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, M), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), 
            M = SIMD.Float32x4.mul(u, l), M = SIMD.Float32x4.swizzle(M, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, M), h), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, M), d), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, M), h), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(i, M)), 
            M = SIMD.Float32x4.mul(u, s), M = SIMD.Float32x4.swizzle(M, 1, 0, 3, 2), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(i, M)), 
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, M), h), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            f = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, M), f), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(l, M)), 
            M = SIMD.Float32x4.mul(u, i), M = SIMD.Float32x4.swizzle(M, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, M), f), 
            d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(l, M)), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(s, M)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, M), d), 
            SIMD.Float32x4.store(t, 0, c), SIMD.Float32x4.store(t, 4, f), SIMD.Float32x4.store(t, 8, h), 
            SIMD.Float32x4.store(t, 12, d), t;
        }, e.adjoint = n.USE_SIMD ? e.SIMD.adjoint : e.scalar.adjoint, e.determinant = function(t) {
            var a = t[0], r = t[1], n = t[2], e = t[3], o = t[4], u = t[5], l = t[6], i = t[7], s = t[8], M = t[9], c = t[10], f = t[11], h = t[12], d = t[13], v = t[14], m = t[15], S = a * u - r * o, I = a * l - n * o, x = a * i - e * o, D = r * l - n * u, F = r * i - e * u, p = n * i - e * l, b = s * d - M * h, w = s * v - c * h, E = s * m - f * h, A = M * v - c * d, P = M * m - f * d, y = c * m - f * v;
            return S * y - I * P + x * A + D * E - F * w + p * b;
        }, e.SIMD.multiply = function(t, a, r) {
            var n = SIMD.Float32x4.load(a, 0), e = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), l = SIMD.Float32x4.load(r, 0), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, i);
            var s = SIMD.Float32x4.load(r, 4), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, M);
            var c = SIMD.Float32x4.load(r, 8), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, f);
            var h = SIMD.Float32x4.load(r, 12), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, d), t;
        }, e.scalar.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = a[6], M = a[7], c = a[8], f = a[9], h = a[10], d = a[11], v = a[12], m = a[13], S = a[14], I = a[15], x = r[0], D = r[1], F = r[2], p = r[3];
            return t[0] = x * n + D * l + F * c + p * v, t[1] = x * e + D * i + F * f + p * m, 
            t[2] = x * o + D * s + F * h + p * S, t[3] = x * u + D * M + F * d + p * I, x = r[4], 
            D = r[5], F = r[6], p = r[7], t[4] = x * n + D * l + F * c + p * v, t[5] = x * e + D * i + F * f + p * m, 
            t[6] = x * o + D * s + F * h + p * S, t[7] = x * u + D * M + F * d + p * I, x = r[8], 
            D = r[9], F = r[10], p = r[11], t[8] = x * n + D * l + F * c + p * v, t[9] = x * e + D * i + F * f + p * m, 
            t[10] = x * o + D * s + F * h + p * S, t[11] = x * u + D * M + F * d + p * I, x = r[12], 
            D = r[13], F = r[14], p = r[15], t[12] = x * n + D * l + F * c + p * v, t[13] = x * e + D * i + F * f + p * m, 
            t[14] = x * o + D * s + F * h + p * S, t[15] = x * u + D * M + F * d + p * I, t;
        }, e.multiply = n.USE_SIMD ? e.SIMD.multiply : e.scalar.multiply, e.mul = e.multiply, 
        e.scalar.translate = function(t, a, r) {
            var n, e, o, u, l, i, s, M, c, f, h, d, v = r[0], m = r[1], S = r[2];
            return a === t ? (t[12] = a[0] * v + a[4] * m + a[8] * S + a[12], t[13] = a[1] * v + a[5] * m + a[9] * S + a[13], 
            t[14] = a[2] * v + a[6] * m + a[10] * S + a[14], t[15] = a[3] * v + a[7] * m + a[11] * S + a[15]) : (n = a[0], 
            e = a[1], o = a[2], u = a[3], l = a[4], i = a[5], s = a[6], M = a[7], c = a[8], 
            f = a[9], h = a[10], d = a[11], t[0] = n, t[1] = e, t[2] = o, t[3] = u, t[4] = l, 
            t[5] = i, t[6] = s, t[7] = M, t[8] = c, t[9] = f, t[10] = h, t[11] = d, t[12] = n * v + l * m + c * S + a[12], 
            t[13] = e * v + i * m + f * S + a[13], t[14] = o * v + s * m + h * S + a[14], t[15] = u * v + M * m + d * S + a[15]), 
            t;
        }, e.SIMD.translate = function(t, a, r) {
            var n = SIMD.Float32x4.load(a, 0), e = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), l = SIMD.Float32x4(r[0], r[1], r[2], 0);
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11]), 
            n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(l, 0, 0, 0, 0)), e = SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(l, 1, 1, 1, 1)), 
            o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(l, 2, 2, 2, 2));
            var i = SIMD.Float32x4.add(n, SIMD.Float32x4.add(e, SIMD.Float32x4.add(o, u)));
            return SIMD.Float32x4.store(t, 12, i), t;
        }, e.translate = n.USE_SIMD ? e.SIMD.translate : e.scalar.translate, e.scalar.scale = function(t, a, r) {
            var n = r[0], e = r[1], o = r[2];
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * e, 
            t[5] = a[5] * e, t[6] = a[6] * e, t[7] = a[7] * e, t[8] = a[8] * o, t[9] = a[9] * o, 
            t[10] = a[10] * o, t[11] = a[11] * o, t[12] = a[12], t[13] = a[13], t[14] = a[14], 
            t[15] = a[15], t;
        }, e.SIMD.scale = function(t, a, r) {
            var n, e, o, u = SIMD.Float32x4(r[0], r[1], r[2], 0);
            return n = SIMD.Float32x4.load(a, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0))), 
            e = SIMD.Float32x4.load(a, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1))), 
            o = SIMD.Float32x4.load(a, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2))), 
            t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
        }, e.scale = n.USE_SIMD ? e.SIMD.scale : e.scalar.scale, e.rotate = function(t, a, r, e) {
            var o, u, l, i, s, M, c, f, h, d, v, m, S, I, x, D, F, p, b, w, E, A, P, y, z = e[0], g = e[1], O = e[2], L = Math.sqrt(z * z + g * g + O * O);
            return Math.abs(L) < n.EPSILON ? null : (L = 1 / L, z *= L, g *= L, O *= L, o = Math.sin(r), 
            u = Math.cos(r), l = 1 - u, i = a[0], s = a[1], M = a[2], c = a[3], f = a[4], h = a[5], 
            d = a[6], v = a[7], m = a[8], S = a[9], I = a[10], x = a[11], D = z * z * l + u, 
            F = g * z * l + O * o, p = O * z * l - g * o, b = z * g * l - O * o, w = g * g * l + u, 
            E = O * g * l + z * o, A = z * O * l + g * o, P = g * O * l - z * o, y = O * O * l + u, 
            t[0] = i * D + f * F + m * p, t[1] = s * D + h * F + S * p, t[2] = M * D + d * F + I * p, 
            t[3] = c * D + v * F + x * p, t[4] = i * b + f * w + m * E, t[5] = s * b + h * w + S * E, 
            t[6] = M * b + d * w + I * E, t[7] = c * b + v * w + x * E, t[8] = i * A + f * P + m * y, 
            t[9] = s * A + h * P + S * y, t[10] = M * A + d * P + I * y, t[11] = c * A + v * P + x * y, 
            a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t);
        }, e.scalar.rotateX = function(t, a, r) {
            var n = Math.sin(r), e = Math.cos(r), o = a[4], u = a[5], l = a[6], i = a[7], s = a[8], M = a[9], c = a[10], f = a[11];
            return a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[4] = o * e + s * n, t[5] = u * e + M * n, 
            t[6] = l * e + c * n, t[7] = i * e + f * n, t[8] = s * e - o * n, t[9] = M * e - u * n, 
            t[10] = c * e - l * n, t[11] = f * e - i * n, t;
        }, e.SIMD.rotateX = function(t, a, r) {
            var n = SIMD.Float32x4.splat(Math.sin(r)), e = SIMD.Float32x4.splat(Math.cos(r));
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var o = SIMD.Float32x4.load(a, 4), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, e), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, e), SIMD.Float32x4.mul(o, n))), 
            t;
        }, e.rotateX = n.USE_SIMD ? e.SIMD.rotateX : e.scalar.rotateX, e.scalar.rotateY = function(t, a, r) {
            var n = Math.sin(r), e = Math.cos(r), o = a[0], u = a[1], l = a[2], i = a[3], s = a[8], M = a[9], c = a[10], f = a[11];
            return a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = o * e - s * n, t[1] = u * e - M * n, 
            t[2] = l * e - c * n, t[3] = i * e - f * n, t[8] = o * n + s * e, t[9] = u * n + M * e, 
            t[10] = l * n + c * e, t[11] = i * n + f * e, t;
        }, e.SIMD.rotateY = function(t, a, r) {
            var n = SIMD.Float32x4.splat(Math.sin(r)), e = SIMD.Float32x4.splat(Math.cos(r));
            a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var o = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, e), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, e))), 
            t;
        }, e.rotateY = n.USE_SIMD ? e.SIMD.rotateY : e.scalar.rotateY, e.scalar.rotateZ = function(t, a, r) {
            var n = Math.sin(r), e = Math.cos(r), o = a[0], u = a[1], l = a[2], i = a[3], s = a[4], M = a[5], c = a[6], f = a[7];
            return a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = o * e + s * n, t[1] = u * e + M * n, 
            t[2] = l * e + c * n, t[3] = i * e + f * n, t[4] = s * e - o * n, t[5] = M * e - u * n, 
            t[6] = c * e - l * n, t[7] = f * e - i * n, t;
        }, e.SIMD.rotateZ = function(t, a, r) {
            var n = SIMD.Float32x4.splat(Math.sin(r)), e = SIMD.Float32x4.splat(Math.cos(r));
            a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]);
            var o = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 4);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, e), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, e), SIMD.Float32x4.mul(o, n))), 
            t;
        }, e.rotateZ = n.USE_SIMD ? e.SIMD.rotateZ : e.scalar.rotateZ, e.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], 
            t[15] = 1, t;
        }, e.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a[1], t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = a[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, 
            t[15] = 1, t;
        }, e.fromRotation = function(t, a, r) {
            var e, o, u, l = r[0], i = r[1], s = r[2], M = Math.sqrt(l * l + i * i + s * s);
            return Math.abs(M) < n.EPSILON ? null : (M = 1 / M, l *= M, i *= M, s *= M, e = Math.sin(a), 
            o = Math.cos(a), u = 1 - o, t[0] = l * l * u + o, t[1] = i * l * u + s * e, t[2] = s * l * u - i * e, 
            t[3] = 0, t[4] = l * i * u - s * e, t[5] = i * i * u + o, t[6] = s * i * u + l * e, 
            t[7] = 0, t[8] = l * s * u + i * e, t[9] = i * s * u - l * e, t[10] = s * s * u + o, 
            t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
        }, e.fromXRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, 
            t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.fromYRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.fromZRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.fromRotationTranslation = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = n + n, i = e + e, s = o + o, M = n * l, c = n * i, f = n * s, h = e * i, d = e * s, v = o * s, m = u * l, S = u * i, I = u * s;
            return t[0] = 1 - (h + v), t[1] = c + I, t[2] = f - S, t[3] = 0, t[4] = c - I, t[5] = 1 - (M + v), 
            t[6] = d + m, t[7] = 0, t[8] = f + S, t[9] = d - m, t[10] = 1 - (M + h), t[11] = 0, 
            t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
        }, e.getTranslation = function(t, a) {
            return t[0] = a[12], t[1] = a[13], t[2] = a[14], t;
        }, e.getRotation = function(t, a) {
            var r = a[0] + a[5] + a[10], n = 0;
            return r > 0 ? (n = 2 * Math.sqrt(r + 1), t[3] = .25 * n, t[0] = (a[6] - a[9]) / n, 
            t[1] = (a[8] - a[2]) / n, t[2] = (a[1] - a[4]) / n) : a[0] > a[5] & a[0] > a[10] ? (n = 2 * Math.sqrt(1 + a[0] - a[5] - a[10]), 
            t[3] = (a[6] - a[9]) / n, t[0] = .25 * n, t[1] = (a[1] + a[4]) / n, t[2] = (a[8] + a[2]) / n) : a[5] > a[10] ? (n = 2 * Math.sqrt(1 + a[5] - a[0] - a[10]), 
            t[3] = (a[8] - a[2]) / n, t[0] = (a[1] + a[4]) / n, t[1] = .25 * n, t[2] = (a[6] + a[9]) / n) : (n = 2 * Math.sqrt(1 + a[10] - a[0] - a[5]), 
            t[3] = (a[1] - a[4]) / n, t[0] = (a[8] + a[2]) / n, t[1] = (a[6] + a[9]) / n, t[2] = .25 * n), 
            t;
        }, e.fromRotationTranslationScale = function(t, a, r, n) {
            var e = a[0], o = a[1], u = a[2], l = a[3], i = e + e, s = o + o, M = u + u, c = e * i, f = e * s, h = e * M, d = o * s, v = o * M, m = u * M, S = l * i, I = l * s, x = l * M, D = n[0], F = n[1], p = n[2];
            return t[0] = (1 - (d + m)) * D, t[1] = (f + x) * D, t[2] = (h - I) * D, t[3] = 0, 
            t[4] = (f - x) * F, t[5] = (1 - (c + m)) * F, t[6] = (v + S) * F, t[7] = 0, t[8] = (h + I) * p, 
            t[9] = (v - S) * p, t[10] = (1 - (c + d)) * p, t[11] = 0, t[12] = r[0], t[13] = r[1], 
            t[14] = r[2], t[15] = 1, t;
        }, e.fromRotationTranslationScaleOrigin = function(t, a, r, n, e) {
            var o = a[0], u = a[1], l = a[2], i = a[3], s = o + o, M = u + u, c = l + l, f = o * s, h = o * M, d = o * c, v = u * M, m = u * c, S = l * c, I = i * s, x = i * M, D = i * c, F = n[0], p = n[1], b = n[2], w = e[0], E = e[1], A = e[2];
            return t[0] = (1 - (v + S)) * F, t[1] = (h + D) * F, t[2] = (d - x) * F, t[3] = 0, 
            t[4] = (h - D) * p, t[5] = (1 - (f + S)) * p, t[6] = (m + I) * p, t[7] = 0, t[8] = (d + x) * b, 
            t[9] = (m - I) * b, t[10] = (1 - (f + v)) * b, t[11] = 0, t[12] = r[0] + w - (t[0] * w + t[4] * E + t[8] * A), 
            t[13] = r[1] + E - (t[1] * w + t[5] * E + t[9] * A), t[14] = r[2] + A - (t[2] * w + t[6] * E + t[10] * A), 
            t[15] = 1, t;
        }, e.fromQuat = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = r + r, l = n + n, i = e + e, s = r * u, M = n * u, c = n * l, f = e * u, h = e * l, d = e * i, v = o * u, m = o * l, S = o * i;
            return t[0] = 1 - c - d, t[1] = M + S, t[2] = f - m, t[3] = 0, t[4] = M - S, t[5] = 1 - s - d, 
            t[6] = h + v, t[7] = 0, t[8] = f + m, t[9] = h - v, t[10] = 1 - s - c, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, e.frustum = function(t, a, r, n, e, o, u) {
            var l = 1 / (r - a), i = 1 / (e - n), s = 1 / (o - u);
            return t[0] = 2 * o * l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * i, 
            t[6] = 0, t[7] = 0, t[8] = (r + a) * l, t[9] = (e + n) * i, t[10] = (u + o) * s, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * o * 2 * s, t[15] = 0, t;
        }, e.perspective = function(t, a, r, n, e) {
            var o = 1 / Math.tan(a / 2), u = 1 / (n - e);
            return t[0] = o / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (e + n) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * e * n * u, t[15] = 0, t;
        }, e.perspectiveFromFieldOfView = function(t, a, r, n) {
            var e = Math.tan(a.upDegrees * Math.PI / 180), o = Math.tan(a.downDegrees * Math.PI / 180), u = Math.tan(a.leftDegrees * Math.PI / 180), l = Math.tan(a.rightDegrees * Math.PI / 180), i = 2 / (u + l), s = 2 / (e + o);
            return t[0] = i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, 
            t[8] = -((u - l) * i * .5), t[9] = (e - o) * s * .5, t[10] = n / (r - n), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = n * r / (r - n), t[15] = 0, t;
        }, e.ortho = function(t, a, r, n, e, o, u) {
            var l = 1 / (a - r), i = 1 / (n - e), s = 1 / (o - u);
            return t[0] = -2 * l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * i, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * s, t[11] = 0, t[12] = (a + r) * l, t[13] = (e + n) * i, 
            t[14] = (u + o) * s, t[15] = 1, t;
        }, e.lookAt = function(t, a, r, o) {
            var u, l, i, s, M, c, f, h, d, v, m = a[0], S = a[1], I = a[2], x = o[0], D = o[1], F = o[2], p = r[0], b = r[1], w = r[2];
            return Math.abs(m - p) < n.EPSILON && Math.abs(S - b) < n.EPSILON && Math.abs(I - w) < n.EPSILON ? e.identity(t) : (f = m - p, 
            h = S - b, d = I - w, v = 1 / Math.sqrt(f * f + h * h + d * d), f *= v, h *= v, 
            d *= v, u = D * d - F * h, l = F * f - x * d, i = x * h - D * f, v = Math.sqrt(u * u + l * l + i * i), 
            v ? (v = 1 / v, u *= v, l *= v, i *= v) : (u = 0, l = 0, i = 0), s = h * i - d * l, 
            M = d * u - f * i, c = f * l - h * u, v = Math.sqrt(s * s + M * M + c * c), v ? (v = 1 / v, 
            s *= v, M *= v, c *= v) : (s = 0, M = 0, c = 0), t[0] = u, t[1] = s, t[2] = f, t[3] = 0, 
            t[4] = l, t[5] = M, t[6] = h, t[7] = 0, t[8] = i, t[9] = c, t[10] = d, t[11] = 0, 
            t[12] = -(u * m + l * S + i * I), t[13] = -(s * m + M * S + c * I), t[14] = -(f * m + h * S + d * I), 
            t[15] = 1, t);
        }, e.str = function(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
        }, e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
        }, e.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t[4] = a[4] + r[4], t[5] = a[5] + r[5], t[6] = a[6] + r[6], t[7] = a[7] + r[7], 
            t[8] = a[8] + r[8], t[9] = a[9] + r[9], t[10] = a[10] + r[10], t[11] = a[11] + r[11], 
            t[12] = a[12] + r[12], t[13] = a[13] + r[13], t[14] = a[14] + r[14], t[15] = a[15] + r[15], 
            t;
        }, e.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t[4] = a[4] - r[4], t[5] = a[5] - r[5], t[6] = a[6] - r[6], t[7] = a[7] - r[7], 
            t[8] = a[8] - r[8], t[9] = a[9] - r[9], t[10] = a[10] - r[10], t[11] = a[11] - r[11], 
            t[12] = a[12] - r[12], t[13] = a[13] - r[13], t[14] = a[14] - r[14], t[15] = a[15] - r[15], 
            t;
        }, e.sub = e.subtract, e.multiplyScalar = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * r, 
            t[5] = a[5] * r, t[6] = a[6] * r, t[7] = a[7] * r, t[8] = a[8] * r, t[9] = a[9] * r, 
            t[10] = a[10] * r, t[11] = a[11] * r, t[12] = a[12] * r, t[13] = a[13] * r, t[14] = a[14] * r, 
            t[15] = a[15] * r, t;
        }, e.multiplyScalarAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t[4] = a[4] + r[4] * n, t[5] = a[5] + r[5] * n, t[6] = a[6] + r[6] * n, t[7] = a[7] + r[7] * n, 
            t[8] = a[8] + r[8] * n, t[9] = a[9] + r[9] * n, t[10] = a[10] + r[10] * n, t[11] = a[11] + r[11] * n, 
            t[12] = a[12] + r[12] * n, t[13] = a[13] + r[13] * n, t[14] = a[14] + r[14] * n, 
            t[15] = a[15] + r[15] * n, t;
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8] && t[9] === a[9] && t[10] === a[10] && t[11] === a[11] && t[12] === a[12] && t[13] === a[13] && t[14] === a[14] && t[15] === a[15];
        }, e.equals = function(t, a) {
            var r = t[0], e = t[1], o = t[2], u = t[3], l = t[4], i = t[5], s = t[6], M = t[7], c = t[8], f = t[9], h = t[10], d = t[11], v = t[12], m = t[13], S = t[14], I = t[15], x = a[0], D = a[1], F = a[2], p = a[3], b = a[4], w = a[5], E = a[6], A = a[7], P = a[8], y = a[9], z = a[10], g = a[11], O = a[12], L = a[13], R = a[14], _ = a[15];
            return Math.abs(r - x) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(x)) && Math.abs(e - D) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(D)) && Math.abs(o - F) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(F)) && Math.abs(u - p) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(p)) && Math.abs(l - b) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(b)) && Math.abs(i - w) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(w)) && Math.abs(s - E) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(M - A) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(A)) && Math.abs(c - P) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(P)) && Math.abs(f - y) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(y)) && Math.abs(h - z) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(z)) && Math.abs(d - g) <= n.EPSILON * Math.max(1, Math.abs(d), Math.abs(g)) && Math.abs(v - O) <= n.EPSILON * Math.max(1, Math.abs(v), Math.abs(O)) && Math.abs(m - L) <= n.EPSILON * Math.max(1, Math.abs(m), Math.abs(L)) && Math.abs(S - R) <= n.EPSILON * Math.max(1, Math.abs(S), Math.abs(R)) && Math.abs(I - _) <= n.EPSILON * Math.max(1, Math.abs(I), Math.abs(_));
        }, t.exports = e;
    }, function(t, a, r) {
        var n = r(7), e = r(10), o = r(13), u = r(14), l = {};
        l.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, l.rotationTo = function() {
            var t = o.create(), a = o.fromValues(1, 0, 0), r = o.fromValues(0, 1, 0);
            return function(n, e, u) {
                var i = o.dot(e, u);
                return i < -.999999 ? (o.cross(t, a, e), o.length(t) < 1e-6 && o.cross(t, r, e), 
                o.normalize(t, t), l.setAxisAngle(n, t, Math.PI), n) : i > .999999 ? (n[0] = 0, 
                n[1] = 0, n[2] = 0, n[3] = 1, n) : (o.cross(t, e, u), n[0] = t[0], n[1] = t[1], 
                n[2] = t[2], n[3] = 1 + i, l.normalize(n, n));
            };
        }(), l.setAxes = function() {
            var t = e.create();
            return function(a, r, n, e) {
                return t[0] = n[0], t[3] = n[1], t[6] = n[2], t[1] = e[0], t[4] = e[1], t[7] = e[2], 
                t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], l.normalize(a, l.fromMat3(a, t));
            };
        }(), l.clone = u.clone, l.fromValues = u.fromValues, l.copy = u.copy, l.set = u.set, 
        l.identity = function(t) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, l.setAxisAngle = function(t, a, r) {
            r = .5 * r;
            var n = Math.sin(r);
            return t[0] = n * a[0], t[1] = n * a[1], t[2] = n * a[2], t[3] = Math.cos(r), t;
        }, l.getAxisAngle = function(t, a) {
            var r = 2 * Math.acos(a[3]), n = Math.sin(r / 2);
            return 0 != n ? (t[0] = a[0] / n, t[1] = a[1] / n, t[2] = a[2] / n) : (t[0] = 1, 
            t[1] = 0, t[2] = 0), r;
        }, l.add = u.add, l.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], l = r[0], i = r[1], s = r[2], M = r[3];
            return t[0] = n * M + u * l + e * s - o * i, t[1] = e * M + u * i + o * l - n * s, 
            t[2] = o * M + u * s + n * i - e * l, t[3] = u * M - n * l - e * i - o * s, t;
        }, l.mul = l.multiply, l.scale = u.scale, l.rotateX = function(t, a, r) {
            r *= .5;
            var n = a[0], e = a[1], o = a[2], u = a[3], l = Math.sin(r), i = Math.cos(r);
            return t[0] = n * i + u * l, t[1] = e * i + o * l, t[2] = o * i - e * l, t[3] = u * i - n * l, 
            t;
        }, l.rotateY = function(t, a, r) {
            r *= .5;
            var n = a[0], e = a[1], o = a[2], u = a[3], l = Math.sin(r), i = Math.cos(r);
            return t[0] = n * i - o * l, t[1] = e * i + u * l, t[2] = o * i + n * l, t[3] = u * i - e * l, 
            t;
        }, l.rotateZ = function(t, a, r) {
            r *= .5;
            var n = a[0], e = a[1], o = a[2], u = a[3], l = Math.sin(r), i = Math.cos(r);
            return t[0] = n * i + e * l, t[1] = e * i - n * l, t[2] = o * i + u * l, t[3] = u * i - o * l, 
            t;
        }, l.calculateW = function(t, a) {
            var r = a[0], n = a[1], e = a[2];
            return t[0] = r, t[1] = n, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - r * r - n * n - e * e)), 
            t;
        }, l.dot = u.dot, l.lerp = u.lerp, l.slerp = function(t, a, r, n) {
            var e, o, u, l, i, s = a[0], M = a[1], c = a[2], f = a[3], h = r[0], d = r[1], v = r[2], m = r[3];
            return o = s * h + M * d + c * v + f * m, o < 0 && (o = -o, h = -h, d = -d, v = -v, 
            m = -m), 1 - o > 1e-6 ? (e = Math.acos(o), u = Math.sin(e), l = Math.sin((1 - n) * e) / u, 
            i = Math.sin(n * e) / u) : (l = 1 - n, i = n), t[0] = l * s + i * h, t[1] = l * M + i * d, 
            t[2] = l * c + i * v, t[3] = l * f + i * m, t;
        }, l.sqlerp = function() {
            var t = l.create(), a = l.create();
            return function(r, n, e, o, u, i) {
                return l.slerp(t, n, u, i), l.slerp(a, e, o, i), l.slerp(r, t, a, 2 * i * (1 - i)), 
                r;
            };
        }(), l.invert = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = r * r + n * n + e * e + o * o, l = u ? 1 / u : 0;
            return t[0] = -r * l, t[1] = -n * l, t[2] = -e * l, t[3] = o * l, t;
        }, l.conjugate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = a[3], t;
        }, l.length = u.length, l.len = l.length, l.squaredLength = u.squaredLength, l.sqrLen = l.squaredLength, 
        l.normalize = u.normalize, l.fromMat3 = function(t, a) {
            var r, n = a[0] + a[4] + a[8];
            if (n > 0) r = Math.sqrt(n + 1), t[3] = .5 * r, r = .5 / r, t[0] = (a[5] - a[7]) * r, 
            t[1] = (a[6] - a[2]) * r, t[2] = (a[1] - a[3]) * r; else {
                var e = 0;
                a[4] > a[0] && (e = 1), a[8] > a[3 * e + e] && (e = 2);
                var o = (e + 1) % 3, u = (e + 2) % 3;
                r = Math.sqrt(a[3 * e + e] - a[3 * o + o] - a[3 * u + u] + 1), t[e] = .5 * r, r = .5 / r, 
                t[3] = (a[3 * o + u] - a[3 * u + o]) * r, t[o] = (a[3 * o + e] + a[3 * e + o]) * r, 
                t[u] = (a[3 * u + e] + a[3 * e + u]) * r;
            }
            return t;
        }, l.str = function(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, l.exactEquals = u.exactEquals, l.equals = u.equals, t.exports = l;
    }, function(t, a, r) {
        var n = r(7), e = {};
        e.create = function() {
            var t = new n.ARRAY_TYPE(3);
            return t[0] = 0, t[1] = 0, t[2] = 0, t;
        }, e.clone = function(t) {
            var a = new n.ARRAY_TYPE(3);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a;
        }, e.fromValues = function(t, a, r) {
            var e = new n.ARRAY_TYPE(3);
            return e[0] = t, e[1] = a, e[2] = r, e;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t;
        }, e.set = function(t, a, r, n) {
            return t[0] = a, t[1] = r, t[2] = n, t;
        }, e.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t;
        }, e.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t;
        }, e.sub = e.subtract, e.multiply = function(t, a, r) {
            return t[0] = a[0] * r[0], t[1] = a[1] * r[1], t[2] = a[2] * r[2], t;
        }, e.mul = e.multiply, e.divide = function(t, a, r) {
            return t[0] = a[0] / r[0], t[1] = a[1] / r[1], t[2] = a[2] / r[2], t;
        }, e.div = e.divide, e.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t;
        }, e.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), 
            t;
        }, e.min = function(t, a, r) {
            return t[0] = Math.min(a[0], r[0]), t[1] = Math.min(a[1], r[1]), t[2] = Math.min(a[2], r[2]), 
            t;
        }, e.max = function(t, a, r) {
            return t[0] = Math.max(a[0], r[0]), t[1] = Math.max(a[1], r[1]), t[2] = Math.max(a[2], r[2]), 
            t;
        }, e.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), 
            t;
        }, e.scale = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t;
        }, e.scaleAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t;
        }, e.distance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1], e = a[2] - t[2];
            return Math.sqrt(r * r + n * n + e * e);
        }, e.dist = e.distance, e.squaredDistance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1], e = a[2] - t[2];
            return r * r + n * n + e * e;
        }, e.sqrDist = e.squaredDistance, e.length = function(t) {
            var a = t[0], r = t[1], n = t[2];
            return Math.sqrt(a * a + r * r + n * n);
        }, e.len = e.length, e.squaredLength = function(t) {
            var a = t[0], r = t[1], n = t[2];
            return a * a + r * r + n * n;
        }, e.sqrLen = e.squaredLength, e.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t;
        }, e.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t;
        }, e.normalize = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = r * r + n * n + e * e;
            return o > 0 && (o = 1 / Math.sqrt(o), t[0] = a[0] * o, t[1] = a[1] * o, t[2] = a[2] * o), 
            t;
        }, e.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1] + t[2] * a[2];
        }, e.cross = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = r[0], l = r[1], i = r[2];
            return t[0] = e * i - o * l, t[1] = o * u - n * i, t[2] = n * l - e * u, t;
        }, e.lerp = function(t, a, r, n) {
            var e = a[0], o = a[1], u = a[2];
            return t[0] = e + n * (r[0] - e), t[1] = o + n * (r[1] - o), t[2] = u + n * (r[2] - u), 
            t;
        }, e.hermite = function(t, a, r, n, e, o) {
            var u = o * o, l = u * (2 * o - 3) + 1, i = u * (o - 2) + o, s = u * (o - 1), M = u * (3 - 2 * o);
            return t[0] = a[0] * l + r[0] * i + n[0] * s + e[0] * M, t[1] = a[1] * l + r[1] * i + n[1] * s + e[1] * M, 
            t[2] = a[2] * l + r[2] * i + n[2] * s + e[2] * M, t;
        }, e.bezier = function(t, a, r, n, e, o) {
            var u = 1 - o, l = u * u, i = o * o, s = l * u, M = 3 * o * l, c = 3 * i * u, f = i * o;
            return t[0] = a[0] * s + r[0] * M + n[0] * c + e[0] * f, t[1] = a[1] * s + r[1] * M + n[1] * c + e[1] * f, 
            t[2] = a[2] * s + r[2] * M + n[2] * c + e[2] * f, t;
        }, e.random = function(t, a) {
            a = a || 1;
            var r = 2 * n.RANDOM() * Math.PI, e = 2 * n.RANDOM() - 1, o = Math.sqrt(1 - e * e) * a;
            return t[0] = Math.cos(r) * o, t[1] = Math.sin(r) * o, t[2] = e * a, t;
        }, e.transformMat4 = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = r[3] * n + r[7] * e + r[11] * o + r[15];
            return u = u || 1, t[0] = (r[0] * n + r[4] * e + r[8] * o + r[12]) / u, t[1] = (r[1] * n + r[5] * e + r[9] * o + r[13]) / u, 
            t[2] = (r[2] * n + r[6] * e + r[10] * o + r[14]) / u, t;
        }, e.transformMat3 = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2];
            return t[0] = n * r[0] + e * r[3] + o * r[6], t[1] = n * r[1] + e * r[4] + o * r[7], 
            t[2] = n * r[2] + e * r[5] + o * r[8], t;
        }, e.transformQuat = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = r[0], l = r[1], i = r[2], s = r[3], M = s * n + l * o - i * e, c = s * e + i * n - u * o, f = s * o + u * e - l * n, h = -u * n - l * e - i * o;
            return t[0] = M * s + h * -u + c * -i - f * -l, t[1] = c * s + h * -l + f * -u - M * -i, 
            t[2] = f * s + h * -i + M * -l - c * -u, t;
        }, e.rotateX = function(t, a, r, n) {
            var e = [], o = [];
            return e[0] = a[0] - r[0], e[1] = a[1] - r[1], e[2] = a[2] - r[2], o[0] = e[0], 
            o[1] = e[1] * Math.cos(n) - e[2] * Math.sin(n), o[2] = e[1] * Math.sin(n) + e[2] * Math.cos(n), 
            t[0] = o[0] + r[0], t[1] = o[1] + r[1], t[2] = o[2] + r[2], t;
        }, e.rotateY = function(t, a, r, n) {
            var e = [], o = [];
            return e[0] = a[0] - r[0], e[1] = a[1] - r[1], e[2] = a[2] - r[2], o[0] = e[2] * Math.sin(n) + e[0] * Math.cos(n), 
            o[1] = e[1], o[2] = e[2] * Math.cos(n) - e[0] * Math.sin(n), t[0] = o[0] + r[0], 
            t[1] = o[1] + r[1], t[2] = o[2] + r[2], t;
        }, e.rotateZ = function(t, a, r, n) {
            var e = [], o = [];
            return e[0] = a[0] - r[0], e[1] = a[1] - r[1], e[2] = a[2] - r[2], o[0] = e[0] * Math.cos(n) - e[1] * Math.sin(n), 
            o[1] = e[0] * Math.sin(n) + e[1] * Math.cos(n), o[2] = e[2], t[0] = o[0] + r[0], 
            t[1] = o[1] + r[1], t[2] = o[2] + r[2], t;
        }, e.forEach = function() {
            var t = e.create();
            return function(a, r, n, e, o, u) {
                var l, i;
                for (r || (r = 3), n || (n = 0), i = e ? Math.min(e * r + n, a.length) : a.length, 
                l = n; l < i; l += r) t[0] = a[l], t[1] = a[l + 1], t[2] = a[l + 2], o(t, t, u), 
                a[l] = t[0], a[l + 1] = t[1], a[l + 2] = t[2];
                return a;
            };
        }(), e.angle = function(t, a) {
            var r = e.fromValues(t[0], t[1], t[2]), n = e.fromValues(a[0], a[1], a[2]);
            e.normalize(r, r), e.normalize(n, n);
            var o = e.dot(r, n);
            return o > 1 ? 0 : Math.acos(o);
        }, e.str = function(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2];
        }, e.equals = function(t, a) {
            var r = t[0], e = t[1], o = t[2], u = a[0], l = a[1], i = a[2];
            return Math.abs(r - u) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(e - l) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - i) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(i));
        }, t.exports = e;
    }, function(t, a, r) {
        var n = r(7), e = {};
        e.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
        }, e.clone = function(t) {
            var a = new n.ARRAY_TYPE(4);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a;
        }, e.fromValues = function(t, a, r, e) {
            var o = new n.ARRAY_TYPE(4);
            return o[0] = t, o[1] = a, o[2] = r, o[3] = e, o;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t;
        }, e.set = function(t, a, r, n, e) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = e, t;
        }, e.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t;
        }, e.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t;
        }, e.sub = e.subtract, e.multiply = function(t, a, r) {
            return t[0] = a[0] * r[0], t[1] = a[1] * r[1], t[2] = a[2] * r[2], t[3] = a[3] * r[3], 
            t;
        }, e.mul = e.multiply, e.divide = function(t, a, r) {
            return t[0] = a[0] / r[0], t[1] = a[1] / r[1], t[2] = a[2] / r[2], t[3] = a[3] / r[3], 
            t;
        }, e.div = e.divide, e.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t[3] = Math.ceil(a[3]), 
            t;
        }, e.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), 
            t[3] = Math.floor(a[3]), t;
        }, e.min = function(t, a, r) {
            return t[0] = Math.min(a[0], r[0]), t[1] = Math.min(a[1], r[1]), t[2] = Math.min(a[2], r[2]), 
            t[3] = Math.min(a[3], r[3]), t;
        }, e.max = function(t, a, r) {
            return t[0] = Math.max(a[0], r[0]), t[1] = Math.max(a[1], r[1]), t[2] = Math.max(a[2], r[2]), 
            t[3] = Math.max(a[3], r[3]), t;
        }, e.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), 
            t[3] = Math.round(a[3]), t;
        }, e.scale = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t;
        }, e.scaleAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t;
        }, e.distance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1], e = a[2] - t[2], o = a[3] - t[3];
            return Math.sqrt(r * r + n * n + e * e + o * o);
        }, e.dist = e.distance, e.squaredDistance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1], e = a[2] - t[2], o = a[3] - t[3];
            return r * r + n * n + e * e + o * o;
        }, e.sqrDist = e.squaredDistance, e.length = function(t) {
            var a = t[0], r = t[1], n = t[2], e = t[3];
            return Math.sqrt(a * a + r * r + n * n + e * e);
        }, e.len = e.length, e.squaredLength = function(t) {
            var a = t[0], r = t[1], n = t[2], e = t[3];
            return a * a + r * r + n * n + e * e;
        }, e.sqrLen = e.squaredLength, e.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = -a[3], t;
        }, e.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t[3] = 1 / a[3], t;
        }, e.normalize = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = r * r + n * n + e * e + o * o;
            return u > 0 && (u = 1 / Math.sqrt(u), t[0] = r * u, t[1] = n * u, t[2] = e * u, 
            t[3] = o * u), t;
        }, e.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1] + t[2] * a[2] + t[3] * a[3];
        }, e.lerp = function(t, a, r, n) {
            var e = a[0], o = a[1], u = a[2], l = a[3];
            return t[0] = e + n * (r[0] - e), t[1] = o + n * (r[1] - o), t[2] = u + n * (r[2] - u), 
            t[3] = l + n * (r[3] - l), t;
        }, e.random = function(t, a) {
            return a = a || 1, t[0] = n.RANDOM(), t[1] = n.RANDOM(), t[2] = n.RANDOM(), t[3] = n.RANDOM(), 
            e.normalize(t, t), e.scale(t, t, a), t;
        }, e.transformMat4 = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3];
            return t[0] = r[0] * n + r[4] * e + r[8] * o + r[12] * u, t[1] = r[1] * n + r[5] * e + r[9] * o + r[13] * u, 
            t[2] = r[2] * n + r[6] * e + r[10] * o + r[14] * u, t[3] = r[3] * n + r[7] * e + r[11] * o + r[15] * u, 
            t;
        }, e.transformQuat = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = r[0], l = r[1], i = r[2], s = r[3], M = s * n + l * o - i * e, c = s * e + i * n - u * o, f = s * o + u * e - l * n, h = -u * n - l * e - i * o;
            return t[0] = M * s + h * -u + c * -i - f * -l, t[1] = c * s + h * -l + f * -u - M * -i, 
            t[2] = f * s + h * -i + M * -l - c * -u, t[3] = a[3], t;
        }, e.forEach = function() {
            var t = e.create();
            return function(a, r, n, e, o, u) {
                var l, i;
                for (r || (r = 4), n || (n = 0), i = e ? Math.min(e * r + n, a.length) : a.length, 
                l = n; l < i; l += r) t[0] = a[l], t[1] = a[l + 1], t[2] = a[l + 2], t[3] = a[l + 3], 
                o(t, t, u), a[l] = t[0], a[l + 1] = t[1], a[l + 2] = t[2], a[l + 3] = t[3];
                return a;
            };
        }(), e.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, e.equals = function(t, a) {
            var r = t[0], e = t[1], o = t[2], u = t[3], l = a[0], i = a[1], s = a[2], M = a[3];
            return Math.abs(r - l) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(o - s) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - M) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(M));
        }, t.exports = e;
    }, function(t, a, r) {
        var n = r(7), e = {};
        e.create = function() {
            var t = new n.ARRAY_TYPE(2);
            return t[0] = 0, t[1] = 0, t;
        }, e.clone = function(t) {
            var a = new n.ARRAY_TYPE(2);
            return a[0] = t[0], a[1] = t[1], a;
        }, e.fromValues = function(t, a) {
            var r = new n.ARRAY_TYPE(2);
            return r[0] = t, r[1] = a, r;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t;
        }, e.set = function(t, a, r) {
            return t[0] = a, t[1] = r, t;
        }, e.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t;
        }, e.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t;
        }, e.sub = e.subtract, e.multiply = function(t, a, r) {
            return t[0] = a[0] * r[0], t[1] = a[1] * r[1], t;
        }, e.mul = e.multiply, e.divide = function(t, a, r) {
            return t[0] = a[0] / r[0], t[1] = a[1] / r[1], t;
        }, e.div = e.divide, e.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t;
        }, e.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t;
        }, e.min = function(t, a, r) {
            return t[0] = Math.min(a[0], r[0]), t[1] = Math.min(a[1], r[1]), t;
        }, e.max = function(t, a, r) {
            return t[0] = Math.max(a[0], r[0]), t[1] = Math.max(a[1], r[1]), t;
        }, e.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t;
        }, e.scale = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t;
        }, e.scaleAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t;
        }, e.distance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1];
            return Math.sqrt(r * r + n * n);
        }, e.dist = e.distance, e.squaredDistance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1];
            return r * r + n * n;
        }, e.sqrDist = e.squaredDistance, e.length = function(t) {
            var a = t[0], r = t[1];
            return Math.sqrt(a * a + r * r);
        }, e.len = e.length, e.squaredLength = function(t) {
            var a = t[0], r = t[1];
            return a * a + r * r;
        }, e.sqrLen = e.squaredLength, e.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t;
        }, e.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t;
        }, e.normalize = function(t, a) {
            var r = a[0], n = a[1], e = r * r + n * n;
            return e > 0 && (e = 1 / Math.sqrt(e), t[0] = a[0] * e, t[1] = a[1] * e), t;
        }, e.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1];
        }, e.cross = function(t, a, r) {
            var n = a[0] * r[1] - a[1] * r[0];
            return t[0] = t[1] = 0, t[2] = n, t;
        }, e.lerp = function(t, a, r, n) {
            var e = a[0], o = a[1];
            return t[0] = e + n * (r[0] - e), t[1] = o + n * (r[1] - o), t;
        }, e.random = function(t, a) {
            a = a || 1;
            var r = 2 * n.RANDOM() * Math.PI;
            return t[0] = Math.cos(r) * a, t[1] = Math.sin(r) * a, t;
        }, e.transformMat2 = function(t, a, r) {
            var n = a[0], e = a[1];
            return t[0] = r[0] * n + r[2] * e, t[1] = r[1] * n + r[3] * e, t;
        }, e.transformMat2d = function(t, a, r) {
            var n = a[0], e = a[1];
            return t[0] = r[0] * n + r[2] * e + r[4], t[1] = r[1] * n + r[3] * e + r[5], t;
        }, e.transformMat3 = function(t, a, r) {
            var n = a[0], e = a[1];
            return t[0] = r[0] * n + r[3] * e + r[6], t[1] = r[1] * n + r[4] * e + r[7], t;
        }, e.transformMat4 = function(t, a, r) {
            var n = a[0], e = a[1];
            return t[0] = r[0] * n + r[4] * e + r[12], t[1] = r[1] * n + r[5] * e + r[13], t;
        }, e.forEach = function() {
            var t = e.create();
            return function(a, r, n, e, o, u) {
                var l, i;
                for (r || (r = 2), n || (n = 0), i = e ? Math.min(e * r + n, a.length) : a.length, 
                l = n; l < i; l += r) t[0] = a[l], t[1] = a[l + 1], o(t, t, u), a[l] = t[0], a[l + 1] = t[1];
                return a;
            };
        }(), e.str = function(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")";
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1];
        }, e.equals = function(t, a) {
            var r = t[0], e = t[1], o = a[0], u = a[1];
            return Math.abs(r - o) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(e - u) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(u));
        }, t.exports = e;
    }, function(t, a, r) {
        "use strict";
        function n(t) {
            if (t && t.__esModule) return t;
            var a = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
            return a["default"] = t, a;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.fvec3 = void 0;
        var e = r(6), o = n(e), u = o.vec3;
        a.fvec3 = {
            add: function(t, a) {
                return u.add(u.create(), t, a);
            },
            subtract: function(t, a) {
                return u.subtract(u.create(), t, a);
            },
            sub: function(t, a) {
                return u.sub(u.create(), t, a);
            },
            multiply: function(t, a) {
                return u.multiply(u.create(), t, a);
            },
            mul: function(t, a) {
                return u.mul(u.create(), t, a);
            },
            divide: function(t, a) {
                return u.divide(u.create(), t, a);
            },
            div: function(t, a) {
                return u.div(u.create(), t, a);
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
            min: function(t, a) {
                return u.min(u.create(), t, a);
            },
            max: function(t, a) {
                return u.max(u.create(), t, a);
            },
            scale: function(t, a) {
                return u.scale(u.create(), t, a);
            },
            scaleAndAdd: function(t, a, r) {
                return u.scaleAndAdd(u.create(), t, a, r);
            },
            inverse: function(t) {
                return u.inverse(u.create(), t);
            },
            normalize: function(t) {
                return u.normalize(u.create(), t);
            },
            cross: function(t, a) {
                return u.cross(u.create(), t, a);
            }
        };
    }, function(t, a, r) {
        "use strict";
        function n(t, a) {
            var r = -i.vec3.dot(t, a);
            return i.vec4.fromValues(t[0], t[1], t[2], r);
        }
        function e(t, a, r) {
            return n(o(t, a, r), t);
        }
        function o(t, a, r) {
            var n = i.fvec3.cross(i.fvec3.sub(r, a), i.fvec3.sub(t, a));
            return i.vec3.normalize(n, n);
        }
        function u(t) {
            var a = l(t, 4), r = a[0], n = a[1], e = a[2], o = a[3];
            return i.mat4.fromValues(1 - 2 * r * r, -2 * r * n, -2 * r * e, -2 * r * o, -2 * n * r, 1 - 2 * n * n, -2 * n * e, -2 * n * o, -2 * e * r, -2 * e * n, 1 - 2 * e * e, -2 * e * o, 0, 0, 0, 1);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = function() {
            function t(t, a) {
                var r = [], n = !0, e = !1, o = void 0;
                try {
                    for (var u, l = t[Symbol.iterator](); !(n = (u = l.next()).done) && (r.push(u.value), 
                    !a || r.length !== a); n = !0) ;
                } catch (i) {
                    e = !0, o = i;
                } finally {
                    try {
                        !n && l["return"] && l["return"]();
                    } finally {
                        if (e) throw o;
                    }
                }
                return r;
            }
            return function(a, r) {
                if (Array.isArray(a)) return a;
                if (Symbol.iterator in Object(a)) return t(a, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        a.planeFromNormalAndCoplanarPoint = n, a.planeFromThreeCoplanarPoints = e, a.normalFromThreeCoplanarPoints = o, 
        a.mirrorMatrixFromPlane = u;
        var i = r(5);
    }, function(t, a, r) {
        "use strict";
        function n() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], a = Object.assign({
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
            }, t), r = {
                view: o.mat4.create(),
                perspective: o.mat4.perspective(o.mat4.create(), a.fovy, a.aspect, a.near, a.far),
                rotationX: o.mat4.create(),
                rotationY: o.mat4.create(),
                position: [ 0, 0, 0 ]
            };
            return {
                props: a,
                state: r
            };
        }
        function e(t) {
            var a = t.props, r = t.state, n = r.view, e = r.perspective, u = r.rotationX, l = r.rotationY, i = r.position;
            a.needsUpdatePerspective && (a.needsUpdatePerspective = !1, o.mat4.perspective(e, a.fovy, a.aspect, a.near, a.far));
            var s = !1;
            if (a.rotateX && (o.mat4.rotateX(u, u, a.rotateX), a.rotateX = 0, s = !0), a.rotateY && (o.mat4.rotateY(l, l, a.rotateY), 
            a.rotateY = 0, s = !0), a.moveForward) {
                var M = [ l[8], l[9], l[10] ];
                o.vec3.add(i, i, o.vec3.scale(M, M, -a.moveForward)), a.moveForward = 0, s = !0;
            }
            if (a.moveLeft) {
                var c = [ l[0], l[1], l[2] ];
                o.vec3.add(i, i, o.vec3.scale(c, c, -a.moveLeft)), a.moveLeft = 0, s = !0;
            }
            if (a.moveUp) {
                var f = [ l[4], l[5], l[6] ];
                o.vec3.add(i, i, o.vec3.scale(f, f, a.moveUp)), a.moveUp = 0, s = !0;
            }
            s && (o.mat4.fromTranslation(n, i), o.mat4.multiply(n, n, l), o.mat4.multiply(n, n, u), 
            o.mat4.invert(n, n));
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.create = n, a.update = e;
        var o = r(5);
    }, function(t, a, r) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.camera = void 0;
        var n = r(5), e = a.camera = {
            "props.fovy": {
                val: .6 * Math.PI
            },
            "props.aspect": {
                val: window.innerWidth / window.innerHeight
            },
            "props.near": {
                val: .1
            },
            "props.far": {
                val: 1e3
            },
            "props.rotationX": {
                val: 0
            },
            "props.rotationY": {
                val: 0
            },
            "props.moveForward": {
                val: 0,
                isEvent: !0
            },
            "props.moveLeft": {
                val: 0,
                isEvent: !0
            },
            "props.moveUp": {
                val: 0,
                isEvent: !0
            },
            perspective: {
                val: n.mat4.create(),
                stream: {
                    "with": {
                        fovy: "H #props.fovy",
                        aspect: "H #props.aspect",
                        near: "H #props.near",
                        far: "H #props.far",
                        mat: "A"
                    },
                    "do": function(t) {
                        var a = t.mat, r = t.fovy, e = t.aspect, o = t.near, u = t.far;
                        return n.mat4.perspective(a, r, e, o, u);
                    }
                }
            },
            rotationX: {
                val: n.mat4.create(),
                stream: {
                    "with": {
                        m: "A",
                        rotX: "H #props.rotationX"
                    },
                    "do": function(t) {
                        var a = t.m, r = t.rotX;
                        return n.mat4.fromXRotation(a, r);
                    }
                }
            },
            rotationY: {
                val: n.mat4.create(),
                stream: {
                    "with": {
                        m: "A",
                        rotY: "H #props.rotationY"
                    },
                    "do": function(t) {
                        var a = t.m, r = t.rotY;
                        return n.mat4.fromYRotation(a, r);
                    }
                }
            },
            position: {
                val: [ 0, 0, 0 ],
                stream: {
                    "with": {
                        p: "A",
                        forward: "H #props.moveForward",
                        left: "H #props.moveLeft",
                        up: "H #props.moveUp",
                        rot: "C #rotationY"
                    },
                    "do": function(t) {
                        var a = t.p, r = t.forward, e = t.left, o = t.up, u = t.rot;
                        if (r) {
                            var l = [ u[8], u[9], u[10] ];
                            n.vec3.add(a, a, n.vec3.scale(l, l, -r));
                        }
                        if (e) {
                            var i = [ u[0], u[1], u[2] ];
                            n.vec3.add(a, a, n.vec3.scale(i, i, -e));
                        }
                        if (o) {
                            var s = [ u[4], u[5], u[6] ];
                            n.vec3.add(a, a, n.vec3.scale(s, s, o));
                        }
                        return a;
                    }
                }
            },
            view: {
                val: n.mat4.create(),
                stream: {
                    "with": {
                        view: "A",
                        rotY: "H #rotationY",
                        rotX: "H #rotationX",
                        pos: "H #position"
                    },
                    "do": function(t) {
                        var a = t.view, r = t.rotY, e = t.rotX, o = t.pos;
                        return n.mat4.fromTranslation(a, o), n.mat4.multiply(a, a, r), n.mat4.multiply(a, a, e), 
                        n.mat4.invert(a, a), a;
                    }
                }
            }
        };
        a["default"] = e;
    }, function(t, a) {
        "use strict";
        function r(t) {
            function a() {
                t({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            return window.addEventListener("resize", a), a(), function() {
                window.removeEventListener("resize", a);
            };
        }
        function n() {
            var t = {
                size: {
                    width: 0,
                    height: 0
                }
            }, a = r(function(a) {
                return t.size = a;
            });
            return {
                state: t,
                destroy: a
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.windowSize = r, a.windowSizeObserver = n;
    }, function(t, a) {
        "use strict";
        function r(t) {
            function a(a) {
                u[a.keyCode] = Date.now(), t(u);
            }
            function r(a) {
                delete u[a.keyCode], t(u);
            }
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], e = n.element, o = void 0 === e ? window : e, u = {};
            return o.addEventListener("keyup", r, !1), o.addEventListener("keydown", a, !1), 
            t(u), function() {
                o.removeEventListener("keyup", r), o.removeEventListener("keydown", a);
            };
        }
        function n(t) {
            function a(t) {
                n.state.pressed = t;
            }
            var n = {
                Keys: e,
                state: {
                    pressed: {}
                },
                destroy: function() {}
            };
            return n.destroy = r(a, t), n;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.keyboard = r, a.keyboardObserver = n;
        var e = a.Keys = {
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
    }, function(t, a) {
        "use strict";
        function r(t) {
            function a(a) {
                M.pressed[a.button] = Date.now(), a.button === e.LEFT && (c = a.clientX, f = a.clientY, 
                h = !0), t(M);
            }
            function r(a) {
                delete M.pressed[a.button], M.dragDelta.x = 0, M.dragDelta.y = 0, h = !1, t(M);
            }
            function n(a) {
                h && (M.dragDelta.x = c - a.clientX, M.dragDelta.y = f - a.clientY, c = a.clientX, 
                f = a.clientY, t(M));
            }
            function o(t) {
                t.preventDefault();
            }
            var u = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], l = u.element, i = void 0 === l ? document : l, s = u.enableRightButton, M = {
                pressed: {},
                dragDelta: {
                    x: 0,
                    y: 0
                }
            }, c = 0, f = 0, h = !1;
            return i.addEventListener("mousedown", a), document.addEventListener("mouseup", r), 
            document.addEventListener("mousemove", n), s && i.addEventListener("contextmenu", o), 
            t(M), function() {
                i.removeEventListener("mousedown", a), document.removeEventListener("mousemove", n), 
                document.removeEventListener("mouseup", r), s && i.removeEventListener("contextmenu", o);
            };
        }
        function n() {
            function t(t) {
                n.state = t;
            }
            var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = {
                Buttons: e,
                state: {},
                destroy: function() {}
            };
            return n.destroy = r(t, a), n;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.mouse = r, a.mouseObserver = n;
        var e = a.Buttons = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        };
    }, function(t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        a.generateUUID = function() {
            var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), a = new Array(36), r = 0, n = 0;
            return function() {
                for (var e = 0; e < 36; ) 8 === e || 13 === e || 18 === e || 23 === e ? a[e] = "-" : 14 === e ? a[e] = "4" : (r <= 2 && (r = 33554432 + 16777216 * Math.random() | 0), 
                n = 15 & r, r >>= 4, a[e] = t[19 === e ? 3 & n | 8 : n]), e += 1;
                return a.join("");
            };
        }();
    }, function(t, a) {
        "use strict";
        function r(t) {
            function a() {
                r && (e = Date.now(), t(e - n), n = e, requestAnimationFrame(a));
            }
            var r = !0, n = Date.now(), e = void 0;
            return a(), function() {
                r = !1;
            };
        }
        function n(t) {
            function a() {
                r && (t(), requestAnimationFrame(a));
            }
            var r = !0;
            return a(), function() {
                r = !1;
            };
        }
        function e(t) {
            function a() {
                for (var t in r) r[t].apply(null, arguments);
            }
            var r = [];
            return {
                start: function() {
                    this.stop = t(a);
                },
                stop: function() {},
                step: a,
                addUpdate: function(t) {
                    r.push(t);
                },
                removeUpdate: function(t) {
                    r = r.filter(function(a) {
                        return a !== t;
                    });
                }
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.animateWithTPF = r, a.animate = n, a.animator = e;
    }, function(t, a, r) {
        "use strict";
        function n(t, a) {
            var r = M(t, 4), n = r[0], e = r[1], o = r[2], u = r[3], l = M(a, 4), i = l[0], s = l[1], f = l[2], h = l[3], d = h / 255, v = Math.floor((0, 
            c.lerp)(n, i, d)), m = Math.floor((0, c.lerp)(e, s, d)), S = Math.floor((0, c.lerp)(o, f, d));
            return [ v, m, S, u ];
        }
        function e(t, a) {
            return null == a && (a = 255), [ t, t, t, a ];
        }
        function o(t) {
            var a = M(t, 4), r = a[0], n = a[1], e = a[2], o = a[3];
            return "rgba(" + r + ", " + n + ", " + e + ", " + o / 255 + ")";
        }
        function u(t) {
            return t.map(function(t) {
                return t / 255;
            });
        }
        function l(t) {
            return t.map(function(t) {
                return Math.floor(255 * t);
            });
        }
        function i(t) {
            t = Math.floor(t);
            var a = t >> 16 & 255, r = t >> 8 & 255, n = 255 & t;
            return [ a, r, n ];
        }
        function s(t) {
            var a = t.split("#");
            return i(parseInt(a[a.length - 1], 16));
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.WHITE = a.BLACK = void 0;
        var M = function() {
            function t(t, a) {
                var r = [], n = !0, e = !1, o = void 0;
                try {
                    for (var u, l = t[Symbol.iterator](); !(n = (u = l.next()).done) && (r.push(u.value), 
                    !a || r.length !== a); n = !0) ;
                } catch (i) {
                    e = !0, o = i;
                } finally {
                    try {
                        !n && l["return"] && l["return"]();
                    } finally {
                        if (e) throw o;
                    }
                }
                return r;
            }
            return function(a, r) {
                if (Array.isArray(a)) return a;
                if (Symbol.iterator in Object(a)) return t(a, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        a.mixColors = n, a.grey = e, a.colorRgbaToCSS = o, a.intToFloat = u, a.floatToInt = l, 
        a.hexToRgb = i, a.hexStringToRgb = s;
        var c = r(1);
        a.BLACK = [ 0, 0, 0, 255 ], a.WHITE = [ 255, 255, 255, 255 ];
    }, function(t, a, r) {
        "use strict";
        function n(t) {
            return Math.floor(127 * (t + 1));
        }
        function e(t, a, r) {
            for (var e = t.canvas.width, u = t.canvas.height, l = (0, o.tileNoise)(e, u, a, r), i = (0, 
            o.tileNoise)(e, u, 2.1 * a, 2.1 * r), s = (0, o.tileNoise)(e, u, 4.2 * a, 4.2 * r), M = (0, 
            o.tileNoise)(e, u, 8.3 * a, 8.3 * r), c = t.getImageData(0, 0, e, u), f = 0; f < l.length - 1; f++) {
                var h = 4 * f;
                c.data[h] = n(l[f]), c.data[h + 1] = n(i[f]), c.data[h + 2] = n(s[f]), c.data[h + 3] = n(M[f]);
            }
            t.putImageData(c, 0, 0);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.drawTileNoiseTexture = e;
        var o = r(4);
    }, function(t, a, r) {
        "use strict";
        function n(t, a) {
            var r = l(t, 2), n = r[0], e = r[1], o = a.width, u = a.height;
            return n >= o && (n -= o), e >= u && (e -= u), n < 0 && (n += o), e < 0 && (e += u), 
            [ n, e ];
        }
        function e(t, a) {
            var r = l(t, 2), n = r[0], e = r[1], o = a.width, u = a.height;
            return n < 0 && (n = 0), e < 0 && (e = 0), n >= o && (n = o), e >= u && (e = u), 
            [ n, e ];
        }
        function o(t) {
            function a(a, r) {
                var n = t(r, a), e = l(n, 2), o = e[0], u = e[1];
                return 4 * (u * a.height + o);
            }
            function r(t, r) {
                var n = a(t, r);
                return [ t.data[n], t.data[n + 1], t.data[n + 2], t.data[n + 3] ];
            }
            function n(t, r, n) {
                var e = a(t, r);
                t.data[e] = n[0], t.data[e + 1] = n[1], t.data[e + 2] = n[2], t.data[e + 3] = n[3];
            }
            function o(t, a) {
                for (var r = l(a, 4), n = r[0], e = r[1], o = r[2], u = r[3], i = t.data, s = 0; s < i.length; s += 4) i[s] + n < 256 && (i[s] += n), 
                i[s + 1] + e < 256 && (i[s + 1] += e), i[s + 2] + o < 256 && (i[s + 2] += o), i[s + 3] + u < 256 && (i[s + 3] += u);
            }
            function u(t, a) {
                for (var r = l(a, 4), n = r[0], e = r[1], o = r[2], u = r[3], i = t.data, s = 0; s <= i.length; s += 4) n <= i[s] && (i[s] -= n), 
                e <= i[s + 1] && (i[s + 1] -= e), o <= i[s + 2] && (i[s + 2] -= o), u <= i[s + 3] && (i[s + 3] -= u);
            }
            function s(t, a) {
                for (var e = 0; e < t.width; e++) for (var o = 0; e < t.height; o++) n(t, [ e, o ], (0, 
                i.mixColors)(r(t, [ e, o ]), a));
            }
            function M(t, a, e) {
                for (var o = l(e, 2), u = o[0], i = o[1], s = a.width - 1, M = a.height - 1, c = 0; c < M; c++) for (var f = 0; f < s; f++) n(t, [ u + f, i + c ], r(a, [ f, c ]));
            }
            function c(t, a, e) {
                for (var o = l(e, 2), u = o[0], s = o[1], M = a.width - 1, c = a.height - 1, f = 0; f < c; f++) for (var h = 0; h < M; h++) n(t, [ u + h, s + f ], (0, 
                i.mixColors)(r(t, [ u + h, s + f ]), r(a, [ h, f ])));
            }
            return t = t || e, {
                getPixelIndex: a,
                getColorAt: r,
                setColorAt: n,
                increaseAllBy: o,
                decreaseAllBy: u,
                mixinColor: s,
                replaceWithImageDataAt: M,
                drawImageAt: c
            };
        }
        function u(t) {
            var a = document.createElement("canvas");
            a.width = t.width, a.height = t.height;
            var r = a.getContext("2d");
            if (r) return r.drawImage(t, 0, 0, t.width, t.height), r.getImageData(0, 0, t.width, t.height);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = function() {
            function t(t, a) {
                var r = [], n = !0, e = !1, o = void 0;
                try {
                    for (var u, l = t[Symbol.iterator](); !(n = (u = l.next()).done) && (r.push(u.value), 
                    !a || r.length !== a); n = !0) ;
                } catch (i) {
                    e = !0, o = i;
                } finally {
                    try {
                        !n && l["return"] && l["return"]();
                    } finally {
                        if (e) throw o;
                    }
                }
                return r;
            }
            return function(a, r) {
                if (Array.isArray(a)) return a;
                if (Symbol.iterator in Object(a)) return t(a, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        a.repeatedPosition = n, a.closedPosition = e, a.createPixelContext = o, a.createImgDataFromImage = u;
        var i = r(25);
    }, function(t, a) {
        "use strict";
        function r(t) {
            function a(t) {
                return function() {
                    for (var a in this) "function" == typeof this[a][t] && this[a][t]();
                };
            }
            function r(t) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = t.split(".");
                return n.reduce(function(t, r) {
                    return t[r] = t[r] || {
                        reset: a("reset"),
                        watch: a("watch"),
                        unwatch: a("unwatch")
                    };
                }, r);
            }
            function n(a) {
                var n = t.getGraph(), e = n.entities, o = n.arcs, u = n.processes;
                return Object.keys(e).reduce(function(a, n) {
                    var l = r(n, a), i = e[n], s = Object.keys(o).map(function(t) {
                        return o[t];
                    }).filter(function(t) {
                        return t.entity == n && !t.port;
                    }).map(function(t) {
                        return t.process;
                    });
                    return l.id = n, Object.defineProperty(l, "val", {
                        get: function() {
                            return t.get(n);
                        },
                        set: function(a) {
                            return t.set(n, a);
                        }
                    }), l.update = function(a) {
                        t.update(n, a);
                    }, l.reset = function() {
                        null != i.value ? t.set(n, i.value) : null != i.json && t.set(n, JSON.parse(i.json));
                    }, l.watch = function() {
                        t.on(n, function(t) {
                            return console.log(n, t);
                        });
                    }, l.unwatch = function() {
                        t.off(n);
                    }, l.streams = {}, s.forEach(function(a) {
                        var r = a.split(".").pop();
                        r && (l.streams[r] = {
                            start: function() {
                                t.start(a);
                            }
                        }, u[a].async && (l.streams[r].stop = function() {
                            t.stop(a);
                        }));
                    }), a;
                }, a);
            }
            var e = {
                update: function() {
                    for (var t in this) "update" !== t && delete this[t];
                    n(this);
                }
            };
            return n(e);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.create = r;
    } ]);
});
//# sourceMappingURL=tvs-libs.js.map