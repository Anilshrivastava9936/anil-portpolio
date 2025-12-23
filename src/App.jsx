import React from 'react'
import Navbar from './pages/Navbar'

import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div className=''>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Routes>

    </div>



  )
}

export default App