import * as React from 'react';
import { Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css'

export default function Footer () {
  return (
    <div className='footer-container'>
      <p className="lora-unique-400">
        Copyright © 2024 Happy Medium Studio.
      </p>
      <Link href="https://www.instagram.com/happy_medium_studio/" target="_blank" rel="noopener" >
        <InstagramIcon sx={{
          color: 'white',
          paddingTop: '3px',
          marginRight:'10px'
        }}/>
      </Link>
    </div>
  )
}