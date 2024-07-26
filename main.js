import './style.css'

import * as THREE from 'three';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.SphereGeometry(100, 24,24);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
const torusKnot = new THREE.Mesh(geometry, material);

scene.add(torusKnot);

function addStar() {
  const geometry = new THREE.CircleGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(100).fill().forEach(addStar);

document.body.onscroll = () => {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -1;
}

function animate() {
  requestAnimationFrame(animate);

  torusKnot.rotation.y += 0.001;

  renderer.render(scene, camera);
}

animate();