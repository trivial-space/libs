goog.provide 'ts.test'
goog.require 'ts.utils.systems.EntitySystem'
goog.require 'ts.utils.systems.AnimationSystem'


ts.test.values =

  'cameraConfig':
    fov: 75
    near: 1
    far: 10000

  'cameraPosition':
    [0, 0, 1000]

  'rotationSpeed':
    [1.5, 1.7]

  'cubeRotation':
    [0, 0, 0]

  'cubeSize':
    [300, 100, 200]

  'materialParams':
    color: 0xff0000
    wireframe: true

  'tpf':
    0


ts.test.entities =

  'cubeRotation':
    reactions:
      'tpf':
        require: 'rotationSpeed'
        update: (rot, tpf, speed) ->
          rot[0] += speed[0] * tpf * 0.0001
          rot[1] += speed[1] * tpf * 0.0001
          return


  'renderer':
    init: ->
      r = new THREE.WebGLRenderer
        antialias: true
      document.body.appendChild r.domElement
      r.setSize window.innerWidth, window.innerHeight
      r


  'scene':
    init: ->
      new THREE.Scene()


  'camera':
    require: 'cameraConfig'
    init: (conf) ->
      new THREE.PerspectiveCamera conf.fov
        , window.innerWidth / window.innerHeight
        , conf.near
        , conf.far

    reactions:
      'cameraPosition': (cam, pos) ->
        cam.position.set pos...
        return


  'geometry':
    require: 'cubeSize'
    init: (size) ->
      new THREE.BoxGeometry size...


  'material':
    require: 'materialParams'
    init: (params) ->
      new THREE.MeshBasicMaterial params


  'cube':
    require: 'geometry material scene'
    init: (geo, mat, scene) ->
      m = new THREE.Mesh geo, mat
      scene.add m
      m

    reactions:
      'cubeRotation': (cube, rot) ->
        cube.rotation.set rot...
        return


ts.test.actions =
  'render':
    require: 'renderer scene camera'
    update: (renderer, scene, cam) ->
      renderer.render scene, cam
      return


ts.test.create = ->
  app = ts.test.app = new ts.utils.systems.EntitySystem()
  app.addValues ts.test.values
  app.addEntities ts.test.entities
  app.addActions ts.test.actions

  animate = ts.test.animate = new ts.utils.systems.AnimationSystem()
  animate.addUpdate (tpf) ->
    app.resetEntity 'tpf', tpf
    app.flush()
    app.callAction 'render'

  animate.start()

  return
