import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
// import scrolltrigger from 'gsap/ScrollTrigger'



const Contact = () => {
  const refer  = useRef(null)
  useLayoutEffect(()=>{
gsap.fromTo(refer.current,{
  y:70,
  opacity:0
  // duration:1,
  // ease:"power3.out"
},
{
  y:0,
  opacity:1,
  duration:1,
  ease:"power3.out"
})
  },[])
  return (
    <div className='flex flex-col justify-center items-center px-4'>
        <div className='flex justify-center mt-10 text-center'><h1 className='text-2xl sm:text-3xl md:text-4xl text-white font-bold'>Lets Connect and build</h1></div>
        <div ref={refer} className='flex flex-col items-center mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 shadow-2xl bg-gray-800 hover:transition-all duration-150 ease-out hover:scale-105'>
          <h1 className='text-xl sm:text-2xl text-white font-bold'>Contact Me</h1>
         <span className='flex flex-col w-full'>
           <label className='text-md text-yellow-200 mt-4' htmlFor="">Email</label>
          <input className='w-full h-10 p-2 rounded-md mt-4 bg-white' type="text" placeholder='Enter your Email' />
         </span>

          <span className='flex flex-col w-full'>
           <label className='text-md text-yellow-200 mt-4' htmlFor="">Name</label>
          <input className='w-full h-10 p-2 rounded-md mt-4 bg-white' type="text" placeholder='Enter your Name' />
         </span>

         <span className='flex flex-col w-full'>
           <label className='text-md text-yellow-200 mt-4' htmlFor="">Notify me Your subject</label>
          <textarea className='w-full h-25 mt-4 rounded-md p-2 bg-white' name="text" placeholder='Your idea' id=""></textarea>
         </span>

         <button className='text-md text-white bg-black h-10 w-20 rounded-md mt-10 cursor-pointer hover:transition-all duration-100 ease-in scale-110 active:scale-95'>Submit</button>
        </div>
    </div>
  )
}

export default Contact