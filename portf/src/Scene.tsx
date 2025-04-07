import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const loader = new GLTFLoader();

const Scene = ({modelPaths, width=window.innerWidth, height=window.innerHeight}) => {
  const mountRef = useRef(null);
  const model: any = useRef(null); // Store loaded models
  const scrollOffset = useRef(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(width, height);
    renderer.setClearColor(0x366B5B, 1); // Set background color to dark grey
    
    mountRef.current.appendChild(renderer.domElement);
    if(orbit) {
      setOrbit(camera, renderer);
    }
    else{
      window.addEventListener("scroll", handleScroll);
    }

    loader.load(modelPath, function (gltf) {
      setLighting();
      model.current = gltf.scene; 
      scene.add(model.current);

      setPivot(model);
      renderer.setAnimationLoop( animate );

      model.current.scale.set(scale, scale, scale);
      model.current.position.set(xOffset, yOffset, zOffset);
      camera.position.z = 3.5;
    }, undefined, function (error) {
      console.error(error);
    });
    
    function setLighting(){
      const light = new THREE.AmbientLight( 0x404040, 30 ); // soft white light
      // White directional light at half intensity shining from the top.
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
      directionalLight.position.set(0, 5, 5);
      
      scene.add( directionalLight );
      scene.add( light );
    }
    function setPivot(model: any) {
      const pivot = new THREE.Object3D(); // Create a pivot point at 0,0,0
      scene.add(pivot);
      pivot.add(model.current); // Will rotate the model around the pivot
    }

    let time = 0; // Define a time variable outside of the animate function

    function animate() {
      if (!orbit) {
        time = animateIconModels(time, model, xOffset, scrollOffset, yOffset);
      }
      renderer.render(scene, camera);
    }
    function handleScroll() {
      scrollOffset.current = window.scrollY;
    }

    function setOrbit(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update(); // Required for damping
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.zoomSpeed = 1.2;
    }
    
    return () => {
      if( mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={mountRef} />;    
};
  
export default Scene;




function animateIconModels(time: number, model: any, xOffset: number, scrollOffset: React.MutableRefObject<number>, yOffset: number) {
  time += 0.01; // Increment time for a continuous loop
  const amplitude = 0.45; // Amplitude in radians (~2.9°), adjust as needed
  // Oscillate rotation:
  // rotation.x will make the model nod up and down,
  // rotation.y will gently tilt it left and right.
  model.current.rotation.x = amplitude * Math.sin(time);
  model.current.rotation.y = amplitude * Math.cos(time);

  // Also update position based on scroll offset.
  // Here we move the model to the right (increasing x)
  // and downward (decreasing y) as the page scrolls.
  const scrollFactorX = 0.001; // adjust sensitivity as needed
  const scrollFactorY = 0.002
  model.current.position.x = xOffset + scrollOffset.current * scrollFactorX;
  model.current.position.y = yOffset - scrollOffset.current * scrollFactorY;
  return time
}

