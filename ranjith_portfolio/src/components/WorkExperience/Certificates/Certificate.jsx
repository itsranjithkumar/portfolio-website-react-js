import React from 'react';
import './Certificate.css';
import { CERTIFICATES } from '../../../utils/data';
import CertificateCard from './CertificateCard';

const Certificate = () => {
  return (
    <section className="certificate-section">
      <h2 className="certificate-title">My Certifications</h2>
      <div className="certificate-grid">
        {CERTIFICATES.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </section>
  );
};

export default Certificate;
