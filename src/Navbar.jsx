import React from 'react'
import downarrow from './assets/downarrow.svg'
import logo from './assets/logo.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='h-15 flex justify-center items-center'>
      <ul className='flex gap-30'>
        <nav className='flex flex-wrap justify-center gap-6 md:gap-40'>
          <Link to="/"><button className='text-white cursor-pointer transition-all duration-100 ease-out scale-105 active:scale-95 hover:text-yellow-200'>Home</button></Link>
          <Link to="/Aboutfawas"><button className='text-white cursor-pointer transition-all duration-100 ease-out scale-105 active:scale-95 hover:text-yellow-200'>About fawas</button></Link>
          <Link to="/project"><button className='text-white cursor-pointer transition-all duration-100 ease-out scale-105 active:scale-95 hover:text-yellow-200'>projects</button></Link>
          <Link to="/Certification"><button className='text-white cursor-pointer transition-all duration-100 ease-out scale-105 active:scale-95 hover:text-yellow-200'>Certifications</button></Link>
                 <Link to="/Contact"><button className='text-white cursor-pointer transition-all duration-100 ease-out scale-105 active:scale-95 hover:text-yellow-200'>Contact</button></Link>

        </nav>
      </ul>
    </div>
  )
}

export default Navbar