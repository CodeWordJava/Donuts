
import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
 // setting up

 const scene = new THREE.Scene();
// //this is the perspective camera it takes 3 arguements

const camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 0.1, 1000);

// //this is the renderer it tells three which element to manipulate
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  });

 renderer.setPixelRatio(window.devicePixelRatio);

 // //this make the render full screen
renderer.setSize(window.innerWidth, window.innerHeight);


camera.position.setZ(30);
camera.position.setX(-3);

//renderer.render(scene, camera);

const loader = new GLTFLoader();
const url = "./assets/dnutwithMat1.gltf"
loader.load(url,function(gltf){
  let dnut = gltf.scene
  scene.add (gltf.scene)

  function animate() {
    requestAnimationFrame(animate);
    dnut.rotation.x +=0.01;
    dnut.rotation.y +=0.005;
    dnut.rotation.z +=0.01;
   
  
    controls.update();
    renderer.render(scene, camera);
   }
   
   animate();
// });
//   const loader1 = new GLTFLoader();
// const url1 = "./assets/dnutwithMat1.gltf"
// loader1.load(url1,function(gltf){
//   let dnut1 = gltf.scene
//   scene.add (gltf.scene)
  
  // function animate() {
  //   requestAnimationFrame(animate);
 
  //   dnut1.rotation.x +=0.01;
  //   dnut1.rotation.y +=0.005;
  //   dnut1.rotation.z +=0.00;
  //   dnut1.position.x +=0.00;
  //   //dnut1.position.y +=0.001;
  //  dnut1.position.z +=0;
  
  //   controls.update();
  //   renderer.render(scene, camera);
  //  }
   
  //  animate();


// renderer.render(scene, camera)
});




const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set (20,20,20)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight,ambientLight)

const controls = new OrbitControls(camera, renderer.domElement);

