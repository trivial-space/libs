!function(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.tvsLibs = n() : e.tvsLibs = n();
}(this, function() {
    return function(e) {
        function n(i) {
            if (t[i]) return t[i].exports;
            var o = t[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports;
        }
        var t = {};
        return n.m = e, n.c = t, n.p = "", n(0);
    }([ function(e, n, t) {
        "use strict";
        var i = t(1), o = t(2);
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = {
            flow: {
                sources: {
                    animation: i,
                    dom: o
                }
            }
        };
    }, function(e, n) {
        "use strict";
        function t(e) {
            function n() {
                i && (t = Date.now(), e(t - o), o = t, requestAnimationFrame(n));
            }
            var t, i = !0, o = Date.now();
            return n(), function() {
                i = !1;
            };
        }
        function i(e) {
            function n() {
                t && (e(), requestAnimationFrame(n));
            }
            var t = !0;
            return n(), function() {
                t = !1;
            };
        }
        n.fpsAnimation = t, n.animation = i;
    }, function(e, n) {
        "use strict";
        function t(e) {
            function n() {
                e({
                    width: window.innerWidth,
                    heigth: window.innerHeight
                });
            }
            return window.addEventListener("resize", n), n(), function() {
                window.removeEventListener("resize", n);
            };
        }
        n.windowSize = t;
    } ]);
});