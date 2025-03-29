import React from 'react';
import Icon from '../Icon.tsx'
import './Contact.css';
const ContactForm: React.FC = ({name, icon}:{name: string, icon: React.FC}) => {
    return (
        <div className='contact-form'>
            <div className='contact-name'>
                <h2>{name}</h2>
            </div>
            {icon}
        </div>
    );
};

export default ContactForm;