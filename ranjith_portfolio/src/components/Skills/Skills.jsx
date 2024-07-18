import React from 'react'
import './Skills.css'
import {Skills} from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill,setselectedSkill] = useState(Skills[0]);

  const handleselectSkill = (data) => {
    selectedSkill(data);}
  };
  return (
    <section className='skils-container'>
        <h5>Technical proficiency</h5>


        <div className='skills-content'></div>
          <div className='skills'>
            {Skills.map((item)=> (

              <SkillCard
              Key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={(){
                handleselectSkill(item);
              }}
              />
            ))}

            


          </div>


          <div className='skills-info'>
            <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            />

          </div>
    </section>
    );
};

export default Skills;
