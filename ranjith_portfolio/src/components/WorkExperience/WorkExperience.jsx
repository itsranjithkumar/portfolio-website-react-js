import React from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../utils/data'; // Ensure this path is correct

const WorkExperience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Work Experience</h2>
      <div className="experience-cards-container">
        {WORK_EXPERIENCE.map((item, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-card-title">{item.title}</h3>
            <p className="experience-card-date">{item.date}</p>
            <ul className="experience-card-responsibilities">
              {item.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
