import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from "three";
const loader = new GLTFLoader();

export default function loadModel(path: string) {
    fetch(path)
  .then(response => response.text())
  .then(htmlString => {
    console.log(htmlString); // Now you can inspect the HTML as a string
  })
  .catch(error => {
    console.error('Error fetching the HTML file:', error);
  });

    return new Promise((resolve, reject) => {
        loader.load(path, function (gltf) {
            resolve(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
            reject(error);
        });
    });
}