import React, { useState } from 'react'
import './Skills.css'
import {Skillsdata} from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill,setselectedSkill] = useState(Skillsdata[0]);

  const handleselectSkill = (data) => {
    selectedSkill(data);}
 
  return (
    <section className='skils-container'>
        <h5>Technical proficiency</h5>


        <div className='skills-content'></div>
          <div className='skills'>
            {Skillsdata?.map((item)=> (

              <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={()=>{
                handleselectSkill(item);
              }}
              />
            ))}

            


          </div>


          <div className='skills-info'>
            <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.Skills}
            />

          </div>
    </section>
    );
};

export default Skills;
