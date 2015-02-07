goog.provide 'ts.utils.graphics.PixelContext'
goog.require 'ts.utils.graphics'
goog.require 'goog.object'



class ts.utils.graphics.PixelContext

  constructor: (@imageData) ->
    @data = @imageData.data
    @width = @imageData.width
    @height = @imageData.height


  adjustPos: (pos) -> pos


  getPixelIndex: (pos) ->
    [x,y] = @adjustPos pos
    (y * @height + x) * 4


  getColorAt: (pos) ->
    i = @getPixelIndex pos
    [@data[i], @data[i+1], @data[i+2], @data[i+3]]


  setColorAt: (pos, color) ->
    i = @getPixelIndex pos
    @data[i] = color[0]
    @data[i+1] = color[1]
    @data[i+2] = color[2]
    @data[i+3] = color[3]


  increaseAllBy: ([r, g, b, a]) ->
    d = @data
    for i in [0..d.length-1] by 4
      d[i]   += r if d[i]   + r < 256
      d[i+1] += g if d[i+1] + g < 256
      d[i+2] += b if d[i+2] + b < 256
      d[i+3] += a if d[i+3] + a < 256


  decreaseAllBy: ([r, g, b, a])->
    d = @data()
    for i in [0..d.length-1] by 4
      d[i]   -= r if r <= d[i]
      d[i+1] -= g if g <= d[i+1]
      d[i+2] -= b if b <= d[i+2]
      d[i+3] -= a if a <= d[i+3]


  replaceWithImageDataAt: (pixelCtx, [x, y]) ->
    w = pixelCtx.width - 1
    h = pixelCtx.height - 1
    for i in [0..w]
      for j in [0..h]
        @setColorAt [x+i, y+j], pixelCtx.getColorAt [i, j]


  drawImageAt: (pixelCtx, [x, y]) ->
    w = pixelCtx.width() - 1
    h = pixelCtx.height() - 1
    for i in [0..w]
      for j in [0..h]
        @setColorAt [x+i, y+j],
          ts.utils.graphics.mixColors @getColorAt([x+i, y+j]), pixelCtx.getColorAt [i, j]


  mixinColor: (color) ->
    w = @imageData.width - 1
    h = @imageData.height - 1
    for x in [0..w]
      for y in [0..h]
        @setColorAt [x, y],
          ts.utils.graphics.mixColors @getColorAt([x, y]), color



class ts.utils.graphics.ClosedPixelContext extends ts.utils.graphics.PixelContext

  adjustPos: ([x, y]) ->
    w = @width
    h = @height
    x = 0 if x < 0
    y = 0 if y < 0
    x = w if x >= w
    y = h if y >= h
    [x, y]



class ts.utils.graphics.RepeatedPixelContext extends ts.utils.graphics.PixelContext

  adjustPos: ([x, y]) ->
    w = @width
    h = @height
    x -= w if x >= w
    y -= h if y >= h
    x += w if x < 0
    y += h if y < 0
    [x, y]



ts.utils.graphics.createCtxFromImg = (img, ContextClass) ->
  c = document.createElement "canvas"
  c.width = img.width
  c.height = img.height
  ctx = c.getContext "2d"
  ctx.drawImage img, 0, 0, img.width, img.height
  imgData = ctx.getImageData 0, 0, img.width, img.height

  new ContextClass imgData
