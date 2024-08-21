import React from 'react'
import "./ContactMe.css";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
     <h5>
         Contaact me
        </h5>

        <div className="contact-content">
            <div style={{flex:1}}>
            <ContactInfoCard
                iconUrl="../../assets/images/GitHub.png"
                text="+91 1234567890"
            />
            <ContactInfoCard
                iconUrl="../../assets/images/GitHub.png"
                text="itsranjithkumar's Github"
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