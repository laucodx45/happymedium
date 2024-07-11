import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    
      <AppBar className='navbar-box' position="static" style={{ 
        backgroundColor: '#3E362E',
        width: '100%'
       }}>
        <Toolbar>
          <p className='lora-unique-700'>
            Happy Medium Studio
          </p>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    
  );
}