!function(r, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.tvsLibs = n() : r.tvsLibs = n();
}(this, function() {
    return function(r) {
        function n(a) {
            if (t[a]) return t[a].exports;
            var e = t[a] = {
                exports: {},
                id: a,
                loaded: !1
            };
            return r[a].call(e.exports, e, e.exports, n), e.loaded = !0, e.exports;
        }
        var t = {};
        return n.m = r, n.c = t, n.p = "", n(0);
    }([ function(r, n, t) {
        "use strict";
        var a = t(1), e = t(2), o = t(3), i = t(4), u = t(6), f = t(5);
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = {
            flow: {
                sources: {
                    animation: a,
                    dom: e
                }
            },
            math: {
                core: o,
                noise: u,
                polar: i,
                vectors: f
            }
        };
    }, function(r, n) {
        "use strict";
        function t(r) {
            function n() {
                a && (t = Date.now(), r(t - e), e = t, requestAnimationFrame(n));
            }
            var t, a = !0, e = Date.now();
            return n(), function() {
                a = !1;
            };
        }
        function a(r) {
            function n() {
                t && (r(), requestAnimationFrame(n));
            }
            var t = !0;
            return n(), function() {
                t = !1;
            };
        }
        n.fpsAnimation = t, n.animation = a;
    }, function(r, n) {
        "use strict";
        function t(r) {
            function n() {
                r({
                    width: window.innerWidth,
                    heigth: window.innerHeight
                });
            }
            return window.addEventListener("resize", n), n(), function() {
                window.removeEventListener("resize", n);
            };
        }
        n.windowSize = t;
    }, function(r, n) {
        "use strict";
        function t(r) {
            return r > 0 ? 1 : r < 0 ? -1 : 0;
        }
        function a(r, n, t) {
            return r + t * (n - r);
        }
        function e(r, n, t) {
            return Math.max(n, Math.min(r, t));
        }
        function o(r) {
            return Math.floor(Math.random() * r);
        }
        function i(r, n) {
            return o(n - r) + r;
        }
        function u() {
            return 2 * Math.random() - 1 + (2 * Math.random() - 1) + (2 * Math.random() - 1);
        }
        function f(r) {
            return r * n.DEG_TO_RAD_FACTOR;
        }
        n.DEG_TO_RAD_FACTOR = Math.PI / 180, n.sign = t, n.lerp = a, n.clamp = e, n.randInt = o, 
        n.randIntInRange = i, n.normalRand = u, n.degToRad = f;
    }, function(r, n, t) {
        "use strict";
        function a(r) {
            return [ o.length(r), Math.atan2(r[1], r[0]) ];
        }
        function e(r) {
            var n = r[0], t = r[1];
            return [ n * Math.cos(t), n * Math.sin(t) ];
        }
        var o = t(5);
        n.cartesianToPolar2D = a, n.polarToCartesian2D = e;
    }, function(r, n) {
        "use strict";
        function t(r, n) {
            var t = [];
            for (var a in r) t.push(r[a] + n[a]);
            return t;
        }
        function a(r, n) {
            var t = [];
            for (var a in r) t.push(r[a] + n);
            return t;
        }
        function e(r, n) {
            var t = [];
            for (var a in r) t.push(r[a] - n[a]);
            return t;
        }
        function o(r, n) {
            var t = [];
            for (var a in r) t.push(r[a] - n);
            return t;
        }
        function i(r, n) {
            var t = [];
            for (var a in r) t.push(r[a] * n);
            return t;
        }
        function u(r, n) {
            if (n) {
                var t = [];
                for (var a in r) t.push(r[a] / n);
                return t;
            }
        }
        function f(r) {
            var n = 0;
            for (var t in r) {
                var a = r[t];
                n += a * a;
            }
            return Math.sqrt(n);
        }
        function s(r) {
            return u(r, f(r));
        }
        function c(r, n) {
            return n < f(r) ? i(s(r), n) : r;
        }
        function v(r, n) {
            if (r.length != n.length) return !1;
            for (var t in r) if (r[t] !== n[t]) return !1;
            return !0;
        }
        n.add = t, n.addScalar = a, n.sub = e, n.subScalar = o, n.mul = i, n.div = u, n.length = f, 
        n.normalize = s, n.limit = c, n.isEqual = v;
    }, function(r, n) {
        "use strict";
        function t(r) {
            return r * r * r * (r * (6 * r - 15) + 10);
        }
        function a(r, n, t) {
            return n + r * (t - n);
        }
        function e(r, n) {
            return 0 === (1 & r) ? n : -n;
        }
        function o(r) {
            var n, o, i;
            return o = ~~r, n = 255 & o, r -= o, i = t(r), a(i, e(h[n], r), e(h[n + 1], r - 1));
        }
        function i(r, n) {
            var t, a, e = 0, o = 0, i = 0, u = (r + n) * l, f = Math.floor(r + u), s = Math.floor(n + u), c = (f + s) * d, v = f - c, h = s - c, M = r - v, p = n - h;
            M > p ? (t = 1, a = 0) : (t = 0, a = 1);
            var m = M - t + d, w = p - a + d, A = M - 1 + 2 * d, y = p - 1 + 2 * d, g = 255 & f, b = 255 & s, q = .5 - M * M - p * p;
            if (q >= 0) {
                var D = 3 * P[g + I[b]];
                q *= q, e = q * q * (x[D] * M + x[D + 1] * p);
            }
            var _ = .5 - m * m - w * w;
            if (_ >= 0) {
                var R = 3 * P[g + t + I[b + a]];
                _ *= _, o = _ * _ * (x[R] * m + x[R + 1] * w);
            }
            var T = .5 - A * A - y * y;
            if (T >= 0) {
                var F = 3 * P[g + 1 + I[b + 1]];
                T *= T, i = T * T * (x[F] * A + x[F + 1] * y);
            }
            return 70 * (e + o + i);
        }
        function u(r, n, t) {
            var a, e, o, i, u, f, s, c, v, h, l = (r + n + t) * M, d = Math.floor(r + l), m = Math.floor(n + l), w = Math.floor(t + l), A = (d + m + w) * p, y = d - A, g = m - A, b = w - A, q = r - y, D = n - g, _ = t - b;
            q >= D ? D >= _ ? (u = 1, f = 0, s = 0, c = 1, v = 1, h = 0) : q >= _ ? (u = 1, 
            f = 0, s = 0, c = 1, v = 0, h = 1) : (u = 0, f = 0, s = 1, c = 1, v = 0, h = 1) : D < _ ? (u = 0, 
            f = 0, s = 1, c = 0, v = 1, h = 1) : q < _ ? (u = 0, f = 1, s = 0, c = 0, v = 1, 
            h = 1) : (u = 0, f = 1, s = 0, c = 1, v = 1, h = 0);
            var R = q - u + p, T = D - f + p, F = _ - s + p, E = q - c + 2 * p, O = D - v + 2 * p, j = _ - h + 2 * p, z = q - 1 + 3 * p, L = D - 1 + 3 * p, C = _ - 1 + 3 * p, S = 255 & d, U = 255 & m, G = 255 & w, H = .6 - q * q - D * D - _ * _;
            if (H < 0) a = 0; else {
                var N = 3 * P[S + I[U + I[G]]];
                H *= H, a = H * H * (x[N] * q + x[N + 1] * D + x[N + 2] * _);
            }
            var W = .6 - R * R - T * T - F * F;
            if (W < 0) e = 0; else {
                var k = 3 * P[S + u + I[U + f + I[G + s]]];
                W *= W, e = W * W * (x[k] * R + x[k + 1] * T + x[k + 2] * F);
            }
            var B = .6 - E * E - O * O - j * j;
            if (B < 0) o = 0; else {
                var J = 3 * P[S + c + I[U + v + I[G + h]]];
                B *= B, o = B * B * (x[J] * E + x[J + 1] * O + x[J + 2] * j);
            }
            var K = .6 - z * z - L * L - C * C;
            if (K < 0) i = 0; else {
                var Q = 3 * P[S + 1 + I[U + 1 + I[G + 1]]];
                K *= K, i = K * K * (x[Q] * z + x[Q + 1] * L + x[Q + 2] * C);
            }
            return 32 * (a + e + o + i);
        }
        function f(r, n, t, a) {
            var e, o, i, u, f, s = (r + n + t + a) * m, c = Math.floor(r + s), v = Math.floor(n + s), h = Math.floor(t + s), l = Math.floor(a + s), d = (c + v + h + l) * w, M = c - d, p = v - d, A = h - d, P = l - d, x = r - M, g = n - p, b = t - A, q = a - P, D = 0, _ = 0, R = 0, T = 0;
            x > g ? D++ : _++, x > b ? D++ : R++, x > q ? D++ : T++, g > b ? _++ : R++, g > q ? _++ : T++, 
            b > q ? R++ : T++;
            var F, E, O, j, z, L, C, S, U, G, H, N;
            F = D >= 3 ? 1 : 0, E = _ >= 3 ? 1 : 0, O = R >= 3 ? 1 : 0, j = T >= 3 ? 1 : 0, 
            z = D >= 2 ? 1 : 0, L = _ >= 2 ? 1 : 0, C = R >= 2 ? 1 : 0, S = T >= 2 ? 1 : 0, 
            U = D >= 1 ? 1 : 0, G = _ >= 1 ? 1 : 0, H = R >= 1 ? 1 : 0, N = T >= 1 ? 1 : 0;
            var W = x - F + w, k = g - E + w, B = b - O + w, J = q - j + w, K = x - z + 2 * w, Q = g - L + 2 * w, V = b - C + 2 * w, X = q - S + 2 * w, Y = x - U + 3 * w, Z = g - G + 3 * w, $ = b - H + 3 * w, rr = q - N + 3 * w, nr = x - 1 + 4 * w, tr = g - 1 + 4 * w, ar = b - 1 + 4 * w, er = q - 1 + 4 * w, or = 255 & c, ir = 255 & v, ur = 255 & h, fr = 255 & l, sr = .6 - x * x - g * g - b * b - q * q;
            if (sr < 0) e = 0; else {
                var cr = I[or + I[ir + I[ur + I[fr]]]] % 32 * 4;
                sr *= sr, e = sr * sr * (y[cr] * x + y[cr + 1] * g + y[cr + 2] * b + y[cr + 3] * q);
            }
            var vr = .6 - W * W - k * k - B * B - J * J;
            if (vr < 0) o = 0; else {
                var hr = I[or + F + I[ir + E + I[ur + O + I[fr + j]]]] % 32 * 4;
                vr *= vr, o = vr * vr * (y[hr] * W + y[hr + 1] * k + y[hr + 2] * B + y[hr + 3] * J);
            }
            var lr = .6 - K * K - Q * Q - V * V - X * X;
            if (lr < 0) i = 0; else {
                var dr = I[or + z + I[ir + L + I[ur + C + I[fr + S]]]] % 32 * 4;
                lr *= lr, i = lr * lr * (y[dr] * K + y[dr + 1] * Q + y[dr + 2] * V + y[dr + 3] * X);
            }
            var Mr = .6 - Y * Y - Z * Z - $ * $ - rr * rr;
            if (Mr < 0) u = 0; else {
                var pr = I[or + U + I[ir + G + I[ur + H + I[fr + N]]]] % 32 * 4;
                Mr *= Mr, u = Mr * Mr * (y[pr] * Y + y[pr + 1] * Z + y[pr + 2] * $ + y[pr + 3] * rr);
            }
            var mr = .6 - nr * nr - tr * tr - ar * ar - er * er;
            if (mr < 0) f = 0; else {
                var wr = I[or + 1 + I[ir + 1 + I[ur + 1 + I[fr + 1]]]] % 32 * 4;
                mr *= mr, f = mr * mr * (y[wr] * nr + y[wr + 1] * tr + y[wr + 2] * ar + y[wr + 3] * er);
            }
            return 27 * (e + o + i + u + f);
        }
        function s(r, n, t, a) {
            for (var e = [], o = 0; o < n; o++) for (var i = 0; i < r; i++) {
                var u = i / r, s = o / n, c = Math.cos(2 * u * Math.PI) * t / (2 * Math.PI), v = Math.cos(2 * s * Math.PI) * a / (2 * Math.PI), h = Math.sin(2 * u * Math.PI) * t / (2 * Math.PI), l = Math.sin(2 * s * Math.PI) * a / (2 * Math.PI);
                e.push(f(c, v, h, l));
            }
            return e;
        }
        var c, v, h = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (c = v = 0; v <= 256; c = ++v) h[256 + c] = h[c];
        n.noise1d = o;
        var l = .5 * (Math.sqrt(3) - 1), d = (3 - Math.sqrt(3)) / 6, M = 1 / 3, p = 1 / 6, m = (Math.sqrt(5) - 1) / 4, w = (5 - Math.sqrt(5)) / 20, A = new Uint8Array(256), I = new Uint8Array(512), P = new Uint8Array(512);
        for (c = 0; c < 256; c++) A[c] = 256 * Math.random();
        for (c = 0; c < 512; c++) I[c] = A[255 & c], P[c] = I[c] % 12;
        var x = new Float32Array([ 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1 ]), y = new Float32Array([ 0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0 ]);
        n.noise2d = i, n.noise3d = u, n.noise4d = f, n.tileNoise = s;
    } ]);
});