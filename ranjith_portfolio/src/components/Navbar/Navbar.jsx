import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../public/assets/mylogo.png';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {/* Mobile navigation */}
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src={logo} alt='Logo' />

          {/* Desktop menu */}
          <ul className='desktop-menu'>
            <li><a href="#home" className="menu-item">Home</a></li>
            <li><a href="#skills" className="menu-item">Skills</a></li>
            <li><a href="#Work_experience" className="menu-item">Work Experience</a></li>
            <li><a href="#contact_Me" className="menu-item">Contact Me</a></li>
            <button className="contact-btn">Hire Me</button>
          </ul>

          {/* Menu button for mobile */}
          <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <i className={`fas ${openMenu ? 'fa-times' : 'fa-bars'}`} style={{ fontSize: '1.8rem' }}></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
