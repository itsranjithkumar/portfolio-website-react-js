import React from 'react';
import PropTypes from 'prop-types'; // For prop type validation (optional)
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills = [] }) => {
  // Ensure skills is always an array
  const isSkillsArray = Array.isArray(skills);

  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {isSkillsArray && skills.length > 0 ? (
          skills.map((item, index) => (
            <React.Fragment key={`skill_${index}`}>
              <div className="skill-info">
                <p>{item.skill}</p>
                <p className="percentage">{item.percentage}</p>
              </div>
              <div className="skill-progress-">
                <div className="skill-progress" style={{ width: item.percentage }} />
              </div>
            </React.Fragment>
          ))
        ) : (
          <p>No skills available</p> // Optional: Display a message if no skills are provided
        )}
      </div>
    </div>
  );
};

// Optional: Add prop types for better validation and documentation
SkillsInfoCard.propTypes = {
  heading: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired, // You might want to use PropTypes.number if percentage is a number
    })
  )
};

export default SkillsInfoCard;
