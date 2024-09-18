import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../public/assets/mylogo.png';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); // Define openMenu state here
  const [activeMenuItem, setActiveMenuItem] = useState('#home');

  const handleMenuClick = (menuId) => {
    setActiveMenuItem(menuId);
    document.getElementById(menuId.substring(1)).scrollIntoView({ behavior: 'smooth' });
    setOpenMenu(false); // Close mobile menu after click (optional)
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu); // Toggle the mobile menu open/close
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
            <li>
              <a
                href="#home"
                className={`menu-item ${activeMenuItem === '#home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick('#home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`menu-item ${activeMenuItem === '#skills' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick('#skills');
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#work-experience"
                className={`menu-item ${activeMenuItem === '#work-experience' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick('#work-experience');
                }}
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="#contact-me"
                className={`menu-item ${activeMenuItem === '#contact-me' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick('#contact-me');
                }}
              >
                Contact Me
              </a>
            </li>
          </ul>

          {/* Contact Button */}
          <button
            className="contact-btn"
            onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </button>

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
