### 
Copyright (c) 2013 Thomas Gorny
The MIT License (see MIT-LICENSE.txt)
###

define ->

  renderTarget = (width, height) ->
    new THREE.WebGLRenderTarget width, height,
      minFilter: THREE.LinearFilter
      magFilter: THREE.LinearFilter
      format: THREE.RGBFormat


  texture = (image) ->
    tex = new THREE.Texture image
    tex.needsUpdate = true
    tex


  glslTexture = (width, height, fragmentShader) ->
    camera = new THREE.Camera()
    camera.position.z = 1

    scene = new THREE.Scene()

    uniforms = 
      time:
        type: "f"
        value: 1.0
      resolution:
        type: "v2"
        value: new THREE.Vector2 width, height

    material = new THREE.ShaderMaterial
      uniforms: uniforms
      vertexShader: "void main() { gl_Position = vec4( position, 1.0 ); }"
      fragmentShader: fragmentShader

    mesh = new THREE.Mesh new THREE.PlaneGeometry( 2, 2 ), material
    scene.add mesh

    camera: camera
    scene: scene
    material: material
    target: renderTarget width, height
    render: (renderer) -> renderer.render @scene, @camera, @target


  exports = 
    renderTarget: renderTarget
    texture: texture
    glslTexture: glslTexture