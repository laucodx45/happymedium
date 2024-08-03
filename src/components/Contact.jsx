import * as React from 'react';
import '../styles/Contact.css'
import { Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact () {

  return (
    <div className='contact-container'>
      {/* <p style={{fontSize: '22px'}}>
        Contact
      </p> */}
      <p className='lora-unique-400' style={{fontSize:'16px',marginBottom: '0px'}}>
        Skylar Klassen
      </p>
      <div>
        <Link href="https://www.instagram.com/happy_medium_studio/" target="_blank" rel="noopener" >
          <InstagramIcon className='insta-icon' sx={{
            color: 'white',
            // paddingTop: '3px',
            // marginRight:'10px'
          }}/>
        </Link>
        <a
          className='lora-unique-400'
          href="https://www.instagram.com/happy_medium_studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>

      </div>
      <a 
        className='lora-unique-400' 
        href="mailto:example@mail.com">
        happyMediumStudio@outlook.com
      </a>
      <a href="tel:+1234567890">+1 (123) 456-789</a>
    </div>
  )
}
