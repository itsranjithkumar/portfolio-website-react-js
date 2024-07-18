import React from 'react'
import './WorkExperience.css'
import { WorkExperience } from '../../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'

const WorkExperience = () => {
  return (
    <section className='experience-container'>
        <h5>Work Experience</h5>

      <div className='experience-content'>

        {WorkExperience.map((item)=> (
            
            <ExperienceCard key={item.title} details={item}/>
        ))}
    </div>
    </section>
  );
};

export default WorkExperience;WorkExperience
