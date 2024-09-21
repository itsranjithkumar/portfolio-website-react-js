// src/components/CertificatePage.jsx
import React from 'react';
import './Certificate.css'; // Use the same styling or add a new one for the detailed page

const CertificatePage = () => {
  return (
    <div className="certificate-page-container">
      <h1>Hackerrank Certificate</h1>
      <img 
        src="/download.png" 
        alt="Hackerrank Certificate" 
        className="detailed-certificate-image" 
      />
      <p>
        View this certificate on 
        <a href="https://www.hackerrank.com/certificates/edba42903dfe" target="_blank" rel="noopener noreferrer">
          Hackerrank
        </a>.
      </p>
    </div>
  );
};

export default CertificatePage;
