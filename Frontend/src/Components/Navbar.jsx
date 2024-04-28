import { Box, Button, Toolbar } from '@mui/material'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import GmailLogo from './image/gmail.png'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';

export default function Navbar({dark,setdark}) {
    const handleDarkModeChange = (e) => {
        setdark(!dark); 
      };
    return (
        <Box sx={{ color: "black" }}>
            <AppBar sx={{ bgcolor: dark?'#e8e8e8':'#180f69', color: dark?"black":'white', height: '50px' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Box title="Gmail" sx={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '2rem' }} src={GmailLogo} alt="Gmail Logo" />
                    </Box>
                    <Box title="Write Gmail" sx={{ display:'flex',alignItems:'center',gap:'5rem' }}>
                        <Switch title="changeMode"  onChange={handleDarkModeChange} />
                        <Link to={'/allmails'}>

                        <Button sx={{textTransform: 'none',width:'100%',padding:'1px',color:dark?"black":'white',backgroundColor:dark?"#dacdcd":'black'}}> Mails</Button>
                        </Link>
                        <Link to={'/'}>
                            <ModeEditOutlineIcon sx={{ cursor: 'pointer',color:dark?"black":'white' }} >write mail</ModeEditOutlineIcon>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
