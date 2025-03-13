import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import { loadModel } from "../loader/3dLoader";

const WorkExperience = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop( animate );
    mountRef.current.appendChild(renderer.domElement);

    const model = loadModel('portf\public\roman_column.glb');
    scene.add(model);

    camera.position.z = 5;

    function animate() {
      model.rotation.x += 0.001;
      model.rotation.y += 0.001;
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