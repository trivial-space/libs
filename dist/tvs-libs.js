!function(t, a) {
    "object" == typeof exports && "object" == typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? exports.tvsLibs = a() : t.tvsLibs = a();
}(this, function() {
    return function(t) {
        function a(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, a), o.loaded = !0, o.exports;
        }
        var n = {};
        return a.m = t, a.c = n, a.p = "", a(0);
    }([ function(t, a, n) {
        "use strict";
        var r = n(1), o = n(2), e = n(4), u = n(3), l = n(5), i = n(17), M = n(18), s = n(19), c = n(20), f = n(21), h = n(22), S = n(23);
        a.math = {
            core: r,
            noise: e,
            coords: o,
            vectors: u,
            linAlg: l,
            geometry: i
        }, a.vr = {
            camera: M
        }, a.events = {
            dom: s,
            mouse: f,
            keyboard: c
        }, a.utils = {
            animation: S,
            string: h
        }, Object.defineProperty(a, "__esModule", {
            value: !0
        }), a["default"] = {
            math: a.math,
            vr: a.vr,
            events: a.events,
            utils: a.utils
        };
    }, function(t, a) {
        "use strict";
        function n(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function r(t, a, n) {
            return t + n * (a - t);
        }
        function o(t, a, n) {
            return Math.max(a, Math.min(t, n));
        }
        function e(t) {
            return Math.floor(Math.random() * t);
        }
        function u(t, a) {
            return e(a - t) + t;
        }
        function l() {
            return 2 * Math.random() - 1 + (2 * Math.random() - 1) + (2 * Math.random() - 1);
        }
        function i(t) {
            return t * a.DEG_TO_RAD_FACTOR;
        }
        a.DEG_TO_RAD_FACTOR = Math.PI / 180, a.sign = n, a.lerp = r, a.clamp = o, a.randInt = e, 
        a.randIntInRange = u, a.normalRand = l, a.degToRad = i;
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            return [ e.length(t), Math.atan2(t[1], t[0]) ];
        }
        function o(t) {
            var a = t[0], n = t[1];
            return [ a * Math.cos(n), a * Math.sin(n) ];
        }
        var e = n(3);
        a.cartesianToPolar2D = r, a.polarToCartesian2D = o;
    }, function(t, a) {
        "use strict";
        function n(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] + a[r];
            return n;
        }
        function r(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] + a;
            return n;
        }
        function o(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] - a[r];
            return n;
        }
        function e(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] - a;
            return n;
        }
        function u(t, a) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] * a;
            return n;
        }
        function l(t, a) {
            if (a) {
                for (var n = [], r = 0; r < t.length; r++) n[r] = t[r] / a;
                return n;
            }
        }
        function i(t) {
            for (var a = 0, n = 0; n < t.length; n++) {
                var r = t[n];
                a += r * r;
            }
            return Math.sqrt(a);
        }
        function M(t) {
            return l(t, i(t));
        }
        function s(t, a) {
            return a < i(t) ? u(M(t), a) : t;
        }
        function c(t, a) {
            if (t.length != a.length) return !1;
            for (var n = 0; n < t.length; n++) if (t[n] !== a[n]) return !1;
            return !0;
        }
        a.add = n, a.addScalar = r, a.sub = o, a.subScalar = e, a.mul = u, a.div = l, a.length = i, 
        a.normalize = M, a.limit = s, a.isEqual = c;
    }, function(t, a) {
        "use strict";
        function n(t) {
            return t * t * t * (t * (6 * t - 15) + 10);
        }
        function r(t, a, n) {
            return a + t * (n - a);
        }
        function o(t, a) {
            return 0 === (1 & t) ? a : -a;
        }
        function e(t) {
            var a, e, u;
            return e = ~~t, a = 255 & e, t -= e, u = n(t), r(u, o(f[a], t), o(f[a + 1], t - 1));
        }
        function u(t, a) {
            var n, r, o = 0, e = 0, u = 0, l = (t + a) * h, i = Math.floor(t + l), M = Math.floor(a + l), s = (i + M) * S, c = i - s, f = M - s, I = t - c, x = a - f;
            I > x ? (n = 1, r = 0) : (n = 0, r = 1);
            var D = I - n + S, m = x - r + S, F = I - 1 + 2 * S, p = x - 1 + 2 * S, E = 255 & i, w = 255 & M, A = .5 - I * I - x * x;
            if (A >= 0) {
                var z = 3 * v[E + d[w]];
                A *= A, o = A * A * (b[z] * I + b[z + 1] * x);
            }
            var P = .5 - D * D - m * m;
            if (P >= 0) {
                var L = 3 * v[E + n + d[w + r]];
                P *= P, e = P * P * (b[L] * D + b[L + 1] * m);
            }
            var R = .5 - F * F - p * p;
            if (R >= 0) {
                var O = 3 * v[E + 1 + d[w + 1]];
                R *= R, u = R * R * (b[O] * F + b[O + 1] * p);
            }
            return 70 * (o + e + u);
        }
        function l(t, a, n) {
            var r, o, e, u, l, i, M, s, c, f, h = (t + a + n) * I, S = Math.floor(t + h), D = Math.floor(a + h), m = Math.floor(n + h), F = (S + D + m) * x, p = S - F, E = D - F, w = m - F, A = t - p, z = a - E, P = n - w;
            A >= z ? z >= P ? (l = 1, i = 0, M = 0, s = 1, c = 1, f = 0) : A >= P ? (l = 1, 
            i = 0, M = 0, s = 1, c = 0, f = 1) : (l = 0, i = 0, M = 1, s = 1, c = 0, f = 1) : z < P ? (l = 0, 
            i = 0, M = 1, s = 0, c = 1, f = 1) : A < P ? (l = 0, i = 1, M = 0, s = 0, c = 1, 
            f = 1) : (l = 0, i = 1, M = 0, s = 1, c = 1, f = 0);
            var L = A - l + x, R = z - i + x, O = P - M + x, N = A - s + 2 * x, y = z - c + 2 * x, q = P - f + 2 * x, g = A - 1 + 3 * x, T = z - 1 + 3 * x, Y = P - 1 + 3 * x, _ = 255 & S, U = 255 & D, C = 255 & m, V = .6 - A * A - z * z - P * P;
            if (V < 0) r = 0; else {
                var X = 3 * v[_ + d[U + d[C]]];
                V *= V, r = V * V * (b[X] * A + b[X + 1] * z + b[X + 2] * P);
            }
            var B = .6 - L * L - R * R - O * O;
            if (B < 0) o = 0; else {
                var j = 3 * v[_ + l + d[U + i + d[C + M]]];
                B *= B, o = B * B * (b[j] * L + b[j + 1] * R + b[j + 2] * O);
            }
            var K = .6 - N * N - y * y - q * q;
            if (K < 0) e = 0; else {
                var H = 3 * v[_ + s + d[U + c + d[C + f]]];
                K *= K, e = K * K * (b[H] * N + b[H + 1] * y + b[H + 2] * q);
            }
            var k = .6 - g * g - T * T - Y * Y;
            if (k < 0) u = 0; else {
                var Z = 3 * v[_ + 1 + d[U + 1 + d[C + 1]]];
                k *= k, u = k * k * (b[Z] * g + b[Z + 1] * T + b[Z + 2] * Y);
            }
            return 32 * (r + o + e + u);
        }
        function i(t, a, n, r) {
            var o, e, u, l, i, M = (t + a + n + r) * D, s = Math.floor(t + M), c = Math.floor(a + M), f = Math.floor(n + M), h = Math.floor(r + M), S = (s + c + f + h) * m, I = s - S, x = c - S, F = f - S, v = h - S, b = t - I, E = a - x, w = n - F, A = r - v, z = 0, P = 0, L = 0, R = 0;
            b > E ? z++ : P++, b > w ? z++ : L++, b > A ? z++ : R++, E > w ? P++ : L++, E > A ? P++ : R++, 
            w > A ? L++ : R++;
            var O, N, y, q, g, T, Y, _, U, C, V, X;
            O = z >= 3 ? 1 : 0, N = P >= 3 ? 1 : 0, y = L >= 3 ? 1 : 0, q = R >= 3 ? 1 : 0, 
            g = z >= 2 ? 1 : 0, T = P >= 2 ? 1 : 0, Y = L >= 2 ? 1 : 0, _ = R >= 2 ? 1 : 0, 
            U = z >= 1 ? 1 : 0, C = P >= 1 ? 1 : 0, V = L >= 1 ? 1 : 0, X = R >= 1 ? 1 : 0;
            var B = b - O + m, j = E - N + m, K = w - y + m, H = A - q + m, k = b - g + 2 * m, Z = E - T + 2 * m, Q = w - Y + 2 * m, G = A - _ + 2 * m, W = b - U + 3 * m, J = E - C + 3 * m, $ = w - V + 3 * m, tt = A - X + 3 * m, at = b - 1 + 4 * m, nt = E - 1 + 4 * m, rt = w - 1 + 4 * m, ot = A - 1 + 4 * m, et = 255 & s, ut = 255 & c, lt = 255 & f, it = 255 & h, Mt = .6 - b * b - E * E - w * w - A * A;
            if (Mt < 0) o = 0; else {
                var st = d[et + d[ut + d[lt + d[it]]]] % 32 * 4;
                Mt *= Mt, o = Mt * Mt * (p[st] * b + p[st + 1] * E + p[st + 2] * w + p[st + 3] * A);
            }
            var ct = .6 - B * B - j * j - K * K - H * H;
            if (ct < 0) e = 0; else {
                var ft = d[et + O + d[ut + N + d[lt + y + d[it + q]]]] % 32 * 4;
                ct *= ct, e = ct * ct * (p[ft] * B + p[ft + 1] * j + p[ft + 2] * K + p[ft + 3] * H);
            }
            var ht = .6 - k * k - Z * Z - Q * Q - G * G;
            if (ht < 0) u = 0; else {
                var St = d[et + g + d[ut + T + d[lt + Y + d[it + _]]]] % 32 * 4;
                ht *= ht, u = ht * ht * (p[St] * k + p[St + 1] * Z + p[St + 2] * Q + p[St + 3] * G);
            }
            var It = .6 - W * W - J * J - $ * $ - tt * tt;
            if (It < 0) l = 0; else {
                var xt = d[et + U + d[ut + C + d[lt + V + d[it + X]]]] % 32 * 4;
                It *= It, l = It * It * (p[xt] * W + p[xt + 1] * J + p[xt + 2] * $ + p[xt + 3] * tt);
            }
            var Dt = .6 - at * at - nt * nt - rt * rt - ot * ot;
            if (Dt < 0) i = 0; else {
                var mt = d[et + 1 + d[ut + 1 + d[lt + 1 + d[it + 1]]]] % 32 * 4;
                Dt *= Dt, i = Dt * Dt * (p[mt] * at + p[mt + 1] * nt + p[mt + 2] * rt + p[mt + 3] * ot);
            }
            return 27 * (o + e + u + l + i);
        }
        function M(t, a, n, r) {
            for (var o = [], e = 0; e < a; e++) for (var u = 0; u < t; u++) {
                var l = u / t, M = e / a, s = Math.cos(2 * l * Math.PI) * n / (2 * Math.PI), c = Math.cos(2 * M * Math.PI) * r / (2 * Math.PI), f = Math.sin(2 * l * Math.PI) * n / (2 * Math.PI), h = Math.sin(2 * M * Math.PI) * r / (2 * Math.PI);
                o.push(i(s, c, f, h));
            }
            return o;
        }
        var s, c, f = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (s = c = 0; c <= 256; s = ++c) f[256 + s] = f[s];
        a.noise1d = e;
        var h = .5 * (Math.sqrt(3) - 1), S = (3 - Math.sqrt(3)) / 6, I = 1 / 3, x = 1 / 6, D = (Math.sqrt(5) - 1) / 4, m = (5 - Math.sqrt(5)) / 20, F = new Uint8Array(256), d = new Uint8Array(512), v = new Uint8Array(512);
        for (s = 0; s < 256; s++) F[s] = 256 * Math.random();
        for (s = 0; s < 512; s++) d[s] = F[255 & s], v[s] = d[s] % 12;
        var b = new Float32Array([ 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1 ]), p = new Float32Array([ 0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0 ]);
        a.noise2d = u, a.noise3d = l, a.noise4d = i, a.tileNoise = M;
    }, function(t, a, n) {
        "use strict";
        function r(t) {
            for (var n in t) a.hasOwnProperty(n) || (a[n] = t[n]);
        }
        r(n(6)), r(n(16));
    }, function(t, a, n) {
        a.glMatrix = n(7), a.mat2 = n(8), a.mat2d = n(9), a.mat3 = n(10), a.mat4 = n(11), 
        a.quat = n(12), a.vec2 = n(15), a.vec3 = n(13), a.vec4 = n(14);
    }, function(t, a) {
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
        var r = n(7), o = {};
        o.create = function() {
            var t = new r.ARRAY_TYPE(4);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, o.clone = function(t) {
            var a = new r.ARRAY_TYPE(4);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t;
        }, o.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, o.fromValues = function(t, a, n, o) {
            var e = new r.ARRAY_TYPE(4);
            return e[0] = t, e[1] = a, e[2] = n, e[3] = o, e;
        }, o.set = function(t, a, n, r, o) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t;
        }, o.transpose = function(t, a) {
            if (t === a) {
                var n = a[1];
                t[1] = a[2], t[2] = n;
            } else t[0] = a[0], t[1] = a[2], t[2] = a[1], t[3] = a[3];
            return t;
        }, o.invert = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = n * e - o * r;
            return u ? (u = 1 / u, t[0] = e * u, t[1] = -r * u, t[2] = -o * u, t[3] = n * u, 
            t) : null;
        }, o.adjoint = function(t, a) {
            var n = a[0];
            return t[0] = a[3], t[1] = -a[1], t[2] = -a[2], t[3] = n, t;
        }, o.determinant = function(t) {
            return t[0] * t[3] - t[2] * t[1];
        }, o.multiply = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = n[0], i = n[1], M = n[2], s = n[3];
            return t[0] = r * l + e * i, t[1] = o * l + u * i, t[2] = r * M + e * s, t[3] = o * M + u * s, 
            t;
        }, o.mul = o.multiply, o.rotate = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = Math.sin(n), i = Math.cos(n);
            return t[0] = r * i + e * l, t[1] = o * i + u * l, t[2] = r * -l + e * i, t[3] = o * -l + u * i, 
            t;
        }, o.scale = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = n[0], i = n[1];
            return t[0] = r * l, t[1] = o * l, t[2] = e * i, t[3] = u * i, t;
        }, o.fromRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t;
        }, o.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t;
        }, o.str = function(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, o.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
        }, o.LDU = function(t, a, n, r) {
            return t[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - t[2] * n[1], 
            [ t, a, n ];
        }, o.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t;
        }, o.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t;
        }, o.sub = o.subtract, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, o.equals = function(t, a) {
            var n = t[0], o = t[1], e = t[2], u = t[3], l = a[0], i = a[1], M = a[2], s = a[3];
            return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(o - i) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(i)) && Math.abs(e - M) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(u - s) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(s));
        }, o.multiplyScalar = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t;
        }, o.multiplyScalarAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t;
        }, t.exports = o;
    }, function(t, a, n) {
        var r = n(7), o = {};
        o.create = function() {
            var t = new r.ARRAY_TYPE(6);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, o.clone = function(t) {
            var a = new r.ARRAY_TYPE(6);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t;
        }, o.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, o.fromValues = function(t, a, n, o, e, u) {
            var l = new r.ARRAY_TYPE(6);
            return l[0] = t, l[1] = a, l[2] = n, l[3] = o, l[4] = e, l[5] = u, l;
        }, o.set = function(t, a, n, r, o, e, u) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t[4] = e, t[5] = u, t;
        }, o.invert = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = a[4], l = a[5], i = n * e - r * o;
            return i ? (i = 1 / i, t[0] = e * i, t[1] = -r * i, t[2] = -o * i, t[3] = n * i, 
            t[4] = (o * l - e * u) * i, t[5] = (r * u - n * l) * i, t) : null;
        }, o.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, o.multiply = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = n[0], s = n[1], c = n[2], f = n[3], h = n[4], S = n[5];
            return t[0] = r * M + e * s, t[1] = o * M + u * s, t[2] = r * c + e * f, t[3] = o * c + u * f, 
            t[4] = r * h + e * S + l, t[5] = o * h + u * S + i, t;
        }, o.mul = o.multiply, o.rotate = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = Math.sin(n), s = Math.cos(n);
            return t[0] = r * s + e * M, t[1] = o * s + u * M, t[2] = r * -M + e * s, t[3] = o * -M + u * s, 
            t[4] = l, t[5] = i, t;
        }, o.scale = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = n[0], s = n[1];
            return t[0] = r * M, t[1] = o * M, t[2] = e * s, t[3] = u * s, t[4] = l, t[5] = i, 
            t;
        }, o.translate = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = n[0], s = n[1];
            return t[0] = r, t[1] = o, t[2] = e, t[3] = u, t[4] = r * M + e * s + l, t[5] = o * M + u * s + i, 
            t;
        }, o.fromRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = 0, t[5] = 0, t;
        }, o.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t[4] = 0, t[5] = 0, t;
        }, o.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = a[0], t[5] = a[1], t;
        }, o.str = function(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
        }, o.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
        }, o.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t[4] = a[4] + n[4], t[5] = a[5] + n[5], t;
        }, o.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t[4] = a[4] - n[4], t[5] = a[5] - n[5], t;
        }, o.sub = o.subtract, o.multiplyScalar = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, 
            t[5] = a[5] * n, t;
        }, o.multiplyScalarAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t;
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5];
        }, o.equals = function(t, a) {
            var n = t[0], o = t[1], e = t[2], u = t[3], l = t[4], i = t[5], M = a[0], s = a[1], c = a[2], f = a[3], h = a[4], S = a[5];
            return Math.abs(n - M) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(M)) && Math.abs(o - s) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(e - c) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(u - f) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(l - h) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(h)) && Math.abs(i - S) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(S));
        }, t.exports = o;
    }, function(t, a, n) {
        var r = n(7), o = {};
        o.create = function() {
            var t = new r.ARRAY_TYPE(9);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, o.fromMat4 = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[4], t[4] = a[5], t[5] = a[6], 
            t[6] = a[8], t[7] = a[9], t[8] = a[10], t;
        }, o.clone = function(t) {
            var a = new r.ARRAY_TYPE(9);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a[6] = t[6], a[7] = t[7], a[8] = t[8], a;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t;
        }, o.fromValues = function(t, a, n, o, e, u, l, i, M) {
            var s = new r.ARRAY_TYPE(9);
            return s[0] = t, s[1] = a, s[2] = n, s[3] = o, s[4] = e, s[5] = u, s[6] = l, s[7] = i, 
            s[8] = M, s;
        }, o.set = function(t, a, n, r, o, e, u, l, i, M) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t[4] = e, t[5] = u, t[6] = l, t[7] = i, 
            t[8] = M, t;
        }, o.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, o.transpose = function(t, a) {
            if (t === a) {
                var n = a[1], r = a[2], o = a[5];
                t[1] = a[3], t[2] = a[6], t[3] = n, t[5] = a[7], t[6] = r, t[7] = o;
            } else t[0] = a[0], t[1] = a[3], t[2] = a[6], t[3] = a[1], t[4] = a[4], t[5] = a[7], 
            t[6] = a[2], t[7] = a[5], t[8] = a[8];
            return t;
        }, o.invert = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = a[4], l = a[5], i = a[6], M = a[7], s = a[8], c = s * u - l * M, f = -s * e + l * i, h = M * e - u * i, S = n * c + r * f + o * h;
            return S ? (S = 1 / S, t[0] = c * S, t[1] = (-s * r + o * M) * S, t[2] = (l * r - o * u) * S, 
            t[3] = f * S, t[4] = (s * n - o * i) * S, t[5] = (-l * n + o * e) * S, t[6] = h * S, 
            t[7] = (-M * n + r * i) * S, t[8] = (u * n - r * e) * S, t) : null;
        }, o.adjoint = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = a[4], l = a[5], i = a[6], M = a[7], s = a[8];
            return t[0] = u * s - l * M, t[1] = o * M - r * s, t[2] = r * l - o * u, t[3] = l * i - e * s, 
            t[4] = n * s - o * i, t[5] = o * e - n * l, t[6] = e * M - u * i, t[7] = r * i - n * M, 
            t[8] = n * u - r * e, t;
        }, o.determinant = function(t) {
            var a = t[0], n = t[1], r = t[2], o = t[3], e = t[4], u = t[5], l = t[6], i = t[7], M = t[8];
            return a * (M * e - u * i) + n * (-M * o + u * l) + r * (i * o - e * l);
        }, o.multiply = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = a[6], s = a[7], c = a[8], f = n[0], h = n[1], S = n[2], I = n[3], x = n[4], D = n[5], m = n[6], F = n[7], d = n[8];
            return t[0] = f * r + h * u + S * M, t[1] = f * o + h * l + S * s, t[2] = f * e + h * i + S * c, 
            t[3] = I * r + x * u + D * M, t[4] = I * o + x * l + D * s, t[5] = I * e + x * i + D * c, 
            t[6] = m * r + F * u + d * M, t[7] = m * o + F * l + d * s, t[8] = m * e + F * i + d * c, 
            t;
        }, o.mul = o.multiply, o.translate = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = a[6], s = a[7], c = a[8], f = n[0], h = n[1];
            return t[0] = r, t[1] = o, t[2] = e, t[3] = u, t[4] = l, t[5] = i, t[6] = f * r + h * u + M, 
            t[7] = f * o + h * l + s, t[8] = f * e + h * i + c, t;
        }, o.rotate = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = a[6], s = a[7], c = a[8], f = Math.sin(n), h = Math.cos(n);
            return t[0] = h * r + f * u, t[1] = h * o + f * l, t[2] = h * e + f * i, t[3] = h * u - f * r, 
            t[4] = h * l - f * o, t[5] = h * i - f * e, t[6] = M, t[7] = s, t[8] = c, t;
        }, o.scale = function(t, a, n) {
            var r = n[0], o = n[1];
            return t[0] = r * a[0], t[1] = r * a[1], t[2] = r * a[2], t[3] = o * a[3], t[4] = o * a[4], 
            t[5] = o * a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t;
        }, o.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = a[0], 
            t[7] = a[1], t[8] = 1, t;
        }, o.fromRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, o.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = a[1], t[5] = 0, t[6] = 0, 
            t[7] = 0, t[8] = 1, t;
        }, o.fromMat2d = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = 0, t[3] = a[2], t[4] = a[3], t[5] = 0, t[6] = a[4], 
            t[7] = a[5], t[8] = 1, t;
        }, o.fromQuat = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = n + n, l = r + r, i = o + o, M = n * u, s = r * u, c = r * l, f = o * u, h = o * l, S = o * i, I = e * u, x = e * l, D = e * i;
            return t[0] = 1 - c - S, t[3] = s - D, t[6] = f + x, t[1] = s + D, t[4] = 1 - M - S, 
            t[7] = h - I, t[2] = f - x, t[5] = h + I, t[8] = 1 - M - c, t;
        }, o.normalFromMat4 = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = a[4], l = a[5], i = a[6], M = a[7], s = a[8], c = a[9], f = a[10], h = a[11], S = a[12], I = a[13], x = a[14], D = a[15], m = n * l - r * u, F = n * i - o * u, d = n * M - e * u, v = r * i - o * l, b = r * M - e * l, p = o * M - e * i, E = s * I - c * S, w = s * x - f * S, A = s * D - h * S, z = c * x - f * I, P = c * D - h * I, L = f * D - h * x, R = m * L - F * P + d * z + v * A - b * w + p * E;
            return R ? (R = 1 / R, t[0] = (l * L - i * P + M * z) * R, t[1] = (i * A - u * L - M * w) * R, 
            t[2] = (u * P - l * A + M * E) * R, t[3] = (o * P - r * L - e * z) * R, t[4] = (n * L - o * A + e * w) * R, 
            t[5] = (r * A - n * P - e * E) * R, t[6] = (I * p - x * b + D * v) * R, t[7] = (x * d - S * p - D * F) * R, 
            t[8] = (S * b - I * d + D * m) * R, t) : null;
        }, o.str = function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
        }, o.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
        }, o.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t[4] = a[4] + n[4], t[5] = a[5] + n[5], t[6] = a[6] + n[6], t[7] = a[7] + n[7], 
            t[8] = a[8] + n[8], t;
        }, o.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t[4] = a[4] - n[4], t[5] = a[5] - n[5], t[6] = a[6] - n[6], t[7] = a[7] - n[7], 
            t[8] = a[8] - n[8], t;
        }, o.sub = o.subtract, o.multiplyScalar = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, 
            t[5] = a[5] * n, t[6] = a[6] * n, t[7] = a[7] * n, t[8] = a[8] * n, t;
        }, o.multiplyScalarAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t[6] = a[6] + n[6] * r, t[7] = a[7] + n[7] * r, 
            t[8] = a[8] + n[8] * r, t;
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8];
        }, o.equals = function(t, a) {
            var n = t[0], o = t[1], e = t[2], u = t[3], l = t[4], i = t[5], M = t[6], s = t[7], c = t[8], f = a[0], h = a[1], S = a[2], I = a[3], x = a[4], D = a[5], m = t[6], F = a[7], d = a[8];
            return Math.abs(n - f) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(o - h) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(e - S) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(S)) && Math.abs(u - I) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(I)) && Math.abs(l - x) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) && Math.abs(i - D) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(D)) && Math.abs(M - m) <= r.EPSILON * Math.max(1, Math.abs(M), Math.abs(m)) && Math.abs(s - F) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(F)) && Math.abs(c - d) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(d));
        }, t.exports = o;
    }, function(t, a, n) {
        var r = n(7), o = {
            scalar: {},
            SIMD: {}
        };
        o.create = function() {
            var t = new r.ARRAY_TYPE(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.clone = function(t) {
            var a = new r.ARRAY_TYPE(16);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a[6] = t[6], a[7] = t[7], a[8] = t[8], a[9] = t[9], a[10] = t[10], a[11] = t[11], 
            a[12] = t[12], a[13] = t[13], a[14] = t[14], a[15] = t[15], a;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], 
            t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
        }, o.fromValues = function(t, a, n, o, e, u, l, i, M, s, c, f, h, S, I, x) {
            var D = new r.ARRAY_TYPE(16);
            return D[0] = t, D[1] = a, D[2] = n, D[3] = o, D[4] = e, D[5] = u, D[6] = l, D[7] = i, 
            D[8] = M, D[9] = s, D[10] = c, D[11] = f, D[12] = h, D[13] = S, D[14] = I, D[15] = x, 
            D;
        }, o.set = function(t, a, n, r, o, e, u, l, i, M, s, c, f, h, S, I, x) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t[4] = e, t[5] = u, t[6] = l, t[7] = i, 
            t[8] = M, t[9] = s, t[10] = c, t[11] = f, t[12] = h, t[13] = S, t[14] = I, t[15] = x, 
            t;
        }, o.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.scalar.transpose = function(t, a) {
            if (t === a) {
                var n = a[1], r = a[2], o = a[3], e = a[6], u = a[7], l = a[11];
                t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = n, t[6] = a[9], t[7] = a[13], t[8] = r, 
                t[9] = e, t[11] = a[14], t[12] = o, t[13] = u, t[14] = l;
            } else t[0] = a[0], t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = a[1], t[5] = a[5], 
            t[6] = a[9], t[7] = a[13], t[8] = a[2], t[9] = a[6], t[10] = a[10], t[11] = a[14], 
            t[12] = a[3], t[13] = a[7], t[14] = a[11], t[15] = a[15];
            return t;
        }, o.SIMD.transpose = function(t, a) {
            var n, r, o, e, u, l, i, M, s, c;
            return n = SIMD.Float32x4.load(a, 0), r = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), 
            e = SIMD.Float32x4.load(a, 12), u = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), l = SIMD.Float32x4.shuffle(o, e, 0, 1, 4, 5), 
            i = SIMD.Float32x4.shuffle(u, l, 0, 2, 4, 6), M = SIMD.Float32x4.shuffle(u, l, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, i), SIMD.Float32x4.store(t, 4, M), u = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), 
            l = SIMD.Float32x4.shuffle(o, e, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(u, l, 0, 2, 4, 6), 
            c = SIMD.Float32x4.shuffle(u, l, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, s), SIMD.Float32x4.store(t, 12, c), 
            t;
        }, o.transpose = r.USE_SIMD ? o.SIMD.transpose : o.scalar.transpose, o.scalar.invert = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = a[4], l = a[5], i = a[6], M = a[7], s = a[8], c = a[9], f = a[10], h = a[11], S = a[12], I = a[13], x = a[14], D = a[15], m = n * l - r * u, F = n * i - o * u, d = n * M - e * u, v = r * i - o * l, b = r * M - e * l, p = o * M - e * i, E = s * I - c * S, w = s * x - f * S, A = s * D - h * S, z = c * x - f * I, P = c * D - h * I, L = f * D - h * x, R = m * L - F * P + d * z + v * A - b * w + p * E;
            return R ? (R = 1 / R, t[0] = (l * L - i * P + M * z) * R, t[1] = (o * P - r * L - e * z) * R, 
            t[2] = (I * p - x * b + D * v) * R, t[3] = (f * b - c * p - h * v) * R, t[4] = (i * A - u * L - M * w) * R, 
            t[5] = (n * L - o * A + e * w) * R, t[6] = (x * d - S * p - D * F) * R, t[7] = (s * p - f * d + h * F) * R, 
            t[8] = (u * P - l * A + M * E) * R, t[9] = (r * A - n * P - e * E) * R, t[10] = (S * b - I * d + D * m) * R, 
            t[11] = (c * d - s * b - h * m) * R, t[12] = (l * w - u * z - i * E) * R, t[13] = (n * z - r * w + o * E) * R, 
            t[14] = (I * F - S * v - x * m) * R, t[15] = (s * v - c * F + f * m) * R, t) : null;
        }, o.SIMD.invert = function(t, a) {
            var n, r, o, e, u, l, i, M, s, c, f = SIMD.Float32x4.load(a, 0), h = SIMD.Float32x4.load(a, 4), S = SIMD.Float32x4.load(a, 8), I = SIMD.Float32x4.load(a, 12);
            return u = SIMD.Float32x4.shuffle(f, h, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(S, I, 0, 1, 4, 5), 
            n = SIMD.Float32x4.shuffle(u, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(f, h, 2, 3, 6, 7), e = SIMD.Float32x4.shuffle(S, I, 2, 3, 6, 7), 
            o = SIMD.Float32x4.shuffle(u, e, 0, 2, 4, 6), e = SIMD.Float32x4.shuffle(e, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(o, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.mul(r, u), 
            i = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), l), 
            i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), i), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(r, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), l), 
            s = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(e, u)), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), l), 
            M = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, u)), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(n, r), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), M), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), M), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, u)), 
            u = SIMD.Float32x4.mul(n, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), 
            M = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, u), M), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            i = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), i), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(r, u)), 
            u = SIMD.Float32x4.mul(n, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), i), 
            s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(r, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(e, u)), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, u), s), 
            c = SIMD.Float32x4.mul(n, l), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c), 
            c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c), u = SIMD.Float32x4.reciprocalApproximation(c), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(u, u))), 
            (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, l)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, i)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, M)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, s)), t) : null;
        }, o.invert = r.USE_SIMD ? o.SIMD.invert : o.scalar.invert, o.scalar.adjoint = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = a[4], l = a[5], i = a[6], M = a[7], s = a[8], c = a[9], f = a[10], h = a[11], S = a[12], I = a[13], x = a[14], D = a[15];
            return t[0] = l * (f * D - h * x) - c * (i * D - M * x) + I * (i * h - M * f), t[1] = -(r * (f * D - h * x) - c * (o * D - e * x) + I * (o * h - e * f)), 
            t[2] = r * (i * D - M * x) - l * (o * D - e * x) + I * (o * M - e * i), t[3] = -(r * (i * h - M * f) - l * (o * h - e * f) + c * (o * M - e * i)), 
            t[4] = -(u * (f * D - h * x) - s * (i * D - M * x) + S * (i * h - M * f)), t[5] = n * (f * D - h * x) - s * (o * D - e * x) + S * (o * h - e * f), 
            t[6] = -(n * (i * D - M * x) - u * (o * D - e * x) + S * (o * M - e * i)), t[7] = n * (i * h - M * f) - u * (o * h - e * f) + s * (o * M - e * i), 
            t[8] = u * (c * D - h * I) - s * (l * D - M * I) + S * (l * h - M * c), t[9] = -(n * (c * D - h * I) - s * (r * D - e * I) + S * (r * h - e * c)), 
            t[10] = n * (l * D - M * I) - u * (r * D - e * I) + S * (r * M - e * l), t[11] = -(n * (l * h - M * c) - u * (r * h - e * c) + s * (r * M - e * l)), 
            t[12] = -(u * (c * x - f * I) - s * (l * x - i * I) + S * (l * f - i * c)), t[13] = n * (c * x - f * I) - s * (r * x - o * I) + S * (r * f - o * c), 
            t[14] = -(n * (l * x - i * I) - u * (r * x - o * I) + S * (r * i - o * l)), t[15] = n * (l * f - i * c) - u * (r * f - o * c) + s * (r * i - o * l), 
            t;
        }, o.SIMD.adjoint = function(t, a) {
            var n, r, o, e, u, l, i, M, s, c, f, h, S, n = SIMD.Float32x4.load(a, 0), r = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), e = SIMD.Float32x4.load(a, 12);
            return s = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), l = SIMD.Float32x4.shuffle(o, e, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(s, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, s, 1, 3, 5, 7), 
            s = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), M = SIMD.Float32x4.shuffle(o, e, 2, 3, 6, 7), 
            i = SIMD.Float32x4.shuffle(s, M, 0, 2, 4, 6), M = SIMD.Float32x4.shuffle(M, s, 1, 3, 5, 7), 
            s = SIMD.Float32x4.mul(i, M), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), c = SIMD.Float32x4.mul(l, s), 
            f = SIMD.Float32x4.mul(u, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, s), c), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, s), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), 
            s = SIMD.Float32x4.mul(l, i), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(M, s), c), 
            S = SIMD.Float32x4.mul(u, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(M, s)), 
            S = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, s), S), S = SIMD.Float32x4.swizzle(S, 2, 3, 0, 1), 
            s = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), M), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), 
            i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, s), c), 
            h = SIMD.Float32x4.mul(u, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(i, s)), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, s), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), 
            s = SIMD.Float32x4.mul(u, l), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(M, s), h), 
            S = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, s), S), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(M, s), h), S = SIMD.Float32x4.sub(S, SIMD.Float32x4.mul(i, s)), 
            s = SIMD.Float32x4.mul(u, M), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(i, s)), 
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, s), h), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            f = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, s), f), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(l, s)), 
            s = SIMD.Float32x4.mul(u, i), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(M, s), f), 
            S = SIMD.Float32x4.sub(S, SIMD.Float32x4.mul(l, s)), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(M, s)), S = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, s), S), 
            SIMD.Float32x4.store(t, 0, c), SIMD.Float32x4.store(t, 4, f), SIMD.Float32x4.store(t, 8, h), 
            SIMD.Float32x4.store(t, 12, S), t;
        }, o.adjoint = r.USE_SIMD ? o.SIMD.adjoint : o.scalar.adjoint, o.determinant = function(t) {
            var a = t[0], n = t[1], r = t[2], o = t[3], e = t[4], u = t[5], l = t[6], i = t[7], M = t[8], s = t[9], c = t[10], f = t[11], h = t[12], S = t[13], I = t[14], x = t[15], D = a * u - n * e, m = a * l - r * e, F = a * i - o * e, d = n * l - r * u, v = n * i - o * u, b = r * i - o * l, p = M * S - s * h, E = M * I - c * h, w = M * x - f * h, A = s * I - c * S, z = s * x - f * S, P = c * x - f * I;
            return D * P - m * z + F * A + d * w - v * E + b * p;
        }, o.SIMD.multiply = function(t, a, n) {
            var r = SIMD.Float32x4.load(a, 0), o = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), l = SIMD.Float32x4.load(n, 0), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), e), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, i);
            var M = SIMD.Float32x4.load(n, 4), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 2, 2, 2, 2), e), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, s);
            var c = SIMD.Float32x4.load(n, 8), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), e), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, f);
            var h = SIMD.Float32x4.load(n, 12), S = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), e), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, S), t;
        }, o.scalar.multiply = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = a[6], s = a[7], c = a[8], f = a[9], h = a[10], S = a[11], I = a[12], x = a[13], D = a[14], m = a[15], F = n[0], d = n[1], v = n[2], b = n[3];
            return t[0] = F * r + d * l + v * c + b * I, t[1] = F * o + d * i + v * f + b * x, 
            t[2] = F * e + d * M + v * h + b * D, t[3] = F * u + d * s + v * S + b * m, F = n[4], 
            d = n[5], v = n[6], b = n[7], t[4] = F * r + d * l + v * c + b * I, t[5] = F * o + d * i + v * f + b * x, 
            t[6] = F * e + d * M + v * h + b * D, t[7] = F * u + d * s + v * S + b * m, F = n[8], 
            d = n[9], v = n[10], b = n[11], t[8] = F * r + d * l + v * c + b * I, t[9] = F * o + d * i + v * f + b * x, 
            t[10] = F * e + d * M + v * h + b * D, t[11] = F * u + d * s + v * S + b * m, F = n[12], 
            d = n[13], v = n[14], b = n[15], t[12] = F * r + d * l + v * c + b * I, t[13] = F * o + d * i + v * f + b * x, 
            t[14] = F * e + d * M + v * h + b * D, t[15] = F * u + d * s + v * S + b * m, t;
        }, o.multiply = r.USE_SIMD ? o.SIMD.multiply : o.scalar.multiply, o.mul = o.multiply, 
        o.scalar.translate = function(t, a, n) {
            var r, o, e, u, l, i, M, s, c, f, h, S, I = n[0], x = n[1], D = n[2];
            return a === t ? (t[12] = a[0] * I + a[4] * x + a[8] * D + a[12], t[13] = a[1] * I + a[5] * x + a[9] * D + a[13], 
            t[14] = a[2] * I + a[6] * x + a[10] * D + a[14], t[15] = a[3] * I + a[7] * x + a[11] * D + a[15]) : (r = a[0], 
            o = a[1], e = a[2], u = a[3], l = a[4], i = a[5], M = a[6], s = a[7], c = a[8], 
            f = a[9], h = a[10], S = a[11], t[0] = r, t[1] = o, t[2] = e, t[3] = u, t[4] = l, 
            t[5] = i, t[6] = M, t[7] = s, t[8] = c, t[9] = f, t[10] = h, t[11] = S, t[12] = r * I + l * x + c * D + a[12], 
            t[13] = o * I + i * x + f * D + a[13], t[14] = e * I + M * x + h * D + a[14], t[15] = u * I + s * x + S * D + a[15]), 
            t;
        }, o.SIMD.translate = function(t, a, n) {
            var r = SIMD.Float32x4.load(a, 0), o = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), l = SIMD.Float32x4(n[0], n[1], n[2], 0);
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11]), 
            r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(l, 0, 0, 0, 0)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(l, 1, 1, 1, 1)), 
            e = SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(l, 2, 2, 2, 2));
            var i = SIMD.Float32x4.add(r, SIMD.Float32x4.add(o, SIMD.Float32x4.add(e, u)));
            return SIMD.Float32x4.store(t, 12, i), t;
        }, o.translate = r.USE_SIMD ? o.SIMD.translate : o.scalar.translate, o.scalar.scale = function(t, a, n) {
            var r = n[0], o = n[1], e = n[2];
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * o, 
            t[5] = a[5] * o, t[6] = a[6] * o, t[7] = a[7] * o, t[8] = a[8] * e, t[9] = a[9] * e, 
            t[10] = a[10] * e, t[11] = a[11] * e, t[12] = a[12], t[13] = a[13], t[14] = a[14], 
            t[15] = a[15], t;
        }, o.SIMD.scale = function(t, a, n) {
            var r, o, e, u = SIMD.Float32x4(n[0], n[1], n[2], 0);
            return r = SIMD.Float32x4.load(a, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0))), 
            o = SIMD.Float32x4.load(a, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1))), 
            e = SIMD.Float32x4.load(a, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2))), 
            t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
        }, o.scale = r.USE_SIMD ? o.SIMD.scale : o.scalar.scale, o.rotate = function(t, a, n, o) {
            var e, u, l, i, M, s, c, f, h, S, I, x, D, m, F, d, v, b, p, E, w, A, z, P, L = o[0], R = o[1], O = o[2], N = Math.sqrt(L * L + R * R + O * O);
            return Math.abs(N) < r.EPSILON ? null : (N = 1 / N, L *= N, R *= N, O *= N, e = Math.sin(n), 
            u = Math.cos(n), l = 1 - u, i = a[0], M = a[1], s = a[2], c = a[3], f = a[4], h = a[5], 
            S = a[6], I = a[7], x = a[8], D = a[9], m = a[10], F = a[11], d = L * L * l + u, 
            v = R * L * l + O * e, b = O * L * l - R * e, p = L * R * l - O * e, E = R * R * l + u, 
            w = O * R * l + L * e, A = L * O * l + R * e, z = R * O * l - L * e, P = O * O * l + u, 
            t[0] = i * d + f * v + x * b, t[1] = M * d + h * v + D * b, t[2] = s * d + S * v + m * b, 
            t[3] = c * d + I * v + F * b, t[4] = i * p + f * E + x * w, t[5] = M * p + h * E + D * w, 
            t[6] = s * p + S * E + m * w, t[7] = c * p + I * E + F * w, t[8] = i * A + f * z + x * P, 
            t[9] = M * A + h * z + D * P, t[10] = s * A + S * z + m * P, t[11] = c * A + I * z + F * P, 
            a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t);
        }, o.scalar.rotateX = function(t, a, n) {
            var r = Math.sin(n), o = Math.cos(n), e = a[4], u = a[5], l = a[6], i = a[7], M = a[8], s = a[9], c = a[10], f = a[11];
            return a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[4] = e * o + M * r, t[5] = u * o + s * r, 
            t[6] = l * o + c * r, t[7] = i * o + f * r, t[8] = M * o - e * r, t[9] = s * o - u * r, 
            t[10] = c * o - l * r, t[11] = f * o - i * r, t;
        }, o.SIMD.rotateX = function(t, a, n) {
            var r = SIMD.Float32x4.splat(Math.sin(n)), o = SIMD.Float32x4.splat(Math.cos(n));
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var e = SIMD.Float32x4.load(a, 4), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(e, o), SIMD.Float32x4.mul(u, r))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, o), SIMD.Float32x4.mul(e, r))), 
            t;
        }, o.rotateX = r.USE_SIMD ? o.SIMD.rotateX : o.scalar.rotateX, o.scalar.rotateY = function(t, a, n) {
            var r = Math.sin(n), o = Math.cos(n), e = a[0], u = a[1], l = a[2], i = a[3], M = a[8], s = a[9], c = a[10], f = a[11];
            return a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = e * o - M * r, t[1] = u * o - s * r, 
            t[2] = l * o - c * r, t[3] = i * o - f * r, t[8] = e * r + M * o, t[9] = u * r + s * o, 
            t[10] = l * r + c * o, t[11] = i * r + f * o, t;
        }, o.SIMD.rotateY = function(t, a, n) {
            var r = SIMD.Float32x4.splat(Math.sin(n)), o = SIMD.Float32x4.splat(Math.cos(n));
            a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var e = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, o), SIMD.Float32x4.mul(u, r))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(e, r), SIMD.Float32x4.mul(u, o))), 
            t;
        }, o.rotateY = r.USE_SIMD ? o.SIMD.rotateY : o.scalar.rotateY, o.scalar.rotateZ = function(t, a, n) {
            var r = Math.sin(n), o = Math.cos(n), e = a[0], u = a[1], l = a[2], i = a[3], M = a[4], s = a[5], c = a[6], f = a[7];
            return a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = e * o + M * r, t[1] = u * o + s * r, 
            t[2] = l * o + c * r, t[3] = i * o + f * r, t[4] = M * o - e * r, t[5] = s * o - u * r, 
            t[6] = c * o - l * r, t[7] = f * o - i * r, t;
        }, o.SIMD.rotateZ = function(t, a, n) {
            var r = SIMD.Float32x4.splat(Math.sin(n)), o = SIMD.Float32x4.splat(Math.cos(n));
            a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]);
            var e = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 4);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(e, o), SIMD.Float32x4.mul(u, r))), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, o), SIMD.Float32x4.mul(e, r))), 
            t;
        }, o.rotateZ = r.USE_SIMD ? o.SIMD.rotateZ : o.scalar.rotateZ, o.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], 
            t[15] = 1, t;
        }, o.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a[1], t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = a[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, 
            t[15] = 1, t;
        }, o.fromRotation = function(t, a, n) {
            var o, e, u, l = n[0], i = n[1], M = n[2], s = Math.sqrt(l * l + i * i + M * M);
            return Math.abs(s) < r.EPSILON ? null : (s = 1 / s, l *= s, i *= s, M *= s, o = Math.sin(a), 
            e = Math.cos(a), u = 1 - e, t[0] = l * l * u + e, t[1] = i * l * u + M * o, t[2] = M * l * u - i * o, 
            t[3] = 0, t[4] = l * i * u - M * o, t[5] = i * i * u + e, t[6] = M * i * u + l * o, 
            t[7] = 0, t[8] = l * M * u + i * o, t[9] = i * M * u - l * o, t[10] = M * M * u + e, 
            t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
        }, o.fromXRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = n, t[7] = 0, 
            t[8] = 0, t[9] = -n, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.fromYRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = 0, t[2] = -n, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = n, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.fromZRotation = function(t, a) {
            var n = Math.sin(a), r = Math.cos(a);
            return t[0] = r, t[1] = n, t[2] = 0, t[3] = 0, t[4] = -n, t[5] = r, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.fromRotationTranslation = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = r + r, i = o + o, M = e + e, s = r * l, c = r * i, f = r * M, h = o * i, S = o * M, I = e * M, x = u * l, D = u * i, m = u * M;
            return t[0] = 1 - (h + I), t[1] = c + m, t[2] = f - D, t[3] = 0, t[4] = c - m, t[5] = 1 - (s + I), 
            t[6] = S + x, t[7] = 0, t[8] = f + D, t[9] = S - x, t[10] = 1 - (s + h), t[11] = 0, 
            t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
        }, o.getTranslation = function(t, a) {
            return t[0] = a[12], t[1] = a[13], t[2] = a[14], t;
        }, o.getRotation = function(t, a) {
            var n = a[0] + a[5] + a[10], r = 0;
            return n > 0 ? (r = 2 * Math.sqrt(n + 1), t[3] = .25 * r, t[0] = (a[6] - a[9]) / r, 
            t[1] = (a[8] - a[2]) / r, t[2] = (a[1] - a[4]) / r) : a[0] > a[5] & a[0] > a[10] ? (r = 2 * Math.sqrt(1 + a[0] - a[5] - a[10]), 
            t[3] = (a[6] - a[9]) / r, t[0] = .25 * r, t[1] = (a[1] + a[4]) / r, t[2] = (a[8] + a[2]) / r) : a[5] > a[10] ? (r = 2 * Math.sqrt(1 + a[5] - a[0] - a[10]), 
            t[3] = (a[8] - a[2]) / r, t[0] = (a[1] + a[4]) / r, t[1] = .25 * r, t[2] = (a[6] + a[9]) / r) : (r = 2 * Math.sqrt(1 + a[10] - a[0] - a[5]), 
            t[3] = (a[1] - a[4]) / r, t[0] = (a[8] + a[2]) / r, t[1] = (a[6] + a[9]) / r, t[2] = .25 * r), 
            t;
        }, o.fromRotationTranslationScale = function(t, a, n, r) {
            var o = a[0], e = a[1], u = a[2], l = a[3], i = o + o, M = e + e, s = u + u, c = o * i, f = o * M, h = o * s, S = e * M, I = e * s, x = u * s, D = l * i, m = l * M, F = l * s, d = r[0], v = r[1], b = r[2];
            return t[0] = (1 - (S + x)) * d, t[1] = (f + F) * d, t[2] = (h - m) * d, t[3] = 0, 
            t[4] = (f - F) * v, t[5] = (1 - (c + x)) * v, t[6] = (I + D) * v, t[7] = 0, t[8] = (h + m) * b, 
            t[9] = (I - D) * b, t[10] = (1 - (c + S)) * b, t[11] = 0, t[12] = n[0], t[13] = n[1], 
            t[14] = n[2], t[15] = 1, t;
        }, o.fromRotationTranslationScaleOrigin = function(t, a, n, r, o) {
            var e = a[0], u = a[1], l = a[2], i = a[3], M = e + e, s = u + u, c = l + l, f = e * M, h = e * s, S = e * c, I = u * s, x = u * c, D = l * c, m = i * M, F = i * s, d = i * c, v = r[0], b = r[1], p = r[2], E = o[0], w = o[1], A = o[2];
            return t[0] = (1 - (I + D)) * v, t[1] = (h + d) * v, t[2] = (S - F) * v, t[3] = 0, 
            t[4] = (h - d) * b, t[5] = (1 - (f + D)) * b, t[6] = (x + m) * b, t[7] = 0, t[8] = (S + F) * p, 
            t[9] = (x - m) * p, t[10] = (1 - (f + I)) * p, t[11] = 0, t[12] = n[0] + E - (t[0] * E + t[4] * w + t[8] * A), 
            t[13] = n[1] + w - (t[1] * E + t[5] * w + t[9] * A), t[14] = n[2] + A - (t[2] * E + t[6] * w + t[10] * A), 
            t[15] = 1, t;
        }, o.fromQuat = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = n + n, l = r + r, i = o + o, M = n * u, s = r * u, c = r * l, f = o * u, h = o * l, S = o * i, I = e * u, x = e * l, D = e * i;
            return t[0] = 1 - c - S, t[1] = s + D, t[2] = f - x, t[3] = 0, t[4] = s - D, t[5] = 1 - M - S, 
            t[6] = h + I, t[7] = 0, t[8] = f + x, t[9] = h - I, t[10] = 1 - M - c, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, o.frustum = function(t, a, n, r, o, e, u) {
            var l = 1 / (n - a), i = 1 / (o - r), M = 1 / (e - u);
            return t[0] = 2 * e * l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * i, 
            t[6] = 0, t[7] = 0, t[8] = (n + a) * l, t[9] = (o + r) * i, t[10] = (u + e) * M, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * e * 2 * M, t[15] = 0, t;
        }, o.perspective = function(t, a, n, r, o) {
            var e = 1 / Math.tan(a / 2), u = 1 / (r - o);
            return t[0] = e / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (o + r) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * o * r * u, t[15] = 0, t;
        }, o.perspectiveFromFieldOfView = function(t, a, n, r) {
            var o = Math.tan(a.upDegrees * Math.PI / 180), e = Math.tan(a.downDegrees * Math.PI / 180), u = Math.tan(a.leftDegrees * Math.PI / 180), l = Math.tan(a.rightDegrees * Math.PI / 180), i = 2 / (u + l), M = 2 / (o + e);
            return t[0] = i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = M, t[6] = 0, t[7] = 0, 
            t[8] = -((u - l) * i * .5), t[9] = (o - e) * M * .5, t[10] = r / (n - r), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = r * n / (n - r), t[15] = 0, t;
        }, o.ortho = function(t, a, n, r, o, e, u) {
            var l = 1 / (a - n), i = 1 / (r - o), M = 1 / (e - u);
            return t[0] = -2 * l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * i, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * M, t[11] = 0, t[12] = (a + n) * l, t[13] = (o + r) * i, 
            t[14] = (u + e) * M, t[15] = 1, t;
        }, o.lookAt = function(t, a, n, e) {
            var u, l, i, M, s, c, f, h, S, I, x = a[0], D = a[1], m = a[2], F = e[0], d = e[1], v = e[2], b = n[0], p = n[1], E = n[2];
            return Math.abs(x - b) < r.EPSILON && Math.abs(D - p) < r.EPSILON && Math.abs(m - E) < r.EPSILON ? o.identity(t) : (f = x - b, 
            h = D - p, S = m - E, I = 1 / Math.sqrt(f * f + h * h + S * S), f *= I, h *= I, 
            S *= I, u = d * S - v * h, l = v * f - F * S, i = F * h - d * f, I = Math.sqrt(u * u + l * l + i * i), 
            I ? (I = 1 / I, u *= I, l *= I, i *= I) : (u = 0, l = 0, i = 0), M = h * i - S * l, 
            s = S * u - f * i, c = f * l - h * u, I = Math.sqrt(M * M + s * s + c * c), I ? (I = 1 / I, 
            M *= I, s *= I, c *= I) : (M = 0, s = 0, c = 0), t[0] = u, t[1] = M, t[2] = f, t[3] = 0, 
            t[4] = l, t[5] = s, t[6] = h, t[7] = 0, t[8] = i, t[9] = c, t[10] = S, t[11] = 0, 
            t[12] = -(u * x + l * D + i * m), t[13] = -(M * x + s * D + c * m), t[14] = -(f * x + h * D + S * m), 
            t[15] = 1, t);
        }, o.str = function(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
        }, o.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
        }, o.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t[4] = a[4] + n[4], t[5] = a[5] + n[5], t[6] = a[6] + n[6], t[7] = a[7] + n[7], 
            t[8] = a[8] + n[8], t[9] = a[9] + n[9], t[10] = a[10] + n[10], t[11] = a[11] + n[11], 
            t[12] = a[12] + n[12], t[13] = a[13] + n[13], t[14] = a[14] + n[14], t[15] = a[15] + n[15], 
            t;
        }, o.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t[4] = a[4] - n[4], t[5] = a[5] - n[5], t[6] = a[6] - n[6], t[7] = a[7] - n[7], 
            t[8] = a[8] - n[8], t[9] = a[9] - n[9], t[10] = a[10] - n[10], t[11] = a[11] - n[11], 
            t[12] = a[12] - n[12], t[13] = a[13] - n[13], t[14] = a[14] - n[14], t[15] = a[15] - n[15], 
            t;
        }, o.sub = o.subtract, o.multiplyScalar = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, 
            t[5] = a[5] * n, t[6] = a[6] * n, t[7] = a[7] * n, t[8] = a[8] * n, t[9] = a[9] * n, 
            t[10] = a[10] * n, t[11] = a[11] * n, t[12] = a[12] * n, t[13] = a[13] * n, t[14] = a[14] * n, 
            t[15] = a[15] * n, t;
        }, o.multiplyScalarAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t[6] = a[6] + n[6] * r, t[7] = a[7] + n[7] * r, 
            t[8] = a[8] + n[8] * r, t[9] = a[9] + n[9] * r, t[10] = a[10] + n[10] * r, t[11] = a[11] + n[11] * r, 
            t[12] = a[12] + n[12] * r, t[13] = a[13] + n[13] * r, t[14] = a[14] + n[14] * r, 
            t[15] = a[15] + n[15] * r, t;
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8] && t[9] === a[9] && t[10] === a[10] && t[11] === a[11] && t[12] === a[12] && t[13] === a[13] && t[14] === a[14] && t[15] === a[15];
        }, o.equals = function(t, a) {
            var n = t[0], o = t[1], e = t[2], u = t[3], l = t[4], i = t[5], M = t[6], s = t[7], c = t[8], f = t[9], h = t[10], S = t[11], I = t[12], x = t[13], D = t[14], m = t[15], F = a[0], d = a[1], v = a[2], b = a[3], p = a[4], E = a[5], w = a[6], A = a[7], z = a[8], P = a[9], L = a[10], R = a[11], O = a[12], N = a[13], y = a[14], q = a[15];
            return Math.abs(n - F) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(F)) && Math.abs(o - d) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(e - v) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(u - b) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(b)) && Math.abs(l - p) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(p)) && Math.abs(i - E) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(E)) && Math.abs(M - w) <= r.EPSILON * Math.max(1, Math.abs(M), Math.abs(w)) && Math.abs(s - A) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(A)) && Math.abs(c - z) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(z)) && Math.abs(f - P) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) && Math.abs(h - L) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(L)) && Math.abs(S - R) <= r.EPSILON * Math.max(1, Math.abs(S), Math.abs(R)) && Math.abs(I - O) <= r.EPSILON * Math.max(1, Math.abs(I), Math.abs(O)) && Math.abs(x - N) <= r.EPSILON * Math.max(1, Math.abs(x), Math.abs(N)) && Math.abs(D - y) <= r.EPSILON * Math.max(1, Math.abs(D), Math.abs(y)) && Math.abs(m - q) <= r.EPSILON * Math.max(1, Math.abs(m), Math.abs(q));
        }, t.exports = o;
    }, function(t, a, n) {
        var r = n(7), o = n(10), e = n(13), u = n(14), l = {};
        l.create = function() {
            var t = new r.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, l.rotationTo = function() {
            var t = e.create(), a = e.fromValues(1, 0, 0), n = e.fromValues(0, 1, 0);
            return function(r, o, u) {
                var i = e.dot(o, u);
                return i < -.999999 ? (e.cross(t, a, o), e.length(t) < 1e-6 && e.cross(t, n, o), 
                e.normalize(t, t), l.setAxisAngle(r, t, Math.PI), r) : i > .999999 ? (r[0] = 0, 
                r[1] = 0, r[2] = 0, r[3] = 1, r) : (e.cross(t, o, u), r[0] = t[0], r[1] = t[1], 
                r[2] = t[2], r[3] = 1 + i, l.normalize(r, r));
            };
        }(), l.setAxes = function() {
            var t = o.create();
            return function(a, n, r, o) {
                return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = o[0], t[4] = o[1], t[7] = o[2], 
                t[2] = -n[0], t[5] = -n[1], t[8] = -n[2], l.normalize(a, l.fromMat3(a, t));
            };
        }(), l.clone = u.clone, l.fromValues = u.fromValues, l.copy = u.copy, l.set = u.set, 
        l.identity = function(t) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, l.setAxisAngle = function(t, a, n) {
            n = .5 * n;
            var r = Math.sin(n);
            return t[0] = r * a[0], t[1] = r * a[1], t[2] = r * a[2], t[3] = Math.cos(n), t;
        }, l.getAxisAngle = function(t, a) {
            var n = 2 * Math.acos(a[3]), r = Math.sin(n / 2);
            return 0 != r ? (t[0] = a[0] / r, t[1] = a[1] / r, t[2] = a[2] / r) : (t[0] = 1, 
            t[1] = 0, t[2] = 0), n;
        }, l.add = u.add, l.multiply = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3], l = n[0], i = n[1], M = n[2], s = n[3];
            return t[0] = r * s + u * l + o * M - e * i, t[1] = o * s + u * i + e * l - r * M, 
            t[2] = e * s + u * M + r * i - o * l, t[3] = u * s - r * l - o * i - e * M, t;
        }, l.mul = l.multiply, l.scale = u.scale, l.rotateX = function(t, a, n) {
            n *= .5;
            var r = a[0], o = a[1], e = a[2], u = a[3], l = Math.sin(n), i = Math.cos(n);
            return t[0] = r * i + u * l, t[1] = o * i + e * l, t[2] = e * i - o * l, t[3] = u * i - r * l, 
            t;
        }, l.rotateY = function(t, a, n) {
            n *= .5;
            var r = a[0], o = a[1], e = a[2], u = a[3], l = Math.sin(n), i = Math.cos(n);
            return t[0] = r * i - e * l, t[1] = o * i + u * l, t[2] = e * i + r * l, t[3] = u * i - o * l, 
            t;
        }, l.rotateZ = function(t, a, n) {
            n *= .5;
            var r = a[0], o = a[1], e = a[2], u = a[3], l = Math.sin(n), i = Math.cos(n);
            return t[0] = r * i + o * l, t[1] = o * i - r * l, t[2] = e * i + u * l, t[3] = u * i - e * l, 
            t;
        }, l.calculateW = function(t, a) {
            var n = a[0], r = a[1], o = a[2];
            return t[0] = n, t[1] = r, t[2] = o, t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - o * o)), 
            t;
        }, l.dot = u.dot, l.lerp = u.lerp, l.slerp = function(t, a, n, r) {
            var o, e, u, l, i, M = a[0], s = a[1], c = a[2], f = a[3], h = n[0], S = n[1], I = n[2], x = n[3];
            return e = M * h + s * S + c * I + f * x, e < 0 && (e = -e, h = -h, S = -S, I = -I, 
            x = -x), 1 - e > 1e-6 ? (o = Math.acos(e), u = Math.sin(o), l = Math.sin((1 - r) * o) / u, 
            i = Math.sin(r * o) / u) : (l = 1 - r, i = r), t[0] = l * M + i * h, t[1] = l * s + i * S, 
            t[2] = l * c + i * I, t[3] = l * f + i * x, t;
        }, l.sqlerp = function() {
            var t = l.create(), a = l.create();
            return function(n, r, o, e, u, i) {
                return l.slerp(t, r, u, i), l.slerp(a, o, e, i), l.slerp(n, t, a, 2 * i * (1 - i)), 
                n;
            };
        }(), l.invert = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = n * n + r * r + o * o + e * e, l = u ? 1 / u : 0;
            return t[0] = -n * l, t[1] = -r * l, t[2] = -o * l, t[3] = e * l, t;
        }, l.conjugate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = a[3], t;
        }, l.length = u.length, l.len = l.length, l.squaredLength = u.squaredLength, l.sqrLen = l.squaredLength, 
        l.normalize = u.normalize, l.fromMat3 = function(t, a) {
            var n, r = a[0] + a[4] + a[8];
            if (r > 0) n = Math.sqrt(r + 1), t[3] = .5 * n, n = .5 / n, t[0] = (a[5] - a[7]) * n, 
            t[1] = (a[6] - a[2]) * n, t[2] = (a[1] - a[3]) * n; else {
                var o = 0;
                a[4] > a[0] && (o = 1), a[8] > a[3 * o + o] && (o = 2);
                var e = (o + 1) % 3, u = (o + 2) % 3;
                n = Math.sqrt(a[3 * o + o] - a[3 * e + e] - a[3 * u + u] + 1), t[o] = .5 * n, n = .5 / n, 
                t[3] = (a[3 * e + u] - a[3 * u + e]) * n, t[e] = (a[3 * e + o] + a[3 * o + e]) * n, 
                t[u] = (a[3 * u + o] + a[3 * o + u]) * n;
            }
            return t;
        }, l.str = function(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, l.exactEquals = u.exactEquals, l.equals = u.equals, t.exports = l;
    }, function(t, a, n) {
        var r = n(7), o = {};
        o.create = function() {
            var t = new r.ARRAY_TYPE(3);
            return t[0] = 0, t[1] = 0, t[2] = 0, t;
        }, o.clone = function(t) {
            var a = new r.ARRAY_TYPE(3);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a;
        }, o.fromValues = function(t, a, n) {
            var o = new r.ARRAY_TYPE(3);
            return o[0] = t, o[1] = a, o[2] = n, o;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t;
        }, o.set = function(t, a, n, r) {
            return t[0] = a, t[1] = n, t[2] = r, t;
        }, o.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t;
        }, o.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t;
        }, o.sub = o.subtract, o.multiply = function(t, a, n) {
            return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t[2] = a[2] * n[2], t;
        }, o.mul = o.multiply, o.divide = function(t, a, n) {
            return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t[2] = a[2] / n[2], t;
        }, o.div = o.divide, o.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t;
        }, o.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), 
            t;
        }, o.min = function(t, a, n) {
            return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t[2] = Math.min(a[2], n[2]), 
            t;
        }, o.max = function(t, a, n) {
            return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t[2] = Math.max(a[2], n[2]), 
            t;
        }, o.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), 
            t;
        }, o.scale = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t;
        }, o.scaleAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t;
        }, o.distance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1], o = a[2] - t[2];
            return Math.sqrt(n * n + r * r + o * o);
        }, o.dist = o.distance, o.squaredDistance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1], o = a[2] - t[2];
            return n * n + r * r + o * o;
        }, o.sqrDist = o.squaredDistance, o.length = function(t) {
            var a = t[0], n = t[1], r = t[2];
            return Math.sqrt(a * a + n * n + r * r);
        }, o.len = o.length, o.squaredLength = function(t) {
            var a = t[0], n = t[1], r = t[2];
            return a * a + n * n + r * r;
        }, o.sqrLen = o.squaredLength, o.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t;
        }, o.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t;
        }, o.normalize = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = n * n + r * r + o * o;
            return e > 0 && (e = 1 / Math.sqrt(e), t[0] = a[0] * e, t[1] = a[1] * e, t[2] = a[2] * e), 
            t;
        }, o.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1] + t[2] * a[2];
        }, o.cross = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = n[0], l = n[1], i = n[2];
            return t[0] = o * i - e * l, t[1] = e * u - r * i, t[2] = r * l - o * u, t;
        }, o.lerp = function(t, a, n, r) {
            var o = a[0], e = a[1], u = a[2];
            return t[0] = o + r * (n[0] - o), t[1] = e + r * (n[1] - e), t[2] = u + r * (n[2] - u), 
            t;
        }, o.hermite = function(t, a, n, r, o, e) {
            var u = e * e, l = u * (2 * e - 3) + 1, i = u * (e - 2) + e, M = u * (e - 1), s = u * (3 - 2 * e);
            return t[0] = a[0] * l + n[0] * i + r[0] * M + o[0] * s, t[1] = a[1] * l + n[1] * i + r[1] * M + o[1] * s, 
            t[2] = a[2] * l + n[2] * i + r[2] * M + o[2] * s, t;
        }, o.bezier = function(t, a, n, r, o, e) {
            var u = 1 - e, l = u * u, i = e * e, M = l * u, s = 3 * e * l, c = 3 * i * u, f = i * e;
            return t[0] = a[0] * M + n[0] * s + r[0] * c + o[0] * f, t[1] = a[1] * M + n[1] * s + r[1] * c + o[1] * f, 
            t[2] = a[2] * M + n[2] * s + r[2] * c + o[2] * f, t;
        }, o.random = function(t, a) {
            a = a || 1;
            var n = 2 * r.RANDOM() * Math.PI, o = 2 * r.RANDOM() - 1, e = Math.sqrt(1 - o * o) * a;
            return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t[2] = o * a, t;
        }, o.transformMat4 = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = n[3] * r + n[7] * o + n[11] * e + n[15];
            return u = u || 1, t[0] = (n[0] * r + n[4] * o + n[8] * e + n[12]) / u, t[1] = (n[1] * r + n[5] * o + n[9] * e + n[13]) / u, 
            t[2] = (n[2] * r + n[6] * o + n[10] * e + n[14]) / u, t;
        }, o.transformMat3 = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2];
            return t[0] = r * n[0] + o * n[3] + e * n[6], t[1] = r * n[1] + o * n[4] + e * n[7], 
            t[2] = r * n[2] + o * n[5] + e * n[8], t;
        }, o.transformQuat = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = n[0], l = n[1], i = n[2], M = n[3], s = M * r + l * e - i * o, c = M * o + i * r - u * e, f = M * e + u * o - l * r, h = -u * r - l * o - i * e;
            return t[0] = s * M + h * -u + c * -i - f * -l, t[1] = c * M + h * -l + f * -u - s * -i, 
            t[2] = f * M + h * -i + s * -l - c * -u, t;
        }, o.rotateX = function(t, a, n, r) {
            var o = [], e = [];
            return o[0] = a[0] - n[0], o[1] = a[1] - n[1], o[2] = a[2] - n[2], e[0] = o[0], 
            e[1] = o[1] * Math.cos(r) - o[2] * Math.sin(r), e[2] = o[1] * Math.sin(r) + o[2] * Math.cos(r), 
            t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t;
        }, o.rotateY = function(t, a, n, r) {
            var o = [], e = [];
            return o[0] = a[0] - n[0], o[1] = a[1] - n[1], o[2] = a[2] - n[2], e[0] = o[2] * Math.sin(r) + o[0] * Math.cos(r), 
            e[1] = o[1], e[2] = o[2] * Math.cos(r) - o[0] * Math.sin(r), t[0] = e[0] + n[0], 
            t[1] = e[1] + n[1], t[2] = e[2] + n[2], t;
        }, o.rotateZ = function(t, a, n, r) {
            var o = [], e = [];
            return o[0] = a[0] - n[0], o[1] = a[1] - n[1], o[2] = a[2] - n[2], e[0] = o[0] * Math.cos(r) - o[1] * Math.sin(r), 
            e[1] = o[0] * Math.sin(r) + o[1] * Math.cos(r), e[2] = o[2], t[0] = e[0] + n[0], 
            t[1] = e[1] + n[1], t[2] = e[2] + n[2], t;
        }, o.forEach = function() {
            var t = o.create();
            return function(a, n, r, o, e, u) {
                var l, i;
                for (n || (n = 3), r || (r = 0), i = o ? Math.min(o * n + r, a.length) : a.length, 
                l = r; l < i; l += n) t[0] = a[l], t[1] = a[l + 1], t[2] = a[l + 2], e(t, t, u), 
                a[l] = t[0], a[l + 1] = t[1], a[l + 2] = t[2];
                return a;
            };
        }(), o.angle = function(t, a) {
            var n = o.fromValues(t[0], t[1], t[2]), r = o.fromValues(a[0], a[1], a[2]);
            o.normalize(n, n), o.normalize(r, r);
            var e = o.dot(n, r);
            return e > 1 ? 0 : Math.acos(e);
        }, o.str = function(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2];
        }, o.equals = function(t, a) {
            var n = t[0], o = t[1], e = t[2], u = a[0], l = a[1], i = a[2];
            return Math.abs(n - u) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(e - i) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(i));
        }, t.exports = o;
    }, function(t, a, n) {
        var r = n(7), o = {};
        o.create = function() {
            var t = new r.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
        }, o.clone = function(t) {
            var a = new r.ARRAY_TYPE(4);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a;
        }, o.fromValues = function(t, a, n, o) {
            var e = new r.ARRAY_TYPE(4);
            return e[0] = t, e[1] = a, e[2] = n, e[3] = o, e;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t;
        }, o.set = function(t, a, n, r, o) {
            return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t;
        }, o.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], 
            t;
        }, o.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], 
            t;
        }, o.sub = o.subtract, o.multiply = function(t, a, n) {
            return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t[2] = a[2] * n[2], t[3] = a[3] * n[3], 
            t;
        }, o.mul = o.multiply, o.divide = function(t, a, n) {
            return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t[2] = a[2] / n[2], t[3] = a[3] / n[3], 
            t;
        }, o.div = o.divide, o.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t[3] = Math.ceil(a[3]), 
            t;
        }, o.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), 
            t[3] = Math.floor(a[3]), t;
        }, o.min = function(t, a, n) {
            return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t[2] = Math.min(a[2], n[2]), 
            t[3] = Math.min(a[3], n[3]), t;
        }, o.max = function(t, a, n) {
            return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t[2] = Math.max(a[2], n[2]), 
            t[3] = Math.max(a[3], n[3]), t;
        }, o.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), 
            t[3] = Math.round(a[3]), t;
        }, o.scale = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t;
        }, o.scaleAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, 
            t;
        }, o.distance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1], o = a[2] - t[2], e = a[3] - t[3];
            return Math.sqrt(n * n + r * r + o * o + e * e);
        }, o.dist = o.distance, o.squaredDistance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1], o = a[2] - t[2], e = a[3] - t[3];
            return n * n + r * r + o * o + e * e;
        }, o.sqrDist = o.squaredDistance, o.length = function(t) {
            var a = t[0], n = t[1], r = t[2], o = t[3];
            return Math.sqrt(a * a + n * n + r * r + o * o);
        }, o.len = o.length, o.squaredLength = function(t) {
            var a = t[0], n = t[1], r = t[2], o = t[3];
            return a * a + n * n + r * r + o * o;
        }, o.sqrLen = o.squaredLength, o.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = -a[3], t;
        }, o.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t[3] = 1 / a[3], t;
        }, o.normalize = function(t, a) {
            var n = a[0], r = a[1], o = a[2], e = a[3], u = n * n + r * r + o * o + e * e;
            return u > 0 && (u = 1 / Math.sqrt(u), t[0] = n * u, t[1] = r * u, t[2] = o * u, 
            t[3] = e * u), t;
        }, o.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1] + t[2] * a[2] + t[3] * a[3];
        }, o.lerp = function(t, a, n, r) {
            var o = a[0], e = a[1], u = a[2], l = a[3];
            return t[0] = o + r * (n[0] - o), t[1] = e + r * (n[1] - e), t[2] = u + r * (n[2] - u), 
            t[3] = l + r * (n[3] - l), t;
        }, o.random = function(t, a) {
            return a = a || 1, t[0] = r.RANDOM(), t[1] = r.RANDOM(), t[2] = r.RANDOM(), t[3] = r.RANDOM(), 
            o.normalize(t, t), o.scale(t, t, a), t;
        }, o.transformMat4 = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = a[3];
            return t[0] = n[0] * r + n[4] * o + n[8] * e + n[12] * u, t[1] = n[1] * r + n[5] * o + n[9] * e + n[13] * u, 
            t[2] = n[2] * r + n[6] * o + n[10] * e + n[14] * u, t[3] = n[3] * r + n[7] * o + n[11] * e + n[15] * u, 
            t;
        }, o.transformQuat = function(t, a, n) {
            var r = a[0], o = a[1], e = a[2], u = n[0], l = n[1], i = n[2], M = n[3], s = M * r + l * e - i * o, c = M * o + i * r - u * e, f = M * e + u * o - l * r, h = -u * r - l * o - i * e;
            return t[0] = s * M + h * -u + c * -i - f * -l, t[1] = c * M + h * -l + f * -u - s * -i, 
            t[2] = f * M + h * -i + s * -l - c * -u, t[3] = a[3], t;
        }, o.forEach = function() {
            var t = o.create();
            return function(a, n, r, o, e, u) {
                var l, i;
                for (n || (n = 4), r || (r = 0), i = o ? Math.min(o * n + r, a.length) : a.length, 
                l = r; l < i; l += n) t[0] = a[l], t[1] = a[l + 1], t[2] = a[l + 2], t[3] = a[l + 3], 
                e(t, t, u), a[l] = t[0], a[l + 1] = t[1], a[l + 2] = t[2], a[l + 3] = t[3];
                return a;
            };
        }(), o.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, o.equals = function(t, a) {
            var n = t[0], o = t[1], e = t[2], u = t[3], l = a[0], i = a[1], M = a[2], s = a[3];
            return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(o - i) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(i)) && Math.abs(e - M) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(u - s) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(s));
        }, t.exports = o;
    }, function(t, a, n) {
        var r = n(7), o = {};
        o.create = function() {
            var t = new r.ARRAY_TYPE(2);
            return t[0] = 0, t[1] = 0, t;
        }, o.clone = function(t) {
            var a = new r.ARRAY_TYPE(2);
            return a[0] = t[0], a[1] = t[1], a;
        }, o.fromValues = function(t, a) {
            var n = new r.ARRAY_TYPE(2);
            return n[0] = t, n[1] = a, n;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t;
        }, o.set = function(t, a, n) {
            return t[0] = a, t[1] = n, t;
        }, o.add = function(t, a, n) {
            return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t;
        }, o.subtract = function(t, a, n) {
            return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t;
        }, o.sub = o.subtract, o.multiply = function(t, a, n) {
            return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t;
        }, o.mul = o.multiply, o.divide = function(t, a, n) {
            return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t;
        }, o.div = o.divide, o.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t;
        }, o.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t;
        }, o.min = function(t, a, n) {
            return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t;
        }, o.max = function(t, a, n) {
            return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t;
        }, o.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t;
        }, o.scale = function(t, a, n) {
            return t[0] = a[0] * n, t[1] = a[1] * n, t;
        }, o.scaleAndAdd = function(t, a, n, r) {
            return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t;
        }, o.distance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1];
            return Math.sqrt(n * n + r * r);
        }, o.dist = o.distance, o.squaredDistance = function(t, a) {
            var n = a[0] - t[0], r = a[1] - t[1];
            return n * n + r * r;
        }, o.sqrDist = o.squaredDistance, o.length = function(t) {
            var a = t[0], n = t[1];
            return Math.sqrt(a * a + n * n);
        }, o.len = o.length, o.squaredLength = function(t) {
            var a = t[0], n = t[1];
            return a * a + n * n;
        }, o.sqrLen = o.squaredLength, o.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t;
        }, o.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t;
        }, o.normalize = function(t, a) {
            var n = a[0], r = a[1], o = n * n + r * r;
            return o > 0 && (o = 1 / Math.sqrt(o), t[0] = a[0] * o, t[1] = a[1] * o), t;
        }, o.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1];
        }, o.cross = function(t, a, n) {
            var r = a[0] * n[1] - a[1] * n[0];
            return t[0] = t[1] = 0, t[2] = r, t;
        }, o.lerp = function(t, a, n, r) {
            var o = a[0], e = a[1];
            return t[0] = o + r * (n[0] - o), t[1] = e + r * (n[1] - e), t;
        }, o.random = function(t, a) {
            a = a || 1;
            var n = 2 * r.RANDOM() * Math.PI;
            return t[0] = Math.cos(n) * a, t[1] = Math.sin(n) * a, t;
        }, o.transformMat2 = function(t, a, n) {
            var r = a[0], o = a[1];
            return t[0] = n[0] * r + n[2] * o, t[1] = n[1] * r + n[3] * o, t;
        }, o.transformMat2d = function(t, a, n) {
            var r = a[0], o = a[1];
            return t[0] = n[0] * r + n[2] * o + n[4], t[1] = n[1] * r + n[3] * o + n[5], t;
        }, o.transformMat3 = function(t, a, n) {
            var r = a[0], o = a[1];
            return t[0] = n[0] * r + n[3] * o + n[6], t[1] = n[1] * r + n[4] * o + n[7], t;
        }, o.transformMat4 = function(t, a, n) {
            var r = a[0], o = a[1];
            return t[0] = n[0] * r + n[4] * o + n[12], t[1] = n[1] * r + n[5] * o + n[13], t;
        }, o.forEach = function() {
            var t = o.create();
            return function(a, n, r, o, e, u) {
                var l, i;
                for (n || (n = 2), r || (r = 0), i = o ? Math.min(o * n + r, a.length) : a.length, 
                l = r; l < i; l += n) t[0] = a[l], t[1] = a[l + 1], e(t, t, u), a[l] = t[0], a[l + 1] = t[1];
                return a;
            };
        }(), o.str = function(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")";
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1];
        }, o.equals = function(t, a) {
            var n = t[0], o = t[1], e = a[0], u = a[1];
            return Math.abs(n - e) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(e)) && Math.abs(o - u) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(u));
        }, t.exports = o;
    }, function(t, a, n) {
        "use strict";
        var r = n(6), o = r.vec3;
        a.fvec3 = {
            add: function(t, a) {
                return o.add(o.create(), t, a);
            },
            subtract: function(t, a) {
                return o.subtract(o.create(), t, a);
            },
            sub: function(t, a) {
                return o.sub(o.create(), t, a);
            },
            multiply: function(t, a) {
                return o.multiply(o.create(), t, a);
            },
            mul: function(t, a) {
                return o.mul(o.create(), t, a);
            },
            divide: function(t, a) {
                return o.divide(o.create(), t, a);
            },
            div: function(t, a) {
                return o.div(o.create(), t, a);
            },
            ceil: function(t) {
                return o.ceil(o.create(), t);
            },
            floor: function(t) {
                return o.floor(o.create(), t);
            },
            round: function(t) {
                return o.round(o.create(), t);
            },
            min: function(t, a) {
                return o.min(o.create(), t, a);
            },
            max: function(t, a) {
                return o.max(o.create(), t, a);
            },
            scale: function(t, a) {
                return o.scale(o.create(), t, a);
            },
            scaleAndAdd: function(t, a, n) {
                return o.scaleAndAdd(o.create(), t, a, n);
            },
            inverse: function(t) {
                return o.inverse(o.create(), t);
            },
            normalize: function(t) {
                return o.normalize(o.create(), t);
            },
            cross: function(t, a) {
                return o.cross(o.create(), t, a);
            }
        };
    }, function(t, a, n) {
        "use strict";
        function r(t, a) {
            var n = -l.vec3.dot(t, a);
            return l.vec4.fromValues(t[0], t[1], t[2], n);
        }
        function o(t, a, n) {
            return r(e(t, a, n), t);
        }
        function e(t, a, n) {
            var r = l.fvec3.cross(l.fvec3.sub(n, a), l.fvec3.sub(t, a));
            return l.vec3.normalize(r, r);
        }
        function u(t) {
            var a = t, n = a[0], r = a[1], o = a[2], e = a[3];
            return l.mat4.fromValues(1 - 2 * n * n, -2 * n * r, -2 * n * o, -2 * n * e, -2 * r * n, 1 - 2 * r * r, -2 * r * o, -2 * r * e, -2 * o * n, -2 * o * r, 1 - 2 * o * o, -2 * o * e, 0, 0, 0, 1);
        }
        var l = n(5);
        a.planeFromNormalAndCoplanarPoint = r, a.planeFromThreeCoplanarPoints = o, a.normalFromThreeCoplanarPoints = e, 
        a.mirrorMatrixFromPlane = u;
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
            }, t), n = {
                view: e.mat4.create(),
                perspective: e.mat4.perspective(e.mat4.create(), a.fovy, a.aspect, a.near, a.far),
                rotationX: e.mat4.create(),
                rotationY: e.mat4.create(),
                position: [ 0, 0, 0 ]
            };
            return {
                props: a,
                state: n
            };
        }
        function o(t) {
            var a = t.props, n = t.state, r = n.view, o = n.perspective, u = n.rotationX, l = n.rotationY, i = n.position;
            a.needsUpdatePerspective && (a.needsUpdatePerspective = !1, e.mat4.perspective(o, a.fovy, a.aspect, a.near, a.far));
            var M = !1;
            if (a.rotateX && (e.mat4.rotateX(u, u, a.rotateX), a.rotateX = 0, M = !0), a.rotateY && (e.mat4.rotateY(l, l, a.rotateY), 
            a.rotateY = 0, M = !0), a.moveForward) {
                var s = [ l[8], l[9], l[10] ];
                e.vec3.add(i, i, e.vec3.scale(s, s, -a.moveForward)), a.moveForward = 0, M = !0;
            }
            if (a.moveLeft) {
                var s = [ l[0], l[1], l[2] ];
                e.vec3.add(i, i, e.vec3.scale(s, s, -a.moveLeft)), a.moveLeft = 0, M = !0;
            }
            if (a.moveUp) {
                var s = [ l[4], l[5], l[6] ];
                e.vec3.add(i, i, e.vec3.scale(s, s, a.moveUp)), a.moveUp = 0, M = !0;
            }
            M && (e.mat4.fromTranslation(r, i), e.mat4.multiply(r, r, l), e.mat4.multiply(r, r, u), 
            e.mat4.invert(r, r));
        }
        var e = n(5);
        a.create = r, a.update = o;
    }, function(t, a) {
        "use strict";
        function n(t) {
            function a() {
                t({
                    width: window.innerWidth,
                    heigth: window.innerHeight
                });
            }
            return window.addEventListener("resize", a), a(), function() {
                window.removeEventListener("resize", a);
            };
        }
        function r() {
            var t = {
                size: null
            }, a = n(function(a) {
                return t.size = a;
            });
            return {
                state: t,
                destroy: a
            };
        }
        a.windowSize = n, a.windowSizeObserver = r;
    }, function(t, a) {
        "use strict";
        function n(t) {
            function n(t) {
                l[t.keyCode] = Date.now();
            }
            function r(t) {
                delete l[t.keyCode];
            }
            function o() {
                u.removeEventListener("keyup", r), u.removeEventListener("keydown", n);
            }
            void 0 === t && (t = {});
            var e = t.element, u = void 0 === e ? window : e, l = {};
            return u.addEventListener("keyup", r, !1), u.addEventListener("keydown", n, !1), 
            {
                Keys: a.Keys,
                state: {
                    pressed: l
                },
                destroy: o
            };
        }
        a.Keys = {
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
        }, a.keyboardObserver = n;
    }, function(t, a) {
        "use strict";
        function n(t) {
            function n(t) {
                s[t.button] = Date.now(), t.button === a.Buttons.LEFT && (f = t.clientX, h = t.clientY, 
                S = !0);
            }
            function r(t) {
                delete s[t.button], c.x = 0, c.y = 0, S = !1;
            }
            function o(t) {
                S && (c.x = f - t.clientX, c.y = h - t.clientY);
            }
            function e(t) {
                t.preventDefault();
            }
            function u() {
                i.removeEventListener("mousedown", n), document.removeEventListener("mousemove", o), 
                document.removeEventListener("mouseup", r), M && i.removeEventListener("contextmenu", e);
            }
            void 0 === t && (t = {});
            var l = t.element, i = void 0 === l ? document : l, M = t.enableRightButton, s = {}, c = {
                x: 0,
                y: 0
            }, f = 0, h = 0, S = !1;
            return i.addEventListener("mousedown", n), document.addEventListener("mouseup", r), 
            document.addEventListener("mousemove", o), M && i.addEventListener("contextmenu", e), 
            {
                Buttons: a.Buttons,
                state: {
                    pressed: s,
                    dragDelta: c
                },
                destroy: u
            };
        }
        a.Buttons = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        }, a.mouseObserver = n;
    }, function(t, a) {
        "use strict";
        a.generateUUID = function() {
            var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), a = new Array(36), n = 0, r = null;
            return function() {
                for (var o = 0; o < 36; ) 8 === o || 13 === o || 18 === o || 23 === o ? a[o] = "-" : 14 === o ? a[o] = "4" : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0), 
                r = 15 & n, n >>= 4, a[o] = t[19 === o ? 3 & r | 8 : r]), o += 1;
                return a.join("");
            };
        }();
    }, function(t, a) {
        "use strict";
        function n(t) {
            function a() {
                r && (n = Date.now(), t(n - o), o = n, requestAnimationFrame(a));
            }
            var n, r = !0, o = Date.now();
            return a(), function() {
                r = !1;
            };
        }
        function r(t) {
            function a() {
                n && (t(), requestAnimationFrame(a));
            }
            var n = !0;
            return a(), function() {
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
        a.animateWithTPF = n, a.animate = r, a.animator = o;
    } ]);
});