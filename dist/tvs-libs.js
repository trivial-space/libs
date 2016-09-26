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
        var e = r(1), o = n(e), u = r(2), i = n(u), l = r(4), s = n(l), c = r(3), M = n(c), f = r(5), h = n(f), d = r(17), v = n(d), m = r(18), S = n(m), I = r(19), x = n(I), D = r(20), F = n(D), p = r(21), b = n(p), w = r(22), E = n(w), y = r(23), A = n(y), P = r(24), z = n(P), g = r(25), O = n(g), L = r(26), R = n(L), _ = r(27), N = n(_), T = r(28), Y = n(T), q = a.math = {
            core: o,
            noise: s,
            coords: i,
            vectors: M,
            linAlg: h,
            geometry: v
        }, U = a.vr = {
            camera: S,
            flowCamera: x
        }, C = a.events = {
            dom: F,
            mouse: E,
            keyboard: b
        }, j = a.utils = {
            animation: z,
            string: A
        }, X = a.graphics = {
            colors: O,
            pixels: N,
            textures: R
        }, H = a.flow = {
            entitySpec: Y
        };
        a["default"] = {
            math: q,
            vr: U,
            events: C,
            utils: j,
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
        function i() {
            return 2 * Math.random() - 1 + (2 * Math.random() - 1) + (2 * Math.random() - 1);
        }
        function l(t) {
            return t * s;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.sign = r, a.lerp = n, a.clamp = e, a.randInt = o, a.randIntInRange = u, a.normalRand = i, 
        a.degToRad = l;
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
        function i(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] / a;
            return r;
        }
        function l(t) {
            for (var a = 0, r = 0; r < t.length; r++) {
                var n = t[r];
                a += n * n;
            }
            return Math.sqrt(a);
        }
        function s(t) {
            return i(t, l(t));
        }
        function c(t, a) {
            return a < l(t) ? u(s(t), a) : t;
        }
        function M(t, a) {
            if (t.length != a.length) return !1;
            for (var r = 0; r < t.length; r++) if (t[r] !== a[r]) return !1;
            return !0;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.add = r, a.addScalar = n, a.sub = e, a.subScalar = o, a.mul = u, a.div = i, 
        a.length = l, a.normalize = s, a.limit = c, a.isEqual = M;
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
            var r, n, e = 0, o = 0, u = 0, i = (t + a) * h, l = Math.floor(t + i), s = Math.floor(a + i), c = (l + s) * d, M = l - c, f = s - c, v = t - M, m = a - f;
            v > m ? (r = 1, n = 0) : (r = 0, n = 1);
            var S = v - r + d, I = m - n + d, x = v - 1 + 2 * d, b = m - 1 + 2 * d, w = 255 & l, E = 255 & s, y = .5 - v * v - m * m;
            if (y >= 0) {
                var A = 3 * F[w + D[E]];
                y *= y, e = y * y * (p[A] * v + p[A + 1] * m);
            }
            var P = .5 - S * S - I * I;
            if (P >= 0) {
                var z = 3 * F[w + r + D[E + n]];
                P *= P, o = P * P * (p[z] * S + p[z + 1] * I);
            }
            var g = .5 - x * x - b * b;
            if (g >= 0) {
                var O = 3 * F[w + 1 + D[E + 1]];
                g *= g, u = g * g * (p[O] * x + p[O + 1] * b);
            }
            return 70 * (e + o + u);
        }
        function i(t, a, r) {
            var n, e, o, u, i, l, s, c, M, f, h = (t + a + r) * v, d = Math.floor(t + h), S = Math.floor(a + h), I = Math.floor(r + h), x = (d + S + I) * m, b = d - x, w = S - x, E = I - x, y = t - b, A = a - w, P = r - E;
            y >= A ? A >= P ? (i = 1, l = 0, s = 0, c = 1, M = 1, f = 0) : y >= P ? (i = 1, 
            l = 0, s = 0, c = 1, M = 0, f = 1) : (i = 0, l = 0, s = 1, c = 1, M = 0, f = 1) : A < P ? (i = 0, 
            l = 0, s = 1, c = 0, M = 1, f = 1) : y < P ? (i = 0, l = 1, s = 0, c = 0, M = 1, 
            f = 1) : (i = 0, l = 1, s = 0, c = 1, M = 1, f = 0);
            var z = y - i + m, g = A - l + m, O = P - s + m, L = y - c + 2 * m, R = A - M + 2 * m, _ = P - f + 2 * m, N = y - 1 + 3 * m, T = A - 1 + 3 * m, Y = P - 1 + 3 * m, q = 255 & d, U = 255 & S, C = 255 & I, j = .6 - y * y - A * A - P * P;
            if (j < 0) n = 0; else {
                var X = 3 * F[q + D[U + D[C]]];
                j *= j, n = j * j * (p[X] * y + p[X + 1] * A + p[X + 2] * P);
            }
            var H = .6 - z * z - g * g - O * O;
            if (H < 0) e = 0; else {
                var V = 3 * F[q + i + D[U + l + D[C + s]]];
                H *= H, e = H * H * (p[V] * z + p[V + 1] * g + p[V + 2] * O);
            }
            var B = .6 - L * L - R * R - _ * _;
            if (B < 0) o = 0; else {
                var k = 3 * F[q + c + D[U + M + D[C + f]]];
                B *= B, o = B * B * (p[k] * L + p[k + 1] * R + p[k + 2] * _);
            }
            var K = .6 - N * N - T * T - Y * Y;
            if (K < 0) u = 0; else {
                var W = 3 * F[q + 1 + D[U + 1 + D[C + 1]]];
                K *= K, u = K * K * (p[W] * N + p[W + 1] * T + p[W + 2] * Y);
            }
            return 32 * (n + e + o + u);
        }
        function l(t, a, r, n) {
            var e, o, u, i, l, s = (t + a + r + n) * S, c = Math.floor(t + s), M = Math.floor(a + s), f = Math.floor(r + s), h = Math.floor(n + s), d = (c + M + f + h) * I, v = c - d, m = M - d, x = f - d, F = h - d, p = t - v, w = a - m, E = r - x, y = n - F, A = 0, P = 0, z = 0, g = 0;
            p > w ? A++ : P++, p > E ? A++ : z++, p > y ? A++ : g++, w > E ? P++ : z++, w > y ? P++ : g++, 
            E > y ? z++ : g++;
            var O, L, R, _, N, T, Y, q, U, C, j, X;
            O = A >= 3 ? 1 : 0, L = P >= 3 ? 1 : 0, R = z >= 3 ? 1 : 0, _ = g >= 3 ? 1 : 0, 
            N = A >= 2 ? 1 : 0, T = P >= 2 ? 1 : 0, Y = z >= 2 ? 1 : 0, q = g >= 2 ? 1 : 0, 
            U = A >= 1 ? 1 : 0, C = P >= 1 ? 1 : 0, j = z >= 1 ? 1 : 0, X = g >= 1 ? 1 : 0;
            var H = p - O + I, V = w - L + I, B = E - R + I, k = y - _ + I, K = p - N + 2 * I, W = w - T + 2 * I, Z = E - Y + 2 * I, Q = y - q + 2 * I, G = p - U + 3 * I, J = w - C + 3 * I, $ = E - j + 3 * I, tt = y - X + 3 * I, at = p - 1 + 4 * I, rt = w - 1 + 4 * I, nt = E - 1 + 4 * I, et = y - 1 + 4 * I, ot = 255 & c, ut = 255 & M, it = 255 & f, lt = 255 & h, st = .6 - p * p - w * w - E * E - y * y;
            if (st < 0) e = 0; else {
                var ct = D[ot + D[ut + D[it + D[lt]]]] % 32 * 4;
                st *= st, e = st * st * (b[ct] * p + b[ct + 1] * w + b[ct + 2] * E + b[ct + 3] * y);
            }
            var Mt = .6 - H * H - V * V - B * B - k * k;
            if (Mt < 0) o = 0; else {
                var ft = D[ot + O + D[ut + L + D[it + R + D[lt + _]]]] % 32 * 4;
                Mt *= Mt, o = Mt * Mt * (b[ft] * H + b[ft + 1] * V + b[ft + 2] * B + b[ft + 3] * k);
            }
            var ht = .6 - K * K - W * W - Z * Z - Q * Q;
            if (ht < 0) u = 0; else {
                var dt = D[ot + N + D[ut + T + D[it + Y + D[lt + q]]]] % 32 * 4;
                ht *= ht, u = ht * ht * (b[dt] * K + b[dt + 1] * W + b[dt + 2] * Z + b[dt + 3] * Q);
            }
            var vt = .6 - G * G - J * J - $ * $ - tt * tt;
            if (vt < 0) i = 0; else {
                var mt = D[ot + U + D[ut + C + D[it + j + D[lt + X]]]] % 32 * 4;
                vt *= vt, i = vt * vt * (b[mt] * G + b[mt + 1] * J + b[mt + 2] * $ + b[mt + 3] * tt);
            }
            var St = .6 - at * at - rt * rt - nt * nt - et * et;
            if (St < 0) l = 0; else {
                var It = D[ot + 1 + D[ut + 1 + D[it + 1 + D[lt + 1]]]] % 32 * 4;
                St *= St, l = St * St * (b[It] * at + b[It + 1] * rt + b[It + 2] * nt + b[It + 3] * et);
            }
            return 27 * (e + o + u + i + l);
        }
        function s(t, a, r, n) {
            for (var e = [], o = 0; o < a; o++) for (var u = 0; u < t; u++) {
                var i = u / t, s = o / a, c = Math.cos(2 * i * Math.PI) * r / (2 * Math.PI), M = Math.cos(2 * s * Math.PI) * n / (2 * Math.PI), f = Math.sin(2 * i * Math.PI) * r / (2 * Math.PI), h = Math.sin(2 * s * Math.PI) * n / (2 * Math.PI);
                e.push(l(c, M, f, h));
            }
            return e;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.noise1d = o, a.noise2d = u, a.noise3d = i, a.noise4d = l, a.tileNoise = s;
        var c, M, f = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (c = M = 0; M <= 256; c = ++M) f[256 + c] = f[c];
        var h = .5 * (Math.sqrt(3) - 1), d = (3 - Math.sqrt(3)) / 6, v = 1 / 3, m = 1 / 6, S = (Math.sqrt(5) - 1) / 4, I = (5 - Math.sqrt(5)) / 20, x = new Uint8Array(256), D = new Uint8Array(512), F = new Uint8Array(512);
        for (c = 0; c < 256; c++) x[c] = 256 * Math.random();
        for (c = 0; c < 512; c++) D[c] = x[255 & c], F[c] = D[c] % 12;
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
            var n = a[0], e = a[1], o = a[2], u = a[3], i = r[0], l = r[1], s = r[2], c = r[3];
            return t[0] = n * i + o * l, t[1] = e * i + u * l, t[2] = n * s + o * c, t[3] = e * s + u * c, 
            t;
        }, e.mul = e.multiply, e.rotate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = Math.sin(r), l = Math.cos(r);
            return t[0] = n * l + o * i, t[1] = e * l + u * i, t[2] = n * -i + o * l, t[3] = e * -i + u * l, 
            t;
        }, e.scale = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = r[0], l = r[1];
            return t[0] = n * i, t[1] = e * i, t[2] = o * l, t[3] = u * l, t;
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
            var r = t[0], e = t[1], o = t[2], u = t[3], i = a[0], l = a[1], s = a[2], c = a[3];
            return Math.abs(r - i) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(e - l) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - s) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - c) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(c));
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
            var i = new n.ARRAY_TYPE(6);
            return i[0] = t, i[1] = a, i[2] = r, i[3] = e, i[4] = o, i[5] = u, i;
        }, e.set = function(t, a, r, n, e, o, u) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = e, t[4] = o, t[5] = u, t;
        }, e.invert = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = r * o - n * e;
            return l ? (l = 1 / l, t[0] = o * l, t[1] = -n * l, t[2] = -e * l, t[3] = r * l, 
            t[4] = (e * i - o * u) * l, t[5] = (n * u - r * i) * l, t) : null;
        }, e.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, e.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = r[0], c = r[1], M = r[2], f = r[3], h = r[4], d = r[5];
            return t[0] = n * s + o * c, t[1] = e * s + u * c, t[2] = n * M + o * f, t[3] = e * M + u * f, 
            t[4] = n * h + o * d + i, t[5] = e * h + u * d + l, t;
        }, e.mul = e.multiply, e.rotate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = Math.sin(r), c = Math.cos(r);
            return t[0] = n * c + o * s, t[1] = e * c + u * s, t[2] = n * -s + o * c, t[3] = e * -s + u * c, 
            t[4] = i, t[5] = l, t;
        }, e.scale = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = r[0], c = r[1];
            return t[0] = n * s, t[1] = e * s, t[2] = o * c, t[3] = u * c, t[4] = i, t[5] = l, 
            t;
        }, e.translate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = r[0], c = r[1];
            return t[0] = n, t[1] = e, t[2] = o, t[3] = u, t[4] = n * s + o * c + i, t[5] = e * s + u * c + l, 
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
            var r = t[0], e = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = a[0], c = a[1], M = a[2], f = a[3], h = a[4], d = a[5];
            return Math.abs(r - s) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(e - c) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(o - M) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(u - f) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(i - h) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(l - d) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(d));
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
        }, e.fromValues = function(t, a, r, e, o, u, i, l, s) {
            var c = new n.ARRAY_TYPE(9);
            return c[0] = t, c[1] = a, c[2] = r, c[3] = e, c[4] = o, c[5] = u, c[6] = i, c[7] = l, 
            c[8] = s, c;
        }, e.set = function(t, a, r, n, e, o, u, i, l, s) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = e, t[4] = o, t[5] = u, t[6] = i, t[7] = l, 
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
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8], M = c * u - i * s, f = -c * o + i * l, h = s * o - u * l, d = r * M + n * f + e * h;
            return d ? (d = 1 / d, t[0] = M * d, t[1] = (-c * n + e * s) * d, t[2] = (i * n - e * u) * d, 
            t[3] = f * d, t[4] = (c * r - e * l) * d, t[5] = (-i * r + e * o) * d, t[6] = h * d, 
            t[7] = (-s * r + n * l) * d, t[8] = (u * r - n * o) * d, t) : null;
        }, e.adjoint = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8];
            return t[0] = u * c - i * s, t[1] = e * s - n * c, t[2] = n * i - e * u, t[3] = i * l - o * c, 
            t[4] = r * c - e * l, t[5] = e * o - r * i, t[6] = o * s - u * l, t[7] = n * l - r * s, 
            t[8] = r * u - n * o, t;
        }, e.determinant = function(t) {
            var a = t[0], r = t[1], n = t[2], e = t[3], o = t[4], u = t[5], i = t[6], l = t[7], s = t[8];
            return a * (s * o - u * l) + r * (-s * e + u * i) + n * (l * e - o * i);
        }, e.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], f = r[0], h = r[1], d = r[2], v = r[3], m = r[4], S = r[5], I = r[6], x = r[7], D = r[8];
            return t[0] = f * n + h * u + d * s, t[1] = f * e + h * i + d * c, t[2] = f * o + h * l + d * M, 
            t[3] = v * n + m * u + S * s, t[4] = v * e + m * i + S * c, t[5] = v * o + m * l + S * M, 
            t[6] = I * n + x * u + D * s, t[7] = I * e + x * i + D * c, t[8] = I * o + x * l + D * M, 
            t;
        }, e.mul = e.multiply, e.translate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], f = r[0], h = r[1];
            return t[0] = n, t[1] = e, t[2] = o, t[3] = u, t[4] = i, t[5] = l, t[6] = f * n + h * u + s, 
            t[7] = f * e + h * i + c, t[8] = f * o + h * l + M, t;
        }, e.rotate = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], f = Math.sin(r), h = Math.cos(r);
            return t[0] = h * n + f * u, t[1] = h * e + f * i, t[2] = h * o + f * l, t[3] = h * u - f * n, 
            t[4] = h * i - f * e, t[5] = h * l - f * o, t[6] = s, t[7] = c, t[8] = M, t;
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
            var r = a[0], n = a[1], e = a[2], o = a[3], u = r + r, i = n + n, l = e + e, s = r * u, c = n * u, M = n * i, f = e * u, h = e * i, d = e * l, v = o * u, m = o * i, S = o * l;
            return t[0] = 1 - M - d, t[3] = c - S, t[6] = f + m, t[1] = c + S, t[4] = 1 - s - d, 
            t[7] = h - v, t[2] = f - m, t[5] = h + v, t[8] = 1 - s - M, t;
        }, e.normalFromMat4 = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8], M = a[9], f = a[10], h = a[11], d = a[12], v = a[13], m = a[14], S = a[15], I = r * i - n * u, x = r * l - e * u, D = r * s - o * u, F = n * l - e * i, p = n * s - o * i, b = e * s - o * l, w = c * v - M * d, E = c * m - f * d, y = c * S - h * d, A = M * m - f * v, P = M * S - h * v, z = f * S - h * m, g = I * z - x * P + D * A + F * y - p * E + b * w;
            return g ? (g = 1 / g, t[0] = (i * z - l * P + s * A) * g, t[1] = (l * y - u * z - s * E) * g, 
            t[2] = (u * P - i * y + s * w) * g, t[3] = (e * P - n * z - o * A) * g, t[4] = (r * z - e * y + o * E) * g, 
            t[5] = (n * y - r * P - o * w) * g, t[6] = (v * b - m * p + S * F) * g, t[7] = (m * D - d * b - S * x) * g, 
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
            var r = t[0], e = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = t[6], c = t[7], M = t[8], f = a[0], h = a[1], d = a[2], v = a[3], m = a[4], S = a[5], I = t[6], x = a[7], D = a[8];
            return Math.abs(r - f) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(e - h) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - d) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(u - v) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(i - m) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(l - S) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(s - I) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(I)) && Math.abs(c - x) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(M - D) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(D));
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
        }, e.fromValues = function(t, a, r, e, o, u, i, l, s, c, M, f, h, d, v, m) {
            var S = new n.ARRAY_TYPE(16);
            return S[0] = t, S[1] = a, S[2] = r, S[3] = e, S[4] = o, S[5] = u, S[6] = i, S[7] = l, 
            S[8] = s, S[9] = c, S[10] = M, S[11] = f, S[12] = h, S[13] = d, S[14] = v, S[15] = m, 
            S;
        }, e.set = function(t, a, r, n, e, o, u, i, l, s, c, M, f, h, d, v, m) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = e, t[4] = o, t[5] = u, t[6] = i, t[7] = l, 
            t[8] = s, t[9] = c, t[10] = M, t[11] = f, t[12] = h, t[13] = d, t[14] = v, t[15] = m, 
            t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.scalar.transpose = function(t, a) {
            if (t === a) {
                var r = a[1], n = a[2], e = a[3], o = a[6], u = a[7], i = a[11];
                t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = r, t[6] = a[9], t[7] = a[13], t[8] = n, 
                t[9] = o, t[11] = a[14], t[12] = e, t[13] = u, t[14] = i;
            } else t[0] = a[0], t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = a[1], t[5] = a[5], 
            t[6] = a[9], t[7] = a[13], t[8] = a[2], t[9] = a[6], t[10] = a[10], t[11] = a[14], 
            t[12] = a[3], t[13] = a[7], t[14] = a[11], t[15] = a[15];
            return t;
        }, e.SIMD.transpose = function(t, a) {
            var r, n, e, o, u, i, l, s, c, M;
            return r = SIMD.Float32x4.load(a, 0), n = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), 
            o = SIMD.Float32x4.load(a, 12), u = SIMD.Float32x4.shuffle(r, n, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(e, o, 0, 1, 4, 5), 
            l = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, l), SIMD.Float32x4.store(t, 4, s), u = SIMD.Float32x4.shuffle(r, n, 2, 3, 6, 7), 
            i = SIMD.Float32x4.shuffle(e, o, 2, 3, 6, 7), c = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), 
            M = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, c), SIMD.Float32x4.store(t, 12, M), 
            t;
        }, e.transpose = n.USE_SIMD ? e.SIMD.transpose : e.scalar.transpose, e.scalar.invert = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8], M = a[9], f = a[10], h = a[11], d = a[12], v = a[13], m = a[14], S = a[15], I = r * i - n * u, x = r * l - e * u, D = r * s - o * u, F = n * l - e * i, p = n * s - o * i, b = e * s - o * l, w = c * v - M * d, E = c * m - f * d, y = c * S - h * d, A = M * m - f * v, P = M * S - h * v, z = f * S - h * m, g = I * z - x * P + D * A + F * y - p * E + b * w;
            return g ? (g = 1 / g, t[0] = (i * z - l * P + s * A) * g, t[1] = (e * P - n * z - o * A) * g, 
            t[2] = (v * b - m * p + S * F) * g, t[3] = (f * p - M * b - h * F) * g, t[4] = (l * y - u * z - s * E) * g, 
            t[5] = (r * z - e * y + o * E) * g, t[6] = (m * D - d * b - S * x) * g, t[7] = (c * b - f * D + h * x) * g, 
            t[8] = (u * P - i * y + s * w) * g, t[9] = (n * y - r * P - o * w) * g, t[10] = (d * p - v * D + S * I) * g, 
            t[11] = (M * D - c * p - h * I) * g, t[12] = (i * E - u * A - l * w) * g, t[13] = (r * A - n * E + e * w) * g, 
            t[14] = (v * x - d * F - m * I) * g, t[15] = (c * F - M * x + f * I) * g, t) : null;
        }, e.SIMD.invert = function(t, a) {
            var r, n, e, o, u, i, l, s, c, M, f = SIMD.Float32x4.load(a, 0), h = SIMD.Float32x4.load(a, 4), d = SIMD.Float32x4.load(a, 8), v = SIMD.Float32x4.load(a, 12);
            return u = SIMD.Float32x4.shuffle(f, h, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(d, v, 0, 1, 4, 5), 
            r = SIMD.Float32x4.shuffle(u, n, 0, 2, 4, 6), n = SIMD.Float32x4.shuffle(n, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(f, h, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(d, v, 2, 3, 6, 7), 
            e = SIMD.Float32x4.shuffle(u, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(e, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.mul(n, u), 
            l = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), i), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(n, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), i), 
            c = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            e = SIMD.Float32x4.swizzle(e, 2, 3, 0, 1), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), i), 
            s = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(e, u)), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(r, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), s), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), c), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), s), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(e, u)), 
            u = SIMD.Float32x4.mul(r, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(e, u)), 
            s = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            l = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), l), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(n, u)), 
            u = SIMD.Float32x4.mul(r, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), l), 
            c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(n, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, u)), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), c), 
            M = SIMD.Float32x4.mul(r, i), M = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), M), 
            M = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(M, 1, 0, 3, 2), M), u = SIMD.Float32x4.reciprocalApproximation(M), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(M, SIMD.Float32x4.mul(u, u))), 
            (M = SIMD.Float32x4.swizzle(M, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(M, i)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(M, l)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(M, s)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(M, c)), t) : null;
        }, e.invert = n.USE_SIMD ? e.SIMD.invert : e.scalar.invert, e.scalar.adjoint = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8], M = a[9], f = a[10], h = a[11], d = a[12], v = a[13], m = a[14], S = a[15];
            return t[0] = i * (f * S - h * m) - M * (l * S - s * m) + v * (l * h - s * f), t[1] = -(n * (f * S - h * m) - M * (e * S - o * m) + v * (e * h - o * f)), 
            t[2] = n * (l * S - s * m) - i * (e * S - o * m) + v * (e * s - o * l), t[3] = -(n * (l * h - s * f) - i * (e * h - o * f) + M * (e * s - o * l)), 
            t[4] = -(u * (f * S - h * m) - c * (l * S - s * m) + d * (l * h - s * f)), t[5] = r * (f * S - h * m) - c * (e * S - o * m) + d * (e * h - o * f), 
            t[6] = -(r * (l * S - s * m) - u * (e * S - o * m) + d * (e * s - o * l)), t[7] = r * (l * h - s * f) - u * (e * h - o * f) + c * (e * s - o * l), 
            t[8] = u * (M * S - h * v) - c * (i * S - s * v) + d * (i * h - s * M), t[9] = -(r * (M * S - h * v) - c * (n * S - o * v) + d * (n * h - o * M)), 
            t[10] = r * (i * S - s * v) - u * (n * S - o * v) + d * (n * s - o * i), t[11] = -(r * (i * h - s * M) - u * (n * h - o * M) + c * (n * s - o * i)), 
            t[12] = -(u * (M * m - f * v) - c * (i * m - l * v) + d * (i * f - l * M)), t[13] = r * (M * m - f * v) - c * (n * m - e * v) + d * (n * f - e * M), 
            t[14] = -(r * (i * m - l * v) - u * (n * m - e * v) + d * (n * l - e * i)), t[15] = r * (i * f - l * M) - u * (n * f - e * M) + c * (n * l - e * i), 
            t;
        }, e.SIMD.adjoint = function(t, a) {
            var r, n, e, o, u, i, l, s, c, M, f, h, d, r = SIMD.Float32x4.load(a, 0), n = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), o = SIMD.Float32x4.load(a, 12);
            return c = SIMD.Float32x4.shuffle(r, n, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(e, o, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(c, i, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(i, c, 1, 3, 5, 7), 
            c = SIMD.Float32x4.shuffle(r, n, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(e, o, 2, 3, 6, 7), 
            l = SIMD.Float32x4.shuffle(c, s, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(s, c, 1, 3, 5, 7), 
            c = SIMD.Float32x4.mul(l, s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), M = SIMD.Float32x4.mul(i, c), 
            f = SIMD.Float32x4.mul(u, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, c), M), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), 
            c = SIMD.Float32x4.mul(i, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), M), 
            d = SIMD.Float32x4.mul(u, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(s, c)), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), 
            c = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), 
            l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), M), 
            h = SIMD.Float32x4.mul(u, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(l, c)), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), 
            c = SIMD.Float32x4.mul(u, i), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), h), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, c), d), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, c), h), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(l, c)), 
            c = SIMD.Float32x4.mul(u, s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(l, c)), 
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, c), h), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            f = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), f), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(i, c)), 
            c = SIMD.Float32x4.mul(u, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), f), 
            d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(i, c)), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(s, c)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, c), d), 
            SIMD.Float32x4.store(t, 0, M), SIMD.Float32x4.store(t, 4, f), SIMD.Float32x4.store(t, 8, h), 
            SIMD.Float32x4.store(t, 12, d), t;
        }, e.adjoint = n.USE_SIMD ? e.SIMD.adjoint : e.scalar.adjoint, e.determinant = function(t) {
            var a = t[0], r = t[1], n = t[2], e = t[3], o = t[4], u = t[5], i = t[6], l = t[7], s = t[8], c = t[9], M = t[10], f = t[11], h = t[12], d = t[13], v = t[14], m = t[15], S = a * u - r * o, I = a * i - n * o, x = a * l - e * o, D = r * i - n * u, F = r * l - e * u, p = n * l - e * i, b = s * d - c * h, w = s * v - M * h, E = s * m - f * h, y = c * v - M * d, A = c * m - f * d, P = M * m - f * v;
            return S * P - I * A + x * y + D * E - F * w + p * b;
        }, e.SIMD.multiply = function(t, a, r) {
            var n = SIMD.Float32x4.load(a, 0), e = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), i = SIMD.Float32x4.load(r, 0), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, l);
            var s = SIMD.Float32x4.load(r, 4), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, c);
            var M = SIMD.Float32x4.load(r, 8), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, f);
            var h = SIMD.Float32x4.load(r, 12), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, d), t;
        }, e.scalar.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], f = a[9], h = a[10], d = a[11], v = a[12], m = a[13], S = a[14], I = a[15], x = r[0], D = r[1], F = r[2], p = r[3];
            return t[0] = x * n + D * i + F * M + p * v, t[1] = x * e + D * l + F * f + p * m, 
            t[2] = x * o + D * s + F * h + p * S, t[3] = x * u + D * c + F * d + p * I, x = r[4], 
            D = r[5], F = r[6], p = r[7], t[4] = x * n + D * i + F * M + p * v, t[5] = x * e + D * l + F * f + p * m, 
            t[6] = x * o + D * s + F * h + p * S, t[7] = x * u + D * c + F * d + p * I, x = r[8], 
            D = r[9], F = r[10], p = r[11], t[8] = x * n + D * i + F * M + p * v, t[9] = x * e + D * l + F * f + p * m, 
            t[10] = x * o + D * s + F * h + p * S, t[11] = x * u + D * c + F * d + p * I, x = r[12], 
            D = r[13], F = r[14], p = r[15], t[12] = x * n + D * i + F * M + p * v, t[13] = x * e + D * l + F * f + p * m, 
            t[14] = x * o + D * s + F * h + p * S, t[15] = x * u + D * c + F * d + p * I, t;
        }, e.multiply = n.USE_SIMD ? e.SIMD.multiply : e.scalar.multiply, e.mul = e.multiply, 
        e.scalar.translate = function(t, a, r) {
            var n, e, o, u, i, l, s, c, M, f, h, d, v = r[0], m = r[1], S = r[2];
            return a === t ? (t[12] = a[0] * v + a[4] * m + a[8] * S + a[12], t[13] = a[1] * v + a[5] * m + a[9] * S + a[13], 
            t[14] = a[2] * v + a[6] * m + a[10] * S + a[14], t[15] = a[3] * v + a[7] * m + a[11] * S + a[15]) : (n = a[0], 
            e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], 
            f = a[9], h = a[10], d = a[11], t[0] = n, t[1] = e, t[2] = o, t[3] = u, t[4] = i, 
            t[5] = l, t[6] = s, t[7] = c, t[8] = M, t[9] = f, t[10] = h, t[11] = d, t[12] = n * v + i * m + M * S + a[12], 
            t[13] = e * v + l * m + f * S + a[13], t[14] = o * v + s * m + h * S + a[14], t[15] = u * v + c * m + d * S + a[15]), 
            t;
        }, e.SIMD.translate = function(t, a, r) {
            var n = SIMD.Float32x4.load(a, 0), e = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), i = SIMD.Float32x4(r[0], r[1], r[2], 0);
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11]), 
            n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(i, 0, 0, 0, 0)), e = SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(i, 1, 1, 1, 1)), 
            o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(i, 2, 2, 2, 2));
            var l = SIMD.Float32x4.add(n, SIMD.Float32x4.add(e, SIMD.Float32x4.add(o, u)));
            return SIMD.Float32x4.store(t, 12, l), t;
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
            var o, u, i, l, s, c, M, f, h, d, v, m, S, I, x, D, F, p, b, w, E, y, A, P, z = e[0], g = e[1], O = e[2], L = Math.sqrt(z * z + g * g + O * O);
            return Math.abs(L) < n.EPSILON ? null : (L = 1 / L, z *= L, g *= L, O *= L, o = Math.sin(r), 
            u = Math.cos(r), i = 1 - u, l = a[0], s = a[1], c = a[2], M = a[3], f = a[4], h = a[5], 
            d = a[6], v = a[7], m = a[8], S = a[9], I = a[10], x = a[11], D = z * z * i + u, 
            F = g * z * i + O * o, p = O * z * i - g * o, b = z * g * i - O * o, w = g * g * i + u, 
            E = O * g * i + z * o, y = z * O * i + g * o, A = g * O * i - z * o, P = O * O * i + u, 
            t[0] = l * D + f * F + m * p, t[1] = s * D + h * F + S * p, t[2] = c * D + d * F + I * p, 
            t[3] = M * D + v * F + x * p, t[4] = l * b + f * w + m * E, t[5] = s * b + h * w + S * E, 
            t[6] = c * b + d * w + I * E, t[7] = M * b + v * w + x * E, t[8] = l * y + f * A + m * P, 
            t[9] = s * y + h * A + S * P, t[10] = c * y + d * A + I * P, t[11] = M * y + v * A + x * P, 
            a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t);
        }, e.scalar.rotateX = function(t, a, r) {
            var n = Math.sin(r), e = Math.cos(r), o = a[4], u = a[5], i = a[6], l = a[7], s = a[8], c = a[9], M = a[10], f = a[11];
            return a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[4] = o * e + s * n, t[5] = u * e + c * n, 
            t[6] = i * e + M * n, t[7] = l * e + f * n, t[8] = s * e - o * n, t[9] = c * e - u * n, 
            t[10] = M * e - i * n, t[11] = f * e - l * n, t;
        }, e.SIMD.rotateX = function(t, a, r) {
            var n = SIMD.Float32x4.splat(Math.sin(r)), e = SIMD.Float32x4.splat(Math.cos(r));
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var o = SIMD.Float32x4.load(a, 4), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, e), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, e), SIMD.Float32x4.mul(o, n))), 
            t;
        }, e.rotateX = n.USE_SIMD ? e.SIMD.rotateX : e.scalar.rotateX, e.scalar.rotateY = function(t, a, r) {
            var n = Math.sin(r), e = Math.cos(r), o = a[0], u = a[1], i = a[2], l = a[3], s = a[8], c = a[9], M = a[10], f = a[11];
            return a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = o * e - s * n, t[1] = u * e - c * n, 
            t[2] = i * e - M * n, t[3] = l * e - f * n, t[8] = o * n + s * e, t[9] = u * n + c * e, 
            t[10] = i * n + M * e, t[11] = l * n + f * e, t;
        }, e.SIMD.rotateY = function(t, a, r) {
            var n = SIMD.Float32x4.splat(Math.sin(r)), e = SIMD.Float32x4.splat(Math.cos(r));
            a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var o = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, e), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, e))), 
            t;
        }, e.rotateY = n.USE_SIMD ? e.SIMD.rotateY : e.scalar.rotateY, e.scalar.rotateZ = function(t, a, r) {
            var n = Math.sin(r), e = Math.cos(r), o = a[0], u = a[1], i = a[2], l = a[3], s = a[4], c = a[5], M = a[6], f = a[7];
            return a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = o * e + s * n, t[1] = u * e + c * n, 
            t[2] = i * e + M * n, t[3] = l * e + f * n, t[4] = s * e - o * n, t[5] = c * e - u * n, 
            t[6] = M * e - i * n, t[7] = f * e - l * n, t;
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
            var e, o, u, i = r[0], l = r[1], s = r[2], c = Math.sqrt(i * i + l * l + s * s);
            return Math.abs(c) < n.EPSILON ? null : (c = 1 / c, i *= c, l *= c, s *= c, e = Math.sin(a), 
            o = Math.cos(a), u = 1 - o, t[0] = i * i * u + o, t[1] = l * i * u + s * e, t[2] = s * i * u - l * e, 
            t[3] = 0, t[4] = i * l * u - s * e, t[5] = l * l * u + o, t[6] = s * l * u + i * e, 
            t[7] = 0, t[8] = i * s * u + l * e, t[9] = l * s * u - i * e, t[10] = s * s * u + o, 
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
            var n = a[0], e = a[1], o = a[2], u = a[3], i = n + n, l = e + e, s = o + o, c = n * i, M = n * l, f = n * s, h = e * l, d = e * s, v = o * s, m = u * i, S = u * l, I = u * s;
            return t[0] = 1 - (h + v), t[1] = M + I, t[2] = f - S, t[3] = 0, t[4] = M - I, t[5] = 1 - (c + v), 
            t[6] = d + m, t[7] = 0, t[8] = f + S, t[9] = d - m, t[10] = 1 - (c + h), t[11] = 0, 
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
            var e = a[0], o = a[1], u = a[2], i = a[3], l = e + e, s = o + o, c = u + u, M = e * l, f = e * s, h = e * c, d = o * s, v = o * c, m = u * c, S = i * l, I = i * s, x = i * c, D = n[0], F = n[1], p = n[2];
            return t[0] = (1 - (d + m)) * D, t[1] = (f + x) * D, t[2] = (h - I) * D, t[3] = 0, 
            t[4] = (f - x) * F, t[5] = (1 - (M + m)) * F, t[6] = (v + S) * F, t[7] = 0, t[8] = (h + I) * p, 
            t[9] = (v - S) * p, t[10] = (1 - (M + d)) * p, t[11] = 0, t[12] = r[0], t[13] = r[1], 
            t[14] = r[2], t[15] = 1, t;
        }, e.fromRotationTranslationScaleOrigin = function(t, a, r, n, e) {
            var o = a[0], u = a[1], i = a[2], l = a[3], s = o + o, c = u + u, M = i + i, f = o * s, h = o * c, d = o * M, v = u * c, m = u * M, S = i * M, I = l * s, x = l * c, D = l * M, F = n[0], p = n[1], b = n[2], w = e[0], E = e[1], y = e[2];
            return t[0] = (1 - (v + S)) * F, t[1] = (h + D) * F, t[2] = (d - x) * F, t[3] = 0, 
            t[4] = (h - D) * p, t[5] = (1 - (f + S)) * p, t[6] = (m + I) * p, t[7] = 0, t[8] = (d + x) * b, 
            t[9] = (m - I) * b, t[10] = (1 - (f + v)) * b, t[11] = 0, t[12] = r[0] + w - (t[0] * w + t[4] * E + t[8] * y), 
            t[13] = r[1] + E - (t[1] * w + t[5] * E + t[9] * y), t[14] = r[2] + y - (t[2] * w + t[6] * E + t[10] * y), 
            t[15] = 1, t;
        }, e.fromQuat = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = r + r, i = n + n, l = e + e, s = r * u, c = n * u, M = n * i, f = e * u, h = e * i, d = e * l, v = o * u, m = o * i, S = o * l;
            return t[0] = 1 - M - d, t[1] = c + S, t[2] = f - m, t[3] = 0, t[4] = c - S, t[5] = 1 - s - d, 
            t[6] = h + v, t[7] = 0, t[8] = f + m, t[9] = h - v, t[10] = 1 - s - M, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, e.frustum = function(t, a, r, n, e, o, u) {
            var i = 1 / (r - a), l = 1 / (e - n), s = 1 / (o - u);
            return t[0] = 2 * o * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * l, 
            t[6] = 0, t[7] = 0, t[8] = (r + a) * i, t[9] = (e + n) * l, t[10] = (u + o) * s, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * o * 2 * s, t[15] = 0, t;
        }, e.perspective = function(t, a, r, n, e) {
            var o = 1 / Math.tan(a / 2), u = 1 / (n - e);
            return t[0] = o / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (e + n) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * e * n * u, t[15] = 0, t;
        }, e.perspectiveFromFieldOfView = function(t, a, r, n) {
            var e = Math.tan(a.upDegrees * Math.PI / 180), o = Math.tan(a.downDegrees * Math.PI / 180), u = Math.tan(a.leftDegrees * Math.PI / 180), i = Math.tan(a.rightDegrees * Math.PI / 180), l = 2 / (u + i), s = 2 / (e + o);
            return t[0] = l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, 
            t[8] = -((u - i) * l * .5), t[9] = (e - o) * s * .5, t[10] = n / (r - n), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = n * r / (r - n), t[15] = 0, t;
        }, e.ortho = function(t, a, r, n, e, o, u) {
            var i = 1 / (a - r), l = 1 / (n - e), s = 1 / (o - u);
            return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * l, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * s, t[11] = 0, t[12] = (a + r) * i, t[13] = (e + n) * l, 
            t[14] = (u + o) * s, t[15] = 1, t;
        }, e.lookAt = function(t, a, r, o) {
            var u, i, l, s, c, M, f, h, d, v, m = a[0], S = a[1], I = a[2], x = o[0], D = o[1], F = o[2], p = r[0], b = r[1], w = r[2];
            return Math.abs(m - p) < n.EPSILON && Math.abs(S - b) < n.EPSILON && Math.abs(I - w) < n.EPSILON ? e.identity(t) : (f = m - p, 
            h = S - b, d = I - w, v = 1 / Math.sqrt(f * f + h * h + d * d), f *= v, h *= v, 
            d *= v, u = D * d - F * h, i = F * f - x * d, l = x * h - D * f, v = Math.sqrt(u * u + i * i + l * l), 
            v ? (v = 1 / v, u *= v, i *= v, l *= v) : (u = 0, i = 0, l = 0), s = h * l - d * i, 
            c = d * u - f * l, M = f * i - h * u, v = Math.sqrt(s * s + c * c + M * M), v ? (v = 1 / v, 
            s *= v, c *= v, M *= v) : (s = 0, c = 0, M = 0), t[0] = u, t[1] = s, t[2] = f, t[3] = 0, 
            t[4] = i, t[5] = c, t[6] = h, t[7] = 0, t[8] = l, t[9] = M, t[10] = d, t[11] = 0, 
            t[12] = -(u * m + i * S + l * I), t[13] = -(s * m + c * S + M * I), t[14] = -(f * m + h * S + d * I), 
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
            var r = t[0], e = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = t[6], c = t[7], M = t[8], f = t[9], h = t[10], d = t[11], v = t[12], m = t[13], S = t[14], I = t[15], x = a[0], D = a[1], F = a[2], p = a[3], b = a[4], w = a[5], E = a[6], y = a[7], A = a[8], P = a[9], z = a[10], g = a[11], O = a[12], L = a[13], R = a[14], _ = a[15];
            return Math.abs(r - x) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(x)) && Math.abs(e - D) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(D)) && Math.abs(o - F) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(F)) && Math.abs(u - p) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(p)) && Math.abs(i - b) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(l - w) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(w)) && Math.abs(s - E) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(c - y) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(y)) && Math.abs(M - A) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(A)) && Math.abs(f - P) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) && Math.abs(h - z) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(z)) && Math.abs(d - g) <= n.EPSILON * Math.max(1, Math.abs(d), Math.abs(g)) && Math.abs(v - O) <= n.EPSILON * Math.max(1, Math.abs(v), Math.abs(O)) && Math.abs(m - L) <= n.EPSILON * Math.max(1, Math.abs(m), Math.abs(L)) && Math.abs(S - R) <= n.EPSILON * Math.max(1, Math.abs(S), Math.abs(R)) && Math.abs(I - _) <= n.EPSILON * Math.max(1, Math.abs(I), Math.abs(_));
        }, t.exports = e;
    }, function(t, a, r) {
        var n = r(7), e = r(10), o = r(13), u = r(14), i = {};
        i.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.rotationTo = function() {
            var t = o.create(), a = o.fromValues(1, 0, 0), r = o.fromValues(0, 1, 0);
            return function(n, e, u) {
                var l = o.dot(e, u);
                return l < -.999999 ? (o.cross(t, a, e), o.length(t) < 1e-6 && o.cross(t, r, e), 
                o.normalize(t, t), i.setAxisAngle(n, t, Math.PI), n) : l > .999999 ? (n[0] = 0, 
                n[1] = 0, n[2] = 0, n[3] = 1, n) : (o.cross(t, e, u), n[0] = t[0], n[1] = t[1], 
                n[2] = t[2], n[3] = 1 + l, i.normalize(n, n));
            };
        }(), i.setAxes = function() {
            var t = e.create();
            return function(a, r, n, e) {
                return t[0] = n[0], t[3] = n[1], t[6] = n[2], t[1] = e[0], t[4] = e[1], t[7] = e[2], 
                t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], i.normalize(a, i.fromMat3(a, t));
            };
        }(), i.clone = u.clone, i.fromValues = u.fromValues, i.copy = u.copy, i.set = u.set, 
        i.identity = function(t) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.setAxisAngle = function(t, a, r) {
            r = .5 * r;
            var n = Math.sin(r);
            return t[0] = n * a[0], t[1] = n * a[1], t[2] = n * a[2], t[3] = Math.cos(r), t;
        }, i.getAxisAngle = function(t, a) {
            var r = 2 * Math.acos(a[3]), n = Math.sin(r / 2);
            return 0 != n ? (t[0] = a[0] / n, t[1] = a[1] / n, t[2] = a[2] / n) : (t[0] = 1, 
            t[1] = 0, t[2] = 0), r;
        }, i.add = u.add, i.multiply = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3], i = r[0], l = r[1], s = r[2], c = r[3];
            return t[0] = n * c + u * i + e * s - o * l, t[1] = e * c + u * l + o * i - n * s, 
            t[2] = o * c + u * s + n * l - e * i, t[3] = u * c - n * i - e * l - o * s, t;
        }, i.mul = i.multiply, i.scale = u.scale, i.rotateX = function(t, a, r) {
            r *= .5;
            var n = a[0], e = a[1], o = a[2], u = a[3], i = Math.sin(r), l = Math.cos(r);
            return t[0] = n * l + u * i, t[1] = e * l + o * i, t[2] = o * l - e * i, t[3] = u * l - n * i, 
            t;
        }, i.rotateY = function(t, a, r) {
            r *= .5;
            var n = a[0], e = a[1], o = a[2], u = a[3], i = Math.sin(r), l = Math.cos(r);
            return t[0] = n * l - o * i, t[1] = e * l + u * i, t[2] = o * l + n * i, t[3] = u * l - e * i, 
            t;
        }, i.rotateZ = function(t, a, r) {
            r *= .5;
            var n = a[0], e = a[1], o = a[2], u = a[3], i = Math.sin(r), l = Math.cos(r);
            return t[0] = n * l + e * i, t[1] = e * l - n * i, t[2] = o * l + u * i, t[3] = u * l - o * i, 
            t;
        }, i.calculateW = function(t, a) {
            var r = a[0], n = a[1], e = a[2];
            return t[0] = r, t[1] = n, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - r * r - n * n - e * e)), 
            t;
        }, i.dot = u.dot, i.lerp = u.lerp, i.slerp = function(t, a, r, n) {
            var e, o, u, i, l, s = a[0], c = a[1], M = a[2], f = a[3], h = r[0], d = r[1], v = r[2], m = r[3];
            return o = s * h + c * d + M * v + f * m, o < 0 && (o = -o, h = -h, d = -d, v = -v, 
            m = -m), 1 - o > 1e-6 ? (e = Math.acos(o), u = Math.sin(e), i = Math.sin((1 - n) * e) / u, 
            l = Math.sin(n * e) / u) : (i = 1 - n, l = n), t[0] = i * s + l * h, t[1] = i * c + l * d, 
            t[2] = i * M + l * v, t[3] = i * f + l * m, t;
        }, i.sqlerp = function() {
            var t = i.create(), a = i.create();
            return function(r, n, e, o, u, l) {
                return i.slerp(t, n, u, l), i.slerp(a, e, o, l), i.slerp(r, t, a, 2 * l * (1 - l)), 
                r;
            };
        }(), i.invert = function(t, a) {
            var r = a[0], n = a[1], e = a[2], o = a[3], u = r * r + n * n + e * e + o * o, i = u ? 1 / u : 0;
            return t[0] = -r * i, t[1] = -n * i, t[2] = -e * i, t[3] = o * i, t;
        }, i.conjugate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = a[3], t;
        }, i.length = u.length, i.len = i.length, i.squaredLength = u.squaredLength, i.sqrLen = i.squaredLength, 
        i.normalize = u.normalize, i.fromMat3 = function(t, a) {
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
        }, i.str = function(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, i.exactEquals = u.exactEquals, i.equals = u.equals, t.exports = i;
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
            var n = a[0], e = a[1], o = a[2], u = r[0], i = r[1], l = r[2];
            return t[0] = e * l - o * i, t[1] = o * u - n * l, t[2] = n * i - e * u, t;
        }, e.lerp = function(t, a, r, n) {
            var e = a[0], o = a[1], u = a[2];
            return t[0] = e + n * (r[0] - e), t[1] = o + n * (r[1] - o), t[2] = u + n * (r[2] - u), 
            t;
        }, e.hermite = function(t, a, r, n, e, o) {
            var u = o * o, i = u * (2 * o - 3) + 1, l = u * (o - 2) + o, s = u * (o - 1), c = u * (3 - 2 * o);
            return t[0] = a[0] * i + r[0] * l + n[0] * s + e[0] * c, t[1] = a[1] * i + r[1] * l + n[1] * s + e[1] * c, 
            t[2] = a[2] * i + r[2] * l + n[2] * s + e[2] * c, t;
        }, e.bezier = function(t, a, r, n, e, o) {
            var u = 1 - o, i = u * u, l = o * o, s = i * u, c = 3 * o * i, M = 3 * l * u, f = l * o;
            return t[0] = a[0] * s + r[0] * c + n[0] * M + e[0] * f, t[1] = a[1] * s + r[1] * c + n[1] * M + e[1] * f, 
            t[2] = a[2] * s + r[2] * c + n[2] * M + e[2] * f, t;
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
            var n = a[0], e = a[1], o = a[2], u = r[0], i = r[1], l = r[2], s = r[3], c = s * n + i * o - l * e, M = s * e + l * n - u * o, f = s * o + u * e - i * n, h = -u * n - i * e - l * o;
            return t[0] = c * s + h * -u + M * -l - f * -i, t[1] = M * s + h * -i + f * -u - c * -l, 
            t[2] = f * s + h * -l + c * -i - M * -u, t;
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
                var i, l;
                for (r || (r = 3), n || (n = 0), l = e ? Math.min(e * r + n, a.length) : a.length, 
                i = n; i < l; i += r) t[0] = a[i], t[1] = a[i + 1], t[2] = a[i + 2], o(t, t, u), 
                a[i] = t[0], a[i + 1] = t[1], a[i + 2] = t[2];
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
            var r = t[0], e = t[1], o = t[2], u = a[0], i = a[1], l = a[2];
            return Math.abs(r - u) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(o - l) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(l));
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
            var e = a[0], o = a[1], u = a[2], i = a[3];
            return t[0] = e + n * (r[0] - e), t[1] = o + n * (r[1] - o), t[2] = u + n * (r[2] - u), 
            t[3] = i + n * (r[3] - i), t;
        }, e.random = function(t, a) {
            return a = a || 1, t[0] = n.RANDOM(), t[1] = n.RANDOM(), t[2] = n.RANDOM(), t[3] = n.RANDOM(), 
            e.normalize(t, t), e.scale(t, t, a), t;
        }, e.transformMat4 = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = a[3];
            return t[0] = r[0] * n + r[4] * e + r[8] * o + r[12] * u, t[1] = r[1] * n + r[5] * e + r[9] * o + r[13] * u, 
            t[2] = r[2] * n + r[6] * e + r[10] * o + r[14] * u, t[3] = r[3] * n + r[7] * e + r[11] * o + r[15] * u, 
            t;
        }, e.transformQuat = function(t, a, r) {
            var n = a[0], e = a[1], o = a[2], u = r[0], i = r[1], l = r[2], s = r[3], c = s * n + i * o - l * e, M = s * e + l * n - u * o, f = s * o + u * e - i * n, h = -u * n - i * e - l * o;
            return t[0] = c * s + h * -u + M * -l - f * -i, t[1] = M * s + h * -i + f * -u - c * -l, 
            t[2] = f * s + h * -l + c * -i - M * -u, t[3] = a[3], t;
        }, e.forEach = function() {
            var t = e.create();
            return function(a, r, n, e, o, u) {
                var i, l;
                for (r || (r = 4), n || (n = 0), l = e ? Math.min(e * r + n, a.length) : a.length, 
                i = n; i < l; i += r) t[0] = a[i], t[1] = a[i + 1], t[2] = a[i + 2], t[3] = a[i + 3], 
                o(t, t, u), a[i] = t[0], a[i + 1] = t[1], a[i + 2] = t[2], a[i + 3] = t[3];
                return a;
            };
        }(), e.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, e.equals = function(t, a) {
            var r = t[0], e = t[1], o = t[2], u = t[3], i = a[0], l = a[1], s = a[2], c = a[3];
            return Math.abs(r - i) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(e - l) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - s) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - c) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(c));
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
                var i, l;
                for (r || (r = 2), n || (n = 0), l = e ? Math.min(e * r + n, a.length) : a.length, 
                i = n; i < l; i += r) t[0] = a[i], t[1] = a[i + 1], o(t, t, u), a[i] = t[0], a[i + 1] = t[1];
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
            var r = -l.vec3.dot(t, a);
            return l.vec4.fromValues(t[0], t[1], t[2], r);
        }
        function e(t, a, r) {
            return n(o(t, a, r), t);
        }
        function o(t, a, r) {
            var n = l.fvec3.cross(l.fvec3.sub(r, a), l.fvec3.sub(t, a));
            return l.vec3.normalize(n, n);
        }
        function u(t) {
            var a = i(t, 4), r = a[0], n = a[1], e = a[2], o = a[3];
            return l.mat4.fromValues(1 - 2 * r * r, -2 * r * n, -2 * r * e, -2 * r * o, -2 * n * r, 1 - 2 * n * n, -2 * n * e, -2 * n * o, -2 * e * r, -2 * e * n, 1 - 2 * e * e, -2 * e * o, 0, 0, 0, 1);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, a) {
                var r = [], n = !0, e = !1, o = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), 
                    !a || r.length !== a); n = !0) ;
                } catch (l) {
                    e = !0, o = l;
                } finally {
                    try {
                        !n && i["return"] && i["return"]();
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
        var l = r(5);
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
            var a = t.props, r = t.state, n = r.view, e = r.perspective, u = r.rotationX, i = r.rotationY, l = r.position;
            a.needsUpdatePerspective && (a.needsUpdatePerspective = !1, o.mat4.perspective(e, a.fovy, a.aspect, a.near, a.far));
            var s = !1;
            if (a.rotateX && (o.mat4.rotateX(u, u, a.rotateX), a.rotateX = 0, s = !0), a.rotateY && (o.mat4.rotateY(i, i, a.rotateY), 
            a.rotateY = 0, s = !0), a.moveForward) {
                var c = [ i[8], i[9], i[10] ];
                o.vec3.add(l, l, o.vec3.scale(c, c, -a.moveForward)), a.moveForward = 0, s = !0;
            }
            if (a.moveLeft) {
                var M = [ i[0], i[1], i[2] ];
                o.vec3.add(l, l, o.vec3.scale(M, M, -a.moveLeft)), a.moveLeft = 0, s = !0;
            }
            if (a.moveUp) {
                var f = [ i[4], i[5], i[6] ];
                o.vec3.add(l, l, o.vec3.scale(f, f, a.moveUp)), a.moveUp = 0, s = !0;
            }
            s && (o.mat4.fromTranslation(n, l), o.mat4.multiply(n, n, i), o.mat4.multiply(n, n, u), 
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
                val: 0
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
                    deps: {
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
                    deps: {
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
                    deps: {
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
                    deps: {
                        p: "A",
                        forward: "H #props.moveForward",
                        left: "H #props.moveLeft",
                        up: "H #props.moveUp",
                        rot: "C #rotationY"
                    },
                    "do": function(t) {
                        var a = t.p, r = t.forward, e = t.left, o = t.up, u = t.rot;
                        if (r) {
                            var i = [ u[8], u[9], u[10] ];
                            n.vec3.add(a, a, n.vec3.scale(i, i, -r));
                        }
                        if (e) {
                            var l = [ u[0], u[1], u[2] ];
                            n.vec3.add(a, a, n.vec3.scale(l, l, -e));
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
                    deps: {
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
            function() {
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
                c.pressed[a.button] = Date.now(), a.button === e.LEFT && (M = a.clientX, f = a.clientY, 
                h = !0), t(c);
            }
            function r(a) {
                delete c.pressed[a.button], c.dragDelta.x = 0, c.dragDelta.y = 0, h = !1, t(c);
            }
            function n(a) {
                h && (c.dragDelta.x = M - a.clientX, c.dragDelta.y = f - a.clientY, t(c));
            }
            function o(t) {
                t.preventDefault();
            }
            var u = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], i = u.element, l = void 0 === i ? document : i, s = u.enableRightButton, c = {
                pressed: {},
                dragDelta: {
                    x: 0,
                    y: 0
                }
            }, M = 0, f = 0, h = !1;
            return l.addEventListener("mousedown", a), document.addEventListener("mouseup", r), 
            document.addEventListener("mousemove", n), s && l.addEventListener("contextmenu", o), 
            function() {
                l.removeEventListener("mousedown", a), document.removeEventListener("mousemove", n), 
                document.removeEventListener("mouseup", r), s && l.removeEventListener("contextmenu", o);
            };
        }
        function n() {
            function t(t) {
                n.state = t;
            }
            var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = {
                Buttons: e,
                state: {
                    pressed: {},
                    dragDelta: {
                        x: 0,
                        y: 0
                    }
                },
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
            var r = c(t, 4), n = r[0], e = r[1], o = r[2], u = r[3], i = c(a, 4), l = i[0], s = i[1], f = i[2], h = i[3], d = h / 255, v = Math.floor((0, 
            M.lerp)(n, l, d)), m = Math.floor((0, M.lerp)(e, s, d)), S = Math.floor((0, M.lerp)(o, f, d));
            return [ v, m, S, u ];
        }
        function e(t, a) {
            return null == a && (a = 255), [ t, t, t, a ];
        }
        function o(t) {
            var a = c(t, 4), r = a[0], n = a[1], e = a[2], o = a[3];
            return "rgba(" + r + ", " + n + ", " + e + ", " + o / 255 + ")";
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
            var a = t >> 16 & 255, r = t >> 8 & 255, n = 255 & t;
            return [ a, r, n ];
        }
        function s(t) {
            var a = t.split("#");
            return l(parseInt(a[a.length - 1], 16));
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.WHITE = a.BLACK = void 0;
        var c = function() {
            function t(t, a) {
                var r = [], n = !0, e = !1, o = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), 
                    !a || r.length !== a); n = !0) ;
                } catch (l) {
                    e = !0, o = l;
                } finally {
                    try {
                        !n && i["return"] && i["return"]();
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
        a.mixColors = n, a.grey = e, a.colorRgbaToCSS = o, a.intToFloat = u, a.floatToInt = i, 
        a.hexToRgb = l, a.hexStringToRgb = s;
        var M = r(1);
        a.BLACK = [ 0, 0, 0, 255 ], a.WHITE = [ 255, 255, 255, 255 ];
    }, function(t, a, r) {
        "use strict";
        function n(t) {
            return Math.floor(127 * (t + 1));
        }
        function e(t, a, r) {
            for (var e = t.canvas.width, u = t.canvas.height, i = (0, o.tileNoise)(e, u, a, r), l = (0, 
            o.tileNoise)(e, u, 2.1 * a, 2.1 * r), s = (0, o.tileNoise)(e, u, 4.2 * a, 4.2 * r), c = (0, 
            o.tileNoise)(e, u, 8.3 * a, 8.3 * r), M = t.getImageData(0, 0, e, u), f = 0; f < i.length - 1; f++) {
                var h = 4 * f;
                M.data[h] = n(i[f]), M.data[h + 1] = n(l[f]), M.data[h + 2] = n(s[f]), M.data[h + 3] = n(c[f]);
            }
            t.putImageData(M, 0, 0);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.drawTileNoiseTexture = e;
        var o = r(4);
    }, function(t, a, r) {
        "use strict";
        function n(t, a) {
            var r = i(t, 2), n = r[0], e = r[1], o = a.width, u = a.height;
            return n >= o && (n -= o), e >= u && (e -= u), n < 0 && (n += o), e < 0 && (e += u), 
            [ n, e ];
        }
        function e(t, a) {
            var r = i(t, 2), n = r[0], e = r[1], o = a.width, u = a.height;
            return n < 0 && (n = 0), e < 0 && (e = 0), n >= o && (n = o), e >= u && (e = u), 
            [ n, e ];
        }
        function o(t) {
            function a(a, r) {
                var n = t(r, a), e = i(n, 2), o = e[0], u = e[1];
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
                for (var r = i(a, 4), n = r[0], e = r[1], o = r[2], u = r[3], l = t.data, s = 0; s < l.length; s += 4) l[s] + n < 256 && (l[s] += n), 
                l[s + 1] + e < 256 && (l[s + 1] += e), l[s + 2] + o < 256 && (l[s + 2] += o), l[s + 3] + u < 256 && (l[s + 3] += u);
            }
            function u(t, a) {
                for (var r = i(a, 4), n = r[0], e = r[1], o = r[2], u = r[3], l = t.data, s = 0; s <= l.length; s += 4) n <= l[s] && (l[s] -= n), 
                e <= l[s + 1] && (l[s + 1] -= e), o <= l[s + 2] && (l[s + 2] -= o), u <= l[s + 3] && (l[s + 3] -= u);
            }
            function s(t, a) {
                for (var e = 0; e < t.width; e++) for (var o = 0; e < t.height; o++) n(t, [ e, o ], (0, 
                l.mixColors)(r(t, [ e, o ]), a));
            }
            function c(t, a, e) {
                for (var o = i(e, 2), u = o[0], l = o[1], s = a.width - 1, c = a.height - 1, M = 0; M < c; M++) for (var f = 0; f < s; f++) n(t, [ u + f, l + M ], r(a, [ f, M ]));
            }
            function M(t, a, e) {
                for (var o = i(e, 2), u = o[0], s = o[1], c = a.width - 1, M = a.height - 1, f = 0; f < M; f++) for (var h = 0; h < c; h++) n(t, [ u + h, s + f ], (0, 
                l.mixColors)(r(t, [ u + h, s + f ]), r(a, [ h, f ])));
            }
            return t = t || e, {
                getPixelIndex: a,
                getColorAt: r,
                setColorAt: n,
                increaseAllBy: o,
                decreaseAllBy: u,
                mixinColor: s,
                replaceWithImageDataAt: c,
                drawImageAt: M
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
        var i = function() {
            function t(t, a) {
                var r = [], n = !0, e = !1, o = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), 
                    !a || r.length !== a); n = !0) ;
                } catch (l) {
                    e = !0, o = l;
                } finally {
                    try {
                        !n && i["return"] && i["return"]();
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
        var l = r(25);
    }, function(t, a) {
        "use strict";
        function r(t) {
            var a = t.split(" "), r = s(a, 2), n = r[0], e = r[1], o = M[n.toUpperCase()];
            return {
                type: o,
                eid: e
            };
        }
        function n(t, a) {
            return a + "." + t;
        }
        function e(t, a, e) {
            e && (t = n(t, e));
            var o = t + c, u = {
                id: o,
                procedure: a["do"]
            }, i = {
                entities: [],
                processes: [ u ],
                arcs: [ {
                    process: o,
                    entity: t
                } ]
            };
            if (a.autostart && (u.autostart = a.autostart), a.async && (u.async = a.async), 
            a.meta && (u.meta = a.meta), a.deps) {
                u.ports = {};
                for (var l in a.deps) {
                    var s = r(a.deps[l]);
                    if (u.ports[l] = s.type, s.eid) {
                        if (0 === s.eid.indexOf("#")) {
                            var M = s.eid.substr(1);
                            s.eid = e ? n(M, e) : M;
                        }
                        i.arcs.push({
                            entity: s.eid,
                            process: o,
                            port: l
                        });
                    }
                }
            }
            return i;
        }
        function o() {
            return {
                entities: [],
                processes: [],
                arcs: []
            };
        }
        function u(t, a) {
            return {
                entities: t.entities.concat(a.entities),
                processes: t.processes.concat(a.processes),
                arcs: t.arcs.concat(a.arcs)
            };
        }
        function i(t, a, r) {
            var i = o(), l = r ? n(t, r) : t, s = {
                id: l
            };
            return null != a.val && (s.value = a.val), a.json && (s.json = a.json), a.isEvent && (s.isEvent = a.isEvent), 
            a.meta && (s.meta = a.meta), a.stream && (i = u(i, e(t, a.stream, r))), a.streams && (i = a.streams.map(function(a) {
                return e(t, a, r);
            }).map(function(t, a) {
                return t.processes[0].id += a + 1, t.arcs.forEach(function(t) {
                    return t.process += a + 1;
                }), t;
            }).reduce(u, i)), i.entities.push(s), i;
        }
        function l(t, a) {
            return Object.keys(t).map(function(r) {
                return i(r, t[r], a);
            }).reduce(u, o());
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = function() {
            function t(t, a) {
                var r = [], n = !0, e = !1, o = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), 
                    !a || r.length !== a); n = !0) ;
                } catch (l) {
                    e = !0, o = l;
                } finally {
                    try {
                        !n && i["return"] && i["return"]();
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
        a.processProcessSpec = e, a.processEntitySpec = i, a.toGraph = l;
        var c = "Stream", M = {
            H: "HOT",
            C: "COLD",
            A: "ACCUMULATOR"
        };
    } ]);
});
//# sourceMappingURL=tvs-libs.js.map