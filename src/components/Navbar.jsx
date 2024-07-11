import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    
      <div className='navbar-box'  style={{ 
        backgroundColor: '#3E362E',
        width: '100%'
       }}>
        
          <p className='lora-unique-700'>
            Happy Medium Studio
          </p>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display:'flex' }}
          >
            <MenuIcon />
          </IconButton>
        
      </div>
    
  );
}