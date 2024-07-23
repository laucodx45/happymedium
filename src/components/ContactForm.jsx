import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export const ContactUs = () => {
  const form = useRef();

  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('Success');
          
          form.current.reset();
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
          <input type="text" name="user_name" className='lora-unique-400'/>
        </div>
        <div className='contact-input'>
          <label className='lora-unique-700'>Email</label>
          <input type="email" name="user_email" className='lora-unique-400'/>
        </div>
        <div className='contact-input'>
          <label className='lora-unique-700'>Phone number</label>
          <input type="tel" name="user_phone_number" className='lora-unique-400'/>
        </div>
        <div className='contact-input'>
          <label className='lora-unique-700'>Message</label>
          <textarea name="message" className='lora-unique-400'/>
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