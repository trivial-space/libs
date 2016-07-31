!function(e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.tvsLibs = r() : e.tvsLibs = r();
}(this, function() {
    return function(e) {
        function r(o) {
            if (t[o]) return t[o].exports;
            var n = t[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(n.exports, n, n.exports, r), n.loaded = !0, n.exports;
        }
        var t = {};
        return r.m = e, r.c = t, r.p = "", r(0);
    }([ function(e, r, t) {
        "use strict";
        var o = t(1);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r["default"] = {
            geometry: {
                plane: o.plane
            }
        };
    }, function(e, r) {
        "use strict";
        function t(e, r, t, o) {
            var n, f, a = e / 2, u = r / 2, i = t || 1, s = o || 1, p = i + 1, l = s + 1, c = e / i, d = r / s, y = new Float32Array(p * l * 3), v = new Float32Array(p * l * 3), b = new Float32Array(p * l * 2), T = 0, x = 0;
            for (n = 0; n < l; n++) {
                var A = n * d - u;
                for (f = 0; f < p; f++) {
                    var m = f * c - a;
                    y[T] = m, y[T + 1] = -A, v[T + 2] = 1, b[x] = f / i, b[x + 1] = 1 - n / s, T += 3, 
                    x += 2;
                }
            }
            T = 0;
            var w = new (y.length / 3 > 65535 ? Uint32Array : Uint16Array)(i * s * 6);
            for (n = 0; n < s; n++) for (f = 0; f < i; f++) {
                var j = f + p * n, C = f + p * (n + 1), I = f + 1 + p * (n + 1), S = f + 1 + p * n;
                w[T] = j, w[T + 1] = C, w[T + 2] = S, w[T + 3] = C, w[T + 4] = I, w[T + 5] = S, 
                T += 6;
            }
            return {
                attribs: {
                    position: {
                        buffer: y,
                        storeType: "STATIC"
                    },
                    normal: {
                        buffer: v,
                        storeType: "STATIC"
                    },
                    uv: {
                        buffer: b,
                        storeType: "STATIC"
                    }
                },
                elements: {
                    buffer: w
                },
                drawType: "TRIANGLES",
                itemCount: w.length
            };
        }
        r.plane = t;
    } ]);
});