import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/DropdownNav.css';
import { Link } from 'react-scroll';

function DropdownNav() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div style={{display: 'flex'}}>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleOpen}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='nav-modal'
      >
        <Box sx={style}>
        <Link to="ContactUs-section" smooth={true} duration={400}>
          <p className='lora-unique-400' onClick={handleClose} id="modal-modal-description">Contact</p>
        </Link>
        <Link to="About-section" smooth={true} duration={400}>
          <p className='lora-unique-400' onClick={handleClose}>About</p>
        </Link>
        <Link to="PreviousWork-section" smooth={true} duration={400}>
          <p className='lora-unique-400' onClick={handleClose}>Past Projects</p>
        </Link>
        </Box>
      </Modal>
    </div>
  );
}

export default DropdownNav;
