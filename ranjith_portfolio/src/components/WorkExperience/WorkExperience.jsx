import React, { useRef } from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../utils/data'; // Ensure this path is correct
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

const WorkExperience = () => {
  const sliderRef = useRef(null);

  // Update the settings here
  const settings = {
    dots: false,
    infinite: false, // Disabled infinite scroll
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current?.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  };

  console.log("Rendering WorkExperience with data:", WORK_EXPERIENCE); // Debug log

  return (
    <section className='experience-container'>
      <h5>Work Experience</h5>

      <div className='experience-content'>
        <div className='arrow-right' onClick={slideRight}>
          <i className='fa-solid fa-chevron-right'></i>
        </div>

        <div className='arrow-left' onClick={slideLeft}>
          <i className='fa-solid fa-chevron-left'></i>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item, index) => {
            console.log("Rendering item:", item); // Debug log
            return <ExperienceCard key={index} details={item} />;
          })}
        </Slider>
         <p id ='work-experience'></p>
      </div>
    </section>
  );
};

export default WorkExperience;
