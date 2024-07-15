import React from "react";
import "./Hero.css";

import myimage from "../../assets/myimage.jpg";
import htmlimage from "../../assets/htmlimage.png";
import imagejs from "../../assets/imagejs.png";
import imagecss from "../../assets/imagecss.png";

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
            <img src={myimage} alt="" />
          </div>
          <img src={htmlimage} alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src={imagejs} alt="" />
        </div>
        <div className="tech-icon">
          <img src={imagecss} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
