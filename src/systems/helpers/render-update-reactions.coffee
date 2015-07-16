renderer = require 'ts/render/context'


updateShader = (name) ->
  (scene, shader) ->
    renderer.updateShader scene, name, shader

updateLayer = (name) ->
  (scene, layer) ->
    renderer.updateLayer scene, name, layer

updateObject = (name) ->
  (scene, object) ->
    renderer.updateObject scene, name, object

updateGeometry = (name) ->
  (scene, geom) ->
    renderer.updateGeometry scene, name, geom



module.exports = {
  updateShader
  updateLayer
  updateObject
  updateGeometry
}
