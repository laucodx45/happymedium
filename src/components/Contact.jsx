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
          marginBottom: '',
          marginTop:'0px',
          textDecoration: 'none'
          }} className='lora-unique-400' href="mailto:example@mail.com">happy_medium_studio@outlook.com
        </a>
      </div>  
      <a
        style={{
          color: 'white', 
          paddingLeft: '10%',
          marginBottom: '29px',
          marginTop: '0px',
          display: 'inline-block',
          textDecoration: 'none'
        }}
        className='lora-unique-400'
        href="https://www.instagram.com/happy_medium_studio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </div>
  )
}
