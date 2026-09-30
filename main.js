let scene, camera, renderer;
let cube, cylinder, cone;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  document.body.appendChild(renderer.domElement);


  // =========================
  // 立方体
  // =========================

  const cubeGeometry = new THREE.BoxGeometry(
    2,
    2,
    2
  );

  const cubeTexture = new THREE.TextureLoader().load(
    "textures/minecraft-box.png"
  );

  const cubeMaterial = new THREE.MeshBasicMaterial({
    map: cubeTexture
  });

  cube = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
  );

  cube.position.x = -4;

  scene.add(cube);


  // =========================
  // 円筒
  // =========================

  const cylinderGeometry = new THREE.CylinderGeometry(
    1,
    1,
    2,
    32
  );

  const cylinderMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });

  cylinder = new THREE.Mesh(
    cylinderGeometry,
    cylinderMaterial
  );

  cylinder.position.x = 0;

  scene.add(cylinder);


  // =========================
  // 角錐
  // =========================

  const coneGeometry = new THREE.ConeGeometry(
    1,
    2,
    4
  );

  const coneMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });

  cone = new THREE.Mesh(
    coneGeometry,
    coneMaterial
  );

  cone.position.x = 4;

  scene.add(cone);


  // カメラ
  camera.position.z = 10;
}


// =========================
// アニメーション
// =========================

function animate() {

  requestAnimationFrame(animate);

  // 立方体
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // 円筒
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  // 角錐
  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  renderer.render(
    scene,
    camera
  );
}


// =========================
// ウィンドウサイズ変更
// =========================

function onWindowResize() {

  camera.aspect =
    window.innerWidth /
    window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );
}

window.addEventListener(
  "resize",
  onWindowResize
);


// 実行
init();
animate();