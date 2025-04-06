import React from 'react';
import Icon from '../Icon.tsx';
import './Contact.css';

const ContactForm: React.FC<{ name: string; icon: any; text: string; color: string, textColor: string }> = ({ name, icon, text, color, textColor }) => {
    return (
        <div className="contact-form" style={{ backgroundColor: color }}>
            <div className="contact-name">
                <div className="h2-contact" style={{color: textColor}}>{name}</div>
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