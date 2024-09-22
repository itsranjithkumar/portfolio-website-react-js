import React from 'react';
import './Certificate.css'; // Use the same styling or add a new one for the detailed page
import certificateImage from '/assets/download.png'; // Path to your first image
import pythonImage from '/assets/python.png'; // Path to your second image

const CertificatePage = () => {
  return (
    <div className="certificate-page-container">
      <h1>Hackerrank Certificates</h1>
      <h2>SQL - Basic</h2>
      <img 
        src={certificateImage} 
        alt="Hackerrank SQL Certificate" 
        className="detailed-certificate-image" 
      />
      <p>
        View this certificate on 
        <a href="https://www.hackerrank.com/certificates/edba42903dfe" target="_blank" rel="noopener noreferrer">
          Hackerrank
        </a>.
      </p>
      <h2>Python - Basic</h2>
      <img 
        src={pythonImage} 
        alt="Hackerrank Python Certificate" 
        className="detailed-certificate-image" 
      />
      <p>
        View this certificate on 
        <a href="https://www.hackerrank.com/certificates/python" target="_blank" rel="noopener noreferrer">
          Hackerrank
        </a>.
      </p>
    </div>
  );
};

export default CertificatePage;
