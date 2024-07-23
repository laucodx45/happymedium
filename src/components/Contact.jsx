import * as React from 'react';
import '../styles/Contact.css'

export default function Contact () {

  return (
    <div className='contact-container'>
      <p className='lora-unique-400' style={{marginBottom: '0px'}}>
        Skylar Klassen
      </p>
      <a
        className='lora-unique-400'
        href="https://www.instagram.com/happy_medium_studio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a 
        className='lora-unique-400' 
        href="mailto:example@mail.com">
        happyMediumStudio@outlook.com
      </a>
      <a href="tel:+1234567890">+1 (123) 456-789</a>
    </div>
  )
}
