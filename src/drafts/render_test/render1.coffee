goog.provide 'ts.render1'
goog.require 'ts.utils.render.Context'
goog.require 'ts.utils.render.constants'
goog.require 'ts.utils.render.assetLib'


goog.scope ->

  lib = ts.utils.render.assetLib
  consts = ts.utils.render.constants

  ts.render1.scene =
    layers:
      'blue':
        type: consts.layerType.EFFECT
        shader: 'myShader'

      'darken':
        type: consts.layerType.EFFECT
        shader: 'darken'
        uniforms:
          'source': consts.SOURCE_LAYER

    shaders:
      'myShader':
        frag:
          """
            varying vec2 vUv;
            void main() {
                gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
            }
          """
        vert: lib.shaders.renderResult.vert
        attribs: lib.shaders.renderResult.attribs

      'darken':
        frag:
          """
            uniform sampler2D source;
            varying vec2 vUv;
            void main() {
                vec4 color = texture2D(source, vUv);
                gl_FragColor = vec4(color.rgb - 0.6, 1.0);
            }
          """
        vert: lib.shaders.renderResult.vert
        attribs: lib.shaders.renderResult.attribs
        uniforms:
          "source": 't'



ts.render1.start = ->
  ts.render1.ctx = ctx = new ts.utils.render.Context()
  document.body.appendChild ctx.canvas
  ctx.init ts.render1.scene
  ctx.renderLayers ['blue', 'darken']
  console.log ctx
