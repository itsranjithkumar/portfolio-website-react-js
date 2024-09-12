import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
  return (
    <div className='work-experience-card'>
      {/* Render the title */}
      <h5>{details.title}</h5>
      
      {/* Render the date */}
      <div className='work-duration'>{details.date}</div>

      {/* Render the responsibilities as a list */}
      <ul className='responsibilities-list'>
        {Array.isArray(details.responsibilities) && details.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
