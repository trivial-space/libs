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
        }, r.p = "", r(r.s = 15);
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
        function n(t) {
            return V[t].bindPoint;
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
        function c(t, r) {
            return function(e) {
                t.uniform4fv(r, e);
            };
        }
        function s(t, r) {
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
        function I(t, r) {
            return function(e) {
                t.uniform2uiv(r, e);
            };
        }
        function m(t, r) {
            return function(e) {
                t.uniform3uiv(r, e);
            };
        }
        function v(t, r) {
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
        function E(t, r) {
            return function(e) {
                t.uniformMatrix4fv(r, !1, e);
            };
        }
        function x(t, r) {
            return function(e) {
                t.uniformMatrix2x3fv(r, !1, e);
            };
        }
        function T(t, r) {
            return function(e) {
                t.uniformMatrix3x2fv(r, !1, e);
            };
        }
        function p(t, r) {
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
        function O(t, r, e, a, o) {
            for (var u = n(r), i = new Int32Array(o), c = 0; c < o; ++c) i[c] = e + c;
            return function(r) {
                t.uniform1iv(a, i);
                for (var e in r) t.activeTexture(t.TEXTURE0 + i[e]), t.bindTexture(u, r[e]);
            };
        }
        function R(t) {
            return null === t.Type;
        }
        function g(t, r, e) {
            return function(n) {
                t.bindBuffer(t.ARRAY_BUFFER, n.buffer), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, e.itemSize, X.c.FLOAT, n.normalize || !1, n.stride || 0, n.offset || 0);
            };
        }
        function N(t, r, e) {
            return function(n) {
                t.bindBuffer(t.ARRAY_BUFFER, n.buffer), t.enableVertexAttribArray(r), t.vertexAttribIPointer(r, e.itemSize, X.c.INT, n.stride || 0, n.offset || 0);
            };
        }
        function P(t, r, e) {
            var n = e.size, a = e.count;
            return function(e) {
                t.bindBuffer(t.ARRAY_BUFFER, e.buffer);
                for (var o = n, u = o / a, i = V[X.c.FLOAT], c = i.size * o, s = e.normalize || !1, l = e.offset || 0, f = c / a, M = 0; M < a; ++M) t.enableVertexAttribArray(r + M), 
                t.vertexAttribPointer(r + M, u, X.c.FLOAT, s, c, l + f * M);
            };
        }
        function L(t, r) {
            for (var e = 0, n = {}, a = t.getProgramParameter(r, t.ACTIVE_UNIFORMS), o = 0; o < a; ++o) {
                var u = t.getActiveUniform(r, o);
                if (!u) break;
                var i = u.name;
                if ("[0]" === i.substr(-3) && (i = i.substr(0, i.length - 3)), r) {
                    var c = function(r, n) {
                        var a = t.getUniformLocation(r, n.name), o = n.size > 1 && "[0]" === n.name.substr(-3), u = n.type, i = V[u];
                        if (!i) throw "unknown type: 0x" + u.toString(16);
                        if (null != a) {
                            var c;
                            if (R(i)) {
                                var s = e;
                                e += n.size, c = o ? i.arraySetter(t, u, s, a, n.size) : i.setter(t, u, s, a);
                            } else c = i.arraySetter && o ? i.arraySetter(t, a) : i.setter(t, a);
                            return {
                                setter: c,
                                location: a
                            };
                        }
                    }(r, u);
                    c && (n[i] = c);
                }
            }
            return n;
        }
        function w(t, r) {
            for (var e = {}, n = t.getProgramParameter(r, t.ACTIVE_ATTRIBUTES), a = 0; a < n; a++) {
                var o = t.getActiveAttrib(r, a);
                if (!o) break;
                var u = t.getAttribLocation(r, o.name), i = k[o.type], c = i.setter(t, u, i);
                e[o.name] = {
                    setter: c,
                    location: u
                };
            }
            return e;
        }
        function U(t) {
            if (t instanceof Int8Array) return X.c.BYTE;
            if (t instanceof Uint8Array) return X.c.UNSIGNED_BYTE;
            if (t instanceof Uint8ClampedArray) return X.c.UNSIGNED_BYTE;
            if (t instanceof Int16Array) return X.c.SHORT;
            if (t instanceof Uint16Array) return X.c.UNSIGNED_SHORT;
            if (t instanceof Int32Array) return X.c.INT;
            if (t instanceof Uint32Array) return X.c.UNSIGNED_INT;
            if (t instanceof Float32Array) return X.c.FLOAT;
            throw "unsupported typed array type";
        }
        function z(t, r, e) {
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
                        var c = r.textures[i];
                        t.bindTexture(t.TEXTURE_2D, c), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, r.width, r.height, 0, t.RGBA, r.textureConfig.type, null), 
                        z(t, e, n), t.framebufferTexture2D(t.FRAMEBUFFER, u[i], t.TEXTURE_2D, c, 0);
                    }
                } else {
                    null == r.textures[0] && (r.textures[0] = t.createTexture());
                    var c = r.textures[0];
                    t.bindTexture(t.TEXTURE_2D, c), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, r.width, r.height, 0, t.RGBA, r.textureConfig.type, null), 
                    z(t, e, n), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, c, 0);
                }
                null == r.depthBuffer && (r.depthBuffer = t.createRenderbuffer()), t.bindRenderbuffer(t.RENDERBUFFER, r.depthBuffer), 
                t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, r.width, r.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, r.depthBuffer);
                var s = t.checkFramebufferStatus(t.FRAMEBUFFER);
                s !== t.FRAMEBUFFER_COMPLETE && console.error("framebuffer error", s, e), t.bindFramebuffer(t.FRAMEBUFFER, null), 
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
        function j(t, r) {
            if (r.enable) for (var e = 0, n = r.enable; e < n.length; e++) {
                var a = n[e];
                t.disable(a);
            }
            if (r.disable) for (var o = 0, u = r.disable; o < u.length; o++) {
                var a = u[o];
                t.enable(a);
            }
        }
        r.c = L, r.b = w, r.e = U, r.g = z, r.h = C, r.d = B, r.a = Y, r.f = j;
        var G, q, H, X = e(11), V = (G = {}, G[X.c.FLOAT] = {
            Type: Float32Array,
            size: 4,
            setter: a,
            arraySetter: o
        }, G[X.c.FLOAT_VEC2] = {
            Type: Float32Array,
            size: 8,
            setter: u
        }, G[X.c.FLOAT_VEC3] = {
            Type: Float32Array,
            size: 12,
            setter: i
        }, G[X.c.FLOAT_VEC4] = {
            Type: Float32Array,
            size: 16,
            setter: c
        }, G[X.c.INT] = {
            Type: Int32Array,
            size: 4,
            setter: s,
            arraySetter: l
        }, G[X.c.INT_VEC2] = {
            Type: Int32Array,
            size: 8,
            setter: f
        }, G[X.c.INT_VEC3] = {
            Type: Int32Array,
            size: 12,
            setter: M
        }, G[X.c.INT_VEC4] = {
            Type: Int32Array,
            size: 16,
            setter: d
        }, G[X.c.UNSIGNED_INT] = {
            Type: Uint32Array,
            size: 4,
            setter: h,
            arraySetter: S
        }, G[X.c.UNSIGNED_INT_VEC2] = {
            Type: Uint32Array,
            size: 8,
            setter: I
        }, G[X.c.UNSIGNED_INT_VEC3] = {
            Type: Uint32Array,
            size: 12,
            setter: m
        }, G[X.c.UNSIGNED_INT_VEC4] = {
            Type: Uint32Array,
            size: 16,
            setter: v
        }, G[X.c.BOOL] = {
            Type: Uint32Array,
            size: 4,
            setter: s,
            arraySetter: l
        }, G[X.c.BOOL_VEC2] = {
            Type: Uint32Array,
            size: 8,
            setter: f
        }, G[X.c.BOOL_VEC3] = {
            Type: Uint32Array,
            size: 12,
            setter: M
        }, G[X.c.BOOL_VEC4] = {
            Type: Uint32Array,
            size: 16,
            setter: d
        }, G[X.c.FLOAT_MAT2] = {
            Type: Float32Array,
            size: 16,
            setter: D
        }, G[X.c.FLOAT_MAT3] = {
            Type: Float32Array,
            size: 36,
            setter: F
        }, G[X.c.FLOAT_MAT4] = {
            Type: Float32Array,
            size: 64,
            setter: E
        }, G[X.c.FLOAT_MAT2X3] = {
            Type: Float32Array,
            size: 24,
            setter: x
        }, G[X.c.FLOAT_MAT2X4] = {
            Type: Float32Array,
            size: 32,
            setter: p
        }, G[X.c.FLOAT_MAT3X2] = {
            Type: Float32Array,
            size: 24,
            setter: T
        }, G[X.c.FLOAT_MAT3X4] = {
            Type: Float32Array,
            size: 48,
            setter: A
        }, G[X.c.FLOAT_MAT4X2] = {
            Type: Float32Array,
            size: 32,
            setter: _
        }, G[X.c.FLOAT_MAT4X3] = {
            Type: Float32Array,
            size: 48,
            setter: b
        }, G[X.c.SAMPLER_2D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_2D
        }, G[X.c.SAMPLER_CUBE] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_CUBE_MAP
        }, G[X.c.SAMPLER_3D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_3D
        }, G[X.c.SAMPLER_2D_SHADOW] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_2D
        }, G[X.c.SAMPLER_2D_ARRAY] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_2D_ARRAY
        }, G[X.c.SAMPLER_2D_ARRAY_SHADOW] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_2D_ARRAY
        }, G[X.c.SAMPLER_CUBE_SHADOW] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_CUBE_MAP
        }, G[X.c.INT_SAMPLER_2D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_2D
        }, G[X.c.INT_SAMPLER_3D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_3D
        }, G[X.c.INT_SAMPLER_CUBE] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_CUBE_MAP
        }, G[X.c.INT_SAMPLER_2D_ARRAY] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_2D_ARRAY
        }, G[X.c.UNSIGNED_INT_SAMPLER_2D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_2D
        }, G[X.c.UNSIGNED_INT_SAMPLER_3D] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_3D
        }, G[X.c.UNSIGNED_INT_SAMPLER_CUBE] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_CUBE_MAP
        }, G[X.c.UNSIGNED_INT_SAMPLER_2D_ARRAY] = {
            Type: null,
            size: 0,
            setter: y,
            arraySetter: O,
            bindPoint: X.c.TEXTURE_2D_ARRAY
        }, G), k = (q = {}, q[X.c.FLOAT] = {
            size: 4,
            setter: g,
            itemSize: 1
        }, q[X.c.FLOAT_VEC2] = {
            size: 8,
            setter: g,
            itemSize: 2
        }, q[X.c.FLOAT_VEC3] = {
            size: 12,
            setter: g,
            itemSize: 3
        }, q[X.c.FLOAT_VEC4] = {
            size: 16,
            setter: g,
            itemSize: 4
        }, q[X.c.INT] = {
            size: 4,
            setter: N,
            itemSize: 1
        }, q[X.c.INT_VEC2] = {
            size: 8,
            setter: N,
            itemSize: 2
        }, q[X.c.INT_VEC3] = {
            size: 12,
            setter: N,
            itemSize: 3
        }, q[X.c.INT_VEC4] = {
            size: 16,
            setter: N,
            itemSize: 4
        }, q[X.c.UNSIGNED_INT] = {
            size: 4,
            setter: N,
            itemSize: 1
        }, q[X.c.UNSIGNED_INT_VEC2] = {
            size: 8,
            setter: N,
            itemSize: 2
        }, q[X.c.UNSIGNED_INT_VEC3] = {
            size: 12,
            setter: N,
            itemSize: 3
        }, q[X.c.UNSIGNED_INT_VEC4] = {
            size: 16,
            setter: N,
            itemSize: 4
        }, q[X.c.BOOL] = {
            size: 4,
            setter: N,
            itemSize: 1
        }, q[X.c.BOOL_VEC2] = {
            size: 8,
            setter: N,
            itemSize: 2
        }, q[X.c.BOOL_VEC3] = {
            size: 12,
            setter: N,
            itemSize: 3
        }, q[X.c.BOOL_VEC4] = {
            size: 16,
            setter: N,
            itemSize: 4
        }, q[X.c.FLOAT_MAT2] = {
            size: 4,
            setter: P,
            count: 2
        }, q[X.c.FLOAT_MAT3] = {
            size: 9,
            setter: P,
            count: 3
        }, q[X.c.FLOAT_MAT4] = {
            size: 16,
            setter: P,
            count: 4
        }, q);
        H = {}, H[X.c.BYTE] = Int8Array, H[X.c.UNSIGNED_BYTE] = Uint8Array, H[X.c.SHORT] = Int16Array, 
        H[X.c.UNSIGNED_SHORT] = Uint16Array, H[X.c.INT] = Int32Array, H[X.c.UNSIGNED_INT] = Uint32Array, 
        H[X.c.FLOAT] = Float32Array, H[X.c.UNSIGNED_SHORT_4_4_4_4] = Uint16Array, H[X.c.UNSIGNED_SHORT_5_5_5_1] = Uint16Array, 
        H[X.c.UNSIGNED_SHORT_5_6_5] = Uint16Array, H[X.c.HALF_FLOAT] = Uint16Array, H[X.c.UNSIGNED_INT_2_10_10_10_REV] = Uint32Array, 
        H[X.c.UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array, H[X.c.UNSIGNED_INT_5_9_9_9_REV] = Uint32Array, 
        H[X.c.FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array, H[X.c.UNSIGNED_INT_24_8] = Uint32Array;
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
        function c() {
            return (Math.random() + Math.random() + Math.random()) / 3;
        }
        function s(t) {
            return t * l;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "DEG_TO_RAD_FACTOR", function() {
            return l;
        }), r.sign = n, r.lerp = a, r.clamp = o, r.randInt = u, r.randIntInRange = i, r.normalRand = c, 
        r.degToRad = s;
        var l = Math.PI / 180;
    }, function(t, r, e) {
        r.glMatrix = e(0), r.mat2 = e(18), r.mat2d = e(19), r.mat3 = e(6), r.mat4 = e(20), 
        r.quat = e(21), r.vec2 = e(22), r.vec3 = e(7), r.vec4 = e(8);
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
        function c(t, r) {
            for (var e = [], n = 0; n < t.length; n++) e[n] = t[n] / r;
            return e;
        }
        function s(t) {
            for (var r = 0, e = 0; e < t.length; e++) {
                var n = t[e];
                r += n * n;
            }
            return Math.sqrt(r);
        }
        function l(t) {
            return c(t, s(t));
        }
        function f(t, r) {
            var e = s(t);
            return r < e ? i(t, r / e) : t;
        }
        function M(t, r) {
            if (t.length !== r.length) return !1;
            for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
            return !0;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.add = n, r.addScalar = a, r.sub = o, r.subScalar = u, r.mul = i, r.div = c, 
        r.length = s, r.normalize = l, r.limit = f, r.isEqual = M;
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
            var e, n, a = 0, o = 0, u = 0, i = (t + r) * h, c = Math.floor(t + i), s = Math.floor(r + i), l = (c + s) * S, f = c - l, M = s - l, d = t - f, I = r - M;
            d > I ? (e = 1, n = 0) : (e = 0, n = 1);
            var m = d - e + S, v = I - n + S, D = d - 1 + 2 * S, F = I - 1 + 2 * S, p = 255 & c, _ = 255 & s, A = .5 - d * d - I * I;
            if (A >= 0) {
                var b = 3 * x[p + E[_]];
                A *= A, a = A * A * (T[b] * d + T[b + 1] * I);
            }
            var y = .5 - m * m - v * v;
            if (y >= 0) {
                var O = 3 * x[p + e + E[_ + n]];
                y *= y, o = y * y * (T[O] * m + T[O + 1] * v);
            }
            var R = .5 - D * D - F * F;
            if (R >= 0) {
                var g = 3 * x[p + 1 + E[_ + 1]];
                R *= R, u = R * R * (T[g] * D + T[g + 1] * F);
            }
            return 70 * (a + o + u);
        }
        function c(t, r, e) {
            var n, a, o, u, i, c, s, l, f, M, d = (t + r + e) * I, h = Math.floor(t + d), S = Math.floor(r + d), v = Math.floor(e + d), D = (h + S + v) * m, F = h - D, p = S - D, _ = v - D, A = t - F, b = r - p, y = e - _;
            A >= b ? b >= y ? (i = 1, c = 0, s = 0, l = 1, f = 1, M = 0) : A >= y ? (i = 1, 
            c = 0, s = 0, l = 1, f = 0, M = 1) : (i = 0, c = 0, s = 1, l = 1, f = 0, M = 1) : b < y ? (i = 0, 
            c = 0, s = 1, l = 0, f = 1, M = 1) : A < y ? (i = 0, c = 1, s = 0, l = 0, f = 1, 
            M = 1) : (i = 0, c = 1, s = 0, l = 1, f = 1, M = 0);
            var O = A - i + m, R = b - c + m, g = y - s + m, N = A - l + 2 * m, P = b - f + 2 * m, L = y - M + 2 * m, w = A - 1 + 3 * m, U = b - 1 + 3 * m, z = y - 1 + 3 * m, C = 255 & h, B = 255 & S, Y = 255 & v, j = .6 - A * A - b * b - y * y;
            if (j < 0) n = 0; else {
                var G = 3 * x[C + E[B + E[Y]]];
                j *= j, n = j * j * (T[G] * A + T[G + 1] * b + T[G + 2] * y);
            }
            var q = .6 - O * O - R * R - g * g;
            if (q < 0) a = 0; else {
                var H = 3 * x[C + i + E[B + c + E[Y + s]]];
                q *= q, a = q * q * (T[H] * O + T[H + 1] * R + T[H + 2] * g);
            }
            var X = .6 - N * N - P * P - L * L;
            if (X < 0) o = 0; else {
                var V = 3 * x[C + l + E[B + f + E[Y + M]]];
                X *= X, o = X * X * (T[V] * N + T[V + 1] * P + T[V + 2] * L);
            }
            var k = .6 - w * w - U * U - z * z;
            if (k < 0) u = 0; else {
                var W = 3 * x[C + 1 + E[B + 1 + E[Y + 1]]];
                k *= k, u = k * k * (T[W] * w + T[W + 1] * U + T[W + 2] * z);
            }
            return 32 * (n + a + o + u);
        }
        function s(t, r, e, n) {
            var a, o, u, i, c, s = (t + r + e + n) * v, l = Math.floor(t + s), f = Math.floor(r + s), M = Math.floor(e + s), d = Math.floor(n + s), h = (l + f + M + d) * D, S = l - h, I = f - h, m = M - h, F = d - h, x = t - S, T = r - I, _ = e - m, A = n - F, b = 0, y = 0, O = 0, R = 0;
            x > T ? b++ : y++, x > _ ? b++ : O++, x > A ? b++ : R++, T > _ ? y++ : O++, T > A ? y++ : R++, 
            _ > A ? O++ : R++;
            var g, N, P, L, w, U, z, C, B, Y, j, G;
            g = b >= 3 ? 1 : 0, N = y >= 3 ? 1 : 0, P = O >= 3 ? 1 : 0, L = R >= 3 ? 1 : 0, 
            w = b >= 2 ? 1 : 0, U = y >= 2 ? 1 : 0, z = O >= 2 ? 1 : 0, C = R >= 2 ? 1 : 0, 
            B = b >= 1 ? 1 : 0, Y = y >= 1 ? 1 : 0, j = O >= 1 ? 1 : 0, G = R >= 1 ? 1 : 0;
            var q = x - g + D, H = T - N + D, X = _ - P + D, V = A - L + D, k = x - w + 2 * D, W = T - U + 2 * D, K = _ - z + 2 * D, Q = A - C + 2 * D, Z = x - B + 3 * D, J = T - Y + 3 * D, $ = _ - j + 3 * D, tt = A - G + 3 * D, rt = x - 1 + 4 * D, et = T - 1 + 4 * D, nt = _ - 1 + 4 * D, at = A - 1 + 4 * D, ot = 255 & l, ut = 255 & f, it = 255 & M, ct = 255 & d, st = .6 - x * x - T * T - _ * _ - A * A;
            if (st < 0) a = 0; else {
                var lt = E[ot + E[ut + E[it + E[ct]]]] % 32 * 4;
                st *= st, a = st * st * (p[lt] * x + p[lt + 1] * T + p[lt + 2] * _ + p[lt + 3] * A);
            }
            var ft = .6 - q * q - H * H - X * X - V * V;
            if (ft < 0) o = 0; else {
                var Mt = E[ot + g + E[ut + N + E[it + P + E[ct + L]]]] % 32 * 4;
                ft *= ft, o = ft * ft * (p[Mt] * q + p[Mt + 1] * H + p[Mt + 2] * X + p[Mt + 3] * V);
            }
            var dt = .6 - k * k - W * W - K * K - Q * Q;
            if (dt < 0) u = 0; else {
                var ht = E[ot + w + E[ut + U + E[it + z + E[ct + C]]]] % 32 * 4;
                dt *= dt, u = dt * dt * (p[ht] * k + p[ht + 1] * W + p[ht + 2] * K + p[ht + 3] * Q);
            }
            var St = .6 - Z * Z - J * J - $ * $ - tt * tt;
            if (St < 0) i = 0; else {
                var It = E[ot + B + E[ut + Y + E[it + j + E[ct + G]]]] % 32 * 4;
                St *= St, i = St * St * (p[It] * Z + p[It + 1] * J + p[It + 2] * $ + p[It + 3] * tt);
            }
            var mt = .6 - rt * rt - et * et - nt * nt - at * at;
            if (mt < 0) c = 0; else {
                var vt = E[ot + 1 + E[ut + 1 + E[it + 1 + E[ct + 1]]]] % 32 * 4;
                mt *= mt, c = mt * mt * (p[vt] * rt + p[vt + 1] * et + p[vt + 2] * nt + p[vt + 3] * at);
            }
            return 27 * (a + o + u + i + c);
        }
        function l(t, r, e, n) {
            for (var a = [], o = 0; o < r; o++) for (var u = 0; u < t; u++) {
                var i = u / t, c = o / r, l = Math.cos(2 * i * Math.PI) * e / (2 * Math.PI), f = Math.cos(2 * c * Math.PI) * n / (2 * Math.PI), M = Math.sin(2 * i * Math.PI) * e / (2 * Math.PI), d = Math.sin(2 * c * Math.PI) * n / (2 * Math.PI);
                a.push(s(l, f, M, d));
            }
            return a;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.noise1d = u, r.noise2d = i, r.noise3d = c, r.noise4d = s, r.tileNoise = l;
        var f, M, d = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
        for (f = M = 0; M <= 256; f = ++M) d[256 + f] = d[f];
        var h = .5 * (Math.sqrt(3) - 1), S = (3 - Math.sqrt(3)) / 6, I = 1 / 3, m = 1 / 6, v = (Math.sqrt(5) - 1) / 4, D = (5 - Math.sqrt(5)) / 20, F = new Uint8Array(256), E = new Uint8Array(512), x = new Uint8Array(512);
        for (f = 0; f < 256; f++) F[f] = 256 * Math.random();
        for (f = 0; f < 512; f++) E[f] = F[255 & f], x[f] = E[f] % 12;
        var T = new Float32Array([ 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1 ]), p = new Float32Array([ 0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0 ]);
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
        }, a.fromValues = function(t, r, e, a, o, u, i, c, s) {
            var l = new n.ARRAY_TYPE(9);
            return l[0] = t, l[1] = r, l[2] = e, l[3] = a, l[4] = o, l[5] = u, l[6] = i, l[7] = c, 
            l[8] = s, l;
        }, a.set = function(t, r, e, n, a, o, u, i, c, s) {
            return t[0] = r, t[1] = e, t[2] = n, t[3] = a, t[4] = o, t[5] = u, t[6] = i, t[7] = c, 
            t[8] = s, t;
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
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], c = r[6], s = r[7], l = r[8], f = l * u - i * s, M = -l * o + i * c, d = s * o - u * c, h = e * f + n * M + a * d;
            return h ? (h = 1 / h, t[0] = f * h, t[1] = (-l * n + a * s) * h, t[2] = (i * n - a * u) * h, 
            t[3] = M * h, t[4] = (l * e - a * c) * h, t[5] = (-i * e + a * o) * h, t[6] = d * h, 
            t[7] = (-s * e + n * c) * h, t[8] = (u * e - n * o) * h, t) : null;
        }, a.adjoint = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], c = r[6], s = r[7], l = r[8];
            return t[0] = u * l - i * s, t[1] = a * s - n * l, t[2] = n * i - a * u, t[3] = i * c - o * l, 
            t[4] = e * l - a * c, t[5] = a * o - e * i, t[6] = o * s - u * c, t[7] = n * c - e * s, 
            t[8] = e * u - n * o, t;
        }, a.determinant = function(t) {
            var r = t[0], e = t[1], n = t[2], a = t[3], o = t[4], u = t[5], i = t[6], c = t[7], s = t[8];
            return r * (s * o - u * c) + e * (-s * a + u * i) + n * (c * a - o * i);
        }, a.multiply = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = r[6], l = r[7], f = r[8], M = e[0], d = e[1], h = e[2], S = e[3], I = e[4], m = e[5], v = e[6], D = e[7], F = e[8];
            return t[0] = M * n + d * u + h * s, t[1] = M * a + d * i + h * l, t[2] = M * o + d * c + h * f, 
            t[3] = S * n + I * u + m * s, t[4] = S * a + I * i + m * l, t[5] = S * o + I * c + m * f, 
            t[6] = v * n + D * u + F * s, t[7] = v * a + D * i + F * l, t[8] = v * o + D * c + F * f, 
            t;
        }, a.mul = a.multiply, a.translate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = r[6], l = r[7], f = r[8], M = e[0], d = e[1];
            return t[0] = n, t[1] = a, t[2] = o, t[3] = u, t[4] = i, t[5] = c, t[6] = M * n + d * u + s, 
            t[7] = M * a + d * i + l, t[8] = M * o + d * c + f, t;
        }, a.rotate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = r[6], l = r[7], f = r[8], M = Math.sin(e), d = Math.cos(e);
            return t[0] = d * n + M * u, t[1] = d * a + M * i, t[2] = d * o + M * c, t[3] = d * u - M * n, 
            t[4] = d * i - M * a, t[5] = d * c - M * o, t[6] = s, t[7] = l, t[8] = f, t;
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
            var e = r[0], n = r[1], a = r[2], o = r[3], u = e + e, i = n + n, c = a + a, s = e * u, l = n * u, f = n * i, M = a * u, d = a * i, h = a * c, S = o * u, I = o * i, m = o * c;
            return t[0] = 1 - f - h, t[3] = l - m, t[6] = M + I, t[1] = l + m, t[4] = 1 - s - h, 
            t[7] = d - S, t[2] = M - I, t[5] = d + S, t[8] = 1 - s - f, t;
        }, a.normalFromMat4 = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], c = r[6], s = r[7], l = r[8], f = r[9], M = r[10], d = r[11], h = r[12], S = r[13], I = r[14], m = r[15], v = e * i - n * u, D = e * c - a * u, F = e * s - o * u, E = n * c - a * i, x = n * s - o * i, T = a * s - o * c, p = l * S - f * h, _ = l * I - M * h, A = l * m - d * h, b = f * I - M * S, y = f * m - d * S, O = M * m - d * I, R = v * O - D * y + F * b + E * A - x * _ + T * p;
            return R ? (R = 1 / R, t[0] = (i * O - c * y + s * b) * R, t[1] = (c * A - u * O - s * _) * R, 
            t[2] = (u * y - i * A + s * p) * R, t[3] = (a * y - n * O - o * b) * R, t[4] = (e * O - a * A + o * _) * R, 
            t[5] = (n * A - e * y - o * p) * R, t[6] = (S * T - I * x + m * E) * R, t[7] = (I * F - h * T - m * D) * R, 
            t[8] = (h * x - S * F + m * v) * R, t) : null;
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
            var e = t[0], a = t[1], o = t[2], u = t[3], i = t[4], c = t[5], s = t[6], l = t[7], f = t[8], M = r[0], d = r[1], h = r[2], S = r[3], I = r[4], m = r[5], v = t[6], D = r[7], F = r[8];
            return Math.abs(e - M) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(a - d) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(o - h) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(u - S) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(S)) && Math.abs(i - I) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(I)) && Math.abs(c - m) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(s - v) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(v)) && Math.abs(l - D) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(D)) && Math.abs(f - F) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(F));
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
            var n = r[0], a = r[1], o = r[2], u = e[0], i = e[1], c = e[2];
            return t[0] = a * c - o * i, t[1] = o * u - n * c, t[2] = n * i - a * u, t;
        }, a.lerp = function(t, r, e, n) {
            var a = r[0], o = r[1], u = r[2];
            return t[0] = a + n * (e[0] - a), t[1] = o + n * (e[1] - o), t[2] = u + n * (e[2] - u), 
            t;
        }, a.hermite = function(t, r, e, n, a, o) {
            var u = o * o, i = u * (2 * o - 3) + 1, c = u * (o - 2) + o, s = u * (o - 1), l = u * (3 - 2 * o);
            return t[0] = r[0] * i + e[0] * c + n[0] * s + a[0] * l, t[1] = r[1] * i + e[1] * c + n[1] * s + a[1] * l, 
            t[2] = r[2] * i + e[2] * c + n[2] * s + a[2] * l, t;
        }, a.bezier = function(t, r, e, n, a, o) {
            var u = 1 - o, i = u * u, c = o * o, s = i * u, l = 3 * o * i, f = 3 * c * u, M = c * o;
            return t[0] = r[0] * s + e[0] * l + n[0] * f + a[0] * M, t[1] = r[1] * s + e[1] * l + n[1] * f + a[1] * M, 
            t[2] = r[2] * s + e[2] * l + n[2] * f + a[2] * M, t;
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
            var n = r[0], a = r[1], o = r[2], u = e[0], i = e[1], c = e[2], s = e[3], l = s * n + i * o - c * a, f = s * a + c * n - u * o, M = s * o + u * a - i * n, d = -u * n - i * a - c * o;
            return t[0] = l * s + d * -u + f * -c - M * -i, t[1] = f * s + d * -i + M * -u - l * -c, 
            t[2] = M * s + d * -c + l * -i - f * -u, t;
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
                var i, c;
                for (e || (e = 3), n || (n = 0), c = a ? Math.min(a * e + n, r.length) : r.length, 
                i = n; i < c; i += e) t[0] = r[i], t[1] = r[i + 1], t[2] = r[i + 2], o(t, t, u), 
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
            var e = t[0], a = t[1], o = t[2], u = r[0], i = r[1], c = r[2];
            return Math.abs(e - u) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(u)) && Math.abs(a - i) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(i)) && Math.abs(o - c) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(c));
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
            var n = r[0], a = r[1], o = r[2], u = e[0], i = e[1], c = e[2], s = e[3], l = s * n + i * o - c * a, f = s * a + c * n - u * o, M = s * o + u * a - i * n, d = -u * n - i * a - c * o;
            return t[0] = l * s + d * -u + f * -c - M * -i, t[1] = f * s + d * -i + M * -u - l * -c, 
            t[2] = M * s + d * -c + l * -i - f * -u, t[3] = r[3], t;
        }, a.forEach = function() {
            var t = a.create();
            return function(r, e, n, a, o, u) {
                var i, c;
                for (e || (e = 4), n || (n = 0), c = a ? Math.min(a * e + n, r.length) : r.length, 
                i = n; i < c; i += e) t[0] = r[i], t[1] = r[i + 1], t[2] = r[i + 2], t[3] = r[i + 3], 
                o(t, t, u), r[i] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r[i + 3] = t[3];
                return r;
            };
        }(), a.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }, a.exactEquals = function(t, r) {
            return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3];
        }, a.equals = function(t, r) {
            var e = t[0], a = t[1], o = t[2], u = t[3], i = r[0], c = r[1], s = r[2], l = r[3];
            return Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(a - c) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(c)) && Math.abs(o - s) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - l) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(l));
        }, t.exports = a;
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            return r ? r + "." + t : t;
        }
        function a(t) {
            var r, e, a, o = t.value, l = Object(s.a)(), f = [], d = {};
            return d.HOT = {
                entity: d,
                type: c.a.HOT
            }, d.COLD = {
                entity: d,
                type: c.a.COLD
            }, d.id = function(t, e) {
                return l = n(t, e), r = e, d;
            }, d.val = function(t) {
                return o = t, d;
            }, d.updateVal = function(t) {
                return o = t(o), d;
            }, d.accept = function(t) {
                return e = t, d;
            }, d.reset = function() {
                return a = !0, d;
            }, d.getId = function() {
                return l;
            }, t.procedure && f.push(t), d.react = function(t, r, e) {
                var n = u(t, r, e);
                n.pidSuffix = M;
                var a = n.dependencies;
                return n.dependencies = [ {
                    entity: d,
                    type: c.a.ACCUMULATOR
                } ], a && a.length && (n.dependencies = n.dependencies.concat(a)), f.push(n), d;
            }, d.getGraph = function() {
                var t = i.a();
                return t.entities[l] = Object(c.c)({
                    id: l,
                    value: o,
                    accept: e,
                    reset: a
                }), f.forEach(function(e) {
                    var a = e.dependencies, o = e.processId ? n(e.processId, r) : l + e.pidSuffix + (a && a.length ? ":" + a.reduce(function(t, r) {
                        var e = r.entity.getId();
                        return e === l ? t : t + ":" + e;
                    }, "") : ""), u = [];
                    a && a.forEach(function(r, e) {
                        if (u[e] = r.type, r.type !== c.a.ACCUMULATOR) {
                            var n = Object(c.b)({
                                process: o,
                                entity: r.entity.getId(),
                                port: e
                            });
                            t.arcs[n.id] = n;
                        }
                    });
                    var i = Object(c.b)({
                        process: o,
                        entity: l
                    });
                    t.arcs[i.id] = i, t.processes[o] = Object(c.d)({
                        id: o,
                        ports: u,
                        procedure: e.procedure,
                        async: e.async,
                        autostart: e.autostart,
                        delta: e.delta
                    });
                }), t;
            }, d;
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
        var i = e(25), c = e(26), s = e(10), l = this && this.__assign || Object.assign || function(t) {
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
        }, i = [], c = {}, s = 0; s < 256; s++) i[s] = (s + 256).toString(16).substr(1), 
        c[i[s]] = s;
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
            if (t.length !== r.length) return !1;
            for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
            return !0;
        }
        function a(t, r) {
            var e = Object.keys(t);
            if (!n(e, Object.keys(r))) return !1;
            for (var a = 0, o = e; a < o.length; a++) {
                var u = o[a];
                if (t[u] !== r[u]) return !1;
            }
            return !0;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "and", function() {
            return o;
        }), e.d(r, "not", function() {
            return u;
        }), e.d(r, "defined", function() {
            return i;
        }), e.d(r, "notEmpty", function() {
            return c;
        }), e.d(r, "unequal", function() {
            return s;
        }), e.d(r, "equal", function() {
            return l;
        }), r.equalArray = n, r.equalObject = a;
        var o = function(t, r) {
            return function(e, n) {
                return t(e, n) && r(e, n);
            };
        }, u = function(t) {
            return function(r, e) {
                return !t(r, e);
            };
        }, i = function(t) {
            return null != t;
        }, c = function(t) {
            return t && t.length;
        }, s = function(t, r) {
            return t !== r;
        }, l = function(t, r) {
            return t === r;
        };
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            var e = t[0], n = t[1], a = t[2], o = t[3], u = r[0], i = r[1], c = r[2], s = r[3], f = s / 255;
            return [ Math.floor(Object(l.lerp)(e, u, f)), Math.floor(Object(l.lerp)(n, i, f)), Math.floor(Object(l.lerp)(a, c, f)), o ];
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
        function c(t) {
            return t = Math.floor(t), [ t >> 16 & 255, t >> 8 & 255, 255 & t ];
        }
        function s(t) {
            var r = t.split("#");
            return c(parseInt(r[r.length - 1], 16));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "BLACK", function() {
            return f;
        }), e.d(r, "WHITE", function() {
            return M;
        }), r.mixColors = n, r.grey = a, r.colorRgbaToCSS = o, r.intToFloat = u, r.floatToInt = i, 
        r.hexToRgb = c, r.hexStringToRgb = s;
        var l = e(2), f = [ 0, 0, 0, 255 ], M = [ 255, 255, 255, 255 ];
    }, function(t, r, e) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), e.d(r, "math", function() {
            return E;
        }), e.d(r, "vr", function() {
            return x;
        }), e.d(r, "events", function() {
            return T;
        }), e.d(r, "utils", function() {
            return p;
        }), e.d(r, "graphics", function() {
            return _;
        });
        var n = e(2), a = e(16), o = e(5), u = e(4), i = e(17), c = e(23), s = e(24), l = e(28), f = e(35), M = e(36), d = e(37), h = e(38), S = e(39), I = e(40), m = e(13), v = e(14), D = e(41), F = e(42), E = {
            core: n,
            noise: o,
            coords: a,
            vectors: u,
            geometry: i
        }, x = {
            camera: c,
            flowCamera: s,
            flowPainterUtils: l
        }, T = {
            dom: f,
            mouse: d,
            keyboard: M,
            animation: h
        }, p = {
            string: S,
            seq: I,
            predicates: m
        }, _ = {
            colors: v,
            pixels: F,
            textures: D
        };
        r.default = {
            math: E,
            vr: x,
            events: T,
            utils: p,
            graphics: _
        };
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return [ Object(o.length)(t), Math.atan2(t[1], t[0]) ];
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
        "use strict";
        function n(t, r) {
            var e = -l.vec3.dot(t, r);
            return l.vec4.fromValues(t[0], t[1], t[2], e);
        }
        function a(t, r, e) {
            return n(o(t, r, e), t);
        }
        function o(t, r, e) {
            var n = l.vec3.cross(l.vec3.create(), l.vec3.sub(l.vec3.create(), e, r), l.vec3.sub(l.vec3.create(), t, r));
            return l.vec3.normalize(n, n);
        }
        function u(t) {
            var r = t, e = r[0], n = r[1], a = r[2], o = r[3];
            return l.mat4.fromValues(1 - 2 * e * e, -2 * e * n, -2 * e * a, 0, -2 * e * n, 1 - 2 * n * n, -2 * n * a, 0, -2 * e * a, -2 * n * a, 1 - 2 * a * a, 0, -2 * e * o, -2 * n * o, -2 * a * o, 1);
        }
        function i(t, r) {
            return r *= .5, t[0] = 0, t[1] = Math.sin(r), t[2] = 0, t[3] = Math.cos(r), t;
        }
        function c(t, r) {
            return r *= .5, t[0] = Math.sin(r), t[1] = 0, t[2] = 0, t[3] = Math.cos(r), t;
        }
        function s(t, r) {
            return r *= .5, t[0] = 0, t[1] = 0, t[2] = Math.sin(r), t[3] = Math.cos(r), t;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.planeFromNormalAndCoplanarPoint = n, r.planeFromThreeCoplanarPoints = a, r.normalFromThreeCoplanarPoints = o, 
        r.mirrorMatrixFromPlane = u, r.getYawQuat = i, r.getPitchQuat = c, r.getRollQuat = s;
        var l = e(3);
        e.n(l);
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
            var n = r[0], a = r[1], o = r[2], u = r[3], i = e[0], c = e[1], s = e[2], l = e[3];
            return t[0] = n * i + o * c, t[1] = a * i + u * c, t[2] = n * s + o * l, t[3] = a * s + u * l, 
            t;
        }, a.mul = a.multiply, a.rotate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(e), c = Math.cos(e);
            return t[0] = n * c + o * i, t[1] = a * c + u * i, t[2] = n * -i + o * c, t[3] = a * -i + u * c, 
            t;
        }, a.scale = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = e[0], c = e[1];
            return t[0] = n * i, t[1] = a * i, t[2] = o * c, t[3] = u * c, t;
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
            var e = t[0], a = t[1], o = t[2], u = t[3], i = r[0], c = r[1], s = r[2], l = r[3];
            return Math.abs(e - i) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(a - c) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(c)) && Math.abs(o - s) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(u - l) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(l));
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
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], c = e * o - n * a;
            return c ? (c = 1 / c, t[0] = o * c, t[1] = -n * c, t[2] = -a * c, t[3] = e * c, 
            t[4] = (a * i - o * u) * c, t[5] = (n * u - e * i) * c, t) : null;
        }, a.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2];
        }, a.multiply = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = e[0], l = e[1], f = e[2], M = e[3], d = e[4], h = e[5];
            return t[0] = n * s + o * l, t[1] = a * s + u * l, t[2] = n * f + o * M, t[3] = a * f + u * M, 
            t[4] = n * d + o * h + i, t[5] = a * d + u * h + c, t;
        }, a.mul = a.multiply, a.rotate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = Math.sin(e), l = Math.cos(e);
            return t[0] = n * l + o * s, t[1] = a * l + u * s, t[2] = n * -s + o * l, t[3] = a * -s + u * l, 
            t[4] = i, t[5] = c, t;
        }, a.scale = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = e[0], l = e[1];
            return t[0] = n * s, t[1] = a * s, t[2] = o * l, t[3] = u * l, t[4] = i, t[5] = c, 
            t;
        }, a.translate = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = e[0], l = e[1];
            return t[0] = n, t[1] = a, t[2] = o, t[3] = u, t[4] = n * s + o * l + i, t[5] = a * s + u * l + c, 
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
            var e = t[0], a = t[1], o = t[2], u = t[3], i = t[4], c = t[5], s = r[0], l = r[1], f = r[2], M = r[3], d = r[4], h = r[5];
            return Math.abs(e - s) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) && Math.abs(a - l) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(l)) && Math.abs(o - f) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(u - M) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(i - d) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(c - h) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(h));
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
        }, a.fromValues = function(t, r, e, a, o, u, i, c, s, l, f, M, d, h, S, I) {
            var m = new n.ARRAY_TYPE(16);
            return m[0] = t, m[1] = r, m[2] = e, m[3] = a, m[4] = o, m[5] = u, m[6] = i, m[7] = c, 
            m[8] = s, m[9] = l, m[10] = f, m[11] = M, m[12] = d, m[13] = h, m[14] = S, m[15] = I, 
            m;
        }, a.set = function(t, r, e, n, a, o, u, i, c, s, l, f, M, d, h, S, I) {
            return t[0] = r, t[1] = e, t[2] = n, t[3] = a, t[4] = o, t[5] = u, t[6] = i, t[7] = c, 
            t[8] = s, t[9] = l, t[10] = f, t[11] = M, t[12] = d, t[13] = h, t[14] = S, t[15] = I, 
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
            var e, n, a, o, u, i, c, s, l, f;
            return e = SIMD.Float32x4.load(r, 0), n = SIMD.Float32x4.load(r, 4), a = SIMD.Float32x4.load(r, 8), 
            o = SIMD.Float32x4.load(r, 12), u = SIMD.Float32x4.shuffle(e, n, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(a, o, 0, 1, 4, 5), 
            c = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), 
            SIMD.Float32x4.store(t, 0, c), SIMD.Float32x4.store(t, 4, s), u = SIMD.Float32x4.shuffle(e, n, 2, 3, 6, 7), 
            i = SIMD.Float32x4.shuffle(a, o, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(u, i, 0, 2, 4, 6), 
            f = SIMD.Float32x4.shuffle(u, i, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, l), SIMD.Float32x4.store(t, 12, f), 
            t;
        }, a.transpose = n.USE_SIMD ? a.SIMD.transpose : a.scalar.transpose, a.scalar.invert = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], c = r[6], s = r[7], l = r[8], f = r[9], M = r[10], d = r[11], h = r[12], S = r[13], I = r[14], m = r[15], v = e * i - n * u, D = e * c - a * u, F = e * s - o * u, E = n * c - a * i, x = n * s - o * i, T = a * s - o * c, p = l * S - f * h, _ = l * I - M * h, A = l * m - d * h, b = f * I - M * S, y = f * m - d * S, O = M * m - d * I, R = v * O - D * y + F * b + E * A - x * _ + T * p;
            return R ? (R = 1 / R, t[0] = (i * O - c * y + s * b) * R, t[1] = (a * y - n * O - o * b) * R, 
            t[2] = (S * T - I * x + m * E) * R, t[3] = (M * x - f * T - d * E) * R, t[4] = (c * A - u * O - s * _) * R, 
            t[5] = (e * O - a * A + o * _) * R, t[6] = (I * F - h * T - m * D) * R, t[7] = (l * T - M * F + d * D) * R, 
            t[8] = (u * y - i * A + s * p) * R, t[9] = (n * A - e * y - o * p) * R, t[10] = (h * x - S * F + m * v) * R, 
            t[11] = (f * F - l * x - d * v) * R, t[12] = (i * _ - u * b - c * p) * R, t[13] = (e * b - n * _ + a * p) * R, 
            t[14] = (S * D - h * E - I * v) * R, t[15] = (l * E - f * D + M * v) * R, t) : null;
        }, a.SIMD.invert = function(t, r) {
            var e, n, a, o, u, i, c, s, l, f, M = SIMD.Float32x4.load(r, 0), d = SIMD.Float32x4.load(r, 4), h = SIMD.Float32x4.load(r, 8), S = SIMD.Float32x4.load(r, 12);
            return u = SIMD.Float32x4.shuffle(M, d, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(h, S, 0, 1, 4, 5), 
            e = SIMD.Float32x4.shuffle(u, n, 0, 2, 4, 6), n = SIMD.Float32x4.shuffle(n, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.shuffle(M, d, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(h, S, 2, 3, 6, 7), 
            a = SIMD.Float32x4.shuffle(u, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, u, 1, 3, 5, 7), 
            u = SIMD.Float32x4.mul(a, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.mul(n, u), 
            c = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), i), 
            c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(n, a), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), i), 
            l = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), 
            a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), i), 
            s = SIMD.Float32x4.mul(e, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(a, u)), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(e, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), 
            u = SIMD.Float32x4.mul(e, n), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), s), 
            l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, u), l), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), s), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(a, u)), 
            u = SIMD.Float32x4.mul(e, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(a, u)), 
            s = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            c = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), c), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(n, u)), 
            u = SIMD.Float32x4.mul(e, a), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), c), 
            l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(n, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), 
            c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(o, u)), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, u), l), 
            f = SIMD.Float32x4.mul(e, i), f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), f), 
            f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), f), u = SIMD.Float32x4.reciprocalApproximation(f), 
            f = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(f, SIMD.Float32x4.mul(u, u))), 
            (f = SIMD.Float32x4.swizzle(f, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(f, i)), 
            SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(f, c)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(f, s)), 
            SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(f, l)), t) : null;
        }, a.invert = n.USE_SIMD ? a.SIMD.invert : a.scalar.invert, a.scalar.adjoint = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = r[4], i = r[5], c = r[6], s = r[7], l = r[8], f = r[9], M = r[10], d = r[11], h = r[12], S = r[13], I = r[14], m = r[15];
            return t[0] = i * (M * m - d * I) - f * (c * m - s * I) + S * (c * d - s * M), t[1] = -(n * (M * m - d * I) - f * (a * m - o * I) + S * (a * d - o * M)), 
            t[2] = n * (c * m - s * I) - i * (a * m - o * I) + S * (a * s - o * c), t[3] = -(n * (c * d - s * M) - i * (a * d - o * M) + f * (a * s - o * c)), 
            t[4] = -(u * (M * m - d * I) - l * (c * m - s * I) + h * (c * d - s * M)), t[5] = e * (M * m - d * I) - l * (a * m - o * I) + h * (a * d - o * M), 
            t[6] = -(e * (c * m - s * I) - u * (a * m - o * I) + h * (a * s - o * c)), t[7] = e * (c * d - s * M) - u * (a * d - o * M) + l * (a * s - o * c), 
            t[8] = u * (f * m - d * S) - l * (i * m - s * S) + h * (i * d - s * f), t[9] = -(e * (f * m - d * S) - l * (n * m - o * S) + h * (n * d - o * f)), 
            t[10] = e * (i * m - s * S) - u * (n * m - o * S) + h * (n * s - o * i), t[11] = -(e * (i * d - s * f) - u * (n * d - o * f) + l * (n * s - o * i)), 
            t[12] = -(u * (f * I - M * S) - l * (i * I - c * S) + h * (i * M - c * f)), t[13] = e * (f * I - M * S) - l * (n * I - a * S) + h * (n * M - a * f), 
            t[14] = -(e * (i * I - c * S) - u * (n * I - a * S) + h * (n * c - a * i)), t[15] = e * (i * M - c * f) - u * (n * M - a * f) + l * (n * c - a * i), 
            t;
        }, a.SIMD.adjoint = function(t, r) {
            var e, n, a, o, u, i, c, s, l, f, M, d, h, e = SIMD.Float32x4.load(r, 0), n = SIMD.Float32x4.load(r, 4), a = SIMD.Float32x4.load(r, 8), o = SIMD.Float32x4.load(r, 12);
            return l = SIMD.Float32x4.shuffle(e, n, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(a, o, 0, 1, 4, 5), 
            u = SIMD.Float32x4.shuffle(l, i, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(i, l, 1, 3, 5, 7), 
            l = SIMD.Float32x4.shuffle(e, n, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(a, o, 2, 3, 6, 7), 
            c = SIMD.Float32x4.shuffle(l, s, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(s, l, 1, 3, 5, 7), 
            l = SIMD.Float32x4.mul(c, s), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), f = SIMD.Float32x4.mul(i, l), 
            M = SIMD.Float32x4.mul(u, l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, l), f), 
            M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, l), M), M = SIMD.Float32x4.swizzle(M, 2, 3, 0, 1), 
            l = SIMD.Float32x4.mul(i, c), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, l), f), 
            h = SIMD.Float32x4.mul(u, l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(s, l)), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, l), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), 
            l = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), 
            c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, l), f), 
            d = SIMD.Float32x4.mul(u, l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(c, l)), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, l), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), 
            l = SIMD.Float32x4.mul(u, i), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, l), d), 
            h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(c, l), h), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, l), d), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(c, l)), 
            l = SIMD.Float32x4.mul(u, s), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(c, l)), 
            d = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, l), d), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            M = SIMD.Float32x4.add(SIMD.Float32x4.mul(c, l), M), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(i, l)), 
            l = SIMD.Float32x4.mul(u, c), l = SIMD.Float32x4.swizzle(l, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, l), M), 
            h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(i, l)), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), 
            M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(s, l)), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, l), h), 
            SIMD.Float32x4.store(t, 0, f), SIMD.Float32x4.store(t, 4, M), SIMD.Float32x4.store(t, 8, d), 
            SIMD.Float32x4.store(t, 12, h), t;
        }, a.adjoint = n.USE_SIMD ? a.SIMD.adjoint : a.scalar.adjoint, a.determinant = function(t) {
            var r = t[0], e = t[1], n = t[2], a = t[3], o = t[4], u = t[5], i = t[6], c = t[7], s = t[8], l = t[9], f = t[10], M = t[11], d = t[12], h = t[13], S = t[14], I = t[15];
            return (r * u - e * o) * (f * I - M * S) - (r * i - n * o) * (l * I - M * h) + (r * c - a * o) * (l * S - f * h) + (e * i - n * u) * (s * I - M * d) - (e * c - a * u) * (s * S - f * d) + (n * c - a * i) * (s * h - l * d);
        }, a.SIMD.multiply = function(t, r, e) {
            var n = SIMD.Float32x4.load(r, 0), a = SIMD.Float32x4.load(r, 4), o = SIMD.Float32x4.load(r, 8), u = SIMD.Float32x4.load(r, 12), i = SIMD.Float32x4.load(e, 0), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 0, c);
            var s = SIMD.Float32x4.load(e, 4), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 4, l);
            var f = SIMD.Float32x4.load(e, 8), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 3, 3, 3, 3), u))));
            SIMD.Float32x4.store(t, 8, M);
            var d = SIMD.Float32x4.load(e, 12), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), u))));
            return SIMD.Float32x4.store(t, 12, h), t;
        }, a.scalar.multiply = function(t, r, e) {
            var n = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = r[6], l = r[7], f = r[8], M = r[9], d = r[10], h = r[11], S = r[12], I = r[13], m = r[14], v = r[15], D = e[0], F = e[1], E = e[2], x = e[3];
            return t[0] = D * n + F * i + E * f + x * S, t[1] = D * a + F * c + E * M + x * I, 
            t[2] = D * o + F * s + E * d + x * m, t[3] = D * u + F * l + E * h + x * v, D = e[4], 
            F = e[5], E = e[6], x = e[7], t[4] = D * n + F * i + E * f + x * S, t[5] = D * a + F * c + E * M + x * I, 
            t[6] = D * o + F * s + E * d + x * m, t[7] = D * u + F * l + E * h + x * v, D = e[8], 
            F = e[9], E = e[10], x = e[11], t[8] = D * n + F * i + E * f + x * S, t[9] = D * a + F * c + E * M + x * I, 
            t[10] = D * o + F * s + E * d + x * m, t[11] = D * u + F * l + E * h + x * v, D = e[12], 
            F = e[13], E = e[14], x = e[15], t[12] = D * n + F * i + E * f + x * S, t[13] = D * a + F * c + E * M + x * I, 
            t[14] = D * o + F * s + E * d + x * m, t[15] = D * u + F * l + E * h + x * v, t;
        }, a.multiply = n.USE_SIMD ? a.SIMD.multiply : a.scalar.multiply, a.mul = a.multiply, 
        a.scalar.translate = function(t, r, e) {
            var n, a, o, u, i, c, s, l, f, M, d, h, S = e[0], I = e[1], m = e[2];
            return r === t ? (t[12] = r[0] * S + r[4] * I + r[8] * m + r[12], t[13] = r[1] * S + r[5] * I + r[9] * m + r[13], 
            t[14] = r[2] * S + r[6] * I + r[10] * m + r[14], t[15] = r[3] * S + r[7] * I + r[11] * m + r[15]) : (n = r[0], 
            a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], s = r[6], l = r[7], f = r[8], 
            M = r[9], d = r[10], h = r[11], t[0] = n, t[1] = a, t[2] = o, t[3] = u, t[4] = i, 
            t[5] = c, t[6] = s, t[7] = l, t[8] = f, t[9] = M, t[10] = d, t[11] = h, t[12] = n * S + i * I + f * m + r[12], 
            t[13] = a * S + c * I + M * m + r[13], t[14] = o * S + s * I + d * m + r[14], t[15] = u * S + l * I + h * m + r[15]), 
            t;
        }, a.SIMD.translate = function(t, r, e) {
            var n = SIMD.Float32x4.load(r, 0), a = SIMD.Float32x4.load(r, 4), o = SIMD.Float32x4.load(r, 8), u = SIMD.Float32x4.load(r, 12), i = SIMD.Float32x4(e[0], e[1], e[2], 0);
            r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], 
            t[6] = r[6], t[7] = r[7], t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11]), 
            n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(i, 0, 0, 0, 0)), a = SIMD.Float32x4.mul(a, SIMD.Float32x4.swizzle(i, 1, 1, 1, 1)), 
            o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(i, 2, 2, 2, 2));
            var c = SIMD.Float32x4.add(n, SIMD.Float32x4.add(a, SIMD.Float32x4.add(o, u)));
            return SIMD.Float32x4.store(t, 12, c), t;
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
            var o, u, i, c, s, l, f, M, d, h, S, I, m, v, D, F, E, x, T, p, _, A, b, y, O = a[0], R = a[1], g = a[2], N = Math.sqrt(O * O + R * R + g * g);
            return Math.abs(N) < n.EPSILON ? null : (N = 1 / N, O *= N, R *= N, g *= N, o = Math.sin(e), 
            u = Math.cos(e), i = 1 - u, c = r[0], s = r[1], l = r[2], f = r[3], M = r[4], d = r[5], 
            h = r[6], S = r[7], I = r[8], m = r[9], v = r[10], D = r[11], F = O * O * i + u, 
            E = R * O * i + g * o, x = g * O * i - R * o, T = O * R * i - g * o, p = R * R * i + u, 
            _ = g * R * i + O * o, A = O * g * i + R * o, b = R * g * i - O * o, y = g * g * i + u, 
            t[0] = c * F + M * E + I * x, t[1] = s * F + d * E + m * x, t[2] = l * F + h * E + v * x, 
            t[3] = f * F + S * E + D * x, t[4] = c * T + M * p + I * _, t[5] = s * T + d * p + m * _, 
            t[6] = l * T + h * p + v * _, t[7] = f * T + S * p + D * _, t[8] = c * A + M * b + I * y, 
            t[9] = s * A + d * b + m * y, t[10] = l * A + h * b + v * y, t[11] = f * A + S * b + D * y, 
            r !== t && (t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15]), t);
        }, a.scalar.rotateX = function(t, r, e) {
            var n = Math.sin(e), a = Math.cos(e), o = r[4], u = r[5], i = r[6], c = r[7], s = r[8], l = r[9], f = r[10], M = r[11];
            return r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[4] = o * a + s * n, t[5] = u * a + l * n, 
            t[6] = i * a + f * n, t[7] = c * a + M * n, t[8] = s * a - o * n, t[9] = l * a - u * n, 
            t[10] = f * a - i * n, t[11] = M * a - c * n, t;
        }, a.SIMD.rotateX = function(t, r, e) {
            var n = SIMD.Float32x4.splat(Math.sin(e)), a = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], t[13] = r[13], 
            t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 4), u = SIMD.Float32x4.load(r, 8);
            return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, a), SIMD.Float32x4.mul(o, n))), 
            t;
        }, a.rotateX = n.USE_SIMD ? a.SIMD.rotateX : a.scalar.rotateX, a.scalar.rotateY = function(t, r, e) {
            var n = Math.sin(e), a = Math.cos(e), o = r[0], u = r[1], i = r[2], c = r[3], s = r[8], l = r[9], f = r[10], M = r[11];
            return r !== t && (t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * a - s * n, t[1] = u * a - l * n, 
            t[2] = i * a - f * n, t[3] = c * a - M * n, t[8] = o * n + s * a, t[9] = u * n + l * a, 
            t[10] = i * n + f * a, t[11] = c * n + M * a, t;
        }, a.SIMD.rotateY = function(t, r, e) {
            var n = SIMD.Float32x4.splat(Math.sin(e)), a = SIMD.Float32x4.splat(Math.cos(e));
            r !== t && (t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[12] = r[12], t[13] = r[13], 
            t[14] = r[14], t[15] = r[15]);
            var o = SIMD.Float32x4.load(r, 0), u = SIMD.Float32x4.load(r, 8);
            return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(u, n))), 
            SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(u, a))), 
            t;
        }, a.rotateY = n.USE_SIMD ? a.SIMD.rotateY : a.scalar.rotateY, a.scalar.rotateZ = function(t, r, e) {
            var n = Math.sin(e), a = Math.cos(e), o = r[0], u = r[1], i = r[2], c = r[3], s = r[4], l = r[5], f = r[6], M = r[7];
            return r !== t && (t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], t[12] = r[12], 
            t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * a + s * n, t[1] = u * a + l * n, 
            t[2] = i * a + f * n, t[3] = c * a + M * n, t[4] = s * a - o * n, t[5] = l * a - u * n, 
            t[6] = f * a - i * n, t[7] = M * a - c * n, t;
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
            var a, o, u, i = e[0], c = e[1], s = e[2], l = Math.sqrt(i * i + c * c + s * s);
            return Math.abs(l) < n.EPSILON ? null : (l = 1 / l, i *= l, c *= l, s *= l, a = Math.sin(r), 
            o = Math.cos(r), u = 1 - o, t[0] = i * i * u + o, t[1] = c * i * u + s * a, t[2] = s * i * u - c * a, 
            t[3] = 0, t[4] = i * c * u - s * a, t[5] = c * c * u + o, t[6] = s * c * u + i * a, 
            t[7] = 0, t[8] = i * s * u + c * a, t[9] = c * s * u - i * a, t[10] = s * s * u + o, 
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
            var n = r[0], a = r[1], o = r[2], u = r[3], i = n + n, c = a + a, s = o + o, l = n * i, f = n * c, M = n * s, d = a * c, h = a * s, S = o * s, I = u * i, m = u * c, v = u * s;
            return t[0] = 1 - (d + S), t[1] = f + v, t[2] = M - m, t[3] = 0, t[4] = f - v, t[5] = 1 - (l + S), 
            t[6] = h + I, t[7] = 0, t[8] = M + m, t[9] = h - I, t[10] = 1 - (l + d), t[11] = 0, 
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
            var a = r[0], o = r[1], u = r[2], i = r[3], c = a + a, s = o + o, l = u + u, f = a * c, M = a * s, d = a * l, h = o * s, S = o * l, I = u * l, m = i * c, v = i * s, D = i * l, F = n[0], E = n[1], x = n[2];
            return t[0] = (1 - (h + I)) * F, t[1] = (M + D) * F, t[2] = (d - v) * F, t[3] = 0, 
            t[4] = (M - D) * E, t[5] = (1 - (f + I)) * E, t[6] = (S + m) * E, t[7] = 0, t[8] = (d + v) * x, 
            t[9] = (S - m) * x, t[10] = (1 - (f + h)) * x, t[11] = 0, t[12] = e[0], t[13] = e[1], 
            t[14] = e[2], t[15] = 1, t;
        }, a.fromRotationTranslationScaleOrigin = function(t, r, e, n, a) {
            var o = r[0], u = r[1], i = r[2], c = r[3], s = o + o, l = u + u, f = i + i, M = o * s, d = o * l, h = o * f, S = u * l, I = u * f, m = i * f, v = c * s, D = c * l, F = c * f, E = n[0], x = n[1], T = n[2], p = a[0], _ = a[1], A = a[2];
            return t[0] = (1 - (S + m)) * E, t[1] = (d + F) * E, t[2] = (h - D) * E, t[3] = 0, 
            t[4] = (d - F) * x, t[5] = (1 - (M + m)) * x, t[6] = (I + v) * x, t[7] = 0, t[8] = (h + D) * T, 
            t[9] = (I - v) * T, t[10] = (1 - (M + S)) * T, t[11] = 0, t[12] = e[0] + p - (t[0] * p + t[4] * _ + t[8] * A), 
            t[13] = e[1] + _ - (t[1] * p + t[5] * _ + t[9] * A), t[14] = e[2] + A - (t[2] * p + t[6] * _ + t[10] * A), 
            t[15] = 1, t;
        }, a.fromQuat = function(t, r) {
            var e = r[0], n = r[1], a = r[2], o = r[3], u = e + e, i = n + n, c = a + a, s = e * u, l = n * u, f = n * i, M = a * u, d = a * i, h = a * c, S = o * u, I = o * i, m = o * c;
            return t[0] = 1 - f - h, t[1] = l + m, t[2] = M - I, t[3] = 0, t[4] = l - m, t[5] = 1 - s - h, 
            t[6] = d + S, t[7] = 0, t[8] = M + I, t[9] = d - S, t[10] = 1 - s - f, t[11] = 0, 
            t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
        }, a.frustum = function(t, r, e, n, a, o, u) {
            var i = 1 / (e - r), c = 1 / (a - n), s = 1 / (o - u);
            return t[0] = 2 * o * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * c, 
            t[6] = 0, t[7] = 0, t[8] = (e + r) * i, t[9] = (a + n) * c, t[10] = (u + o) * s, 
            t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * o * 2 * s, t[15] = 0, t;
        }, a.perspective = function(t, r, e, n, a) {
            var o = 1 / Math.tan(r / 2), u = 1 / (n - a);
            return t[0] = o / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (a + n) * u, t[11] = -1, t[12] = 0, t[13] = 0, 
            t[14] = 2 * a * n * u, t[15] = 0, t;
        }, a.perspectiveFromFieldOfView = function(t, r, e, n) {
            var a = Math.tan(r.upDegrees * Math.PI / 180), o = Math.tan(r.downDegrees * Math.PI / 180), u = Math.tan(r.leftDegrees * Math.PI / 180), i = Math.tan(r.rightDegrees * Math.PI / 180), c = 2 / (u + i), s = 2 / (a + o);
            return t[0] = c, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, 
            t[8] = -(u - i) * c * .5, t[9] = (a - o) * s * .5, t[10] = n / (e - n), t[11] = -1, 
            t[12] = 0, t[13] = 0, t[14] = n * e / (e - n), t[15] = 0, t;
        }, a.ortho = function(t, r, e, n, a, o, u) {
            var i = 1 / (r - e), c = 1 / (n - a), s = 1 / (o - u);
            return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, 
            t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * s, t[11] = 0, t[12] = (r + e) * i, t[13] = (a + n) * c, 
            t[14] = (u + o) * s, t[15] = 1, t;
        }, a.lookAt = function(t, r, e, o) {
            var u, i, c, s, l, f, M, d, h, S, I = r[0], m = r[1], v = r[2], D = o[0], F = o[1], E = o[2], x = e[0], T = e[1], p = e[2];
            return Math.abs(I - x) < n.EPSILON && Math.abs(m - T) < n.EPSILON && Math.abs(v - p) < n.EPSILON ? a.identity(t) : (M = I - x, 
            d = m - T, h = v - p, S = 1 / Math.sqrt(M * M + d * d + h * h), M *= S, d *= S, 
            h *= S, u = F * h - E * d, i = E * M - D * h, c = D * d - F * M, S = Math.sqrt(u * u + i * i + c * c), 
            S ? (S = 1 / S, u *= S, i *= S, c *= S) : (u = 0, i = 0, c = 0), s = d * c - h * i, 
            l = h * u - M * c, f = M * i - d * u, S = Math.sqrt(s * s + l * l + f * f), S ? (S = 1 / S, 
            s *= S, l *= S, f *= S) : (s = 0, l = 0, f = 0), t[0] = u, t[1] = s, t[2] = M, t[3] = 0, 
            t[4] = i, t[5] = l, t[6] = d, t[7] = 0, t[8] = c, t[9] = f, t[10] = h, t[11] = 0, 
            t[12] = -(u * I + i * m + c * v), t[13] = -(s * I + l * m + f * v), t[14] = -(M * I + d * m + h * v), 
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
            var e = t[0], a = t[1], o = t[2], u = t[3], i = t[4], c = t[5], s = t[6], l = t[7], f = t[8], M = t[9], d = t[10], h = t[11], S = t[12], I = t[13], m = t[14], v = t[15], D = r[0], F = r[1], E = r[2], x = r[3], T = r[4], p = r[5], _ = r[6], A = r[7], b = r[8], y = r[9], O = r[10], R = r[11], g = r[12], N = r[13], P = r[14], L = r[15];
            return Math.abs(e - D) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(D)) && Math.abs(a - F) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(F)) && Math.abs(o - E) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(E)) && Math.abs(u - x) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(x)) && Math.abs(i - T) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(T)) && Math.abs(c - p) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(p)) && Math.abs(s - _) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(_)) && Math.abs(l - A) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(A)) && Math.abs(f - b) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(b)) && Math.abs(M - y) <= n.EPSILON * Math.max(1, Math.abs(M), Math.abs(y)) && Math.abs(d - O) <= n.EPSILON * Math.max(1, Math.abs(d), Math.abs(O)) && Math.abs(h - R) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(R)) && Math.abs(S - g) <= n.EPSILON * Math.max(1, Math.abs(S), Math.abs(g)) && Math.abs(I - N) <= n.EPSILON * Math.max(1, Math.abs(I), Math.abs(N)) && Math.abs(m - P) <= n.EPSILON * Math.max(1, Math.abs(m), Math.abs(P)) && Math.abs(v - L) <= n.EPSILON * Math.max(1, Math.abs(v), Math.abs(L));
        }, t.exports = a;
    }, function(t, r, e) {
        var n = e(0), a = e(6), o = e(7), u = e(8), i = {};
        i.create = function() {
            var t = new n.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
        }, i.rotationTo = function() {
            var t = o.create(), r = o.fromValues(1, 0, 0), e = o.fromValues(0, 1, 0);
            return function(n, a, u) {
                var c = o.dot(a, u);
                return c < -.999999 ? (o.cross(t, r, a), o.length(t) < 1e-6 && o.cross(t, e, a), 
                o.normalize(t, t), i.setAxisAngle(n, t, Math.PI), n) : c > .999999 ? (n[0] = 0, 
                n[1] = 0, n[2] = 0, n[3] = 1, n) : (o.cross(t, a, u), n[0] = t[0], n[1] = t[1], 
                n[2] = t[2], n[3] = 1 + c, i.normalize(n, n));
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
            var n = r[0], a = r[1], o = r[2], u = r[3], i = e[0], c = e[1], s = e[2], l = e[3];
            return t[0] = n * l + u * i + a * s - o * c, t[1] = a * l + u * c + o * i - n * s, 
            t[2] = o * l + u * s + n * c - a * i, t[3] = u * l - n * i - a * c - o * s, t;
        }, i.mul = i.multiply, i.scale = u.scale, i.rotateX = function(t, r, e) {
            e *= .5;
            var n = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(e), c = Math.cos(e);
            return t[0] = n * c + u * i, t[1] = a * c + o * i, t[2] = o * c - a * i, t[3] = u * c - n * i, 
            t;
        }, i.rotateY = function(t, r, e) {
            e *= .5;
            var n = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(e), c = Math.cos(e);
            return t[0] = n * c - o * i, t[1] = a * c + u * i, t[2] = o * c + n * i, t[3] = u * c - a * i, 
            t;
        }, i.rotateZ = function(t, r, e) {
            e *= .5;
            var n = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(e), c = Math.cos(e);
            return t[0] = n * c + a * i, t[1] = a * c - n * i, t[2] = o * c + u * i, t[3] = u * c - o * i, 
            t;
        }, i.calculateW = function(t, r) {
            var e = r[0], n = r[1], a = r[2];
            return t[0] = e, t[1] = n, t[2] = a, t[3] = Math.sqrt(Math.abs(1 - e * e - n * n - a * a)), 
            t;
        }, i.dot = u.dot, i.lerp = u.lerp, i.slerp = function(t, r, e, n) {
            var a, o, u, i, c, s = r[0], l = r[1], f = r[2], M = r[3], d = e[0], h = e[1], S = e[2], I = e[3];
            return o = s * d + l * h + f * S + M * I, o < 0 && (o = -o, d = -d, h = -h, S = -S, 
            I = -I), 1 - o > 1e-6 ? (a = Math.acos(o), u = Math.sin(a), i = Math.sin((1 - n) * a) / u, 
            c = Math.sin(n * a) / u) : (i = 1 - n, c = n), t[0] = i * s + c * d, t[1] = i * l + c * h, 
            t[2] = i * f + c * S, t[3] = i * M + c * I, t;
        }, i.sqlerp = function() {
            var t = i.create(), r = i.create();
            return function(e, n, a, o, u, c) {
                return i.slerp(t, n, u, c), i.slerp(r, a, o, c), i.slerp(e, t, r, 2 * c * (1 - c)), 
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
                var i, c;
                for (e || (e = 2), n || (n = 0), c = a ? Math.min(a * e + n, r.length) : r.length, 
                i = n; i < c; i += e) t[0] = r[i], t[1] = r[i + 1], o(t, t, u), r[i] = t[0], r[i + 1] = t[1];
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
            var r = t.props, e = t.state, n = e.view, a = e.perspective, u = e.rotationX, i = e.rotationY, c = e.position;
            r.needsUpdatePerspective && (r.needsUpdatePerspective = !1, o.mat4.perspective(a, r.fovy, r.aspect, r.near, r.far));
            var s = !1;
            if (r.rotateX && (o.mat4.rotateX(u, u, r.rotateX), r.rotateX = 0, s = !0), r.rotateY && (o.mat4.rotateY(i, i, r.rotateY), 
            r.rotateY = 0, s = !0), r.moveForward) {
                var l = o.vec3.fromValues(i[8], i[9], i[10]);
                o.vec3.add(c, c, o.vec3.scale(l, l, -r.moveForward)), r.moveForward = 0, s = !0;
            }
            if (r.moveLeft) {
                var l = o.vec3.fromValues(i[0], i[1], i[2]);
                o.vec3.add(c, c, o.vec3.scale(l, l, -r.moveLeft)), r.moveLeft = 0, s = !0;
            }
            if (r.moveUp) {
                var l = o.vec3.fromValues(i[4], i[5], i[6]);
                o.vec3.add(c, c, o.vec3.scale(l, l, r.moveUp)), r.moveUp = 0, s = !0;
            }
            s && (o.mat4.fromTranslation(n, c), o.mat4.multiply(n, n, i), o.mat4.multiply(n, n, u), 
            o.mat4.invert(n, n));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.create = n, r.update = a;
        var o = e(3);
        e.n(o);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = Object(u.d)({
                near: .1,
                far: 1e3,
                fovy: .6 * Math.PI,
                aspect: 1
            }).react([ t.HOT ], function(t, r) {
                var e = r.width, n = r.height;
                return t.aspect = e / n, t;
            });
            return {
                perspectiveSettings: r,
                perspective: Object(u.d)(o.mat4.create()).react([ r.HOT ], function(t, r) {
                    return o.mat4.perspective(t, r.fovy, r.aspect, r.near, r.far);
                })
            };
        }
        function a() {
            var t = Object(u.d)(o.vec3.fromValues(0, 0, 0)), r = Object(u.d)(0), e = Object(u.d)(0), n = Object(u.d)({
                rotX: o.mat4.create(),
                rotY: o.mat4.create()
            }).react([ r.HOT ], function(t, r) {
                return t.rotY = o.mat4.fromYRotation(t.rotY, r), t;
            }).react([ e.HOT ], function(t, r) {
                return t.rotX = o.mat4.fromXRotation(t.rotX, r), t;
            });
            return {
                position: t,
                rotation: n,
                view: Object(u.d)(o.mat4.create()).react([ n.HOT, t.HOT ], function(t, r, e) {
                    return o.mat4.fromTranslation(t, e), o.mat4.multiply(t, t, r.rotY), o.mat4.multiply(t, t, r.rotX), 
                    o.mat4.invert(t, t), t;
                }),
                rotY: r,
                rotX: e
            };
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.makePerspective = n, r.makeFirstPersonView = a;
        var o = e(3), u = (e.n(o), e(9));
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
            var r = t.id, e = void 0 === r ? Object(u.a)() : r, n = t.value, a = t.json, o = t.accept, i = t.reset, c = t.meta;
            return void 0 === n && a && (n = JSON.parse(a)), {
                id: e,
                value: n,
                accept: o,
                reset: i,
                meta: c
            };
        }
        function a(t, r) {
            var e = t.id, n = void 0 === e ? Object(u.a)() : e, a = t.ports, o = void 0 === a ? [] : a, s = t.procedure, l = t.code, f = t.autostart, M = void 0 !== f && f, d = t.async, h = void 0 !== d && d, S = t.delta, I = void 0 !== S && S, m = t.meta;
            if (null == s && null != l && (s = Object(i.a)(l, r)), null == s) throw TypeError("Process must have procedure or code set");
            return I && !o.length && o.push(c.HOT), {
                id: n,
                ports: o,
                procedure: s,
                autostart: M,
                async: h,
                delta: I,
                meta: m
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
                meta: o
            };
        }
        r.c = n, r.d = a, r.b = o, e.d(r, "a", function() {
            return c;
        });
        var u = e(10), i = e(27), c = {
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
        function n() {
            return {
                canvas: Object(M.b)(null, function(t) {
                    var r = document.createElement("canvas");
                    return document.body.appendChild(r), t(r), function() {
                        document.body.removeChild(r);
                    };
                })
            };
        }
        function a(t, r, e) {
            var n = Object(M.c)([ t.HOT ], h.a), a = Object(M.a)([ n.HOT ], function(t, r) {
                var e = Object(d.a)(r);
                return t(e), e.destroy;
            }).accept(S.unequal), o = Object(M.c)([ t.HOT, r.HOT ], function(t) {
                return {
                    width: t.clientWidth,
                    height: t.clientHeight
                };
            });
            return a.react([ o.HOT ], function(t, r) {
                return t.resize();
            }, "updateSize"), e && a.react([ e.HOT ], function(t, r) {
                return t.updateDrawSettings(r);
            }), {
                painter: a,
                gl: n,
                canvasSize: o
            };
        }
        function o(t, r) {
            var e = Object(M.a)([ t.HOT ], function(t, r) {
                var e = r.createShade();
                return t(e), e.destroy;
            });
            return r && e.react([ r.HOT ], function(t, r) {
                return t.update(r);
            }), e;
        }
        function u(t, r) {
            var e = Object(M.a)([ t.HOT ], function(t, r) {
                var e = r.createForm();
                return t(e), e.destroy;
            });
            return r && e.react([ r.HOT ], function(t, r) {
                return t.update(r);
            }), e;
        }
        function i(t, r) {
            var e = Object(M.a)([ t.HOT ], function(t, r) {
                var e = r.createSketch();
                return t(e), e.destroy;
            });
            return r && e.react([ r.HOT ], function(t, r) {
                return t.update(r);
            }), e;
        }
        function c(t, r) {
            var e = Object(M.a)([ t.HOT ], function(t, r) {
                var e = r.createFlatSketch();
                return t(e), e.destroy;
            });
            return r && e.react([ r.HOT ], function(t, r) {
                return t.update(r);
            }), e;
        }
        function s(t, r) {
            var e = Object(M.a)([ t.HOT ], function(t, r) {
                var e = r.createStaticLayer();
                return t(e), e.destroy;
            });
            return r && e.react([ r.HOT ], function(t, r) {
                return t.update(r);
            }), e;
        }
        function l(t, r) {
            var e = Object(M.a)([ t.HOT ], function(t, r) {
                var e = r.createDrawingLayer();
                return t(e), e.destroy;
            });
            return r && e.react([ r.HOT ], function(t, r) {
                return t.update(r);
            }), e;
        }
        function f(t, r) {
            var e = Object(M.a)([ t.HOT ], function(t, r) {
                var e = r.createEffectLayer();
                return t(e), e.destroy;
            });
            return r && e.react([ r.HOT ], function(t, r) {
                return t.update(r);
            }), e;
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.createBodyCanvas = n, r.setupPainter = a, r.makeShadeEntity = o, r.makeFormEntity = u, 
        r.makeSketchEntity = i, r.makeFlatSketchEntity = c, r.makeStaticLayerEntity = s, 
        r.makeDrawingLayerEntity = l, r.makeEffectLayerEntity = f;
        var M = e(9), d = e(29), h = e(12), S = e(13);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            var r = [ {}, {} ], e = Object(S.d)(t), n = s.a(t).update(S.a.renderQuad), o = function() {
                return f.a().update({
                    form: n,
                    shade: l.a(t).update(S.b.basicEffect)
                });
            }, u = o(), i = function(e, n) {
                void 0 === e && (e = 1), void 0 === n && (n = !1);
                var a = t.canvas;
                return (Object(h.b)(a, e) || n) && r.forEach(function(r) {
                    r.width = a.width, r.height = a.height, r.textureConfig = {
                        count: 1,
                        type: t.UNSIGNED_BYTE
                    }, Object(d.h)(t, r, S.c);
                }), v;
            };
            i(1, !0);
            var m = function() {
                u.destroy();
                for (var e = 0, n = r; e < n.length; e++) {
                    var a = n[e];
                    Object(d.d)(t, a);
                }
            }, v = {
                gl: t,
                updateDrawSettings: function(r) {
                    return Object(d.a)(t, I({}, e, r)), v;
                },
                createForm: function() {
                    return s.a(t);
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
                    return a(t, r, null, e), v;
                },
                compose: function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return c(t, e, r, u), v;
                },
                resize: i,
                destroy: m
            };
            return v;
        }
        function a(t, r, e, n) {
            var a = r.shade, c = r.uniforms, s = r.form, l = r.drawSettings;
            if (!a || !s) throw Error("cannot draw, shader or geometry are not set");
            if (t.useProgram(a.program), u(a, s), n && i(a, n, e), l && Object(d.a)(t, l), Array.isArray(c)) for (var f = 0, M = c; f < M.length; f++) {
                var h = M[f];
                o(t, r, e, h);
            } else o(t, r, e, c);
            l && Object(d.f)(t, l);
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
        function c(t, r, e, n) {
            for (var o = r.length - 1, u = 0; u < r.length; u++) !function(u) {
                var i = r[u], c = function(r, o) {
                    var u = e[0], c = e[1], s = !o && null == i.target;
                    if (o ? (t.bindFramebuffer(t.FRAMEBUFFER, null), t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight)) : i.target ? (t.bindFramebuffer(t.FRAMEBUFFER, i.target.frameBuffer), 
                    t.viewport(0, 0, i.target.width, i.target.height)) : (t.bindFramebuffer(t.FRAMEBUFFER, c.frameBuffer), 
                    t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight)), i.data.drawSettings && Object(d.a)(t, i.data.drawSettings), 
                    i.sketches) for (var l = 0, f = i.sketches; l < f.length; l++) {
                        var M = f[l];
                        a(t, M, u.textures[0], r);
                    } else a(t, n, null, {
                        source: i.texture()
                    });
                    i.data.drawSettings && Object(d.f)(t, i.data.drawSettings), s && (e[0] = c, e[1] = u);
                };
                if (Array.isArray(i.uniforms)) for (var s = o + i.uniforms.length - 1, l = 0; l < i.uniforms.length; l++) {
                    var f = u + l === s;
                    c(i.uniforms[l], f);
                } else {
                    var f = u === o;
                    c(i.uniforms, f);
                }
            }(u);
        }
        r.a = n;
        var s = e(30), l = e(31), f = e(32), M = e(33), d = e(1), h = e(12), S = e(34), I = this && this.__assign || Object.assign || function(t) {
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
                    }), r.elements.glType = Object(a.e)(i), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r.elements.buffer), 
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, i, t[(e.elements.storeType || "STATIC") + "_DRAW"]);
                }
                return r;
            }, r.destroy = function() {
                for (var e in r.attribs) t.deleteBuffer(r.attribs[e].buffer);
                return r.elements && t.deleteBuffer(r.elements.buffer), r;
            }, r;
        }
        r.a = n;
        var a = e(1);
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
                return r.uniformSetters = Object(o.c)(t, r.program), r.attributeSetters = Object(o.b)(t, r.program), 
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
        var o = e(1);
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
                return t.bindTexture(t.TEXTURE_2D, e), Object(o.g)(t, n, r.data), n.asset && t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n.asset), 
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
                }, Object(o.h)(t, r.target, e, r.data), r.textures = r.target.textures) : r.target && e.width && e.height && (r.target.width = e.width, 
                r.target.height = e.height, Object(o.h)(t, r.target, e, r.data)), e.sketches && (r.sketches = e.sketches), 
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
                if (r.target) Object(o.d)(t, r.target); else for (var u = 0, i = r.textures; u < i.length; u++) {
                    var c = i[u];
                    t.deleteTexture(c);
                }
            }, r;
        }
        r.b = n, r.a = a;
        var o = e(1);
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
            return c;
        });
        var a, o = e(11), u = {
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
        }, c = {
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
        var o;
        !function(t) {
            t[t.CANCEL = 3] = "CANCEL", t[t.HELP = 6] = "HELP", t[t.BACK_SPACE = 8] = "BACK_SPACE", 
            t[t.TAB = 9] = "TAB", t[t.CLEAR = 12] = "CLEAR", t[t.RETURN = 13] = "RETURN", t[t.ENTER = 14] = "ENTER", 
            t[t.SHIFT = 16] = "SHIFT", t[t.CONTROL = 17] = "CONTROL", t[t.ALT = 18] = "ALT", 
            t[t.PAUSE = 19] = "PAUSE", t[t.CAPS_LOCK = 20] = "CAPS_LOCK", t[t.ESCAPE = 27] = "ESCAPE", 
            t[t.SPACE = 32] = "SPACE", t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", 
            t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", 
            t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN", t[t.PRINTSCREEN = 44] = "PRINTSCREEN", 
            t[t.INSERT = 45] = "INSERT", t[t.DELETE = 46] = "DELETE", t[t.DIGIT_0 = 48] = "DIGIT_0", 
            t[t.DIGIT_1 = 49] = "DIGIT_1", t[t.DIGIT_2 = 50] = "DIGIT_2", t[t.DIGIT_3 = 51] = "DIGIT_3", 
            t[t.DIGIT_4 = 52] = "DIGIT_4", t[t.DIGIT_5 = 53] = "DIGIT_5", t[t.DIGIT_6 = 54] = "DIGIT_6", 
            t[t.DIGIT_7 = 55] = "DIGIT_7", t[t.DIGIT_8 = 56] = "DIGIT_8", t[t.DIGIT_9 = 57] = "DIGIT_9", 
            t[t.SEMICOLON = 59] = "SEMICOLON", t[t.EQUALS = 61] = "EQUALS", t[t.A = 65] = "A", 
            t[t.B = 66] = "B", t[t.C = 67] = "C", t[t.D = 68] = "D", t[t.E = 69] = "E", t[t.F = 70] = "F", 
            t[t.G = 71] = "G", t[t.H = 72] = "H", t[t.I = 73] = "I", t[t.J = 74] = "J", t[t.K = 75] = "K", 
            t[t.L = 76] = "L", t[t.M = 77] = "M", t[t.N = 78] = "N", t[t.O = 79] = "O", t[t.P = 80] = "P", 
            t[t.Q = 81] = "Q", t[t.R = 82] = "R", t[t.S = 83] = "S", t[t.T = 84] = "T", t[t.U = 85] = "U", 
            t[t.V = 86] = "V", t[t.W = 87] = "W", t[t.X = 88] = "X", t[t.Y = 89] = "Y", t[t.Z = 90] = "Z", 
            t[t.CONTEXT_MENU = 93] = "CONTEXT_MENU", t[t.NUMPAD0 = 96] = "NUMPAD0", t[t.NUMPAD1 = 97] = "NUMPAD1", 
            t[t.NUMPAD2 = 98] = "NUMPAD2", t[t.NUMPAD3 = 99] = "NUMPAD3", t[t.NUMPAD4 = 100] = "NUMPAD4", 
            t[t.NUMPAD5 = 101] = "NUMPAD5", t[t.NUMPAD6 = 102] = "NUMPAD6", t[t.NUMPAD7 = 103] = "NUMPAD7", 
            t[t.NUMPAD8 = 104] = "NUMPAD8", t[t.NUMPAD9 = 105] = "NUMPAD9", t[t.MULTIPLY = 106] = "MULTIPLY", 
            t[t.ADD = 107] = "ADD", t[t.SEPARATOR = 108] = "SEPARATOR", t[t.SUBTRACT = 109] = "SUBTRACT", 
            t[t.DECIMAL = 110] = "DECIMAL", t[t.DIVIDE = 111] = "DIVIDE", t[t.F1 = 112] = "F1", 
            t[t.F2 = 113] = "F2", t[t.F3 = 114] = "F3", t[t.F4 = 115] = "F4", t[t.F5 = 116] = "F5", 
            t[t.F6 = 117] = "F6", t[t.F7 = 118] = "F7", t[t.F8 = 119] = "F8", t[t.F9 = 120] = "F9", 
            t[t.F10 = 121] = "F10", t[t.F11 = 122] = "F11", t[t.F12 = 123] = "F12", t[t.F13 = 124] = "F13", 
            t[t.F14 = 125] = "F14", t[t.F15 = 126] = "F15", t[t.F16 = 127] = "F16", t[t.F17 = 128] = "F17", 
            t[t.F18 = 129] = "F18", t[t.F19 = 130] = "F19", t[t.F20 = 131] = "F20", t[t.F21 = 132] = "F21", 
            t[t.F22 = 133] = "F22", t[t.F23 = 134] = "F23", t[t.F24 = 135] = "F24", t[t.NUM_LOCK = 144] = "NUM_LOCK", 
            t[t.SCROLL_LOCK = 145] = "SCROLL_LOCK", t[t.COMMA = 188] = "COMMA", t[t.PERIOD = 190] = "PERIOD", 
            t[t.SLASH = 191] = "SLASH", t[t.BACK_QUOTE = 192] = "BACK_QUOTE", t[t.OPEN_BRACKET = 219] = "OPEN_BRACKET", 
            t[t.BACK_SLASH = 220] = "BACK_SLASH", t[t.CLOSE_BRACKET = 221] = "CLOSE_BRACKET", 
            t[t.QUOTE = 222] = "QUOTE", t[t.META = 224] = "META";
        }(o || (o = {}));
    }, function(t, r, e) {
        "use strict";
        function n(t, r) {
            function e(r) {
                l.pressed[r.button] = r, r.button === o.LEFT && (f = r.clientX, M = r.clientY, d = !0), 
                t(l);
            }
            function n(r) {
                delete l.pressed[r.button], delete l.drag.event, l.drag.x = 0, l.drag.y = 0, d = !1, 
                t(l);
            }
            function a(r) {
                d && (l.drag.event = r, l.drag.x = f - r.clientX, l.drag.y = M - r.clientY, t(l));
            }
            function u(t) {
                t.preventDefault();
            }
            void 0 === r && (r = {});
            var i = r.element, c = void 0 === i ? document : i, s = r.enableRightButton, l = {
                pressed: {},
                drag: {
                    x: 0,
                    y: 0
                }
            }, f = 0, M = 0, d = !1;
            return c.addEventListener("mousedown", e), document.addEventListener("mouseup", n), 
            document.addEventListener("mousemove", a), s && c.addEventListener("contextmenu", u), 
            t(l), function() {
                c.removeEventListener("mousedown", e), document.removeEventListener("mousemove", a), 
                document.removeEventListener("mouseup", n), s && c.removeEventListener("contextmenu", u);
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
            void 0 === t && (t = n);
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
        }), r.animateWithTPF = n, r.animate = a, r.createAnimator = o;
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
            return t[Object(s.randInt)(t.length)];
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
        function u(t, r, e) {
            for (var n = Math.min(t.length, r.length), a = [], o = 0; o < n; o++) a.push(e(t[o], r[o]));
            return a;
        }
        function i(t) {
            for (var r = [], e = 0, n = t; e < n.length; e++) for (var a = n[e], o = 0, u = a; o < u.length; o++) {
                var i = u[o];
                r.push(i);
            }
            return r;
        }
        function c(t, r) {
            return i(t.map(r));
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.pickRandom = n, r.doTimes = a, r.yieldTimes = o, r.zip = u, r.flatten = i, 
        r.mapcat = c;
        var s = e(2);
    }, function(t, r, e) {
        "use strict";
        function n(t) {
            return Math.floor(127 * (t + 1));
        }
        function a(t, r, e) {
            for (var a = t.canvas.width, u = t.canvas.height, i = Object(o.tileNoise)(a, u, r, e), c = Object(o.tileNoise)(a, u, 2.1 * r, 2.1 * e), s = Object(o.tileNoise)(a, u, 4.2 * r, 4.2 * e), l = Object(o.tileNoise)(a, u, 8.3 * r, 8.3 * e), f = t.getImageData(0, 0, a, u), M = 0; M < i.length - 1; M++) {
                var d = 4 * M;
                f.data[d] = n(i[M]), f.data[d + 1] = n(c[M]), f.data[d + 2] = n(s[M]), f.data[d + 3] = n(l[M]);
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
            function c(t, r) {
                for (var a = 0; a < t.width; a++) for (var o = 0; a < t.height; o++) n(t, [ a, o ], Object(i.mixColors)(e(t, [ a, o ]), r));
            }
            function s(t, r, a) {
                for (var o = a[0], u = a[1], i = r.width - 1, c = r.height - 1, s = 0; s < c; s++) for (var l = 0; l < i; l++) n(t, [ o + l, u + s ], e(r, [ l, s ]));
            }
            function l(t, r, a) {
                for (var o = a[0], u = a[1], c = r.width - 1, s = r.height - 1, l = 0; l < s; l++) for (var f = 0; f < c; f++) n(t, [ o + f, u + l ], Object(i.mixColors)(e(t, [ o + f, u + l ]), e(r, [ f, l ])));
            }
            return t = t || a, {
                getPixelIndex: r,
                getColorAt: e,
                setColorAt: n,
                increaseAllBy: o,
                decreaseAllBy: u,
                mixinColor: c,
                replaceWithImageDataAt: s,
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
        var i = e(14);
    } ]);
});