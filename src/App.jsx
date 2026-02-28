import './App.css'
import Navbar from './Navbar'
import Text from './Text'
import Image from './Image'
import Quote from './Quote'
import Aboutfawas from './Aboutfawas'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Certification from './Certification'
import Project from './Project'
import Contact from './Contact'
import Loader from './Loader'
import { useEffect, useState } from 'react'


function App() {
  return (
    <BrowserRouter>
      <div className='bg-gray-800 min-h-screen'>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='flex items-center justify-between px-10 max-lg:flex-col max-lg:items-center max-lg:px-4'>
                  <Text />
                  <Image />
                </div>
                <Quote />
              </>
            }
          />
          <Route path="/Aboutfawas" element={<Aboutfawas />} />
          <Route path="/Certification" element={<Certification />} />
          <Route path='/project' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App