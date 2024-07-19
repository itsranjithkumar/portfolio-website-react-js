import React from 'react'
import './WorkExperience.css'
import { WorkExperience } from '../../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick';

const WorkExperience = () => {
  const sliderRef = useRef();
  const settings ={
    dots: False,
    infinite: True,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: False,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.sliceNext();
  };
const slideLeft = () => {
  sliderRef.current.slickPrev();
};
  return (
    <section className='experience-container'>
        <h5>Work Experience</h5>

      <div className='experience-content'>
        <div className='arrow-right' onClick={slideRight}>
          <span class='material-symbols-outlined'>chevron_right</span> 
        </div>

        <div className='arrow-left' onClick={slideLeft}>
          <span class='material-symbols-outlined'>chevron_left</span>
        
        
        </div>



        <Slider ref={sliderRef} {...settings}>
          {WorkExperience.map((item)=> (
            <ExperienceCard key={item.title} details={item}/>
          ))}
        </Slider>

        {WorkExperience.map((item)=> (
            
            <ExperienceCard key={item.title} details={item}/>
        ))}
    </div>
    </section>
  );
};

export default WorkExperience;WorkExperience
