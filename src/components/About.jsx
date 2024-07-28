import * as React from 'react';
import '../styles/About.css';

export default function About () {

  return (
    <div id='About-section' className='about-container'>
        <p id='about-p' className='lora-unique-700' style={{color: 'whitesmoke'}}>
          About
        </p>
        <p className='lora-unique-400'>
          Welcome to Happy Medium Studio in Victoria, BC. We specialize in custom-made wood furniture, tailored to your unique tastes. 
        </p>
    </div>
  );
}