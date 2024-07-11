import * as React from 'react';
import '../styles/About.css';
import skylar from '../images/Skylar.jpg';
import skylar2 from '../images/skylar2.jpg';

export default function About () {

  return (
    <div className='about-container'>
      <div className='about-img-box'>
        <img 
          src={skylar}
          alt='skylar headshot'
        >
        </img>
        <img 
          src={skylar2}
          alt='skylar headshot'
        >
        </img>

      </div>
      <p>
        Welcome to Happy Medium Studio in Victoria, BC. We specialize in custom-made wood furniture, tailored to your unique tastes. 
      </p>
    </div>
  );
}