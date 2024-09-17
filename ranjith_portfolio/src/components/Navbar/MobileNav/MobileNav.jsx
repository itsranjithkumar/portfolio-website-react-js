import React from 'react';
import './MobileNav.css';
import logo from '../../../../public/assets/mylogo.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <img src={logo} alt='Logo' className='logo' />
        <ul>
          <li>
            <a className='menu-item' href="#home" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a className='menu-item' href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li>
            <a className='menu-item' href="#work-experience" onClick={toggleMenu}>Work Experience</a>
          </li>
          <li>
            <a className='menu-item' href="#contact-me" onClick={toggleMenu}>Contact Me</a>
          </li>
          <button className="contact-btn" onClick={() => { /* Your logic here */ }}>
            Hire Me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
