import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm.tsx";
import { GitHubIconLarge, LinkedInIconLarge, PhoneIcon } from "../IconInstances.tsx"; // Import reusable Icon instances
import RenderModel from "../RenderModel.tsx"; 
const Contact = () => {
    return (
      <div className="contact-container">
        <RenderModel modelPath="/linkedin_3d.glb" width={window.innerWidth - 15} height={1180} xOffset={-3} yOffset={1} orbit={false} />
        <div className="h1-contact">Contact Me</div>
        
        <div className="contact-forms-parent">
          <ContactForm name="LinkedIn" icon={LinkedInIconLarge} color={"#1774B5"}/>
          <ContactForm name="Phone Number" text={"248-462-8423"} color={"#496DAB"}/>
        </div>
      </div>
    );
};

export default Contact;