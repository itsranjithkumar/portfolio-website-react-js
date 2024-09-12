import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactFrom.css';

const ContactForm = () => {
  const formRef = useRef();
  // use ref is used to get the reference of the form, in order to use it in emailjs
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_m3l4i4w',  // Your EmailJS service ID
        'template_1qk656m',  // Your EmailJS template ID
        {
          from_name: `${form.firstname} ${form.lastname}`,
          to_name: "Ranjith Kumar",  // Change to your recipient name
          email: form.email,
          to_email: "ranjithkumarms28@gmail.com",  // Change to your recipient email
          message: form.message,
        },
        'u5YtmLUXVAFtx4o0T'  // Your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='contact-form-content'>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={form.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={form.lastname}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
