var consts = require('./constants'),
    lib = require('./asset-lib');


function constructor(canvas) {

    var ctx = {
        settings: {},
        shaders: {},
        geometries: {},
        layers: {},
        objects: {},

        source: {},
        target: {}
    };


    if (canvas == null) {
        canvas = document.createElement("canvas");
    }

    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        throw Error("WebGL-Context could not be initialized!");
    }

    ctx.gl = gl;
    ctx.canvas = canvas;

    updateGeometry(ctx, '_renderQuad', lib.geometries._renderQuad);
    updateShader(ctx, '_renderResult', lib.shaders._renderResult);
    updateObject(ctx, '_result', lib.objects._resultObject);

    return ctx;
}


function init (ctx, data) {
    initSettings(ctx, data.settings);
    initShaders(ctx, data.shaders);
    initGeometries(ctx, data.geometries);
    initLayers(ctx, data.layers);
    initObjects(ctx, data.objects);
    updateSize(ctx);
    return ctx;
}


function initShaders (ctx, data) {
    if (data) {
        for (let [k, v] of data) {
            updateShader(ctx, k, v);
        }
    }
}


function initLayers (data) {
    if (data) {
        for (let [k, v] of data) {
            updateLayer(ctx, k, v);
        }
    }
}


function initGeometries (data) {
    if (data) {
        for (let [k, v] of data) {
            updateGeometry(ctx, k, v);
        }
    }
}


function initObjects (data) {
    if (data) {
        for (let [k, v] of data) {
            updateObject(ctx, k, v);
        }
    }
}


function updateObject (id, object) {
    ctx.objects[id] = object;
}


function initSettings (data) {
    data = data || {};
    ctx.settings.width = data.width || ctx.canvas.width;
    ctx.settings.height = data.height || ctx.canvas.height;
    ctx.settings.clearColor = data.clearColor || [0.0, 0.0, 0.0, 1.0];
    ctx.settings.minFilter = data.minFilter || 'LINEAR';
    ctx.settings.wrap = data.wrap || 'CLAMP_TO_EDGE';

    ctx.settings.clearBits = makeClear(
        ctx.gl, data.clearBuffers || ['DEPTH', 'COLOR']
    );
}


function updateShader (name, data) {
    var attribs, type, uniforms,

        shader = ctx.shaders[name] = ctx.shaders[name] || {},
        newProgram = shader.program == null,
        gl = ctx.gl,
        fragSource = "precision mediump float;\n" + data.frag;

    if (newProgram) {
        shader.program = gl.createProgram();
    }
    if (shader.vert == null) {
        shader.vert = gl.createShader(gl.VERTEX_SHADER);
    }
    if (shader.frag == null) {
        shader.frag = gl.createShader(gl.FRAGMENT_SHADER);
    }

    gl.shaderSource(shader.vert, data.vert);
    gl.shaderSource(shader.frag, fragSource);
    gl.compileShader(shader.vert);
    gl.compileShader(shader.frag);

    if (!gl.getShaderParameter(shader.vert, gl.COMPILE_STATUS)) {
        console.error("Error Compiling Vertex Shader!\n",
                      gl.getShaderInfoLog(shader.vert), data.vert);
    }
    if (!gl.getShaderParameter(shader.frag, gl.COMPILE_STATUS)) {
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
        attribs[name] = {
            index: gl.getAttribLocation(shader.program, name),
            type: consts.attribType[type],
            itemSize: consts.attribItemSize[type]
        };
    }

    uniforms = shader.uniforms = {};
    for (name in data.uniforms) {
        uniforms[name] = {
            index: gl.getUniformLocation(shader.program, name),
            type: data.uniforms[name]
        };
    }
}


function updateGeometry (name, data) {
    var attribs, attribData, geometry, buffer,
        gl = ctx.gl;

    geometry = ctx.geometries[name] = ctx.geometries[name] || {};
    geometry.drawType = gl[data.drawType];
    geometry.itemCount = data.itemCount;
    attribs = geometry.attribs = geometry.attribs || {};

    for (name in data.attribs) {
        attribData = data.attribs[name];
        attribs[name] = attribs[name] || gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, attribs[name]);
        gl.bufferData(gl.ARRAY_BUFFER,
                      getBufferData(attribData),
                      gl[(attribData.storeType || 'STATIC') + '_DRAW']);
    }

    if (data.elements) {
        geometry.elements = geometry.elements || {};
        geometry.elements.buffer = geometry.elements.buffer || gl.createBuffer();

        buffer = getBufferData(data.elements);
        geometry.elements.glType = typedArrayToGLType(buffer, gl);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.elements.buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
                      buffer,
                      gl[(data.elements.storeType || 'STATIC') + '_DRAW']);

    } else if (geometry.elements) {
        delete geometry.elements;
    }
}


function updateLayer (ctx, name, data) {
    var layer = ctx.layers[name] = ctx.layers[name] || {};

    layer.type = data.type;
    layer.noClear = data.noClear;
    layer.clearColor = data.clearColor || ctx.settings.clearColor;

    if (data.buffered) {
        layer.width = data.width || ctx.settings.width;
        layer.height = data.height || ctx.settings.height;
        updateRenderTarget(ctx.gl, layer, data);
    }

    switch (data.type) {
        case consts.LayerType.STATIC:
            updateStaticLayer(layer, data);
            break;
        case consts.LayerType.RENDER:
            layer.objects = data.objects;
            break;
        case consts.LayerType.EFFECT:
            layer.object = data;
            layer.object.geometry = '_renderQuad';
            break;
    }
}


function updatStaticLayer (layer, data) {
    var gl = ctx.gl,
        texture = layer.texture = layer.texture || gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture);

    setTextureParams(ctx.gl, data);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data.asset);
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.bindTexture(gl.TEXTURE_2D, null);
}


function updateSize () {
    ctx.canvas.width = ctx.settings.width;
    ctx.canvas.height = ctx.settings.height;
    updateRenderTarget(ctx.gl, ctx.source, ctx.settings);
    updateRenderTarget(ctx.gl, ctx.target, ctx.settings);
}


function renderLayers (layerIds) {
    var layer, i, len, directRender, renderToTarget, objectIdx, tmp,
        gl = ctx.gl;

    for (i = 0, len = layerIds.length; i < len; i++) {
        layer = ctx.layers[layerIds[i]];
        directRender = i == len - 1 && layer.frameBuffer == null,
        renderToTarget = !directRender && layer.frameBuffer == null;

        // set rendertarget

        if (directRender) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, ctx.settings.width, ctx.settings.height);

        } else if (renderToTarget) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, ctx.target.frameBuffer);
            gl.viewport(0, 0, ctx.settings.width, ctx.settings.height);

        // render to layers own frameBuffer
        } else {
            gl.bindFramebuffer(gl.FRAMEBUFFER, layer.frameBuffer);
            gl.viewport(0, 0, layer.width, layer.height);
        }

        // render
        if (!layer.noClear) {
            gl.clearColor.apply(gl, ctx.settings.clearColor);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }

        if (layer.type === consts.LayerType.RENDER) {
            for (objectIdx in layer.objects) {
                ctx.renderObject(ctx.objects[layer.objects[objectIdx]]);
            }

        } else if (layer.type === consts.LayerType.EFFECT) {
            ctx.renderObject(layer.object);
        }

        // swap own renderTargets if necessary

        if (renderToTarget) {
            tmp = ctx.source;
            ctx.source = ctx.target;
            ctx.target = tmp;
        }
    }

    if (!directRender) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, ctx.settings.width, ctx.settings.height);
        renderObject(ctx.objects['_result']);
    }
}


function renderObject (object) {
    var texture, attrib, buffIndex, uniform, index, value, name,
        gl = ctx.gl,
        textureCount = 0,
        shader = ctx.shaders[object.shader],
        geometry = ctx.geometries[object.geometry];

    gl.useProgram(shader.program);

    for (name in shader.attribs) {
        attrib = shader.attribs[name];
        buffIndex = geometry.attribs[name];
        gl.bindBuffer(gl.ARRAY_BUFFER, buffIndex);
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
                    ctx.source.texture :
                    ctx.layers[value].texture;
                gl.activeTexture(gl['TEXTURE' + textureCount]);
                gl.bindTexture(gl.TEXTURE_2D, texture);
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
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.elements.buffer);
        gl.drawElements(geometry.drawType, geometry.itemCount, geometry.elements.glType, 0);

    } else {
        gl.drawArrays(geometry.drawType, 0, geometry.itemCount);
    }

}


// ===== helper function =====

function makeClear (gl, clearArray) {
    var f = function(res, item) {
        return res | gl[item + '_BUFFER_BIT'];
    };
    return clearArray.reduce(f, 0);
}


function setTextureParams (gl, data) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!data.flipY);

    if (data.wrap) {
        data.wrapS = data.wrapT = data.wrap;
    }

    if (data.wrapS) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[data.wrapS]);
    }
    if (data.wrapT) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[data.wrapT]);
    }

    if (data.magFilter) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[data.magFilter]);
    }
    if (data.minFilter) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[data.minFilter]);
    }
}


function updateRenderTarget (gl, target, data) {

    target.frameBuffer = target.frameBuffer || gl.createFramebuffer();
    target.texture = target.texture || gl.createTexture();
    target.depthBuffer = target.depthBuffer || gl.createRenderbuffer();

    gl.bindTexture(gl.TEXTURE_2D, target.texture);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, data.width, data.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    setTextureParams(gl, data);

    gl.bindRenderbuffer(gl.RENDERBUFFER, target.depthBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, data.width, data.height);

    gl.bindFramebuffer(gl.FRAMEBUFFER, target.frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, target.texture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, target.depthBuffer);

    var e = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (e != gl.FRAMEBUFFER_COMPLETE) {
        console.error('framebuffer error', e, data);
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
}


function getBufferData (data) {
    if (data.buffer) {
        return data.buffer;
    } else {
        return new window[data.type](data.array);
    }
}


function typedArrayToGLType (array, gl) {
    if (array instanceof Uint8Array) {
        return gl.UNSIGNED_BYTE;
    }
    if (array instanceof Uint16Array) {
        return gl.UNSIGNED_SHORT;
    }
    if (array instanceof Uint32Array) {
        return gl.UNSIGNED_INT;
    }

    throw new TypeError('invalid array type');
}


