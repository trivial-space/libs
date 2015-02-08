goog.provide 'tslibs.graphics.textures'
goog.require 'tslibs.graphics'
goog.require 'tslibs.graphics.PixelContext'
goog.require 'tslibs.math.noise'


goog.scope ->

  noise = tslibs.math.noise
  {newCanvas} = tslibs.graphics


  tslibs.graphics.textures =


    to8Bit: (float) -> Math.floor (float + 1) * 127


    createTileNoiseTexture: (width, height, startX, startY) ->

      [canvas, ctx] = newCanvas width, height
      to8Bit = tslibs.graphics.textures.to8Bit

      noise1 = noise.tileNoise width, height, startX, startY
      noise2 = noise.tileNoise width, height, startX * 2.1, startY * 2.1
      noise3 = noise.tileNoise width, height, startX * 4.2, startY * 4.2
      noise4 = noise.tileNoise width, height, startX * 8.3, startY * 8.3

      pixeldata = ctx.getImageData 0, 0, width, height

      for i in [0..noise1.length-1]
        i4 = i * 4
        pixeldata.data[i4] = to8Bit noise1[i]
        pixeldata.data[i4 + 1] = to8Bit noise2[i]
        pixeldata.data[i4 + 2] = to8Bit noise3[i]
        pixeldata.data[i4 + 3] = to8Bit noise4[i]

      ctx.putImageData pixeldata, 0, 0
      console.log pixeldata
      canvas
