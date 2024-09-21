import React from 'react';
import './Certificate.css'; // Ensure the path is correct
import certificateImage from '/assets/download.png'; // Path to your image

const Certificate = () => {
    return (
        <div className="certificate-container">
            <img 
                src={certificateImage} 
                alt="Certificate" 
                className="certificate-image" 
            />
            <h2 className="certificate-title">Certificate of Achievement</h2>
            <p className="certificate-description">
                Awarded for successfully completing the course.
            </p>
        </div>
    );
};

export default Certificate;
