import React from 'react';
import './Certificate.css'; // Ensure the path is correct
import certificateImage from '/assets/download.png'; // Path to your first image
import pythonImage from '/assets/python.png'; // Path to your second image

const Certificate = () => {
    return (
        <div className="certificate-section">
            <h1 className="certificate-heading">My Certificates</h1>
            <div className="certificate-row">
                <div className="certificate-container">
                    <a href="https://www.hackerrank.com/certificates/edba42903dfe" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={certificateImage} 
                            alt="Hackerrank Certificate" 
                            className="certificate-image" 
                        />
                    </a>
                    <p className="certificate-sql">SQL - Basic</p>
                </div>
                <div className="certificate-container">
                    <a href="https://www.hackerrank.com/certificates/18dd372cdc44" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={pythonImage} 
                            alt="Python Certificate" 
                            className="certificate-image" 
                        />
                    </a>
                    <p className="certificate-sql">Python - Basic</p>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
