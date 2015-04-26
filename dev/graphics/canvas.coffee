canvas = module.exports =


  newCanvas: (width, height) ->
    c = document.createElement "canvas"
    c.width = width
    c.height = height
    ctx = c.getContext "2d"
    [c, ctx]
