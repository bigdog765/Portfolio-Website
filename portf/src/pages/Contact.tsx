import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm.tsx";
import { GitHubIcon, LinkedInIcon } from "../IconInstances.tsx"; // Import reusable Icon instances

const Contact = () => {
    return (
      <div className="contact-container">
        <h1>Contact Me</h1>
        <ContactForm name="LinkedIn" icon={LinkedInIcon} />
      </div>
    );
};

export default Contact;