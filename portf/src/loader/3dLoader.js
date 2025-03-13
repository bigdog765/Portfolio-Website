import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

export default function loadModel(path) {
    loader.load( path, function ( gltf ) {
        return gltf.scene;
    }, undefined, function ( error ) {
        console.error( error );
    } );
}