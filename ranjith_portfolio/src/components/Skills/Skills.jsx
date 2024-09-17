import React, { useState } from 'react'
import { Skillsdata as SKILLS } from '../../utils/data'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'


const Skills = () => {
  // Manage the selected skill state
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  // Function to handle selecting a skill
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container'>
      {/* Ensure the heading is only rendered once */}
      <h5>Technical Proficiency</h5> 

      {/* Skills content section */}
      <div className="skills-content">
        {/* List of skills */}
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title} // Ensure unique key for each skill
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)} // Pass selected skill
            />
          ))}
        </div>

        {/* Info card for selected skill */}
        <div className="skills-info">
          <SkillsInfoCard 
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills