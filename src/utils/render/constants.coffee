goog.provide 'ts.utils.render.constants'
goog.require 'goog.webgl'


goog.scope ->

  consts = ts.utils.render.constants
  gl = goog.webgl


  consts.SOURCE_LAYER = 'source'


  consts.layerType =
    RENDER: 'render'
    EFFECT: 'effect'
    STATIC: 'static'


  consts.attribType =
    'f 1': gl.FLOAT
    'f 2': gl.FLOAT
    'f 3': gl.FLOAT
    'f 4': gl.FLOAT
    'i 1': gl.INT
    'i 2': gl.INT
    'i 3': gl.INT
    'i 4': gl.INT
    'b 1': gl.BYTE
    'b 2': gl.BYTE
    'b 3': gl.BYTE
    'b 4': gl.BYTE


  consts.attribItemSize =
    'f 1': 1
    'f 2': 2
    'f 3': 3
    'f 4': 4
    'i 1': 1
    'i 2': 2
    'i 3': 3
    'i 4': 4
    'b 1': 1
    'b 2': 2
    'b 3': 3
    'b 4': 4

