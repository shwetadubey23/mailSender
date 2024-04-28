import React from 'react';
import page from './404.mp4';
import './a.css'; // Import a CSS file for styling
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function WrongPage() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
      <video autoPlay muted className="video" width="1100" height="400">
        <source src={page} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        
      <Link to={'/'}>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>

      <Button>Home Page</Button>
        </Box>
      </Link>
    </div>
  );
}
