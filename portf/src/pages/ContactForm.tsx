import React from 'react';
import Icon from '../Icon.tsx'
import './Contact.css';
const ContactForm: React.FC = ({name, icon}:{name: string, icon: React.FC}) => {
    return (
        <div className='contact-form'>
            <div className='contact-name'>
                <div className='h2-contact'>{name}</div>
            </div>
            {icon}
        </div>
    );
};

export default ContactForm;