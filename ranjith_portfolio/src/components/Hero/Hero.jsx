import React from 'react'

import './Hero.css'
import backend_img from '../../assets/icons8-backend-development-64.png'
import myimage_png from '../../assets/myimage.jpg'
import html_img from '../../assets/icons8-html5-144.png'
import css_img from '../../assets/icons8-css-144.png'
import js_img from '../../assets/icons8-js-144.png'




const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">

        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontened Developper Transforming Ideas into seanless and
          visually Stunning web Solution
        </p>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                <img src={backend_img} alt="react" />
                </div>
                <img  className="hero_main_image"src={myimage_png} alt="myimage" />
            </div>
                <p id="skills"></p>
            <div>
                <div className="tech-icon">
                <img src={html_img} alt="html" />
                </div>
                 <div className="tech-icon">
                <img src={css_img} alt="css" />
                </div>
                 <div className="tech-icon">
                <img src={js_img} alt="js" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
