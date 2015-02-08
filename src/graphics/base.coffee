goog.provide 'tslibs.graphics'
goog.require 'tslibs.math'


goog.scope ->

  math = tslibs.math

  tslibs.graphics =

    BLACK: [0, 0, 0, 255]
    WHITE: [255, 255, 255, 255]


    mixColors: ([r1, g1, b1, a1], [r2, g2, b2, a2]) ->
      step = a2 / 255.0
      r = Math.floor math.lerp r1, r2, step
      g = Math.floor math.lerp g1, g2, step
      b = Math.floor math.lerp b1, b2, step
      [r, g, b, a1]


    grey: (scale, alpha) ->
      alpha ?= 255
      [scale, scale, scale, alpha]


    colorToCSS: ([r, g, b, a]) ->
      "rgba(#{r}, #{g}, #{b}, #{a / 255})"


    newCanvas: (width, height) ->
      c = document.createElement "canvas"
      c.width = width
      c.height = height
      ctx = c.getContext "2d"
      [c, ctx]

