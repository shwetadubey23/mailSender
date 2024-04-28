import { Box } from '@mui/material'
import React from 'react'

export default function Card({ allmails,dark,setdark }) {
    return (
        <>
            {allmails && allmails.map((e) => (
                <Box key={e?._id} sx={{color:dark?"black":'#dddddd',backgroundColor:dark?"":'#021148', border: '2px solid gray','@media (max-width: 300px)':{fontSize:'10px',padding:'10px'}, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', display: 'flex', flexDirection: 'column', padding: '5px', borderRadius: '20px', margin: '10px 5px' }}>
                    <Box>Name: {e.name}</Box>
                    <Box>SendTo: {e.recieverEmail} </Box>
                    <Box sx={{ marginLeft: 'auto' ,'@media (max-width: 200px)':{fontSize:'10px',marginRight: 'auto',marginY:'2px'}, paddingRight: '10px' }}>{e.createdAt}</Box>
                </Box>
            )
            )}

        </>
    )
}
