import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oijfsgj', 'template_jpbtx2q', form.current, 'iUa66s9P-2YTXBqFg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
    <h1>RESERVA YA</h1>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Nombre'/>
      <input type="email" name="user_email" placeholder='Email' />
      <textarea  name="message"  placeholder='Escribe aqui...'></textarea>
      <input type='submit' value='RESERVAR'/>
    </form>
    </div>

  );
};
export default ContactUs;
