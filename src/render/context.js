goog.provide('tslibs.render.Context');
goog.require('tslibs.render.constants');
goog.require('tslibs.render.assetLib');
goog.require('goog.array');
goog.require('goog.webgl');


/**
 * @constructor
 */
tslibs.render.Context = function(canvas) {
    var lib = tslibs.render.assetLib;

    this.settings = {};
    this.shaders = {};
    this.geometries = {};
    this.layers = {};
    this.objects = {};

    this.source = {};
    this.target = {};

    if (canvas == null) {
        canvas = document.createElement("canvas");
    }

    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        throw Error("WebGL-Context could not be initialized!");
    }

    this.gl = gl;
    this.canvas = canvas;

    this.updateGeometry('_renderQuad', lib.geometries.renderQuad);
    this.updateShader('_renderResult', lib.shaders.renderResult);
    this.updateObject('_result', lib.objects.resultObject);
};


goog.scope(function() {

    var Ctx = tslibs.render.Context,
        consts = tslibs.render.constants,
        glConsts = goog.webgl;


    Ctx.prototype.init = function(data) {
        this.initSettings(data.settings);
        this.initShaders(data.shaders);
        this.initGeometries(data.geometries);
        this.initLayers(data.layers);
        this.initObjects(data.objects);
        this.updateSize();
    };


    Ctx.prototype.initShaders = function(data) {
        if (data) {
            for (var shaderId in data) {
                this.updateShader(shaderId, data[shaderId]);
            }
        }
    };


    Ctx.prototype.initLayers = function(data) {
        if (data) {
            for (var layerId in data) {
                this.updateLayer(layerId, data[layerId]);
            }
        }
    };


    Ctx.prototype.initGeometries = function(data) {
        if (data) {
            for (var geometryId in data) {
                this.updateGeometry(geometryId, data[geometryId]);
            }
        }
    };


    Ctx.prototype.initObjects = function(data) {
        if (data) {
            for (var objectId in data) {
                this.updateObject(objectId, data[objectId]);
            }
        }
    };

    Ctx.prototype.updateObject = function(id, object) {
        this.objects[id] = object;
    };


    Ctx.prototype.initSettings = function(data) {
        data = data || {};
        this.settings.width = data.width || this.canvas.width;
        this.settings.height = data.height || this.canvas.height;
        this.settings.clearColor = data.clearColor || [0.0, 0.0, 0.0, 1.0];
        this.settings.minFilter = data.minFilter || 'LINEAR';
        this.settings.wrap = data.wrap || 'CLAMP_TO_EDGE';

        this.settings.clearBits = Ctx.makeClear(
            this.gl, data.clearBuffers || ['DEPTH', 'COLOR']
        );
    };


    Ctx.prototype.updateShader = function(name, data) {
        var attrib, attribs, type, uniforms, uniform,

            shader = this.shaders[name] = this.shaders[name] || {},
            newProgram = shader.program == null,
            gl = this.gl,
            fragSource = "precision mediump float;\n" + data.frag;

        if (newProgram) {
            shader.program = gl.createProgram();
        }
        if (shader.vert == null) {
            shader.vert = gl.createShader(glConsts.VERTEX_SHADER);
        }
        if (shader.frag == null) {
            shader.frag = gl.createShader(glConsts.FRAGMENT_SHADER);
        }

        gl.shaderSource(shader.vert, data.vert);
        gl.shaderSource(shader.frag, fragSource);
        gl.compileShader(shader.vert);
        gl.compileShader(shader.frag);

        if (!gl.getShaderParameter(shader.vert, glConsts.COMPILE_STATUS)) {
            console.error("Error Compiling Vertex Shader!\n",
                          gl.getShaderInfoLog(shader.vert), data.vert);
        }
        if (!gl.getShaderParameter(shader.frag, glConsts.COMPILE_STATUS)) {
            console.error("Error Compiling Fragment Shader!\n",
                          gl.getShaderInfoLog(shader.frag), data.frag);
        }

        if (newProgram) {
            gl.attachShader(shader.program, shader.vert);
            gl.attachShader(shader.program, shader.frag);
        }

        gl.linkProgram(shader.program);

        attribs = shader.attribs = {};
        for (name in data.attribs) {
            type = data.attribs[name];
            attrib = attribs[name] = {};
            attrib.index = gl.getAttribLocation(shader.program, name);
            attrib.type = consts.attribType[type];
            attrib.itemSize = consts.attribItemSize[type];
        }

        uniforms = shader.uniforms = {};
        for (name in data.uniforms) {
            uniform = uniforms[name] = {};
            uniform.index = gl.getUniformLocation(shader.program, name);
            uniform.type = data.uniforms[name];
        }
    };


    Ctx.prototype.updateGeometry = function(name, data) {
        var attribs, attribData, geometry, buffer,
            gl = this.gl;

        geometry = this.geometries[name] = this.geometries[name] || {};
        geometry.drawType = gl[data.drawType];
        geometry.itemCount = data.itemCount;
        attribs = geometry.attribs = geometry.attribs || {};

        for (name in data.attribs) {
            attribData = data.attribs[name];
            attribs[name] = attribs[name] || gl.createBuffer();

            gl.bindBuffer(glConsts.ARRAY_BUFFER, attribs[name]);
            gl.bufferData(glConsts.ARRAY_BUFFER,
                          Ctx.getBufferData(attribData),
                          gl[(attribData.storeType || 'STATIC') + '_DRAW']);
        }

        if (data.elements) {
            geometry.elements = geometry.elements || {};
            geometry.elements.buffer = geometry.elements.buffer || gl.createBuffer();

            buffer = Ctx.getBufferData(data.elements);
            geometry.elements.glType = Ctx.typedArrayToGLType(buffer);

            gl.bindBuffer(glConsts.ELEMENT_ARRAY_BUFFER, geometry.elements.buffer);
            gl.bufferData(glConsts.ELEMENT_ARRAY_BUFFER,
                          buffer,
                          gl[(data.elements.storeType || 'STATIC') + '_DRAW']);

        } else {
            if (geometry.elements) {
                delete geometry.elements;
            }
        }
    };


    Ctx.prototype.updateLayer = function(name, data) {
        var layer = this.layers[name] = this.layers[name] || {};

        layer.type = data.type;
        layer.noClear = data.noClear;
        layer.clearColor = data.clearColor || this.settings.clearColor;

        if (data.buffered) {
            layer.width = data.width || this.settings.width;
            layer.height = data.height || this.settings.height;
            Ctx.updateRenderTarget(this.gl, layer, data);
        }

        switch (data.type) {
            case consts.LayerType.STATIC:
                this.updateStaticLayer(layer, data);
                break;
            case consts.LayerType.RENDER:
                layer.objects = data.objects;
                break;
            case consts.LayerType.EFFECT:
                layer.object = data;
                layer.object.geometry = '_renderQuad';
        }
    };


    Ctx.prototype.updatStaticLayer = function(layer, data) {
        var gl = this.gl,
            texture = layer.texture = layer.texture || gl.createTexture();

        gl.bindTexture(glConsts.TEXTURE_2D, texture);

        Ctx.setTextureParams(this.gl, data);
        gl.texImage2D(glConsts.TEXTURE_2D, 0, glConsts.RGBA, glConsts.RGBA, glConsts.UNSIGNED_BYTE, data.asset);
        gl.generateMipmap(glConsts.TEXTURE_2D);

        gl.bindTexture(glConsts.TEXTURE_2D, null);
    };


    Ctx.prototype.updateSize = function() {
        this.canvas.width = this.settings.width;
        this.canvas.height = this.settings.height;
        Ctx.updateRenderTarget(this.gl, this.source, this.settings);
        Ctx.updateRenderTarget(this.gl, this.target, this.settings);
    };


    Ctx.prototype.renderLayers = function(layerIds) {
        var layer, i, len, directRender, renderToTarget, objectId, tmp,
            gl = this.gl;

        for (i = 0, len = layerIds.length; i < len; i++) {
            layer = this.layers[layerIds[i]];
            directRender = i == len - 1 && layer.frameBuffer == null,
            renderToTarget = !directRender && layer.frameBuffer == null;

            // set rendertarget

            if (directRender) {
                gl.bindFramebuffer(glConsts.FRAMEBUFFER, null);
                gl.viewport(0, 0, this.settings.width, this.settings.height);

            } else if (renderToTarget) {
                gl.bindFramebuffer(glConsts.FRAMEBUFFER, this.target.frameBuffer);
                gl.viewport(0, 0, this.settings.width, this.settings.height);

            // render to layers own frameBuffer
            } else {
                gl.bindFramebuffer(glConsts.FRAMEBUFFER, layer.frameBuffer);
                gl.viewport(0, 0, layer.width, layer.height);
            }

            // render
            if (!layer.noClear) {
                gl.clearColor.apply(gl, this.settings.clearColor);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }

            if (layer.type === consts.LayerType.RENDER) {
                for (objectId in layer.objects) {
                    this.renderObject(this.objects[layer.objects[objectId]]);
                }

            } else if (layer.type === consts.LayerType.EFFECT) {
                this.renderObject(layer.object);
            }

            // swap own renderTargets if necessary

            if (renderToTarget) {
                tmp = this.source;
                this.source = this.target;
                this.target = tmp;
            }
        }

        if (!directRender) {
            gl.bindFramebuffer(glConsts.FRAMEBUFFER, null);
            gl.viewport(0, 0, this.settings.width, this.settings.height);
            this.renderObject(this.objects['_result']);
        }
    };


    Ctx.prototype.renderObject = function(object) {
        var texture, attrib, buffIndex, uniform, index, value, name,
            gl = this.gl,
            textureCount = 0,
            shader = this.shaders[object.shader],
            geometry = this.geometries[object.geometry];

        gl.useProgram(shader.program);

        for (name in shader.attribs) {
            attrib = shader.attribs[name];
            buffIndex = geometry.attribs[name];
            gl.bindBuffer(glConsts.ARRAY_BUFFER, buffIndex);
            gl.enableVertexAttribArray(attrib.index);
            gl.vertexAttribPointer(attrib.index, attrib.itemSize, attrib.type, false, 0, 0);
        }

        for (name in shader.uniforms) {
            uniform = shader.uniforms[name];
            index = uniform.index;
            value = object.uniforms[name];

            switch (uniform.type) {

                case 't':
                    texture = (value === consts.SOURCE_LAYER) ?
                        this.source.texture :
                        this.layers[value].texture;
                    gl.activeTexture(gl['TEXTURE' + textureCount]);
                    gl.bindTexture(glConsts.TEXTURE_2D, texture);
                    gl.uniform1i(index, textureCount);
                    textureCount++;
                    break;

                case 'f 1':
                    gl.uniform1f(index, value);
                    break;

                case 'f 2':
                    gl.uniform2fv(index, value);
                    break;

                case 'f 3':
                    gl.uniform3fv(index, value);
                    break;

                case 'f 4':
                    gl.uniform4fv(index, value);
                    break;

                case 'm 2':
                    gl.uniformMatrix2fv(index, false, value);
                    break;

                case 'm 3':
                    gl.uniformMatrix3fv(index, false, value);
                    break;

                case 'm 4':
                    gl.uniformMatrix4fv(index, false, value);
                    break;

                case 'i 1':
                    gl.uniform1i(index, value);
                    break;

                case 'i 2':
                    gl.uniform2iv(index, value);
                    break;

                case 'i 3':
                    gl.uniform3iv(index, value);
                    break;

                case 'i 4':
                    gl.uniform4iv(index, value);
                    break;

                default:
                    console.error("Uniform type " + uniform.type + " unknown. uniform " + name + " not set!");
            }
        }

        if (geometry.elements) {
            gl.bindBuffer(glConsts.ELEMENT_ARRAY_BUFFER, geometry.elements.buffer);
            gl.drawElements(geometry.drawType, geometry.itemCount, geometry.elements.glType, 0);

        } else {
            gl.drawArrays(geometry.drawType, 0, geometry.itemCount);
        }

    };


    // ===== helper function =====

    Ctx.makeClear = function(gl, clearArray) {
        var f = function(res, item) {
            return res | gl[item + '_BUFFER_BIT'];
        };
        return clearArray.reduce(f, 0);
    };


    Ctx.setTextureParams = function(gl, data) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!data.flipY);

        if (data.wrap) {
            data.wrapS = data.wrapT = data.wrap;
        }

        if (data.wrapS) {
            gl.texParameteri(glConsts.TEXTURE_2D, glConsts.TEXTURE_WRAP_S, glConsts[data.wrapS]);
        }
        if (data.wrapT) {
            gl.texParameteri(glConsts.TEXTURE_2D, glConsts.TEXTURE_WRAP_T, glConsts[data.wrapT]);
        }

        if (data.magFilter) {
            gl.texParameteri(glConsts.TEXTURE_2D, glConsts.TEXTURE_MAG_FILTER, glConsts[data.magFilter]);
        }
        if (data.minFilter) {
            gl.texParameteri(glConsts.TEXTURE_2D, glConsts.TEXTURE_MIN_FILTER, glConsts[data.minFilter]);
        }
    };


    Ctx.updateRenderTarget = function(gl, target, data) {

        target.frameBuffer = target.frameBuffer || gl.createFramebuffer();
        target.texture = target.texture || gl.createTexture();
        target.depthBuffer = target.depthBuffer || gl.createRenderbuffer();

        gl.bindTexture(glConsts.TEXTURE_2D, target.texture);

        gl.texImage2D(glConsts.TEXTURE_2D, 0, glConsts.RGBA, data.width, data.height, 0, glConsts.RGBA, glConsts.UNSIGNED_BYTE, null);
        Ctx.setTextureParams(gl, data);

        gl.bindRenderbuffer(glConsts.RENDERBUFFER, target.depthBuffer);
        gl.renderbufferStorage(glConsts.RENDERBUFFER, glConsts.DEPTH_COMPONENT16, data.width, data.height);

        gl.bindFramebuffer(glConsts.FRAMEBUFFER, target.frameBuffer);
        gl.framebufferTexture2D(glConsts.FRAMEBUFFER, glConsts.COLOR_ATTACHMENT0, glConsts.TEXTURE_2D, target.texture, 0);
        gl.framebufferRenderbuffer(glConsts.FRAMEBUFFER, glConsts.DEPTH_ATTACHMENT, glConsts.RENDERBUFFER, target.depthBuffer);

        var e = gl.checkFramebufferStatus(glConsts.FRAMEBUFFER);
        if (e != glConsts.FRAMEBUFFER_COMPLETE) {
            console.error('framebuffer error', e, data);
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    };


    Ctx.getBufferData = function(data) {
        if (data.buffer) {
            return data.buffer;
        } else {
            return new window[data.type](data.array);
        }
    };


    Ctx.typedArrayToGLType = function(array) {
        if (array instanceof Uint8Array) {
            return glConsts.UNSIGNED_BYTE;
        }
        if (array instanceof Uint16Array) {
            return glConsts.UNSIGNED_SHORT;
        }
        if (array instanceof Uint32Array) {
            return glConsts.UNSIGNED_INT;
        }

        throw new TypeError('invalid array type');
    };

});

