import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { applicationContext } from '../hooks/applicationContext';
import contactFormPic from '../images/contact-form-pic.jpg';

export const ContactUs = () => {
  const {dispatch} = useContext(applicationContext);

  const form = useRef();

  // const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('', templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('Success');
          
          form.current.reset();
          dispatch({type: 'setFormSubmissionSuccess', payload: true})
          // set modal status to true
          dispatch({type: 'setMessageModalStatus', payload: true})
          
        },
        (error) => {
          dispatch({type: 'setFormSubmissionError', payload: true})
          
          // set modal status to true
          dispatch({type: 'setMessageModalStatus', payload: true})
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className='contactForm-container' id='ContactUs-section'>
      <form ref={form} onSubmit={sendEmail}>
        <h3 className='lora-unique-700'>
          Inquiry Form
        </h3>
        <div className='contact-input'>
          <input type="text" name="user_name" className='lora-unique-400' required placeholder='name*'/>
        </div>
        <div className='contact-input'>
          <input type="email" name="user_email" className='lora-unique-400' required placeholder='email*'/>
        </div>
        <div className='contact-input'>
          <textarea id='message-textArea' name="message" className='lora-unique-400' required placeholder='message*'/>
        </div>
        <Button 
        className='lora-unique-700 contact-input' 
        type="submit" value="Send" 
        variant="contained" 
        endIcon={<SendIcon />}
        sx={{
          '&:hover': {
            backgroundColor: '#865D36'
          },
        }}
        >
          Send
        </Button>
      </form>
      <div className='Contact-img lora-unique-400'>
        <img src={contactFormPic} alt='coffee-table'/>
      </div>
      
    </div>
  );
};