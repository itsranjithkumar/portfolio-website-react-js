import React from 'react'
import'./MobileNav.css'
import logo from '../../../../public/assets/mylogo.png'

const MobileNav = ({isOpen, toggleMenu}) => {
    return (
      <>
      <div
          className={`mobile-menu ${isOpen ? "active": ""}`}
          onClick={toggleMenu}
         >

      <div className="mobile-menu-container">
        <img src={logo} alt='' className='logo' />
        <ul>
          <li>
            <a className='menu-item'>Home</a>
          </li>

          <li>
                <a className='menu-item'>Skills</a>
                </li>
                <li>
                <a className='menu-item'>Work Experience</a>
                </li>
                <li>
                <a className='menu-item'>contact Me</a>
                </li>

                <button className="contact-btn" onClick={()=> {}}>
                Hire Me
                </button>
        </ul>

        </div>
      </div>
</>
  )
}
export default MobileNav;
