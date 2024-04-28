import axios from 'axios';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Navbar';
import {Routes,Route }  from 'react-router-dom'
import Allmails from './Components/Allmails';
import { useState } from 'react';
import WrongPagge from './Components/WrongPagge';
function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
const[dark,setdark] = useState(true)
  return (
    <>
    <Header dark={dark} setdark={setdark}></Header>
    <Routes>
      <Route path='/' element={<Home dark={dark} setdark={setdark}/>}/>
      <Route path='/allmails' element={<Allmails dark={dark} setdark={setdark}/>}/>
      <Route path='*' element={<WrongPagge/>}/>
     
    </Routes>

    </>
  )
}

export default App
