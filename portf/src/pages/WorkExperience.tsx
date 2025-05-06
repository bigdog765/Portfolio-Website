import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import RenderModel from "../RenderModel.tsx";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { title } from "process";
import ProjectForm from "./ProjectForm.js";
import "./WorkExperience.scss";
import img_versa from '../assets/versapng.webp'
const loader = new GLTFLoader();

const WorkExperience = () => {
  return (
    <div className="work-experience-parent">


      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="content-wrapper">
        <div className="work-experience-container">
          <div className="header-work">
            <div className="header-work-left">
              <div className="h1-work-experience">My Work at Versaware</div>
              <div className="h2-about-versa">Cook Smarter, Eat Healthier with VersaWare: VersaWare is your ultimate cooking and nutrition companion, combining the power of personalized AI with tailored nutrition to transform how you cook, eat, and live. Whether you're a seasoned chef or just starting your culinary journey, VersaWare empowers you with real-time guidance every step of the way.</div>
              <a href="https://www.versaware.io/" target="_blank" rel="noopener noreferrer" className="link-versa">https://versaware.io</a>
            </div>
            <div className="header-work-right">
              <img className="header-work-image" src={img_versa} alt="VersaWare Logo" />
            </div>
          </div>
          <ProjectForm title="Server Side Management" switchDirection={false} imgUrl="/cloud.png" biggerText={true} desc=
          "Built and maintained robust connections between the mobile app, embedded devices, and Google Cloud services to ensure smooth data flow. Developed server-side logic with Express.js to handle API requests and managed the NoSQL database schema for efficient data operations. Integrated advanced AI models such as RAG and vector-based search for improved backend intelligence and system performance."
          ></ProjectForm>
          <ProjectForm title="Reliable Nutrition and Diverse Recipes" switchDirection={true} imgUrl="/Board.png" biggerText={true} desc=
          "Cleaned and formatted USDA nutritional data using Python for seamless integration into the company’s proprietary database with PostgreSQL support. Engineered a cloud-based AI recipe generator using Docker, Kubernetes, and Flask, while rigorously testing with Pytest to ensure recipe accuracy and user satisfaction."
          ></ProjectForm>
          <ProjectForm title="CES 2025 Exhibitor Personnel" switchDirection={false} imgUrl="/Ces.jpg" biggerText={true} desc=
          "Represented the company at CES 2025, showcasing the Versa Board and its companion mobile app to a wide audience. Engaged with prospective customers and investors, explaining the smart cutting board’s features and the seamless app integration."
          ></ProjectForm>
          <ProjectForm title="Optimized Queries and Image Quality" switchDirection={true} imgUrl="/ingr.jpg" biggerText={true} desc=
          "Improved database efficiency by restructuring code to run parallel WHERE queries, achieving a significant 30x reduction in query response time. Created a quality assurance script for AI-generated images with Midjourney, using user feedback and smarter prompts to boost image relevance for more than half of a 13,000-image dataset."
          ></ProjectForm>
          <ProjectForm title="Demo's for Investors" switchDirection={false} imgUrl="/demo.png" biggerText={true} desc=
          "Led discussions with potential investors to present and demonstrate the Versa Board’s hands-free voice control features. Highlighted the product's innovative capabilities to secure interest and funding opportunities."
          ></ProjectForm>
          <ProjectForm title="Product Assembly and Manufacturing" switchDirection={true} imgUrl="/manuf.png" biggerText={true} desc=
          "Assembled 10 prototype units at the manufacturing site for delivery to a hospital for early testing and feedback. This hands-on process ensured quality control and readiness for medical evaluation."
          ></ProjectForm>
        </div>
      </div>
    </div>
  )
};
  
export default WorkExperience;