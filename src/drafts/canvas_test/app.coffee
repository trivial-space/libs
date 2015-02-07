goog.provide 'ts.canvasTest'
goog.require 'ts.utils.graphics.textures'


ts.canvasTest.start = ->

  ts.canvasTest.canvas =
    ts.utils.graphics.textures.createTileNoiseTexture(
      window.innerWidth,
      window.innerHeight,
      4,4
    )

  document.body.appendChild ts.canvasTest.canvas

