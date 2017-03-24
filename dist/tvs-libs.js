!function(t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.tvsLibs = r() : t.tvsLibs = r();
}(this, function() {
    return function(t) {
        function r(a) {
            if (e[a]) return e[a].exports;
            var n = e[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return t[a].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
        }
        var e = {};
        return r.m = t, r.c = e, r.i = function(t) {
            return t;
        }, r.d = function(t, e, a) {
            r.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: a
            });
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return r.d(e, "a", e), e;
        }, r.o = function(t, r) {
            return Object.prototype.hasOwnProperty.call(t, r);
        }, r.p = "", r(r.s = 31);
    }([ function(t, r) {
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
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e(7);
        e.n(a);
        for (var n in a) "default" !== n && function(t) {
            e.d(r, t, function() {
                return a[t];
            });
        }(n);
        var o = e(32);
        e.d(r, "fvec3", function() {
            return o.a;
        });
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function n(t, r, e) {
            return t + e * (r - t);
        }
        function o(t, r, e) {
            return Math.max(r, Math.min(t, e));
        }
        function u(t) {
            return Math.floor(Math.random() * t);
        }
        function i(t, r) {
            return u(r - t) + t;
        }
        function s() {
            return (Math.random() + Math.random() + Math.random()) / 3;
        }
        function l(t) {
            return t * c;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "DEG_TO_RAD_FACTOR", function() {
            return c;
        }), r.sign = a, r.lerp = n, r.clamp = o, r.randInt = u, r.randIntInRange = i, r.normalRand = s, 
        r.degToRad = l;
        var c = Math.PI / 180;
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            var a = t[0], n = t[1], o = t[2], u = t[3], i = r[0], s = r[1], l = r[2], f = r[3], M = f / 255;
            return [ Math.floor(e.i(c.lerp)(a, i, M)), Math.floor(e.i(c.lerp)(n, s, M)), Math.floor(e.i(c.lerp)(o, l, M)), u ];
        }
        function n(t, r) {
            return null == r && (r = 255), [ t, t, t, r ];
        }
        function o(t) {
            return "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] / 255 + ")";
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
        function s(t) {
            return t = Math.floor(t), [ t >> 16 & 255, t >> 8 & 255, 255 & t ];
        }
        function l(t) {
            var r = t.split("#");
            return s(parseInt(r[r.length - 1], 16));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var c = e(2);
        e.d(r, "BLACK", function() {
            return f;
        }), e.d(r, "WHITE", function() {
            return M;
        }), r.mixColors = a, r.grey = n, r.colorRgbaToCSS = o, r.intToFloat = u, r.floatToInt = i, 
        r.hexToRgb = s, r.hexStringToRgb = l;
        var f = [ 0, 0, 0, 255 ], M = [ 255, 255, 255, 255 ];
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
            var r = t, e = r[0], a = r[1], n = r[2], o = r[3];
            return c.mat4.fromValues(1 - 2 * e * e, -2 * e * a, -2 * e * n, 0, -2 * e * a, 1 - 2 * a * a, -2 * a * n, 0, -2 * e * n, -2 * a * n, 1 - 2 * n * n, 0, -2 * e * o, -2 * a * o, -2 * n * o, 1);
        }
        function i(t, r) {
            return r *= .5, t[0] = 0, t[1] = Math.sin(r), t[2] = 0, t[3] = Math.cos(r), t;
        }
        function s(t, r) {
            return r *= .5, t[0] = Math.sin(r), t[1] = 0, t[2] = 0, t[3] = Math.cos(r), t;
        }
        function l(t, r) {
            return r *= .5, t[0] = 0, t[1] = 0, t[2] = Math.sin(r), t[3] = Math.cos(r), t;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var c = e(1);
        r.planeFromNormalAndCoplanarPoint = a, r.planeFromThreeCoplanarPoints = n, r.normalFromThreeCoplanarPoints = o, 
        r.mirrorMatrixFromPlane = u, r.getYawQuat = i, r.getPitchQuat = s, r.getRollQuat = l;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            return t * t * t * (t * (6 * t - 15) + 10);
        }
        function n(t, r, e) {
            return r + t * (e - r);
        }
        function o(t, r) {
            return 0 == (1 & t) ? r : -r;
        }
        function u(t) {
            var r, e, u;
            return e = ~~t, r = 255 & e, t -= e, u = a(t), n(u, o(h[r], t), o(h[r + 1], t - 1));
        }
        function i(t, r) {
            var e, a, n = 0, o = 0, u = 0, i = (t + r) * d, s = Math.floor(t + i), l = Math.floor(r + i), c = (s + l) * v, f = s - c, M = l - c, h = t - f, m = r - M;
            h > m ? (e = 1, a = 0) : (e = 0, a = 1);
            var S = h - e + v, I = m - a + v, x = h - 1 + 2 * v, D = m - 1 + 2 * v, E = 255 & s, g = 255 & l, w = .5 - h * h - m * m;
            if (w >= 0) {
                var A = 3 * p[E + F[g]];
                w *= w, n = w * w * (b[A] * h + b[A + 1] * m);
            }
            var y = .5 - S * S - I * I;
            if (y >= 0) {
                var T = 3 * p[E + e + F[g + a]];
                y *= y, o = y * y * (b[T] * S + b[T + 1] * I);
            }
            var R = .5 - x * x - D * D;
            if (R >= 0) {
                var P = 3 * p[E + 1 + F[g + 1]];
                R *= R, u = R * R * (b[P] * x + b[P + 1] * D);
            }
            return 70 * (n + o + u);
        }
        function s(t, r, e) {
            var a, n, o, u, i, s, l, c, f, M, h = (t + r + e) * m, d = Math.floor(t + h), v = Math.floor(r + h), I = Math.floor(e + h), x = (d + v + I) * S, D = d - x, E = v - x, g = I - x, w = t - D, A = r - E, y = e - g;
            w >= A ? A >= y ? (i = 1, s = 0, l = 0, c = 1, f = 1, M = 0) : w >= y ? (i = 1, 
            s = 0, l = 0, c = 1, f = 0, M = 1) : (i = 0, s = 0, l = 1, c = 1, f = 0, M = 1) : A < y ? (i = 0, 
            s = 0, l = 1, c = 0, f = 1, M = 1) : w < y ? (i = 0, s = 1, l = 0, c = 0, f = 1, 
            M = 1) : (i = 0, s = 1, l = 0, c = 1, f = 1, M = 0);
            var T = w - i + S, R = A - s + S, P = y - l + S, _ = w - c + 2 * S, O = A - f + 2 * S, L = y - M + 2 * S, z = w - 1 + 3 * S, N = A - 1 + 3 * S, U = y - 1 + 3 * S, C = 255 & d, q = 255 & v, Y = 255 & I, B = .6 - w * w - A * A - y * y;
            if (B < 0) a = 0; else {
                var j = 3 * p[C + F[q + F[Y]]];
                B *= B, a = B * B * (b[j] * w + b[j + 1] * A + b[j + 2] * y);
            }
            var H = .6 - T * T - R * R - P * P;
            if (H < 0) n = 0; else {
                var X = 3 * p[C + i + F[q + s + F[Y + l]]];
                H *= H, n = H * H * (b[X] * T + b[X + 1] * R + b[X + 2] * P);
            }
            var k = .6 - _ * _ - O * O - L * L;
            if (k < 0) o = 0; else {
                var G = 3 * p[C + c + F[q + f + F[Y + M]]];
                k *= k, o = k * k * (b[G] * _ + b[G + 1] * O + b[G + 2] * L);
            }
            var V = .6 - z * z - N * N - U * U;
            if (V < 0) u = 0; else {
                var Q = 3 * p[C + 1 + F[q + 1 + F[Y + 1]]];
                V *= V, u = V * V * (b[Q] * z + b[Q + 1] * N + b[Q + 2] * U);
            }
            return 32 * (a + n + o + u);
        }
        function l(t, r, e, a) {
            var n, o, u, i, s, l = (t + r + e + a) * I, c = Math.floor(t + l), f = Math.floor(r + l), M = Math.floor(e + l), h = Math.floor(a + l), d = (c + f + M + h) * x, v = c - d, m = f - d, S = M - d, D = h - d, p = t - v, b = r - m, g = e - S, w = a - D, A = 0, y = 0, T = 0, R = 0;
            p > b ? A++ : y++, p > g ? A++ : T++, p > w ? A++ : R++, b > g ? y++ : T++, b > w ? y++ : R++, 
            g > w ? T++ : R++;
            var P, _, O, L, z, N, U, C, q, Y, B, j;
            P = A >= 3 ? 1 : 0, _ = y >= 3 ? 1 : 0, O = T >= 3 ? 1 : 0, L = R >= 3 ? 1 : 0, 
            z = A >= 2 ? 1 : 0, N = y >= 2 ? 1 : 0, U = T >= 2 ? 1 : 0, C = R >= 2 ? 1 : 0, 
            q = A >= 1 ? 1 : 0, Y = y >= 1 ? 1 : 0, B = T >= 1 ? 1 : 0, j = R >= 1 ? 1 : 0;
            var H = p - P + x, X = b - _ + x, k = g - O + x, G = w - L + x, V = p - z + 2 * x, Q = b - N + 2 * x, W = g - U + 2 * x, K = w - C + 2 * x, Z = p - q + 3 * x, J = b - Y + 3 * x, $ = g - B + 3 * x, tt = w - j + 3 * x, rt = p - 1 + 4 * x, et = b - 1 + 4 * x, at = g - 1 + 4 * x, nt = w - 1 + 4 * x, ot = 255 & c, ut = 255 & f, it = 255 & M, st = 255 & h, lt = .6 - p * p - b * b - g * g - w * w;
            if (lt < 0) n = 0; else {
                var ct = F[ot + F[ut + F[it + F[st]]]] % 32 * 4;
                lt *= lt, n = lt * lt * (E[ct] * p + E[ct + 1] * b + E[ct + 2] * g + E[ct + 3] * w);
            }
            var ft = .6 - H * H - X * X - k * k - G * G;
            if (ft < 0) o = 0; else {
                var Mt = F[ot + P + F[ut + _ + F[it + O + F[st + L]]]] % 32 * 4;
                ft *= ft, o = ft * ft * (E[Mt] * H + E[Mt + 1] * X + E[Mt + 2] * k + E[Mt + 3] * G);
            }
            var ht = .6 - V * V - Q * Q - W * W - K * K;
            if (ht < 0) u = 0; else {
                var dt = F[ot + z + F[ut + N + F[it + U + F[st + C]]]] % 32 * 4;
                ht *= ht, u = ht * ht * (E[dt] * V + E[dt + 1] * Q + E[dt + 2] * W + E[dt + 3] * K);
            }
            var vt = .6 - Z * Z - J * J - $ * $ - tt * tt;
            if (vt < 0) i = 0; else {
                var mt = F[ot + q + F[ut + Y + F[it + B + F[st + j]]]] % 32 * 4;
                vt *= vt, i = vt * vt * (E[mt] * Z + E[mt + 1] * J + E[mt + 2] * $ + E[mt + 3] * tt);
            }
            var St = .6 - rt * rt - et * et - at * at - nt * nt;
            if (St < 0) s = 0; else {
                var It = F[ot + 1 + F[ut + 1 + F[it + 1 + F[st + 1]]]] % 32 * 4;
                St *= St, s = St * St * (E[It] * rt + E[It + 1] * et + E[It + 2] * at + E[It + 3] * nt);
            }
            return 27 * (n + o + u + i + s);
        }
        function c(t, r, e, a) {
            for (var n = [], o = 0; o < r; o++) for (var u = 0; u < t; u++) {
                var i = u / t, s = o / r, c = Math.cos(2 * i * Math.PI) * e / (2 * Math.PI), f = Math.cos(2 * s * Math.PI) * a / (2 * Math.PI), M = Math.sin(2 * i * Math.PI) * e / (2 * Math.PI), h = Math.sin(2 * s * Math.PI) * a / (2 * Math.PI);
                n.push(l(c, f, M, h));
            }
            return n;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.noise1d = u, r.noise2d = i, r.noise3d = s, r.noise4d = l, r.tileNoise = c;
        var f, M, h = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (f = M = 0; M <= 256; f = ++M) h[256 + f] = h[f];
        var d = .5 * (Math.sqrt(3) - 1), v = (3 - Math.sqrt(3)) / 6, m = 1 / 3, S = 1 / 6, I = (Math.sqrt(5) - 1) / 4, x = (5 - Math.sqrt(5)) / 20, D = new Uint8Array(256), F = new Uint8Array(512), p = new Uint8Array(512);
        for (f = 0; f < 256; f++) D[f] = 256 * Math.random();
        for (f = 0; f < 512; f++) F[f] = D[255 & f], p[f] = F[f] % 12;
        var b = new Float32Array([ 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1 ]), E = new Float32Array([ 0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0 ]);
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] + r[a];
            return e;
        }
        function n(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] + r;
            return e;
        }
        function o(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] - r[a];
            return e;
        }
        function u(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] - r;
            return e;
        }
        function i(t, r) {
            for (var e = [], a = 0; a < t.length; a++) e[a] = t[a] * r;
            return e;
        }
        function s(t, r) {
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
        function c(t) {
            return s(t, l(t));
        }
        function f(t, r) {
            return r < l(t) ? i(c(t), r) : t;
        }
        function M(t, r) {
            if (t.length != r.length) return !1;
            for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
            return !0;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.add = a, r.addScalar = n, r.sub = o, r.subScalar = u, r.mul = i, r.div = s, 
        r.length = l, r.normalize = c, r.limit = f, r.isEqual = M;
    }, function(t, r, e) {
        r.glMatrix = e(0), r.mat2 = e(26), r.mat2d = e(27), r.mat3 = e(8), r.mat4 = e(28), 
        r.quat = e(29), r.vec2 = e(30), r.vec3 = e(9), r.vec4 = e(10);
    }, function(t, r, e) {
        var a = e(0), n = {};
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
        }, n.fromValues = function(t, r, e, n, o, u, i, s, l) {
            var c = new a.ARRAY_TYPE(9);
            return c[0] = t, c[1] = r, c[2] = e, c[3] = n, c[4] = o, c[5] = u, c[6] = i, c[7] = s, 
            c[8] = l, c;
        }, n.set = function(t, r, e, a, n, o, u, i, s, l) {
            return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t[4] = o, t[5] = u, t[6] = i, t[7] = s, 
            t[8] = l, t;
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
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], s = r[6], l = r[7], c = r[8], f = c * u - i * l, M = -c * o + i * s, h = l * o - u * s, d = e * f + a * M + n * h;
            return d ? (d = 1 / d, t[0] = f * d, t[1] = (-c * a + n * l) * d, t[2] = (i * a - n * u) * d, 
            t[3] = M * d, t[4] = (c * e - n * s) * d, t[5] = (-i * e + n * o) * d, t[6] = h * d, 
            t[7] = (-l * e + a * s) * d, t[8] = (u * e - a * o) * d, t) : null;
        }, n.adjoint = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], s = r[6], l = r[7], c = r[8];
            return t[0] = u * c - i * l, t[1] = n * l - a * c, t[2] = a * i - n * u, t[3] = i * s - o * c, 
            t[4] = e * c - n * s, t[5] = n * o - e * i, t[6] = o * l - u * s, t[7] = a * s - e * l, 
            t[8] = e * u - a * o, t;
        }, n.determinant = function(t) {
            var r = t[0], e = t[1], a = t[2], n = t[3], o = t[4], u = t[5], i = t[6], s = t[7], l = t[8];
            return r * (l * o - u * s) + e * (-l * n + u * i) + a * (s * n - o * i);
        }, n.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = r[6], c = r[7], f = r[8], M = e[0], h = e[1], d = e[2], v = e[3], m = e[4], S = e[5], I = e[6], x = e[7], D = e[8];
            return t[0] = M * a + h * u + d * l, t[1] = M * n + h * i + d * c, t[2] = M * o + h * s + d * f, 
            t[3] = v * a + m * u + S * l, t[4] = v * n + m * i + S * c, t[5] = v * o + m * s + S * f, 
            t[6] = I * a + x * u + D * l, t[7] = I * n + x * i + D * c, t[8] = I * o + x * s + D * f, 
            t;
        }, n.mul = n.multiply, n.translate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = r[6], c = r[7], f = r[8], M = e[0], h = e[1];
            return t[0] = a, t[1] = n, t[2] = o, t[3] = u, t[4] = i, t[5] = s, t[6] = M * a + h * u + l, 
            t[7] = M * n + h * i + c, t[8] = M * o + h * s + f, t;
        }, n.rotate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = r[6], c = r[7], f = r[8], M = Math.sin(e), h = Math.cos(e);
            return t[0] = h * a + M * u, t[1] = h * n + M * i, t[2] = h * o + M * s, t[3] = h * u - M * a, 
            t[4] = h * i - M * n, t[5] = h * s - M * o, t[6] = l, t[7] = c, t[8] = f, t;
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
            var e = r[0], a = r[1], n = r[2], o = r[3], u = e + e, i = a + a, s = n + n, l = e * u, c = a * u, f = a * i, M = n * u, h = n * i, d = n * s, v = o * u, m = o * i, S = o * s;
            return t[0] = 1 - f - d, t[3] = c - S, t[6] = M + m, t[1] = c + S, t[4] = 1 - l - d, 
            t[7] = h - v, t[2] = M - m, t[5] = h + v, t[8] = 1 - l - f, t;
        }, n.normalFromMat4 = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], s = r[6], l = r[7], c = r[8], f = r[9], M = r[10], h = r[11], d = r[12], v = r[13], m = r[14], S = r[15], I = e * i - a * u, x = e * s - n * u, D = e * l - o * u, F = a * s - n * i, p = a * l - o * i, b = n * l - o * s, E = c * v - f * d, g = c * m - M * d, w = c * S - h * d, A = f * m - M * v, y = f * S - h * v, T = M * S - h * m, R = I * T - x * y + D * A + F * w - p * g + b * E;
            return R ? (R = 1 / R, t[0] = (i * T - s * y + l * A) * R, t[1] = (s * w - u * T - l * g) * R, 
            t[2] = (u * y - i * w + l * E) * R, t[3] = (n * y - a * T - o * A) * R, t[4] = (e * T - n * w + o * g) * R, 
            t[5] = (a * w - e * y - o * E) * R, t[6] = (v * b - m * p + S * F) * R, t[7] = (m * D - d * b - S * x) * R, 
            t[8] = (d * p - v * D + S * I) * R, t) : null;
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
            var e = t[0], n = t[1], o = t[2], u = t[3], i = t[4], s = t[5], l = t[6], c = t[7], f = t[8], M = r[0], h = r[1], d = r[2], v = r[3], m = r[4], S = r[5], I = t[6], x = r[7], D = r[8];
            return Math.abs(e - M) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(n - h) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(o - d) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(u - v) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(i - m) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(s - S) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(S)) && Math.abs(l - I) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(I)) && Math.abs(c - x) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(f - D) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(D));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(0), n = {};
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
            var a = r[0], n = r[1], o = r[2], u = e[0], i = e[1], s = e[2];
            return t[0] = n * s - o * i, t[1] = o * u - a * s, t[2] = a * i - n * u, t;
        }, n.lerp = function(t, r, e, a) {
            var n = r[0], o = r[1], u = r[2];
            return t[0] = n + a * (e[0] - n), t[1] = o + a * (e[1] - o), t[2] = u + a * (e[2] - u), 
            t;
        }, n.hermite = function(t, r, e, a, n, o) {
            var u = o * o, i = u * (2 * o - 3) + 1, s = u * (o - 2) + o, l = u * (o - 1), c = u * (3 - 2 * o);
            return t[0] = r[0] * i + e[0] * s + a[0] * l + n[0] * c, t[1] = r[1] * i + e[1] * s + a[1] * l + n[1] * c, 
            t[2] = r[2] * i + e[2] * s + a[2] * l + n[2] * c, t;
        }, n.bezier = function(t, r, e, a, n, o) {
            var u = 1 - o, i = u * u, s = o * o, l = i * u, c = 3 * o * i, f = 3 * s * u, M = s * o;
            return t[0] = r[0] * l + e[0] * c + a[0] * f + n[0] * M, t[1] = r[1] * l + e[1] * c + a[1] * f + n[1] * M, 
            t[2] = r[2] * l + e[2] * c + a[2] * f + n[2] * M, t;
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
            var a = r[0], n = r[1], o = r[2], u = e[0], i = e[1], s = e[2], l = e[3], c = l * a + i * o - s * n, f = l * n + s * a - u * o, M = l * o + u * n - i * a, h = -u * a - i * n - s * o;
            return t[0] = c * l + h * -u + f * -s - M * -i, t[1] = f * l + h * -i + M * -u - c * -s, 
            t[2] = M * l + h * -s + c * -i - f * -u, t;
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
                var i, s;
                for (e || (e = 3), a || (a = 0), s = n ? Math.min(n * e + a, r.length) : r.length, 
                i = a; i < s; i += e) t[0] = r[i], t[1] = r[i + 1], t[2] = r[i + 2], o(t, t, u), 
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
            var e = t[0], n = t[1], o = t[2], u = r[0], i = r[1], s = r[2];
            return Math.abs(e - u) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(u)) && Math.abs(n - i) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(o - s) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(s));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(0), n = {};
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
            var a = r[0], n = r[1], o = r[2], u = e[0], i = e[1], s = e[2], l = e[3], c = l * a + i * o - s * n, f = l * n + s * a - u * o, M = l * o + u * n - i * a, h = -u * a - i * n - s * o;
            return t[0] = c * l + h * -u + f * -s - M * -i, t[1] = f * l + h * -i + M * -u - c * -s, 
            t[2] = M * l + h * -s + c * -i - f * -u, t[3] = r[3], t;
        }, n.forEach = function() {
            var t = n.create();
            return function(r, e, a, n, o, u) {
                var i, s;
                for (e || (e = 4), a || (a = 0), s = n ? Math.min(n * e + a, r.length) : r.length, 
                i = a; i < s; i += e) t[0] = r[i], t[1] = r[i + 1], t[2] = r[i + 2], t[3] = r[i + 3], 
                o(t, t, u), r[i] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r[i + 3] = t[3];
                return r;
            };
        }(), n.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, n.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3];
        }, n.equals = function(t, r) {
            var e = t[0], n = t[1], o = t[2], u = t[3], i = r[0], s = r[1], l = r[2], c = r[3];
            return Math.abs(e - i) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(n - s) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(o - l) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(u - c) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(c));
        }, t.exports = n;
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            return r ? r + "." + t : t;
        }
        function n(t) {
            var r, n, o = t.value, i = e.i(f.a)(), s = 0, M = [], h = {};
            return h.HOT = {
                entity: h,
                type: c.a.HOT
            }, h.COLD = {
                entity: h,
                type: c.a.COLD
            }, h.id = function(t, e) {
                return i = a(t, e), r = e, h;
            }, h.val = function(t) {
                return o = t, h;
            }, h.accept = function(t) {
                return n = t, h;
            }, h.getId = function() {
                return i;
            }, t.procedure && M.push(t), h.react = function(t, r, e) {
                var a = u(t, r, e);
                a.pidSuffix = d + s++;
                var n = a.dependencies;
                return a.dependencies = [ {
                    entity: h,
                    type: c.a.ACCUMULATOR
                } ], n && n.length && (a.dependencies = a.dependencies.concat(n)), M.push(a), h;
            }, h.getGraph = function() {
                var t = l.a();
                return t.entities[i] = e.i(c.b)({
                    id: i,
                    value: o,
                    accept: n
                }), M.forEach(function(n) {
                    var o = n.processId ? a(n.processId, r) : i + n.pidSuffix, u = n.dependencies, s = [];
                    if (u) for (var l in u) {
                        var f = u[l];
                        if (s[l] = f.type, f.type !== c.a.ACCUMULATOR) {
                            var M = e.i(c.c)({
                                process: o,
                                entity: f.entity.getId(),
                                port: l
                            });
                            t.arcs[M.id] = M;
                        }
                    }
                    var h = e.i(c.c)({
                        process: o,
                        entity: i
                    });
                    t.arcs[h.id] = h, t.processes[o] = e.i(c.d)({
                        id: o,
                        ports: s,
                        procedure: n.procedure,
                        async: n.async,
                        autostart: n.autostart
                    });
                }), t;
            }, h;
        }
        function o(t) {
            return n({
                value: t
            });
        }
        function u(t, r, e) {
            if ("function" == typeof t) return {
                procedure: t,
                pidSuffix: h
            };
            if (Array.isArray(t) && "function" == typeof r) return {
                dependencies: t,
                procedure: r,
                pidSuffix: h
            };
            if ("string" == typeof t && "function" == typeof r) return {
                processId: t,
                procedure: r
            };
            if ("string" == typeof t && Array.isArray(r) && "function" == typeof e) return {
                processId: t,
                dependencies: r,
                procedure: e
            };
            throw TypeError("Wrong stream arguments");
        }
        function i(t, r, e) {
            return n(u(t, r, e));
        }
        function s(t, r, e) {
            return n(M({}, u(t, r, e), {
                async: !0,
                autostart: !0
            }));
        }
        var l = e(35), c = e(33), f = e(12);
        r.a = o, r.c = i, r.b = s;
        var M = this && this.__assign || Object.assign || function(t) {
            for (var r, e = 1, a = arguments.length; e < a; e++) {
                r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        }, h = "Stream", d = "Reaction";
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            var r = 0, e = i;
            return e[t[r++]] + e[t[r++]] + e[t[r++]] + e[t[r++]] + "-" + e[t[r++]] + e[t[r++]] + "-" + e[t[r++]] + e[t[r++]] + "-" + e[t[r++]] + e[t[r++]] + "-" + e[t[r++]] + e[t[r++]] + e[t[r++]] + e[t[r++]] + e[t[r++]] + e[t[r++]];
        }
        function n() {
            var t = u();
            return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, a(t);
        }
        r.a = n;
        for (var o = new Array(16), u = function() {
            for (var t, r = 0; r < 16; r++) 0 == (3 & r) && (t = 4294967296 * Math.random()), 
            o[r] = t >>> ((3 & r) << 3) & 255;
            return o;
        }, i = [], s = {}, l = 0; l < 256; l++) i[l] = (l + 256).toString(16).substr(1), 
        s[i[l]] = l;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
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
        function n() {
            var t = {
                size: {
                    width: 0,
                    height: 0
                }
            }, r = a(function(r) {
                return t.size = r;
            });
            return {
                state: t,
                destroy: r
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.windowSize = a, r.windowSizeObserver = n;
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            function e(r) {
                u[r.keyCode] = Date.now(), t(u);
            }
            function a(r) {
                delete u[r.keyCode], t(u);
            }
            void 0 === r && (r = {});
            var n = r.element, o = void 0 === n ? window : n, u = {};
            return o.addEventListener("keyup", a, !1), o.addEventListener("keydown", e, !1), 
            t(u), function() {
                o.removeEventListener("keyup", a), o.removeEventListener("keydown", e);
            };
        }
        function n(t) {
            function r(t) {
                e.state.pressed = t;
            }
            var e = {
                Keys: o,
                state: {
                    pressed: {}
                },
                destroy: function() {}
            };
            return e.destroy = a(r, t), e;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "Keys", function() {
            return o;
        }), r.keyboard = a, r.keyboardObserver = n;
        var o = {
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
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            function e(r) {
                c.pressed[r.button] = r, r.button === o.LEFT && (f = r.clientX, M = r.clientY, h = !0), 
                t(c);
            }
            function a(r) {
                delete c.pressed[r.button], delete c.dragDelta.event, c.dragDelta.x = 0, c.dragDelta.y = 0, 
                h = !1, t(c);
            }
            function n(r) {
                h && (c.dragDelta.event = r, c.dragDelta.x = f - r.clientX, c.dragDelta.y = M - r.clientY, 
                f = r.clientX, M = r.clientY, t(c));
            }
            function u(t) {
                t.preventDefault();
            }
            void 0 === r && (r = {});
            var i = r.element, s = void 0 === i ? document : i, l = r.enableRightButton, c = {
                pressed: {},
                dragDelta: {
                    x: 0,
                    y: 0
                }
            }, f = 0, M = 0, h = !1;
            return s.addEventListener("mousedown", e), document.addEventListener("mouseup", a), 
            document.addEventListener("mousemove", n), l && s.addEventListener("contextmenu", u), 
            t(c), function() {
                s.removeEventListener("mousedown", e), document.removeEventListener("mousemove", n), 
                document.removeEventListener("mouseup", a), l && s.removeEventListener("contextmenu", u);
            };
        }
        function n(t) {
            function r(t) {
                e.state = t;
            }
            void 0 === t && (t = {});
            var e = {
                Buttons: o,
                state: {},
                destroy: function() {}
            };
            return e.destroy = a(r, t), e;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "Buttons", function() {
            return o;
        }), r.mouse = a, r.mouseObserver = n;
        var o = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        };
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            function r(t) {
                return function() {
                    for (var r in this) "function" == typeof this[r][t] && this[r][t]();
                };
            }
            function e(t, e) {
                return void 0 === e && (e = {}), t.split(".").reduce(function(t, e) {
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
                    var i = e(a, r), s = n[a], l = Object.keys(o).map(function(t) {
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
                        null != s.value ? t.set(a, s.value) : null != s.json && t.set(a, JSON.parse(s.json));
                    }, i.watch = function() {
                        t.on(a, function(t) {
                            return console.log(a, t);
                        });
                    }, i.unwatch = function() {
                        t.off(a);
                    }, i.streams = {}, l.forEach(function(r) {
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
            return a({
                update: function() {
                    for (var t in this) "update" !== t && delete this[t];
                    a(this);
                }
            });
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.create = a;
    }, function(t, r, e) {
        "use strict";
        function a(t, r) {
            var e = t[0], a = t[1], n = r.width, o = r.height;
            return e >= n && (e -= n), a >= o && (a -= o), e < 0 && (e += n), a < 0 && (a += o), 
            [ e, a ];
        }
        function n(t, r) {
            var e = t[0], a = t[1], n = r.width, o = r.height;
            return e < 0 && (e = 0), a < 0 && (a = 0), e >= n && (e = n), a >= o && (a = o), 
            [ e, a ];
        }
        function o(t) {
            function r(r, e) {
                var a = t(e, r), n = a[0];
                return 4 * (a[1] * r.height + n);
            }
            function a(t, e) {
                var a = r(t, e);
                return [ t.data[a], t.data[a + 1], t.data[a + 2], t.data[a + 3] ];
            }
            function o(t, e, a) {
                var n = r(t, e);
                t.data[n] = a[0], t.data[n + 1] = a[1], t.data[n + 2] = a[2], t.data[n + 3] = a[3];
            }
            function u(t, r) {
                for (var e = r[0], a = r[1], n = r[2], o = r[3], u = t.data, i = 0; i < u.length; i += 4) u[i] + e < 256 && (u[i] += e), 
                u[i + 1] + a < 256 && (u[i + 1] += a), u[i + 2] + n < 256 && (u[i + 2] += n), u[i + 3] + o < 256 && (u[i + 3] += o);
            }
            function s(t, r) {
                for (var e = r[0], a = r[1], n = r[2], o = r[3], u = t.data, i = 0; i <= u.length; i += 4) e <= u[i] && (u[i] -= e), 
                a <= u[i + 1] && (u[i + 1] -= a), n <= u[i + 2] && (u[i + 2] -= n), o <= u[i + 3] && (u[i + 3] -= o);
            }
            function l(t, r) {
                for (var n = 0; n < t.width; n++) for (var u = 0; n < t.height; u++) o(t, [ n, u ], e.i(i.mixColors)(a(t, [ n, u ]), r));
            }
            function c(t, r, e) {
                for (var n = e[0], u = e[1], i = r.width - 1, s = r.height - 1, l = 0; l < s; l++) for (var c = 0; c < i; c++) o(t, [ n + c, u + l ], a(r, [ c, l ]));
            }
            function f(t, r, n) {
                for (var u = n[0], s = n[1], l = r.width - 1, c = r.height - 1, f = 0; f < c; f++) for (var M = 0; M < l; M++) o(t, [ u + M, s + f ], e.i(i.mixColors)(a(t, [ u + M, s + f ]), a(r, [ M, f ])));
            }
            return t = t || n, {
                getPixelIndex: r,
                getColorAt: a,
                setColorAt: o,
                increaseAllBy: u,
                decreaseAllBy: s,
                mixinColor: l,
                replaceWithImageDataAt: c,
                drawImageAt: f
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
        var i = e(3);
        r.repeatedPosition = a, r.closedPosition = n, r.createPixelContext = o, r.createImgDataFromImage = u;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            return Math.floor(127 * (t + 1));
        }
        function n(t, r, n) {
            for (var u = t.canvas.width, i = t.canvas.height, s = e.i(o.tileNoise)(u, i, r, n), l = e.i(o.tileNoise)(u, i, 2.1 * r, 2.1 * n), c = e.i(o.tileNoise)(u, i, 4.2 * r, 4.2 * n), f = e.i(o.tileNoise)(u, i, 8.3 * r, 8.3 * n), M = t.getImageData(0, 0, u, i), h = 0; h < s.length - 1; h++) {
                var d = 4 * h;
                M.data[d] = a(s[h]), M.data[d + 1] = a(l[h]), M.data[d + 2] = a(c[h]), M.data[d + 3] = a(f[h]);
            }
            t.putImageData(M, 0, 0);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = e(5);
        r.drawTileNoiseTexture = n;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            return [ e.i(o.length)(t), Math.atan2(t[1], t[0]) ];
        }
        function n(t) {
            var r = t[0], e = t[1];
            return [ r * Math.cos(e), r * Math.sin(e) ];
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = e(6);
        r.cartesianToPolar2D = a, r.polarToCartesian2D = n;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            function r() {
                a && (e = Date.now(), t(e - n), n = e, requestAnimationFrame(r));
            }
            var e, a = !0, n = Date.now();
            return r(), function() {
                a = !1;
            };
        }
        function n(t) {
            function r() {
                e && (t(), requestAnimationFrame(r));
            }
            var e = !0;
            return r(), function() {
                e = !1;
            };
        }
        function o(t) {
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
        }), r.animateWithTPF = a, r.animate = n, r.animator = o;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            return t[e.i(u.randInt)(t.length)];
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
        });
        var u = e(2);
        r.pick = a, r.doTimes = n, r.yieldTimes = o;
    }, function(t, r, e) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "generateUUID", function() {
            return a;
        });
        var a = function() {
            var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = new Array(36), e = 0, a = 0;
            return function() {
                for (var n = 0; n < 36; ) 8 === n || 13 === n || 18 === n || 23 === n ? r[n] = "-" : 14 === n ? r[n] = "4" : (e <= 2 && (e = 33554432 + 16777216 * Math.random() | 0), 
                a = 15 & e, e >>= 4, r[n] = t[19 === n ? 3 & a | 8 : a]), n += 1;
                return r.join("");
            };
        }();
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            void 0 === t && (t = {});
            var r = Object.assign({
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
            }, t);
            return {
                props: r,
                state: {
                    view: o.mat4.create(),
                    perspective: o.mat4.perspective(o.mat4.create(), r.fovy, r.aspect, r.near, r.far),
                    rotationX: o.mat4.create(),
                    rotationY: o.mat4.create(),
                    position: [ 0, 0, 0 ]
                }
            };
        }
        function n(t) {
            var r = t.props, e = t.state, a = e.view, n = e.perspective, u = e.rotationX, i = e.rotationY, s = e.position;
            r.needsUpdatePerspective && (r.needsUpdatePerspective = !1, o.mat4.perspective(n, r.fovy, r.aspect, r.near, r.far));
            var l = !1;
            if (r.rotateX && (o.mat4.rotateX(u, u, r.rotateX), r.rotateX = 0, l = !0), r.rotateY && (o.mat4.rotateY(i, i, r.rotateY), 
            r.rotateY = 0, l = !0), r.moveForward) {
                var c = [ i[8], i[9], i[10] ];
                o.vec3.add(s, s, o.vec3.scale(c, c, -r.moveForward)), r.moveForward = 0, l = !0;
            }
            if (r.moveLeft) {
                var c = [ i[0], i[1], i[2] ];
                o.vec3.add(s, s, o.vec3.scale(c, c, -r.moveLeft)), r.moveLeft = 0, l = !0;
            }
            if (r.moveUp) {
                var c = [ i[4], i[5], i[6] ];
                o.vec3.add(s, s, o.vec3.scale(c, c, r.moveUp)), r.moveUp = 0, l = !0;
            }
            l && (o.mat4.fromTranslation(a, s), o.mat4.multiply(a, a, i), o.mat4.multiply(a, a, u), 
            o.mat4.invert(a, a));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = e(1);
        r.create = a, r.update = n;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            var r = e.i(u.a)(.6 * Math.PI), a = e.i(u.a)(.1), n = e.i(u.a)(1e3), i = e.i(u.a)(1).react([ t.HOT ], function(t, r) {
                return r ? r.width / r.height : t;
            });
            return {
                fovy: r,
                aspect: i,
                near: a,
                far: n,
                perspective: e.i(u.a)(o.mat4.create()).react("updatePosition", [ r.HOT, i.HOT, a.HOT, n.HOT ], o.mat4.perspective)
            };
        }
        function n() {
            var t = e.i(u.a)([ 0, 0, 0 ]), r = e.i(u.a)(0), a = e.i(u.a)(0), n = e.i(u.a)(o.quat.create()).react([ r.HOT ], i.getYawQuat), s = e.i(u.a)(o.quat.create()).react([ a.HOT ], i.getPitchQuat), l = e.i(u.a)(o.quat.create()).react([ s.HOT, n.HOT ], o.quat.multiply);
            return {
                position: t,
                yaw: r,
                pitch: a,
                yawQuat: n,
                pitchQuat: s,
                rotationQuat: l,
                view: e.i(u.a)(o.mat4.create()).react([ l.HOT, t.HOT ], o.mat4.fromRotationTranslation)
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = e(1), u = e(11), i = e(4);
        r.makePerspective = a, r.makeFirstPersonView = n;
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            var r = e.i(n.a)(o.a()), a = e.i(n.b)([ r.COLD ], function(t, r) {
                var e = r.gl.canvas;
                return document.body.appendChild(e), t(e), function() {
                    document.body.removeChild(e);
                };
            }), u = e.i(n.c)([ a.HOT, t.HOT ], function(t) {
                return {
                    width: t.clientWidth,
                    height: t.clientHeight
                };
            });
            return r.react("updateSize", [ u.HOT ], o.b), {
                context: r,
                canvas: a,
                canvasSize: u
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e(11), o = e(38);
        r.makeContext = a;
    }, function(t, r, e) {
        var a = e(0), n = {};
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
            var a = r[0], n = r[1], o = r[2], u = r[3], i = e[0], s = e[1], l = e[2], c = e[3];
            return t[0] = a * i + o * s, t[1] = n * i + u * s, t[2] = a * l + o * c, t[3] = n * l + u * c, 
            t;
        }, n.mul = n.multiply, n.rotate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = Math.sin(e), s = Math.cos(e);
            return t[0] = a * s + o * i, t[1] = n * s + u * i, t[2] = a * -i + o * s, t[3] = n * -i + u * s, 
            t;
        }, n.scale = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = e[0], s = e[1];
            return t[0] = a * i, t[1] = n * i, t[2] = o * s, t[3] = u * s, t;
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
            var e = t[0], n = t[1], o = t[2], u = t[3], i = r[0], s = r[1], l = r[2], c = r[3];
            return Math.abs(e - i) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(n - s) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(o - l) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(u - c) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(c));
        }, n.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t;
        }, n.multiplyScalarAndAdd = function(t, r, e, a) {
            return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t[2] = r[2] + e[2] * a, t[3] = r[3] + e[3] * a, 
            t;
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(0), n = {};
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
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], s = e * o - a * n;
            return s ? (s = 1 / s, t[0] = o * s, t[1] = -a * s, t[2] = -n * s, t[3] = e * s, 
            t[4] = (n * i - o * u) * s, t[5] = (a * u - e * i) * s, t) : null;
        }, n.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, n.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = e[0], c = e[1], f = e[2], M = e[3], h = e[4], d = e[5];
            return t[0] = a * l + o * c, t[1] = n * l + u * c, t[2] = a * f + o * M, t[3] = n * f + u * M, 
            t[4] = a * h + o * d + i, t[5] = n * h + u * d + s, t;
        }, n.mul = n.multiply, n.rotate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = Math.sin(e), c = Math.cos(e);
            return t[0] = a * c + o * l, t[1] = n * c + u * l, t[2] = a * -l + o * c, t[3] = n * -l + u * c, 
            t[4] = i, t[5] = s, t;
        }, n.scale = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = e[0], c = e[1];
            return t[0] = a * l, t[1] = n * l, t[2] = o * c, t[3] = u * c, t[4] = i, t[5] = s, 
            t;
        }, n.translate = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = e[0], c = e[1];
            return t[0] = a, t[1] = n, t[2] = o, t[3] = u, t[4] = a * l + o * c + i, t[5] = n * l + u * c + s, 
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
            var e = t[0], n = t[1], o = t[2], u = t[3], i = t[4], s = t[5], l = r[0], c = r[1], f = r[2], M = r[3], h = r[4], d = r[5];
            return Math.abs(e - l) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(n - c) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(o - f) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(u - M) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(i - h) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(s - d) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(d));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(0), n = {
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
        }, n.fromValues = function(t, r, e, n, o, u, i, s, l, c, f, M, h, d, v, m) {
            var S = new a.ARRAY_TYPE(16);
            return S[0] = t, S[1] = r, S[2] = e, S[3] = n, S[4] = o, S[5] = u, S[6] = i, S[7] = s, 
            S[8] = l, S[9] = c, S[10] = f, S[11] = M, S[12] = h, S[13] = d, S[14] = v, S[15] = m, 
            S;
        }, n.set = function(t, r, e, a, n, o, u, i, s, l, c, f, M, h, d, v, m) {
            return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t[4] = o, t[5] = u, t[6] = i, t[7] = s, 
            t[8] = l, t[9] = c, t[10] = f, t[11] = M, t[12] = h, t[13] = d, t[14] = v, t[15] = m, 
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
            var e, a, n, o, u, i, s, l, c, f;
            return e = SIMD.Float32x4.load(r, 0), a = SIMD.Float32x4.load(r, 4), n = SIMD.Float32x4.load(r, 8), 
            o = SIMD.Float32x4.load(r, 12), u = SIMD.Float32x4.shuffle(e, a, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(n, o, 0, 1, 4, 5), 
            s = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, s), SIMD.Float32x4.store(t, 4, l), u = SIMD.Float32x4.shuffle(e, a, 2, 3, 6, 7), 
            i = SIMD.Float32x4.shuffle(n, o, 2, 3, 6, 7), c = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), 
            f = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, c), SIMD.Float32x4.store(t, 12, f), 
            t;
        }, n.transpose = a.USE_SIMD ? n.SIMD.transpose : n.scalar.transpose, n.scalar.invert = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], s = r[6], l = r[7], c = r[8], f = r[9], M = r[10], h = r[11], d = r[12], v = r[13], m = r[14], S = r[15], I = e * i - a * u, x = e * s - n * u, D = e * l - o * u, F = a * s - n * i, p = a * l - o * i, b = n * l - o * s, E = c * v - f * d, g = c * m - M * d, w = c * S - h * d, A = f * m - M * v, y = f * S - h * v, T = M * S - h * m, R = I * T - x * y + D * A + F * w - p * g + b * E;
            return R ? (R = 1 / R, t[0] = (i * T - s * y + l * A) * R, t[1] = (n * y - a * T - o * A) * R, 
            t[2] = (v * b - m * p + S * F) * R, t[3] = (M * p - f * b - h * F) * R, t[4] = (s * w - u * T - l * g) * R, 
            t[5] = (e * T - n * w + o * g) * R, t[6] = (m * D - d * b - S * x) * R, t[7] = (c * b - M * D + h * x) * R, 
            t[8] = (u * y - i * w + l * E) * R, t[9] = (a * w - e * y - o * E) * R, t[10] = (d * p - v * D + S * I) * R, 
            t[11] = (f * D - c * p - h * I) * R, t[12] = (i * g - u * A - s * E) * R, t[13] = (e * A - a * g + n * E) * R, 
            t[14] = (v * x - d * F - m * I) * R, t[15] = (c * F - f * x + M * I) * R, t) : null;
        }, n.SIMD.invert = function(t, r) {
            var e, a, n, o, u, i, s, l, c, f, M = SIMD.Float32x4.load(r, 0), h = SIMD.Float32x4.load(r, 4), d = SIMD.Float32x4.load(r, 8), v = SIMD.Float32x4.load(r, 12);
            return u = SIMD.Float32x4.shuffle(M, h, 0, 1, 4, 5), a = SIMD.Float32x4.shuffle(d, v, 0, 1, 4, 5), 
            e = SIMD.Float32x4.shuffle(u, a, 0, 2, 4, 6), a = SIMD.Float32x4.shuffle(a, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(M, h, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(d, v, 2, 3, 6, 7), 
            n = SIMD.Float32x4.shuffle(u, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(n, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.mul(a, u), 
            s = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, u), i), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(a, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), i), 
            c = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            n = SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), i), 
            l = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(n, u)), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(e, a), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), l), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), c), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), l), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(n, u)), 
            u = SIMD.Float32x4.mul(e, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(n, u)), 
            l = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), l), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), s), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(a, u)), 
            u = SIMD.Float32x4.mul(e, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), s), 
            c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(a, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, u)), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), c), 
            f = SIMD.Float32x4.mul(e, i), f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), f), 
            f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), f), u = SIMD.Float32x4.reciprocalApproximation(f), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(f, SIMD.Float32x4.mul(u, u))), 
            (f = SIMD.Float32x4.swizzle(f, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(f, i)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(f, s)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(f, l)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(f, c)), t) : null;
        }, n.invert = a.USE_SIMD ? n.SIMD.invert : n.scalar.invert, n.scalar.adjoint = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = r[4], i = r[5], s = r[6], l = r[7], c = r[8], f = r[9], M = r[10], h = r[11], d = r[12], v = r[13], m = r[14], S = r[15];
            return t[0] = i * (M * S - h * m) - f * (s * S - l * m) + v * (s * h - l * M), t[1] = -(a * (M * S - h * m) - f * (n * S - o * m) + v * (n * h - o * M)), 
            t[2] = a * (s * S - l * m) - i * (n * S - o * m) + v * (n * l - o * s), t[3] = -(a * (s * h - l * M) - i * (n * h - o * M) + f * (n * l - o * s)), 
            t[4] = -(u * (M * S - h * m) - c * (s * S - l * m) + d * (s * h - l * M)), t[5] = e * (M * S - h * m) - c * (n * S - o * m) + d * (n * h - o * M), 
            t[6] = -(e * (s * S - l * m) - u * (n * S - o * m) + d * (n * l - o * s)), t[7] = e * (s * h - l * M) - u * (n * h - o * M) + c * (n * l - o * s), 
            t[8] = u * (f * S - h * v) - c * (i * S - l * v) + d * (i * h - l * f), t[9] = -(e * (f * S - h * v) - c * (a * S - o * v) + d * (a * h - o * f)), 
            t[10] = e * (i * S - l * v) - u * (a * S - o * v) + d * (a * l - o * i), t[11] = -(e * (i * h - l * f) - u * (a * h - o * f) + c * (a * l - o * i)), 
            t[12] = -(u * (f * m - M * v) - c * (i * m - s * v) + d * (i * M - s * f)), t[13] = e * (f * m - M * v) - c * (a * m - n * v) + d * (a * M - n * f), 
            t[14] = -(e * (i * m - s * v) - u * (a * m - n * v) + d * (a * s - n * i)), t[15] = e * (i * M - s * f) - u * (a * M - n * f) + c * (a * s - n * i), 
            t;
        }, n.SIMD.adjoint = function(t, r) {
            var e, a, n, o, u, i, s, l, c, f, M, h, d, e = SIMD.Float32x4.load(r, 0), a = SIMD.Float32x4.load(r, 4), n = SIMD.Float32x4.load(r, 8), o = SIMD.Float32x4.load(r, 12);
            return c = SIMD.Float32x4.shuffle(e, a, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(n, o, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(c, i, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(i, c, 1, 3, 5, 7), 
            c = SIMD.Float32x4.shuffle(e, a, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(n, o, 2, 3, 6, 7), 
            s = SIMD.Float32x4.shuffle(c, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, c, 1, 3, 5, 7), 
            c = SIMD.Float32x4.mul(s, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.mul(i, c), 
            M = SIMD.Float32x4.mul(u, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, c), f), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            c = SIMD.Float32x4.mul(i, s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), f), 
            d = SIMD.Float32x4.mul(u, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(l, c)), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), 
            c = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), 
            s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), f), 
            h = SIMD.Float32x4.mul(u, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(s, c)), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), 
            c = SIMD.Float32x4.mul(u, i), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), h), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, c), d), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, c), h), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(s, c)), 
            c = SIMD.Float32x4.mul(u, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(s, c)), 
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, c), h), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            M = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), M), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(i, c)), 
            c = SIMD.Float32x4.mul(u, s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), M), 
            d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(i, c)), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(l, c)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, c), d), 
            SIMD.Float32x4.store(t, 0, f), SIMD.Float32x4.store(t, 4, M), SIMD.Float32x4.store(t, 8, h), 
            SIMD.Float32x4.store(t, 12, d), t;
        }, n.adjoint = a.USE_SIMD ? n.SIMD.adjoint : n.scalar.adjoint, n.determinant = function(t) {
            var r = t[0], e = t[1], a = t[2], n = t[3], o = t[4], u = t[5], i = t[6], s = t[7], l = t[8], c = t[9], f = t[10], M = t[11], h = t[12], d = t[13], v = t[14], m = t[15];
            return (r * u - e * o) * (f * m - M * v) - (r * i - a * o) * (c * m - M * d) + (r * s - n * o) * (c * v - f * d) + (e * i - a * u) * (l * m - M * h) - (e * s - n * u) * (l * v - f * h) + (a * s - n * i) * (l * d - c * h);
        }, n.SIMD.multiply = function(t, r, e) {
            var a = SIMD.Float32x4.load(r, 0), n = SIMD.Float32x4.load(r, 4), o = SIMD.Float32x4.load(r, 8), u = SIMD.Float32x4.load(r, 12), i = SIMD.Float32x4.load(e, 0), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 0, 0, 0, 0), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, s);
            var l = SIMD.Float32x4.load(e, 4), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, c);
            var f = SIMD.Float32x4.load(e, 8), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 0, 0, 0, 0), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, M);
            var h = SIMD.Float32x4.load(e, 12), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, d), t;
        }, n.scalar.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = r[6], c = r[7], f = r[8], M = r[9], h = r[10], d = r[11], v = r[12], m = r[13], S = r[14], I = r[15], x = e[0], D = e[1], F = e[2], p = e[3];
            return t[0] = x * a + D * i + F * f + p * v, t[1] = x * n + D * s + F * M + p * m, 
            t[2] = x * o + D * l + F * h + p * S, t[3] = x * u + D * c + F * d + p * I, x = e[4], 
            D = e[5], F = e[6], p = e[7], t[4] = x * a + D * i + F * f + p * v, t[5] = x * n + D * s + F * M + p * m, 
            t[6] = x * o + D * l + F * h + p * S, t[7] = x * u + D * c + F * d + p * I, x = e[8], 
            D = e[9], F = e[10], p = e[11], t[8] = x * a + D * i + F * f + p * v, t[9] = x * n + D * s + F * M + p * m, 
            t[10] = x * o + D * l + F * h + p * S, t[11] = x * u + D * c + F * d + p * I, x = e[12], 
            D = e[13], F = e[14], p = e[15], t[12] = x * a + D * i + F * f + p * v, t[13] = x * n + D * s + F * M + p * m, 
            t[14] = x * o + D * l + F * h + p * S, t[15] = x * u + D * c + F * d + p * I, t;
        }, n.multiply = a.USE_SIMD ? n.SIMD.multiply : n.scalar.multiply, n.mul = n.multiply, 
        n.scalar.translate = function(t, r, e) {
            var a, n, o, u, i, s, l, c, f, M, h, d, v = e[0], m = e[1], S = e[2];
            return r === t ? (t[12] = r[0] * v + r[4] * m + r[8] * S + r[12], t[13] = r[1] * v + r[5] * m + r[9] * S + r[13], 
            t[14] = r[2] * v + r[6] * m + r[10] * S + r[14], t[15] = r[3] * v + r[7] * m + r[11] * S + r[15]) : (a = r[0], 
            n = r[1], o = r[2], u = r[3], i = r[4], s = r[5], l = r[6], c = r[7], f = r[8], 
            M = r[9], h = r[10], d = r[11], t[0] = a, t[1] = n, t[2] = o, t[3] = u, t[4] = i, 
            t[5] = s, t[6] = l, t[7] = c, t[8] = f, t[9] = M, t[10] = h, t[11] = d, t[12] = a * v + i * m + f * S + r[12], 
            t[13] = n * v + s * m + M * S + r[13], t[14] = o * v + l * m + h * S + r[14], t[15] = u * v + c * m + d * S + r[15]), 
            t;
        }, n.SIMD.translate = function(t, r, e) {
            var a = SIMD.Float32x4.load(r, 0), n = SIMD.Float32x4.load(r, 4), o = SIMD.Float32x4.load(r, 8), u = SIMD.Float32x4.load(r, 12), i = SIMD.Float32x4(e[0], e[1], e[2], 0);
            r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t[6] = r[6], t[7] = r[7], t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11]), 
            a = SIMD.Float32x4.mul(a, SIMD.Float32x4.swizzle(i, 0, 0, 0, 0)), n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(i, 1, 1, 1, 1)), 
            o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(i, 2, 2, 2, 2));
            var s = SIMD.Float32x4.add(a, SIMD.Float32x4.add(n, SIMD.Float32x4.add(o, u)));
            return SIMD.Float32x4.store(t, 12, s), t;
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
            var o, u, i, s, l, c, f, M, h, d, v, m, S, I, x, D, F, p, b, E, g, w, A, y, T = n[0], R = n[1], P = n[2], _ = Math.sqrt(T * T + R * R + P * P);
            return Math.abs(_) < a.EPSILON ? null : (_ = 1 / _, T *= _, R *= _, P *= _, o = Math.sin(e), 
            u = Math.cos(e), i = 1 - u, s = r[0], l = r[1], c = r[2], f = r[3], M = r[4], h = r[5], 
            d = r[6], v = r[7], m = r[8], S = r[9], I = r[10], x = r[11], D = T * T * i + u, 
            F = R * T * i + P * o, p = P * T * i - R * o, b = T * R * i - P * o, E = R * R * i + u, 
            g = P * R * i + T * o, w = T * P * i + R * o, A = R * P * i - T * o, y = P * P * i + u, 
            t[0] = s * D + M * F + m * p, t[1] = l * D + h * F + S * p, t[2] = c * D + d * F + I * p, 
            t[3] = f * D + v * F + x * p, t[4] = s * b + M * E + m * g, t[5] = l * b + h * E + S * g, 
            t[6] = c * b + d * E + I * g, t[7] = f * b + v * E + x * g, t[8] = s * w + M * A + m * y, 
            t[9] = l * w + h * A + S * y, t[10] = c * w + d * A + I * y, t[11] = f * w + v * A + x * y, 
            r !== t && (t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15]), t);
        }, n.scalar.rotateX = function(t, r, e) {
            var a = Math.sin(e), n = Math.cos(e), o = r[4], u = r[5], i = r[6], s = r[7], l = r[8], c = r[9], f = r[10], M = r[11];
            return r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[4] = o * n + l * a, t[5] = u * n + c * a, 
            t[6] = i * n + f * a, t[7] = s * n + M * a, t[8] = l * n - o * a, t[9] = c * n - u * a, 
            t[10] = f * n - i * a, t[11] = M * n - s * a, t;
        }, n.SIMD.rotateX = function(t, r, e) {
            var a = SIMD.Float32x4.splat(Math.sin(e)), n = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], t[13] = r[13], 
            t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 4), u = SIMD.Float32x4.load(r, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, a))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, n), SIMD.Float32x4.mul(o, a))), 
            t;
        }, n.rotateX = a.USE_SIMD ? n.SIMD.rotateX : n.scalar.rotateX, n.scalar.rotateY = function(t, r, e) {
            var a = Math.sin(e), n = Math.cos(e), o = r[0], u = r[1], i = r[2], s = r[3], l = r[8], c = r[9], f = r[10], M = r[11];
            return r !== t && (t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * n - l * a, t[1] = u * n - c * a, 
            t[2] = i * n - f * a, t[3] = s * n - M * a, t[8] = o * a + l * n, t[9] = u * a + c * n, 
            t[10] = i * a + f * n, t[11] = s * a + M * n, t;
        }, n.SIMD.rotateY = function(t, r, e) {
            var a = SIMD.Float32x4.splat(Math.sin(e)), n = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[12] = r[12], t[13] = r[13], 
            t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 0), u = SIMD.Float32x4.load(r, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, a))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(u, n))), 
            t;
        }, n.rotateY = a.USE_SIMD ? n.SIMD.rotateY : n.scalar.rotateY, n.scalar.rotateZ = function(t, r, e) {
            var a = Math.sin(e), n = Math.cos(e), o = r[0], u = r[1], i = r[2], s = r[3], l = r[4], c = r[5], f = r[6], M = r[7];
            return r !== t && (t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * n + l * a, t[1] = u * n + c * a, 
            t[2] = i * n + f * a, t[3] = s * n + M * a, t[4] = l * n - o * a, t[5] = c * n - u * a, 
            t[6] = f * n - i * a, t[7] = M * n - s * a, t;
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
            var n, o, u, i = e[0], s = e[1], l = e[2], c = Math.sqrt(i * i + s * s + l * l);
            return Math.abs(c) < a.EPSILON ? null : (c = 1 / c, i *= c, s *= c, l *= c, n = Math.sin(r), 
            o = Math.cos(r), u = 1 - o, t[0] = i * i * u + o, t[1] = s * i * u + l * n, t[2] = l * i * u - s * n, 
            t[3] = 0, t[4] = i * s * u - l * n, t[5] = s * s * u + o, t[6] = l * s * u + i * n, 
            t[7] = 0, t[8] = i * l * u + s * n, t[9] = s * l * u - i * n, t[10] = l * l * u + o, 
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
            var a = r[0], n = r[1], o = r[2], u = r[3], i = a + a, s = n + n, l = o + o, c = a * i, f = a * s, M = a * l, h = n * s, d = n * l, v = o * l, m = u * i, S = u * s, I = u * l;
            return t[0] = 1 - (h + v), t[1] = f + I, t[2] = M - S, t[3] = 0, t[4] = f - I, t[5] = 1 - (c + v), 
            t[6] = d + m, t[7] = 0, t[8] = M + S, t[9] = d - m, t[10] = 1 - (c + h), t[11] = 0, 
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
            var n = r[0], o = r[1], u = r[2], i = r[3], s = n + n, l = o + o, c = u + u, f = n * s, M = n * l, h = n * c, d = o * l, v = o * c, m = u * c, S = i * s, I = i * l, x = i * c, D = a[0], F = a[1], p = a[2];
            return t[0] = (1 - (d + m)) * D, t[1] = (M + x) * D, t[2] = (h - I) * D, t[3] = 0, 
            t[4] = (M - x) * F, t[5] = (1 - (f + m)) * F, t[6] = (v + S) * F, t[7] = 0, t[8] = (h + I) * p, 
            t[9] = (v - S) * p, t[10] = (1 - (f + d)) * p, t[11] = 0, t[12] = e[0], t[13] = e[1], 
            t[14] = e[2], t[15] = 1, t;
        }, n.fromRotationTranslationScaleOrigin = function(t, r, e, a, n) {
            var o = r[0], u = r[1], i = r[2], s = r[3], l = o + o, c = u + u, f = i + i, M = o * l, h = o * c, d = o * f, v = u * c, m = u * f, S = i * f, I = s * l, x = s * c, D = s * f, F = a[0], p = a[1], b = a[2], E = n[0], g = n[1], w = n[2];
            return t[0] = (1 - (v + S)) * F, t[1] = (h + D) * F, t[2] = (d - x) * F, t[3] = 0, 
            t[4] = (h - D) * p, t[5] = (1 - (M + S)) * p, t[6] = (m + I) * p, t[7] = 0, t[8] = (d + x) * b, 
            t[9] = (m - I) * b, t[10] = (1 - (M + v)) * b, t[11] = 0, t[12] = e[0] + E - (t[0] * E + t[4] * g + t[8] * w), 
            t[13] = e[1] + g - (t[1] * E + t[5] * g + t[9] * w), t[14] = e[2] + w - (t[2] * E + t[6] * g + t[10] * w), 
            t[15] = 1, t;
        }, n.fromQuat = function(t, r) {
            var e = r[0], a = r[1], n = r[2], o = r[3], u = e + e, i = a + a, s = n + n, l = e * u, c = a * u, f = a * i, M = n * u, h = n * i, d = n * s, v = o * u, m = o * i, S = o * s;
            return t[0] = 1 - f - d, t[1] = c + S, t[2] = M - m, t[3] = 0, t[4] = c - S, t[5] = 1 - l - d, 
            t[6] = h + v, t[7] = 0, t[8] = M + m, t[9] = h - v, t[10] = 1 - l - f, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, n.frustum = function(t, r, e, a, n, o, u) {
            var i = 1 / (e - r), s = 1 / (n - a), l = 1 / (o - u);
            return t[0] = 2 * o * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * s, 
            t[6] = 0, t[7] = 0, t[8] = (e + r) * i, t[9] = (n + a) * s, t[10] = (u + o) * l, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * o * 2 * l, t[15] = 0, t;
        }, n.perspective = function(t, r, e, a, n) {
            var o = 1 / Math.tan(r / 2), u = 1 / (a - n);
            return t[0] = o / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (n + a) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * n * a * u, t[15] = 0, t;
        }, n.perspectiveFromFieldOfView = function(t, r, e, a) {
            var n = Math.tan(r.upDegrees * Math.PI / 180), o = Math.tan(r.downDegrees * Math.PI / 180), u = Math.tan(r.leftDegrees * Math.PI / 180), i = Math.tan(r.rightDegrees * Math.PI / 180), s = 2 / (u + i), l = 2 / (n + o);
            return t[0] = s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l, t[6] = 0, t[7] = 0, 
            t[8] = -((u - i) * s * .5), t[9] = (n - o) * l * .5, t[10] = a / (e - a), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = a * e / (e - a), t[15] = 0, t;
        }, n.ortho = function(t, r, e, a, n, o, u) {
            var i = 1 / (r - e), s = 1 / (a - n), l = 1 / (o - u);
            return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * s, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (r + e) * i, t[13] = (n + a) * s, 
            t[14] = (u + o) * l, t[15] = 1, t;
        }, n.lookAt = function(t, r, e, o) {
            var u, i, s, l, c, f, M, h, d, v, m = r[0], S = r[1], I = r[2], x = o[0], D = o[1], F = o[2], p = e[0], b = e[1], E = e[2];
            return Math.abs(m - p) < a.EPSILON && Math.abs(S - b) < a.EPSILON && Math.abs(I - E) < a.EPSILON ? n.identity(t) : (M = m - p, 
            h = S - b, d = I - E, v = 1 / Math.sqrt(M * M + h * h + d * d), M *= v, h *= v, 
            d *= v, u = D * d - F * h, i = F * M - x * d, s = x * h - D * M, v = Math.sqrt(u * u + i * i + s * s), 
            v ? (v = 1 / v, u *= v, i *= v, s *= v) : (u = 0, i = 0, s = 0), l = h * s - d * i, 
            c = d * u - M * s, f = M * i - h * u, v = Math.sqrt(l * l + c * c + f * f), v ? (v = 1 / v, 
            l *= v, c *= v, f *= v) : (l = 0, c = 0, f = 0), t[0] = u, t[1] = l, t[2] = M, t[3] = 0, 
            t[4] = i, t[5] = c, t[6] = h, t[7] = 0, t[8] = s, t[9] = f, t[10] = d, t[11] = 0, 
            t[12] = -(u * m + i * S + s * I), t[13] = -(l * m + c * S + f * I), t[14] = -(M * m + h * S + d * I), 
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
            var e = t[0], n = t[1], o = t[2], u = t[3], i = t[4], s = t[5], l = t[6], c = t[7], f = t[8], M = t[9], h = t[10], d = t[11], v = t[12], m = t[13], S = t[14], I = t[15], x = r[0], D = r[1], F = r[2], p = r[3], b = r[4], E = r[5], g = r[6], w = r[7], A = r[8], y = r[9], T = r[10], R = r[11], P = r[12], _ = r[13], O = r[14], L = r[15];
            return Math.abs(e - x) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(x)) && Math.abs(n - D) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(D)) && Math.abs(o - F) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(F)) && Math.abs(u - p) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(p)) && Math.abs(i - b) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(s - E) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(l - g) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(g)) && Math.abs(c - w) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(f - A) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(A)) && Math.abs(M - y) <= a.EPSILON * Math.max(1, Math.abs(M), Math.abs(y)) && Math.abs(h - T) <= a.EPSILON * Math.max(1, Math.abs(h), Math.abs(T)) && Math.abs(d - R) <= a.EPSILON * Math.max(1, Math.abs(d), Math.abs(R)) && Math.abs(v - P) <= a.EPSILON * Math.max(1, Math.abs(v), Math.abs(P)) && Math.abs(m - _) <= a.EPSILON * Math.max(1, Math.abs(m), Math.abs(_)) && Math.abs(S - O) <= a.EPSILON * Math.max(1, Math.abs(S), Math.abs(O)) && Math.abs(I - L) <= a.EPSILON * Math.max(1, Math.abs(I), Math.abs(L));
        }, t.exports = n;
    }, function(t, r, e) {
        var a = e(0), n = e(8), o = e(9), u = e(10), i = {};
        i.create = function() {
            var t = new a.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.rotationTo = function() {
            var t = o.create(), r = o.fromValues(1, 0, 0), e = o.fromValues(0, 1, 0);
            return function(a, n, u) {
                var s = o.dot(n, u);
                return s < -.999999 ? (o.cross(t, r, n), o.length(t) < 1e-6 && o.cross(t, e, n), 
                o.normalize(t, t), i.setAxisAngle(a, t, Math.PI), a) : s > .999999 ? (a[0] = 0, 
                a[1] = 0, a[2] = 0, a[3] = 1, a) : (o.cross(t, n, u), a[0] = t[0], a[1] = t[1], 
                a[2] = t[2], a[3] = 1 + s, i.normalize(a, a));
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
            e *= .5;
            var a = Math.sin(e);
            return t[0] = a * r[0], t[1] = a * r[1], t[2] = a * r[2], t[3] = Math.cos(e), t;
        }, i.getAxisAngle = function(t, r) {
            var e = 2 * Math.acos(r[3]), a = Math.sin(e / 2);
            return 0 != a ? (t[0] = r[0] / a, t[1] = r[1] / a, t[2] = r[2] / a) : (t[0] = 1, 
            t[1] = 0, t[2] = 0), e;
        }, i.add = u.add, i.multiply = function(t, r, e) {
            var a = r[0], n = r[1], o = r[2], u = r[3], i = e[0], s = e[1], l = e[2], c = e[3];
            return t[0] = a * c + u * i + n * l - o * s, t[1] = n * c + u * s + o * i - a * l, 
            t[2] = o * c + u * l + a * s - n * i, t[3] = u * c - a * i - n * s - o * l, t;
        }, i.mul = i.multiply, i.scale = u.scale, i.rotateX = function(t, r, e) {
            e *= .5;
            var a = r[0], n = r[1], o = r[2], u = r[3], i = Math.sin(e), s = Math.cos(e);
            return t[0] = a * s + u * i, t[1] = n * s + o * i, t[2] = o * s - n * i, t[3] = u * s - a * i, 
            t;
        }, i.rotateY = function(t, r, e) {
            e *= .5;
            var a = r[0], n = r[1], o = r[2], u = r[3], i = Math.sin(e), s = Math.cos(e);
            return t[0] = a * s - o * i, t[1] = n * s + u * i, t[2] = o * s + a * i, t[3] = u * s - n * i, 
            t;
        }, i.rotateZ = function(t, r, e) {
            e *= .5;
            var a = r[0], n = r[1], o = r[2], u = r[3], i = Math.sin(e), s = Math.cos(e);
            return t[0] = a * s + n * i, t[1] = n * s - a * i, t[2] = o * s + u * i, t[3] = u * s - o * i, 
            t;
        }, i.calculateW = function(t, r) {
            var e = r[0], a = r[1], n = r[2];
            return t[0] = e, t[1] = a, t[2] = n, t[3] = Math.sqrt(Math.abs(1 - e * e - a * a - n * n)), 
            t;
        }, i.dot = u.dot, i.lerp = u.lerp, i.slerp = function(t, r, e, a) {
            var n, o, u, i, s, l = r[0], c = r[1], f = r[2], M = r[3], h = e[0], d = e[1], v = e[2], m = e[3];
            return o = l * h + c * d + f * v + M * m, o < 0 && (o = -o, h = -h, d = -d, v = -v, 
            m = -m), 1 - o > 1e-6 ? (n = Math.acos(o), u = Math.sin(n), i = Math.sin((1 - a) * n) / u, 
            s = Math.sin(a * n) / u) : (i = 1 - a, s = a), t[0] = i * l + s * h, t[1] = i * c + s * d, 
            t[2] = i * f + s * v, t[3] = i * M + s * m, t;
        }, i.sqlerp = function() {
            var t = i.create(), r = i.create();
            return function(e, a, n, o, u, s) {
                return i.slerp(t, a, u, s), i.slerp(r, n, o, s), i.slerp(e, t, r, 2 * s * (1 - s)), 
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
        var a = e(0), n = {};
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
                var i, s;
                for (e || (e = 2), a || (a = 0), s = n ? Math.min(n * e + a, r.length) : r.length, 
                i = a; i < s; i += e) t[0] = r[i], t[1] = r[i + 1], o(t, t, u), r[i] = t[0], r[i + 1] = t[1];
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
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e(2), n = e(19), o = e(5), u = e(6), i = e(1), s = e(4), l = e(23), c = e(24), f = e(25), M = e(13), h = e(14), d = e(15), v = e(22), m = e(20), S = e(21), I = e(3), x = e(18), D = e(17), F = e(16);
        e.d(r, "math", function() {
            return p;
        }), e.d(r, "vr", function() {
            return b;
        }), e.d(r, "events", function() {
            return E;
        }), e.d(r, "utils", function() {
            return g;
        }), e.d(r, "graphics", function() {
            return w;
        }), e.d(r, "flow", function() {
            return A;
        });
        var p = {
            core: a,
            noise: o,
            coords: n,
            vectors: u,
            linAlg: i,
            geometry: s
        }, b = {
            camera: l,
            flowCamera: c,
            flowUtils: f
        }, E = {
            dom: M,
            mouse: d,
            keyboard: h
        }, g = {
            animation: m,
            string: v,
            seq: S
        }, w = {
            colors: I,
            pixels: D,
            textures: x
        }, A = {
            tree: F
        };
        r.default = {
            math: p,
            vr: b,
            events: E,
            utils: g,
            graphics: w,
            flow: A
        };
    }, function(t, r, e) {
        "use strict";
        var a = e(7);
        e.n(a);
        e.d(r, "a", function() {
            return o;
        });
        var n = a.vec3, o = {
            add: function(t, r) {
                return n.add(n.create(), t, r);
            },
            subtract: function(t, r) {
                return n.subtract(n.create(), t, r);
            },
            sub: function(t, r) {
                return n.sub(n.create(), t, r);
            },
            multiply: function(t, r) {
                return n.multiply(n.create(), t, r);
            },
            mul: function(t, r) {
                return n.mul(n.create(), t, r);
            },
            divide: function(t, r) {
                return n.divide(n.create(), t, r);
            },
            div: function(t, r) {
                return n.div(n.create(), t, r);
            },
            ceil: function(t) {
                return n.ceil(n.create(), t);
            },
            floor: function(t) {
                return n.floor(n.create(), t);
            },
            round: function(t) {
                return n.round(n.create(), t);
            },
            min: function(t, r) {
                return n.min(n.create(), t, r);
            },
            max: function(t, r) {
                return n.max(n.create(), t, r);
            },
            scale: function(t, r) {
                return n.scale(n.create(), t, r);
            },
            scaleAndAdd: function(t, r, e) {
                return n.scaleAndAdd(n.create(), t, r, e);
            },
            inverse: function(t) {
                return n.inverse(n.create(), t);
            },
            normalize: function(t) {
                return n.normalize(n.create(), t);
            },
            cross: function(t, r) {
                return n.cross(n.create(), t, r);
            }
        };
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            var r = t.id, a = void 0 === r ? e.i(u.a)() : r, n = t.value, o = t.json, i = t.accept, l = t.meta;
            return null == n && o && (n = JSON.parse(o)), {
                id: a,
                value: n,
                accept: i,
                meta: s({}, l)
            };
        }
        function n(t, r) {
            var a = t.id, n = void 0 === a ? e.i(u.a)() : a, o = t.ports, l = void 0 === o ? [] : o, c = t.procedure, f = t.code, M = t.autostart, h = void 0 !== M && M, d = t.async, v = void 0 !== d && d, m = t.meta;
            if (null == c && null != f && (c = e.i(i.a)(f, r)), null == c) throw TypeError("Process must have procedure or code set");
            return {
                id: n,
                ports: l,
                procedure: c,
                autostart: h,
                async: v,
                meta: s({}, m)
            };
        }
        function o(t) {
            var r = t.id, e = t.entity, a = t.process, n = t.port, o = t.meta;
            if (null == e) throw TypeError("no entity specified in arc " + r);
            if (null == a) throw TypeError("no process specified in arc " + r);
            return null == r && (r = null == n ? a + "->" + e : e + "->" + a + "::" + n), {
                id: r,
                entity: e,
                process: a,
                port: n,
                meta: s({}, o)
            };
        }
        var u = e(12), i = e(34);
        r.b = a, r.d = n, r.c = o, e.d(r, "a", function() {
            return l;
        });
        var s = this && this.__assign || Object.assign || function(t) {
            for (var r, e = 1, a = arguments.length; e < a; e++) {
                r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        }, l = {
            COLD: "COLD",
            HOT: "HOT",
            ACCUMULATOR: "ACCUMULATOR"
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function evaluate(code, context) {
            var prefix = "(function(){ return ", postfix = "})", factory = eval("(function(){ return " + code + "})");
            return factory.call(context);
        }
        __webpack_exports__.a = evaluate;
    }, function(t, r, e) {
        "use strict";
        function a() {
            return {
                entities: {},
                processes: {},
                arcs: {},
                meta: {}
            };
        }
        function n(t, r) {
            return {
                entities: o({}, t.entities, r.entities),
                processes: o({}, t.processes, r.processes),
                arcs: o({}, t.arcs, r.arcs),
                meta: o({}, t.meta, r.meta)
            };
        }
        r.a = a, r.b = n;
        var o = this && this.__assign || Object.assign || function(t) {
            for (var r, e = 1, a = arguments.length; e < a; e++) {
                r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        };
    }, function(t, r, e) {
        "use strict";
        var a = e(37);
        r.a = {
            defaultSettings: {
                clearColor: [ 0, 0, 0, 1 ],
                minFilter: "LINEAR",
                magFilter: "NEAREST",
                wrap: "CLAMP_TO_EDGE",
                clearBuffers: [ "DEPTH", "COLOR" ],
                clearBits: 0,
                enable: [ "DEPTH_TEST" ],
                blend: [ "SRC_ALPHA", "ONE_MINUS_SRC_ALPHA" ],
                width: 0,
                height: 0
            },
            geometries: {
                renderQuad: {
                    attribs: (n = {}, n[a.a] = {
                        buffer: new Float32Array([ -1, 1, -1, -1, 1, 1, 1, -1 ]),
                        storeType: "STATIC"
                    }, n[a.b] = {
                        buffer: new Float32Array([ 0, 1, 0, 0, 1, 1, 1, 0 ]),
                        storeType: "STATIC"
                    }, n),
                    drawType: "TRIANGLE_STRIP",
                    itemCount: 4
                }
            },
            shaders: {
                basicEffect: {
                    vert: "\n        attribute vec2 " + a.a + ";\n        attribute vec2 " + a.b + ";\n        varying vec2 vUv;\n        void main() {\n          vUv = " + a.b + ";\n          gl_Position = vec4(" + a.a + ", 0.0, 1.0);\n        }",
                    frag: "\n        uniform sampler2D " + a.c + ";\n        varying vec2 vUv;\n        void main() {\n          gl_FragColor = texture2D(" + a.c + ", vUv);\n        }",
                    attribs: (o = {}, o[a.a] = "f 2", o[a.b] = "f 2", o),
                    uniforms: (u = {}, u[a.c] = "t", u)
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
    }, function(t, r, e) {
        "use strict";
        e.d(r, "a", function() {
            return a;
        }), e.d(r, "b", function() {
            return n;
        }), e.d(r, "c", function() {
            return o;
        });
        var a = "position", n = "uv", o = "source";
    }, function(t, r, e) {
        "use strict";
        function a(t) {
            null == t && (t = document.createElement("canvas"));
            var r = t.getContext("webgl") || t.getContext("experimental-webgl");
            if (!r) throw Error("WebGL-Context could not be initialized!");
            var e = {
                settings: Object.assign({}, g.a.defaultSettings),
                shaders: {},
                geometries: {},
                layers: {},
                objects: {},
                source: {},
                target: {},
                gl: r
            };
            return l(e, e.settings), M(e, "_renderQuad", g.a.geometries.renderQuad), f(e, "_basicEffect", g.a.shaders.basicEffect), 
            c(e, "_result", g.a.objects.resultScreen), v(e);
        }
        function n(t, r) {
            return l(t, r.settings), o(t, r.shaders), i(t, r.geometries), s(t, r.objects), u(t, r.layers), 
            v(t);
        }
        function o(t, r) {
            if (r) for (var e in r) {
                var a = r[e];
                f(t, e, a);
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
        function s(t, r) {
            if (r) for (var e in r) {
                var a = r[e];
                c(t, e, a);
            }
        }
        function l(t, r) {
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
        function c(t, r, e) {
            var a = t.objects[r], n = Object.assign({}, e, {
                type: "initialized"
            });
            if (null == n.uniforms && (n.uniforms = {}), t.objects[r] = n, a && "missing" === a.type) for (var o in a.updateLayers) h(t, o, a.updateLayers[o]);
            return t;
        }
        function f(t, r, e) {
            var a = t.shaders[r] || {}, n = null == a.program, o = t.gl, u = "precision mediump float;\n" + e.frag;
            n && (a.program = o.createProgram()), null == a.vert && (a.vert = o.createShader(o.VERTEX_SHADER)), 
            null == a.frag && (a.frag = o.createShader(o.FRAGMENT_SHADER)), o.shaderSource(a.vert, e.vert), 
            o.shaderSource(a.frag, u), o.compileShader(a.vert), o.compileShader(a.frag), o.getShaderParameter(a.vert, o.COMPILE_STATUS) || console.error("Error Compiling Vertex Shader!\n", o.getShaderInfoLog(a.vert), e.vert), 
            o.getShaderParameter(a.frag, o.COMPILE_STATUS) || console.error("Error Compiling Fragment Shader!\n", o.getShaderInfoLog(a.frag), e.frag), 
            n && (o.attachShader(a.program, a.vert), o.attachShader(a.program, a.frag)), o.linkProgram(a.program), 
            a.attribs = {};
            for (var i in e.attribs) {
                var s = e.attribs[i], l = {
                    index: o.getAttribLocation(a.program, i),
                    type: o.FLOAT,
                    itemSize: w[s]
                };
                l.index < 0 && console.warn('attribute "' + i + '" could not be found in shader ' + r, e.vert), 
                a.attribs[i] = l;
            }
            a.uniforms = {};
            for (var c in e.uniforms) a.uniforms[c] = {
                index: o.getUniformLocation(a.program, c),
                type: e.uniforms[c]
            };
            return t.shaders[r] = a, t;
        }
        function M(t, r, e) {
            var a = t.gl, n = t.geometries[r] || {};
            n.drawType = a[e.drawType], n.itemCount = e.itemCount;
            var o = n.attribs || {};
            for (var u in e.attribs) {
                var i = e.attribs[u];
                null == o[u] && (o[u] = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, o[u]), a.bufferData(a.ARRAY_BUFFER, p(i), a[(i.storeType || "STATIC") + "_DRAW"]);
            }
            if (n.attribs = o, e.elements) {
                null == n.elements && (n.elements = {
                    buffer: null,
                    glType: null
                }), null == n.elements.buffer && (n.elements.buffer = a.createBuffer());
                var s = p(e.elements);
                n.elements.glType = b(s, a), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, n.elements.buffer), 
                a.bufferData(a.ELEMENT_ARRAY_BUFFER, s, a[(e.elements.storeType || "STATIC") + "_DRAW"]);
            } else n.elements && delete n.elements;
            return t.geometries[r] = n, t;
        }
        function h(t, r, e) {
            var a = t.layers[r] || {};
            if (a.noClear = !!e.noClear, a.clearColor = e.clearColor, e.buffered ? (a.renderTarget = {
                width: e.width || t.settings.width,
                height: e.height || t.settings.height,
                frameBuffer: null,
                texture: null,
                depthBuffer: null
            }, F(t.gl, a.renderTarget, e)) : delete a.renderTarget, e.asset) a.type = "static", 
            d(t.gl, a, e); else if (e.objects) {
                var n = a;
                n.type = "objects", n.transparents = [], n.opaques = [], n.uniforms = e.uniforms || {};
                for (var o = 0, u = e.objects; o < u.length; o++) {
                    var i = u[o], s = t.objects[i];
                    s ? "initialized" === s.type ? s.blend ? n.transparents.push(i) : n.opaques.push(i) : s.updateLayers[r] = e : t.objects[i] = {
                        type: "missing",
                        updateLayers: (l = {}, l[r] = e, l)
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
            var l;
        }
        function d(t, r, e) {
            var a = r.texture || t.createTexture();
            t.bindTexture(t.TEXTURE_2D, a), D(t, e), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e.asset), 
            e.minFilter && e.minFilter.indexOf("MIPMAP") > 0 && t.generateMipmap(t.TEXTURE_2D), 
            t.bindTexture(t.TEXTURE_2D, null), r.texture = a;
        }
        function v(t) {
            var r = t.gl, e = r.canvas.clientWidth || r.canvas.width, a = r.canvas.clientHeight || r.canvas.height;
            return e === t.settings.width && a === t.settings.height || (r.canvas.height = t.settings.height = a, 
            r.canvas.width = t.settings.width = e, F(t.gl, t.source, t.settings), F(t.gl, t.target, t.settings)), 
            t;
        }
        function m(t, r) {
            for (var e = t.gl, a = r.length - 1, n = 0; n < r.length; n++) {
                var o = r[n], u = t.layers[o], i = n === a, s = !i && null == u.renderTarget;
                switch (i ? (e.bindFramebuffer(e.FRAMEBUFFER, null), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight)) : s ? (e.bindFramebuffer(e.FRAMEBUFFER, t.target.frameBuffer), 
                e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight)) : u.renderTarget && (e.bindFramebuffer(e.FRAMEBUFFER, u.renderTarget.frameBuffer), 
                e.viewport(0, 0, u.renderTarget.width, u.renderTarget.height)), u.noClear || (e.clearColor.apply(e, u.clearColor || t.settings.clearColor), 
                e.clear(t.settings.clearBits)), u.type) {
                  case "shader":
                    S(t, u.object);
                    break;

                  case "objects":
                    for (var l = 0, c = u.opaques; l < c.length; l++) {
                        var f = c[l];
                        S(t, t.objects[f], u.uniforms);
                    }
                    if (u.transparents.length) {
                        e.enable(e.BLEND);
                        for (var M = 0, h = u.transparents; M < h.length; M++) {
                            var f = h[M];
                            S(t, t.objects[f], u.uniforms);
                        }
                        e.disable(e.BLEND);
                    }
                    break;

                  case "static":
                    if (i) {
                        S(t, t.objects._result, {
                            source: o
                        });
                    }
                }
                if (s) {
                    var d = t.source;
                    t.source = t.target, t.target = d;
                }
            }
        }
        function S(t, r, e) {
            var a = 0, n = t.gl, o = t.shaders[r.shader], u = t.geometries[r.geometry];
            n.useProgram(o.program);
            for (var i in o.attribs) {
                var s = o.attribs[i];
                n.bindBuffer(n.ARRAY_BUFFER, u.attribs[i]), n.enableVertexAttribArray(s.index), 
                n.vertexAttribPointer(s.index, s.itemSize, s.type, !1, 0, 0);
            }
            for (var i in o.uniforms) {
                var l = o.uniforms[i], c = l.index, f = r.uniforms[i] || e && e[i];
                switch (l.type) {
                  case "t":
                    var M = f ? t.layers[f].texture : t.source.texture;
                    n.activeTexture(n["TEXTURE" + a]), n.bindTexture(n.TEXTURE_2D, M), n.uniform1i(c, a), 
                    a++;
                    break;

                  case "f":
                  case "f 1":
                    n.uniform1f(c, f);
                    break;

                  case "f 2":
                    n.uniform2fv(c, f);
                    break;

                  case "f 3":
                    n.uniform3fv(c, f);
                    break;

                  case "f 4":
                    n.uniform4fv(c, f);
                    break;

                  case "m 2":
                    n.uniformMatrix2fv(c, !1, f);
                    break;

                  case "m 3":
                    n.uniformMatrix3fv(c, !1, f);
                    break;

                  case "m 4":
                    n.uniformMatrix4fv(c, !1, f);
                    break;

                  case "i":
                  case "i 1":
                    n.uniform1i(c, f);
                    break;

                  case "i 2":
                    n.uniform2iv(c, f);
                    break;

                  case "i 3":
                    n.uniform3iv(c, f);
                    break;

                  case "i 4":
                    n.uniform4iv(c, f);
                    break;

                  default:
                    console.error("Uniform type " + l.type + " unknown. uniform " + i + " not set!");
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
        function D(t, r) {
            t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY);
            var e, a;
            r.wrap ? e = a = r.wrap : (a = r.wrapT, e = r.wrapS), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t[e || "CLAMP_TO_EDGE"]), 
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t[a || "CLAMP_TO_EDGE"]), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t[r.magFilter || "LINEAR"]), 
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t[r.minFilter || "LINEAR"]);
        }
        function F(t, r, e) {
            if (null != e.width && null != e.height) {
                null == r.frameBuffer && (r.frameBuffer = t.createFramebuffer()), null == r.texture && (r.texture = t.createTexture()), 
                null == r.depthBuffer && (r.depthBuffer = t.createRenderbuffer()), t.bindTexture(t.TEXTURE_2D, r.texture), 
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e.width, e.height, 0, t.RGBA, t.UNSIGNED_BYTE, void 0), 
                D(t, e), t.bindRenderbuffer(t.RENDERBUFFER, r.depthBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, e.width, e.height), 
                t.bindFramebuffer(t.FRAMEBUFFER, r.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r.texture, 0), 
                t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, r.depthBuffer);
                var a = t.checkFramebufferStatus(t.FRAMEBUFFER);
                a !== t.FRAMEBUFFER_COMPLETE && console.error("framebuffer error", a, e), t.bindFramebuffer(t.FRAMEBUFFER, null), 
                t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null);
            }
        }
        function p(t) {
            return E(t) ? t.buffer : new (0, window[t.type])(t.array);
        }
        function b(t, r) {
            if (t instanceof Uint8Array) return r.UNSIGNED_BYTE;
            if (t instanceof Uint16Array) return r.UNSIGNED_SHORT;
            if (t instanceof Uint32Array) return r.UNSIGNED_INT;
            throw new TypeError("invalid array type");
        }
        function E(t) {
            return null != t.buffer;
        }
        var g = e(36);
        r.a = a, r.b = v;
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
        g.a;
    } ]);
});