import * as React from 'react';
import '../styles/About.css';
// import skylar from '../images/Skylar.jpg';
// import skylar2 from '../images/skylar2.jpg';

export default function About () {

  return (
    <div className='about-container'>

      <div className='about-description-box'>
        <div className='description-title'>
          <h3 className='lora-unique-700' style={{color: 'whitesmoke'}}>
            About
          </h3>
        </div>
        <p className='lora-unique-400'>
          Welcome to Happy Medium Studio in Victoria, BC. We specialize in custom-made wood furniture, tailored to your unique tastes. 
        </p>
      </div>
      
      <div className='about-description-box'>
        <div className='description-title'>
          <h3 className='lora-unique-700' style={{color: 'whitesmoke'}}>
            Contact
          </h3>
        </div>
        <p className='lora-unique-400'>
          Skylar Klassen
        </p>
        <div className='contact-description'>
          <a className='lora-unique-400' href="mailto:lau-cody@outlook.com">happy_medium_studio@outlook.com</a>
        </div>  
      </div>


    </div>
  );
}