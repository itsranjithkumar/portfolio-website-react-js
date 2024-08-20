import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const ContactMe = () => {
  return (
    <section className='contact-container'>

    <h5>
        Contact Me
    </h5>
    <div className='contact-content'>
        <div style={{flex:1}}></div>
        <ContactInfoCard
               iconUrl='./assets/images/email.gif'
               text='ranjithkumarms28@gmail.com'
            />
            <ContactInfoCard
               iconUrl='../../assets/images/github.gif'
               text='https://github.com/itsranjithkumar'
            />
        <div style={{flex:1}}></div>

    </div>
    </section>
  )
}

export default ContactMe
