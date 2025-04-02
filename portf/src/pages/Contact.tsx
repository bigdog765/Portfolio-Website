import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm.tsx";
import { GitHubIconLarge, LinkedInIconLarge } from "../IconInstances.tsx"; // Import reusable Icon instances
import RenderModel from "../RenderModel.tsx"; 
const Contact = () => {
    return (
      <div className="contact-container">
        <RenderModel modelPath="/linkedin_3d.glb" width={window.innerWidth - 15} height={1180} xOffset={-3} yOffset={1} orbit={false} />
        <div className="h1-contact">Contact Me</div>
        
        <ContactForm name="LinkedIn" icon={LinkedInIconLarge} />
      </div>
    );
};

export default Contact;