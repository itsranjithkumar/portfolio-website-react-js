import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
  // Check if details exist to prevent errors
  if (!details) {
    return null; // Avoid rendering if details are not passed
  }

  return (
    <div className='work-experience-card'>
      {/* Render the title */}
      <h5>{details.title || 'Title Not Available'}</h5>
      
      {/* Render the date */}
      <div className='work-duration'>{details.date || 'Date Not Available'}</div>

      {/* Render the responsibilities as a list */}
      <ul className='responsibilities-list'>
        {Array.isArray(details.responsibilities) && details.responsibilities.length > 0 ? (
          details.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No responsibilities listed</li>
        )}
      </ul>
    </div>
  );
};

export default ExperienceCard;
 

