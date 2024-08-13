import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css';
import DropdownNav from './DropdownNav';

export default function Navbar() {
  return (
    
      <div className='navbar-box'  style={{ 
        backgroundColor: '#3E362E',
        width: '100%'
       }}>
        
          <p className='lora-unique-700'>
            Forest Forge
          </p>
          <DropdownNav/>
        
      </div>
    
  );
}