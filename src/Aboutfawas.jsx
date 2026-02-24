import React, { useLayoutEffect, useRef } from 'react'
import Navbar from './Navbar'
import coding from './assets/coding.svg'
import about from './assets/about.svg'
import mindset from './assets/mindset.svg'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Aboutfawas = () => {
  const refer = useRef(null)

 useLayoutEffect(() => {
   const ctx = gsap.context(() => {
     const cards = gsap.utils.toArray(".card")
     gsap.fromTo(
       cards,
       {
         y: 80,
         opacity: 0,
       },
       {
         y: 0,
         opacity: 1,
         duration: 0.6,
         ease: "power3.out",
         scrollTrigger: {
           trigger: refer.current,
           start: "top 85%",
           // toggleActions: "play reverse play reverse",
         },
       }
     );
   });
 
   return () => ctx.revert(); // Cleanup on unmount
 }, []);

  return (
    <>
    {/* <Navbar/> */}
    <div className='flex flex-col justify-center items-center mt-10 px-4'>

<div className='card bg-white w-full max-w-2xl rounded-3xl relative md:right-80 shadow-2xl'>
  <h1 className='p-5 text-4xl font-bold flex items-center'>About me! <img src={about} style={{width:50}} alt="" /></h1>
<p className='text-lg p-2 m-2 text-gray-800 '>Hi, I'm Fawas Anayat... <br /> A passionate Computer Science student currently pursuing my  BS in Computer  Science.<br /> With a strong academic foundation — having completed my FSc and Matriculation in <br /> Pakistan — I've always been driven by curiosity, discipline, and a desire to build <br /> meaningful things.

From an early stage, I developed a deep interest in technology and <br /> problem-solving. Today, I focus on sharpening my skills in web development, modern JavaScript frameworks, and building real-world projects that solve practical problems.</p>
</div>

<div className='card bg-white w-full max-w-2xl rounded-3xl mt-10 relative md:left-50 shadow-2xl'>
  <h1 className='p-5 text-4xl font-bold flex items-center'>My Mindset <img src={mindset} style={{width:50}} alt="" /></h1>
       <p className='text-lg p-2 m-2 text-gray-800 '>I believe in... <br /> growth, consistency, and long-term vision.

Alongside my technical journey, I carry a strong business mindset. I don't just want to write code — I want to understand how technology creates value, scales businesses, and impacts people's lives. I'm deeply interested in entrepreneurship, digital growth, and leveraging technology to create sustainable opportunities.</p>
</div>
     
       
       
<div className='card bg-white w-full max-w-2xl rounded-3xl relative md:right-90 mt-10 shadow-2xl'>
         <h1 className='p-5 text-4xl font-bold flex items-center'>Beyond coding <img src={coding} style={{width:50}} alt="" /></h1>
       <p className='text-lg p-2 m-2 text-gray-800'>Outside of tech... <br /> I genuinely enjoy reading — especially books related to self-development, business strategy, and mindset growth. Reading helps me think differently, improve decision-making, and develop leadership qualities.</p>

  </div>   
  <div className='card bg-white rounded-3xl mt-10 shadow-2xl mb-5'>
    
      <p className='p-5 text-3xl'>I strongly believe that </p>
<div className='flex justify-center items-center'>       <p className='font-extrabold p-5'>"Skills build income  <br /> Mindset builds legacy"</p>
</div>
  </div>
        

    </div>

    </>
  )
}

export default Aboutfawas