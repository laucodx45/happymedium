import * as React from 'react';
import { Link } from 'react-scroll';
import '../styles/Footer.css'
import Contact from './Contact';

export default function Footer () {
  return (
    <div className='footer-container'>
      <div className='footer-div'>
        <p>
          Happy Medium Studio
        </p>
        {/* <p className="lora-unique-400">
          Copyright © 2024 Happy Medium Studio.
        </p> */}
      </div>
      <Contact/>
      <div className='footer-nav'>
        <Link to="ContactUs-section" smooth={true} duration={400}>
          <p className='lora-unique-400'  >Contact</p>
        </Link>
        <Link to="About-section" smooth={true} duration={400}>
          <p className='lora-unique-400' >About</p>
        </Link>
        <Link to="PreviousWork-section" smooth={true} duration={400}>
          <p className='lora-unique-400' >Past Projects</p>
        </Link>
      </div>
    </div>
  )
}