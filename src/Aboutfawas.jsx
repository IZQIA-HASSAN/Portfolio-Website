import React, { useLayoutEffect, useRef } from 'react'
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
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: refer.current,
            start: "top 85%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={refer} className='flex flex-col items-center mt-10 px-4 gap-8 pb-10'>

        {/* About Me */}
        <div className='card bg-white w-full max-w-2xl rounded-3xl shadow-2xl lg:self-start lg:ml-[5%]'>
          <h1 className='p-5 text-3xl md:text-4xl font-bold flex items-center gap-2'>
            About me! <img src={about} style={{width:45}} alt="" />
          </h1>
          <p className='text-base md:text-lg p-3 m-2 text-gray-800 leading-relaxed'>
            Hi, I'm Fawas Anayat...<br />
            A passionate Computer Science student currently pursuing my BS in Computer Science.<br />
            With a strong academic foundation — having completed my FSc and Matriculation in Pakistan — I've always been driven by curiosity, discipline, and a desire to build meaningful things.<br /><br />
            From an early stage, I developed a deep interest in technology and problem-solving. Today, I focus on sharpening my skills in web development, modern JavaScript frameworks, and building real-world projects that solve practical problems.
          </p>
        </div>

        {/* My Mindset */}
        <div className='card bg-white w-full max-w-2xl rounded-3xl shadow-2xl lg:self-end lg:mr-[5%]'>
          <h1 className='p-5 text-3xl md:text-4xl font-bold flex items-center gap-2'>
            My Mindset <img src={mindset} style={{width:45}} alt="" />
          </h1>
          <p className='text-base md:text-lg p-3 m-2 text-gray-800 leading-relaxed'>
            I believe in...<br />
            growth, consistency, and long-term vision.<br /><br />
            Alongside my technical journey, I carry a strong business mindset. I don't just want to write code — I want to understand how technology creates value, scales businesses, and impacts people's lives. I'm deeply interested in entrepreneurship, digital growth, and leveraging technology to create sustainable opportunities.
          </p>
        </div>

        {/* Beyond Coding */}
        <div className='card bg-white w-full max-w-2xl rounded-3xl shadow-2xl lg:self-start lg:ml-[5%]'>
          <h1 className='p-5 text-3xl md:text-4xl font-bold flex items-center gap-2'>
            Beyond coding <img src={coding} style={{width:45}} alt="" />
          </h1>
          <p className='text-base md:text-lg p-3 m-2 text-gray-800 leading-relaxed'>
            Outside of tech...<br />
            I genuinely enjoy reading — especially books related to self-development, business strategy, and mindset growth. Reading helps me think differently, improve decision-making, and develop leadership qualities.
          </p>
        </div>

        {/* Quote Card */}
        <div className='card bg-white w-full max-w-2xl rounded-3xl shadow-2xl text-center'>
          <p className='p-5 text-2xl md:text-3xl'>I strongly believe that</p>
          <p className='font-extrabold p-5 text-xl md:text-2xl pb-8'>
            "Skills build income <br /> Mindset builds legacy"
          </p>
        </div>

      </div>
    </>
  )
}

export default Aboutfawas