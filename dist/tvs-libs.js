!function(t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.tvsLibs = r() : t.tvsLibs = r();
}(this, function() {
    return function(t) {
        function r(n) {
            if (e[n]) return e[n].exports;
            var a = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
        }
        var e = {};
        return r.m = t, r.c = e, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: n
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
        }, r.p = "", r(r.s = 16);
    }([ function(t, r) {
        var e = {};
        e.EPSILON = 1e-6, e.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, 
        e.RANDOM = Math.random, e.ENABLE_SIMD = !1, e.SIMD_AVAILABLE = e.ARRAY_TYPE === Float32Array && "SIMD" in this, 
        e.USE_SIMD = e.ENABLE_SIMD && e.SIMD_AVAILABLE, e.setMatrixArrayType = function(t) {
            e.ARRAY_TYPE = t;
        };
        var n = Math.PI / 180;
        e.toRadian = function(t) {
            return t * n;
        }, e.equals = function(t, r) {
            return Math.abs(t - r) <= e.EPSILON * Math.max(1, Math.abs(t), Math.abs(r));
        }, t.exports = e;
    }, function(t, r, e) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e(6);
        e.n(n);
        for (var a in n) "default" !== a && function(t) {
            e.d(r, t, function() {
                return n[t];
            });
        }(a);
        var o = e(23);
        e.d(r, "fvec3", function() {
            return o.a;
        });
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return k[t].bindPoint;
        }
        function a(t, r) {
            return function(e) {
                t.uniform1f(r, e);
            };
        }
        function o(t, r) {
            return function(e) {
                t.uniform1fv(r, e);
            };
        }
        function u(t, r) {
            return function(e) {
                t.uniform2fv(r, e);
            };
        }
        function i(t, r) {
            return function(e) {
                t.uniform3fv(r, e);
            };
        }
        function s(t, r) {
            return function(e) {
                t.uniform4fv(r, e);
            };
        }
        function c(t, r) {
            return function(e) {
                t.uniform1i(r, e);
            };
        }
        function l(t, r) {
            return function(e) {
                t.uniform1iv(r, e);
            };
        }
        function f(t, r) {
            return function(e) {
                t.uniform2iv(r, e);
            };
        }
        function M(t, r) {
            return function(e) {
                t.uniform3iv(r, e);
            };
        }
        function d(t, r) {
            return function(e) {
                t.uniform4iv(r, e);
            };
        }
        function h(t, r) {
            return function(e) {
                t.uniform1ui(r, e);
            };
        }
        function S(t, r) {
            return function(e) {
                t.uniform1uiv(r, e);
            };
        }
        function m(t, r) {
            return function(e) {
                t.uniform2uiv(r, e);
            };
        }
        function v(t, r) {
            return function(e) {
                t.uniform3uiv(r, e);
            };
        }
        function I(t, r) {
            return function(e) {
                t.uniform4uiv(r, e);
            };
        }
        function D(t, r) {
            return function(e) {
                t.uniformMatrix2fv(r, !1, e);
            };
        }
        function F(t, r) {
            return function(e) {
                t.uniformMatrix3fv(r, !1, e);
            };
        }
        function x(t, r) {
            return function(e) {
                t.uniformMatrix4fv(r, !1, e);
            };
        }
        function E(t, r) {
            return function(e) {
                t.uniformMatrix2x3fv(r, !1, e);
            };
        }
        function p(t, r) {
            return function(e) {
                t.uniformMatrix3x2fv(r, !1, e);
            };
        }
        function T(t, r) {
            return function(e) {
                t.uniformMatrix2x4fv(r, !1, e);
            };
        }
        function _(t, r) {
            return function(e) {
                t.uniformMatrix4x2fv(r, !1, e);
            };
        }
        function A(t, r) {
            return function(e) {
                t.uniformMatrix3x4fv(r, !1, e);
            };
        }
        function b(t, r) {
            return function(e) {
                t.uniformMatrix4x3fv(r, !1, e);
            };
        }
        function y(t, r, e, a) {
            var o = n(r);
            return function(r) {
                t.uniform1i(a, e), t.activeTexture(t.TEXTURE0 + e), t.bindTexture(o, r);
            };
        }
        function g(t, r, e, a, o) {
            for (var u = n(r), i = new Int32Array(o), s = 0; s < o; ++s) i[s] = e + s;
            return function(r) {
                t.uniform1iv(a, i);
                for (var e in r) t.activeTexture(t.TEXTURE0 + i[e]), t.bindTexture(u, r[e]);
            };
        }
        function R(t) {
            return null === t.Type;
        }
        function w(t, r, e) {
            return function(n) {
                t.bindBuffer(t.ARRAY_BUFFER, n.buffer), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, e.itemSize, V.c.FLOAT, n.normalize || !1, n.stride || 0, n.offset || 0);
            };
        }
        function N(t, r, e) {
            return function(n) {
                t.bindBuffer(t.ARRAY_BUFFER, n.buffer), t.enableVertexAttribArray(r), t.vertexAttribIPointer(r, e.itemSize, V.c.INT, n.stride || 0, n.offset || 0);
            };
        }
        function O(t, r, e) {
            var n = e.size, a = e.count;
            return function(e) {
                t.bindBuffer(t.ARRAY_BUFFER, e.buffer);
                for (var o = n, u = o / a, i = k[V.c.FLOAT], s = i.size * o, c = e.normalize || !1, l = e.offset || 0, f = s / a, M = 0; M < a; ++M) t.enableVertexAttribArray(r + M), 
                t.vertexAttribPointer(r + M, u, V.c.FLOAT, c, s, l + f * M);
            };
        }
        function P(t, r) {
            for (var e = 0, n = {}, a = t.getProgramParameter(r, t.ACTIVE_UNIFORMS), o = 0; o < a; ++o) {
                var u = t.getActiveUniform(r, o);
                if (!u) break;
                var i = u.name;
                if ("[0]" === i.substr(-3) && (i = i.substr(0, i.length - 3)), r) {
                    var s = function(r, n) {
                        var a = t.getUniformLocation(r, n.name), o = n.size > 1 && "[0]" === n.name.substr(-3), u = n.type, i = k[u];
                        if (!i) throw "unknown type: 0x" + u.toString(16);
                        if (null != a) {
                            var s;
                            if (R(i)) {
                                var c = e;
                                e += n.size, s = o ? i.arraySetter(t, u, c, a, n.size) : i.setter(t, u, c, a);
                            } else s = i.arraySetter && o ? i.arraySetter(t, a) : i.setter(t, a);
                            return {
                                setter: s,
                                location: a
                            };
                        }
                    }(r, u);
                    s && (n[i] = s);
                }
            }
            return n;
        }
        function L(t, r) {
            for (var e = {}, n = t.getProgramParameter(r, t.ACTIVE_ATTRIBUTES), a = 0; a < n; a++) {
                var o = t.getActiveAttrib(r, a);
                if (!o) break;
                var u = t.getAttribLocation(r, o.name), i = j[o.type], s = i.setter(t, u, i);
                e[o.name] = {
                    setter: s,
                    location: u
                };
            }
            return e;
        }
        function z(t) {
            if (t instanceof Int8Array) return V.c.BYTE;
            if (t instanceof Uint8Array) return V.c.UNSIGNED_BYTE;
            if (t instanceof Uint8ClampedArray) return V.c.UNSIGNED_BYTE;
            if (t instanceof Int16Array) return V.c.SHORT;
            if (t instanceof Uint16Array) return V.c.UNSIGNED_SHORT;
            if (t instanceof Int32Array) return V.c.INT;
            if (t instanceof Uint32Array) return V.c.UNSIGNED_INT;
            if (t instanceof Float32Array) return V.c.FLOAT;
            throw "unsupported typed array type";
        }
        function U(t, r, e) {
            if (void 0 === r && (r = {}), void 0 === e && (e = {}), null != r.flipY && r.flipY !== e.flipY && t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY), 
            r.wrap && r.wrap !== e.wrap || r.wrapS && r.wrapS !== e.wrapS || r.wrapT && r.wrapT !== e.wrapT) {
                var n = void 0, a = void 0;
                r.wrap ? n = a = r.wrap : (a = r.wrapT || "CLAMP_TO_EDGE", n = r.wrapS || "CLAMP_TO_EDGE"), 
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t[n]), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t[a]);
            }
            r.magFilter && r.magFilter !== e.magFilter && t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t[r.magFilter]), 
            r.minFilter && r.minFilter !== e.minFilter && t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t[r.minFilter]);
        }
        function C(t, r, e, n) {
            if (null != r.width && null != r.height) {
                null == r.frameBuffer && (r.frameBuffer = t.createFramebuffer()), r.textures || (r.textures = []), 
                t.bindFramebuffer(t.FRAMEBUFFER, r.frameBuffer), r.textureConfig.type === t.FLOAT && t.getExtension("OES_texture_float");
                var a = r.textureConfig.count;
                if (a > 1) {
                    for (var o = t.getExtension("WEBGL_draw_buffers"), u = [], i = 0; i < a; i++) u.push(o["COLOR_ATTACHMENT" + i + "_WEBGL"]);
                    o.drawBuffersWEBGL(u);
                    for (var i = 0; i < a; i++) {
                        null == r.textures[i] && (r.textures[i] = t.createTexture());
                        var s = r.textures[i];
                        t.bindTexture(t.TEXTURE_2D, s), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, r.width, r.height, 0, t.RGBA, r.textureConfig.type, null), 
                        U(t, e, n), t.framebufferTexture2D(t.FRAMEBUFFER, u[i], t.TEXTURE_2D, s, 0);
                    }
                } else {
                    null == r.textures[0] && (r.textures[0] = t.createTexture());
                    var s = r.textures[0];
                    t.bindTexture(t.TEXTURE_2D, s), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, r.width, r.height, 0, t.RGBA, r.textureConfig.type, null), 
                    U(t, e, n), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, s, 0);
                }
                null == r.depthBuffer && (r.depthBuffer = t.createRenderbuffer()), t.bindRenderbuffer(t.RENDERBUFFER, r.depthBuffer), 
                t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, r.width, r.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, r.depthBuffer);
                var c = t.checkFramebufferStatus(t.FRAMEBUFFER);
                c !== t.FRAMEBUFFER_COMPLETE && console.error("framebuffer error", c, e), t.bindFramebuffer(t.FRAMEBUFFER, null), 
                t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null);
            }
        }
        function B(t, r) {
            t.deleteFramebuffer(r.frameBuffer), t.deleteRenderbuffer(r.depthBuffer);
            for (var e = 0, n = r.textures; e < n.length; e++) {
                var a = n[e];
                t.deleteTexture(a);
            }
        }
        function Y(t, r) {
            if (r.enable) for (var e = 0, n = r.enable; e < n.length; e++) {
                var a = n[e];
                t.enable(a);
            }
            if (r.disable) for (var o = 0, u = r.disable; o < u.length; o++) {
                var a = u[o];
                t.disable(a);
            }
            r.blendFunc && t.blendFunc.apply(t, r.blendFunc), null != r.depthFunc && t.depthFunc(r.depthFunc), 
            null != r.cullFace && t.cullFace(r.cullFace), null != r.frontFace && t.frontFace(r.frontFace), 
            null != r.lineWidth && t.lineWidth(r.lineWidth), r.colorMask && t.colorMask.apply(t, r.colorMask), 
            null != r.depthMask && t.depthMask(r.depthMask), r.clearColor && t.clearColor.apply(t, r.clearColor), 
            null != r.clearDepth && t.clearDepth(r.clearDepth), null != r.clearBits && t.clear(r.clearBits);
        }
        function q(t, r) {
            if (r.enable) for (var e = 0, n = r.enable; e < n.length; e++) {
                var a = n[e];
                t.disable(a);
            }
            if (r.disable) for (var o = 0, u = r.disable; o < u.length; o++) {
                var a = u[o];
                t.enable(a);
            }
        }
        r.c = P, r.b = L, r.e = z, r.g = U, r.h = C, r.d = B, r.a = Y, r.f = q;
        var G, X, H, V = e(13), k = (G = {}, G[V.c.FLOAT] = {
            Type: Float32Array,
            size: 4,
            setter: a,
            arraySetter: o
        }, G[V.c.FLOAT_VEC2] = {
            Type: Float32Array,
            size: 8,
            setter: u
        }, G[V.c.FLOAT_VEC3] = {
            Type: Float32Array,
            size: 12,
            setter: i
        }, G[V.c.FLOAT_VEC4] = {
            Type: Float32Array,
            size: 16,
            setter: s
        }, G[V.c.INT] = {
            Type: Int32Array,
            size: 4,
            setter: c,
            arraySetter: l
        }, G[V.c.INT_VEC2] = {
            Type: Int32Array,
            size: 8,
            setter: f
        }, G[V.c.INT_VEC3] = {
            Type: Int32Array,
            size: 12,
            setter: M
        }, G[V.c.INT_VEC4] = {
            Type: Int32Array,
            size: 16,
            setter: d
        }, G[V.c.UNSIGNED_INT] = {
            Type: Uint32Array,
            size: 4,
            setter: h,
            arraySetter: S
        }, G[V.c.UNSIGNED_INT_VEC2] = {
            Type: Uint32Array,
            size: 8,
            setter: m
        }, G[V.c.UNSIGNED_INT_VEC3] = {
            Type: Uint32Array,
            size: 12,
            setter: v
        }, G[V.c.UNSIGNED_INT_VEC4] = {
            Type: Uint32Array,
            size: 16,
            setter: I
        }, G[V.c.BOOL] = {
            Type: Uint32Array,
            size: 4,
            setter: c,
            arraySetter: l
        }, G[V.c.BOOL_VEC2] = {
            Type: Uint32Array,
            size: 8,
            setter: f
        }, G[V.c.BOOL_VEC3] = {
            Type: Uint32Array,
            size: 12,
            setter: M
        }, G[V.c.BOOL_VEC4] = {
            Type: Uint32Array,
            size: 16,
            setter: d
        }, G[V.c.FLOAT_MAT2] = {
            Type: Float32Array,
            size: 16,
            setter: D
        }, G[V.c.FLOAT_MAT3] = {
            Type: Float32Array,
            size: 36,
            setter: F
        }, G[V.c.FLOAT_MAT4] = {
            Type: Float32Array,
            size: 64,
            setter: x
        }, G[V.c.FLOAT_MAT2X3] = {
            Type: Float32Array,
            size: 24,
            setter: E
        }, G[V.c.FLOAT_MAT2X4] = {
            Type: Float32Array,
            size: 32,
            setter: T
        }, G[V.c.FLOAT_MAT3X2] = {
            Type: Float32Array,
            size: 24,
            setter: p
        }, G[V.c.FLOAT_MAT3X4] = {
            Type: Float32Array,
            size: 48,
            setter: A
        }, G[V.c.FLOAT_MAT4X2] = {
            Type: Float32Array,
            size: 32,
            setter: _
        }, G[V.c.FLOAT_MAT4X3] = {
            Type: Float32Array,
            size: 48,
            setter: b
        }, G[V.c.SAMPLER_2D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_2D
        }, G[V.c.SAMPLER_CUBE] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_CUBE_MAP
        }, G[V.c.SAMPLER_3D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_3D
        }, G[V.c.SAMPLER_2D_SHADOW] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_2D
        }, G[V.c.SAMPLER_2D_ARRAY] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_2D_ARRAY
        }, G[V.c.SAMPLER_2D_ARRAY_SHADOW] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_2D_ARRAY
        }, G[V.c.SAMPLER_CUBE_SHADOW] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_CUBE_MAP
        }, G[V.c.INT_SAMPLER_2D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_2D
        }, G[V.c.INT_SAMPLER_3D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_3D
        }, G[V.c.INT_SAMPLER_CUBE] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_CUBE_MAP
        }, G[V.c.INT_SAMPLER_2D_ARRAY] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_2D_ARRAY
        }, G[V.c.UNSIGNED_INT_SAMPLER_2D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_2D
        }, G[V.c.UNSIGNED_INT_SAMPLER_3D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_3D
        }, G[V.c.UNSIGNED_INT_SAMPLER_CUBE] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_CUBE_MAP
        }, G[V.c.UNSIGNED_INT_SAMPLER_2D_ARRAY] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: g,
            bindPoint: V.c.TEXTURE_2D_ARRAY
        }, G), j = (X = {}, X[V.c.FLOAT] = {
            size: 4,
            setter: w,
            itemSize: 1
        }, X[V.c.FLOAT_VEC2] = {
            size: 8,
            setter: w,
            itemSize: 2
        }, X[V.c.FLOAT_VEC3] = {
            size: 12,
            setter: w,
            itemSize: 3
        }, X[V.c.FLOAT_VEC4] = {
            size: 16,
            setter: w,
            itemSize: 4
        }, X[V.c.INT] = {
            size: 4,
            setter: N,
            itemSize: 1
        }, X[V.c.INT_VEC2] = {
            size: 8,
            setter: N,
            itemSize: 2
        }, X[V.c.INT_VEC3] = {
            size: 12,
            setter: N,
            itemSize: 3
        }, X[V.c.INT_VEC4] = {
            size: 16,
            setter: N,
            itemSize: 4
        }, X[V.c.UNSIGNED_INT] = {
            size: 4,
            setter: N,
            itemSize: 1
        }, X[V.c.UNSIGNED_INT_VEC2] = {
            size: 8,
            setter: N,
            itemSize: 2
        }, X[V.c.UNSIGNED_INT_VEC3] = {
            size: 12,
            setter: N,
            itemSize: 3
        }, X[V.c.UNSIGNED_INT_VEC4] = {
            size: 16,
            setter: N,
            itemSize: 4
        }, X[V.c.BOOL] = {
            size: 4,
            setter: N,
            itemSize: 1
        }, X[V.c.BOOL_VEC2] = {
            size: 8,
            setter: N,
            itemSize: 2
        }, X[V.c.BOOL_VEC3] = {
            size: 12,
            setter: N,
            itemSize: 3
        }, X[V.c.BOOL_VEC4] = {
            size: 16,
            setter: N,
            itemSize: 4
        }, X[V.c.FLOAT_MAT2] = {
            size: 4,
            setter: O,
            count: 2
        }, X[V.c.FLOAT_MAT3] = {
            size: 9,
            setter: O,
            count: 3
        }, X[V.c.FLOAT_MAT4] = {
            size: 16,
            setter: O,
            count: 4
        }, X);
        H = {}, H[V.c.BYTE] = Int8Array, H[V.c.UNSIGNED_BYTE] = Uint8Array, H[V.c.SHORT] = Int16Array, 
        H[V.c.UNSIGNED_SHORT] = Uint16Array, H[V.c.INT] = Int32Array, H[V.c.UNSIGNED_INT] = Uint32Array, 
        H[V.c.FLOAT] = Float32Array, H[V.c.UNSIGNED_SHORT_4_4_4_4] = Uint16Array, H[V.c.UNSIGNED_SHORT_5_5_5_1] = Uint16Array, 
        H[V.c.UNSIGNED_SHORT_5_6_5] = Uint16Array, H[V.c.HALF_FLOAT] = Uint16Array, H[V.c.UNSIGNED_INT_2_10_10_10_REV] = Uint32Array, 
        H[V.c.UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array, H[V.c.UNSIGNED_INT_5_9_9_9_REV] = Uint32Array, 
        H[V.c.FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array, H[V.c.UNSIGNED_INT_24_8] = Uint32Array;
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function a(t, r, e) {
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
        function c(t) {
            return t * l;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "DEG_TO_RAD_FACTOR", function() {
            return l;
        }), r.sign = n, r.lerp = a, r.clamp = o, r.randInt = u, r.randIntInRange = i, r.normalRand = s, 
        r.degToRad = c;
        var l = Math.PI / 180;
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            for (var e = [], n = 0; n < t.length; n++) e[n] = t[n] + r[n];
            return e;
        }
        function a(t, r) {
            for (var e = [], n = 0; n < t.length; n++) e[n] = t[n] + r;
            return e;
        }
        function o(t, r) {
            for (var e = [], n = 0; n < t.length; n++) e[n] = t[n] - r[n];
            return e;
        }
        function u(t, r) {
            for (var e = [], n = 0; n < t.length; n++) e[n] = t[n] - r;
            return e;
        }
        function i(t, r) {
            for (var e = [], n = 0; n < t.length; n++) e[n] = t[n] * r;
            return e;
        }
        function s(t, r) {
            for (var e = [], n = 0; n < t.length; n++) e[n] = t[n] / r;
            return e;
        }
        function c(t) {
            for (var r = 0, e = 0; e < t.length; e++) {
                var n = t[e];
                r += n * n;
            }
            return Math.sqrt(r);
        }
        function l(t) {
            return s(t, c(t));
        }
        function f(t, r) {
            return r < c(t) ? i(l(t), r) : t;
        }
        function M(t, r) {
            if (t.length != r.length) return !1;
            for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
            return !0;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.add = n, r.addScalar = a, r.sub = o, r.subScalar = u, r.mul = i, r.div = s, 
        r.length = c, r.normalize = l, r.limit = f, r.isEqual = M;
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return t * t * t * (t * (6 * t - 15) + 10);
        }
        function a(t, r, e) {
            return r + t * (e - r);
        }
        function o(t, r) {
            return 0 == (1 & t) ? r : -r;
        }
        function u(t) {
            var r, e, u;
            return e = ~~t, r = 255 & e, t -= e, u = n(t), a(u, o(d[r], t), o(d[r + 1], t - 1));
        }
        function i(t, r) {
            var e, n, a = 0, o = 0, u = 0, i = (t + r) * h, s = Math.floor(t + i), c = Math.floor(r + i), l = (s + c) * S, f = s - l, M = c - l, d = t - f, m = r - M;
            d > m ? (e = 1, n = 0) : (e = 0, n = 1);
            var v = d - e + S, I = m - n + S, D = d - 1 + 2 * S, F = m - 1 + 2 * S, T = 255 & s, _ = 255 & c, A = .5 - d * d - m * m;
            if (A >= 0) {
                var b = 3 * E[T + x[_]];
                A *= A, a = A * A * (p[b] * d + p[b + 1] * m);
            }
            var y = .5 - v * v - I * I;
            if (y >= 0) {
                var g = 3 * E[T + e + x[_ + n]];
                y *= y, o = y * y * (p[g] * v + p[g + 1] * I);
            }
            var R = .5 - D * D - F * F;
            if (R >= 0) {
                var w = 3 * E[T + 1 + x[_ + 1]];
                R *= R, u = R * R * (p[w] * D + p[w + 1] * F);
            }
            return 70 * (a + o + u);
        }
        function s(t, r, e) {
            var n, a, o, u, i, s, c, l, f, M, d = (t + r + e) * m, h = Math.floor(t + d), S = Math.floor(r + d), I = Math.floor(e + d), D = (h + S + I) * v, F = h - D, T = S - D, _ = I - D, A = t - F, b = r - T, y = e - _;
            A >= b ? b >= y ? (i = 1, s = 0, c = 0, l = 1, f = 1, M = 0) : A >= y ? (i = 1, 
            s = 0, c = 0, l = 1, f = 0, M = 1) : (i = 0, s = 0, c = 1, l = 1, f = 0, M = 1) : b < y ? (i = 0, 
            s = 0, c = 1, l = 0, f = 1, M = 1) : A < y ? (i = 0, s = 1, c = 0, l = 0, f = 1, 
            M = 1) : (i = 0, s = 1, c = 0, l = 1, f = 1, M = 0);
            var g = A - i + v, R = b - s + v, w = y - c + v, N = A - l + 2 * v, O = b - f + 2 * v, P = y - M + 2 * v, L = A - 1 + 3 * v, z = b - 1 + 3 * v, U = y - 1 + 3 * v, C = 255 & h, B = 255 & S, Y = 255 & I, q = .6 - A * A - b * b - y * y;
            if (q < 0) n = 0; else {
                var G = 3 * E[C + x[B + x[Y]]];
                q *= q, n = q * q * (p[G] * A + p[G + 1] * b + p[G + 2] * y);
            }
            var X = .6 - g * g - R * R - w * w;
            if (X < 0) a = 0; else {
                var H = 3 * E[C + i + x[B + s + x[Y + c]]];
                X *= X, a = X * X * (p[H] * g + p[H + 1] * R + p[H + 2] * w);
            }
            var V = .6 - N * N - O * O - P * P;
            if (V < 0) o = 0; else {
                var k = 3 * E[C + l + x[B + f + x[Y + M]]];
                V *= V, o = V * V * (p[k] * N + p[k + 1] * O + p[k + 2] * P);
            }
            var j = .6 - L * L - z * z - U * U;
            if (j < 0) u = 0; else {
                var W = 3 * E[C + 1 + x[B + 1 + x[Y + 1]]];
                j *= j, u = j * j * (p[W] * L + p[W + 1] * z + p[W + 2] * U);
            }
            return 32 * (n + a + o + u);
        }
        function c(t, r, e, n) {
            var a, o, u, i, s, c = (t + r + e + n) * I, l = Math.floor(t + c), f = Math.floor(r + c), M = Math.floor(e + c), d = Math.floor(n + c), h = (l + f + M + d) * D, S = l - h, m = f - h, v = M - h, F = d - h, E = t - S, p = r - m, _ = e - v, A = n - F, b = 0, y = 0, g = 0, R = 0;
            E > p ? b++ : y++, E > _ ? b++ : g++, E > A ? b++ : R++, p > _ ? y++ : g++, p > A ? y++ : R++, 
            _ > A ? g++ : R++;
            var w, N, O, P, L, z, U, C, B, Y, q, G;
            w = b >= 3 ? 1 : 0, N = y >= 3 ? 1 : 0, O = g >= 3 ? 1 : 0, P = R >= 3 ? 1 : 0, 
            L = b >= 2 ? 1 : 0, z = y >= 2 ? 1 : 0, U = g >= 2 ? 1 : 0, C = R >= 2 ? 1 : 0, 
            B = b >= 1 ? 1 : 0, Y = y >= 1 ? 1 : 0, q = g >= 1 ? 1 : 0, G = R >= 1 ? 1 : 0;
            var X = E - w + D, H = p - N + D, V = _ - O + D, k = A - P + D, j = E - L + 2 * D, W = p - z + 2 * D, Q = _ - U + 2 * D, K = A - C + 2 * D, Z = E - B + 3 * D, J = p - Y + 3 * D, $ = _ - q + 3 * D, tt = A - G + 3 * D, rt = E - 1 + 4 * D, et = p - 1 + 4 * D, nt = _ - 1 + 4 * D, at = A - 1 + 4 * D, ot = 255 & l, ut = 255 & f, it = 255 & M, st = 255 & d, ct = .6 - E * E - p * p - _ * _ - A * A;
            if (ct < 0) a = 0; else {
                var lt = x[ot + x[ut + x[it + x[st]]]] % 32 * 4;
                ct *= ct, a = ct * ct * (T[lt] * E + T[lt + 1] * p + T[lt + 2] * _ + T[lt + 3] * A);
            }
            var ft = .6 - X * X - H * H - V * V - k * k;
            if (ft < 0) o = 0; else {
                var Mt = x[ot + w + x[ut + N + x[it + O + x[st + P]]]] % 32 * 4;
                ft *= ft, o = ft * ft * (T[Mt] * X + T[Mt + 1] * H + T[Mt + 2] * V + T[Mt + 3] * k);
            }
            var dt = .6 - j * j - W * W - Q * Q - K * K;
            if (dt < 0) u = 0; else {
                var ht = x[ot + L + x[ut + z + x[it + U + x[st + C]]]] % 32 * 4;
                dt *= dt, u = dt * dt * (T[ht] * j + T[ht + 1] * W + T[ht + 2] * Q + T[ht + 3] * K);
            }
            var St = .6 - Z * Z - J * J - $ * $ - tt * tt;
            if (St < 0) i = 0; else {
                var mt = x[ot + B + x[ut + Y + x[it + q + x[st + G]]]] % 32 * 4;
                St *= St, i = St * St * (T[mt] * Z + T[mt + 1] * J + T[mt + 2] * $ + T[mt + 3] * tt);
            }
            var vt = .6 - rt * rt - et * et - nt * nt - at * at;
            if (vt < 0) s = 0; else {
                var It = x[ot + 1 + x[ut + 1 + x[it + 1 + x[st + 1]]]] % 32 * 4;
                vt *= vt, s = vt * vt * (T[It] * rt + T[It + 1] * et + T[It + 2] * nt + T[It + 3] * at);
            }
            return 27 * (a + o + u + i + s);
        }
        function l(t, r, e, n) {
            for (var a = [], o = 0; o < r; o++) for (var u = 0; u < t; u++) {
                var i = u / t, s = o / r, l = Math.cos(2 * i * Math.PI) * e / (2 * Math.PI), f = Math.cos(2 * s * Math.PI) * n / (2 * Math.PI), M = Math.sin(2 * i * Math.PI) * e / (2 * Math.PI), d = Math.sin(2 * s * Math.PI) * n / (2 * Math.PI);
                a.push(c(l, f, M, d));
            }
            return a;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.noise1d = u, r.noise2d = i, r.noise3d = s, r.noise4d = c, r.tileNoise = l;
        var f, M, d = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (f = M = 0; M <= 256; f = ++M) d[256 + f] = d[f];
        var h = .5 * (Math.sqrt(3) - 1), S = (3 - Math.sqrt(3)) / 6, m = 1 / 3, v = 1 / 6, I = (Math.sqrt(5) - 1) / 4, D = (5 - Math.sqrt(5)) / 20, F = new Uint8Array(256), x = new Uint8Array(512), E = new Uint8Array(512);
        for (f = 0; f < 256; f++) F[f] = 256 * Math.random();
        for (f = 0; f < 512; f++) x[f] = F[255 & f], E[f] = x[f] % 12;
        var p = new Float32Array([ 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1 ]), T = new Float32Array([ 0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0 ]);
    }, function(t, r, e) {
        r.glMatrix = e(0), r.mat2 = e(18), r.mat2d = e(19), r.mat3 = e(7), r.mat4 = e(20), 
        r.quat = e(21), r.vec2 = e(22), r.vec3 = e(8), r.vec4 = e(9);
    }, function(t, r, e) {
        var n = e(0), a = {};
        a.create = function() {
            var t = new n.ARRAY_TYPE(9);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, a.fromMat4 = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[4], t[4] = r[5], t[5] = r[6], 
            t[6] = r[8], t[7] = r[9], t[8] = r[10], t;
        }, a.clone = function(t) {
            var r = new n.ARRAY_TYPE(9);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], 
            r[6] = t[6], r[7] = t[7], r[8] = t[8], r;
        }, a.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t[6] = r[6], t[7] = r[7], t[8] = r[8], t;
        }, a.fromValues = function(t, r, e, a, o, u, i, s, c) {
            var l = new n.ARRAY_TYPE(9);
            return l[0] = t, l[1] = r, l[2] = e, l[3] = a, l[4] = o, l[5] = u, l[6] = i, l[7] = s, 
            l[8] = c, l;
        }, a.set = function(t, r, e, n, a, o, u, i, s, c) {
            return t[0] = r, t[1] = e, t[2] = n, t[3] = a, t[4] = o, t[5] = u, t[6] = i, t[7] = s, 
            t[8] = c, t;
        }, a.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, a.transpose = function(t, r) {
            if (t === r) {
                var e = r[1], n = r[2], a = r[5];
                t[1] = r[3], t[2] = r[6], t[3] = e, t[5] = r[7], t[6] = n, t[7] = a;
            } else t[0] = r[0], t[1] = r[3], t[2] = r[6], t[3] = r[1], t[4] = r[4], t[5] = r[7], 
            t[6] = r[2], t[7] = r[5], t[8] = r[8];
            return t;
        }, a.invert = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], s = r[6], c = r[7], l = r[8], f = l * u - i * c, M = -l * o + i * s, d = c * o - u * s, h = e * f + n * M + a * d;
            return h ? (h = 1 / h, t[0] = f * h, t[1] = (-l * n + a * c) * h, t[2] = (i * n - a * u) * h, 
            t[3] = M * h, t[4] = (l * e - a * s) * h, t[5] = (-i * e + a * o) * h, t[6] = d * h, 
            t[7] = (-c * e + n * s) * h, t[8] = (u * e - n * o) * h, t) : null;
        }, a.adjoint = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], s = r[6], c = r[7], l = r[8];
            return t[0] = u * l - i * c, t[1] = a * c - n * l, t[2] = n * i - a * u, t[3] = i * s - o * l, 
            t[4] = e * l - a * s, t[5] = a * o - e * i, t[6] = o * c - u * s, t[7] = n * s - e * c, 
            t[8] = e * u - n * o, t;
        }, a.determinant = function(t) {
            var r = t[0], e = t[1], n = t[2], a = t[3], o = t[4], u = t[5], i = t[6], s = t[7], c = t[8];
            return r * (c * o - u * s) + e * (-c * a + u * i) + n * (s * a - o * i);
        }, a.multiply = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = r[6], l = r[7], f = r[8], M = e[0], d = e[1], h = e[2], S = e[3], m = e[4], v = e[5], I = e[6], D = e[7], F = e[8];
            return t[0] = M * n + d * u + h * c, t[1] = M * a + d * i + h * l, t[2] = M * o + d * s + h * f, 
            t[3] = S * n + m * u + v * c, t[4] = S * a + m * i + v * l, t[5] = S * o + m * s + v * f, 
            t[6] = I * n + D * u + F * c, t[7] = I * a + D * i + F * l, t[8] = I * o + D * s + F * f, 
            t;
        }, a.mul = a.multiply, a.translate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = r[6], l = r[7], f = r[8], M = e[0], d = e[1];
            return t[0] = n, t[1] = a, t[2] = o, t[3] = u, t[4] = i, t[5] = s, t[6] = M * n + d * u + c, 
            t[7] = M * a + d * i + l, t[8] = M * o + d * s + f, t;
        }, a.rotate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = r[6], l = r[7], f = r[8], M = Math.sin(e), d = Math.cos(e);
            return t[0] = d * n + M * u, t[1] = d * a + M * i, t[2] = d * o + M * s, t[3] = d * u - M * n, 
            t[4] = d * i - M * a, t[5] = d * s - M * o, t[6] = c, t[7] = l, t[8] = f, t;
        }, a.scale = function(t, r, e) {
            var n = e[0], a = e[1];
            return t[0] = n * r[0], t[1] = n * r[1], t[2] = n * r[2], t[3] = a * r[3], t[4] = a * r[4], 
            t[5] = a * r[5], t[6] = r[6], t[7] = r[7], t[8] = r[8], t;
        }, a.fromTranslation = function(t, r) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = r[0], 
            t[7] = r[1], t[8] = 1, t;
        }, a.fromRotation = function(t, r) {
            var e = Math.sin(r), n = Math.cos(r);
            return t[0] = n, t[1] = e, t[2] = 0, t[3] = -e, t[4] = n, t[5] = 0, t[6] = 0, t[7] = 0, 
            t[8] = 1, t;
        }, a.fromScaling = function(t, r) {
            return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = r[1], t[5] = 0, t[6] = 0, 
            t[7] = 0, t[8] = 1, t;
        }, a.fromMat2d = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = 0, t[3] = r[2], t[4] = r[3], t[5] = 0, t[6] = r[4], 
            t[7] = r[5], t[8] = 1, t;
        }, a.fromQuat = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = e + e, i = n + n, s = a + a, c = e * u, l = n * u, f = n * i, M = a * u, d = a * i, h = a * s, S = o * u, m = o * i, v = o * s;
            return t[0] = 1 - f - h, t[3] = l - v, t[6] = M + m, t[1] = l + v, t[4] = 1 - c - h, 
            t[7] = d - S, t[2] = M - m, t[5] = d + S, t[8] = 1 - c - f, t;
        }, a.normalFromMat4 = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], s = r[6], c = r[7], l = r[8], f = r[9], M = r[10], d = r[11], h = r[12], S = r[13], m = r[14], v = r[15], I = e * i - n * u, D = e * s - a * u, F = e * c - o * u, x = n * s - a * i, E = n * c - o * i, p = a * c - o * s, T = l * S - f * h, _ = l * m - M * h, A = l * v - d * h, b = f * m - M * S, y = f * v - d * S, g = M * v - d * m, R = I * g - D * y + F * b + x * A - E * _ + p * T;
            return R ? (R = 1 / R, t[0] = (i * g - s * y + c * b) * R, t[1] = (s * A - u * g - c * _) * R, 
            t[2] = (u * y - i * A + c * T) * R, t[3] = (a * y - n * g - o * b) * R, t[4] = (e * g - a * A + o * _) * R, 
            t[5] = (n * A - e * y - o * T) * R, t[6] = (S * p - m * E + v * x) * R, t[7] = (m * F - h * p - v * D) * R, 
            t[8] = (h * E - S * F + v * I) * R, t) : null;
        }, a.str = function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
        }, a.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
        }, a.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t[4] = r[4] + e[4], t[5] = r[5] + e[5], t[6] = r[6] + e[6], t[7] = r[7] + e[7], 
            t[8] = r[8] + e[8], t;
        }, a.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t[4] = r[4] - e[4], t[5] = r[5] - e[5], t[6] = r[6] - e[6], t[7] = r[7] - e[7], 
            t[8] = r[8] - e[8], t;
        }, a.sub = a.subtract, a.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, 
            t[5] = r[5] * e, t[6] = r[6] * e, t[7] = r[7] * e, t[8] = r[8] * e, t;
        }, a.multiplyScalarAndAdd = function(t, r, e, n) {
            return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t[3] = r[3] + e[3] * n, 
            t[4] = r[4] + e[4] * n, t[5] = r[5] + e[5] * n, t[6] = r[6] + e[6] * n, t[7] = r[7] + e[7] * n, 
            t[8] = r[8] + e[8] * n, t;
        }, a.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5] && t[6] === r[6] && t[7] === r[7] && t[8] === r[8];
        }, a.equals = function(t, r) {
            var e = t[0], a = t[1], o = t[2], u = t[3], i = t[4], s = t[5], c = t[6], l = t[7], f = t[8], M = r[0], d = r[1], h = r[2], S = r[3], m = r[4], v = r[5], I = t[6], D = r[7], F = r[8];
            return Math.abs(e - M) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(a - d) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(o - h) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(u - S) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(S)) && Math.abs(i - m) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(s - v) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(v)) && Math.abs(c - I) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(I)) && Math.abs(l - D) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(D)) && Math.abs(f - F) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(F));
        }, t.exports = a;
    }, function(t, r, e) {
        var n = e(0), a = {};
        a.create = function() {
            var t = new n.ARRAY_TYPE(3);
            return t[0] = 0, t[1] = 0, t[2] = 0, t;
        }, a.clone = function(t) {
            var r = new n.ARRAY_TYPE(3);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r;
        }, a.fromValues = function(t, r, e) {
            var a = new n.ARRAY_TYPE(3);
            return a[0] = t, a[1] = r, a[2] = e, a;
        }, a.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t;
        }, a.set = function(t, r, e, n) {
            return t[0] = r, t[1] = e, t[2] = n, t;
        }, a.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t;
        }, a.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t;
        }, a.sub = a.subtract, a.multiply = function(t, r, e) {
            return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t[2] = r[2] * e[2], t;
        }, a.mul = a.multiply, a.divide = function(t, r, e) {
            return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t[2] = r[2] / e[2], t;
        }, a.div = a.divide, a.ceil = function(t, r) {
            return t[0] = Math.ceil(r[0]), t[1] = Math.ceil(r[1]), t[2] = Math.ceil(r[2]), t;
        }, a.floor = function(t, r) {
            return t[0] = Math.floor(r[0]), t[1] = Math.floor(r[1]), t[2] = Math.floor(r[2]), 
            t;
        }, a.min = function(t, r, e) {
            return t[0] = Math.min(r[0], e[0]), t[1] = Math.min(r[1], e[1]), t[2] = Math.min(r[2], e[2]), 
            t;
        }, a.max = function(t, r, e) {
            return t[0] = Math.max(r[0], e[0]), t[1] = Math.max(r[1], e[1]), t[2] = Math.max(r[2], e[2]), 
            t;
        }, a.round = function(t, r) {
            return t[0] = Math.round(r[0]), t[1] = Math.round(r[1]), t[2] = Math.round(r[2]), 
            t;
        }, a.scale = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t;
        }, a.scaleAndAdd = function(t, r, e, n) {
            return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t;
        }, a.distance = function(t, r) {
            var e = r[0] - t[0], n = r[1] - t[1], a = r[2] - t[2];
            return Math.sqrt(e * e + n * n + a * a);
        }, a.dist = a.distance, a.squaredDistance = function(t, r) {
            var e = r[0] - t[0], n = r[1] - t[1], a = r[2] - t[2];
            return e * e + n * n + a * a;
        }, a.sqrDist = a.squaredDistance, a.length = function(t) {
            var r = t[0], e = t[1], n = t[2];
            return Math.sqrt(r * r + e * e + n * n);
        }, a.len = a.length, a.squaredLength = function(t) {
            var r = t[0], e = t[1], n = t[2];
            return r * r + e * e + n * n;
        }, a.sqrLen = a.squaredLength, a.negate = function(t, r) {
            return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t;
        }, a.inverse = function(t, r) {
            return t[0] = 1 / r[0], t[1] = 1 / r[1], t[2] = 1 / r[2], t;
        }, a.normalize = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = e * e + n * n + a * a;
            return o > 0 && (o = 1 / Math.sqrt(o), t[0] = r[0] * o, t[1] = r[1] * o, t[2] = r[2] * o), 
            t;
        }, a.dot = function(t, r) {
            return t[0] * r[0] + t[1] * r[1] + t[2] * r[2];
        }, a.cross = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = e[0], i = e[1], s = e[2];
            return t[0] = a * s - o * i, t[1] = o * u - n * s, t[2] = n * i - a * u, t;
        }, a.lerp = function(t, r, e, n) {
            var a = r[0], o = r[1], u = r[2];
            return t[0] = a + n * (e[0] - a), t[1] = o + n * (e[1] - o), t[2] = u + n * (e[2] - u), 
            t;
        }, a.hermite = function(t, r, e, n, a, o) {
            var u = o * o, i = u * (2 * o - 3) + 1, s = u * (o - 2) + o, c = u * (o - 1), l = u * (3 - 2 * o);
            return t[0] = r[0] * i + e[0] * s + n[0] * c + a[0] * l, t[1] = r[1] * i + e[1] * s + n[1] * c + a[1] * l, 
            t[2] = r[2] * i + e[2] * s + n[2] * c + a[2] * l, t;
        }, a.bezier = function(t, r, e, n, a, o) {
            var u = 1 - o, i = u * u, s = o * o, c = i * u, l = 3 * o * i, f = 3 * s * u, M = s * o;
            return t[0] = r[0] * c + e[0] * l + n[0] * f + a[0] * M, t[1] = r[1] * c + e[1] * l + n[1] * f + a[1] * M, 
            t[2] = r[2] * c + e[2] * l + n[2] * f + a[2] * M, t;
        }, a.random = function(t, r) {
            r = r || 1;
            var e = 2 * n.RANDOM() * Math.PI, a = 2 * n.RANDOM() - 1, o = Math.sqrt(1 - a * a) * r;
            return t[0] = Math.cos(e) * o, t[1] = Math.sin(e) * o, t[2] = a * r, t;
        }, a.transformMat4 = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = e[3] * n + e[7] * a + e[11] * o + e[15];
            return u = u || 1, t[0] = (e[0] * n + e[4] * a + e[8] * o + e[12]) / u, t[1] = (e[1] * n + e[5] * a + e[9] * o + e[13]) / u, 
            t[2] = (e[2] * n + e[6] * a + e[10] * o + e[14]) / u, t;
        }, a.transformMat3 = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2];
            return t[0] = n * e[0] + a * e[3] + o * e[6], t[1] = n * e[1] + a * e[4] + o * e[7], 
            t[2] = n * e[2] + a * e[5] + o * e[8], t;
        }, a.transformQuat = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = e[0], i = e[1], s = e[2], c = e[3], l = c * n + i * o - s * a, f = c * a + s * n - u * o, M = c * o + u * a - i * n, d = -u * n - i * a - s * o;
            return t[0] = l * c + d * -u + f * -s - M * -i, t[1] = f * c + d * -i + M * -u - l * -s, 
            t[2] = M * c + d * -s + l * -i - f * -u, t;
        }, a.rotateX = function(t, r, e, n) {
            var a = [], o = [];
            return a[0] = r[0] - e[0], a[1] = r[1] - e[1], a[2] = r[2] - e[2], o[0] = a[0], 
            o[1] = a[1] * Math.cos(n) - a[2] * Math.sin(n), o[2] = a[1] * Math.sin(n) + a[2] * Math.cos(n), 
            t[0] = o[0] + e[0], t[1] = o[1] + e[1], t[2] = o[2] + e[2], t;
        }, a.rotateY = function(t, r, e, n) {
            var a = [], o = [];
            return a[0] = r[0] - e[0], a[1] = r[1] - e[1], a[2] = r[2] - e[2], o[0] = a[2] * Math.sin(n) + a[0] * Math.cos(n), 
            o[1] = a[1], o[2] = a[2] * Math.cos(n) - a[0] * Math.sin(n), t[0] = o[0] + e[0], 
            t[1] = o[1] + e[1], t[2] = o[2] + e[2], t;
        }, a.rotateZ = function(t, r, e, n) {
            var a = [], o = [];
            return a[0] = r[0] - e[0], a[1] = r[1] - e[1], a[2] = r[2] - e[2], o[0] = a[0] * Math.cos(n) - a[1] * Math.sin(n), 
            o[1] = a[0] * Math.sin(n) + a[1] * Math.cos(n), o[2] = a[2], t[0] = o[0] + e[0], 
            t[1] = o[1] + e[1], t[2] = o[2] + e[2], t;
        }, a.forEach = function() {
            var t = a.create();
            return function(r, e, n, a, o, u) {
                var i, s;
                for (e || (e = 3), n || (n = 0), s = a ? Math.min(a * e + n, r.length) : r.length, 
                i = n; i < s; i += e) t[0] = r[i], t[1] = r[i + 1], t[2] = r[i + 2], o(t, t, u), 
                r[i] = t[0], r[i + 1] = t[1], r[i + 2] = t[2];
                return r;
            };
        }(), a.angle = function(t, r) {
            var e = a.fromValues(t[0], t[1], t[2]), n = a.fromValues(r[0], r[1], r[2]);
            a.normalize(e, e), a.normalize(n, n);
            var o = a.dot(e, n);
            return o > 1 ? 0 : Math.acos(o);
        }, a.str = function(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }, a.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2];
        }, a.equals = function(t, r) {
            var e = t[0], a = t[1], o = t[2], u = r[0], i = r[1], s = r[2];
            return Math.abs(e - u) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(u)) && Math.abs(a - i) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(i)) && Math.abs(o - s) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(s));
        }, t.exports = a;
    }, function(t, r, e) {
        var n = e(0), a = {};
        a.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
        }, a.clone = function(t) {
            var r = new n.ARRAY_TYPE(4);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
        }, a.fromValues = function(t, r, e, a) {
            var o = new n.ARRAY_TYPE(4);
            return o[0] = t, o[1] = r, o[2] = e, o[3] = a, o;
        }, a.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t;
        }, a.set = function(t, r, e, n, a) {
            return t[0] = r, t[1] = e, t[2] = n, t[3] = a, t;
        }, a.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t;
        }, a.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t;
        }, a.sub = a.subtract, a.multiply = function(t, r, e) {
            return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t[2] = r[2] * e[2], t[3] = r[3] * e[3], 
            t;
        }, a.mul = a.multiply, a.divide = function(t, r, e) {
            return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t[2] = r[2] / e[2], t[3] = r[3] / e[3], 
            t;
        }, a.div = a.divide, a.ceil = function(t, r) {
            return t[0] = Math.ceil(r[0]), t[1] = Math.ceil(r[1]), t[2] = Math.ceil(r[2]), t[3] = Math.ceil(r[3]), 
            t;
        }, a.floor = function(t, r) {
            return t[0] = Math.floor(r[0]), t[1] = Math.floor(r[1]), t[2] = Math.floor(r[2]), 
            t[3] = Math.floor(r[3]), t;
        }, a.min = function(t, r, e) {
            return t[0] = Math.min(r[0], e[0]), t[1] = Math.min(r[1], e[1]), t[2] = Math.min(r[2], e[2]), 
            t[3] = Math.min(r[3], e[3]), t;
        }, a.max = function(t, r, e) {
            return t[0] = Math.max(r[0], e[0]), t[1] = Math.max(r[1], e[1]), t[2] = Math.max(r[2], e[2]), 
            t[3] = Math.max(r[3], e[3]), t;
        }, a.round = function(t, r) {
            return t[0] = Math.round(r[0]), t[1] = Math.round(r[1]), t[2] = Math.round(r[2]), 
            t[3] = Math.round(r[3]), t;
        }, a.scale = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t;
        }, a.scaleAndAdd = function(t, r, e, n) {
            return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t[3] = r[3] + e[3] * n, 
            t;
        }, a.distance = function(t, r) {
            var e = r[0] - t[0], n = r[1] - t[1], a = r[2] - t[2], o = r[3] - t[3];
            return Math.sqrt(e * e + n * n + a * a + o * o);
        }, a.dist = a.distance, a.squaredDistance = function(t, r) {
            var e = r[0] - t[0], n = r[1] - t[1], a = r[2] - t[2], o = r[3] - t[3];
            return e * e + n * n + a * a + o * o;
        }, a.sqrDist = a.squaredDistance, a.length = function(t) {
            var r = t[0], e = t[1], n = t[2], a = t[3];
            return Math.sqrt(r * r + e * e + n * n + a * a);
        }, a.len = a.length, a.squaredLength = function(t) {
            var r = t[0], e = t[1], n = t[2], a = t[3];
            return r * r + e * e + n * n + a * a;
        }, a.sqrLen = a.squaredLength, a.negate = function(t, r) {
            return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t[3] = -r[3], t;
        }, a.inverse = function(t, r) {
            return t[0] = 1 / r[0], t[1] = 1 / r[1], t[2] = 1 / r[2], t[3] = 1 / r[3], t;
        }, a.normalize = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = e * e + n * n + a * a + o * o;
            return u > 0 && (u = 1 / Math.sqrt(u), t[0] = e * u, t[1] = n * u, t[2] = a * u, 
            t[3] = o * u), t;
        }, a.dot = function(t, r) {
            return t[0] * r[0] + t[1] * r[1] + t[2] * r[2] + t[3] * r[3];
        }, a.lerp = function(t, r, e, n) {
            var a = r[0], o = r[1], u = r[2], i = r[3];
            return t[0] = a + n * (e[0] - a), t[1] = o + n * (e[1] - o), t[2] = u + n * (e[2] - u), 
            t[3] = i + n * (e[3] - i), t;
        }, a.random = function(t, r) {
            return r = r || 1, t[0] = n.RANDOM(), t[1] = n.RANDOM(), t[2] = n.RANDOM(), t[3] = n.RANDOM(), 
            a.normalize(t, t), a.scale(t, t, r), t;
        }, a.transformMat4 = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3];
            return t[0] = e[0] * n + e[4] * a + e[8] * o + e[12] * u, t[1] = e[1] * n + e[5] * a + e[9] * o + e[13] * u, 
            t[2] = e[2] * n + e[6] * a + e[10] * o + e[14] * u, t[3] = e[3] * n + e[7] * a + e[11] * o + e[15] * u, 
            t;
        }, a.transformQuat = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = e[0], i = e[1], s = e[2], c = e[3], l = c * n + i * o - s * a, f = c * a + s * n - u * o, M = c * o + u * a - i * n, d = -u * n - i * a - s * o;
            return t[0] = l * c + d * -u + f * -s - M * -i, t[1] = f * c + d * -i + M * -u - l * -s, 
            t[2] = M * c + d * -s + l * -i - f * -u, t[3] = r[3], t;
        }, a.forEach = function() {
            var t = a.create();
            return function(r, e, n, a, o, u) {
                var i, s;
                for (e || (e = 4), n || (n = 0), s = a ? Math.min(a * e + n, r.length) : r.length, 
                i = n; i < s; i += e) t[0] = r[i], t[1] = r[i + 1], t[2] = r[i + 2], t[3] = r[i + 3], 
                o(t, t, u), r[i] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r[i + 3] = t[3];
                return r;
            };
        }(), a.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, a.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3];
        }, a.equals = function(t, r) {
            var e = t[0], a = t[1], o = t[2], u = t[3], i = r[0], s = r[1], c = r[2], l = r[3];
            return Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(a - s) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(s)) && Math.abs(o - c) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(u - l) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(l));
        }, t.exports = a;
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            var e = -l.vec3.dot(t, r);
            return l.vec4.fromValues(t[0], t[1], t[2], e);
        }
        function a(t, r, e) {
            return n(o(t, r, e), t);
        }
        function o(t, r, e) {
            var n = l.fvec3.cross(l.fvec3.sub(e, r), l.fvec3.sub(t, r));
            return l.vec3.normalize(n, n);
        }
        function u(t) {
            var r = t, e = r[0], n = r[1], a = r[2], o = r[3];
            return l.mat4.fromValues(1 - 2 * e * e, -2 * e * n, -2 * e * a, 0, -2 * e * n, 1 - 2 * n * n, -2 * n * a, 0, -2 * e * a, -2 * n * a, 1 - 2 * a * a, 0, -2 * e * o, -2 * n * o, -2 * a * o, 1);
        }
        function i(t, r) {
            return r *= .5, t[0] = 0, t[1] = Math.sin(r), t[2] = 0, t[3] = Math.cos(r), t;
        }
        function s(t, r) {
            return r *= .5, t[0] = Math.sin(r), t[1] = 0, t[2] = 0, t[3] = Math.cos(r), t;
        }
        function c(t, r) {
            return r *= .5, t[0] = 0, t[1] = 0, t[2] = Math.sin(r), t[3] = Math.cos(r), t;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.planeFromNormalAndCoplanarPoint = n, r.planeFromThreeCoplanarPoints = a, r.normalFromThreeCoplanarPoints = o, 
        r.mirrorMatrixFromPlane = u, r.getYawQuat = i, r.getPitchQuat = s, r.getRollQuat = c;
        var l = e(1);
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            return r ? r + "." + t : t;
        }
        function a(t) {
            var r, e, a = t.value, o = c.a(), l = [], f = {};
            return f.HOT = {
                entity: f,
                type: s.a.HOT
            }, f.COLD = {
                entity: f,
                type: s.a.COLD
            }, f.id = function(t, e) {
                return o = n(t, e), r = e, f;
            }, f.val = function(t) {
                return a = t, f;
            }, f.accept = function(t) {
                return e = t, f;
            }, f.getId = function() {
                return o;
            }, t.procedure && l.push(t), f.react = function(t, r, e) {
                var n = u(t, r, e);
                n.pidSuffix = M;
                var a = n.dependencies;
                return n.dependencies = [ {
                    entity: f,
                    type: s.a.ACCUMULATOR
                } ], a && a.length && (n.dependencies = n.dependencies.concat(a)), l.push(n), f;
            }, f.getGraph = function() {
                var t = i.a();
                return t.entities[o] = s.c({
                    id: o,
                    value: a,
                    accept: e
                }), l.forEach(function(e) {
                    var a = e.dependencies, u = e.processId ? n(e.processId, r) : o + e.pidSuffix + (a && a.length ? ":" + a.reduce(function(t, r) {
                        var e = r.entity.getId();
                        return e === o ? t : t + ":" + e;
                    }, "") : ""), i = [];
                    a && a.forEach(function(r, e) {
                        if (i[e] = r.type, r.type !== s.a.ACCUMULATOR) {
                            var n = s.b({
                                process: u,
                                entity: r.entity.getId(),
                                port: e
                            });
                            t.arcs[n.id] = n;
                        }
                    });
                    var c = s.b({
                        process: u,
                        entity: o
                    });
                    t.arcs[c.id] = c, t.processes[u] = s.d({
                        id: u,
                        ports: i,
                        procedure: e.procedure,
                        async: e.async,
                        autostart: e.autostart
                    });
                }), t;
            }, f;
        }
        function o(t) {
            return a({
                value: t
            });
        }
        function u(t, r, e) {
            var n = {
                procedure: r
            };
            return null != t && (n.dependencies = t), "string" == typeof e ? n.processId = e : n.pidSuffix = f, 
            n;
        }
        r.d = o, e.d(r, "c", function() {
            return d;
        }), e.d(r, "a", function() {
            return h;
        }), e.d(r, "b", function() {
            return S;
        });
        var i = e(26), s = e(27), c = e(12), l = this && this.__assign || Object.assign || function(t) {
            for (var r, e = 1, n = arguments.length; e < n; e++) {
                r = arguments[e];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
            }
            return t;
        }, f = "Stream", M = "Reaction", d = function(t, r, e) {
            return a(u(t, r, e));
        }, h = function(t, r, e) {
            return a(l({}, u(t, r, e), {
                async: !0
            }));
        }, S = function(t, r, e) {
            return a(l({}, u(t, r, e), {
                async: !0,
                autostart: !0
            }));
        };
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = i, e = 0;
            return r[t[e++]] + r[t[e++]] + r[t[e++]] + r[t[e++]] + "-" + r[t[e++]] + r[t[e++]] + "-" + r[t[e++]] + r[t[e++]] + "-" + r[t[e++]] + r[t[e++]] + "-" + r[t[e++]] + r[t[e++]] + r[t[e++]] + r[t[e++]] + r[t[e++]] + r[t[e++]];
        }
        function a() {
            var t = u();
            return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, n(t);
        }
        r.a = a;
        for (var o = new Array(16), u = function() {
            for (var t = 0, r = void 0; t < 16; t++) 0 == (3 & t) && (r = 4294967296 * Math.random(), 
            o[t] = r >>> ((3 & t) << 3) & 255);
            return o;
        }, i = [], s = {}, c = 0; c < 256; c++) i[c] = (c + 256).toString(16).substr(1), 
        s[i[c]] = c;
    }, function(t, r, e) {
        "use strict";
        e.d(r, "a", function() {
            return n;
        }), e.d(r, "b", function() {
            return a;
        }), e.d(r, "d", function() {
            return o;
        }), e.d(r, "e", function() {
            return u;
        }), e.d(r, "c", function() {
            return i;
        });
        var n = "position", a = "uv", o = "source", u = "coords", i = {
            FLOAT: 5126,
            FLOAT_VEC2: 35664,
            FLOAT_VEC3: 35665,
            FLOAT_VEC4: 35666,
            INT: 5124,
            INT_VEC2: 35667,
            INT_VEC3: 35668,
            INT_VEC4: 35669,
            BOOL: 35670,
            BOOL_VEC2: 35671,
            BOOL_VEC3: 35672,
            BOOL_VEC4: 35673,
            FLOAT_MAT2: 35674,
            FLOAT_MAT3: 35675,
            FLOAT_MAT4: 35676,
            SAMPLER_2D: 35678,
            SAMPLER_CUBE: 35680,
            SAMPLER_3D: 35679,
            SAMPLER_2D_SHADOW: 35682,
            FLOAT_MAT2X3: 35685,
            FLOAT_MAT2X4: 35686,
            FLOAT_MAT3X2: 35687,
            FLOAT_MAT3X4: 35688,
            FLOAT_MAT4X2: 35689,
            FLOAT_MAT4X3: 35690,
            SAMPLER_2D_ARRAY: 36289,
            SAMPLER_2D_ARRAY_SHADOW: 36292,
            SAMPLER_CUBE_SHADOW: 36293,
            UNSIGNED_INT: 5125,
            UNSIGNED_INT_VEC2: 36294,
            UNSIGNED_INT_VEC3: 36295,
            UNSIGNED_INT_VEC4: 36296,
            INT_SAMPLER_2D: 36298,
            INT_SAMPLER_3D: 36299,
            INT_SAMPLER_CUBE: 36300,
            INT_SAMPLER_2D_ARRAY: 36303,
            UNSIGNED_INT_SAMPLER_2D: 36306,
            UNSIGNED_INT_SAMPLER_3D: 36307,
            UNSIGNED_INT_SAMPLER_CUBE: 36308,
            UNSIGNED_INT_SAMPLER_2D_ARRAY: 36311,
            TEXTURE_2D: 3553,
            TEXTURE_CUBE_MAP: 34067,
            TEXTURE_3D: 32879,
            TEXTURE_2D_ARRAY: 35866,
            BYTE: 5120,
            UNSIGNED_BYTE: 5121,
            SHORT: 5122,
            UNSIGNED_SHORT: 5123,
            UNSIGNED_SHORT_4_4_4_4: 32819,
            UNSIGNED_SHORT_5_5_5_1: 32820,
            UNSIGNED_SHORT_5_6_5: 33635,
            HALF_FLOAT: 5131,
            UNSIGNED_INT_2_10_10_10_REV: 33640,
            UNSIGNED_INT_10F_11F_11F_REV: 35899,
            UNSIGNED_INT_5_9_9_9_REV: 35902,
            FLOAT_32_UNSIGNED_INT_24_8_REV: 36269,
            UNSIGNED_INT_24_8: 34042
        };
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = t.getContext("webgl") || t.getContext("experimental-webgl");
            if (null == r) throw Error("Webgl context cannot be initialized");
            return r;
        }
        function a(t, r) {
            void 0 === r && (r = 1), r = Math.max(1, r);
            var e = t.clientWidth * r | 0, n = t.clientHeight * r | 0;
            return (t.width !== e || t.height !== n) && (t.width = e, t.height = n, !0);
        }
        r.a = n, r.b = a;
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            var e = t[0], n = t[1], a = t[2], o = t[3], u = r[0], i = r[1], s = r[2], c = r[3], f = c / 255;
            return [ Math.floor(l.lerp(e, u, f)), Math.floor(l.lerp(n, i, f)), Math.floor(l.lerp(a, s, f)), o ];
        }
        function a(t, r) {
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
        function c(t) {
            var r = t.split("#");
            return s(parseInt(r[r.length - 1], 16));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "BLACK", function() {
            return f;
        }), e.d(r, "WHITE", function() {
            return M;
        }), r.mixColors = n, r.grey = a, r.colorRgbaToCSS = o, r.intToFloat = u, r.floatToInt = i, 
        r.hexToRgb = s, r.hexStringToRgb = c;
        var l = e(3), f = [ 0, 0, 0, 255 ], M = [ 255, 255, 255, 255 ];
    }, function(t, r, e) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "math", function() {
            return E;
        }), e.d(r, "vr", function() {
            return p;
        }), e.d(r, "events", function() {
            return T;
        }), e.d(r, "utils", function() {
            return _;
        }), e.d(r, "graphics", function() {
            return A;
        }), e.d(r, "flow", function() {
            return b;
        });
        var n = e(3), a = e(17), o = e(5), u = e(4), i = e(1), s = e(10), c = e(24), l = e(25), f = e(29), M = e(36), d = e(37), h = e(38), S = e(39), m = e(40), v = e(41), I = e(15), D = e(42), F = e(43), x = e(44), E = {
            core: n,
            noise: o,
            coords: a,
            vectors: u,
            linAlg: i,
            geometry: s
        }, p = {
            camera: c,
            flowCamera: l,
            flowUtils: f
        }, T = {
            dom: M,
            mouse: h,
            keyboard: d
        }, _ = {
            animation: m,
            string: S,
            seq: v
        }, A = {
            colors: I,
            pixels: F,
            textures: D
        }, b = {
            tree: x
        };
        r.default = {
            math: E,
            vr: p,
            events: T,
            utils: _,
            graphics: A,
            flow: b
        };
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return [ o.length(t), Math.atan2(t[1], t[0]) ];
        }
        function a(t) {
            var r = t[0], e = t[1];
            return [ r * Math.cos(e), r * Math.sin(e) ];
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.cartesianToPolar2D = n, r.polarToCartesian2D = a;
        var o = e(4);
    }, function(t, r, e) {
        var n = e(0), a = {};
        a.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, a.clone = function(t) {
            var r = new n.ARRAY_TYPE(4);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
        }, a.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t;
        }, a.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, a.fromValues = function(t, r, e, a) {
            var o = new n.ARRAY_TYPE(4);
            return o[0] = t, o[1] = r, o[2] = e, o[3] = a, o;
        }, a.set = function(t, r, e, n, a) {
            return t[0] = r, t[1] = e, t[2] = n, t[3] = a, t;
        }, a.transpose = function(t, r) {
            if (t === r) {
                var e = r[1];
                t[1] = r[2], t[2] = e;
            } else t[0] = r[0], t[1] = r[2], t[2] = r[1], t[3] = r[3];
            return t;
        }, a.invert = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = e * o - a * n;
            return u ? (u = 1 / u, t[0] = o * u, t[1] = -n * u, t[2] = -a * u, t[3] = e * u, 
            t) : null;
        }, a.adjoint = function(t, r) {
            var e = r[0];
            return t[0] = r[3], t[1] = -r[1], t[2] = -r[2], t[3] = e, t;
        }, a.determinant = function(t) {
            return t[0] * t[3] - t[2] * t[1];
        }, a.multiply = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = e[0], s = e[1], c = e[2], l = e[3];
            return t[0] = n * i + o * s, t[1] = a * i + u * s, t[2] = n * c + o * l, t[3] = a * c + u * l, 
            t;
        }, a.mul = a.multiply, a.rotate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(e), s = Math.cos(e);
            return t[0] = n * s + o * i, t[1] = a * s + u * i, t[2] = n * -i + o * s, t[3] = a * -i + u * s, 
            t;
        }, a.scale = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = e[0], s = e[1];
            return t[0] = n * i, t[1] = a * i, t[2] = o * s, t[3] = u * s, t;
        }, a.fromRotation = function(t, r) {
            var e = Math.sin(r), n = Math.cos(r);
            return t[0] = n, t[1] = e, t[2] = -e, t[3] = n, t;
        }, a.fromScaling = function(t, r) {
            return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = r[1], t;
        }, a.str = function(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, a.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
        }, a.LDU = function(t, r, e, n) {
            return t[2] = n[2] / n[0], e[0] = n[0], e[1] = n[1], e[3] = n[3] - t[2] * e[1], 
            [ t, r, e ];
        }, a.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t;
        }, a.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t;
        }, a.sub = a.subtract, a.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3];
        }, a.equals = function(t, r) {
            var e = t[0], a = t[1], o = t[2], u = t[3], i = r[0], s = r[1], c = r[2], l = r[3];
            return Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(a - s) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(s)) && Math.abs(o - c) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(u - l) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(l));
        }, a.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t;
        }, a.multiplyScalarAndAdd = function(t, r, e, n) {
            return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t[3] = r[3] + e[3] * n, 
            t;
        }, t.exports = a;
    }, function(t, r, e) {
        var n = e(0), a = {};
        a.create = function() {
            var t = new n.ARRAY_TYPE(6);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, a.clone = function(t) {
            var r = new n.ARRAY_TYPE(6);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], 
            r;
        }, a.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t;
        }, a.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }, a.fromValues = function(t, r, e, a, o, u) {
            var i = new n.ARRAY_TYPE(6);
            return i[0] = t, i[1] = r, i[2] = e, i[3] = a, i[4] = o, i[5] = u, i;
        }, a.set = function(t, r, e, n, a, o, u) {
            return t[0] = r, t[1] = e, t[2] = n, t[3] = a, t[4] = o, t[5] = u, t;
        }, a.invert = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], s = e * o - n * a;
            return s ? (s = 1 / s, t[0] = o * s, t[1] = -n * s, t[2] = -a * s, t[3] = e * s, 
            t[4] = (a * i - o * u) * s, t[5] = (n * u - e * i) * s, t) : null;
        }, a.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, a.multiply = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = e[0], l = e[1], f = e[2], M = e[3], d = e[4], h = e[5];
            return t[0] = n * c + o * l, t[1] = a * c + u * l, t[2] = n * f + o * M, t[3] = a * f + u * M, 
            t[4] = n * d + o * h + i, t[5] = a * d + u * h + s, t;
        }, a.mul = a.multiply, a.rotate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = Math.sin(e), l = Math.cos(e);
            return t[0] = n * l + o * c, t[1] = a * l + u * c, t[2] = n * -c + o * l, t[3] = a * -c + u * l, 
            t[4] = i, t[5] = s, t;
        }, a.scale = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = e[0], l = e[1];
            return t[0] = n * c, t[1] = a * c, t[2] = o * l, t[3] = u * l, t[4] = i, t[5] = s, 
            t;
        }, a.translate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = e[0], l = e[1];
            return t[0] = n, t[1] = a, t[2] = o, t[3] = u, t[4] = n * c + o * l + i, t[5] = a * c + u * l + s, 
            t;
        }, a.fromRotation = function(t, r) {
            var e = Math.sin(r), n = Math.cos(r);
            return t[0] = n, t[1] = e, t[2] = -e, t[3] = n, t[4] = 0, t[5] = 0, t;
        }, a.fromScaling = function(t, r) {
            return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = r[1], t[4] = 0, t[5] = 0, t;
        }, a.fromTranslation = function(t, r) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = r[0], t[5] = r[1], t;
        }, a.str = function(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
        }, a.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
        }, a.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t[4] = r[4] + e[4], t[5] = r[5] + e[5], t;
        }, a.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t[4] = r[4] - e[4], t[5] = r[5] - e[5], t;
        }, a.sub = a.subtract, a.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, 
            t[5] = r[5] * e, t;
        }, a.multiplyScalarAndAdd = function(t, r, e, n) {
            return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t[3] = r[3] + e[3] * n, 
            t[4] = r[4] + e[4] * n, t[5] = r[5] + e[5] * n, t;
        }, a.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5];
        }, a.equals = function(t, r) {
            var e = t[0], a = t[1], o = t[2], u = t[3], i = t[4], s = t[5], c = r[0], l = r[1], f = r[2], M = r[3], d = r[4], h = r[5];
            return Math.abs(e - c) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(a - l) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(l)) && Math.abs(o - f) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(u - M) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(i - d) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(s - h) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(h));
        }, t.exports = a;
    }, function(t, r, e) {
        var n = e(0), a = {
            scalar: {},
            SIMD: {}
        };
        a.create = function() {
            var t = new n.ARRAY_TYPE(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, a.clone = function(t) {
            var r = new n.ARRAY_TYPE(16);
            return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], 
            r[6] = t[6], r[7] = t[7], r[8] = t[8], r[9] = t[9], r[10] = t[10], r[11] = t[11], 
            r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15], r;
        }, a.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t[6] = r[6], t[7] = r[7], t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], 
            t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15], t;
        }, a.fromValues = function(t, r, e, a, o, u, i, s, c, l, f, M, d, h, S, m) {
            var v = new n.ARRAY_TYPE(16);
            return v[0] = t, v[1] = r, v[2] = e, v[3] = a, v[4] = o, v[5] = u, v[6] = i, v[7] = s, 
            v[8] = c, v[9] = l, v[10] = f, v[11] = M, v[12] = d, v[13] = h, v[14] = S, v[15] = m, 
            v;
        }, a.set = function(t, r, e, n, a, o, u, i, s, c, l, f, M, d, h, S, m) {
            return t[0] = r, t[1] = e, t[2] = n, t[3] = a, t[4] = o, t[5] = u, t[6] = i, t[7] = s, 
            t[8] = c, t[9] = l, t[10] = f, t[11] = M, t[12] = d, t[13] = h, t[14] = S, t[15] = m, 
            t;
        }, a.identity = function(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, a.scalar.transpose = function(t, r) {
            if (t === r) {
                var e = r[1], n = r[2], a = r[3], o = r[6], u = r[7], i = r[11];
                t[1] = r[4], t[2] = r[8], t[3] = r[12], t[4] = e, t[6] = r[9], t[7] = r[13], t[8] = n, 
                t[9] = o, t[11] = r[14], t[12] = a, t[13] = u, t[14] = i;
            } else t[0] = r[0], t[1] = r[4], t[2] = r[8], t[3] = r[12], t[4] = r[1], t[5] = r[5], 
            t[6] = r[9], t[7] = r[13], t[8] = r[2], t[9] = r[6], t[10] = r[10], t[11] = r[14], 
            t[12] = r[3], t[13] = r[7], t[14] = r[11], t[15] = r[15];
            return t;
        }, a.SIMD.transpose = function(t, r) {
            var e, n, a, o, u, i, s, c, l, f;
            return e = SIMD.Float32x4.load(r, 0), n = SIMD.Float32x4.load(r, 4), a = SIMD.Float32x4.load(r, 8), 
            o = SIMD.Float32x4.load(r, 12), u = SIMD.Float32x4.shuffle(e, n, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(a, o, 0, 1, 4, 5), 
            s = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), c = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, s), SIMD.Float32x4.store(t, 4, c), u = SIMD.Float32x4.shuffle(e, n, 2, 3, 6, 7), 
            i = SIMD.Float32x4.shuffle(a, o, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), 
            f = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, l), SIMD.Float32x4.store(t, 12, f), 
            t;
        }, a.transpose = n.USE_SIMD ? a.SIMD.transpose : a.scalar.transpose, a.scalar.invert = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], s = r[6], c = r[7], l = r[8], f = r[9], M = r[10], d = r[11], h = r[12], S = r[13], m = r[14], v = r[15], I = e * i - n * u, D = e * s - a * u, F = e * c - o * u, x = n * s - a * i, E = n * c - o * i, p = a * c - o * s, T = l * S - f * h, _ = l * m - M * h, A = l * v - d * h, b = f * m - M * S, y = f * v - d * S, g = M * v - d * m, R = I * g - D * y + F * b + x * A - E * _ + p * T;
            return R ? (R = 1 / R, t[0] = (i * g - s * y + c * b) * R, t[1] = (a * y - n * g - o * b) * R, 
            t[2] = (S * p - m * E + v * x) * R, t[3] = (M * E - f * p - d * x) * R, t[4] = (s * A - u * g - c * _) * R, 
            t[5] = (e * g - a * A + o * _) * R, t[6] = (m * F - h * p - v * D) * R, t[7] = (l * p - M * F + d * D) * R, 
            t[8] = (u * y - i * A + c * T) * R, t[9] = (n * A - e * y - o * T) * R, t[10] = (h * E - S * F + v * I) * R, 
            t[11] = (f * F - l * E - d * I) * R, t[12] = (i * _ - u * b - s * T) * R, t[13] = (e * b - n * _ + a * T) * R, 
            t[14] = (S * D - h * x - m * I) * R, t[15] = (l * x - f * D + M * I) * R, t) : null;
        }, a.SIMD.invert = function(t, r) {
            var e, n, a, o, u, i, s, c, l, f, M = SIMD.Float32x4.load(r, 0), d = SIMD.Float32x4.load(r, 4), h = SIMD.Float32x4.load(r, 8), S = SIMD.Float32x4.load(r, 12);
            return u = SIMD.Float32x4.shuffle(M, d, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(h, S, 0, 1, 4, 5), 
            e = SIMD.Float32x4.shuffle(u, n, 0, 2, 4, 6), n = SIMD.Float32x4.shuffle(n, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(M, d, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(h, S, 2, 3, 6, 7), 
            a = SIMD.Float32x4.shuffle(u, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(a, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.mul(n, u), 
            s = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), i), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(n, a), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), i), 
            l = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), i), 
            c = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(a, u)), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(e, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), c), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, u), l), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), c), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(a, u)), 
            u = SIMD.Float32x4.mul(e, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(a, u)), 
            c = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), c), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), s), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(n, u)), 
            u = SIMD.Float32x4.mul(e, a), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), s), 
            l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(n, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, u)), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), l), 
            f = SIMD.Float32x4.mul(e, i), f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), f), 
            f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), f), u = SIMD.Float32x4.reciprocalApproximation(f), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(f, SIMD.Float32x4.mul(u, u))), 
            (f = SIMD.Float32x4.swizzle(f, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(f, i)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(f, s)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(f, c)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(f, l)), t) : null;
        }, a.invert = n.USE_SIMD ? a.SIMD.invert : a.scalar.invert, a.scalar.adjoint = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], s = r[6], c = r[7], l = r[8], f = r[9], M = r[10], d = r[11], h = r[12], S = r[13], m = r[14], v = r[15];
            return t[0] = i * (M * v - d * m) - f * (s * v - c * m) + S * (s * d - c * M), t[1] = -(n * (M * v - d * m) - f * (a * v - o * m) + S * (a * d - o * M)), 
            t[2] = n * (s * v - c * m) - i * (a * v - o * m) + S * (a * c - o * s), t[3] = -(n * (s * d - c * M) - i * (a * d - o * M) + f * (a * c - o * s)), 
            t[4] = -(u * (M * v - d * m) - l * (s * v - c * m) + h * (s * d - c * M)), t[5] = e * (M * v - d * m) - l * (a * v - o * m) + h * (a * d - o * M), 
            t[6] = -(e * (s * v - c * m) - u * (a * v - o * m) + h * (a * c - o * s)), t[7] = e * (s * d - c * M) - u * (a * d - o * M) + l * (a * c - o * s), 
            t[8] = u * (f * v - d * S) - l * (i * v - c * S) + h * (i * d - c * f), t[9] = -(e * (f * v - d * S) - l * (n * v - o * S) + h * (n * d - o * f)), 
            t[10] = e * (i * v - c * S) - u * (n * v - o * S) + h * (n * c - o * i), t[11] = -(e * (i * d - c * f) - u * (n * d - o * f) + l * (n * c - o * i)), 
            t[12] = -(u * (f * m - M * S) - l * (i * m - s * S) + h * (i * M - s * f)), t[13] = e * (f * m - M * S) - l * (n * m - a * S) + h * (n * M - a * f), 
            t[14] = -(e * (i * m - s * S) - u * (n * m - a * S) + h * (n * s - a * i)), t[15] = e * (i * M - s * f) - u * (n * M - a * f) + l * (n * s - a * i), 
            t;
        }, a.SIMD.adjoint = function(t, r) {
            var e, n, a, o, u, i, s, c, l, f, M, d, h, e = SIMD.Float32x4.load(r, 0), n = SIMD.Float32x4.load(r, 4), a = SIMD.Float32x4.load(r, 8), o = SIMD.Float32x4.load(r, 12);
            return l = SIMD.Float32x4.shuffle(e, n, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(a, o, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(l, i, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(i, l, 1, 3, 5, 7), 
            l = SIMD.Float32x4.shuffle(e, n, 2, 3, 6, 7), c = SIMD.Float32x4.shuffle(a, o, 2, 3, 6, 7), 
            s = SIMD.Float32x4.shuffle(l, c, 0, 2, 4, 6), c = SIMD.Float32x4.shuffle(c, l, 1, 3, 5, 7), 
            l = SIMD.Float32x4.mul(s, c), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), f = SIMD.Float32x4.mul(i, l), 
            M = SIMD.Float32x4.mul(u, l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, l), f), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, l), M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            l = SIMD.Float32x4.mul(i, s), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, l), f), 
            h = SIMD.Float32x4.mul(u, l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(c, l)), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, l), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), 
            l = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), c), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), 
            s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, l), f), 
            d = SIMD.Float32x4.mul(u, l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(s, l)), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, l), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), 
            l = SIMD.Float32x4.mul(u, i), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, l), d), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, l), h), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(c, l), d), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(s, l)), 
            l = SIMD.Float32x4.mul(u, c), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(s, l)), 
            d = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, l), d), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            M = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, l), M), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(i, l)), 
            l = SIMD.Float32x4.mul(u, s), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, l), M), 
            h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(i, l)), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(c, l)), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, l), h), 
            SIMD.Float32x4.store(t, 0, f), SIMD.Float32x4.store(t, 4, M), SIMD.Float32x4.store(t, 8, d), 
            SIMD.Float32x4.store(t, 12, h), t;
        }, a.adjoint = n.USE_SIMD ? a.SIMD.adjoint : a.scalar.adjoint, a.determinant = function(t) {
            var r = t[0], e = t[1], n = t[2], a = t[3], o = t[4], u = t[5], i = t[6], s = t[7], c = t[8], l = t[9], f = t[10], M = t[11], d = t[12], h = t[13], S = t[14], m = t[15];
            return (r * u - e * o) * (f * m - M * S) - (r * i - n * o) * (l * m - M * h) + (r * s - a * o) * (l * S - f * h) + (e * i - n * u) * (c * m - M * d) - (e * s - a * u) * (c * S - f * d) + (n * s - a * i) * (c * h - l * d);
        }, a.SIMD.multiply = function(t, r, e) {
            var n = SIMD.Float32x4.load(r, 0), a = SIMD.Float32x4.load(r, 4), o = SIMD.Float32x4.load(r, 8), u = SIMD.Float32x4.load(r, 12), i = SIMD.Float32x4.load(e, 0), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, s);
            var c = SIMD.Float32x4.load(e, 4), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, l);
            var f = SIMD.Float32x4.load(e, 8), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, M);
            var d = SIMD.Float32x4.load(e, 12), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, h), t;
        }, a.scalar.multiply = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = r[6], l = r[7], f = r[8], M = r[9], d = r[10], h = r[11], S = r[12], m = r[13], v = r[14], I = r[15], D = e[0], F = e[1], x = e[2], E = e[3];
            return t[0] = D * n + F * i + x * f + E * S, t[1] = D * a + F * s + x * M + E * m, 
            t[2] = D * o + F * c + x * d + E * v, t[3] = D * u + F * l + x * h + E * I, D = e[4], 
            F = e[5], x = e[6], E = e[7], t[4] = D * n + F * i + x * f + E * S, t[5] = D * a + F * s + x * M + E * m, 
            t[6] = D * o + F * c + x * d + E * v, t[7] = D * u + F * l + x * h + E * I, D = e[8], 
            F = e[9], x = e[10], E = e[11], t[8] = D * n + F * i + x * f + E * S, t[9] = D * a + F * s + x * M + E * m, 
            t[10] = D * o + F * c + x * d + E * v, t[11] = D * u + F * l + x * h + E * I, D = e[12], 
            F = e[13], x = e[14], E = e[15], t[12] = D * n + F * i + x * f + E * S, t[13] = D * a + F * s + x * M + E * m, 
            t[14] = D * o + F * c + x * d + E * v, t[15] = D * u + F * l + x * h + E * I, t;
        }, a.multiply = n.USE_SIMD ? a.SIMD.multiply : a.scalar.multiply, a.mul = a.multiply, 
        a.scalar.translate = function(t, r, e) {
            var n, a, o, u, i, s, c, l, f, M, d, h, S = e[0], m = e[1], v = e[2];
            return r === t ? (t[12] = r[0] * S + r[4] * m + r[8] * v + r[12], t[13] = r[1] * S + r[5] * m + r[9] * v + r[13], 
            t[14] = r[2] * S + r[6] * m + r[10] * v + r[14], t[15] = r[3] * S + r[7] * m + r[11] * v + r[15]) : (n = r[0], 
            a = r[1], o = r[2], u = r[3], i = r[4], s = r[5], c = r[6], l = r[7], f = r[8], 
            M = r[9], d = r[10], h = r[11], t[0] = n, t[1] = a, t[2] = o, t[3] = u, t[4] = i, 
            t[5] = s, t[6] = c, t[7] = l, t[8] = f, t[9] = M, t[10] = d, t[11] = h, t[12] = n * S + i * m + f * v + r[12], 
            t[13] = a * S + s * m + M * v + r[13], t[14] = o * S + c * m + d * v + r[14], t[15] = u * S + l * m + h * v + r[15]), 
            t;
        }, a.SIMD.translate = function(t, r, e) {
            var n = SIMD.Float32x4.load(r, 0), a = SIMD.Float32x4.load(r, 4), o = SIMD.Float32x4.load(r, 8), u = SIMD.Float32x4.load(r, 12), i = SIMD.Float32x4(e[0], e[1], e[2], 0);
            r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t[6] = r[6], t[7] = r[7], t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11]), 
            n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(i, 0, 0, 0, 0)), a = SIMD.Float32x4.mul(a, SIMD.Float32x4.swizzle(i, 1, 1, 1, 1)), 
            o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(i, 2, 2, 2, 2));
            var s = SIMD.Float32x4.add(n, SIMD.Float32x4.add(a, SIMD.Float32x4.add(o, u)));
            return SIMD.Float32x4.store(t, 12, s), t;
        }, a.translate = n.USE_SIMD ? a.SIMD.translate : a.scalar.translate, a.scalar.scale = function(t, r, e) {
            var n = e[0], a = e[1], o = e[2];
            return t[0] = r[0] * n, t[1] = r[1] * n, t[2] = r[2] * n, t[3] = r[3] * n, t[4] = r[4] * a, 
            t[5] = r[5] * a, t[6] = r[6] * a, t[7] = r[7] * a, t[8] = r[8] * o, t[9] = r[9] * o, 
            t[10] = r[10] * o, t[11] = r[11] * o, t[12] = r[12], t[13] = r[13], t[14] = r[14], 
            t[15] = r[15], t;
        }, a.SIMD.scale = function(t, r, e) {
            var n, a, o, u = SIMD.Float32x4(e[0], e[1], e[2], 0);
            return n = SIMD.Float32x4.load(r, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0))), 
            a = SIMD.Float32x4.load(r, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(a, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1))), 
            o = SIMD.Float32x4.load(r, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2))), 
            t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15], t;
        }, a.scale = n.USE_SIMD ? a.SIMD.scale : a.scalar.scale, a.rotate = function(t, r, e, a) {
            var o, u, i, s, c, l, f, M, d, h, S, m, v, I, D, F, x, E, p, T, _, A, b, y, g = a[0], R = a[1], w = a[2], N = Math.sqrt(g * g + R * R + w * w);
            return Math.abs(N) < n.EPSILON ? null : (N = 1 / N, g *= N, R *= N, w *= N, o = Math.sin(e), 
            u = Math.cos(e), i = 1 - u, s = r[0], c = r[1], l = r[2], f = r[3], M = r[4], d = r[5], 
            h = r[6], S = r[7], m = r[8], v = r[9], I = r[10], D = r[11], F = g * g * i + u, 
            x = R * g * i + w * o, E = w * g * i - R * o, p = g * R * i - w * o, T = R * R * i + u, 
            _ = w * R * i + g * o, A = g * w * i + R * o, b = R * w * i - g * o, y = w * w * i + u, 
            t[0] = s * F + M * x + m * E, t[1] = c * F + d * x + v * E, t[2] = l * F + h * x + I * E, 
            t[3] = f * F + S * x + D * E, t[4] = s * p + M * T + m * _, t[5] = c * p + d * T + v * _, 
            t[6] = l * p + h * T + I * _, t[7] = f * p + S * T + D * _, t[8] = s * A + M * b + m * y, 
            t[9] = c * A + d * b + v * y, t[10] = l * A + h * b + I * y, t[11] = f * A + S * b + D * y, 
            r !== t && (t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15]), t);
        }, a.scalar.rotateX = function(t, r, e) {
            var n = Math.sin(e), a = Math.cos(e), o = r[4], u = r[5], i = r[6], s = r[7], c = r[8], l = r[9], f = r[10], M = r[11];
            return r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[4] = o * a + c * n, t[5] = u * a + l * n, 
            t[6] = i * a + f * n, t[7] = s * a + M * n, t[8] = c * a - o * n, t[9] = l * a - u * n, 
            t[10] = f * a - i * n, t[11] = M * a - s * n, t;
        }, a.SIMD.rotateX = function(t, r, e) {
            var n = SIMD.Float32x4.splat(Math.sin(e)), a = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], t[13] = r[13], 
            t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 4), u = SIMD.Float32x4.load(r, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, a), SIMD.Float32x4.mul(o, n))), 
            t;
        }, a.rotateX = n.USE_SIMD ? a.SIMD.rotateX : a.scalar.rotateX, a.scalar.rotateY = function(t, r, e) {
            var n = Math.sin(e), a = Math.cos(e), o = r[0], u = r[1], i = r[2], s = r[3], c = r[8], l = r[9], f = r[10], M = r[11];
            return r !== t && (t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * a - c * n, t[1] = u * a - l * n, 
            t[2] = i * a - f * n, t[3] = s * a - M * n, t[8] = o * n + c * a, t[9] = u * n + l * a, 
            t[10] = i * n + f * a, t[11] = s * n + M * a, t;
        }, a.SIMD.rotateY = function(t, r, e) {
            var n = SIMD.Float32x4.splat(Math.sin(e)), a = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[12] = r[12], t[13] = r[13], 
            t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 0), u = SIMD.Float32x4.load(r, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, a))), 
            t;
        }, a.rotateY = n.USE_SIMD ? a.SIMD.rotateY : a.scalar.rotateY, a.scalar.rotateZ = function(t, r, e) {
            var n = Math.sin(e), a = Math.cos(e), o = r[0], u = r[1], i = r[2], s = r[3], c = r[4], l = r[5], f = r[6], M = r[7];
            return r !== t && (t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * a + c * n, t[1] = u * a + l * n, 
            t[2] = i * a + f * n, t[3] = s * a + M * n, t[4] = c * a - o * n, t[5] = l * a - u * n, 
            t[6] = f * a - i * n, t[7] = M * a - s * n, t;
        }, a.SIMD.rotateZ = function(t, r, e) {
            var n = SIMD.Float32x4.splat(Math.sin(e)), a = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 0), u = SIMD.Float32x4.load(r, 4);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, a), SIMD.Float32x4.mul(o, n))), 
            t;
        }, a.rotateZ = n.USE_SIMD ? a.SIMD.rotateZ : a.scalar.rotateZ, a.fromTranslation = function(t, r) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], 
            t[15] = 1, t;
        }, a.fromScaling = function(t, r) {
            return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r[1], t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = r[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, 
            t[15] = 1, t;
        }, a.fromRotation = function(t, r, e) {
            var a, o, u, i = e[0], s = e[1], c = e[2], l = Math.sqrt(i * i + s * s + c * c);
            return Math.abs(l) < n.EPSILON ? null : (l = 1 / l, i *= l, s *= l, c *= l, a = Math.sin(r), 
            o = Math.cos(r), u = 1 - o, t[0] = i * i * u + o, t[1] = s * i * u + c * a, t[2] = c * i * u - s * a, 
            t[3] = 0, t[4] = i * s * u - c * a, t[5] = s * s * u + o, t[6] = c * s * u + i * a, 
            t[7] = 0, t[8] = i * c * u + s * a, t[9] = s * c * u - i * a, t[10] = c * c * u + o, 
            t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
        }, a.fromXRotation = function(t, r) {
            var e = Math.sin(r), n = Math.cos(r);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = e, t[7] = 0, 
            t[8] = 0, t[9] = -e, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, a.fromYRotation = function(t, r) {
            var e = Math.sin(r), n = Math.cos(r);
            return t[0] = n, t[1] = 0, t[2] = -e, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
            t[8] = e, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, a.fromZRotation = function(t, r) {
            var e = Math.sin(r), n = Math.cos(r);
            return t[0] = n, t[1] = e, t[2] = 0, t[3] = 0, t[4] = -e, t[5] = n, t[6] = 0, t[7] = 0, 
            t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
            t;
        }, a.fromRotationTranslation = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = n + n, s = a + a, c = o + o, l = n * i, f = n * s, M = n * c, d = a * s, h = a * c, S = o * c, m = u * i, v = u * s, I = u * c;
            return t[0] = 1 - (d + S), t[1] = f + I, t[2] = M - v, t[3] = 0, t[4] = f - I, t[5] = 1 - (l + S), 
            t[6] = h + m, t[7] = 0, t[8] = M + v, t[9] = h - m, t[10] = 1 - (l + d), t[11] = 0, 
            t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
        }, a.getTranslation = function(t, r) {
            return t[0] = r[12], t[1] = r[13], t[2] = r[14], t;
        }, a.getRotation = function(t, r) {
            var e = r[0] + r[5] + r[10], n = 0;
            return e > 0 ? (n = 2 * Math.sqrt(e + 1), t[3] = .25 * n, t[0] = (r[6] - r[9]) / n, 
            t[1] = (r[8] - r[2]) / n, t[2] = (r[1] - r[4]) / n) : r[0] > r[5] & r[0] > r[10] ? (n = 2 * Math.sqrt(1 + r[0] - r[5] - r[10]), 
            t[3] = (r[6] - r[9]) / n, t[0] = .25 * n, t[1] = (r[1] + r[4]) / n, t[2] = (r[8] + r[2]) / n) : r[5] > r[10] ? (n = 2 * Math.sqrt(1 + r[5] - r[0] - r[10]), 
            t[3] = (r[8] - r[2]) / n, t[0] = (r[1] + r[4]) / n, t[1] = .25 * n, t[2] = (r[6] + r[9]) / n) : (n = 2 * Math.sqrt(1 + r[10] - r[0] - r[5]), 
            t[3] = (r[1] - r[4]) / n, t[0] = (r[8] + r[2]) / n, t[1] = (r[6] + r[9]) / n, t[2] = .25 * n), 
            t;
        }, a.fromRotationTranslationScale = function(t, r, e, n) {
            var a = r[0], o = r[1], u = r[2], i = r[3], s = a + a, c = o + o, l = u + u, f = a * s, M = a * c, d = a * l, h = o * c, S = o * l, m = u * l, v = i * s, I = i * c, D = i * l, F = n[0], x = n[1], E = n[2];
            return t[0] = (1 - (h + m)) * F, t[1] = (M + D) * F, t[2] = (d - I) * F, t[3] = 0, 
            t[4] = (M - D) * x, t[5] = (1 - (f + m)) * x, t[6] = (S + v) * x, t[7] = 0, t[8] = (d + I) * E, 
            t[9] = (S - v) * E, t[10] = (1 - (f + h)) * E, t[11] = 0, t[12] = e[0], t[13] = e[1], 
            t[14] = e[2], t[15] = 1, t;
        }, a.fromRotationTranslationScaleOrigin = function(t, r, e, n, a) {
            var o = r[0], u = r[1], i = r[2], s = r[3], c = o + o, l = u + u, f = i + i, M = o * c, d = o * l, h = o * f, S = u * l, m = u * f, v = i * f, I = s * c, D = s * l, F = s * f, x = n[0], E = n[1], p = n[2], T = a[0], _ = a[1], A = a[2];
            return t[0] = (1 - (S + v)) * x, t[1] = (d + F) * x, t[2] = (h - D) * x, t[3] = 0, 
            t[4] = (d - F) * E, t[5] = (1 - (M + v)) * E, t[6] = (m + I) * E, t[7] = 0, t[8] = (h + D) * p, 
            t[9] = (m - I) * p, t[10] = (1 - (M + S)) * p, t[11] = 0, t[12] = e[0] + T - (t[0] * T + t[4] * _ + t[8] * A), 
            t[13] = e[1] + _ - (t[1] * T + t[5] * _ + t[9] * A), t[14] = e[2] + A - (t[2] * T + t[6] * _ + t[10] * A), 
            t[15] = 1, t;
        }, a.fromQuat = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = e + e, i = n + n, s = a + a, c = e * u, l = n * u, f = n * i, M = a * u, d = a * i, h = a * s, S = o * u, m = o * i, v = o * s;
            return t[0] = 1 - f - h, t[1] = l + v, t[2] = M - m, t[3] = 0, t[4] = l - v, t[5] = 1 - c - h, 
            t[6] = d + S, t[7] = 0, t[8] = M + m, t[9] = d - S, t[10] = 1 - c - f, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, a.frustum = function(t, r, e, n, a, o, u) {
            var i = 1 / (e - r), s = 1 / (a - n), c = 1 / (o - u);
            return t[0] = 2 * o * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * s, 
            t[6] = 0, t[7] = 0, t[8] = (e + r) * i, t[9] = (a + n) * s, t[10] = (u + o) * c, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * o * 2 * c, t[15] = 0, t;
        }, a.perspective = function(t, r, e, n, a) {
            var o = 1 / Math.tan(r / 2), u = 1 / (n - a);
            return t[0] = o / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (a + n) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * a * n * u, t[15] = 0, t;
        }, a.perspectiveFromFieldOfView = function(t, r, e, n) {
            var a = Math.tan(r.upDegrees * Math.PI / 180), o = Math.tan(r.downDegrees * Math.PI / 180), u = Math.tan(r.leftDegrees * Math.PI / 180), i = Math.tan(r.rightDegrees * Math.PI / 180), s = 2 / (u + i), c = 2 / (a + o);
            return t[0] = s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = c, t[6] = 0, t[7] = 0, 
            t[8] = -(u - i) * s * .5, t[9] = (a - o) * c * .5, t[10] = n / (e - n), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = n * e / (e - n), t[15] = 0, t;
        }, a.ortho = function(t, r, e, n, a, o, u) {
            var i = 1 / (r - e), s = 1 / (n - a), c = 1 / (o - u);
            return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * s, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * c, t[11] = 0, t[12] = (r + e) * i, t[13] = (a + n) * s, 
            t[14] = (u + o) * c, t[15] = 1, t;
        }, a.lookAt = function(t, r, e, o) {
            var u, i, s, c, l, f, M, d, h, S, m = r[0], v = r[1], I = r[2], D = o[0], F = o[1], x = o[2], E = e[0], p = e[1], T = e[2];
            return Math.abs(m - E) < n.EPSILON && Math.abs(v - p) < n.EPSILON && Math.abs(I - T) < n.EPSILON ? a.identity(t) : (M = m - E, 
            d = v - p, h = I - T, S = 1 / Math.sqrt(M * M + d * d + h * h), M *= S, d *= S, 
            h *= S, u = F * h - x * d, i = x * M - D * h, s = D * d - F * M, S = Math.sqrt(u * u + i * i + s * s), 
            S ? (S = 1 / S, u *= S, i *= S, s *= S) : (u = 0, i = 0, s = 0), c = d * s - h * i, 
            l = h * u - M * s, f = M * i - d * u, S = Math.sqrt(c * c + l * l + f * f), S ? (S = 1 / S, 
            c *= S, l *= S, f *= S) : (c = 0, l = 0, f = 0), t[0] = u, t[1] = c, t[2] = M, t[3] = 0, 
            t[4] = i, t[5] = l, t[6] = d, t[7] = 0, t[8] = s, t[9] = f, t[10] = h, t[11] = 0, 
            t[12] = -(u * m + i * v + s * I), t[13] = -(c * m + l * v + f * I), t[14] = -(M * m + d * v + h * I), 
            t[15] = 1, t);
        }, a.str = function(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
        }, a.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
        }, a.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], 
            t[4] = r[4] + e[4], t[5] = r[5] + e[5], t[6] = r[6] + e[6], t[7] = r[7] + e[7], 
            t[8] = r[8] + e[8], t[9] = r[9] + e[9], t[10] = r[10] + e[10], t[11] = r[11] + e[11], 
            t[12] = r[12] + e[12], t[13] = r[13] + e[13], t[14] = r[14] + e[14], t[15] = r[15] + e[15], 
            t;
        }, a.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], 
            t[4] = r[4] - e[4], t[5] = r[5] - e[5], t[6] = r[6] - e[6], t[7] = r[7] - e[7], 
            t[8] = r[8] - e[8], t[9] = r[9] - e[9], t[10] = r[10] - e[10], t[11] = r[11] - e[11], 
            t[12] = r[12] - e[12], t[13] = r[13] - e[13], t[14] = r[14] - e[14], t[15] = r[15] - e[15], 
            t;
        }, a.sub = a.subtract, a.multiplyScalar = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, 
            t[5] = r[5] * e, t[6] = r[6] * e, t[7] = r[7] * e, t[8] = r[8] * e, t[9] = r[9] * e, 
            t[10] = r[10] * e, t[11] = r[11] * e, t[12] = r[12] * e, t[13] = r[13] * e, t[14] = r[14] * e, 
            t[15] = r[15] * e, t;
        }, a.multiplyScalarAndAdd = function(t, r, e, n) {
            return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t[3] = r[3] + e[3] * n, 
            t[4] = r[4] + e[4] * n, t[5] = r[5] + e[5] * n, t[6] = r[6] + e[6] * n, t[7] = r[7] + e[7] * n, 
            t[8] = r[8] + e[8] * n, t[9] = r[9] + e[9] * n, t[10] = r[10] + e[10] * n, t[11] = r[11] + e[11] * n, 
            t[12] = r[12] + e[12] * n, t[13] = r[13] + e[13] * n, t[14] = r[14] + e[14] * n, 
            t[15] = r[15] + e[15] * n, t;
        }, a.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5] && t[6] === r[6] && t[7] === r[7] && t[8] === r[8] && t[9] === r[9] && t[10] === r[10] && t[11] === r[11] && t[12] === r[12] && t[13] === r[13] && t[14] === r[14] && t[15] === r[15];
        }, a.equals = function(t, r) {
            var e = t[0], a = t[1], o = t[2], u = t[3], i = t[4], s = t[5], c = t[6], l = t[7], f = t[8], M = t[9], d = t[10], h = t[11], S = t[12], m = t[13], v = t[14], I = t[15], D = r[0], F = r[1], x = r[2], E = r[3], p = r[4], T = r[5], _ = r[6], A = r[7], b = r[8], y = r[9], g = r[10], R = r[11], w = r[12], N = r[13], O = r[14], P = r[15];
            return Math.abs(e - D) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(D)) && Math.abs(a - F) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(F)) && Math.abs(o - x) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(x)) && Math.abs(u - E) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(i - p) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(s - T) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(T)) && Math.abs(c - _) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(_)) && Math.abs(l - A) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(A)) && Math.abs(f - b) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(b)) && Math.abs(M - y) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(y)) && Math.abs(d - g) <= n.EPSILON * Math.max(1, Math.abs(d), Math.abs(g)) && Math.abs(h - R) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(R)) && Math.abs(S - w) <= n.EPSILON * Math.max(1, Math.abs(S), Math.abs(w)) && Math.abs(m - N) <= n.EPSILON * Math.max(1, Math.abs(m), Math.abs(N)) && Math.abs(v - O) <= n.EPSILON * Math.max(1, Math.abs(v), Math.abs(O)) && Math.abs(I - P) <= n.EPSILON * Math.max(1, Math.abs(I), Math.abs(P));
        }, t.exports = a;
    }, function(t, r, e) {
        var n = e(0), a = e(7), o = e(8), u = e(9), i = {};
        i.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.rotationTo = function() {
            var t = o.create(), r = o.fromValues(1, 0, 0), e = o.fromValues(0, 1, 0);
            return function(n, a, u) {
                var s = o.dot(a, u);
                return s < -.999999 ? (o.cross(t, r, a), o.length(t) < 1e-6 && o.cross(t, e, a), 
                o.normalize(t, t), i.setAxisAngle(n, t, Math.PI), n) : s > .999999 ? (n[0] = 0, 
                n[1] = 0, n[2] = 0, n[3] = 1, n) : (o.cross(t, a, u), n[0] = t[0], n[1] = t[1], 
                n[2] = t[2], n[3] = 1 + s, i.normalize(n, n));
            };
        }(), i.setAxes = function() {
            var t = a.create();
            return function(r, e, n, a) {
                return t[0] = n[0], t[3] = n[1], t[6] = n[2], t[1] = a[0], t[4] = a[1], t[7] = a[2], 
                t[2] = -e[0], t[5] = -e[1], t[8] = -e[2], i.normalize(r, i.fromMat3(r, t));
            };
        }(), i.clone = u.clone, i.fromValues = u.fromValues, i.copy = u.copy, i.set = u.set, 
        i.identity = function(t) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.setAxisAngle = function(t, r, e) {
            e *= .5;
            var n = Math.sin(e);
            return t[0] = n * r[0], t[1] = n * r[1], t[2] = n * r[2], t[3] = Math.cos(e), t;
        }, i.getAxisAngle = function(t, r) {
            var e = 2 * Math.acos(r[3]), n = Math.sin(e / 2);
            return 0 != n ? (t[0] = r[0] / n, t[1] = r[1] / n, t[2] = r[2] / n) : (t[0] = 1, 
            t[1] = 0, t[2] = 0), e;
        }, i.add = u.add, i.multiply = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = e[0], s = e[1], c = e[2], l = e[3];
            return t[0] = n * l + u * i + a * c - o * s, t[1] = a * l + u * s + o * i - n * c, 
            t[2] = o * l + u * c + n * s - a * i, t[3] = u * l - n * i - a * s - o * c, t;
        }, i.mul = i.multiply, i.scale = u.scale, i.rotateX = function(t, r, e) {
            e *= .5;
            var n = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(e), s = Math.cos(e);
            return t[0] = n * s + u * i, t[1] = a * s + o * i, t[2] = o * s - a * i, t[3] = u * s - n * i, 
            t;
        }, i.rotateY = function(t, r, e) {
            e *= .5;
            var n = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(e), s = Math.cos(e);
            return t[0] = n * s - o * i, t[1] = a * s + u * i, t[2] = o * s + n * i, t[3] = u * s - a * i, 
            t;
        }, i.rotateZ = function(t, r, e) {
            e *= .5;
            var n = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(e), s = Math.cos(e);
            return t[0] = n * s + a * i, t[1] = a * s - n * i, t[2] = o * s + u * i, t[3] = u * s - o * i, 
            t;
        }, i.calculateW = function(t, r) {
            var e = r[0], n = r[1], a = r[2];
            return t[0] = e, t[1] = n, t[2] = a, t[3] = Math.sqrt(Math.abs(1 - e * e - n * n - a * a)), 
            t;
        }, i.dot = u.dot, i.lerp = u.lerp, i.slerp = function(t, r, e, n) {
            var a, o, u, i, s, c = r[0], l = r[1], f = r[2], M = r[3], d = e[0], h = e[1], S = e[2], m = e[3];
            return o = c * d + l * h + f * S + M * m, o < 0 && (o = -o, d = -d, h = -h, S = -S, 
            m = -m), 1 - o > 1e-6 ? (a = Math.acos(o), u = Math.sin(a), i = Math.sin((1 - n) * a) / u, 
            s = Math.sin(n * a) / u) : (i = 1 - n, s = n), t[0] = i * c + s * d, t[1] = i * l + s * h, 
            t[2] = i * f + s * S, t[3] = i * M + s * m, t;
        }, i.sqlerp = function() {
            var t = i.create(), r = i.create();
            return function(e, n, a, o, u, s) {
                return i.slerp(t, n, u, s), i.slerp(r, a, o, s), i.slerp(e, t, r, 2 * s * (1 - s)), 
                e;
            };
        }(), i.invert = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = e * e + n * n + a * a + o * o, i = u ? 1 / u : 0;
            return t[0] = -e * i, t[1] = -n * i, t[2] = -a * i, t[3] = o * i, t;
        }, i.conjugate = function(t, r) {
            return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t[3] = r[3], t;
        }, i.length = u.length, i.len = i.length, i.squaredLength = u.squaredLength, i.sqrLen = i.squaredLength, 
        i.normalize = u.normalize, i.fromMat3 = function(t, r) {
            var e, n = r[0] + r[4] + r[8];
            if (n > 0) e = Math.sqrt(n + 1), t[3] = .5 * e, e = .5 / e, t[0] = (r[5] - r[7]) * e, 
            t[1] = (r[6] - r[2]) * e, t[2] = (r[1] - r[3]) * e; else {
                var a = 0;
                r[4] > r[0] && (a = 1), r[8] > r[3 * a + a] && (a = 2);
                var o = (a + 1) % 3, u = (a + 2) % 3;
                e = Math.sqrt(r[3 * a + a] - r[3 * o + o] - r[3 * u + u] + 1), t[a] = .5 * e, e = .5 / e, 
                t[3] = (r[3 * o + u] - r[3 * u + o]) * e, t[o] = (r[3 * o + a] + r[3 * a + o]) * e, 
                t[u] = (r[3 * u + a] + r[3 * a + u]) * e;
            }
            return t;
        }, i.str = function(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, i.exactEquals = u.exactEquals, i.equals = u.equals, t.exports = i;
    }, function(t, r, e) {
        var n = e(0), a = {};
        a.create = function() {
            var t = new n.ARRAY_TYPE(2);
            return t[0] = 0, t[1] = 0, t;
        }, a.clone = function(t) {
            var r = new n.ARRAY_TYPE(2);
            return r[0] = t[0], r[1] = t[1], r;
        }, a.fromValues = function(t, r) {
            var e = new n.ARRAY_TYPE(2);
            return e[0] = t, e[1] = r, e;
        }, a.copy = function(t, r) {
            return t[0] = r[0], t[1] = r[1], t;
        }, a.set = function(t, r, e) {
            return t[0] = r, t[1] = e, t;
        }, a.add = function(t, r, e) {
            return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t;
        }, a.subtract = function(t, r, e) {
            return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t;
        }, a.sub = a.subtract, a.multiply = function(t, r, e) {
            return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t;
        }, a.mul = a.multiply, a.divide = function(t, r, e) {
            return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t;
        }, a.div = a.divide, a.ceil = function(t, r) {
            return t[0] = Math.ceil(r[0]), t[1] = Math.ceil(r[1]), t;
        }, a.floor = function(t, r) {
            return t[0] = Math.floor(r[0]), t[1] = Math.floor(r[1]), t;
        }, a.min = function(t, r, e) {
            return t[0] = Math.min(r[0], e[0]), t[1] = Math.min(r[1], e[1]), t;
        }, a.max = function(t, r, e) {
            return t[0] = Math.max(r[0], e[0]), t[1] = Math.max(r[1], e[1]), t;
        }, a.round = function(t, r) {
            return t[0] = Math.round(r[0]), t[1] = Math.round(r[1]), t;
        }, a.scale = function(t, r, e) {
            return t[0] = r[0] * e, t[1] = r[1] * e, t;
        }, a.scaleAndAdd = function(t, r, e, n) {
            return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t;
        }, a.distance = function(t, r) {
            var e = r[0] - t[0], n = r[1] - t[1];
            return Math.sqrt(e * e + n * n);
        }, a.dist = a.distance, a.squaredDistance = function(t, r) {
            var e = r[0] - t[0], n = r[1] - t[1];
            return e * e + n * n;
        }, a.sqrDist = a.squaredDistance, a.length = function(t) {
            var r = t[0], e = t[1];
            return Math.sqrt(r * r + e * e);
        }, a.len = a.length, a.squaredLength = function(t) {
            var r = t[0], e = t[1];
            return r * r + e * e;
        }, a.sqrLen = a.squaredLength, a.negate = function(t, r) {
            return t[0] = -r[0], t[1] = -r[1], t;
        }, a.inverse = function(t, r) {
            return t[0] = 1 / r[0], t[1] = 1 / r[1], t;
        }, a.normalize = function(t, r) {
            var e = r[0], n = r[1], a = e * e + n * n;
            return a > 0 && (a = 1 / Math.sqrt(a), t[0] = r[0] * a, t[1] = r[1] * a), t;
        }, a.dot = function(t, r) {
            return t[0] * r[0] + t[1] * r[1];
        }, a.cross = function(t, r, e) {
            var n = r[0] * e[1] - r[1] * e[0];
            return t[0] = t[1] = 0, t[2] = n, t;
        }, a.lerp = function(t, r, e, n) {
            var a = r[0], o = r[1];
            return t[0] = a + n * (e[0] - a), t[1] = o + n * (e[1] - o), t;
        }, a.random = function(t, r) {
            r = r || 1;
            var e = 2 * n.RANDOM() * Math.PI;
            return t[0] = Math.cos(e) * r, t[1] = Math.sin(e) * r, t;
        }, a.transformMat2 = function(t, r, e) {
            var n = r[0], a = r[1];
            return t[0] = e[0] * n + e[2] * a, t[1] = e[1] * n + e[3] * a, t;
        }, a.transformMat2d = function(t, r, e) {
            var n = r[0], a = r[1];
            return t[0] = e[0] * n + e[2] * a + e[4], t[1] = e[1] * n + e[3] * a + e[5], t;
        }, a.transformMat3 = function(t, r, e) {
            var n = r[0], a = r[1];
            return t[0] = e[0] * n + e[3] * a + e[6], t[1] = e[1] * n + e[4] * a + e[7], t;
        }, a.transformMat4 = function(t, r, e) {
            var n = r[0], a = r[1];
            return t[0] = e[0] * n + e[4] * a + e[12], t[1] = e[1] * n + e[5] * a + e[13], t;
        }, a.forEach = function() {
            var t = a.create();
            return function(r, e, n, a, o, u) {
                var i, s;
                for (e || (e = 2), n || (n = 0), s = a ? Math.min(a * e + n, r.length) : r.length, 
                i = n; i < s; i += e) t[0] = r[i], t[1] = r[i + 1], o(t, t, u), r[i] = t[0], r[i + 1] = t[1];
                return r;
            };
        }(), a.str = function(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")";
        }, a.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1];
        }, a.equals = function(t, r) {
            var e = t[0], a = t[1], o = r[0], u = r[1];
            return Math.abs(e - o) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(o)) && Math.abs(a - u) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(u));
        }, t.exports = a;
    }, function(t, r, e) {
        "use strict";
        e.d(r, "a", function() {
            return o;
        });
        var n = e(6), a = (e.n(n), n.vec3), o = {
            add: function(t, r) {
                return a.add(a.create(), t, r);
            },
            subtract: function(t, r) {
                return a.subtract(a.create(), t, r);
            },
            sub: function(t, r) {
                return a.sub(a.create(), t, r);
            },
            multiply: function(t, r) {
                return a.multiply(a.create(), t, r);
            },
            mul: function(t, r) {
                return a.mul(a.create(), t, r);
            },
            divide: function(t, r) {
                return a.divide(a.create(), t, r);
            },
            div: function(t, r) {
                return a.div(a.create(), t, r);
            },
            ceil: function(t) {
                return a.ceil(a.create(), t);
            },
            floor: function(t) {
                return a.floor(a.create(), t);
            },
            round: function(t) {
                return a.round(a.create(), t);
            },
            min: function(t, r) {
                return a.min(a.create(), t, r);
            },
            max: function(t, r) {
                return a.max(a.create(), t, r);
            },
            scale: function(t, r) {
                return a.scale(a.create(), t, r);
            },
            scaleAndAdd: function(t, r, e) {
                return a.scaleAndAdd(a.create(), t, r, e);
            },
            inverse: function(t) {
                return a.inverse(a.create(), t);
            },
            normalize: function(t) {
                return a.normalize(a.create(), t);
            },
            cross: function(t, r) {
                return a.cross(a.create(), t, r);
            }
        };
    }, function(t, r, e) {
        "use strict";
        function n(t) {
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
        function a(t) {
            var r = t.props, e = t.state, n = e.view, a = e.perspective, u = e.rotationX, i = e.rotationY, s = e.position;
            r.needsUpdatePerspective && (r.needsUpdatePerspective = !1, o.mat4.perspective(a, r.fovy, r.aspect, r.near, r.far));
            var c = !1;
            if (r.rotateX && (o.mat4.rotateX(u, u, r.rotateX), r.rotateX = 0, c = !0), r.rotateY && (o.mat4.rotateY(i, i, r.rotateY), 
            r.rotateY = 0, c = !0), r.moveForward) {
                var l = [ i[8], i[9], i[10] ];
                o.vec3.add(s, s, o.vec3.scale(l, l, -r.moveForward)), r.moveForward = 0, c = !0;
            }
            if (r.moveLeft) {
                var l = [ i[0], i[1], i[2] ];
                o.vec3.add(s, s, o.vec3.scale(l, l, -r.moveLeft)), r.moveLeft = 0, c = !0;
            }
            if (r.moveUp) {
                var l = [ i[4], i[5], i[6] ];
                o.vec3.add(s, s, o.vec3.scale(l, l, r.moveUp)), r.moveUp = 0, c = !0;
            }
            c && (o.mat4.fromTranslation(n, s), o.mat4.multiply(n, n, i), o.mat4.multiply(n, n, u), 
            o.mat4.invert(n, n));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.create = n, r.update = a;
        var o = e(1);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = u.d(.6 * Math.PI), e = u.d(.1), n = u.d(1e3), a = u.d(1).react([ t.HOT ], function(t, r) {
                return r ? r.width / r.height : t;
            });
            return {
                fovy: r,
                aspect: a,
                near: e,
                far: n,
                perspective: u.d(o.mat4.create()).react([ r.HOT, a.HOT, e.HOT, n.HOT ], o.mat4.perspective, "updatePosition")
            };
        }
        function a() {
            var t = u.d([ 0, 0, 0 ]), r = u.d(0), e = u.d(0), n = u.d(o.quat.create()).react([ r.HOT ], i.getYawQuat), a = u.d(o.quat.create()).react([ e.HOT ], i.getPitchQuat), s = u.d(o.quat.create()).react([ a.HOT, n.HOT ], o.quat.multiply);
            return {
                position: t,
                yaw: r,
                pitch: e,
                yawQuat: n,
                pitchQuat: a,
                rotationQuat: s,
                view: u.d(o.mat4.create()).react([ s.HOT, t.HOT ], o.mat4.fromRotationTranslation)
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.makePerspective = n, r.makeFirstPersonView = a;
        var o = e(1), u = e(11), i = e(10);
    }, function(t, r, e) {
        "use strict";
        function n() {
            return {
                entities: {},
                processes: {},
                arcs: {},
                meta: {}
            };
        }
        function a(t, r) {
            return {
                entities: o({}, t.entities, r.entities),
                processes: o({}, t.processes, r.processes),
                arcs: o({}, t.arcs, r.arcs),
                meta: o({}, t.meta, r.meta)
            };
        }
        r.a = n, r.b = a;
        var o = this && this.__assign || Object.assign || function(t) {
            for (var r, e = 1, n = arguments.length; e < n; e++) {
                r = arguments[e];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
            }
            return t;
        };
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = t.id, e = void 0 === r ? u.a() : r, n = t.value, a = t.json, o = t.accept, i = t.meta;
            return null == n && a && (n = JSON.parse(a)), {
                id: e,
                value: n,
                accept: o,
                meta: s({}, i)
            };
        }
        function a(t, r) {
            var e = t.id, n = void 0 === e ? u.a() : e, a = t.ports, o = void 0 === a ? [] : a, c = t.procedure, l = t.code, f = t.autostart, M = void 0 !== f && f, d = t.async, h = void 0 !== d && d, S = t.meta;
            if (null == c && null != l && (c = i.a(l, r)), null == c) throw TypeError("Process must have procedure or code set");
            return {
                id: n,
                ports: o,
                procedure: c,
                autostart: M,
                async: h,
                meta: s({}, S)
            };
        }
        function o(t) {
            var r = t.id, e = t.entity, n = t.process, a = t.port, o = t.meta;
            if (null == e) throw TypeError("no entity specified in arc " + r);
            if (null == n) throw TypeError("no process specified in arc " + r);
            return null == r && (r = null == a ? n + "->" + e : e + "->" + n + "::" + a), {
                id: r,
                entity: e,
                process: n,
                port: a,
                meta: s({}, o)
            };
        }
        r.c = n, r.d = a, r.b = o, e.d(r, "a", function() {
            return c;
        });
        var u = e(12), i = e(28), s = this && this.__assign || Object.assign || function(t) {
            for (var r, e = 1, n = arguments.length; e < n; e++) {
                r = arguments[e];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
            }
            return t;
        }, c = {
            COLD: "COLD",
            HOT: "HOT",
            ACCUMULATOR: "ACCUMULATOR"
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function evaluate(code, context) {
            var prefix = "(function(){ return ", postfix = "})", factory = eval(prefix + code + postfix);
            return factory.call(context);
        }
        __webpack_exports__.a = evaluate;
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = f.b(null, function(t) {
                var r = document.createElement("canvas");
                return document.body.appendChild(r), t(r), function() {
                    document.body.removeChild(r);
                };
            }), e = f.c([ r.HOT ], d.a), n = f.a([ e.HOT ], function(t, r) {
                var e = M.a(r);
                return t(e), e.destroy;
            }), a = f.c([ r.HOT, t.HOT ], function(t) {
                return {
                    width: t.clientWidth,
                    height: t.clientHeight
                };
            });
            return n.react([ a.HOT ], function(t, r) {
                return t.resize(), t;
            }, "updateSize"), {
                canvas: r,
                painter: n,
                gl: e,
                canvasSize: a
            };
        }
        function a(t) {
            return f.a([ t.HOT ], function(t, r) {
                var e = r.createShade();
                return t(e), e.destroy;
            });
        }
        function o(t) {
            return f.a([ t.HOT ], function(t, r) {
                var e = r.createForm();
                return t(e), e.destroy;
            });
        }
        function u(t) {
            return f.a([ t.HOT ], function(t, r) {
                var e = r.createSketch();
                return t(e), e.destroy;
            });
        }
        function i(t) {
            return f.a([ t.HOT ], function(t, r) {
                var e = r.createFlatSketch();
                return t(e), e.destroy;
            });
        }
        function s(t) {
            return f.a([ t.HOT ], function(t, r) {
                var e = r.createStaticLayer();
                return t(e), e.destroy;
            });
        }
        function c(t) {
            return f.a([ t.HOT ], function(t, r) {
                var e = r.createDrawingLayer();
                return t(e), e.destroy;
            });
        }
        function l(t) {
            return f.a([ t.HOT ], function(t, r) {
                var e = r.createEffectLayer();
                return t(e), e.destroy;
            });
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.makePainterCanvas = n, r.makeShadeEntity = a, r.makeFormEntity = o, r.makeSketchEntity = u, 
        r.makeFlatSketchEntity = i, r.makeStaticLayerEntity = s, r.makeDrawingLayerEntity = c, 
        r.makeEffectLayerEntity = l;
        var f = e(11), M = e(30), d = e(14);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = [ {}, {} ], e = S.d(t), n = c.a(t).update(S.a.renderQuad), o = function() {
                return f.a().update({
                    form: n,
                    shade: l.a(t).update(S.b.basicEffect)
                });
            }, u = o(), i = function(e, n) {
                void 0 === e && (e = 1), void 0 === n && (n = !1);
                var a = t.canvas, o = h.b(a, e);
                return (o || n) && r.forEach(function(r) {
                    r.width = a.width, r.height = a.height, r.textureConfig = {
                        count: 1,
                        type: t.UNSIGNED_BYTE
                    }, d.h(t, r, S.c);
                }), o;
            };
            i(1, !0);
            var v = function() {
                u.destroy();
                for (var e = 0, n = r; e < n.length; e++) {
                    var a = n[e];
                    d.d(t, a);
                }
            };
            return {
                gl: t,
                updateDrawSettings: function(r) {
                    return d.a(t, m({}, e, r));
                },
                createForm: function() {
                    return c.a(t);
                },
                createShade: function() {
                    return l.a(t);
                },
                createSketch: function() {
                    return f.a();
                },
                createFlatSketch: o,
                createStaticLayer: function() {
                    return M.b(t);
                },
                createDrawingLayer: function() {
                    return M.a(t);
                },
                createEffectLayer: function() {
                    return M.a(t).update({
                        sketches: [ o() ]
                    });
                },
                draw: function(r, e) {
                    return a(t, r, null, e);
                },
                compose: function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return s(t, e, r, u);
                },
                resize: i,
                destroy: v
            };
        }
        function a(t, r, e, n) {
            var a = r.shade, s = r.uniforms, c = r.form, l = r.drawSettings;
            if (!a || !c) throw Error("cannot draw, shader or geometry are not set");
            if (t.useProgram(a.program), u(a, c), n && i(a, n, e), l && d.a(t, l), Array.isArray(s)) for (var f = 0, M = s; f < M.length; f++) {
                var h = M[f];
                o(t, r, e, h);
            } else o(t, r, e, s);
            l && d.f(t, l);
        }
        function o(t, r, e, n) {
            n && i(r.shade, n, e), r.form.elements && null != r.form.elements.glType ? (t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r.form.elements.buffer), 
            t.drawElements(r.form.drawType, r.form.itemCount, r.form.elements.glType, 0)) : t.drawArrays(r.form.drawType, 0, r.form.itemCount);
        }
        function u(t, r) {
            for (var e in r.attribs) {
                var n = t.attributeSetters[e];
                n && n.setter(r.attribs[e]);
            }
        }
        function i(t, r, e) {
            for (var n in r) {
                var a = t.uniformSetters[n];
                if (a) {
                    var o = r[n];
                    null === o || "string" == typeof o ? a.setter(e) : a.setter(o);
                }
            }
        }
        function s(t, r, e, n) {
            for (var o = r.length - 1, u = 0; u < r.length; u++) !function(u) {
                var i = r[u], s = function(r, o) {
                    var u = e[0], s = e[1], c = !o && null == i.target;
                    if (o ? (t.bindFramebuffer(t.FRAMEBUFFER, null), t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight)) : i.target ? (t.bindFramebuffer(t.FRAMEBUFFER, i.target.frameBuffer), 
                    t.viewport(0, 0, i.target.width, i.target.height)) : (t.bindFramebuffer(t.FRAMEBUFFER, s.frameBuffer), 
                    t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight)), i.data.drawSettings && d.a(t, i.data.drawSettings), 
                    i.sketches) for (var l = 0, f = i.sketches; l < f.length; l++) {
                        var M = f[l];
                        a(t, M, u.textures[0], r);
                    } else a(t, n, null, {
                        source: i.texture()
                    });
                    i.data.drawSettings && d.f(t, i.data.drawSettings), c && (e[0] = s, e[1] = u);
                };
                if (Array.isArray(i.uniforms)) for (var c = o + i.uniforms.length - 1, l = 0; l < i.uniforms.length; l++) {
                    var f = u + l === c;
                    s(i.uniforms[l], f);
                } else {
                    var f = u === o;
                    s(i.uniforms, f);
                }
            }(u);
        }
        r.a = n;
        var c = e(31), l = e(32), f = e(33), M = e(34), d = e(2), h = e(14), S = e(35), m = this && this.__assign || Object.assign || function(t) {
            for (var r, e = 1, n = arguments.length; e < n; e++) {
                r = arguments[e];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
            }
            return t;
        };
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = {};
            return r.update = function(e) {
                e.drawType && (r.drawType = t[e.drawType]), e.itemCount && (r.itemCount = e.itemCount);
                var n = r.attribs || {};
                for (var o in e.attribs) {
                    var u = e.attribs[o];
                    null == n[o] && (n[o] = {
                        buffer: t.createBuffer()
                    }), t.bindBuffer(t.ARRAY_BUFFER, n[o].buffer), t.bufferData(t.ARRAY_BUFFER, u.buffer, t[(u.storeType || "STATIC") + "_DRAW"]);
                }
                if (r.attribs = n, e.elements) {
                    var i = e.elements.buffer;
                    null == r.elements && (r.elements = {
                        buffer: t.createBuffer(),
                        glType: null
                    }), r.elements.glType = a.e(i), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r.elements.buffer), 
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, i, t[(e.elements.storeType || "STATIC") + "_DRAW"]);
                }
                return r;
            }, r.destroy = function() {
                for (var e in r.attribs) t.deleteBuffer(r.attribs[e].buffer);
                return r.elements && t.deleteBuffer(r.elements.buffer), r;
            }, r;
        }
        r.a = n;
        var a = e(2);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = {
                program: t.createProgram(),
                frag: t.createShader(t.FRAGMENT_SHADER),
                vert: t.createShader(t.VERTEX_SHADER)
            };
            return t.attachShader(r.program, r.vert), t.attachShader(r.program, r.frag), r.update = function(e) {
                var n = e.frag && e.frag.trim() || r.fragSource, u = e.vert && e.vert.trim() || r.vertSource;
                if (!n || !u) return r;
                if (n.indexOf("GL_EXT_draw_buffers") >= 0 && t.getExtension("WEBGL_draw_buffers"), 
                t.shaderSource(r.vert, u), t.shaderSource(r.frag, n), t.compileShader(r.vert), t.compileShader(r.frag), 
                t.getShaderParameter(r.vert, t.COMPILE_STATUS) || console.error("Error Compiling Vertex Shader!\n", t.getShaderInfoLog(r.vert), a(u)), 
                t.getShaderParameter(r.frag, t.COMPILE_STATUS) || console.error("Error Compiling Fragment Shader!\n", t.getShaderInfoLog(r.frag), a(n)), 
                t.linkProgram(r.program), !t.getProgramParameter(r.program, t.LINK_STATUS)) {
                    var i = t.getProgramInfoLog(r.program);
                    console.error("Error in program linking:", i);
                }
                return r.uniformSetters = o.c(t, r.program), r.attributeSetters = o.b(t, r.program), 
                r.fragSource = n, r.vertSource = u, r;
            }, r.destroy = function() {
                t.deleteProgram(r.program), t.deleteShader(r.frag), t.deleteShader(r.vert);
            }, r;
        }
        function a(t) {
            return t.trim().split("\n").map(function(t, r) {
                return r + 1 + ": " + t;
            }).join("\n");
        }
        r.a = n;
        var o = e(2);
    }, function(t, r, e) {
        "use strict";
        function n() {
            var t = {};
            return t.update = function(r) {
                return r.drawSettings && (t.drawSettings = r.drawSettings), r.form && (t.form = r.form), 
                r.shade && (t.shade = r.shade), r.uniforms && (t.uniforms = r.uniforms), t;
            }, t.destroy = function() {
                t.form.destroy(), t.shade.destroy();
            }, t;
        }
        r.a = n;
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = {}, e = t.createTexture();
            return r.textures = [ e ], r.data = {}, r.texture = function() {
                return e;
            }, r.update = function(n) {
                return t.bindTexture(t.TEXTURE_2D, e), o.g(t, n, r.data), n.asset && t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n.asset), 
                n.minFilter && n.minFilter.indexOf("MIPMAP") > 0 && t.generateMipmap(t.TEXTURE_2D), 
                t.bindTexture(t.TEXTURE_2D, null), Object.assign(r.data, n), r;
            }, r.destroy = function() {
                t.deleteTexture(e);
            }, r;
        }
        function a(t) {
            var r = {};
            return r.textures = [], r.data = {}, r.texture = function(t) {
                return void 0 === t && (t = 0), r.textures[t];
            }, r.update = function(e) {
                if (e.buffered && !r.target ? (r.target = {
                    width: e.width || t.canvas.width,
                    height: e.height || t.canvas.height,
                    frameBuffer: null,
                    textures: [],
                    depthBuffer: null,
                    textureConfig: {
                        type: e.textureConfig && e.textureConfig.type || t.UNSIGNED_BYTE,
                        count: e.textureConfig && e.textureConfig.count || 1
                    }
                }, o.h(t, r.target, e, r.data), r.textures = r.target.textures) : r.target && e.width && e.height && (r.target.width = e.width, 
                r.target.height = e.height, o.h(t, r.target, e, r.data)), e.sketches && (r.sketches = e.sketches), 
                e.frag) {
                    var n = r.sketches && r.sketches[0];
                    n && n.shade.update({
                        frag: e.frag
                    });
                }
                return e.uniforms && (r.uniforms = e.uniforms), Object.assign(r.data, e), r;
            }, r.destroy = function() {
                if (r.sketches) for (var e = 0, n = r.sketches; e < n.length; e++) {
                    var a = n[e];
                    a.destroy();
                }
                if (r.target) o.d(t, r.target); else for (var u = 0, i = r.textures; u < i.length; u++) {
                    var s = i[u];
                    t.deleteTexture(s);
                }
            }, r;
        }
        r.b = n, r.a = a;
        var o = e(2);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return {
                clearColor: [ 0, 0, 0, 1 ],
                enable: [ t.DEPTH_TEST ],
                blendFunc: [ t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA ]
            };
        }
        e.d(r, "c", function() {
            return u;
        }), r.d = n, e.d(r, "a", function() {
            return i;
        }), e.d(r, "b", function() {
            return s;
        });
        var a, o = e(13), u = {
            wrap: "CLAMP_TO_EDGE",
            minFilter: "LINEAR",
            magFilter: "NEAREST"
        }, i = {
            renderQuad: {
                attribs: (a = {}, a[o.a] = {
                    buffer: new Float32Array([ -1, 1, -1, -1, 1, 1, 1, -1 ]),
                    storeType: "STATIC"
                }, a[o.b] = {
                    buffer: new Float32Array([ 0, 1, 0, 0, 1, 1, 1, 0 ]),
                    storeType: "STATIC"
                }, a),
                drawType: "TRIANGLE_STRIP",
                itemCount: 4
            }
        }, s = {
            basicEffect: {
                vert: "\n\t\t\tattribute vec2 " + o.a + ";\n\t\t\tattribute vec2 " + o.b + ";\n\t\t\tvarying vec2 " + o.e + ";\n\t\t\tvoid main() {\n\t\t\t\t" + o.e + " = " + o.b + ";\n\t\t\t\tgl_Position = vec4(" + o.a + ", 0.0, 1.0);\n\t\t\t}",
                frag: "precision mediump float;\n\t\t\tuniform sampler2D " + o.d + ";\n\t\t\tvarying vec2 " + o.e + ";\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = texture2D(" + o.d + ", " + o.e + ");\n\t\t\t}"
            }
        };
    }, function(t, r, e) {
        "use strict";
        function n(t) {
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
            }, r = n(function(r) {
                return t.size = r;
            });
            return {
                state: t,
                destroy: r
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.windowSize = n, r.windowSizeObserver = a;
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            function e(r) {
                u[r.keyCode] = Date.now(), t(u);
            }
            function n(r) {
                delete u[r.keyCode], t(u);
            }
            void 0 === r && (r = {});
            var a = r.element, o = void 0 === a ? window : a, u = {};
            return o.addEventListener("keyup", n, !1), o.addEventListener("keydown", e, !1), 
            t(u), function() {
                o.removeEventListener("keyup", n), o.removeEventListener("keydown", e);
            };
        }
        function a(t) {
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
            return e.destroy = n(r, t), e;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "Keys", function() {
            return o;
        }), r.keyboard = n, r.keyboardObserver = a;
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
        function n(t, r) {
            function e(r) {
                l.pressed[r.button] = r, r.button === o.LEFT && (f = r.clientX, M = r.clientY, d = !0), 
                t(l);
            }
            function n(r) {
                delete l.pressed[r.button], delete l.dragDelta.event, l.dragDelta.x = 0, l.dragDelta.y = 0, 
                d = !1, t(l);
            }
            function a(r) {
                d && (l.dragDelta.event = r, l.dragDelta.x = f - r.clientX, l.dragDelta.y = M - r.clientY, 
                f = r.clientX, M = r.clientY, t(l));
            }
            function u(t) {
                t.preventDefault();
            }
            void 0 === r && (r = {});
            var i = r.element, s = void 0 === i ? document : i, c = r.enableRightButton, l = {
                pressed: {},
                dragDelta: {
                    x: 0,
                    y: 0
                }
            }, f = 0, M = 0, d = !1;
            return s.addEventListener("mousedown", e), document.addEventListener("mouseup", n), 
            document.addEventListener("mousemove", a), c && s.addEventListener("contextmenu", u), 
            t(l), function() {
                s.removeEventListener("mousedown", e), document.removeEventListener("mousemove", a), 
                document.removeEventListener("mouseup", n), c && s.removeEventListener("contextmenu", u);
            };
        }
        function a(t) {
            function r(t) {
                e.state = t;
            }
            void 0 === t && (t = {});
            var e = {
                Buttons: o,
                state: {},
                destroy: function() {}
            };
            return e.destroy = n(r, t), e;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "Buttons", function() {
            return o;
        }), r.mouse = n, r.mouseObserver = a;
        var o = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        };
    }, function(t, r, e) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "generateUUID", function() {
            return n;
        });
        var n = function() {
            var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = new Array(36), e = 0, n = 0;
            return function() {
                for (var a = 0; a < 36; ) 8 === a || 13 === a || 18 === a || 23 === a ? r[a] = "-" : 14 === a ? r[a] = "4" : (e <= 2 && (e = 33554432 + 16777216 * Math.random() | 0), 
                n = 15 & e, e >>= 4, r[a] = t[19 === a ? 3 & n | 8 : n]), a += 1;
                return r.join("");
            };
        }();
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            function r(a) {
                n && (t(a - (e || a)), e = a, requestAnimationFrame(r));
            }
            var e, n = !0;
            return requestAnimationFrame(r), function() {
                n = !1;
            };
        }
        function a(t) {
            function r(n) {
                e && (t(n), requestAnimationFrame(r));
            }
            var e = !0;
            return requestAnimationFrame(r), function() {
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
        }), r.animateWithTPF = n, r.animate = a, r.animator = o;
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return t[u.randInt(t.length)];
        }
        function a(t, r) {
            for (var e = 0; e < t; e++) r(e);
        }
        function o(t, r) {
            var e = [];
            return a(t, function(t) {
                return e.push(r(t));
            }), e;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.pickRandom = n, r.doTimes = a, r.yieldTimes = o;
        var u = e(3);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return Math.floor(127 * (t + 1));
        }
        function a(t, r, e) {
            for (var a = t.canvas.width, u = t.canvas.height, i = o.tileNoise(a, u, r, e), s = o.tileNoise(a, u, 2.1 * r, 2.1 * e), c = o.tileNoise(a, u, 4.2 * r, 4.2 * e), l = o.tileNoise(a, u, 8.3 * r, 8.3 * e), f = t.getImageData(0, 0, a, u), M = 0; M < i.length - 1; M++) {
                var d = 4 * M;
                f.data[d] = n(i[M]), f.data[d + 1] = n(s[M]), f.data[d + 2] = n(c[M]), f.data[d + 3] = n(l[M]);
            }
            t.putImageData(f, 0, 0);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.drawTileNoiseTexture = a;
        var o = e(5);
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            var e = t[0], n = t[1], a = r.width, o = r.height;
            return e >= a && (e -= a), n >= o && (n -= o), e < 0 && (e += a), n < 0 && (n += o), 
            [ e, n ];
        }
        function a(t, r) {
            var e = t[0], n = t[1], a = r.width, o = r.height;
            return e < 0 && (e = 0), n < 0 && (n = 0), e >= a && (e = a), n >= o && (n = o), 
            [ e, n ];
        }
        function o(t) {
            function r(r, e) {
                var n = t(e, r), a = n[0];
                return 4 * (n[1] * r.height + a);
            }
            function e(t, e) {
                var n = r(t, e);
                return [ t.data[n], t.data[n + 1], t.data[n + 2], t.data[n + 3] ];
            }
            function n(t, e, n) {
                var a = r(t, e);
                t.data[a] = n[0], t.data[a + 1] = n[1], t.data[a + 2] = n[2], t.data[a + 3] = n[3];
            }
            function o(t, r) {
                for (var e = r[0], n = r[1], a = r[2], o = r[3], u = t.data, i = 0; i < u.length; i += 4) u[i] + e < 256 && (u[i] += e), 
                u[i + 1] + n < 256 && (u[i + 1] += n), u[i + 2] + a < 256 && (u[i + 2] += a), u[i + 3] + o < 256 && (u[i + 3] += o);
            }
            function u(t, r) {
                for (var e = r[0], n = r[1], a = r[2], o = r[3], u = t.data, i = 0; i <= u.length; i += 4) e <= u[i] && (u[i] -= e), 
                n <= u[i + 1] && (u[i + 1] -= n), a <= u[i + 2] && (u[i + 2] -= a), o <= u[i + 3] && (u[i + 3] -= o);
            }
            function s(t, r) {
                for (var a = 0; a < t.width; a++) for (var o = 0; a < t.height; o++) n(t, [ a, o ], i.mixColors(e(t, [ a, o ]), r));
            }
            function c(t, r, a) {
                for (var o = a[0], u = a[1], i = r.width - 1, s = r.height - 1, c = 0; c < s; c++) for (var l = 0; l < i; l++) n(t, [ o + l, u + c ], e(r, [ l, c ]));
            }
            function l(t, r, a) {
                for (var o = a[0], u = a[1], s = r.width - 1, c = r.height - 1, l = 0; l < c; l++) for (var f = 0; f < s; f++) n(t, [ o + f, u + l ], i.mixColors(e(t, [ o + f, u + l ]), e(r, [ f, l ])));
            }
            return t = t || a, {
                getPixelIndex: r,
                getColorAt: e,
                setColorAt: n,
                increaseAllBy: o,
                decreaseAllBy: u,
                mixinColor: s,
                replaceWithImageDataAt: c,
                drawImageAt: l
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
        }), r.repeatedPosition = n, r.closedPosition = a, r.createPixelContext = o, r.createImgDataFromImage = u;
        var i = e(15);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
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
            function n(r) {
                var n = t.getGraph(), a = n.entities, o = n.arcs, u = n.processes;
                return Object.keys(a).reduce(function(r, n) {
                    var i = e(n, r), s = a[n], c = Object.keys(o).map(function(t) {
                        return o[t];
                    }).filter(function(t) {
                        return t.entity == n && !t.port;
                    }).map(function(t) {
                        return t.process;
                    });
                    return i.id = n, Object.defineProperty(i, "val", {
                        get: function() {
                            return t.get(n);
                        },
                        set: function(r) {
                            return t.set(n, r);
                        }
                    }), i.update = function(r) {
                        t.update(n, r);
                    }, i.reset = function() {
                        null != s.value ? t.set(n, s.value) : null != s.json && t.set(n, JSON.parse(s.json));
                    }, i.watch = function() {
                        t.on(n, function(t) {
                            return console.log(n, t);
                        });
                    }, i.unwatch = function() {
                        t.off(n);
                    }, i.streams = {}, c.forEach(function(r) {
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
            return n({
                update: function() {
                    for (var t in this) "update" !== t && delete this[t];
                    n(this);
                }
            });
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.create = n;
    } ]);
});