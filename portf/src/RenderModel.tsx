import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

const RenderModel = ({modelPath, width=window.innerWidth, height=window.innerHeight}) => {
  const mountRef = useRef(null);
  const model: any = useRef(null); // Store loaded models

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(width, height);
    renderer.setClearColor(0x2e2e2e, 1); // Set background color to dark grey
    
    mountRef.current.appendChild(renderer.domElement);

    loader.load(modelPath, function (gltf) {
      setLighting();
      model.current = gltf.scene; 
      scene.add(model.current);

      setPivot(model);
      renderer.setAnimationLoop( animate );

      model.current.scale.set(0.5, 0.5, 0.5);
      model.current.position.set(0, -2, 0);
      camera.position.z = 3.5;
    }, undefined, function (error) {
      console.error(error);
    });
    
    function setLighting(){
      const light = new THREE.AmbientLight( 0x404040, 50 ); // soft white light
      scene.add( light );
    }
    function setPivot(model: any) {
      const pivot = new THREE.Object3D(); // Create a pivot point at 0,0,0
      scene.add(pivot);
      pivot.add(model.current); // Will rotate the model around the pivot
    }

    function animate() {
      //model.current.rotation.x += 0.01;
      model.current.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    
    return () => {
      if( mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={mountRef} />;    
};
  
export default RenderModel;


