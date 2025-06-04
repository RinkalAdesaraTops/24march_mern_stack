import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customhooks from './Customhooks'
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import Sign from './Sign'
import { BrowserRouter, Routes,Route } from 'react-router'

function App() {
  return (
    <div>
      {/* <Customhooks /> */}
      <Menu />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
