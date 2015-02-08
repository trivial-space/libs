
/* 
Copyright (c) 2013 Thomas Gorny
The MIT License (see MIT-LICENSE.txt)
 */
define(function() {
  var exports, glslTexture, renderTarget, texture;
  renderTarget = function(width, height) {
    return new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBFormat
    });
  };
  texture = function(image) {
    var tex;
    tex = new THREE.Texture(image);
    tex.needsUpdate = true;
    return tex;
  };
  glslTexture = function(width, height, fragmentShader) {
    var camera, material, mesh, scene, uniforms;
    camera = new THREE.Camera();
    camera.position.z = 1;
    scene = new THREE.Scene();
    uniforms = {
      time: {
        type: "f",
        value: 1.0
      },
      resolution: {
        type: "v2",
        value: new THREE.Vector2(width, height)
      }
    };
    material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: "void main() { gl_Position = vec4( position, 1.0 ); }",
      fragmentShader: fragmentShader
    });
    mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);
    return {
      camera: camera,
      scene: scene,
      material: material,
      target: renderTarget(width, height),
      render: function(renderer) {
        return renderer.render(this.scene, this.camera, this.target);
      }
    };
  };
  return exports = {
    renderTarget: renderTarget,
    texture: texture,
    glslTexture: glslTexture
  };
});
