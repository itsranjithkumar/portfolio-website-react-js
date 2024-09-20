import React from 'react';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="certificate-card">
      <img
        src={certificate.image}
        alt={certificate.title}
        className="certificate-image"
      />
      <div className="certificate-info">
        <h3 className="certificate-title">{certificate.title}</h3>
        <p className="certificate-date">{certificate.date}</p>
        <p className="certificate-issuer">{certificate.issuer}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
