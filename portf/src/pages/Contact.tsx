import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm.tsx";
import { GitHubIcon, LinkedInIcon } from "../IconInstances.tsx"; // Import reusable Icon instances
import RenderModel from "../RenderModel.tsx"; 
const Contact = () => {
    return (
      <div className="contact-container">
        <RenderModel modelPath="/linkedin_3d.glb" width={window.innerWidth} height={window.innerHeight} xOffset={-.4} yOffset={0.5} orbit={false} />
        <div className="h1-contact">Contact Me</div>
        
        <ContactForm name="LinkedIn" icon={LinkedInIcon} />
      </div>
    );
};

export default Contact;