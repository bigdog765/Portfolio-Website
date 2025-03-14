import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

const WorkExperience = () => {
  const mountRef = useRef(null);
  const model: any = useRef(null); // Store loaded models

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    mountRef.current.appendChild(renderer.domElement);

    loader.load('/roman_column.glb', function (gltf) {
      const pivot = new THREE.Object3D();
      scene.add(pivot);
      model.current = gltf.scene; 
      model.current.scale.set(0.5, 0.5, 0.5);
      const light = new THREE.AmbientLight( 0x404040 ); // soft white light
      scene.add( light );
      scene.add(model.current);

      model.current.position.set(0, -2, 0);
      pivot.add(model.current);
      renderer.setAnimationLoop( animate );
      camera.position.z = 5;
    }, undefined, function (error) {
      console.error(error);
    });
    

    function animate() {
      //model.current.rotation.x += 0.01;
      model.current.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;    
};
  
export default WorkExperience;