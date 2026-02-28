import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isopen, setIsopen] = useState(false)

  return (
    <div className='h-15 flex justify-between items-center px-6 relative'>
      <nav className='w-full flex justify-between items-center'>

        {/* Desktop Menu */}
        <ul className='flex gap-10 max-lg:hidden mx-auto'>
          <Link to="/"><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Home</button></Link>
          <Link to="/Aboutfawas"><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>About Fawas</button></Link>
          <Link to="/project"><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Projects</button></Link>
          <Link to="/Certification"><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Certifications</button></Link>
          <Link to="/Contact"><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Contact</button></Link>
        </ul>

        {/* Hamburger Button */}
        <button
          className='lg:hidden text-2xl text-white ml-auto'
          onClick={() => setIsopen(!isopen)}
        >
          {isopen ? '✕' : '☰'}
        </button>

      </nav>

      {/* Mobile Dropdown Menu */}
      {isopen && (
        <ul className='lg:hidden flex flex-col items-start gap-5 bg-neutral-800 w-full absolute top-15 left-0 z-40 px-6 py-4'>
          <Link to="/" onClick={() => setIsopen(false)}><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Home</button></Link>
          <Link to="/Aboutfawas" onClick={() => setIsopen(false)}><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>About Fawas</button></Link>
          <Link to="/project" onClick={() => setIsopen(false)}><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Projects</button></Link>
          <Link to="/Certification" onClick={() => setIsopen(false)}><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Certifications</button></Link>
          <Link to="/Contact" onClick={() => setIsopen(false)}><button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Contact</button></Link>
        </ul>
      )}
    </div>
  )
}

export default Navbar