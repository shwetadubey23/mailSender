import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Card from './Card'
import axios from 'axios';
import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from '@mui/material';
export default function Allmails({dark,setdark}) {
    let [allmails,setallMails] = useState()
    let[loading,setLoading] = useState(false)
    useEffect(()=>{
      (function () {
          setLoading(true)
            axios.get('/allmails').then((e)=>{
             setLoading(false)
                if(e.data.status){
                    setallMails(e.data.data)
                }
            })
          })();
    },[])
  return (
    <motion.div style={{paddingTop:'4rem',overflowY:'scroll',backgroundColor:dark?"":'#0e0a2f',height:'100vh' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} >
     {loading?<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}><CircularProgress/></Box>: <Card allmails={allmails} dark={dark} setdark={setdark}/>}
    </motion.div>
  )
}
