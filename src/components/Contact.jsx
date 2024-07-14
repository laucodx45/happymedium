import * as React from 'react';
import '../styles/Contact.css'

export default function Contact () {

  return (
    <div className='contact-container'>
      <div className='description-title'>
        <h3 className='lora-unique-700' style={{color: 'whitesmoke'}}>
          Contact
        </h3>
      </div>
      <p className='lora-unique-400' style={{marginBottom: '0px'}}>
        Skylar Klassen
      </p>
      <div className='contact-description'
        style={{marginTop: '0'}}
      >
        <a style={{
          color: 'white', 
          marginBottom: '15px',
          marginTop:'0px'}} className='lora-unique-400' href="mailto:example@mail.com">happy_medium_studio@outlook.com</a>
      </div>  
    </div>
  )
}
