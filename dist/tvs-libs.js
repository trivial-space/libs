!function(t, a) {
    "object" == typeof exports && "object" == typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? exports.tvsLibs = a() : t.tvsLibs = a();
}(this, function() {
    return function(t) {
        function a(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(o.exports, o, o.exports, a), o.loaded = !0, o.exports;
        }
        var r = {};
        return a.m = t, a.c = r, a.p = "", a(0);
    }([ function(t, a, r) {
        "use strict";
        var n = r(1), o = r(2), e = r(3), u = r(4), l = r(6), M = r(5), i = r(7), s = r(19), c = r(20);
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a["default"] = {
            flow: {
                sources: {
                    animation: n,
                    dom: o
                }
            },
            math: {
                core: e,
                noise: l,
                coords: u,
                vectors: M,
                linAlg: i,
                geometry: s
            },
            vr: {
                camera: c
            }
        };
    }, function(t, a) {
        "use strict";
        function r(t) {
            function a() {
                n && (r = Date.now(), t(r - o), o = r, requestAnimationFrame(a));
            }
            var r, n = !0, o = Date.now();
            return a(), function() {
                n = !1;
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
        a.fpsAnimation = r, a.animation = n;
    }, function(t, a) {
        "use strict";
        function r(t) {
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
        a.windowSize = r;
    }, function(t, a) {
        "use strict";
        function r(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function n(t, a, r) {
            return t + r * (a - t);
        }
        function o(t, a, r) {
            return Math.max(a, Math.min(t, r));
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
        function M(t) {
            return t * a.DEG_TO_RAD_FACTOR;
        }
        a.DEG_TO_RAD_FACTOR = Math.PI / 180, a.sign = r, a.lerp = n, a.clamp = o, a.randInt = e, 
        a.randIntInRange = u, a.normalRand = l, a.degToRad = M;
    }, function(t, a, r) {
        "use strict";
        function n(t) {
            return [ e.length(t), Math.atan2(t[1], t[0]) ];
        }
        function o(t) {
            var a = t[0], r = t[1];
            return [ a * Math.cos(r), a * Math.sin(r) ];
        }
        var e = r(5);
        a.cartesianToPolar2D = n, a.polarToCartesian2D = o;
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
        function o(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] - a[n];
            return r;
        }
        function e(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] - a;
            return r;
        }
        function u(t, a) {
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] * a;
            return r;
        }
        function l(t, a) {
            if (a) {
                for (var r = [], n = 0; n < t.length; n++) r[n] = t[n] / a;
                return r;
            }
        }
        function M(t) {
            for (var a = 0, r = 0; r < t.length; r++) {
                var n = t[r];
                a += n * n;
            }
            return Math.sqrt(a);
        }
        function i(t) {
            return l(t, M(t));
        }
        function s(t, a) {
            return a < M(t) ? u(i(t), a) : t;
        }
        function c(t, a) {
            if (t.length != a.length) return !1;
            for (var r = 0; r < t.length; r++) if (t[r] !== a[r]) return !1;
            return !0;
        }
        a.add = r, a.addScalar = n, a.sub = o, a.subScalar = e, a.mul = u, a.div = l, a.length = M, 
        a.normalize = i, a.limit = s, a.isEqual = c;
    }, function(t, a) {
        "use strict";
        function r(t) {
            return t * t * t * (t * (6 * t - 15) + 10);
        }
        function n(t, a, r) {
            return a + t * (r - a);
        }
        function o(t, a) {
            return 0 === (1 & t) ? a : -a;
        }
        function e(t) {
            var a, e, u;
            return e = ~~t, a = 255 & e, t -= e, u = r(t), n(u, o(f[a], t), o(f[a + 1], t - 1));
        }
        function u(t, a) {
            var r, n, o = 0, e = 0, u = 0, l = (t + a) * h, M = Math.floor(t + l), i = Math.floor(a + l), s = (M + i) * S, c = M - s, f = i - s, I = t - c, x = a - f;
            I > x ? (r = 1, n = 0) : (r = 0, n = 1);
            var D = I - r + S, m = x - n + S, F = I - 1 + 2 * S, p = x - 1 + 2 * S, w = 255 & M, z = 255 & i, A = .5 - I * I - x * x;
            if (A >= 0) {
                var E = 3 * v[w + d[z]];
                A *= A, o = A * A * (b[E] * I + b[E + 1] * x);
            }
            var P = .5 - D * D - m * m;
            if (P >= 0) {
                var L = 3 * v[w + r + d[z + n]];
                P *= P, e = P * P * (b[L] * D + b[L + 1] * m);
            }
            var q = .5 - F * F - p * p;
            if (q >= 0) {
                var R = 3 * v[w + 1 + d[z + 1]];
                q *= q, u = q * q * (b[R] * F + b[R + 1] * p);
            }
            return 70 * (o + e + u);
        }
        function l(t, a, r) {
            var n, o, e, u, l, M, i, s, c, f, h = (t + a + r) * I, S = Math.floor(t + h), D = Math.floor(a + h), m = Math.floor(r + h), F = (S + D + m) * x, p = S - F, w = D - F, z = m - F, A = t - p, E = a - w, P = r - z;
            A >= E ? E >= P ? (l = 1, M = 0, i = 0, s = 1, c = 1, f = 0) : A >= P ? (l = 1, 
            M = 0, i = 0, s = 1, c = 0, f = 1) : (l = 0, M = 0, i = 1, s = 1, c = 0, f = 1) : E < P ? (l = 0, 
            M = 0, i = 1, s = 0, c = 1, f = 1) : A < P ? (l = 0, M = 1, i = 0, s = 0, c = 1, 
            f = 1) : (l = 0, M = 1, i = 0, s = 1, c = 1, f = 0);
            var L = A - l + x, q = E - M + x, R = P - i + x, y = A - s + 2 * x, g = E - c + 2 * x, O = P - f + 2 * x, Y = A - 1 + 3 * x, N = E - 1 + 3 * x, _ = P - 1 + 3 * x, T = 255 & S, U = 255 & D, V = 255 & m, X = .6 - A * A - E * E - P * P;
            if (X < 0) n = 0; else {
                var j = 3 * v[T + d[U + d[V]]];
                X *= X, n = X * X * (b[j] * A + b[j + 1] * E + b[j + 2] * P);
            }
            var Z = .6 - L * L - q * q - R * R;
            if (Z < 0) o = 0; else {
                var C = 3 * v[T + l + d[U + M + d[V + i]]];
                Z *= Z, o = Z * Z * (b[C] * L + b[C + 1] * q + b[C + 2] * R);
            }
            var B = .6 - y * y - g * g - O * O;
            if (B < 0) e = 0; else {
                var Q = 3 * v[T + s + d[U + c + d[V + f]]];
                B *= B, e = B * B * (b[Q] * y + b[Q + 1] * g + b[Q + 2] * O);
            }
            var W = .6 - Y * Y - N * N - _ * _;
            if (W < 0) u = 0; else {
                var G = 3 * v[T + 1 + d[U + 1 + d[V + 1]]];
                W *= W, u = W * W * (b[G] * Y + b[G + 1] * N + b[G + 2] * _);
            }
            return 32 * (n + o + e + u);
        }
        function M(t, a, r, n) {
            var o, e, u, l, M, i = (t + a + r + n) * D, s = Math.floor(t + i), c = Math.floor(a + i), f = Math.floor(r + i), h = Math.floor(n + i), S = (s + c + f + h) * m, I = s - S, x = c - S, F = f - S, v = h - S, b = t - I, w = a - x, z = r - F, A = n - v, E = 0, P = 0, L = 0, q = 0;
            b > w ? E++ : P++, b > z ? E++ : L++, b > A ? E++ : q++, w > z ? P++ : L++, w > A ? P++ : q++, 
            z > A ? L++ : q++;
            var R, y, g, O, Y, N, _, T, U, V, X, j;
            R = E >= 3 ? 1 : 0, y = P >= 3 ? 1 : 0, g = L >= 3 ? 1 : 0, O = q >= 3 ? 1 : 0, 
            Y = E >= 2 ? 1 : 0, N = P >= 2 ? 1 : 0, _ = L >= 2 ? 1 : 0, T = q >= 2 ? 1 : 0, 
            U = E >= 1 ? 1 : 0, V = P >= 1 ? 1 : 0, X = L >= 1 ? 1 : 0, j = q >= 1 ? 1 : 0;
            var Z = b - R + m, C = w - y + m, B = z - g + m, Q = A - O + m, W = b - Y + 2 * m, G = w - N + 2 * m, H = z - _ + 2 * m, k = A - T + 2 * m, J = b - U + 3 * m, K = w - V + 3 * m, $ = z - X + 3 * m, tt = A - j + 3 * m, at = b - 1 + 4 * m, rt = w - 1 + 4 * m, nt = z - 1 + 4 * m, ot = A - 1 + 4 * m, et = 255 & s, ut = 255 & c, lt = 255 & f, Mt = 255 & h, it = .6 - b * b - w * w - z * z - A * A;
            if (it < 0) o = 0; else {
                var st = d[et + d[ut + d[lt + d[Mt]]]] % 32 * 4;
                it *= it, o = it * it * (p[st] * b + p[st + 1] * w + p[st + 2] * z + p[st + 3] * A);
            }
            var ct = .6 - Z * Z - C * C - B * B - Q * Q;
            if (ct < 0) e = 0; else {
                var ft = d[et + R + d[ut + y + d[lt + g + d[Mt + O]]]] % 32 * 4;
                ct *= ct, e = ct * ct * (p[ft] * Z + p[ft + 1] * C + p[ft + 2] * B + p[ft + 3] * Q);
            }
            var ht = .6 - W * W - G * G - H * H - k * k;
            if (ht < 0) u = 0; else {
                var St = d[et + Y + d[ut + N + d[lt + _ + d[Mt + T]]]] % 32 * 4;
                ht *= ht, u = ht * ht * (p[St] * W + p[St + 1] * G + p[St + 2] * H + p[St + 3] * k);
            }
            var It = .6 - J * J - K * K - $ * $ - tt * tt;
            if (It < 0) l = 0; else {
                var xt = d[et + U + d[ut + V + d[lt + X + d[Mt + j]]]] % 32 * 4;
                It *= It, l = It * It * (p[xt] * J + p[xt + 1] * K + p[xt + 2] * $ + p[xt + 3] * tt);
            }
            var Dt = .6 - at * at - rt * rt - nt * nt - ot * ot;
            if (Dt < 0) M = 0; else {
                var mt = d[et + 1 + d[ut + 1 + d[lt + 1 + d[Mt + 1]]]] % 32 * 4;
                Dt *= Dt, M = Dt * Dt * (p[mt] * at + p[mt + 1] * rt + p[mt + 2] * nt + p[mt + 3] * ot);
            }
            return 27 * (o + e + u + l + M);
        }
        function i(t, a, r, n) {
            for (var o = [], e = 0; e < a; e++) for (var u = 0; u < t; u++) {
                var l = u / t, i = e / a, s = Math.cos(2 * l * Math.PI) * r / (2 * Math.PI), c = Math.cos(2 * i * Math.PI) * n / (2 * Math.PI), f = Math.sin(2 * l * Math.PI) * r / (2 * Math.PI), h = Math.sin(2 * i * Math.PI) * n / (2 * Math.PI);
                o.push(M(s, c, f, h));
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
        a.noise2d = u, a.noise3d = l, a.noise4d = M, a.tileNoise = i;
    }, function(t, a, r) {
        "use strict";
        function n(t) {
            for (var r in t) a.hasOwnProperty(r) || (a[r] = t[r]);
        }
        n(r(8)), n(r(18));
    }, function(t, a, r) {
        a.glMatrix = r(9), a.mat2 = r(10), a.mat2d = r(11), a.mat3 = r(12), a.mat4 = r(13), 
        a.quat = r(14), a.vec2 = r(17), a.vec3 = r(15), a.vec4 = r(16);
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
        var n = r(9), o = {};
        o.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, o.clone = function(t) {
            var a = new n.ARRAY_TYPE(4);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t;
        }, o.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, o.fromValues = function(t, a, r, o) {
            var e = new n.ARRAY_TYPE(4);
            return e[0] = t, e[1] = a, e[2] = r, e[3] = o, e;
        }, o.set = function(t, a, r, n, o) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = o, t;
        }, o.transpose = function(t, a) {
            if (t === a) {
                var r = a[1];
                t[1] = a[2], t[2] = r;
            } else t[0] = a[0], t[1] = a[2], t[2] = a[1], t[3] = a[3];
            return t;
        }, o.invert = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = r * e - o * n;
            return u ? (u = 1 / u, t[0] = e * u, t[1] = -n * u, t[2] = -o * u, t[3] = r * u, 
            t) : null;
        }, o.adjoint = function(t, a) {
            var r = a[0];
            return t[0] = a[3], t[1] = -a[1], t[2] = -a[2], t[3] = r, t;
        }, o.determinant = function(t) {
            return t[0] * t[3] - t[2] * t[1];
        }, o.multiply = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = r[0], M = r[1], i = r[2], s = r[3];
            return t[0] = n * l + e * M, t[1] = o * l + u * M, t[2] = n * i + e * s, t[3] = o * i + u * s, 
            t;
        }, o.mul = o.multiply, o.rotate = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = Math.sin(r), M = Math.cos(r);
            return t[0] = n * M + e * l, t[1] = o * M + u * l, t[2] = n * -l + e * M, t[3] = o * -l + u * M, 
            t;
        }, o.scale = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = r[0], M = r[1];
            return t[0] = n * l, t[1] = o * l, t[2] = e * M, t[3] = u * M, t;
        }, o.fromRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = r, t[2] = -r, t[3] = n, t;
        }, o.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t;
        }, o.str = function(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, o.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
        }, o.LDU = function(t, a, r, n) {
            return t[2] = n[2] / n[0], r[0] = n[0], r[1] = n[1], r[3] = n[3] - t[2] * r[1], 
            [ t, a, r ];
        }, o.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t;
        }, o.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t;
        }, o.sub = o.subtract, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, o.equals = function(t, a) {
            var r = t[0], o = t[1], e = t[2], u = t[3], l = a[0], M = a[1], i = a[2], s = a[3];
            return Math.abs(r - l) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(o - M) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(u - s) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(s));
        }, o.multiplyScalar = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t;
        }, o.multiplyScalarAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t;
        }, t.exports = o;
    }, function(t, a, r) {
        var n = r(9), o = {};
        o.create = function() {
            var t = new n.ARRAY_TYPE(6);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, o.clone = function(t) {
            var a = new n.ARRAY_TYPE(6);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t;
        }, o.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, o.fromValues = function(t, a, r, o, e, u) {
            var l = new n.ARRAY_TYPE(6);
            return l[0] = t, l[1] = a, l[2] = r, l[3] = o, l[4] = e, l[5] = u, l;
        }, o.set = function(t, a, r, n, o, e, u) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = o, t[4] = e, t[5] = u, t;
        }, o.invert = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = a[4], l = a[5], M = r * e - n * o;
            return M ? (M = 1 / M, t[0] = e * M, t[1] = -n * M, t[2] = -o * M, t[3] = r * M, 
            t[4] = (o * l - e * u) * M, t[5] = (n * u - r * l) * M, t) : null;
        }, o.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, o.multiply = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = r[0], s = r[1], c = r[2], f = r[3], h = r[4], S = r[5];
            return t[0] = n * i + e * s, t[1] = o * i + u * s, t[2] = n * c + e * f, t[3] = o * c + u * f, 
            t[4] = n * h + e * S + l, t[5] = o * h + u * S + M, t;
        }, o.mul = o.multiply, o.rotate = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = Math.sin(r), s = Math.cos(r);
            return t[0] = n * s + e * i, t[1] = o * s + u * i, t[2] = n * -i + e * s, t[3] = o * -i + u * s, 
            t[4] = l, t[5] = M, t;
        }, o.scale = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = r[0], s = r[1];
            return t[0] = n * i, t[1] = o * i, t[2] = e * s, t[3] = u * s, t[4] = l, t[5] = M, 
            t;
        }, o.translate = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = r[0], s = r[1];
            return t[0] = n, t[1] = o, t[2] = e, t[3] = u, t[4] = n * i + e * s + l, t[5] = o * i + u * s + M, 
            t;
        }, o.fromRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = r, t[2] = -r, t[3] = n, t[4] = 0, t[5] = 0, t;
        }, o.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t[4] = 0, t[5] = 0, t;
        }, o.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = a[0], t[5] = a[1], t;
        }, o.str = function(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
        }, o.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
        }, o.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t[4] = a[4] + r[4], t[5] = a[5] + r[5], t;
        }, o.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t[4] = a[4] - r[4], t[5] = a[5] - r[5], t;
        }, o.sub = o.subtract, o.multiplyScalar = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * r, 
            t[5] = a[5] * r, t;
        }, o.multiplyScalarAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t[4] = a[4] + r[4] * n, t[5] = a[5] + r[5] * n, t;
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5];
        }, o.equals = function(t, a) {
            var r = t[0], o = t[1], e = t[2], u = t[3], l = t[4], M = t[5], i = a[0], s = a[1], c = a[2], f = a[3], h = a[4], S = a[5];
            return Math.abs(r - i) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(o - s) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(e - c) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(u - f) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(l - h) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(h)) && Math.abs(M - S) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(S));
        }, t.exports = o;
    }, function(t, a, r) {
        var n = r(9), o = {};
        o.create = function() {
            var t = new n.ARRAY_TYPE(9);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, o.fromMat4 = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[4], t[4] = a[5], t[5] = a[6], 
            t[6] = a[8], t[7] = a[9], t[8] = a[10], t;
        }, o.clone = function(t) {
            var a = new n.ARRAY_TYPE(9);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a[6] = t[6], a[7] = t[7], a[8] = t[8], a;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t;
        }, o.fromValues = function(t, a, r, o, e, u, l, M, i) {
            var s = new n.ARRAY_TYPE(9);
            return s[0] = t, s[1] = a, s[2] = r, s[3] = o, s[4] = e, s[5] = u, s[6] = l, s[7] = M, 
            s[8] = i, s;
        }, o.set = function(t, a, r, n, o, e, u, l, M, i) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = o, t[4] = e, t[5] = u, t[6] = l, t[7] = M, 
            t[8] = i, t;
        }, o.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, o.transpose = function(t, a) {
            if (t === a) {
                var r = a[1], n = a[2], o = a[5];
                t[1] = a[3], t[2] = a[6], t[3] = r, t[5] = a[7], t[6] = n, t[7] = o;
            } else t[0] = a[0], t[1] = a[3], t[2] = a[6], t[3] = a[1], t[4] = a[4], t[5] = a[7], 
            t[6] = a[2], t[7] = a[5], t[8] = a[8];
            return t;
        }, o.invert = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = a[4], l = a[5], M = a[6], i = a[7], s = a[8], c = s * u - l * i, f = -s * e + l * M, h = i * e - u * M, S = r * c + n * f + o * h;
            return S ? (S = 1 / S, t[0] = c * S, t[1] = (-s * n + o * i) * S, t[2] = (l * n - o * u) * S, 
            t[3] = f * S, t[4] = (s * r - o * M) * S, t[5] = (-l * r + o * e) * S, t[6] = h * S, 
            t[7] = (-i * r + n * M) * S, t[8] = (u * r - n * e) * S, t) : null;
        }, o.adjoint = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = a[4], l = a[5], M = a[6], i = a[7], s = a[8];
            return t[0] = u * s - l * i, t[1] = o * i - n * s, t[2] = n * l - o * u, t[3] = l * M - e * s, 
            t[4] = r * s - o * M, t[5] = o * e - r * l, t[6] = e * i - u * M, t[7] = n * M - r * i, 
            t[8] = r * u - n * e, t;
        }, o.determinant = function(t) {
            var a = t[0], r = t[1], n = t[2], o = t[3], e = t[4], u = t[5], l = t[6], M = t[7], i = t[8];
            return a * (i * e - u * M) + r * (-i * o + u * l) + n * (M * o - e * l);
        }, o.multiply = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = a[6], s = a[7], c = a[8], f = r[0], h = r[1], S = r[2], I = r[3], x = r[4], D = r[5], m = r[6], F = r[7], d = r[8];
            return t[0] = f * n + h * u + S * i, t[1] = f * o + h * l + S * s, t[2] = f * e + h * M + S * c, 
            t[3] = I * n + x * u + D * i, t[4] = I * o + x * l + D * s, t[5] = I * e + x * M + D * c, 
            t[6] = m * n + F * u + d * i, t[7] = m * o + F * l + d * s, t[8] = m * e + F * M + d * c, 
            t;
        }, o.mul = o.multiply, o.translate = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = a[6], s = a[7], c = a[8], f = r[0], h = r[1];
            return t[0] = n, t[1] = o, t[2] = e, t[3] = u, t[4] = l, t[5] = M, t[6] = f * n + h * u + i, 
            t[7] = f * o + h * l + s, t[8] = f * e + h * M + c, t;
        }, o.rotate = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = a[6], s = a[7], c = a[8], f = Math.sin(r), h = Math.cos(r);
            return t[0] = h * n + f * u, t[1] = h * o + f * l, t[2] = h * e + f * M, t[3] = h * u - f * n, 
            t[4] = h * l - f * o, t[5] = h * M - f * e, t[6] = i, t[7] = s, t[8] = c, t;
        }, o.scale = function(t, a, r) {
            var n = r[0], o = r[1];
            return t[0] = n * a[0], t[1] = n * a[1], t[2] = n * a[2], t[3] = o * a[3], t[4] = o * a[4], 
            t[5] = o * a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t;
        }, o.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = a[0], 
            t[7] = a[1], t[8] = 1, t;
        }, o.fromRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = r, t[2] = 0, t[3] = -r, t[4] = n, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, o.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = a[1], t[5] = 0, t[6] = 0, 
            t[7] = 0, t[8] = 1, t;
        }, o.fromMat2d = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = 0, t[3] = a[2], t[4] = a[3], t[5] = 0, t[6] = a[4], 
            t[7] = a[5], t[8] = 1, t;
        }, o.fromQuat = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = r + r, l = n + n, M = o + o, i = r * u, s = n * u, c = n * l, f = o * u, h = o * l, S = o * M, I = e * u, x = e * l, D = e * M;
            return t[0] = 1 - c - S, t[3] = s - D, t[6] = f + x, t[1] = s + D, t[4] = 1 - i - S, 
            t[7] = h - I, t[2] = f - x, t[5] = h + I, t[8] = 1 - i - c, t;
        }, o.normalFromMat4 = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = a[4], l = a[5], M = a[6], i = a[7], s = a[8], c = a[9], f = a[10], h = a[11], S = a[12], I = a[13], x = a[14], D = a[15], m = r * l - n * u, F = r * M - o * u, d = r * i - e * u, v = n * M - o * l, b = n * i - e * l, p = o * i - e * M, w = s * I - c * S, z = s * x - f * S, A = s * D - h * S, E = c * x - f * I, P = c * D - h * I, L = f * D - h * x, q = m * L - F * P + d * E + v * A - b * z + p * w;
            return q ? (q = 1 / q, t[0] = (l * L - M * P + i * E) * q, t[1] = (M * A - u * L - i * z) * q, 
            t[2] = (u * P - l * A + i * w) * q, t[3] = (o * P - n * L - e * E) * q, t[4] = (r * L - o * A + e * z) * q, 
            t[5] = (n * A - r * P - e * w) * q, t[6] = (I * p - x * b + D * v) * q, t[7] = (x * d - S * p - D * F) * q, 
            t[8] = (S * b - I * d + D * m) * q, t) : null;
        }, o.str = function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
        }, o.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
        }, o.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t[4] = a[4] + r[4], t[5] = a[5] + r[5], t[6] = a[6] + r[6], t[7] = a[7] + r[7], 
            t[8] = a[8] + r[8], t;
        }, o.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t[4] = a[4] - r[4], t[5] = a[5] - r[5], t[6] = a[6] - r[6], t[7] = a[7] - r[7], 
            t[8] = a[8] - r[8], t;
        }, o.sub = o.subtract, o.multiplyScalar = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * r, 
            t[5] = a[5] * r, t[6] = a[6] * r, t[7] = a[7] * r, t[8] = a[8] * r, t;
        }, o.multiplyScalarAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t[4] = a[4] + r[4] * n, t[5] = a[5] + r[5] * n, t[6] = a[6] + r[6] * n, t[7] = a[7] + r[7] * n, 
            t[8] = a[8] + r[8] * n, t;
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8];
        }, o.equals = function(t, a) {
            var r = t[0], o = t[1], e = t[2], u = t[3], l = t[4], M = t[5], i = t[6], s = t[7], c = t[8], f = a[0], h = a[1], S = a[2], I = a[3], x = a[4], D = a[5], m = t[6], F = a[7], d = a[8];
            return Math.abs(r - f) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(o - h) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(e - S) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(S)) && Math.abs(u - I) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(I)) && Math.abs(l - x) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) && Math.abs(M - D) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(D)) && Math.abs(i - m) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(s - F) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(F)) && Math.abs(c - d) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(d));
        }, t.exports = o;
    }, function(t, a, r) {
        var n = r(9), o = {
            scalar: {},
            SIMD: {}
        };
        o.create = function() {
            var t = new n.ARRAY_TYPE(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.clone = function(t) {
            var a = new n.ARRAY_TYPE(16);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], 
            a[6] = t[6], a[7] = t[7], a[8] = t[8], a[9] = t[9], a[10] = t[10], a[11] = t[11], 
            a[12] = t[12], a[13] = t[13], a[14] = t[14], a[15] = t[15], a;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], 
            t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
        }, o.fromValues = function(t, a, r, o, e, u, l, M, i, s, c, f, h, S, I, x) {
            var D = new n.ARRAY_TYPE(16);
            return D[0] = t, D[1] = a, D[2] = r, D[3] = o, D[4] = e, D[5] = u, D[6] = l, D[7] = M, 
            D[8] = i, D[9] = s, D[10] = c, D[11] = f, D[12] = h, D[13] = S, D[14] = I, D[15] = x, 
            D;
        }, o.set = function(t, a, r, n, o, e, u, l, M, i, s, c, f, h, S, I, x) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = o, t[4] = e, t[5] = u, t[6] = l, t[7] = M, 
            t[8] = i, t[9] = s, t[10] = c, t[11] = f, t[12] = h, t[13] = S, t[14] = I, t[15] = x, 
            t;
        }, o.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.scalar.transpose = function(t, a) {
            if (t === a) {
                var r = a[1], n = a[2], o = a[3], e = a[6], u = a[7], l = a[11];
                t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = r, t[6] = a[9], t[7] = a[13], t[8] = n, 
                t[9] = e, t[11] = a[14], t[12] = o, t[13] = u, t[14] = l;
            } else t[0] = a[0], t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = a[1], t[5] = a[5], 
            t[6] = a[9], t[7] = a[13], t[8] = a[2], t[9] = a[6], t[10] = a[10], t[11] = a[14], 
            t[12] = a[3], t[13] = a[7], t[14] = a[11], t[15] = a[15];
            return t;
        }, o.SIMD.transpose = function(t, a) {
            var r, n, o, e, u, l, M, i, s, c;
            return r = SIMD.Float32x4.load(a, 0), n = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), 
            e = SIMD.Float32x4.load(a, 12), u = SIMD.Float32x4.shuffle(r, n, 0, 1, 4, 5), l = SIMD.Float32x4.shuffle(o, e, 0, 1, 4, 5), 
            M = SIMD.Float32x4.shuffle(u, l, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(u, l, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, M), SIMD.Float32x4.store(t, 4, i), u = SIMD.Float32x4.shuffle(r, n, 2, 3, 6, 7), 
            l = SIMD.Float32x4.shuffle(o, e, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(u, l, 0, 2, 4, 6), 
            c = SIMD.Float32x4.shuffle(u, l, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, s), SIMD.Float32x4.store(t, 12, c), 
            t;
        }, o.transpose = n.USE_SIMD ? o.SIMD.transpose : o.scalar.transpose, o.scalar.invert = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = a[4], l = a[5], M = a[6], i = a[7], s = a[8], c = a[9], f = a[10], h = a[11], S = a[12], I = a[13], x = a[14], D = a[15], m = r * l - n * u, F = r * M - o * u, d = r * i - e * u, v = n * M - o * l, b = n * i - e * l, p = o * i - e * M, w = s * I - c * S, z = s * x - f * S, A = s * D - h * S, E = c * x - f * I, P = c * D - h * I, L = f * D - h * x, q = m * L - F * P + d * E + v * A - b * z + p * w;
            return q ? (q = 1 / q, t[0] = (l * L - M * P + i * E) * q, t[1] = (o * P - n * L - e * E) * q, 
            t[2] = (I * p - x * b + D * v) * q, t[3] = (f * b - c * p - h * v) * q, t[4] = (M * A - u * L - i * z) * q, 
            t[5] = (r * L - o * A + e * z) * q, t[6] = (x * d - S * p - D * F) * q, t[7] = (s * p - f * d + h * F) * q, 
            t[8] = (u * P - l * A + i * w) * q, t[9] = (n * A - r * P - e * w) * q, t[10] = (S * b - I * d + D * m) * q, 
            t[11] = (c * d - s * b - h * m) * q, t[12] = (l * z - u * E - M * w) * q, t[13] = (r * E - n * z + o * w) * q, 
            t[14] = (I * F - S * v - x * m) * q, t[15] = (s * v - c * F + f * m) * q, t) : null;
        }, o.SIMD.invert = function(t, a) {
            var r, n, o, e, u, l, M, i, s, c, f = SIMD.Float32x4.load(a, 0), h = SIMD.Float32x4.load(a, 4), S = SIMD.Float32x4.load(a, 8), I = SIMD.Float32x4.load(a, 12);
            return u = SIMD.Float32x4.shuffle(f, h, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(S, I, 0, 1, 4, 5), 
            r = SIMD.Float32x4.shuffle(u, n, 0, 2, 4, 6), n = SIMD.Float32x4.shuffle(n, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(f, h, 2, 3, 6, 7), e = SIMD.Float32x4.shuffle(S, I, 2, 3, 6, 7), 
            o = SIMD.Float32x4.shuffle(u, e, 0, 2, 4, 6), e = SIMD.Float32x4.shuffle(e, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(o, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.mul(n, u), 
            M = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), l), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(n, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), l), 
            s = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(e, u)), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), l), 
            i = SIMD.Float32x4.mul(r, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, u)), 
            i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), i), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(r, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), i), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), i), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, u)), 
            u = SIMD.Float32x4.mul(r, e), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(o, u)), 
            i = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), i), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            M = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), M), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(n, u)), 
            u = SIMD.Float32x4.mul(r, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(e, u), M), 
            s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(n, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(e, u)), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), s), 
            c = SIMD.Float32x4.mul(r, l), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c), 
            c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c), u = SIMD.Float32x4.reciprocalApproximation(c), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(u, u))), 
            (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, l)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, M)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, i)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, s)), t) : null;
        }, o.invert = n.USE_SIMD ? o.SIMD.invert : o.scalar.invert, o.scalar.adjoint = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = a[4], l = a[5], M = a[6], i = a[7], s = a[8], c = a[9], f = a[10], h = a[11], S = a[12], I = a[13], x = a[14], D = a[15];
            return t[0] = l * (f * D - h * x) - c * (M * D - i * x) + I * (M * h - i * f), t[1] = -(n * (f * D - h * x) - c * (o * D - e * x) + I * (o * h - e * f)), 
            t[2] = n * (M * D - i * x) - l * (o * D - e * x) + I * (o * i - e * M), t[3] = -(n * (M * h - i * f) - l * (o * h - e * f) + c * (o * i - e * M)), 
            t[4] = -(u * (f * D - h * x) - s * (M * D - i * x) + S * (M * h - i * f)), t[5] = r * (f * D - h * x) - s * (o * D - e * x) + S * (o * h - e * f), 
            t[6] = -(r * (M * D - i * x) - u * (o * D - e * x) + S * (o * i - e * M)), t[7] = r * (M * h - i * f) - u * (o * h - e * f) + s * (o * i - e * M), 
            t[8] = u * (c * D - h * I) - s * (l * D - i * I) + S * (l * h - i * c), t[9] = -(r * (c * D - h * I) - s * (n * D - e * I) + S * (n * h - e * c)), 
            t[10] = r * (l * D - i * I) - u * (n * D - e * I) + S * (n * i - e * l), t[11] = -(r * (l * h - i * c) - u * (n * h - e * c) + s * (n * i - e * l)), 
            t[12] = -(u * (c * x - f * I) - s * (l * x - M * I) + S * (l * f - M * c)), t[13] = r * (c * x - f * I) - s * (n * x - o * I) + S * (n * f - o * c), 
            t[14] = -(r * (l * x - M * I) - u * (n * x - o * I) + S * (n * M - o * l)), t[15] = r * (l * f - M * c) - u * (n * f - o * c) + s * (n * M - o * l), 
            t;
        }, o.SIMD.adjoint = function(t, a) {
            var r, n, o, e, u, l, M, i, s, c, f, h, S, r = SIMD.Float32x4.load(a, 0), n = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), e = SIMD.Float32x4.load(a, 12);
            return s = SIMD.Float32x4.shuffle(r, n, 0, 1, 4, 5), l = SIMD.Float32x4.shuffle(o, e, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(s, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, s, 1, 3, 5, 7), 
            s = SIMD.Float32x4.shuffle(r, n, 2, 3, 6, 7), i = SIMD.Float32x4.shuffle(o, e, 2, 3, 6, 7), 
            M = SIMD.Float32x4.shuffle(s, i, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(i, s, 1, 3, 5, 7), 
            s = SIMD.Float32x4.mul(M, i), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), c = SIMD.Float32x4.mul(l, s), 
            f = SIMD.Float32x4.mul(u, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, s), c), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, s), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), 
            s = SIMD.Float32x4.mul(l, M), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, s), c), 
            S = SIMD.Float32x4.mul(u, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(i, s)), 
            S = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, s), S), S = SIMD.Float32x4.swizzle(S, 2, 3, 0, 1), 
            s = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), i), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), 
            M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(M, s), c), 
            h = SIMD.Float32x4.mul(u, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(M, s)), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, s), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), 
            s = SIMD.Float32x4.mul(u, l), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, s), h), 
            S = SIMD.Float32x4.sub(SIMD.Float32x4.mul(M, s), S), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, s), h), S = SIMD.Float32x4.sub(S, SIMD.Float32x4.mul(M, s)), 
            s = SIMD.Float32x4.mul(u, i), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(M, s)), 
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, s), h), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            f = SIMD.Float32x4.add(SIMD.Float32x4.mul(M, s), f), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(l, s)), 
            s = SIMD.Float32x4.mul(u, M), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, s), f), 
            S = SIMD.Float32x4.sub(S, SIMD.Float32x4.mul(l, s)), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(i, s)), S = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, s), S), 
            SIMD.Float32x4.store(t, 0, c), SIMD.Float32x4.store(t, 4, f), SIMD.Float32x4.store(t, 8, h), 
            SIMD.Float32x4.store(t, 12, S), t;
        }, o.adjoint = n.USE_SIMD ? o.SIMD.adjoint : o.scalar.adjoint, o.determinant = function(t) {
            var a = t[0], r = t[1], n = t[2], o = t[3], e = t[4], u = t[5], l = t[6], M = t[7], i = t[8], s = t[9], c = t[10], f = t[11], h = t[12], S = t[13], I = t[14], x = t[15], D = a * u - r * e, m = a * l - n * e, F = a * M - o * e, d = r * l - n * u, v = r * M - o * u, b = n * M - o * l, p = i * S - s * h, w = i * I - c * h, z = i * x - f * h, A = s * I - c * S, E = s * x - f * S, P = c * x - f * I;
            return D * P - m * E + F * A + d * z - v * w + b * p;
        }, o.SIMD.multiply = function(t, a, r) {
            var n = SIMD.Float32x4.load(a, 0), o = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), l = SIMD.Float32x4.load(r, 0), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), e), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, M);
            var i = SIMD.Float32x4.load(r, 4), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 2, 2, 2), e), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, s);
            var c = SIMD.Float32x4.load(r, 8), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), e), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, f);
            var h = SIMD.Float32x4.load(r, 12), S = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), e), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, S), t;
        }, o.scalar.multiply = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = a[6], s = a[7], c = a[8], f = a[9], h = a[10], S = a[11], I = a[12], x = a[13], D = a[14], m = a[15], F = r[0], d = r[1], v = r[2], b = r[3];
            return t[0] = F * n + d * l + v * c + b * I, t[1] = F * o + d * M + v * f + b * x, 
            t[2] = F * e + d * i + v * h + b * D, t[3] = F * u + d * s + v * S + b * m, F = r[4], 
            d = r[5], v = r[6], b = r[7], t[4] = F * n + d * l + v * c + b * I, t[5] = F * o + d * M + v * f + b * x, 
            t[6] = F * e + d * i + v * h + b * D, t[7] = F * u + d * s + v * S + b * m, F = r[8], 
            d = r[9], v = r[10], b = r[11], t[8] = F * n + d * l + v * c + b * I, t[9] = F * o + d * M + v * f + b * x, 
            t[10] = F * e + d * i + v * h + b * D, t[11] = F * u + d * s + v * S + b * m, F = r[12], 
            d = r[13], v = r[14], b = r[15], t[12] = F * n + d * l + v * c + b * I, t[13] = F * o + d * M + v * f + b * x, 
            t[14] = F * e + d * i + v * h + b * D, t[15] = F * u + d * s + v * S + b * m, t;
        }, o.multiply = n.USE_SIMD ? o.SIMD.multiply : o.scalar.multiply, o.mul = o.multiply, 
        o.scalar.translate = function(t, a, r) {
            var n, o, e, u, l, M, i, s, c, f, h, S, I = r[0], x = r[1], D = r[2];
            return a === t ? (t[12] = a[0] * I + a[4] * x + a[8] * D + a[12], t[13] = a[1] * I + a[5] * x + a[9] * D + a[13], 
            t[14] = a[2] * I + a[6] * x + a[10] * D + a[14], t[15] = a[3] * I + a[7] * x + a[11] * D + a[15]) : (n = a[0], 
            o = a[1], e = a[2], u = a[3], l = a[4], M = a[5], i = a[6], s = a[7], c = a[8], 
            f = a[9], h = a[10], S = a[11], t[0] = n, t[1] = o, t[2] = e, t[3] = u, t[4] = l, 
            t[5] = M, t[6] = i, t[7] = s, t[8] = c, t[9] = f, t[10] = h, t[11] = S, t[12] = n * I + l * x + c * D + a[12], 
            t[13] = o * I + M * x + f * D + a[13], t[14] = e * I + i * x + h * D + a[14], t[15] = u * I + s * x + S * D + a[15]), 
            t;
        }, o.SIMD.translate = function(t, a, r) {
            var n = SIMD.Float32x4.load(a, 0), o = SIMD.Float32x4.load(a, 4), e = SIMD.Float32x4.load(a, 8), u = SIMD.Float32x4.load(a, 12), l = SIMD.Float32x4(r[0], r[1], r[2], 0);
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], 
            t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11]), 
            n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(l, 0, 0, 0, 0)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(l, 1, 1, 1, 1)), 
            e = SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(l, 2, 2, 2, 2));
            var M = SIMD.Float32x4.add(n, SIMD.Float32x4.add(o, SIMD.Float32x4.add(e, u)));
            return SIMD.Float32x4.store(t, 12, M), t;
        }, o.translate = n.USE_SIMD ? o.SIMD.translate : o.scalar.translate, o.scalar.scale = function(t, a, r) {
            var n = r[0], o = r[1], e = r[2];
            return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * o, 
            t[5] = a[5] * o, t[6] = a[6] * o, t[7] = a[7] * o, t[8] = a[8] * e, t[9] = a[9] * e, 
            t[10] = a[10] * e, t[11] = a[11] * e, t[12] = a[12], t[13] = a[13], t[14] = a[14], 
            t[15] = a[15], t;
        }, o.SIMD.scale = function(t, a, r) {
            var n, o, e, u = SIMD.Float32x4(r[0], r[1], r[2], 0);
            return n = SIMD.Float32x4.load(a, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0))), 
            o = SIMD.Float32x4.load(a, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1))), 
            e = SIMD.Float32x4.load(a, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(e, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2))), 
            t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
        }, o.scale = n.USE_SIMD ? o.SIMD.scale : o.scalar.scale, o.rotate = function(t, a, r, o) {
            var e, u, l, M, i, s, c, f, h, S, I, x, D, m, F, d, v, b, p, w, z, A, E, P, L = o[0], q = o[1], R = o[2], y = Math.sqrt(L * L + q * q + R * R);
            return Math.abs(y) < n.EPSILON ? null : (y = 1 / y, L *= y, q *= y, R *= y, e = Math.sin(r), 
            u = Math.cos(r), l = 1 - u, M = a[0], i = a[1], s = a[2], c = a[3], f = a[4], h = a[5], 
            S = a[6], I = a[7], x = a[8], D = a[9], m = a[10], F = a[11], d = L * L * l + u, 
            v = q * L * l + R * e, b = R * L * l - q * e, p = L * q * l - R * e, w = q * q * l + u, 
            z = R * q * l + L * e, A = L * R * l + q * e, E = q * R * l - L * e, P = R * R * l + u, 
            t[0] = M * d + f * v + x * b, t[1] = i * d + h * v + D * b, t[2] = s * d + S * v + m * b, 
            t[3] = c * d + I * v + F * b, t[4] = M * p + f * w + x * z, t[5] = i * p + h * w + D * z, 
            t[6] = s * p + S * w + m * z, t[7] = c * p + I * w + F * z, t[8] = M * A + f * E + x * P, 
            t[9] = i * A + h * E + D * P, t[10] = s * A + S * E + m * P, t[11] = c * A + I * E + F * P, 
            a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t);
        }, o.scalar.rotateX = function(t, a, r) {
            var n = Math.sin(r), o = Math.cos(r), e = a[4], u = a[5], l = a[6], M = a[7], i = a[8], s = a[9], c = a[10], f = a[11];
            return a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[4] = e * o + i * n, t[5] = u * o + s * n, 
            t[6] = l * o + c * n, t[7] = M * o + f * n, t[8] = i * o - e * n, t[9] = s * o - u * n, 
            t[10] = c * o - l * n, t[11] = f * o - M * n, t;
        }, o.SIMD.rotateX = function(t, a, r) {
            var n = SIMD.Float32x4.splat(Math.sin(r)), o = SIMD.Float32x4.splat(Math.cos(r));
            a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var e = SIMD.Float32x4.load(a, 4), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(e, o), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, o), SIMD.Float32x4.mul(e, n))), 
            t;
        }, o.rotateX = n.USE_SIMD ? o.SIMD.rotateX : o.scalar.rotateX, o.scalar.rotateY = function(t, a, r) {
            var n = Math.sin(r), o = Math.cos(r), e = a[0], u = a[1], l = a[2], M = a[3], i = a[8], s = a[9], c = a[10], f = a[11];
            return a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = e * o - i * n, t[1] = u * o - s * n, 
            t[2] = l * o - c * n, t[3] = M * o - f * n, t[8] = e * n + i * o, t[9] = u * n + s * o, 
            t[10] = l * n + c * o, t[11] = M * n + f * o, t;
        }, o.SIMD.rotateY = function(t, a, r) {
            var n = SIMD.Float32x4.splat(Math.sin(r)), o = SIMD.Float32x4.splat(Math.cos(r));
            a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], 
            t[14] = a[14], t[15] = a[15]);
            var e = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, o), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(e, n), SIMD.Float32x4.mul(u, o))), 
            t;
        }, o.rotateY = n.USE_SIMD ? o.SIMD.rotateY : o.scalar.rotateY, o.scalar.rotateZ = function(t, a, r) {
            var n = Math.sin(r), o = Math.cos(r), e = a[0], u = a[1], l = a[2], M = a[3], i = a[4], s = a[5], c = a[6], f = a[7];
            return a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = e * o + i * n, t[1] = u * o + s * n, 
            t[2] = l * o + c * n, t[3] = M * o + f * n, t[4] = i * o - e * n, t[5] = s * o - u * n, 
            t[6] = c * o - l * n, t[7] = f * o - M * n, t;
        }, o.SIMD.rotateZ = function(t, a, r) {
            var n = SIMD.Float32x4.splat(Math.sin(r)), o = SIMD.Float32x4.splat(Math.cos(r));
            a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], 
            t[13] = a[13], t[14] = a[14], t[15] = a[15]);
            var e = SIMD.Float32x4.load(a, 0), u = SIMD.Float32x4.load(a, 4);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(e, o), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, o), SIMD.Float32x4.mul(e, n))), 
            t;
        }, o.rotateZ = n.USE_SIMD ? o.SIMD.rotateZ : o.scalar.rotateZ, o.fromTranslation = function(t, a) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], 
            t[15] = 1, t;
        }, o.fromScaling = function(t, a) {
            return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a[1], t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = a[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, 
            t[15] = 1, t;
        }, o.fromRotation = function(t, a, r) {
            var o, e, u, l = r[0], M = r[1], i = r[2], s = Math.sqrt(l * l + M * M + i * i);
            return Math.abs(s) < n.EPSILON ? null : (s = 1 / s, l *= s, M *= s, i *= s, o = Math.sin(a), 
            e = Math.cos(a), u = 1 - e, t[0] = l * l * u + e, t[1] = M * l * u + i * o, t[2] = i * l * u - M * o, 
            t[3] = 0, t[4] = l * M * u - i * o, t[5] = M * M * u + e, t[6] = i * M * u + l * o, 
            t[7] = 0, t[8] = l * i * u + M * o, t[9] = M * i * u - l * o, t[10] = i * i * u + e, 
            t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
        }, o.fromXRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, 
            t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.fromYRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.fromZRotation = function(t, a) {
            var r = Math.sin(a), n = Math.cos(a);
            return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, o.fromRotationTranslation = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3], l = n + n, M = o + o, i = e + e, s = n * l, c = n * M, f = n * i, h = o * M, S = o * i, I = e * i, x = u * l, D = u * M, m = u * i;
            return t[0] = 1 - (h + I), t[1] = c + m, t[2] = f - D, t[3] = 0, t[4] = c - m, t[5] = 1 - (s + I), 
            t[6] = S + x, t[7] = 0, t[8] = f + D, t[9] = S - x, t[10] = 1 - (s + h), t[11] = 0, 
            t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
        }, o.getTranslation = function(t, a) {
            return t[0] = a[12], t[1] = a[13], t[2] = a[14], t;
        }, o.getRotation = function(t, a) {
            var r = a[0] + a[5] + a[10], n = 0;
            return r > 0 ? (n = 2 * Math.sqrt(r + 1), t[3] = .25 * n, t[0] = (a[6] - a[9]) / n, 
            t[1] = (a[8] - a[2]) / n, t[2] = (a[1] - a[4]) / n) : a[0] > a[5] & a[0] > a[10] ? (n = 2 * Math.sqrt(1 + a[0] - a[5] - a[10]), 
            t[3] = (a[6] - a[9]) / n, t[0] = .25 * n, t[1] = (a[1] + a[4]) / n, t[2] = (a[8] + a[2]) / n) : a[5] > a[10] ? (n = 2 * Math.sqrt(1 + a[5] - a[0] - a[10]), 
            t[3] = (a[8] - a[2]) / n, t[0] = (a[1] + a[4]) / n, t[1] = .25 * n, t[2] = (a[6] + a[9]) / n) : (n = 2 * Math.sqrt(1 + a[10] - a[0] - a[5]), 
            t[3] = (a[1] - a[4]) / n, t[0] = (a[8] + a[2]) / n, t[1] = (a[6] + a[9]) / n, t[2] = .25 * n), 
            t;
        }, o.fromRotationTranslationScale = function(t, a, r, n) {
            var o = a[0], e = a[1], u = a[2], l = a[3], M = o + o, i = e + e, s = u + u, c = o * M, f = o * i, h = o * s, S = e * i, I = e * s, x = u * s, D = l * M, m = l * i, F = l * s, d = n[0], v = n[1], b = n[2];
            return t[0] = (1 - (S + x)) * d, t[1] = (f + F) * d, t[2] = (h - m) * d, t[3] = 0, 
            t[4] = (f - F) * v, t[5] = (1 - (c + x)) * v, t[6] = (I + D) * v, t[7] = 0, t[8] = (h + m) * b, 
            t[9] = (I - D) * b, t[10] = (1 - (c + S)) * b, t[11] = 0, t[12] = r[0], t[13] = r[1], 
            t[14] = r[2], t[15] = 1, t;
        }, o.fromRotationTranslationScaleOrigin = function(t, a, r, n, o) {
            var e = a[0], u = a[1], l = a[2], M = a[3], i = e + e, s = u + u, c = l + l, f = e * i, h = e * s, S = e * c, I = u * s, x = u * c, D = l * c, m = M * i, F = M * s, d = M * c, v = n[0], b = n[1], p = n[2], w = o[0], z = o[1], A = o[2];
            return t[0] = (1 - (I + D)) * v, t[1] = (h + d) * v, t[2] = (S - F) * v, t[3] = 0, 
            t[4] = (h - d) * b, t[5] = (1 - (f + D)) * b, t[6] = (x + m) * b, t[7] = 0, t[8] = (S + F) * p, 
            t[9] = (x - m) * p, t[10] = (1 - (f + I)) * p, t[11] = 0, t[12] = r[0] + w - (t[0] * w + t[4] * z + t[8] * A), 
            t[13] = r[1] + z - (t[1] * w + t[5] * z + t[9] * A), t[14] = r[2] + A - (t[2] * w + t[6] * z + t[10] * A), 
            t[15] = 1, t;
        }, o.fromQuat = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = r + r, l = n + n, M = o + o, i = r * u, s = n * u, c = n * l, f = o * u, h = o * l, S = o * M, I = e * u, x = e * l, D = e * M;
            return t[0] = 1 - c - S, t[1] = s + D, t[2] = f - x, t[3] = 0, t[4] = s - D, t[5] = 1 - i - S, 
            t[6] = h + I, t[7] = 0, t[8] = f + x, t[9] = h - I, t[10] = 1 - i - c, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, o.frustum = function(t, a, r, n, o, e, u) {
            var l = 1 / (r - a), M = 1 / (o - n), i = 1 / (e - u);
            return t[0] = 2 * e * l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * M, 
            t[6] = 0, t[7] = 0, t[8] = (r + a) * l, t[9] = (o + n) * M, t[10] = (u + e) * i, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * e * 2 * i, t[15] = 0, t;
        }, o.perspective = function(t, a, r, n, o) {
            var e = 1 / Math.tan(a / 2), u = 1 / (n - o);
            return t[0] = e / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (o + n) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * o * n * u, t[15] = 0, t;
        }, o.perspectiveFromFieldOfView = function(t, a, r, n) {
            var o = Math.tan(a.upDegrees * Math.PI / 180), e = Math.tan(a.downDegrees * Math.PI / 180), u = Math.tan(a.leftDegrees * Math.PI / 180), l = Math.tan(a.rightDegrees * Math.PI / 180), M = 2 / (u + l), i = 2 / (o + e);
            return t[0] = M, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = i, t[6] = 0, t[7] = 0, 
            t[8] = -((u - l) * M * .5), t[9] = (o - e) * i * .5, t[10] = n / (r - n), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = n * r / (r - n), t[15] = 0, t;
        }, o.ortho = function(t, a, r, n, o, e, u) {
            var l = 1 / (a - r), M = 1 / (n - o), i = 1 / (e - u);
            return t[0] = -2 * l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * M, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * i, t[11] = 0, t[12] = (a + r) * l, t[13] = (o + n) * M, 
            t[14] = (u + e) * i, t[15] = 1, t;
        }, o.lookAt = function(t, a, r, e) {
            var u, l, M, i, s, c, f, h, S, I, x = a[0], D = a[1], m = a[2], F = e[0], d = e[1], v = e[2], b = r[0], p = r[1], w = r[2];
            return Math.abs(x - b) < n.EPSILON && Math.abs(D - p) < n.EPSILON && Math.abs(m - w) < n.EPSILON ? o.identity(t) : (f = x - b, 
            h = D - p, S = m - w, I = 1 / Math.sqrt(f * f + h * h + S * S), f *= I, h *= I, 
            S *= I, u = d * S - v * h, l = v * f - F * S, M = F * h - d * f, I = Math.sqrt(u * u + l * l + M * M), 
            I ? (I = 1 / I, u *= I, l *= I, M *= I) : (u = 0, l = 0, M = 0), i = h * M - S * l, 
            s = S * u - f * M, c = f * l - h * u, I = Math.sqrt(i * i + s * s + c * c), I ? (I = 1 / I, 
            i *= I, s *= I, c *= I) : (i = 0, s = 0, c = 0), t[0] = u, t[1] = i, t[2] = f, t[3] = 0, 
            t[4] = l, t[5] = s, t[6] = h, t[7] = 0, t[8] = M, t[9] = c, t[10] = S, t[11] = 0, 
            t[12] = -(u * x + l * D + M * m), t[13] = -(i * x + s * D + c * m), t[14] = -(f * x + h * D + S * m), 
            t[15] = 1, t);
        }, o.str = function(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
        }, o.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
        }, o.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t[4] = a[4] + r[4], t[5] = a[5] + r[5], t[6] = a[6] + r[6], t[7] = a[7] + r[7], 
            t[8] = a[8] + r[8], t[9] = a[9] + r[9], t[10] = a[10] + r[10], t[11] = a[11] + r[11], 
            t[12] = a[12] + r[12], t[13] = a[13] + r[13], t[14] = a[14] + r[14], t[15] = a[15] + r[15], 
            t;
        }, o.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t[4] = a[4] - r[4], t[5] = a[5] - r[5], t[6] = a[6] - r[6], t[7] = a[7] - r[7], 
            t[8] = a[8] - r[8], t[9] = a[9] - r[9], t[10] = a[10] - r[10], t[11] = a[11] - r[11], 
            t[12] = a[12] - r[12], t[13] = a[13] - r[13], t[14] = a[14] - r[14], t[15] = a[15] - r[15], 
            t;
        }, o.sub = o.subtract, o.multiplyScalar = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * r, 
            t[5] = a[5] * r, t[6] = a[6] * r, t[7] = a[7] * r, t[8] = a[8] * r, t[9] = a[9] * r, 
            t[10] = a[10] * r, t[11] = a[11] * r, t[12] = a[12] * r, t[13] = a[13] * r, t[14] = a[14] * r, 
            t[15] = a[15] * r, t;
        }, o.multiplyScalarAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t[4] = a[4] + r[4] * n, t[5] = a[5] + r[5] * n, t[6] = a[6] + r[6] * n, t[7] = a[7] + r[7] * n, 
            t[8] = a[8] + r[8] * n, t[9] = a[9] + r[9] * n, t[10] = a[10] + r[10] * n, t[11] = a[11] + r[11] * n, 
            t[12] = a[12] + r[12] * n, t[13] = a[13] + r[13] * n, t[14] = a[14] + r[14] * n, 
            t[15] = a[15] + r[15] * n, t;
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8] && t[9] === a[9] && t[10] === a[10] && t[11] === a[11] && t[12] === a[12] && t[13] === a[13] && t[14] === a[14] && t[15] === a[15];
        }, o.equals = function(t, a) {
            var r = t[0], o = t[1], e = t[2], u = t[3], l = t[4], M = t[5], i = t[6], s = t[7], c = t[8], f = t[9], h = t[10], S = t[11], I = t[12], x = t[13], D = t[14], m = t[15], F = a[0], d = a[1], v = a[2], b = a[3], p = a[4], w = a[5], z = a[6], A = a[7], E = a[8], P = a[9], L = a[10], q = a[11], R = a[12], y = a[13], g = a[14], O = a[15];
            return Math.abs(r - F) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(F)) && Math.abs(o - d) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(e - v) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(u - b) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(b)) && Math.abs(l - p) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(p)) && Math.abs(M - w) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(w)) && Math.abs(i - z) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(z)) && Math.abs(s - A) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(A)) && Math.abs(c - E) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(E)) && Math.abs(f - P) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) && Math.abs(h - L) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(L)) && Math.abs(S - q) <= n.EPSILON * Math.max(1, Math.abs(S), Math.abs(q)) && Math.abs(I - R) <= n.EPSILON * Math.max(1, Math.abs(I), Math.abs(R)) && Math.abs(x - y) <= n.EPSILON * Math.max(1, Math.abs(x), Math.abs(y)) && Math.abs(D - g) <= n.EPSILON * Math.max(1, Math.abs(D), Math.abs(g)) && Math.abs(m - O) <= n.EPSILON * Math.max(1, Math.abs(m), Math.abs(O));
        }, t.exports = o;
    }, function(t, a, r) {
        var n = r(9), o = r(12), e = r(15), u = r(16), l = {};
        l.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, l.rotationTo = function() {
            var t = e.create(), a = e.fromValues(1, 0, 0), r = e.fromValues(0, 1, 0);
            return function(n, o, u) {
                var M = e.dot(o, u);
                return M < -.999999 ? (e.cross(t, a, o), e.length(t) < 1e-6 && e.cross(t, r, o), 
                e.normalize(t, t), l.setAxisAngle(n, t, Math.PI), n) : M > .999999 ? (n[0] = 0, 
                n[1] = 0, n[2] = 0, n[3] = 1, n) : (e.cross(t, o, u), n[0] = t[0], n[1] = t[1], 
                n[2] = t[2], n[3] = 1 + M, l.normalize(n, n));
            };
        }(), l.setAxes = function() {
            var t = o.create();
            return function(a, r, n, o) {
                return t[0] = n[0], t[3] = n[1], t[6] = n[2], t[1] = o[0], t[4] = o[1], t[7] = o[2], 
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
            var n = a[0], o = a[1], e = a[2], u = a[3], l = r[0], M = r[1], i = r[2], s = r[3];
            return t[0] = n * s + u * l + o * i - e * M, t[1] = o * s + u * M + e * l - n * i, 
            t[2] = e * s + u * i + n * M - o * l, t[3] = u * s - n * l - o * M - e * i, t;
        }, l.mul = l.multiply, l.scale = u.scale, l.rotateX = function(t, a, r) {
            r *= .5;
            var n = a[0], o = a[1], e = a[2], u = a[3], l = Math.sin(r), M = Math.cos(r);
            return t[0] = n * M + u * l, t[1] = o * M + e * l, t[2] = e * M - o * l, t[3] = u * M - n * l, 
            t;
        }, l.rotateY = function(t, a, r) {
            r *= .5;
            var n = a[0], o = a[1], e = a[2], u = a[3], l = Math.sin(r), M = Math.cos(r);
            return t[0] = n * M - e * l, t[1] = o * M + u * l, t[2] = e * M + n * l, t[3] = u * M - o * l, 
            t;
        }, l.rotateZ = function(t, a, r) {
            r *= .5;
            var n = a[0], o = a[1], e = a[2], u = a[3], l = Math.sin(r), M = Math.cos(r);
            return t[0] = n * M + o * l, t[1] = o * M - n * l, t[2] = e * M + u * l, t[3] = u * M - e * l, 
            t;
        }, l.calculateW = function(t, a) {
            var r = a[0], n = a[1], o = a[2];
            return t[0] = r, t[1] = n, t[2] = o, t[3] = Math.sqrt(Math.abs(1 - r * r - n * n - o * o)), 
            t;
        }, l.dot = u.dot, l.lerp = u.lerp, l.slerp = function(t, a, r, n) {
            var o, e, u, l, M, i = a[0], s = a[1], c = a[2], f = a[3], h = r[0], S = r[1], I = r[2], x = r[3];
            return e = i * h + s * S + c * I + f * x, e < 0 && (e = -e, h = -h, S = -S, I = -I, 
            x = -x), 1 - e > 1e-6 ? (o = Math.acos(e), u = Math.sin(o), l = Math.sin((1 - n) * o) / u, 
            M = Math.sin(n * o) / u) : (l = 1 - n, M = n), t[0] = l * i + M * h, t[1] = l * s + M * S, 
            t[2] = l * c + M * I, t[3] = l * f + M * x, t;
        }, l.sqlerp = function() {
            var t = l.create(), a = l.create();
            return function(r, n, o, e, u, M) {
                return l.slerp(t, n, u, M), l.slerp(a, o, e, M), l.slerp(r, t, a, 2 * M * (1 - M)), 
                r;
            };
        }(), l.invert = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = r * r + n * n + o * o + e * e, l = u ? 1 / u : 0;
            return t[0] = -r * l, t[1] = -n * l, t[2] = -o * l, t[3] = e * l, t;
        }, l.conjugate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = a[3], t;
        }, l.length = u.length, l.len = l.length, l.squaredLength = u.squaredLength, l.sqrLen = l.squaredLength, 
        l.normalize = u.normalize, l.fromMat3 = function(t, a) {
            var r, n = a[0] + a[4] + a[8];
            if (n > 0) r = Math.sqrt(n + 1), t[3] = .5 * r, r = .5 / r, t[0] = (a[5] - a[7]) * r, 
            t[1] = (a[6] - a[2]) * r, t[2] = (a[1] - a[3]) * r; else {
                var o = 0;
                a[4] > a[0] && (o = 1), a[8] > a[3 * o + o] && (o = 2);
                var e = (o + 1) % 3, u = (o + 2) % 3;
                r = Math.sqrt(a[3 * o + o] - a[3 * e + e] - a[3 * u + u] + 1), t[o] = .5 * r, r = .5 / r, 
                t[3] = (a[3 * e + u] - a[3 * u + e]) * r, t[e] = (a[3 * e + o] + a[3 * o + e]) * r, 
                t[u] = (a[3 * u + o] + a[3 * o + u]) * r;
            }
            return t;
        }, l.str = function(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, l.exactEquals = u.exactEquals, l.equals = u.equals, t.exports = l;
    }, function(t, a, r) {
        var n = r(9), o = {};
        o.create = function() {
            var t = new n.ARRAY_TYPE(3);
            return t[0] = 0, t[1] = 0, t[2] = 0, t;
        }, o.clone = function(t) {
            var a = new n.ARRAY_TYPE(3);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a;
        }, o.fromValues = function(t, a, r) {
            var o = new n.ARRAY_TYPE(3);
            return o[0] = t, o[1] = a, o[2] = r, o;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t;
        }, o.set = function(t, a, r, n) {
            return t[0] = a, t[1] = r, t[2] = n, t;
        }, o.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t;
        }, o.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t;
        }, o.sub = o.subtract, o.multiply = function(t, a, r) {
            return t[0] = a[0] * r[0], t[1] = a[1] * r[1], t[2] = a[2] * r[2], t;
        }, o.mul = o.multiply, o.divide = function(t, a, r) {
            return t[0] = a[0] / r[0], t[1] = a[1] / r[1], t[2] = a[2] / r[2], t;
        }, o.div = o.divide, o.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t;
        }, o.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), 
            t;
        }, o.min = function(t, a, r) {
            return t[0] = Math.min(a[0], r[0]), t[1] = Math.min(a[1], r[1]), t[2] = Math.min(a[2], r[2]), 
            t;
        }, o.max = function(t, a, r) {
            return t[0] = Math.max(a[0], r[0]), t[1] = Math.max(a[1], r[1]), t[2] = Math.max(a[2], r[2]), 
            t;
        }, o.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), 
            t;
        }, o.scale = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t;
        }, o.scaleAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t;
        }, o.distance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1], o = a[2] - t[2];
            return Math.sqrt(r * r + n * n + o * o);
        }, o.dist = o.distance, o.squaredDistance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1], o = a[2] - t[2];
            return r * r + n * n + o * o;
        }, o.sqrDist = o.squaredDistance, o.length = function(t) {
            var a = t[0], r = t[1], n = t[2];
            return Math.sqrt(a * a + r * r + n * n);
        }, o.len = o.length, o.squaredLength = function(t) {
            var a = t[0], r = t[1], n = t[2];
            return a * a + r * r + n * n;
        }, o.sqrLen = o.squaredLength, o.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t;
        }, o.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t;
        }, o.normalize = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = r * r + n * n + o * o;
            return e > 0 && (e = 1 / Math.sqrt(e), t[0] = a[0] * e, t[1] = a[1] * e, t[2] = a[2] * e), 
            t;
        }, o.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1] + t[2] * a[2];
        }, o.cross = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = r[0], l = r[1], M = r[2];
            return t[0] = o * M - e * l, t[1] = e * u - n * M, t[2] = n * l - o * u, t;
        }, o.lerp = function(t, a, r, n) {
            var o = a[0], e = a[1], u = a[2];
            return t[0] = o + n * (r[0] - o), t[1] = e + n * (r[1] - e), t[2] = u + n * (r[2] - u), 
            t;
        }, o.hermite = function(t, a, r, n, o, e) {
            var u = e * e, l = u * (2 * e - 3) + 1, M = u * (e - 2) + e, i = u * (e - 1), s = u * (3 - 2 * e);
            return t[0] = a[0] * l + r[0] * M + n[0] * i + o[0] * s, t[1] = a[1] * l + r[1] * M + n[1] * i + o[1] * s, 
            t[2] = a[2] * l + r[2] * M + n[2] * i + o[2] * s, t;
        }, o.bezier = function(t, a, r, n, o, e) {
            var u = 1 - e, l = u * u, M = e * e, i = l * u, s = 3 * e * l, c = 3 * M * u, f = M * e;
            return t[0] = a[0] * i + r[0] * s + n[0] * c + o[0] * f, t[1] = a[1] * i + r[1] * s + n[1] * c + o[1] * f, 
            t[2] = a[2] * i + r[2] * s + n[2] * c + o[2] * f, t;
        }, o.random = function(t, a) {
            a = a || 1;
            var r = 2 * n.RANDOM() * Math.PI, o = 2 * n.RANDOM() - 1, e = Math.sqrt(1 - o * o) * a;
            return t[0] = Math.cos(r) * e, t[1] = Math.sin(r) * e, t[2] = o * a, t;
        }, o.transformMat4 = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = r[3] * n + r[7] * o + r[11] * e + r[15];
            return u = u || 1, t[0] = (r[0] * n + r[4] * o + r[8] * e + r[12]) / u, t[1] = (r[1] * n + r[5] * o + r[9] * e + r[13]) / u, 
            t[2] = (r[2] * n + r[6] * o + r[10] * e + r[14]) / u, t;
        }, o.transformMat3 = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2];
            return t[0] = n * r[0] + o * r[3] + e * r[6], t[1] = n * r[1] + o * r[4] + e * r[7], 
            t[2] = n * r[2] + o * r[5] + e * r[8], t;
        }, o.transformQuat = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = r[0], l = r[1], M = r[2], i = r[3], s = i * n + l * e - M * o, c = i * o + M * n - u * e, f = i * e + u * o - l * n, h = -u * n - l * o - M * e;
            return t[0] = s * i + h * -u + c * -M - f * -l, t[1] = c * i + h * -l + f * -u - s * -M, 
            t[2] = f * i + h * -M + s * -l - c * -u, t;
        }, o.rotateX = function(t, a, r, n) {
            var o = [], e = [];
            return o[0] = a[0] - r[0], o[1] = a[1] - r[1], o[2] = a[2] - r[2], e[0] = o[0], 
            e[1] = o[1] * Math.cos(n) - o[2] * Math.sin(n), e[2] = o[1] * Math.sin(n) + o[2] * Math.cos(n), 
            t[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t;
        }, o.rotateY = function(t, a, r, n) {
            var o = [], e = [];
            return o[0] = a[0] - r[0], o[1] = a[1] - r[1], o[2] = a[2] - r[2], e[0] = o[2] * Math.sin(n) + o[0] * Math.cos(n), 
            e[1] = o[1], e[2] = o[2] * Math.cos(n) - o[0] * Math.sin(n), t[0] = e[0] + r[0], 
            t[1] = e[1] + r[1], t[2] = e[2] + r[2], t;
        }, o.rotateZ = function(t, a, r, n) {
            var o = [], e = [];
            return o[0] = a[0] - r[0], o[1] = a[1] - r[1], o[2] = a[2] - r[2], e[0] = o[0] * Math.cos(n) - o[1] * Math.sin(n), 
            e[1] = o[0] * Math.sin(n) + o[1] * Math.cos(n), e[2] = o[2], t[0] = e[0] + r[0], 
            t[1] = e[1] + r[1], t[2] = e[2] + r[2], t;
        }, o.forEach = function() {
            var t = o.create();
            return function(a, r, n, o, e, u) {
                var l, M;
                for (r || (r = 3), n || (n = 0), M = o ? Math.min(o * r + n, a.length) : a.length, 
                l = n; l < M; l += r) t[0] = a[l], t[1] = a[l + 1], t[2] = a[l + 2], e(t, t, u), 
                a[l] = t[0], a[l + 1] = t[1], a[l + 2] = t[2];
                return a;
            };
        }(), o.angle = function(t, a) {
            var r = o.fromValues(t[0], t[1], t[2]), n = o.fromValues(a[0], a[1], a[2]);
            o.normalize(r, r), o.normalize(n, n);
            var e = o.dot(r, n);
            return e > 1 ? 0 : Math.acos(e);
        }, o.str = function(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2];
        }, o.equals = function(t, a) {
            var r = t[0], o = t[1], e = t[2], u = a[0], l = a[1], M = a[2];
            return Math.abs(r - u) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(o - l) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(e - M) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(M));
        }, t.exports = o;
    }, function(t, a, r) {
        var n = r(9), o = {};
        o.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
        }, o.clone = function(t) {
            var a = new n.ARRAY_TYPE(4);
            return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a;
        }, o.fromValues = function(t, a, r, o) {
            var e = new n.ARRAY_TYPE(4);
            return e[0] = t, e[1] = a, e[2] = r, e[3] = o, e;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t;
        }, o.set = function(t, a, r, n, o) {
            return t[0] = a, t[1] = r, t[2] = n, t[3] = o, t;
        }, o.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], 
            t;
        }, o.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], 
            t;
        }, o.sub = o.subtract, o.multiply = function(t, a, r) {
            return t[0] = a[0] * r[0], t[1] = a[1] * r[1], t[2] = a[2] * r[2], t[3] = a[3] * r[3], 
            t;
        }, o.mul = o.multiply, o.divide = function(t, a, r) {
            return t[0] = a[0] / r[0], t[1] = a[1] / r[1], t[2] = a[2] / r[2], t[3] = a[3] / r[3], 
            t;
        }, o.div = o.divide, o.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t[3] = Math.ceil(a[3]), 
            t;
        }, o.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), 
            t[3] = Math.floor(a[3]), t;
        }, o.min = function(t, a, r) {
            return t[0] = Math.min(a[0], r[0]), t[1] = Math.min(a[1], r[1]), t[2] = Math.min(a[2], r[2]), 
            t[3] = Math.min(a[3], r[3]), t;
        }, o.max = function(t, a, r) {
            return t[0] = Math.max(a[0], r[0]), t[1] = Math.max(a[1], r[1]), t[2] = Math.max(a[2], r[2]), 
            t[3] = Math.max(a[3], r[3]), t;
        }, o.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), 
            t[3] = Math.round(a[3]), t;
        }, o.scale = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t;
        }, o.scaleAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, 
            t;
        }, o.distance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1], o = a[2] - t[2], e = a[3] - t[3];
            return Math.sqrt(r * r + n * n + o * o + e * e);
        }, o.dist = o.distance, o.squaredDistance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1], o = a[2] - t[2], e = a[3] - t[3];
            return r * r + n * n + o * o + e * e;
        }, o.sqrDist = o.squaredDistance, o.length = function(t) {
            var a = t[0], r = t[1], n = t[2], o = t[3];
            return Math.sqrt(a * a + r * r + n * n + o * o);
        }, o.len = o.length, o.squaredLength = function(t) {
            var a = t[0], r = t[1], n = t[2], o = t[3];
            return a * a + r * r + n * n + o * o;
        }, o.sqrLen = o.squaredLength, o.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = -a[3], t;
        }, o.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t[3] = 1 / a[3], t;
        }, o.normalize = function(t, a) {
            var r = a[0], n = a[1], o = a[2], e = a[3], u = r * r + n * n + o * o + e * e;
            return u > 0 && (u = 1 / Math.sqrt(u), t[0] = r * u, t[1] = n * u, t[2] = o * u, 
            t[3] = e * u), t;
        }, o.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1] + t[2] * a[2] + t[3] * a[3];
        }, o.lerp = function(t, a, r, n) {
            var o = a[0], e = a[1], u = a[2], l = a[3];
            return t[0] = o + n * (r[0] - o), t[1] = e + n * (r[1] - e), t[2] = u + n * (r[2] - u), 
            t[3] = l + n * (r[3] - l), t;
        }, o.random = function(t, a) {
            return a = a || 1, t[0] = n.RANDOM(), t[1] = n.RANDOM(), t[2] = n.RANDOM(), t[3] = n.RANDOM(), 
            o.normalize(t, t), o.scale(t, t, a), t;
        }, o.transformMat4 = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = a[3];
            return t[0] = r[0] * n + r[4] * o + r[8] * e + r[12] * u, t[1] = r[1] * n + r[5] * o + r[9] * e + r[13] * u, 
            t[2] = r[2] * n + r[6] * o + r[10] * e + r[14] * u, t[3] = r[3] * n + r[7] * o + r[11] * e + r[15] * u, 
            t;
        }, o.transformQuat = function(t, a, r) {
            var n = a[0], o = a[1], e = a[2], u = r[0], l = r[1], M = r[2], i = r[3], s = i * n + l * e - M * o, c = i * o + M * n - u * e, f = i * e + u * o - l * n, h = -u * n - l * o - M * e;
            return t[0] = s * i + h * -u + c * -M - f * -l, t[1] = c * i + h * -l + f * -u - s * -M, 
            t[2] = f * i + h * -M + s * -l - c * -u, t[3] = a[3], t;
        }, o.forEach = function() {
            var t = o.create();
            return function(a, r, n, o, e, u) {
                var l, M;
                for (r || (r = 4), n || (n = 0), M = o ? Math.min(o * r + n, a.length) : a.length, 
                l = n; l < M; l += r) t[0] = a[l], t[1] = a[l + 1], t[2] = a[l + 2], t[3] = a[l + 3], 
                e(t, t, u), a[l] = t[0], a[l + 1] = t[1], a[l + 2] = t[2], a[l + 3] = t[3];
                return a;
            };
        }(), o.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
        }, o.equals = function(t, a) {
            var r = t[0], o = t[1], e = t[2], u = t[3], l = a[0], M = a[1], i = a[2], s = a[3];
            return Math.abs(r - l) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(o - M) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(u - s) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(s));
        }, t.exports = o;
    }, function(t, a, r) {
        var n = r(9), o = {};
        o.create = function() {
            var t = new n.ARRAY_TYPE(2);
            return t[0] = 0, t[1] = 0, t;
        }, o.clone = function(t) {
            var a = new n.ARRAY_TYPE(2);
            return a[0] = t[0], a[1] = t[1], a;
        }, o.fromValues = function(t, a) {
            var r = new n.ARRAY_TYPE(2);
            return r[0] = t, r[1] = a, r;
        }, o.copy = function(t, a) {
            return t[0] = a[0], t[1] = a[1], t;
        }, o.set = function(t, a, r) {
            return t[0] = a, t[1] = r, t;
        }, o.add = function(t, a, r) {
            return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t;
        }, o.subtract = function(t, a, r) {
            return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t;
        }, o.sub = o.subtract, o.multiply = function(t, a, r) {
            return t[0] = a[0] * r[0], t[1] = a[1] * r[1], t;
        }, o.mul = o.multiply, o.divide = function(t, a, r) {
            return t[0] = a[0] / r[0], t[1] = a[1] / r[1], t;
        }, o.div = o.divide, o.ceil = function(t, a) {
            return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t;
        }, o.floor = function(t, a) {
            return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t;
        }, o.min = function(t, a, r) {
            return t[0] = Math.min(a[0], r[0]), t[1] = Math.min(a[1], r[1]), t;
        }, o.max = function(t, a, r) {
            return t[0] = Math.max(a[0], r[0]), t[1] = Math.max(a[1], r[1]), t;
        }, o.round = function(t, a) {
            return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t;
        }, o.scale = function(t, a, r) {
            return t[0] = a[0] * r, t[1] = a[1] * r, t;
        }, o.scaleAndAdd = function(t, a, r, n) {
            return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t;
        }, o.distance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1];
            return Math.sqrt(r * r + n * n);
        }, o.dist = o.distance, o.squaredDistance = function(t, a) {
            var r = a[0] - t[0], n = a[1] - t[1];
            return r * r + n * n;
        }, o.sqrDist = o.squaredDistance, o.length = function(t) {
            var a = t[0], r = t[1];
            return Math.sqrt(a * a + r * r);
        }, o.len = o.length, o.squaredLength = function(t) {
            var a = t[0], r = t[1];
            return a * a + r * r;
        }, o.sqrLen = o.squaredLength, o.negate = function(t, a) {
            return t[0] = -a[0], t[1] = -a[1], t;
        }, o.inverse = function(t, a) {
            return t[0] = 1 / a[0], t[1] = 1 / a[1], t;
        }, o.normalize = function(t, a) {
            var r = a[0], n = a[1], o = r * r + n * n;
            return o > 0 && (o = 1 / Math.sqrt(o), t[0] = a[0] * o, t[1] = a[1] * o), t;
        }, o.dot = function(t, a) {
            return t[0] * a[0] + t[1] * a[1];
        }, o.cross = function(t, a, r) {
            var n = a[0] * r[1] - a[1] * r[0];
            return t[0] = t[1] = 0, t[2] = n, t;
        }, o.lerp = function(t, a, r, n) {
            var o = a[0], e = a[1];
            return t[0] = o + n * (r[0] - o), t[1] = e + n * (r[1] - e), t;
        }, o.random = function(t, a) {
            a = a || 1;
            var r = 2 * n.RANDOM() * Math.PI;
            return t[0] = Math.cos(r) * a, t[1] = Math.sin(r) * a, t;
        }, o.transformMat2 = function(t, a, r) {
            var n = a[0], o = a[1];
            return t[0] = r[0] * n + r[2] * o, t[1] = r[1] * n + r[3] * o, t;
        }, o.transformMat2d = function(t, a, r) {
            var n = a[0], o = a[1];
            return t[0] = r[0] * n + r[2] * o + r[4], t[1] = r[1] * n + r[3] * o + r[5], t;
        }, o.transformMat3 = function(t, a, r) {
            var n = a[0], o = a[1];
            return t[0] = r[0] * n + r[3] * o + r[6], t[1] = r[1] * n + r[4] * o + r[7], t;
        }, o.transformMat4 = function(t, a, r) {
            var n = a[0], o = a[1];
            return t[0] = r[0] * n + r[4] * o + r[12], t[1] = r[1] * n + r[5] * o + r[13], t;
        }, o.forEach = function() {
            var t = o.create();
            return function(a, r, n, o, e, u) {
                var l, M;
                for (r || (r = 2), n || (n = 0), M = o ? Math.min(o * r + n, a.length) : a.length, 
                l = n; l < M; l += r) t[0] = a[l], t[1] = a[l + 1], e(t, t, u), a[l] = t[0], a[l + 1] = t[1];
                return a;
            };
        }(), o.str = function(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")";
        }, o.exactEquals = function(t, a) {
            return t[0] === a[0] && t[1] === a[1];
        }, o.equals = function(t, a) {
            var r = t[0], o = t[1], e = a[0], u = a[1];
            return Math.abs(r - e) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(o - u) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(u));
        }, t.exports = o;
    }, function(t, a, r) {
        "use strict";
        var n = r(8), o = n.vec3;
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
            scaleAndAdd: function(t, a, r) {
                return o.scaleAndAdd(o.create(), t, a, r);
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
    }, function(t, a, r) {
        "use strict";
        function n(t, a) {
            var r = -l.vec3.dot(t, a);
            return l.vec4.fromValues(t[0], t[1], t[2], r);
        }
        function o(t, a, r) {
            return n(e(t, a, r), t);
        }
        function e(t, a, r) {
            var n = l.fvec3.cross(l.fvec3.sub(r, a), l.fvec3.sub(t, a));
            return l.vec3.normalize(n, n);
        }
        function u(t) {
            var a = t, r = a[0], n = a[1], o = a[2], e = a[3];
            return l.mat4.fromValues(1 - 2 * r * r, -2 * r * n, -2 * r * o, -2 * r * e, -2 * n * r, 1 - 2 * n * n, -2 * n * o, -2 * n * e, -2 * o * r, -2 * o * n, 1 - 2 * o * o, -2 * o * e, 0, 0, 0, 1);
        }
        var l = r(7);
        a.planeFromNormalAndCoplanarPoint = n, a.planeFromThreeCoplanarPoints = o, a.normalFromThreeCoplanarPoints = e, 
        a.mirrorMatrixFromPlane = u;
    }, function(t, a, r) {
        "use strict";
        function n(t) {
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
            }, t), r = {
                view: e.mat4.create(),
                perspective: e.mat4.perspective(e.mat4.create(), a.fovy, a.aspect, a.near, a.far),
                rotationX: e.mat4.create(),
                rotationY: e.mat4.create(),
                position: [ 0, 0, 0 ]
            };
            return {
                props: a,
                state: r
            };
        }
        function o(t) {
            var a = t.props, r = t.state, n = r.view, o = r.perspective, u = r.rotationX, l = r.rotationY, M = r.position;
            a.needsUpdatePerspective && (a.needsUpdatePerspective = !1, e.mat4.perspective(o, a.fovy, a.aspect, a.near, a.far));
            var i = !1;
            if (a.rotateX && (e.mat4.rotateX(u, u, a.rotateX), a.rotateX = 0, i = !0), a.rotateY && (e.mat4.rotateY(l, l, a.rotateY), 
            a.rotateY = 0, i = !0), a.moveForward) {
                var s = [ l[8], l[9], l[10] ];
                e.vec3.add(M, M, e.vec3.scale(s, s, -a.moveForward)), a.moveForward = 0, i = !0;
            }
            if (a.moveLeft) {
                var s = [ l[0], l[1], l[2] ];
                e.vec3.add(M, M, e.vec3.scale(s, s, -a.moveLeft)), a.moveLeft = 0, i = !0;
            }
            if (a.moveUp) {
                var s = [ l[4], l[5], l[6] ];
                e.vec3.add(M, M, e.vec3.scale(s, s, a.moveUp)), a.moveUp = 0, i = !0;
            }
            i && (e.mat4.fromTranslation(n, M), e.mat4.multiply(n, n, l), e.mat4.multiply(n, n, u), 
            e.mat4.invert(n, n));
        }
        var e = r(7);
        a.create = n, a.update = o;
    } ]);
});