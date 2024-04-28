import { Box, FormControl, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"
import toast from 'react-hot-toast';
import validator from 'validator';
import './a.css'

export default function Home({ dark, setdark }) {
  const [input, setinput] = useState()
  const [buttonLoding, setbuttonLoding] = useState(false)
  const [rows, setRows] = useState(6);
  const [nameSS, setname] = useState();
  useEffect(() => {
    // Function to update the number of rows based on window width
    function updateRows() {
      if (window.innerWidth < 400) {
        console.log(window.innerWidth)
        setRows(10); // Set rows to 10 when the window width is 400px or less
      }
      else {
        setRows(6)
      }
    }

    window.addEventListener('resize', updateRows);

    updateRows()
    return () => {
      window.removeEventListener('resize', updateRows);
    };

  }, [])
  let handleChange = (e) => {
   
    setinput({ ...input, [e.target.name]: e.target.value })
    if (e.target.name === 'name') {
      setname(() => e.target.value); 
    }

  }



  const handleSubmit = async () => {
    setbuttonLoding(true)
    if (input == undefined) {
      setbuttonLoding(false)
      return toast.error('Empty Fields')
    }
    if (input.name == undefined || input.name == "") {
      setbuttonLoding(false)
      return toast.error('Name is empty')
    }


    if (input.email == undefined || input.email == "") {
      setbuttonLoding(false)
      return toast.error('Email is empty')
    }
    if (!validator.isEmail(input.email)) {
      setbuttonLoding(false)
      return toast.error('Invalid Email ')
    }
    if (input.subject == undefined || input.subject == "") {
      setbuttonLoding(false)
      return toast.error('Subject is empty')
    }

    await axios.post('/sendMail', { ...input, message }).then((e) => {
      setbuttonLoding(false)

      if (e.data.status == true) {

        return toast.success(e.data.message)
      }
      else { return toast.error('Server Error') }
    })
  }
  const [message, setMessage] = useState('');
  useEffect(() => {
    setMessage(`Our newsletter is our gateway to:
      - Exclusive content: Get access to insightful article tips and resources.
      - Special offers: Be the first to know about promotion discounts and giveaways.
      - Upcoming events: Stay informed about upcoming webinars, workshops, and conferences.
      - Product updates: Discover the latest enhancements to the product and services.
      - Community insights: Hear stories and insights from our community of users.

      Rest assured, your email address will be kept confidential and will only be used to send you our newsletter. We value your privacy and adhere to strict data protection guidelines.

      Thank you for considering subscribing to our newsletters. We look forward to sharing valuable content and keeping you updated.

      If you have any questions or need further assistance, please feel free to contact our support team at zealyug.support@gmail.com.

      Best regards,
      ${nameSS || ''} 
      amankashyap0246@gmail.com`);
  }, [nameSS]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>

      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} style={{ display: 'flex', backgroundColor: dark ? "" : 'rgb(13 5 77)', width: '100%', height: '100%', justifyContent: 'center', paddingTop: "1rem", alignItems: 'center', marginTop: '3rem' }}>
        <Box sx={{ '@media (max-width: 400px)': { fontSize: '10px', width: '95%' }, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', border: '2px solid gray', padding: '1rem', borderRadius: '10px', display: 'flex', flexDirection: 'column', width: '50%', gap: '1rem' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField onChange={handleChange} name='name' type='email' sx={{ fontSize: '8px', flex: 1, "& > label": { color: dark ? "black" : 'white' }, "& > div>input": { color: dark ? "black" : '#8b8a8a' } }} id="standard-basic" label="Name" variant="standard" />
            <TextField onChange={handleChange} name='email' sx={{ flex: 1, "& > label": { color: dark ? "black" : 'white' }, "& > div>input": { color: dark ? "black" : '#8b8a8a' } }} id="standard-basic" label="Email" type='email' variant="standard" />
            <TextField onChange={handleChange} name='subject' sx={{ flex: 1, "& > label": { color: dark ? "black" : 'white' }, "& > div>input": { color: dark ? "black" : '#8b8a8a' } }} id="standard-basic" type='email' label="Subject" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
            <TextField onChange={(e) => setMessage(e.target.value)} sx={{ flex: 4, "& > label": { color: dark ? "black" : '#008eff' }, "& > div >textarea": { color: dark ? "black" : '#8b8a8a' } }}
              name='message'
              id="standard-multiline-static"
              label="Text"
              multiline
              rows={rows}
              value={message}
              variant="standard"
            />
            <LoadingButton loading={buttonLoding} onClick={handleSubmit} variant="contained">Send</LoadingButton>
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}
