import * as React from 'react';
import '../styles/Contact.css'
import { Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact () {

  return (
    <div className='contact-container'>
      <p className='lora-unique-400' style={{marginBottom: '0px'}}>
        John Doe
      </p>
      <div>
        <Link href="https://www.instagram.com/happy_medium_studio/" target="_blank" rel="noopener" >
          <InstagramIcon className='insta-icon' sx={{
            color: 'white',
          }}/>
        </Link>
        <a
          className='lora-unique-400'
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>

      </div>
      <a 
        className='lora-unique-400' 
        href="mailto:lau-cody@outlook.com">
        lau-cody@outlook.com
      </a>
      <a href="tel:+1234567890">+1 (123) 456-789</a>
    </div>
  )
}
