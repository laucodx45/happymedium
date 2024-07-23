import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contactForm-container'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='contact-input'>
          <label className='lora-unique-700'>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className='contact-input'>
          <label className='lora-unique-700'>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className='contact-input'>
          <label className='lora-unique-700'>Message</label>
          <textarea name="message" />
        </div>
        <Button 
        className='lora-unique-700 contact-input' 
        type="submit" value="Send" 
        variant="contained" 
        endIcon={<SendIcon />}
        sx={{
          '&:active': {
            backgroundColor: '#865D36'
          },
        }}
        >
          Send
        </Button>
        {/* <input  /> */}
      </form>
    </div>
  );
};