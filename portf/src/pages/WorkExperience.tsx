import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import RenderModel from "../RenderModel.tsx";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { title } from "process";
import Card from "../Card.tsx";
const loader = new GLTFLoader();

const WorkExperience = () => {
  return (
    <div className='Cards'>
          
          <Card
            title='Software Development'
            imgUrl={'/roman_column.glb'}
            body='Work that shows off the talent of my programming skills containing applications, scripts and more.'
          />

    </div>
  )   
};
  
export default WorkExperience;