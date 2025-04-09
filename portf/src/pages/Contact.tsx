import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm.tsx";
import { GitHubIconLarge, LinkedInIconLarge, PhoneIcon } from "../IconInstances.tsx"; // Import reusable Icon instances
import RenderModel from "../RenderModel.tsx"; 
const Contact = () => {
    return (
      <div className="contact-container">
        <RenderModel modelPaths={["Gmail.glb","linkedin_3d.glb","telephone_receiver_3d_icon.glb","github_3d.glb"]} scale={1} width={window.innerWidth - 15} height={870} orbit={false} />
        <div className="h1-contact">Contact Me</div>
        
        <div className="contact-forms-parent">
          <ContactForm name="LinkedIn" icon={LinkedInIconLarge} color={"#1774B5"}/>
          <ContactForm name="GitHub" icon={GitHubIconLarge} color={"#2b2b2b"} textColor={"#f5f5f5"}/>
          <ContactForm name="Phone Number" text={"248-462-8423"} color={"#86d9b1"}/>
          <ContactForm name="Email" text={"aidy.vg@gmail.com"} color={"#3ab5a3"}/>
        </div>
      </div>
    );
};

export default Contact;