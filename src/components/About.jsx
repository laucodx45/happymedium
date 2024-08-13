import * as React from 'react';
import '../styles/About.css';

export default function About () {

  return (
    <div  className='about-container'>
        <p id='about-p' className='lora-unique-700' style={{color: 'whitesmoke'}}>
          About
        </p>

        <p className='lora-unique-400 about-mobile-msg'>
          Welcome to Forest Forge in Victoria, BC. We specialize in custom-made wood furniture, tailored to your unique tastes. 
        </p>
        <div className='about-desktop-msg' >
          <p className='lora-unique-400' >
            Welcome to Forest Forge, nestled in the heart of Victoria, BC. We are passionate about creating custom-made wood furniture that perfectly fits your unique tastes and preferences. 
          </p>
          <p>
          Our commitment to craftsmanship and attention to detail ensures that each piece we create is not only beautiful but also functional and durable.
          </p>
          {/* <p>
          At Happy Medium Studio, we believe that furniture should be a reflection of your personality and lifestyle. Whether you're looking for a statement piece to enhance your living space or a functional item to meet your everyday needs, we work closely with you to bring your vision to life. From selecting the finest materials to designing and building each piece with care, we ensure that every detail aligns with your expectations.
          </p> */}
        </div>
    </div>
  );
}