import React from 'react';
import Icon from '../Icon.tsx';
import './Contact.css';

const ContactForm: React.FC<{ name: string; icon: any; text: string; color: string }> = ({ name, icon, text, color }) => {
    return (
        <div className="contact-form" style={{ backgroundColor: color }}>
            <div className="contact-name">
                <div className="h2-contact">{name}</div>
            </div>
            {icon ? (
                icon
            ) : (
                <div className="contact-form-text">
                    {text}
                </div>
            )}
        </div>
    );
};

export default ContactForm;