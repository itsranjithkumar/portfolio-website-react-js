import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
      <from>
        <div className='name-container'>
            <input type='text' name='firstname' placeholder='first Name'/>
            <input type='text' name='lastname' placeholder='last Name'/>
        </div>
        <input type='email' name='email' placeholder='email'/>
        <textarea type='text' name='message' placeholder='message' rows={3}></textarea>

        <button type='submit'>SEND</button>
      </from>
    </div>
  )
}

export default ContactForm
