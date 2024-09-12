import React, { useRef } from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

const WorkExperience = () => { 
  const sliderRef = useRef(null);
  
  const settings = {
    dots: false,
    infinite: true,
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
    console.log("Slide right clicked");
    sliderRef.current?.slickNext(); // Use optional chaining to prevent errors if ref is not set
  };

  const slideLeft = () => {
    console.log("Slide left clicked");
    sliderRef.current?.slickPrev(); // Use optional chaining to prevent errors if ref is not set
  };

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
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
        <p id='contact_Me'></p>

      </div>
    </section>
  );
};

export default WorkExperience;
