goog.provide 'ts.galleryTest'
goog.require 'ts.utils.systems.EntitySystem'
goog.require 'ts.utils.systems.AssetSystem'
goog.require 'ts.utils.systems.AnimationSystem'
goog.require 'ts.utils.events.DragElement'
goog.require 'ts.utils.events.MouseButtonElement'
goog.require 'ts.utils.events.DirectionKeys'
goog.require 'ts.utils.math'


ts.galleryTest.assets =
  texts:
    'shader.vert': '/assets/shaders/basic.vert'
    'shader.frag': '/assets/shaders/basic.frag'


ts.galleryTest.values =

  'moveDir':
    forth: false
    back: false
    left: false
    right: false

  'moveSpeed':
    1

  'cameraDirection':
    [0, 0, 0]

  'mouseDrag':
    x: 0
    y: 0

  'lookSpeed':
    0.1

  'cameraMaxRotX':
    85

  'cameraRot':
    y: 10
    x: 10

  'cameraConfig':
    fov: 75
    near: 1
    far: 10000

  'cameraPosition':
    x: 0
    y: 0
    z: 500

  'qubeSize':
    [100, 100, 100]


ts.galleryTest.entities =

  'cameraDirection':
    reactions:
      'moveDir':
        require: 'cameraRotYMatrix'
        update: (dir, move, mat) ->
          # console.log 'calculating cameraDirection'
          es = mat.elements
          x = y = z = 0
          if move.forth
            x -= es[8]
            y -= es[9]
            z -= es[10]
            move.forth = false
          if move.back
            x += es[8]
            y += es[9]
            z += es[10]
            move.back = false
          if move.left
            x -= es[0]
            y -= es[1]
            z -= es[2]
            move.left = false
          if move.right
            x += es[0]
            y += es[1]
            z += es[2]
            move.right = false

          if x is y is z is 0
            dir[0] = dir[1] = dir[2] = 0
            false
          else
            [x, y, z]


  'cameraPosition':
    reactions:
      'cameraDirection moveSpeed':
        (pos, [x, y, z], speed) ->
          # console.log 'calculating cameraPosition'
          pos.x += x * speed
          pos.y += y * speed
          pos.z += z * speed
          return


  'canvasSize':
    init: ->
      [window.innerWidth, window.innerHeight]


  'cameraRot':
    reactions:
      'mouseDrag lookSpeed':
        (rot, drag, speed) ->
          # console.log 'calculating cameraRotation'
          rot.y += drag.x * speed
          rot.x += drag.y * speed
          return


  'cameraRotXMatrix':
    init: ->
      new THREE.Matrix4()

    reactions:
      'cameraRot cameraMaxRotX':
        (mat, rot, max) ->
          # console.log 'calculating cameraRotationXMatrix'
          if max > Math.abs rot.x
            rot = THREE.Math.degToRad rot.x
            mat.makeRotationFromEuler new THREE.Euler rot, 0, 0
            return


  'cameraRotYMatrix':
    init: ->
      new THREE.Matrix4()

    reactions:
      'cameraRot':
        (mat, rot) ->
          # console.log 'calculating cameraRotationYMatrix'
          rot = THREE.Math.degToRad rot.y
          mat.makeRotationFromEuler new THREE.Euler 0, rot, 0
          return


  'renderer':
    init:  ->
      r = new THREE.WebGLRenderer()
      document.body.appendChild r.domElement
      r

    reactions:
      'canvasSize':
        (r, size) ->
          r.setSize size...
          return


  'scene':
    init: ->
      new THREE.Scene()


  'camera':
    require: 'cameraConfig canvasSize'
    init: (conf, [w, h]) ->
      c = new THREE.PerspectiveCamera conf.fov
        , w / h
        , conf.near
        , conf.far
      c.matrixAutoUpdate = false
      c

    reactions:
      'cameraPosition cameraRotXMatrix cameraRotYMatrix':
        (cam, pos, matX, matY) ->
          # console.log 'calculating camera'
          cam.matrix.multiplyMatrices matY, matX
          cam.matrix.setPosition pos
          cam.matrixWorldNeedsUpdate = true
          return


  'geometry':
    require: 'qubeSize'
    init: (size) ->
      new THREE.BoxGeometry size...


  'material':
    init: ->
      new THREE.ShaderMaterial()

    reactions:
      'shader.vert shader.frag':
        (mat, vert, frag) ->
          mat.vertexShader = vert
          mat.fragmentShader = frag
          mat.needsUpdate = true
          return


  'qube':
    require: 'geometry material scene'
    init: (geo, mat, scene) ->
      m = new THREE.Mesh geo, mat
      scene.add m
      m



ts.galleryTest.actions =
  'render':
    require: 'renderer scene camera'
    update: (renderer, scene, cam) ->
      renderer.render scene, cam
      return




ts.galleryTest.start = ->

  g = ts.galleryTest
  {DragElement, MouseButtonElement, DirectionKeys} = ts.utils.events
  app = g.app = new ts.utils.systems.EntitySystem()
  assets = g.assetSys = new ts.utils.systems.AssetSystem app
  animate = g.animate = new ts.utils.systems.AnimationSystem()


  assets.listen 'complete', ->
    app.addValues g.values
    app.addEntities g.entities
    app.addActions g.actions

    drag = g.drag = new DragElement document
    press = g.press = new MouseButtonElement document, true
    key = g.key = new DirectionKeys true

    drag.listen 'change', ->
      app.resetEntity 'mouseDrag',
        x: drag.deltaX
        y: drag.deltaY

    press.listen 'change', ->
      app.updateEntity 'moveDir', (dir) ->
        dir.forth = press.rightBtn
        dir.back = press.middleBtn
        return

    key.listen 'change', ->
      app.updateEntity 'moveDir', (dir) ->
        dir.forth = key.forth
        dir.back = key.back
        dir.left = key.left
        dir.right = key.right
        return

    animate.addUpdate ->
      # console.log '==== tick ====='
      drag.sample()
      press.sample()
      key.sample()
      app.flush()
      app.callAction 'render'

    animate.start()

  assets.listen 'progress', ->
    console.log 'loading assets', this.completed, 'of', this.total

  assets.addAssets g.assets
  assets.load()

  return

