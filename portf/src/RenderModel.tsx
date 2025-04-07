import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const loader = new GLTFLoader();

const RenderModel = ({modelPaths, width=window.innerWidth, height=window.innerHeight, scale=1, orbit=true}) => {
  const mountRef = useRef(null);
  const models: any = useRef([]); // Store loaded models
  const scrollOffset = useRef(0);

  const offsetPositions = [
    {
      x: -3,
      y: 1,
      z: 0,
      scale: 1.2
    },
    {
      x: 3,
      y: 1,
      z: 0,
      scale: .7
    },
    {
      x: -3.8,
      y: -1,
      z: 0,
      scale: 1.2
    },
    {
      x: 2.5,
      y: -1,
      z: 0,
      scale: 2.4
    }
  ]

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

    setLighting();
    let i = 0
    
    modelPaths.forEach(modelPath => {
      loader.load(modelPath, function (gltf) {
        const model = gltf.scene
        models.current.push(model);
        scene.add(model);
  
        setPivot(model);
        
        if(orbit){
          model.scale.set(2, 2, 2);
          model.position.set(0, -10, -5);
        }
        else{
          const {x, y, z, scale} = offsetPositions[i]
          model.scale.set(scale, scale, scale);
          model.position.set(x, y, z);
        }
        
        camera.position.z = 3.5;
        i++
      }, undefined, function (error) {
        console.error(error);
      });
    })
    console.log(models.current.length)
    renderer.setAnimationLoop( animate );
    
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
      pivot.add(model); // Will rotate the model around the pivot
    }

    let time = 0; // Define a time variable outside of the animate function

    function animate() {
      if (!orbit) {
        models.current.forEach((model, index) => {
          const initialPosition = offsetPositions[index]
          time = animateIconModels(time, model, initialPosition, scrollOffset);
        });
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


  function animateIconModels(time: number, model: any, initialPosition: any, scrollOffset: React.MutableRefObject<number>) {
    time += 0.01 / 9; // Increment time for a continuous loop
    const amplitude = 0.45; // Amplitude in radians (~2.9°), adjust as needed
    // Oscillate rotation:
    // rotation.x will make the model nod up and down,
    // rotation.y will gently tilt it left and right.
    model.rotation.x = amplitude * Math.sin(time);
    model.rotation.y = amplitude * Math.cos(time);
  
    // Also update position based on scroll offset.
    // Here we move the model to the right (increasing x)
    // and downward (decreasing y) as the page scrolls.
    const scrollFactorX = 0.001; // adjust sensitivity as needed
    const scrollFactorY = 0.002
    model.position.x = initialPosition.x + scrollOffset.current * scrollFactorX;
    model.position.y = initialPosition.y - scrollOffset.current * scrollFactorY;
    return time
  }

  return <div ref={mountRef} />;    
};
  
export default RenderModel;






