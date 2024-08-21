import React from 'react'
import "./ContactMe.css";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
     <h5>
         Contact me
        </h5>

        <div className="contact-content">
            <div style={{flex:1}}>
            <ContactInfoCard
                iconUrl="../..//src/assets/GitHub.png"
                text="+91 702 456 7890"
            />
            <ContactInfoCard
                iconUrl="../..//src/assets/GitHub.png"
                text="https://github.com/itsranjithkumar"
            />

            </div>
            <div style={{flex:1}}>
                <ContactForm  />
            </div>
        </div>
    </section>
  )
}

export default ContactMe