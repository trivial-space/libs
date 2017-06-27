!function(t, a) {
    "object" == typeof exports && "object" == typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? exports.tvsLibs = a() : t.tvsLibs = a();
}(this, function() {
    return function(t) {
        function a(r) {
            if (n[r]) return n[r].exports;
            var e = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(e.exports, e, e.exports, a), e.l = !0, e.exports;
        }
        var n = {};
        return a.m = t, a.c = n, a.d = function(t, n, r) {
            a.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, a.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return a.d(n, "a", n), n;
        }, a.o = function(t, a) {
            return Object.prototype.hasOwnProperty.call(t, a);
        }, a.p = "", a(a.s = 11);
    }([ function(t, a) {
        var n = {};
        n.EPSILON = 1e-6, n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, 
        n.RANDOM = Math.random, n.ENABLE_SIMD = !1, n.SIMD_AVAILABLE = n.ARRAY_TYPE === Float32Array && "SIMD" in this, 
        n.USE_SIMD = n.ENABLE_SIMD && n.SIMD_AVAILABLE, n.setMatrixArrayType = function(t) {
            n.ARRAY_TYPE = t;
        };
        var r = Math.PI / 180;
        n.toRadian = function(t) {
            return t * r;
        }, n.equals = function(t, a) {
            return Math.abs(t - a) <= n.EPSILON * Math.max(1, Math.abs(t), Math.abs(a));
        }, t.exports = n;
    }, function(t, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = n(5);
        n.n(r);
        for (var e in r) "default" !== e && function(t) {
            n.d(a, t, function() {
                return r[t];
            });
        }(e);
        var o = n(18);
        n.d(a, "fvec3", function() {
            return o.a;
        });
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function e(t, a, n) {
            return t + n * (a - t);
        }
        function o(t, a, n) {
            return Math.max(a, Math.min(t, n));
        }
        function u(t) {
            return Math.floor(Math.random() * t);
        }
        function i(t, a) {
            return u(a - t) + t;
        }
        function l() {
            return (Math.random() + Math.random() + Math.random()) / 3;
        }
        function s(t) {
            return t * c;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), n.d(a, "DEG_TO_RAD_FACTOR", function() {
            return c;
        }), a.sign = r, a.lerp = e, a.clamp = o, a.randInt = u, a.randIntInRange = i, a.normalRand = l, 
        a.degToRad = s;
        var c = Math.PI / 180;
    }, function(t, a, n) {
        "use strict";
        function r(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] + a[r];
            return n;
        }
        function e(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] + a;
            return n;
        }
        function o(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] - a[r];
            return n;
        }
        function u(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] - a;
            return n;
        }
        function i(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] * a;
            return n;
        }
        function l(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] / a;
            return n;
        }
        function s(t) {
            for (var a = 0, n = 0; n < t.length; n++) {
                var r = t[n];
                a += r * r;
            }
            return Math.sqrt(a);
        }
        function c(t) {
            return l(t, s(t));
        }
        function M(t, a) {
            return a < s(t) ? i(c(t), a) : t;
        }
        function f(t, a) {
            if (t.length != a.length) return !1;
            for (var n = 0; n < t.length; n++) if (t[n] !== a[n]) return !1;
            return !0;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.add = r, a.addScalar = e, a.sub = o, a.subScalar = u, a.mul = i, a.div = l, 
        a.length = s, a.normalize = c, a.limit = M, a.isEqual = f;
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            return t * t * t * (t * (6 * t - 15) + 10);
        }
        function e(t, a, n) {
            return a + t * (n - a);
        }
        function o(t, a) {
            return 0 == (1 & t) ? a : -a;
        }
        function u(t) {
            var a, n, u;
            return n = ~~t, a = 255 & n, t -= n, u = r(t), e(u, o(h[a], t), o(h[a + 1], t - 1));
        }
        function i(t, a) {
            var n, r, e = 0, o = 0, u = 0, i = (t + a) * d, l = Math.floor(t + i), s = Math.floor(a + i), c = (l + s) * v, M = l - c, f = s - c, h = t - M, I = a - f;
            h > I ? (n = 1, r = 0) : (n = 0, r = 1);
            var S = h - n + v, D = I - r + v, m = h - 1 + 2 * v, _ = I - 1 + 2 * v, p = 255 & l, E = 255 & s, w = .5 - h * h - I * I;
            if (w >= 0) {
                var P = 3 * F[p + x[E]];
                w *= w, e = w * w * (b[P] * h + b[P + 1] * I);
            }
            var O = .5 - S * S - D * D;
            if (O >= 0) {
                var y = 3 * F[p + n + x[E + r]];
                O *= O, o = O * O * (b[y] * S + b[y + 1] * D);
            }
            var A = .5 - m * m - _ * _;
            if (A >= 0) {
                var L = 3 * F[p + 1 + x[E + 1]];
                A *= A, u = A * A * (b[L] * m + b[L + 1] * _);
            }
            return 70 * (e + o + u);
        }
        function l(t, a, n) {
            var r, e, o, u, i, l, s, c, M, f, h = (t + a + n) * I, d = Math.floor(t + h), v = Math.floor(a + h), D = Math.floor(n + h), m = (d + v + D) * S, _ = d - m, p = v - m, E = D - m, w = t - _, P = a - p, O = n - E;
            w >= P ? P >= O ? (i = 1, l = 0, s = 0, c = 1, M = 1, f = 0) : w >= O ? (i = 1, 
            l = 0, s = 0, c = 1, M = 0, f = 1) : (i = 0, l = 0, s = 1, c = 1, M = 0, f = 1) : P < O ? (i = 0, 
            l = 0, s = 1, c = 0, M = 1, f = 1) : w < O ? (i = 0, l = 1, s = 0, c = 0, M = 1, 
            f = 1) : (i = 0, l = 1, s = 0, c = 1, M = 1, f = 0);
            var y = w - i + S, A = P - l + S, L = O - s + S, z = w - c + 2 * S, g = P - M + 2 * S, T = O - f + 2 * S, R = w - 1 + 3 * S, N = P - 1 + 3 * S, q = O - 1 + 3 * S, C = 255 & d, U = 255 & v, Y = 255 & D, B = .6 - w * w - P * P - O * O;
            if (B < 0) r = 0; else {
                var j = 3 * F[C + x[U + x[Y]]];
                B *= B, r = B * B * (b[j] * w + b[j + 1] * P + b[j + 2] * O);
            }
            var K = .6 - y * y - A * A - L * L;
            if (K < 0) e = 0; else {
                var H = 3 * F[C + i + x[U + l + x[Y + s]]];
                K *= K, e = K * K * (b[H] * y + b[H + 1] * A + b[H + 2] * L);
            }
            var W = .6 - z * z - g * g - T * T;
            if (W < 0) o = 0; else {
                var k = 3 * F[C + c + x[U + M + x[Y + f]]];
                W *= W, o = W * W * (b[k] * z + b[k + 1] * g + b[k + 2] * T);
            }
            var V = .6 - R * R - N * N - q * q;
            if (V < 0) u = 0; else {
                var X = 3 * F[C + 1 + x[U + 1 + x[Y + 1]]];
                V *= V, u = V * V * (b[X] * R + b[X + 1] * N + b[X + 2] * q);
            }
            return 32 * (r + e + o + u);
        }
        function s(t, a, n, r) {
            var e, o, u, i, l, s = (t + a + n + r) * D, c = Math.floor(t + s), M = Math.floor(a + s), f = Math.floor(n + s), h = Math.floor(r + s), d = (c + M + f + h) * m, v = c - d, I = M - d, S = f - d, _ = h - d, F = t - v, b = a - I, E = n - S, w = r - _, P = 0, O = 0, y = 0, A = 0;
            F > b ? P++ : O++, F > E ? P++ : y++, F > w ? P++ : A++, b > E ? O++ : y++, b > w ? O++ : A++, 
            E > w ? y++ : A++;
            var L, z, g, T, R, N, q, C, U, Y, B, j;
            L = P >= 3 ? 1 : 0, z = O >= 3 ? 1 : 0, g = y >= 3 ? 1 : 0, T = A >= 3 ? 1 : 0, 
            R = P >= 2 ? 1 : 0, N = O >= 2 ? 1 : 0, q = y >= 2 ? 1 : 0, C = A >= 2 ? 1 : 0, 
            U = P >= 1 ? 1 : 0, Y = O >= 1 ? 1 : 0, B = y >= 1 ? 1 : 0, j = A >= 1 ? 1 : 0;
            var K = F - L + m, H = b - z + m, W = E - g + m, k = w - T + m, V = F - R + 2 * m, X = b - N + 2 * m, Q = E - q + 2 * m, Z = w - C + 2 * m, G = F - U + 3 * m, J = b - Y + 3 * m, $ = E - B + 3 * m, tt = w - j + 3 * m, at = F - 1 + 4 * m, nt = b - 1 + 4 * m, rt = E - 1 + 4 * m, et = w - 1 + 4 * m, ot = 255 & c, ut = 255 & M, it = 255 & f, lt = 255 & h, st = .6 - F * F - b * b - E * E - w * w;
            if (st < 0) e = 0; else {
                var ct = x[ot + x[ut + x[it + x[lt]]]] % 32 * 4;
                st *= st, e = st * st * (p[ct] * F + p[ct + 1] * b + p[ct + 2] * E + p[ct + 3] * w);
            }
            var Mt = .6 - K * K - H * H - W * W - k * k;
            if (Mt < 0) o = 0; else {
                var ft = x[ot + L + x[ut + z + x[it + g + x[lt + T]]]] % 32 * 4;
                Mt *= Mt, o = Mt * Mt * (p[ft] * K + p[ft + 1] * H + p[ft + 2] * W + p[ft + 3] * k);
            }
            var ht = .6 - V * V - X * X - Q * Q - Z * Z;
            if (ht < 0) u = 0; else {
                var dt = x[ot + R + x[ut + N + x[it + q + x[lt + C]]]] % 32 * 4;
                ht *= ht, u = ht * ht * (p[dt] * V + p[dt + 1] * X + p[dt + 2] * Q + p[dt + 3] * Z);
            }
            var vt = .6 - G * G - J * J - $ * $ - tt * tt;
            if (vt < 0) i = 0; else {
                var It = x[ot + U + x[ut + Y + x[it + B + x[lt + j]]]] % 32 * 4;
                vt *= vt, i = vt * vt * (p[It] * G + p[It + 1] * J + p[It + 2] * $ + p[It + 3] * tt);
            }
            var St = .6 - at * at - nt * nt - rt * rt - et * et;
            if (St < 0) l = 0; else {
                var Dt = x[ot + 1 + x[ut + 1 + x[it + 1 + x[lt + 1]]]] % 32 * 4;
                St *= St, l = St * St * (p[Dt] * at + p[Dt + 1] * nt + p[Dt + 2] * rt + p[Dt + 3] * et);
            }
            return 27 * (e + o + u + i + l);
        }
        function c(t, a, n, r) {
            for (var e = [], o = 0; o < a; o++) for (var u = 0; u < t; u++) {
                var i = u / t, l = o / a, c = Math.cos(2 * i * Math.PI) * n / (2 * Math.PI), M = Math.cos(2 * l * Math.PI) * r / (2 * Math.PI), f = Math.sin(2 * i * Math.PI) * n / (2 * Math.PI), h = Math.sin(2 * l * Math.PI) * r / (2 * Math.PI);
                e.push(s(c, M, f, h));
            }
            return e;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.noise1d = u, a.noise2d = i, a.noise3d = l, a.noise4d = s, a.tileNoise = c;
        var M, f, h = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (M = f = 0; f <= 256; M = ++f) h[256 + M] = h[M];
        var d = .5 * (Math.sqrt(3) - 1), v = (3 - Math.sqrt(3)) / 6, I = 1 / 3, S = 1 / 6, D = (Math.sqrt(5) - 1) / 4, m = (5 - Math.sqrt(5)) / 20, _ = new Uint8Array(256), x = new Uint8Array(512), F = new Uint8Array(512);
        for (M = 0; M < 256; M++) _[M] = 256 * Math.random();
        for (M = 0; M < 512; M++) x[M] = _[255 & M], F[M] = x[M] % 12;
        var b = new Float32Array([ 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1 ]), p = new Float32Array([ 0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0 ]);
    }, function(t, a, n) {
        a.glMatrix = n(0), a.mat2 = n(13), a.mat2d = n(14), a.mat3 = n(6), a.mat4 = n(15), 
        a.quat = n(16), a.vec2 = n(17), a.vec3 = n(7), a.vec4 = n(8);
    }, function(t, a, n) {
        var r = n(0), e = {};
        e.create = function() {
            var t = new r.ARRAY_TYPE(9);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, e.fromMat4 = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[4], t[4] = a[5], t[5] = a[6], 
            t[6] = a[8], t[7] = a[9], t[8] = a[10], t;
        }, e.clone = function(t) {
            var a = new r.ARRAY_TYPE(9);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a[6] = t[6], a[7] = t[7], a[8] = t[8], a;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t;
        }, e.fromValues = function(t, a, n, e, o, u, i, l, s) {
            var c = new r.ARRAY_TYPE(9);
            return c[0] = t, c[1] = a, c[2] = n, c[3] = e, c[4] = o, c[5] = u, c[6] = i, c[7] = l, 
            c[8] = s, c;
        }, e.set = function(t, a, n, r, e, o, u, i, l, s) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = e, t[4] = o, t[5] = u, t[6] = i, t[7] = l, 
            t[8] = s, t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, e.transpose = function(t, a) {
            if (t === a) {
                var n = a[1], r = a[2], e = a[5];
                t[1] = a[3], t[2] = a[6], t[3] = n, t[5] = a[7], t[6] = r, t[7] = e;
            } else t[0] = a[0], t[1] = a[3], t[2] = a[6], t[3] = a[1], t[4] = a[4], t[5] = a[7], 
            t[6] = a[2], t[7] = a[5], t[8] = a[8];
            return t;
        }, e.invert = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8], M = c * u - i * s, f = -c * o + i * l, h = s * o - u * l, d = n * M + r * f + e * h;
            return d ? (d = 1 / d, t[0] = M * d, t[1] = (-c * r + e * s) * d, t[2] = (i * r - e * u) * d, 
            t[3] = f * d, t[4] = (c * n - e * l) * d, t[5] = (-i * n + e * o) * d, t[6] = h * d, 
            t[7] = (-s * n + r * l) * d, t[8] = (u * n - r * o) * d, t) : null;
        }, e.adjoint = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8];
            return t[0] = u * c - i * s, t[1] = e * s - r * c, t[2] = r * i - e * u, t[3] = i * l - o * c, 
            t[4] = n * c - e * l, t[5] = e * o - n * i, t[6] = o * s - u * l, t[7] = r * l - n * s, 
            t[8] = n * u - r * o, t;
        }, e.determinant = function(t) {
            var a = t[0], n = t[1], r = t[2], e = t[3], o = t[4], u = t[5], i = t[6], l = t[7], s = t[8];
            return a * (s * o - u * l) + n * (-s * e + u * i) + r * (l * e - o * i);
        }, e.multiply = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], f = n[0], h = n[1], d = n[2], v = n[3], I = n[4], S = n[5], D = n[6], m = n[7], _ = n[8];
            return t[0] = f * r + h * u + d * s, t[1] = f * e + h * i + d * c, t[2] = f * o + h * l + d * M, 
            t[3] = v * r + I * u + S * s, t[4] = v * e + I * i + S * c, t[5] = v * o + I * l + S * M, 
            t[6] = D * r + m * u + _ * s, t[7] = D * e + m * i + _ * c, t[8] = D * o + m * l + _ * M, 
            t;
        }, e.mul = e.multiply, e.translate = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], f = n[0], h = n[1];
            return t[0] = r, t[1] = e, t[2] = o, t[3] = u, t[4] = i, t[5] = l, t[6] = f * r + h * u + s, 
            t[7] = f * e + h * i + c, t[8] = f * o + h * l + M, t;
        }, e.rotate = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], f = Math.sin(n), h = Math.cos(n);
            return t[0] = h * r + f * u, t[1] = h * e + f * i, t[2] = h * o + f * l, t[3] = h * u - f * r, 
            t[4] = h * i - f * e, t[5] = h * l - f * o, t[6] = s, t[7] = c, t[8] = M, t;
        }, e.scale = function(t, a, n) {
            var r = n[0], e = n[1];
            return t[0] = r * a[0], t[1] = r * a[1], t[2] = r * a[2], t[3] = e * a[3], t[4] = e * a[4], 
            t[5] = e * a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t;
        }, e.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = a[0], 
            t[7] = a[1], t[8] = 1, t;
        }, e.fromRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, e.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = a[1], t[5] = 0, t[6] = 0, 
            t[7] = 0, t[8] = 1, t;
        }, e.fromMat2d = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = 0, t[3] = a[2], t[4] = a[3], t[5] = 0, t[6] = a[4], 
            t[7] = a[5], t[8] = 1, t;
        }, e.fromQuat = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = n + n, i = r + r, l = e + e, s = n * u, c = r * u, M = r * i, f = e * u, h = e * i, d = e * l, v = o * u, I = o * i, S = o * l;
            return t[0] = 1 - M - d, t[3] = c - S, t[6] = f + I, t[1] = c + S, t[4] = 1 - s - d, 
            t[7] = h - v, t[2] = f - I, t[5] = h + v, t[8] = 1 - s - M, t;
        }, e.normalFromMat4 = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8], M = a[9], f = a[10], h = a[11], d = a[12], v = a[13], I = a[14], S = a[15], D = n * i - r * u, m = n * l - e * u, _ = n * s - o * u, x = r * l - e * i, F = r * s - o * i, b = e * s - o * l, p = c * v - M * d, E = c * I - f * d, w = c * S - h * d, P = M * I - f * v, O = M * S - h * v, y = f * S - h * I, A = D * y - m * O + _ * P + x * w - F * E + b * p;
            return A ? (A = 1 / A, t[0] = (i * y - l * O + s * P) * A, t[1] = (l * w - u * y - s * E) * A, 
            t[2] = (u * O - i * w + s * p) * A, t[3] = (e * O - r * y - o * P) * A, t[4] = (n * y - e * w + o * E) * A, 
            t[5] = (r * w - n * O - o * p) * A, t[6] = (v * b - I * F + S * x) * A, t[7] = (I * _ - d * b - S * m) * A, 
            t[8] = (d * F - v * _ + S * D) * A, t) : null;
        }, e.str = function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
        }, e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
        }, e.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t[4] = a[4] + n[4], t[5] = a[5] + n[5], t[6] = a[6] + n[6], t[7] = a[7] + n[7], 
            t[8] = a[8] + n[8], t;
        }, e.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t[4] = a[4] - n[4], t[5] = a[5] - n[5], t[6] = a[6] - n[6], t[7] = a[7] - n[7], 
            t[8] = a[8] - n[8], t;
        }, e.sub = e.subtract, e.multiplyScalar = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, 
            t[5] = a[5] * n, t[6] = a[6] * n, t[7] = a[7] * n, t[8] = a[8] * n, t;
        }, e.multiplyScalarAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t[6] = a[6] + n[6] * r, t[7] = a[7] + n[7] * r, 
            t[8] = a[8] + n[8] * r, t;
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8];
        }, e.equals = function(t, a) {
            var n = t[0], e = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = t[6], c = t[7], M = t[8], f = a[0], h = a[1], d = a[2], v = a[3], I = a[4], S = a[5], D = t[6], m = a[7], _ = a[8];
            return Math.abs(n - f) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(e - h) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - d) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(u - v) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(i - I) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(I)) && Math.abs(l - S) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(s - D) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(D)) && Math.abs(c - m) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(M - _) <= r.EPSILON * Math.max(1, Math.abs(M), Math.abs(_));
        }, t.exports = e;
    }, function(t, a, n) {
        var r = n(0), e = {};
        e.create = function() {
            var t = new r.ARRAY_TYPE(3);
            return t[0] = 0, t[1] = 0, t[2] = 0, t;
        }, e.clone = function(t) {
            var a = new r.ARRAY_TYPE(3);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a;
        }, e.fromValues = function(t, a, n) {
            var e = new r.ARRAY_TYPE(3);
            return e[0] = t, e[1] = a, e[2] = n, e;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t;
        }, e.set = function(t, a, n, r) {
            return t[0] = a, t[1] = n, t[2] = r, t;
        }, e.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t;
        }, e.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t;
        }, e.sub = e.subtract, e.multiply = function(t, a, n) {
            return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t[2] = a[2] * n[2], t;
        }, e.mul = e.multiply, e.divide = function(t, a, n) {
            return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t[2] = a[2] / n[2], t;
        }, e.div = e.divide, e.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t;
        }, e.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), 
            t;
        }, e.min = function(t, a, n) {
            return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t[2] = Math.min(a[2], n[2]), 
            t;
        }, e.max = function(t, a, n) {
            return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t[2] = Math.max(a[2], n[2]), 
            t;
        }, e.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), 
            t;
        }, e.scale = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t;
        }, e.scaleAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t;
        }, e.distance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1], e = a[2] - t[2];
            return Math.sqrt(n * n + r * r + e * e);
        }, e.dist = e.distance, e.squaredDistance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1], e = a[2] - t[2];
            return n * n + r * r + e * e;
        }, e.sqrDist = e.squaredDistance, e.length = function(t) {
            var a = t[0], n = t[1], r = t[2];
            return Math.sqrt(a * a + n * n + r * r);
        }, e.len = e.length, e.squaredLength = function(t) {
            var a = t[0], n = t[1], r = t[2];
            return a * a + n * n + r * r;
        }, e.sqrLen = e.squaredLength, e.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t;
        }, e.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t;
        }, e.normalize = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = n * n + r * r + e * e;
            return o > 0 && (o = 1 / Math.sqrt(o), t[0] = a[0] * o, t[1] = a[1] * o, t[2] = a[2] * o), 
            t;
        }, e.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1] + t[2] * a[2];
        }, e.cross = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = n[0], i = n[1], l = n[2];
            return t[0] = e * l - o * i, t[1] = o * u - r * l, t[2] = r * i - e * u, t;
        }, e.lerp = function(t, a, n, r) {
            var e = a[0], o = a[1], u = a[2];
            return t[0] = e + r * (n[0] - e), t[1] = o + r * (n[1] - o), t[2] = u + r * (n[2] - u), 
            t;
        }, e.hermite = function(t, a, n, r, e, o) {
            var u = o * o, i = u * (2 * o - 3) + 1, l = u * (o - 2) + o, s = u * (o - 1), c = u * (3 - 2 * o);
            return t[0] = a[0] * i + n[0] * l + r[0] * s + e[0] * c, t[1] = a[1] * i + n[1] * l + r[1] * s + e[1] * c, 
            t[2] = a[2] * i + n[2] * l + r[2] * s + e[2] * c, t;
        }, e.bezier = function(t, a, n, r, e, o) {
            var u = 1 - o, i = u * u, l = o * o, s = i * u, c = 3 * o * i, M = 3 * l * u, f = l * o;
            return t[0] = a[0] * s + n[0] * c + r[0] * M + e[0] * f, t[1] = a[1] * s + n[1] * c + r[1] * M + e[1] * f, 
            t[2] = a[2] * s + n[2] * c + r[2] * M + e[2] * f, t;
        }, e.random = function(t, a) {
            a = a || 1;
            var n = 2 * r.RANDOM() * Math.PI, e = 2 * r.RANDOM() - 1, o = Math.sqrt(1 - e * e) * a;
            return t[0] = Math.cos(n) * o, t[1] = Math.sin(n) * o, t[2] = e * a, t;
        }, e.transformMat4 = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = n[3] * r + n[7] * e + n[11] * o + n[15];
            return u = u || 1, t[0] = (n[0] * r + n[4] * e + n[8] * o + n[12]) / u, t[1] = (n[1] * r + n[5] * e + n[9] * o + n[13]) / u, 
            t[2] = (n[2] * r + n[6] * e + n[10] * o + n[14]) / u, t;
        }, e.transformMat3 = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2];
            return t[0] = r * n[0] + e * n[3] + o * n[6], t[1] = r * n[1] + e * n[4] + o * n[7], 
            t[2] = r * n[2] + e * n[5] + o * n[8], t;
        }, e.transformQuat = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = n[0], i = n[1], l = n[2], s = n[3], c = s * r + i * o - l * e, M = s * e + l * r - u * o, f = s * o + u * e - i * r, h = -u * r - i * e - l * o;
            return t[0] = c * s + h * -u + M * -l - f * -i, t[1] = M * s + h * -i + f * -u - c * -l, 
            t[2] = f * s + h * -l + c * -i - M * -u, t;
        }, e.rotateX = function(t, a, n, r) {
            var e = [], o = [];
            return e[0] = a[0] - n[0], e[1] = a[1] - n[1], e[2] = a[2] - n[2], o[0] = e[0], 
            o[1] = e[1] * Math.cos(r) - e[2] * Math.sin(r), o[2] = e[1] * Math.sin(r) + e[2] * Math.cos(r), 
            t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
        }, e.rotateY = function(t, a, n, r) {
            var e = [], o = [];
            return e[0] = a[0] - n[0], e[1] = a[1] - n[1], e[2] = a[2] - n[2], o[0] = e[2] * Math.sin(r) + e[0] * Math.cos(r), 
            o[1] = e[1], o[2] = e[2] * Math.cos(r) - e[0] * Math.sin(r), t[0] = o[0] + n[0], 
            t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
        }, e.rotateZ = function(t, a, n, r) {
            var e = [], o = [];
            return e[0] = a[0] - n[0], e[1] = a[1] - n[1], e[2] = a[2] - n[2], o[0] = e[0] * Math.cos(r) - e[1] * Math.sin(r), 
            o[1] = e[0] * Math.sin(r) + e[1] * Math.cos(r), o[2] = e[2], t[0] = o[0] + n[0], 
            t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
        }, e.forEach = function() {
            var t = e.create();
            return function(a, n, r, e, o, u) {
                var i, l;
                for (n || (n = 3), r || (r = 0), l = e ? Math.min(e * n + r, a.length) : a.length, 
                i = r; i < l; i += n) t[0] = a[i], t[1] = a[i + 1], t[2] = a[i + 2], o(t, t, u), 
                a[i] = t[0], a[i + 1] = t[1], a[i + 2] = t[2];
                return a;
            };
        }(), e.angle = function(t, a) {
            var n = e.fromValues(t[0], t[1], t[2]), r = e.fromValues(a[0], a[1], a[2]);
            e.normalize(n, n), e.normalize(r, r);
            var o = e.dot(n, r);
            return o > 1 ? 0 : Math.acos(o);
        }, e.str = function(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2];
        }, e.equals = function(t, a) {
            var n = t[0], e = t[1], o = t[2], u = a[0], i = a[1], l = a[2];
            return Math.abs(n - u) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(e - i) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l));
        }, t.exports = e;
    }, function(t, a, n) {
        var r = n(0), e = {};
        e.create = function() {
            var t = new r.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
        }, e.clone = function(t) {
            var a = new r.ARRAY_TYPE(4);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a;
        }, e.fromValues = function(t, a, n, e) {
            var o = new r.ARRAY_TYPE(4);
            return o[0] = t, o[1] = a, o[2] = n, o[3] = e, o;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t;
        }, e.set = function(t, a, n, r, e) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = e, t;
        }, e.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t;
        }, e.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t;
        }, e.sub = e.subtract, e.multiply = function(t, a, n) {
            return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t[2] = a[2] * n[2], t[3] = a[3] * n[3], 
            t;
        }, e.mul = e.multiply, e.divide = function(t, a, n) {
            return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t[2] = a[2] / n[2], t[3] = a[3] / n[3], 
            t;
        }, e.div = e.divide, e.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t[3] = Math.ceil(a[3]), 
            t;
        }, e.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), 
            t[3] = Math.floor(a[3]), t;
        }, e.min = function(t, a, n) {
            return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t[2] = Math.min(a[2], n[2]), 
            t[3] = Math.min(a[3], n[3]), t;
        }, e.max = function(t, a, n) {
            return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t[2] = Math.max(a[2], n[2]), 
            t[3] = Math.max(a[3], n[3]), t;
        }, e.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), 
            t[3] = Math.round(a[3]), t;
        }, e.scale = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t;
        }, e.scaleAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t;
        }, e.distance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1], e = a[2] - t[2], o = a[3] - t[3];
            return Math.sqrt(n * n + r * r + e * e + o * o);
        }, e.dist = e.distance, e.squaredDistance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1], e = a[2] - t[2], o = a[3] - t[3];
            return n * n + r * r + e * e + o * o;
        }, e.sqrDist = e.squaredDistance, e.length = function(t) {
            var a = t[0], n = t[1], r = t[2], e = t[3];
            return Math.sqrt(a * a + n * n + r * r + e * e);
        }, e.len = e.length, e.squaredLength = function(t) {
            var a = t[0], n = t[1], r = t[2], e = t[3];
            return a * a + n * n + r * r + e * e;
        }, e.sqrLen = e.squaredLength, e.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = -a[3], t;
        }, e.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t[3] = 1 / a[3], t;
        }, e.normalize = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = n * n + r * r + e * e + o * o;
            return u > 0 && (u = 1 / Math.sqrt(u), t[0] = n * u, t[1] = r * u, t[2] = e * u, 
            t[3] = o * u), t;
        }, e.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1] + t[2] * a[2] + t[3] * a[3];
        }, e.lerp = function(t, a, n, r) {
            var e = a[0], o = a[1], u = a[2], i = a[3];
            return t[0] = e + r * (n[0] - e), t[1] = o + r * (n[1] - o), t[2] = u + r * (n[2] - u), 
            t[3] = i + r * (n[3] - i), t;
        }, e.random = function(t, a) {
            return a = a || 1, t[0] = r.RANDOM(), t[1] = r.RANDOM(), t[2] = r.RANDOM(), t[3] = r.RANDOM(), 
            e.normalize(t, t), e.scale(t, t, a), t;
        }, e.transformMat4 = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3];
            return t[0] = n[0] * r + n[4] * e + n[8] * o + n[12] * u, t[1] = n[1] * r + n[5] * e + n[9] * o + n[13] * u, 
            t[2] = n[2] * r + n[6] * e + n[10] * o + n[14] * u, t[3] = n[3] * r + n[7] * e + n[11] * o + n[15] * u, 
            t;
        }, e.transformQuat = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = n[0], i = n[1], l = n[2], s = n[3], c = s * r + i * o - l * e, M = s * e + l * r - u * o, f = s * o + u * e - i * r, h = -u * r - i * e - l * o;
            return t[0] = c * s + h * -u + M * -l - f * -i, t[1] = M * s + h * -i + f * -u - c * -l, 
            t[2] = f * s + h * -l + c * -i - M * -u, t[3] = a[3], t;
        }, e.forEach = function() {
            var t = e.create();
            return function(a, n, r, e, o, u) {
                var i, l;
                for (n || (n = 4), r || (r = 0), l = e ? Math.min(e * n + r, a.length) : a.length, 
                i = r; i < l; i += n) t[0] = a[i], t[1] = a[i + 1], t[2] = a[i + 2], t[3] = a[i + 3], 
                o(t, t, u), a[i] = t[0], a[i + 1] = t[1], a[i + 2] = t[2], a[i + 3] = t[3];
                return a;
            };
        }(), e.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, e.equals = function(t, a) {
            var n = t[0], e = t[1], o = t[2], u = t[3], i = a[0], l = a[1], s = a[2], c = a[3];
            return Math.abs(n - i) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(e - l) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - s) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - c) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(c));
        }, t.exports = e;
    }, function(t, a, n) {
        "use strict";
        function r(t, a) {
            var n = -c.vec3.dot(t, a);
            return c.vec4.fromValues(t[0], t[1], t[2], n);
        }
        function e(t, a, n) {
            return r(o(t, a, n), t);
        }
        function o(t, a, n) {
            var r = c.fvec3.cross(c.fvec3.sub(n, a), c.fvec3.sub(t, a));
            return c.vec3.normalize(r, r);
        }
        function u(t) {
            var a = t, n = a[0], r = a[1], e = a[2], o = a[3];
            return c.mat4.fromValues(1 - 2 * n * n, -2 * n * r, -2 * n * e, 0, -2 * n * r, 1 - 2 * r * r, -2 * r * e, 0, -2 * n * e, -2 * r * e, 1 - 2 * e * e, 0, -2 * n * o, -2 * r * o, -2 * e * o, 1);
        }
        function i(t, a) {
            return a *= .5, t[0] = 0, t[1] = Math.sin(a), t[2] = 0, t[3] = Math.cos(a), t;
        }
        function l(t, a) {
            return a *= .5, t[0] = Math.sin(a), t[1] = 0, t[2] = 0, t[3] = Math.cos(a), t;
        }
        function s(t, a) {
            return a *= .5, t[0] = 0, t[1] = 0, t[2] = Math.sin(a), t[3] = Math.cos(a), t;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.planeFromNormalAndCoplanarPoint = r, a.planeFromThreeCoplanarPoints = e, a.normalFromThreeCoplanarPoints = o, 
        a.mirrorMatrixFromPlane = u, a.getYawQuat = i, a.getPitchQuat = l, a.getRollQuat = s;
        var c = n(1);
    }, function(t, a, n) {
        "use strict";
        function r(t, a) {
            var n = t[0], r = t[1], e = t[2], o = t[3], u = a[0], i = a[1], l = a[2], s = a[3], M = s / 255;
            return [ Math.floor(c.lerp(n, u, M)), Math.floor(c.lerp(r, i, M)), Math.floor(c.lerp(e, l, M)), o ];
        }
        function e(t, a) {
            return null == a && (a = 255), [ t, t, t, a ];
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
        function l(t) {
            return t = Math.floor(t), [ t >> 16 & 255, t >> 8 & 255, 255 & t ];
        }
        function s(t) {
            var a = t.split("#");
            return l(parseInt(a[a.length - 1], 16));
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), n.d(a, "BLACK", function() {
            return M;
        }), n.d(a, "WHITE", function() {
            return f;
        }), a.mixColors = r, a.grey = e, a.colorRgbaToCSS = o, a.intToFloat = u, a.floatToInt = i, 
        a.hexToRgb = l, a.hexStringToRgb = s;
        var c = n(2), M = [ 0, 0, 0, 255 ], f = [ 255, 255, 255, 255 ];
    }, function(t, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), n.d(a, "math", function() {
            return F;
        }), n.d(a, "vr", function() {
            return b;
        }), n.d(a, "events", function() {
            return p;
        }), n.d(a, "utils", function() {
            return E;
        }), n.d(a, "graphics", function() {
            return w;
        }), n.d(a, "flow", function() {
            return P;
        });
        var r = n(2), e = n(12), o = n(4), u = n(3), i = n(1), l = n(9), s = n(19), c = n(20), M = n(21), f = n(23), h = n(24), d = n(25), v = n(26), I = n(27), S = n(28), D = n(10), m = n(29), _ = n(30), x = n(31), F = {
            core: r,
            noise: o,
            coords: e,
            vectors: u,
            linAlg: i,
            geometry: l
        }, b = {
            camera: s,
            flowCamera: c,
            flowUtils: M
        }, p = {
            dom: f,
            mouse: d,
            keyboard: h
        }, E = {
            animation: I,
            string: v,
            seq: S
        }, w = {
            colors: D,
            pixels: _,
            textures: m
        }, P = {
            tree: x
        };
        a.default = {
            math: F,
            vr: b,
            events: p,
            utils: E,
            graphics: w,
            flow: P
        };
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            return [ o.length(t), Math.atan2(t[1], t[0]) ];
        }
        function e(t) {
            var a = t[0], n = t[1];
            return [ a * Math.cos(n), a * Math.sin(n) ];
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.cartesianToPolar2D = r, a.polarToCartesian2D = e;
        var o = n(3);
    }, function(t, a, n) {
        var r = n(0), e = {};
        e.create = function() {
            var t = new r.ARRAY_TYPE(4);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, e.clone = function(t) {
            var a = new r.ARRAY_TYPE(4);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, e.fromValues = function(t, a, n, e) {
            var o = new r.ARRAY_TYPE(4);
            return o[0] = t, o[1] = a, o[2] = n, o[3] = e, o;
        }, e.set = function(t, a, n, r, e) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = e, t;
        }, e.transpose = function(t, a) {
            if (t === a) {
                var n = a[1];
                t[1] = a[2], t[2] = n;
            } else t[0] = a[0], t[1] = a[2], t[2] = a[1], t[3] = a[3];
            return t;
        }, e.invert = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = n * o - e * r;
            return u ? (u = 1 / u, t[0] = o * u, t[1] = -r * u, t[2] = -e * u, t[3] = n * u, 
            t) : null;
        }, e.adjoint = function(t, a) {
            var n = a[0];
            return t[0] = a[3], t[1] = -a[1], t[2] = -a[2], t[3] = n, t;
        }, e.determinant = function(t) {
            return t[0] * t[3] - t[2] * t[1];
        }, e.multiply = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = n[0], l = n[1], s = n[2], c = n[3];
            return t[0] = r * i + o * l, t[1] = e * i + u * l, t[2] = r * s + o * c, t[3] = e * s + u * c, 
            t;
        }, e.mul = e.multiply, e.rotate = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = Math.sin(n), l = Math.cos(n);
            return t[0] = r * l + o * i, t[1] = e * l + u * i, t[2] = r * -i + o * l, t[3] = e * -i + u * l, 
            t;
        }, e.scale = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = n[0], l = n[1];
            return t[0] = r * i, t[1] = e * i, t[2] = o * l, t[3] = u * l, t;
        }, e.fromRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t;
        }, e.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t;
        }, e.str = function(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
        }, e.LDU = function(t, a, n, r) {
            return t[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - t[2] * n[1], 
            [ t, a, n ];
        }, e.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t;
        }, e.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t;
        }, e.sub = e.subtract, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, e.equals = function(t, a) {
            var n = t[0], e = t[1], o = t[2], u = t[3], i = a[0], l = a[1], s = a[2], c = a[3];
            return Math.abs(n - i) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(e - l) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - s) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - c) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(c));
        }, e.multiplyScalar = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t;
        }, e.multiplyScalarAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t;
        }, t.exports = e;
    }, function(t, a, n) {
        var r = n(0), e = {};
        e.create = function() {
            var t = new r.ARRAY_TYPE(6);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, e.clone = function(t) {
            var a = new r.ARRAY_TYPE(6);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, e.fromValues = function(t, a, n, e, o, u) {
            var i = new r.ARRAY_TYPE(6);
            return i[0] = t, i[1] = a, i[2] = n, i[3] = e, i[4] = o, i[5] = u, i;
        }, e.set = function(t, a, n, r, e, o, u) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = e, t[4] = o, t[5] = u, t;
        }, e.invert = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = n * o - r * e;
            return l ? (l = 1 / l, t[0] = o * l, t[1] = -r * l, t[2] = -e * l, t[3] = n * l, 
            t[4] = (e * i - o * u) * l, t[5] = (r * u - n * i) * l, t) : null;
        }, e.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, e.multiply = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = n[0], c = n[1], M = n[2], f = n[3], h = n[4], d = n[5];
            return t[0] = r * s + o * c, t[1] = e * s + u * c, t[2] = r * M + o * f, t[3] = e * M + u * f, 
            t[4] = r * h + o * d + i, t[5] = e * h + u * d + l, t;
        }, e.mul = e.multiply, e.rotate = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = Math.sin(n), c = Math.cos(n);
            return t[0] = r * c + o * s, t[1] = e * c + u * s, t[2] = r * -s + o * c, t[3] = e * -s + u * c, 
            t[4] = i, t[5] = l, t;
        }, e.scale = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = n[0], c = n[1];
            return t[0] = r * s, t[1] = e * s, t[2] = o * c, t[3] = u * c, t[4] = i, t[5] = l, 
            t;
        }, e.translate = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = n[0], c = n[1];
            return t[0] = r, t[1] = e, t[2] = o, t[3] = u, t[4] = r * s + o * c + i, t[5] = e * s + u * c + l, 
            t;
        }, e.fromRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = 0, t[5] = 0, t;
        }, e.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t[4] = 0, t[5] = 0, t;
        }, e.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = a[0], t[5] = a[1], t;
        }, e.str = function(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
        }, e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
        }, e.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t[4] = a[4] + n[4], t[5] = a[5] + n[5], t;
        }, e.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t[4] = a[4] - n[4], t[5] = a[5] - n[5], t;
        }, e.sub = e.subtract, e.multiplyScalar = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, 
            t[5] = a[5] * n, t;
        }, e.multiplyScalarAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t;
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5];
        }, e.equals = function(t, a) {
            var n = t[0], e = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = a[0], c = a[1], M = a[2], f = a[3], h = a[4], d = a[5];
            return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(e - c) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(o - M) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(u - f) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(i - h) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(l - d) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(d));
        }, t.exports = e;
    }, function(t, a, n) {
        var r = n(0), e = {
            scalar: {},
            SIMD: {}
        };
        e.create = function() {
            var t = new r.ARRAY_TYPE(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.clone = function(t) {
            var a = new r.ARRAY_TYPE(16);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a[6] = t[6], a[7] = t[7], a[8] = t[8], a[9] = t[9], a[10] = t[10], a[11] = t[11], 
            a[12] = t[12], a[13] = t[13], a[14] = t[14], a[15] = t[15], a;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], 
            t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
        }, e.fromValues = function(t, a, n, e, o, u, i, l, s, c, M, f, h, d, v, I) {
            var S = new r.ARRAY_TYPE(16);
            return S[0] = t, S[1] = a, S[2] = n, S[3] = e, S[4] = o, S[5] = u, S[6] = i, S[7] = l, 
            S[8] = s, S[9] = c, S[10] = M, S[11] = f, S[12] = h, S[13] = d, S[14] = v, S[15] = I, 
            S;
        }, e.set = function(t, a, n, r, e, o, u, i, l, s, c, M, f, h, d, v, I) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = e, t[4] = o, t[5] = u, t[6] = i, t[7] = l, 
            t[8] = s, t[9] = c, t[10] = M, t[11] = f, t[12] = h, t[13] = d, t[14] = v, t[15] = I, 
            t;
        }, e.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.scalar.transpose = function(t, a) {
            if (t === a) {
                var n = a[1], r = a[2], e = a[3], o = a[6], u = a[7], i = a[11];
                t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = n, t[6] = a[9], t[7] = a[13], t[8] = r, 
                t[9] = o, t[11] = a[14], t[12] = e, t[13] = u, t[14] = i;
            } else t[0] = a[0], t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = a[1], t[5] = a[5], 
            t[6] = a[9], t[7] = a[13], t[8] = a[2], t[9] = a[6], t[10] = a[10], t[11] = a[14], 
            t[12] = a[3], t[13] = a[7], t[14] = a[11], t[15] = a[15];
            return t;
        }, e.SIMD.transpose = function(t, a) {
            var n, r, e, o, u, i, l, s, c, M;
            return n = SIMD.Float32x4.load(a, 0), r = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), 
            o = SIMD.Float32x4.load(a, 12), u = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(e, o, 0, 1, 4, 5), 
            l = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, l), SIMD.Float32x4.store(t, 4, s), u = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), 
            i = SIMD.Float32x4.shuffle(e, o, 2, 3, 6, 7), c = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), 
            M = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, c), SIMD.Float32x4.store(t, 12, M), 
            t;
        }, e.transpose = r.USE_SIMD ? e.SIMD.transpose : e.scalar.transpose, e.scalar.invert = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8], M = a[9], f = a[10], h = a[11], d = a[12], v = a[13], I = a[14], S = a[15], D = n * i - r * u, m = n * l - e * u, _ = n * s - o * u, x = r * l - e * i, F = r * s - o * i, b = e * s - o * l, p = c * v - M * d, E = c * I - f * d, w = c * S - h * d, P = M * I - f * v, O = M * S - h * v, y = f * S - h * I, A = D * y - m * O + _ * P + x * w - F * E + b * p;
            return A ? (A = 1 / A, t[0] = (i * y - l * O + s * P) * A, t[1] = (e * O - r * y - o * P) * A, 
            t[2] = (v * b - I * F + S * x) * A, t[3] = (f * F - M * b - h * x) * A, t[4] = (l * w - u * y - s * E) * A, 
            t[5] = (n * y - e * w + o * E) * A, t[6] = (I * _ - d * b - S * m) * A, t[7] = (c * b - f * _ + h * m) * A, 
            t[8] = (u * O - i * w + s * p) * A, t[9] = (r * w - n * O - o * p) * A, t[10] = (d * F - v * _ + S * D) * A, 
            t[11] = (M * _ - c * F - h * D) * A, t[12] = (i * E - u * P - l * p) * A, t[13] = (n * P - r * E + e * p) * A, 
            t[14] = (v * m - d * x - I * D) * A, t[15] = (c * x - M * m + f * D) * A, t) : null;
        }, e.SIMD.invert = function(t, a) {
            var n, r, e, o, u, i, l, s, c, M, f = SIMD.Float32x4.load(a, 0), h = SIMD.Float32x4.load(a, 4), d = SIMD.Float32x4.load(a, 8), v = SIMD.Float32x4.load(a, 12);
            return u = SIMD.Float32x4.shuffle(f, h, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(d, v, 0, 1, 4, 5), 
            n = SIMD.Float32x4.shuffle(u, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(f, h, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(d, v, 2, 3, 6, 7), 
            e = SIMD.Float32x4.shuffle(u, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(e, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.mul(r, u), 
            l = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), i), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(r, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), i), 
            c = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            e = SIMD.Float32x4.swizzle(e, 2, 3, 0, 1), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), i), 
            s = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(e, u)), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(n, r), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), s), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), c), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), s), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(e, u)), 
            u = SIMD.Float32x4.mul(n, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(e, u)), 
            s = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            l = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), l), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(r, u)), 
            u = SIMD.Float32x4.mul(n, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), l), 
            c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(r, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, u)), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, u), c), 
            M = SIMD.Float32x4.mul(n, i), M = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), M), 
            M = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(M, 1, 0, 3, 2), M), u = SIMD.Float32x4.reciprocalApproximation(M), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(M, SIMD.Float32x4.mul(u, u))), 
            (M = SIMD.Float32x4.swizzle(M, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(M, i)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(M, l)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(M, s)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(M, c)), t) : null;
        }, e.invert = r.USE_SIMD ? e.SIMD.invert : e.scalar.invert, e.scalar.adjoint = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = a[4], i = a[5], l = a[6], s = a[7], c = a[8], M = a[9], f = a[10], h = a[11], d = a[12], v = a[13], I = a[14], S = a[15];
            return t[0] = i * (f * S - h * I) - M * (l * S - s * I) + v * (l * h - s * f), t[1] = -(r * (f * S - h * I) - M * (e * S - o * I) + v * (e * h - o * f)), 
            t[2] = r * (l * S - s * I) - i * (e * S - o * I) + v * (e * s - o * l), t[3] = -(r * (l * h - s * f) - i * (e * h - o * f) + M * (e * s - o * l)), 
            t[4] = -(u * (f * S - h * I) - c * (l * S - s * I) + d * (l * h - s * f)), t[5] = n * (f * S - h * I) - c * (e * S - o * I) + d * (e * h - o * f), 
            t[6] = -(n * (l * S - s * I) - u * (e * S - o * I) + d * (e * s - o * l)), t[7] = n * (l * h - s * f) - u * (e * h - o * f) + c * (e * s - o * l), 
            t[8] = u * (M * S - h * v) - c * (i * S - s * v) + d * (i * h - s * M), t[9] = -(n * (M * S - h * v) - c * (r * S - o * v) + d * (r * h - o * M)), 
            t[10] = n * (i * S - s * v) - u * (r * S - o * v) + d * (r * s - o * i), t[11] = -(n * (i * h - s * M) - u * (r * h - o * M) + c * (r * s - o * i)), 
            t[12] = -(u * (M * I - f * v) - c * (i * I - l * v) + d * (i * f - l * M)), t[13] = n * (M * I - f * v) - c * (r * I - e * v) + d * (r * f - e * M), 
            t[14] = -(n * (i * I - l * v) - u * (r * I - e * v) + d * (r * l - e * i)), t[15] = n * (i * f - l * M) - u * (r * f - e * M) + c * (r * l - e * i), 
            t;
        }, e.SIMD.adjoint = function(t, a) {
            var n, r, e, o, u, i, l, s, c, M, f, h, d, n = SIMD.Float32x4.load(a, 0), r = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), o = SIMD.Float32x4.load(a, 12);
            return c = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(e, o, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(c, i, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(i, c, 1, 3, 5, 7), 
            c = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(e, o, 2, 3, 6, 7), 
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
        }, e.adjoint = r.USE_SIMD ? e.SIMD.adjoint : e.scalar.adjoint, e.determinant = function(t) {
            var a = t[0], n = t[1], r = t[2], e = t[3], o = t[4], u = t[5], i = t[6], l = t[7], s = t[8], c = t[9], M = t[10], f = t[11], h = t[12], d = t[13], v = t[14], I = t[15];
            return (a * u - n * o) * (M * I - f * v) - (a * i - r * o) * (c * I - f * d) + (a * l - e * o) * (c * v - M * d) + (n * i - r * u) * (s * I - f * h) - (n * l - e * u) * (s * v - M * h) + (r * l - e * i) * (s * d - c * h);
        }, e.SIMD.multiply = function(t, a, n) {
            var r = SIMD.Float32x4.load(a, 0), e = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), i = SIMD.Float32x4.load(n, 0), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, l);
            var s = SIMD.Float32x4.load(n, 4), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, c);
            var M = SIMD.Float32x4.load(n, 8), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, f);
            var h = SIMD.Float32x4.load(n, 12), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), e), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, d), t;
        }, e.scalar.multiply = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], f = a[9], h = a[10], d = a[11], v = a[12], I = a[13], S = a[14], D = a[15], m = n[0], _ = n[1], x = n[2], F = n[3];
            return t[0] = m * r + _ * i + x * M + F * v, t[1] = m * e + _ * l + x * f + F * I, 
            t[2] = m * o + _ * s + x * h + F * S, t[3] = m * u + _ * c + x * d + F * D, m = n[4], 
            _ = n[5], x = n[6], F = n[7], t[4] = m * r + _ * i + x * M + F * v, t[5] = m * e + _ * l + x * f + F * I, 
            t[6] = m * o + _ * s + x * h + F * S, t[7] = m * u + _ * c + x * d + F * D, m = n[8], 
            _ = n[9], x = n[10], F = n[11], t[8] = m * r + _ * i + x * M + F * v, t[9] = m * e + _ * l + x * f + F * I, 
            t[10] = m * o + _ * s + x * h + F * S, t[11] = m * u + _ * c + x * d + F * D, m = n[12], 
            _ = n[13], x = n[14], F = n[15], t[12] = m * r + _ * i + x * M + F * v, t[13] = m * e + _ * l + x * f + F * I, 
            t[14] = m * o + _ * s + x * h + F * S, t[15] = m * u + _ * c + x * d + F * D, t;
        }, e.multiply = r.USE_SIMD ? e.SIMD.multiply : e.scalar.multiply, e.mul = e.multiply, 
        e.scalar.translate = function(t, a, n) {
            var r, e, o, u, i, l, s, c, M, f, h, d, v = n[0], I = n[1], S = n[2];
            return a === t ? (t[12] = a[0] * v + a[4] * I + a[8] * S + a[12], t[13] = a[1] * v + a[5] * I + a[9] * S + a[13], 
            t[14] = a[2] * v + a[6] * I + a[10] * S + a[14], t[15] = a[3] * v + a[7] * I + a[11] * S + a[15]) : (r = a[0], 
            e = a[1], o = a[2], u = a[3], i = a[4], l = a[5], s = a[6], c = a[7], M = a[8], 
            f = a[9], h = a[10], d = a[11], t[0] = r, t[1] = e, t[2] = o, t[3] = u, t[4] = i, 
            t[5] = l, t[6] = s, t[7] = c, t[8] = M, t[9] = f, t[10] = h, t[11] = d, t[12] = r * v + i * I + M * S + a[12], 
            t[13] = e * v + l * I + f * S + a[13], t[14] = o * v + s * I + h * S + a[14], t[15] = u * v + c * I + d * S + a[15]), 
            t;
        }, e.SIMD.translate = function(t, a, n) {
            var r = SIMD.Float32x4.load(a, 0), e = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), i = SIMD.Float32x4(n[0], n[1], n[2], 0);
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11]), 
            r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(i, 0, 0, 0, 0)), e = SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(i, 1, 1, 1, 1)), 
            o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(i, 2, 2, 2, 2));
            var l = SIMD.Float32x4.add(r, SIMD.Float32x4.add(e, SIMD.Float32x4.add(o, u)));
            return SIMD.Float32x4.store(t, 12, l), t;
        }, e.translate = r.USE_SIMD ? e.SIMD.translate : e.scalar.translate, e.scalar.scale = function(t, a, n) {
            var r = n[0], e = n[1], o = n[2];
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * e, 
            t[5] = a[5] * e, t[6] = a[6] * e, t[7] = a[7] * e, t[8] = a[8] * o, t[9] = a[9] * o, 
            t[10] = a[10] * o, t[11] = a[11] * o, t[12] = a[12], t[13] = a[13], t[14] = a[14], 
            t[15] = a[15], t;
        }, e.SIMD.scale = function(t, a, n) {
            var r, e, o, u = SIMD.Float32x4(n[0], n[1], n[2], 0);
            return r = SIMD.Float32x4.load(a, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0))), 
            e = SIMD.Float32x4.load(a, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1))), 
            o = SIMD.Float32x4.load(a, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2))), 
            t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
        }, e.scale = r.USE_SIMD ? e.SIMD.scale : e.scalar.scale, e.rotate = function(t, a, n, e) {
            var o, u, i, l, s, c, M, f, h, d, v, I, S, D, m, _, x, F, b, p, E, w, P, O, y = e[0], A = e[1], L = e[2], z = Math.sqrt(y * y + A * A + L * L);
            return Math.abs(z) < r.EPSILON ? null : (z = 1 / z, y *= z, A *= z, L *= z, o = Math.sin(n), 
            u = Math.cos(n), i = 1 - u, l = a[0], s = a[1], c = a[2], M = a[3], f = a[4], h = a[5], 
            d = a[6], v = a[7], I = a[8], S = a[9], D = a[10], m = a[11], _ = y * y * i + u, 
            x = A * y * i + L * o, F = L * y * i - A * o, b = y * A * i - L * o, p = A * A * i + u, 
            E = L * A * i + y * o, w = y * L * i + A * o, P = A * L * i - y * o, O = L * L * i + u, 
            t[0] = l * _ + f * x + I * F, t[1] = s * _ + h * x + S * F, t[2] = c * _ + d * x + D * F, 
            t[3] = M * _ + v * x + m * F, t[4] = l * b + f * p + I * E, t[5] = s * b + h * p + S * E, 
            t[6] = c * b + d * p + D * E, t[7] = M * b + v * p + m * E, t[8] = l * w + f * P + I * O, 
            t[9] = s * w + h * P + S * O, t[10] = c * w + d * P + D * O, t[11] = M * w + v * P + m * O, 
            a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t);
        }, e.scalar.rotateX = function(t, a, n) {
            var r = Math.sin(n), e = Math.cos(n), o = a[4], u = a[5], i = a[6], l = a[7], s = a[8], c = a[9], M = a[10], f = a[11];
            return a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[4] = o * e + s * r, t[5] = u * e + c * r, 
            t[6] = i * e + M * r, t[7] = l * e + f * r, t[8] = s * e - o * r, t[9] = c * e - u * r, 
            t[10] = M * e - i * r, t[11] = f * e - l * r, t;
        }, e.SIMD.rotateX = function(t, a, n) {
            var r = SIMD.Float32x4.splat(Math.sin(n)), e = SIMD.Float32x4.splat(Math.cos(n));
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var o = SIMD.Float32x4.load(a, 4), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, e), SIMD.Float32x4.mul(u, r))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, e), SIMD.Float32x4.mul(o, r))), 
            t;
        }, e.rotateX = r.USE_SIMD ? e.SIMD.rotateX : e.scalar.rotateX, e.scalar.rotateY = function(t, a, n) {
            var r = Math.sin(n), e = Math.cos(n), o = a[0], u = a[1], i = a[2], l = a[3], s = a[8], c = a[9], M = a[10], f = a[11];
            return a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = o * e - s * r, t[1] = u * e - c * r, 
            t[2] = i * e - M * r, t[3] = l * e - f * r, t[8] = o * r + s * e, t[9] = u * r + c * e, 
            t[10] = i * r + M * e, t[11] = l * r + f * e, t;
        }, e.SIMD.rotateY = function(t, a, n) {
            var r = SIMD.Float32x4.splat(Math.sin(n)), e = SIMD.Float32x4.splat(Math.cos(n));
            a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var o = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, e), SIMD.Float32x4.mul(u, r))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(u, e))), 
            t;
        }, e.rotateY = r.USE_SIMD ? e.SIMD.rotateY : e.scalar.rotateY, e.scalar.rotateZ = function(t, a, n) {
            var r = Math.sin(n), e = Math.cos(n), o = a[0], u = a[1], i = a[2], l = a[3], s = a[4], c = a[5], M = a[6], f = a[7];
            return a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = o * e + s * r, t[1] = u * e + c * r, 
            t[2] = i * e + M * r, t[3] = l * e + f * r, t[4] = s * e - o * r, t[5] = c * e - u * r, 
            t[6] = M * e - i * r, t[7] = f * e - l * r, t;
        }, e.SIMD.rotateZ = function(t, a, n) {
            var r = SIMD.Float32x4.splat(Math.sin(n)), e = SIMD.Float32x4.splat(Math.cos(n));
            a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]);
            var o = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 4);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, e), SIMD.Float32x4.mul(u, r))), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, e), SIMD.Float32x4.mul(o, r))), 
            t;
        }, e.rotateZ = r.USE_SIMD ? e.SIMD.rotateZ : e.scalar.rotateZ, e.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], 
            t[15] = 1, t;
        }, e.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a[1], t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = a[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, 
            t[15] = 1, t;
        }, e.fromRotation = function(t, a, n) {
            var e, o, u, i = n[0], l = n[1], s = n[2], c = Math.sqrt(i * i + l * l + s * s);
            return Math.abs(c) < r.EPSILON ? null : (c = 1 / c, i *= c, l *= c, s *= c, e = Math.sin(a), 
            o = Math.cos(a), u = 1 - o, t[0] = i * i * u + o, t[1] = l * i * u + s * e, t[2] = s * i * u - l * e, 
            t[3] = 0, t[4] = i * l * u - s * e, t[5] = l * l * u + o, t[6] = s * l * u + i * e, 
            t[7] = 0, t[8] = i * s * u + l * e, t[9] = l * s * u - i * e, t[10] = s * s * u + o, 
            t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
        }, e.fromXRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = n, t[7] = 0, 
            t[8] = 0, t[9] = -n, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.fromYRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = 0, t[2] = -n, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = n, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.fromZRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = n, t[2] = 0, t[3] = 0, t[4] = -n, t[5] = r, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, e.fromRotationTranslation = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = r + r, l = e + e, s = o + o, c = r * i, M = r * l, f = r * s, h = e * l, d = e * s, v = o * s, I = u * i, S = u * l, D = u * s;
            return t[0] = 1 - (h + v), t[1] = M + D, t[2] = f - S, t[3] = 0, t[4] = M - D, t[5] = 1 - (c + v), 
            t[6] = d + I, t[7] = 0, t[8] = f + S, t[9] = d - I, t[10] = 1 - (c + h), t[11] = 0, 
            t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
        }, e.getTranslation = function(t, a) {
            return t[0] = a[12], t[1] = a[13], t[2] = a[14], t;
        }, e.getRotation = function(t, a) {
            var n = a[0] + a[5] + a[10], r = 0;
            return n > 0 ? (r = 2 * Math.sqrt(n + 1), t[3] = .25 * r, t[0] = (a[6] - a[9]) / r, 
            t[1] = (a[8] - a[2]) / r, t[2] = (a[1] - a[4]) / r) : a[0] > a[5] & a[0] > a[10] ? (r = 2 * Math.sqrt(1 + a[0] - a[5] - a[10]), 
            t[3] = (a[6] - a[9]) / r, t[0] = .25 * r, t[1] = (a[1] + a[4]) / r, t[2] = (a[8] + a[2]) / r) : a[5] > a[10] ? (r = 2 * Math.sqrt(1 + a[5] - a[0] - a[10]), 
            t[3] = (a[8] - a[2]) / r, t[0] = (a[1] + a[4]) / r, t[1] = .25 * r, t[2] = (a[6] + a[9]) / r) : (r = 2 * Math.sqrt(1 + a[10] - a[0] - a[5]), 
            t[3] = (a[1] - a[4]) / r, t[0] = (a[8] + a[2]) / r, t[1] = (a[6] + a[9]) / r, t[2] = .25 * r), 
            t;
        }, e.fromRotationTranslationScale = function(t, a, n, r) {
            var e = a[0], o = a[1], u = a[2], i = a[3], l = e + e, s = o + o, c = u + u, M = e * l, f = e * s, h = e * c, d = o * s, v = o * c, I = u * c, S = i * l, D = i * s, m = i * c, _ = r[0], x = r[1], F = r[2];
            return t[0] = (1 - (d + I)) * _, t[1] = (f + m) * _, t[2] = (h - D) * _, t[3] = 0, 
            t[4] = (f - m) * x, t[5] = (1 - (M + I)) * x, t[6] = (v + S) * x, t[7] = 0, t[8] = (h + D) * F, 
            t[9] = (v - S) * F, t[10] = (1 - (M + d)) * F, t[11] = 0, t[12] = n[0], t[13] = n[1], 
            t[14] = n[2], t[15] = 1, t;
        }, e.fromRotationTranslationScaleOrigin = function(t, a, n, r, e) {
            var o = a[0], u = a[1], i = a[2], l = a[3], s = o + o, c = u + u, M = i + i, f = o * s, h = o * c, d = o * M, v = u * c, I = u * M, S = i * M, D = l * s, m = l * c, _ = l * M, x = r[0], F = r[1], b = r[2], p = e[0], E = e[1], w = e[2];
            return t[0] = (1 - (v + S)) * x, t[1] = (h + _) * x, t[2] = (d - m) * x, t[3] = 0, 
            t[4] = (h - _) * F, t[5] = (1 - (f + S)) * F, t[6] = (I + D) * F, t[7] = 0, t[8] = (d + m) * b, 
            t[9] = (I - D) * b, t[10] = (1 - (f + v)) * b, t[11] = 0, t[12] = n[0] + p - (t[0] * p + t[4] * E + t[8] * w), 
            t[13] = n[1] + E - (t[1] * p + t[5] * E + t[9] * w), t[14] = n[2] + w - (t[2] * p + t[6] * E + t[10] * w), 
            t[15] = 1, t;
        }, e.fromQuat = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = n + n, i = r + r, l = e + e, s = n * u, c = r * u, M = r * i, f = e * u, h = e * i, d = e * l, v = o * u, I = o * i, S = o * l;
            return t[0] = 1 - M - d, t[1] = c + S, t[2] = f - I, t[3] = 0, t[4] = c - S, t[5] = 1 - s - d, 
            t[6] = h + v, t[7] = 0, t[8] = f + I, t[9] = h - v, t[10] = 1 - s - M, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, e.frustum = function(t, a, n, r, e, o, u) {
            var i = 1 / (n - a), l = 1 / (e - r), s = 1 / (o - u);
            return t[0] = 2 * o * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * l, 
            t[6] = 0, t[7] = 0, t[8] = (n + a) * i, t[9] = (e + r) * l, t[10] = (u + o) * s, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * o * 2 * s, t[15] = 0, t;
        }, e.perspective = function(t, a, n, r, e) {
            var o = 1 / Math.tan(a / 2), u = 1 / (r - e);
            return t[0] = o / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (e + r) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * e * r * u, t[15] = 0, t;
        }, e.perspectiveFromFieldOfView = function(t, a, n, r) {
            var e = Math.tan(a.upDegrees * Math.PI / 180), o = Math.tan(a.downDegrees * Math.PI / 180), u = Math.tan(a.leftDegrees * Math.PI / 180), i = Math.tan(a.rightDegrees * Math.PI / 180), l = 2 / (u + i), s = 2 / (e + o);
            return t[0] = l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, 
            t[8] = -(u - i) * l * .5, t[9] = (e - o) * s * .5, t[10] = r / (n - r), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = r * n / (n - r), t[15] = 0, t;
        }, e.ortho = function(t, a, n, r, e, o, u) {
            var i = 1 / (a - n), l = 1 / (r - e), s = 1 / (o - u);
            return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * l, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * s, t[11] = 0, t[12] = (a + n) * i, t[13] = (e + r) * l, 
            t[14] = (u + o) * s, t[15] = 1, t;
        }, e.lookAt = function(t, a, n, o) {
            var u, i, l, s, c, M, f, h, d, v, I = a[0], S = a[1], D = a[2], m = o[0], _ = o[1], x = o[2], F = n[0], b = n[1], p = n[2];
            return Math.abs(I - F) < r.EPSILON && Math.abs(S - b) < r.EPSILON && Math.abs(D - p) < r.EPSILON ? e.identity(t) : (f = I - F, 
            h = S - b, d = D - p, v = 1 / Math.sqrt(f * f + h * h + d * d), f *= v, h *= v, 
            d *= v, u = _ * d - x * h, i = x * f - m * d, l = m * h - _ * f, v = Math.sqrt(u * u + i * i + l * l), 
            v ? (v = 1 / v, u *= v, i *= v, l *= v) : (u = 0, i = 0, l = 0), s = h * l - d * i, 
            c = d * u - f * l, M = f * i - h * u, v = Math.sqrt(s * s + c * c + M * M), v ? (v = 1 / v, 
            s *= v, c *= v, M *= v) : (s = 0, c = 0, M = 0), t[0] = u, t[1] = s, t[2] = f, t[3] = 0, 
            t[4] = i, t[5] = c, t[6] = h, t[7] = 0, t[8] = l, t[9] = M, t[10] = d, t[11] = 0, 
            t[12] = -(u * I + i * S + l * D), t[13] = -(s * I + c * S + M * D), t[14] = -(f * I + h * S + d * D), 
            t[15] = 1, t);
        }, e.str = function(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
        }, e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
        }, e.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t[4] = a[4] + n[4], t[5] = a[5] + n[5], t[6] = a[6] + n[6], t[7] = a[7] + n[7], 
            t[8] = a[8] + n[8], t[9] = a[9] + n[9], t[10] = a[10] + n[10], t[11] = a[11] + n[11], 
            t[12] = a[12] + n[12], t[13] = a[13] + n[13], t[14] = a[14] + n[14], t[15] = a[15] + n[15], 
            t;
        }, e.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t[4] = a[4] - n[4], t[5] = a[5] - n[5], t[6] = a[6] - n[6], t[7] = a[7] - n[7], 
            t[8] = a[8] - n[8], t[9] = a[9] - n[9], t[10] = a[10] - n[10], t[11] = a[11] - n[11], 
            t[12] = a[12] - n[12], t[13] = a[13] - n[13], t[14] = a[14] - n[14], t[15] = a[15] - n[15], 
            t;
        }, e.sub = e.subtract, e.multiplyScalar = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, 
            t[5] = a[5] * n, t[6] = a[6] * n, t[7] = a[7] * n, t[8] = a[8] * n, t[9] = a[9] * n, 
            t[10] = a[10] * n, t[11] = a[11] * n, t[12] = a[12] * n, t[13] = a[13] * n, t[14] = a[14] * n, 
            t[15] = a[15] * n, t;
        }, e.multiplyScalarAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t[6] = a[6] + n[6] * r, t[7] = a[7] + n[7] * r, 
            t[8] = a[8] + n[8] * r, t[9] = a[9] + n[9] * r, t[10] = a[10] + n[10] * r, t[11] = a[11] + n[11] * r, 
            t[12] = a[12] + n[12] * r, t[13] = a[13] + n[13] * r, t[14] = a[14] + n[14] * r, 
            t[15] = a[15] + n[15] * r, t;
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8] && t[9] === a[9] && t[10] === a[10] && t[11] === a[11] && t[12] === a[12] && t[13] === a[13] && t[14] === a[14] && t[15] === a[15];
        }, e.equals = function(t, a) {
            var n = t[0], e = t[1], o = t[2], u = t[3], i = t[4], l = t[5], s = t[6], c = t[7], M = t[8], f = t[9], h = t[10], d = t[11], v = t[12], I = t[13], S = t[14], D = t[15], m = a[0], _ = a[1], x = a[2], F = a[3], b = a[4], p = a[5], E = a[6], w = a[7], P = a[8], O = a[9], y = a[10], A = a[11], L = a[12], z = a[13], g = a[14], T = a[15];
            return Math.abs(n - m) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(m)) && Math.abs(e - _) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(_)) && Math.abs(o - x) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(x)) && Math.abs(u - F) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(F)) && Math.abs(i - b) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(l - p) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(p)) && Math.abs(s - E) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(c - w) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(M - P) <= r.EPSILON * Math.max(1, Math.abs(M), Math.abs(P)) && Math.abs(f - O) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(h - y) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(y)) && Math.abs(d - A) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(A)) && Math.abs(v - L) <= r.EPSILON * Math.max(1, Math.abs(v), Math.abs(L)) && Math.abs(I - z) <= r.EPSILON * Math.max(1, Math.abs(I), Math.abs(z)) && Math.abs(S - g) <= r.EPSILON * Math.max(1, Math.abs(S), Math.abs(g)) && Math.abs(D - T) <= r.EPSILON * Math.max(1, Math.abs(D), Math.abs(T));
        }, t.exports = e;
    }, function(t, a, n) {
        var r = n(0), e = n(6), o = n(7), u = n(8), i = {};
        i.create = function() {
            var t = new r.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.rotationTo = function() {
            var t = o.create(), a = o.fromValues(1, 0, 0), n = o.fromValues(0, 1, 0);
            return function(r, e, u) {
                var l = o.dot(e, u);
                return l < -.999999 ? (o.cross(t, a, e), o.length(t) < 1e-6 && o.cross(t, n, e), 
                o.normalize(t, t), i.setAxisAngle(r, t, Math.PI), r) : l > .999999 ? (r[0] = 0, 
                r[1] = 0, r[2] = 0, r[3] = 1, r) : (o.cross(t, e, u), r[0] = t[0], r[1] = t[1], 
                r[2] = t[2], r[3] = 1 + l, i.normalize(r, r));
            };
        }(), i.setAxes = function() {
            var t = e.create();
            return function(a, n, r, e) {
                return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = e[0], t[4] = e[1], t[7] = e[2], 
                t[2] = -n[0], t[5] = -n[1], t[8] = -n[2], i.normalize(a, i.fromMat3(a, t));
            };
        }(), i.clone = u.clone, i.fromValues = u.fromValues, i.copy = u.copy, i.set = u.set, 
        i.identity = function(t) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.setAxisAngle = function(t, a, n) {
            n *= .5;
            var r = Math.sin(n);
            return t[0] = r * a[0], t[1] = r * a[1], t[2] = r * a[2], t[3] = Math.cos(n), t;
        }, i.getAxisAngle = function(t, a) {
            var n = 2 * Math.acos(a[3]), r = Math.sin(n / 2);
            return 0 != r ? (t[0] = a[0] / r, t[1] = a[1] / r, t[2] = a[2] / r) : (t[0] = 1, 
            t[1] = 0, t[2] = 0), n;
        }, i.add = u.add, i.multiply = function(t, a, n) {
            var r = a[0], e = a[1], o = a[2], u = a[3], i = n[0], l = n[1], s = n[2], c = n[3];
            return t[0] = r * c + u * i + e * s - o * l, t[1] = e * c + u * l + o * i - r * s, 
            t[2] = o * c + u * s + r * l - e * i, t[3] = u * c - r * i - e * l - o * s, t;
        }, i.mul = i.multiply, i.scale = u.scale, i.rotateX = function(t, a, n) {
            n *= .5;
            var r = a[0], e = a[1], o = a[2], u = a[3], i = Math.sin(n), l = Math.cos(n);
            return t[0] = r * l + u * i, t[1] = e * l + o * i, t[2] = o * l - e * i, t[3] = u * l - r * i, 
            t;
        }, i.rotateY = function(t, a, n) {
            n *= .5;
            var r = a[0], e = a[1], o = a[2], u = a[3], i = Math.sin(n), l = Math.cos(n);
            return t[0] = r * l - o * i, t[1] = e * l + u * i, t[2] = o * l + r * i, t[3] = u * l - e * i, 
            t;
        }, i.rotateZ = function(t, a, n) {
            n *= .5;
            var r = a[0], e = a[1], o = a[2], u = a[3], i = Math.sin(n), l = Math.cos(n);
            return t[0] = r * l + e * i, t[1] = e * l - r * i, t[2] = o * l + u * i, t[3] = u * l - o * i, 
            t;
        }, i.calculateW = function(t, a) {
            var n = a[0], r = a[1], e = a[2];
            return t[0] = n, t[1] = r, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - e * e)), 
            t;
        }, i.dot = u.dot, i.lerp = u.lerp, i.slerp = function(t, a, n, r) {
            var e, o, u, i, l, s = a[0], c = a[1], M = a[2], f = a[3], h = n[0], d = n[1], v = n[2], I = n[3];
            return o = s * h + c * d + M * v + f * I, o < 0 && (o = -o, h = -h, d = -d, v = -v, 
            I = -I), 1 - o > 1e-6 ? (e = Math.acos(o), u = Math.sin(e), i = Math.sin((1 - r) * e) / u, 
            l = Math.sin(r * e) / u) : (i = 1 - r, l = r), t[0] = i * s + l * h, t[1] = i * c + l * d, 
            t[2] = i * M + l * v, t[3] = i * f + l * I, t;
        }, i.sqlerp = function() {
            var t = i.create(), a = i.create();
            return function(n, r, e, o, u, l) {
                return i.slerp(t, r, u, l), i.slerp(a, e, o, l), i.slerp(n, t, a, 2 * l * (1 - l)), 
                n;
            };
        }(), i.invert = function(t, a) {
            var n = a[0], r = a[1], e = a[2], o = a[3], u = n * n + r * r + e * e + o * o, i = u ? 1 / u : 0;
            return t[0] = -n * i, t[1] = -r * i, t[2] = -e * i, t[3] = o * i, t;
        }, i.conjugate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = a[3], t;
        }, i.length = u.length, i.len = i.length, i.squaredLength = u.squaredLength, i.sqrLen = i.squaredLength, 
        i.normalize = u.normalize, i.fromMat3 = function(t, a) {
            var n, r = a[0] + a[4] + a[8];
            if (r > 0) n = Math.sqrt(r + 1), t[3] = .5 * n, n = .5 / n, t[0] = (a[5] - a[7]) * n, 
            t[1] = (a[6] - a[2]) * n, t[2] = (a[1] - a[3]) * n; else {
                var e = 0;
                a[4] > a[0] && (e = 1), a[8] > a[3 * e + e] && (e = 2);
                var o = (e + 1) % 3, u = (e + 2) % 3;
                n = Math.sqrt(a[3 * e + e] - a[3 * o + o] - a[3 * u + u] + 1), t[e] = .5 * n, n = .5 / n, 
                t[3] = (a[3 * o + u] - a[3 * u + o]) * n, t[o] = (a[3 * o + e] + a[3 * e + o]) * n, 
                t[u] = (a[3 * u + e] + a[3 * e + u]) * n;
            }
            return t;
        }, i.str = function(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, i.exactEquals = u.exactEquals, i.equals = u.equals, t.exports = i;
    }, function(t, a, n) {
        var r = n(0), e = {};
        e.create = function() {
            var t = new r.ARRAY_TYPE(2);
            return t[0] = 0, t[1] = 0, t;
        }, e.clone = function(t) {
            var a = new r.ARRAY_TYPE(2);
            return a[0] = t[0], a[1] = t[1], a;
        }, e.fromValues = function(t, a) {
            var n = new r.ARRAY_TYPE(2);
            return n[0] = t, n[1] = a, n;
        }, e.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t;
        }, e.set = function(t, a, n) {
            return t[0] = a, t[1] = n, t;
        }, e.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t;
        }, e.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t;
        }, e.sub = e.subtract, e.multiply = function(t, a, n) {
            return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t;
        }, e.mul = e.multiply, e.divide = function(t, a, n) {
            return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t;
        }, e.div = e.divide, e.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t;
        }, e.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t;
        }, e.min = function(t, a, n) {
            return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t;
        }, e.max = function(t, a, n) {
            return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t;
        }, e.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t;
        }, e.scale = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t;
        }, e.scaleAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t;
        }, e.distance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1];
            return Math.sqrt(n * n + r * r);
        }, e.dist = e.distance, e.squaredDistance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1];
            return n * n + r * r;
        }, e.sqrDist = e.squaredDistance, e.length = function(t) {
            var a = t[0], n = t[1];
            return Math.sqrt(a * a + n * n);
        }, e.len = e.length, e.squaredLength = function(t) {
            var a = t[0], n = t[1];
            return a * a + n * n;
        }, e.sqrLen = e.squaredLength, e.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t;
        }, e.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t;
        }, e.normalize = function(t, a) {
            var n = a[0], r = a[1], e = n * n + r * r;
            return e > 0 && (e = 1 / Math.sqrt(e), t[0] = a[0] * e, t[1] = a[1] * e), t;
        }, e.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1];
        }, e.cross = function(t, a, n) {
            var r = a[0] * n[1] - a[1] * n[0];
            return t[0] = t[1] = 0, t[2] = r, t;
        }, e.lerp = function(t, a, n, r) {
            var e = a[0], o = a[1];
            return t[0] = e + r * (n[0] - e), t[1] = o + r * (n[1] - o), t;
        }, e.random = function(t, a) {
            a = a || 1;
            var n = 2 * r.RANDOM() * Math.PI;
            return t[0] = Math.cos(n) * a, t[1] = Math.sin(n) * a, t;
        }, e.transformMat2 = function(t, a, n) {
            var r = a[0], e = a[1];
            return t[0] = n[0] * r + n[2] * e, t[1] = n[1] * r + n[3] * e, t;
        }, e.transformMat2d = function(t, a, n) {
            var r = a[0], e = a[1];
            return t[0] = n[0] * r + n[2] * e + n[4], t[1] = n[1] * r + n[3] * e + n[5], t;
        }, e.transformMat3 = function(t, a, n) {
            var r = a[0], e = a[1];
            return t[0] = n[0] * r + n[3] * e + n[6], t[1] = n[1] * r + n[4] * e + n[7], t;
        }, e.transformMat4 = function(t, a, n) {
            var r = a[0], e = a[1];
            return t[0] = n[0] * r + n[4] * e + n[12], t[1] = n[1] * r + n[5] * e + n[13], t;
        }, e.forEach = function() {
            var t = e.create();
            return function(a, n, r, e, o, u) {
                var i, l;
                for (n || (n = 2), r || (r = 0), l = e ? Math.min(e * n + r, a.length) : a.length, 
                i = r; i < l; i += n) t[0] = a[i], t[1] = a[i + 1], o(t, t, u), a[i] = t[0], a[i + 1] = t[1];
                return a;
            };
        }(), e.str = function(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")";
        }, e.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1];
        }, e.equals = function(t, a) {
            var n = t[0], e = t[1], o = a[0], u = a[1];
            return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(e - u) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(u));
        }, t.exports = e;
    }, function(t, a, n) {
        "use strict";
        n.d(a, "a", function() {
            return o;
        });
        var r = n(5), e = (n.n(r), r.vec3), o = {
            add: function(t, a) {
                return e.add(e.create(), t, a);
            },
            subtract: function(t, a) {
                return e.subtract(e.create(), t, a);
            },
            sub: function(t, a) {
                return e.sub(e.create(), t, a);
            },
            multiply: function(t, a) {
                return e.multiply(e.create(), t, a);
            },
            mul: function(t, a) {
                return e.mul(e.create(), t, a);
            },
            divide: function(t, a) {
                return e.divide(e.create(), t, a);
            },
            div: function(t, a) {
                return e.div(e.create(), t, a);
            },
            ceil: function(t) {
                return e.ceil(e.create(), t);
            },
            floor: function(t) {
                return e.floor(e.create(), t);
            },
            round: function(t) {
                return e.round(e.create(), t);
            },
            min: function(t, a) {
                return e.min(e.create(), t, a);
            },
            max: function(t, a) {
                return e.max(e.create(), t, a);
            },
            scale: function(t, a) {
                return e.scale(e.create(), t, a);
            },
            scaleAndAdd: function(t, a, n) {
                return e.scaleAndAdd(e.create(), t, a, n);
            },
            inverse: function(t) {
                return e.inverse(e.create(), t);
            },
            normalize: function(t) {
                return e.normalize(e.create(), t);
            },
            cross: function(t, a) {
                return e.cross(e.create(), t, a);
            }
        };
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            void 0 === t && (t = {});
            var a = Object.assign({
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
                props: a,
                state: {
                    view: o.mat4.create(),
                    perspective: o.mat4.perspective(o.mat4.create(), a.fovy, a.aspect, a.near, a.far),
                    rotationX: o.mat4.create(),
                    rotationY: o.mat4.create(),
                    position: [ 0, 0, 0 ]
                }
            };
        }
        function e(t) {
            var a = t.props, n = t.state, r = n.view, e = n.perspective, u = n.rotationX, i = n.rotationY, l = n.position;
            a.needsUpdatePerspective && (a.needsUpdatePerspective = !1, o.mat4.perspective(e, a.fovy, a.aspect, a.near, a.far));
            var s = !1;
            if (a.rotateX && (o.mat4.rotateX(u, u, a.rotateX), a.rotateX = 0, s = !0), a.rotateY && (o.mat4.rotateY(i, i, a.rotateY), 
            a.rotateY = 0, s = !0), a.moveForward) {
                var c = [ i[8], i[9], i[10] ];
                o.vec3.add(l, l, o.vec3.scale(c, c, -a.moveForward)), a.moveForward = 0, s = !0;
            }
            if (a.moveLeft) {
                var c = [ i[0], i[1], i[2] ];
                o.vec3.add(l, l, o.vec3.scale(c, c, -a.moveLeft)), a.moveLeft = 0, s = !0;
            }
            if (a.moveUp) {
                var c = [ i[4], i[5], i[6] ];
                o.vec3.add(l, l, o.vec3.scale(c, c, a.moveUp)), a.moveUp = 0, s = !0;
            }
            s && (o.mat4.fromTranslation(r, l), o.mat4.multiply(r, r, i), o.mat4.multiply(r, r, u), 
            o.mat4.invert(r, r));
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.create = r, a.update = e;
        var o = n(1);
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            var a = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(.6 * Math.PI), n = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(.1), r = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(1e3), e = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(1).react([ t.HOT ], function(t, a) {
                return a ? a.width / a.height : t;
            });
            return {
                fovy: a,
                aspect: e,
                near: n,
                far: r,
                perspective: __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(o.mat4.create()).react([ a.HOT, e.HOT, n.HOT, r.HOT ], o.mat4.perspective, "updatePosition")
            };
        }
        function e() {
            var t = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val([ 0, 0, 0 ]), a = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(0), n = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(0), r = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(o.quat.create()).react([ a.HOT ], u.getYawQuat), e = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(o.quat.create()).react([ n.HOT ], u.getPitchQuat), i = __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(o.quat.create()).react([ e.HOT, r.HOT ], o.quat.multiply);
            return {
                position: t,
                yaw: a,
                pitch: n,
                yawQuat: r,
                pitchQuat: e,
                rotationQuat: i,
                view: __WEBPACK_IMPORTED_MODULE_1_tvs_flow_dist_lib_utils_entity_reference__.val(o.mat4.create()).react([ i.HOT, t.HOT ], o.mat4.fromRotationTranslation)
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.makePerspective = r, a.makeFirstPersonView = e;
        var o = n(1);
        throw new Error('Cannot find module "tvs-flow/dist/lib/utils/entity-reference"');
        var u;
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            var a = __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStreamStart(null, function(t) {
                var a = document.createElement("canvas");
                return document.body.appendChild(a), t(a), function() {
                    document.body.removeChild(a);
                };
            }), n = __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.stream([ a.HOT ], __WEBPACK_IMPORTED_MODULE_2_tvs_renderer_dist_lib_utils_context__.getContext), r = __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStream([ n.HOT ], function(t, a) {
                var n = __WEBPACK_IMPORTED_MODULE_1_tvs_renderer_dist_lib_painter__.create(a);
                return t(n), n.destroy;
            }).accept(M.a), e = __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.stream([ a.HOT, t.HOT ], function(t) {
                return {
                    width: t.clientWidth,
                    height: t.clientHeight
                };
            });
            return r.react([ e.HOT ], function(t, a) {
                return t.resize();
            }, "updateSize"), {
                canvas: a,
                painter: r,
                gl: n,
                canvasSize: e
            };
        }
        function e(t) {
            return __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStream([ t.HOT ], function(t, a) {
                var n = a.createShade();
                return t(n), n.destroy;
            });
        }
        function o(t) {
            return __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStream([ t.HOT ], function(t, a) {
                var n = a.createForm();
                return t(n), n.destroy;
            });
        }
        function u(t) {
            return __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStream([ t.HOT ], function(t, a) {
                var n = a.createSketch();
                return t(n), n.destroy;
            });
        }
        function i(t) {
            return __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStream([ t.HOT ], function(t, a) {
                var n = a.createFlatSketch();
                return t(n), n.destroy;
            });
        }
        function l(t) {
            return __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStream([ t.HOT ], function(t, a) {
                var n = a.createStaticLayer();
                return t(n), n.destroy;
            });
        }
        function s(t) {
            return __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStream([ t.HOT ], function(t, a) {
                var n = a.createDrawingLayer();
                return t(n), n.destroy;
            });
        }
        function c(t) {
            return __WEBPACK_IMPORTED_MODULE_0_tvs_flow_dist_lib_utils_entity_reference__.asyncStream([ t.HOT ], function(t, a) {
                var n = a.createEffectLayer();
                return t(n), n.destroy;
            });
        }
        throw Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.makePainterCanvas = r, a.makeShadeEntity = e, a.makeFormEntity = o, a.makeSketchEntity = u, 
        a.makeFlatSketchEntity = i, a.makeStaticLayerEntity = l, a.makeDrawingLayerEntity = s, 
        a.makeEffectLayerEntity = c, new Error('Cannot find module "tvs-flow/dist/lib/utils/entity-reference"');
        var M;
    }, function(t, a, n) {
        "use strict";
        n.d(a, "a", function() {
            return r;
        });
        var r = function(t, a) {
            return t !== a;
        };
    }, function(t, a, n) {
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
        function e() {
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
        }), a.windowSize = r, a.windowSizeObserver = e;
    }, function(t, a, n) {
        "use strict";
        function r(t, a) {
            function n(a) {
                u[a.keyCode] = Date.now(), t(u);
            }
            function r(a) {
                delete u[a.keyCode], t(u);
            }
            void 0 === a && (a = {});
            var e = a.element, o = void 0 === e ? window : e, u = {};
            return o.addEventListener("keyup", r, !1), o.addEventListener("keydown", n, !1), 
            t(u), function() {
                o.removeEventListener("keyup", r), o.removeEventListener("keydown", n);
            };
        }
        function e(t) {
            function a(t) {
                n.state.pressed = t;
            }
            var n = {
                Keys: o,
                state: {
                    pressed: {}
                },
                destroy: function() {}
            };
            return n.destroy = r(a, t), n;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), n.d(a, "Keys", function() {
            return o;
        }), a.keyboard = r, a.keyboardObserver = e;
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
    }, function(t, a, n) {
        "use strict";
        function r(t, a) {
            function n(a) {
                c.pressed[a.button] = a, a.button === o.LEFT && (M = a.clientX, f = a.clientY, h = !0), 
                t(c);
            }
            function r(a) {
                delete c.pressed[a.button], delete c.dragDelta.event, c.dragDelta.x = 0, c.dragDelta.y = 0, 
                h = !1, t(c);
            }
            function e(a) {
                h && (c.dragDelta.event = a, c.dragDelta.x = M - a.clientX, c.dragDelta.y = f - a.clientY, 
                M = a.clientX, f = a.clientY, t(c));
            }
            function u(t) {
                t.preventDefault();
            }
            void 0 === a && (a = {});
            var i = a.element, l = void 0 === i ? document : i, s = a.enableRightButton, c = {
                pressed: {},
                dragDelta: {
                    x: 0,
                    y: 0
                }
            }, M = 0, f = 0, h = !1;
            return l.addEventListener("mousedown", n), document.addEventListener("mouseup", r), 
            document.addEventListener("mousemove", e), s && l.addEventListener("contextmenu", u), 
            t(c), function() {
                l.removeEventListener("mousedown", n), document.removeEventListener("mousemove", e), 
                document.removeEventListener("mouseup", r), s && l.removeEventListener("contextmenu", u);
            };
        }
        function e(t) {
            function a(t) {
                n.state = t;
            }
            void 0 === t && (t = {});
            var n = {
                Buttons: o,
                state: {},
                destroy: function() {}
            };
            return n.destroy = r(a, t), n;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), n.d(a, "Buttons", function() {
            return o;
        }), a.mouse = r, a.mouseObserver = e;
        var o = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        };
    }, function(t, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), n.d(a, "generateUUID", function() {
            return r;
        });
        var r = function() {
            var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), a = new Array(36), n = 0, r = 0;
            return function() {
                for (var e = 0; e < 36; ) 8 === e || 13 === e || 18 === e || 23 === e ? a[e] = "-" : 14 === e ? a[e] = "4" : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0), 
                r = 15 & n, n >>= 4, a[e] = t[19 === e ? 3 & r | 8 : r]), e += 1;
                return a.join("");
            };
        }();
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            function a(e) {
                r && (t(e - (n || e)), n = e, requestAnimationFrame(a));
            }
            var n, r = !0;
            return requestAnimationFrame(a), function() {
                r = !1;
            };
        }
        function e(t) {
            function a(r) {
                n && (t(r), requestAnimationFrame(a));
            }
            var n = !0;
            return requestAnimationFrame(a), function() {
                n = !1;
            };
        }
        function o(t) {
            function a() {
                for (var t in n) n[t].apply(null, arguments);
            }
            var n = [];
            return {
                start: function() {
                    this.stop = t(a);
                },
                stop: function() {},
                step: a,
                addUpdate: function(t) {
                    n.push(t);
                },
                removeUpdate: function(t) {
                    n = n.filter(function(a) {
                        return a !== t;
                    });
                }
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.animateWithTPF = r, a.animate = e, a.animator = o;
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            return t[u.randInt(t.length)];
        }
        function e(t, a) {
            for (var n = 0; n < t; n++) a(n);
        }
        function o(t, a) {
            var n = [];
            return e(t, function(t) {
                return n.push(a(t));
            }), n;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.pickRandom = r, a.doTimes = e, a.yieldTimes = o;
        var u = n(2);
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            return Math.floor(127 * (t + 1));
        }
        function e(t, a, n) {
            for (var e = t.canvas.width, u = t.canvas.height, i = o.tileNoise(e, u, a, n), l = o.tileNoise(e, u, 2.1 * a, 2.1 * n), s = o.tileNoise(e, u, 4.2 * a, 4.2 * n), c = o.tileNoise(e, u, 8.3 * a, 8.3 * n), M = t.getImageData(0, 0, e, u), f = 0; f < i.length - 1; f++) {
                var h = 4 * f;
                M.data[h] = r(i[f]), M.data[h + 1] = r(l[f]), M.data[h + 2] = r(s[f]), M.data[h + 3] = r(c[f]);
            }
            t.putImageData(M, 0, 0);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.drawTileNoiseTexture = e;
        var o = n(4);
    }, function(t, a, n) {
        "use strict";
        function r(t, a) {
            var n = t[0], r = t[1], e = a.width, o = a.height;
            return n >= e && (n -= e), r >= o && (r -= o), n < 0 && (n += e), r < 0 && (r += o), 
            [ n, r ];
        }
        function e(t, a) {
            var n = t[0], r = t[1], e = a.width, o = a.height;
            return n < 0 && (n = 0), r < 0 && (r = 0), n >= e && (n = e), r >= o && (r = o), 
            [ n, r ];
        }
        function o(t) {
            function a(a, n) {
                var r = t(n, a), e = r[0];
                return 4 * (r[1] * a.height + e);
            }
            function n(t, n) {
                var r = a(t, n);
                return [ t.data[r], t.data[r + 1], t.data[r + 2], t.data[r + 3] ];
            }
            function r(t, n, r) {
                var e = a(t, n);
                t.data[e] = r[0], t.data[e + 1] = r[1], t.data[e + 2] = r[2], t.data[e + 3] = r[3];
            }
            function o(t, a) {
                for (var n = a[0], r = a[1], e = a[2], o = a[3], u = t.data, i = 0; i < u.length; i += 4) u[i] + n < 256 && (u[i] += n), 
                u[i + 1] + r < 256 && (u[i + 1] += r), u[i + 2] + e < 256 && (u[i + 2] += e), u[i + 3] + o < 256 && (u[i + 3] += o);
            }
            function u(t, a) {
                for (var n = a[0], r = a[1], e = a[2], o = a[3], u = t.data, i = 0; i <= u.length; i += 4) n <= u[i] && (u[i] -= n), 
                r <= u[i + 1] && (u[i + 1] -= r), e <= u[i + 2] && (u[i + 2] -= e), o <= u[i + 3] && (u[i + 3] -= o);
            }
            function l(t, a) {
                for (var e = 0; e < t.width; e++) for (var o = 0; e < t.height; o++) r(t, [ e, o ], i.mixColors(n(t, [ e, o ]), a));
            }
            function s(t, a, e) {
                for (var o = e[0], u = e[1], i = a.width - 1, l = a.height - 1, s = 0; s < l; s++) for (var c = 0; c < i; c++) r(t, [ o + c, u + s ], n(a, [ c, s ]));
            }
            function c(t, a, e) {
                for (var o = e[0], u = e[1], l = a.width - 1, s = a.height - 1, c = 0; c < s; c++) for (var M = 0; M < l; M++) r(t, [ o + M, u + c ], i.mixColors(n(t, [ o + M, u + c ]), n(a, [ M, c ])));
            }
            return t = t || e, {
                getPixelIndex: a,
                getColorAt: n,
                setColorAt: r,
                increaseAllBy: o,
                decreaseAllBy: u,
                mixinColor: l,
                replaceWithImageDataAt: s,
                drawImageAt: c
            };
        }
        function u(t) {
            var a = document.createElement("canvas");
            a.width = t.width, a.height = t.height;
            var n = a.getContext("2d");
            if (n) return n.drawImage(t, 0, 0, t.width, t.height), n.getImageData(0, 0, t.width, t.height);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.repeatedPosition = r, a.closedPosition = e, a.createPixelContext = o, a.createImgDataFromImage = u;
        var i = n(10);
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            function a(t) {
                return function() {
                    for (var a in this) "function" == typeof this[a][t] && this[a][t]();
                };
            }
            function n(t, n) {
                return void 0 === n && (n = {}), t.split(".").reduce(function(t, n) {
                    return t[n] = t[n] || {
                        reset: a("reset"),
                        watch: a("watch"),
                        unwatch: a("unwatch")
                    };
                }, n);
            }
            function r(a) {
                var r = t.getGraph(), e = r.entities, o = r.arcs, u = r.processes;
                return Object.keys(e).reduce(function(a, r) {
                    var i = n(r, a), l = e[r], s = Object.keys(o).map(function(t) {
                        return o[t];
                    }).filter(function(t) {
                        return t.entity == r && !t.port;
                    }).map(function(t) {
                        return t.process;
                    });
                    return i.id = r, Object.defineProperty(i, "val", {
                        get: function() {
                            return t.get(r);
                        },
                        set: function(a) {
                            return t.set(r, a);
                        }
                    }), i.update = function(a) {
                        t.update(r, a);
                    }, i.reset = function() {
                        null != l.value ? t.set(r, l.value) : null != l.json && t.set(r, JSON.parse(l.json));
                    }, i.watch = function() {
                        t.on(r, function(t) {
                            return console.log(r, t);
                        });
                    }, i.unwatch = function() {
                        t.off(r);
                    }, i.streams = {}, s.forEach(function(a) {
                        var n = a.split(".").pop();
                        n && (i.streams[n] = {
                            start: function() {
                                t.start(a);
                            }
                        }, u[a].async && (i.streams[n].stop = function() {
                            t.stop(a);
                        }));
                    }), a;
                }, a);
            }
            return r({
                update: function() {
                    for (var t in this) "update" !== t && delete this[t];
                    r(this);
                }
            });
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.create = r;
    } ]);
});