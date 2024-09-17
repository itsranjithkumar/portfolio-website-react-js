import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={iconUrl} alt="Contact icon" style={{ width: '50px', height: '50px' }} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfoCard;
