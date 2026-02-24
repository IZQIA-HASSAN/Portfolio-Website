import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import project1 from './assets/project1.png'

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
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
    <div className='px-6 pb-10' ref={refer}>
      <div className='text-white font-bold text-4xl max-sm:text-2xl flex justify-center items-center mt-10 mb-6'>
        Projects i have delivered
      </div>

      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8 max-w-6xl mx-auto'>

        <div className='card bg-white p-5 rounded-2xl shadow-2xl hover:scale-105 transition-all ease-out'>
          <div className='text-2xl font-bold'>AI powered documenting system</div>
          <p className='text-md font-light mt-3'>Jan-2026</p>
          <p className='mt-5'>Associated with <a href="https://www.linkedin.com/company/petalnex/" target='_blank'><b className='text-yellow-500'>PETALNEX</b></a></p>
          <p className='mt-5'>Designed and implemented an AI-driven document processing system using FastAPI, LangChain, and vector databases. The system enables users to upload documents, generate embeddings, and interact with the content through natural-language queries. This project strengthened my understanding of backend development, LLM pipelines, and semantic search workflows.</p>
          <p className='mt-5'>For complete code just click at <a href="https://github.com/Fawas-Anayat/Document_Processing_System" target='_blank'><b className='text-blue-400'>Github</b></a></p>
        </div>

        <div className='card bg-white p-5 rounded-2xl shadow-2xl hover:scale-105 transition-all ease-out'>
          <div className='text-2xl font-bold'>AI powered Saas-Starter kit</div>
          <p className='text-md font-light mt-3'>Jan-2026</p>
          <p className='mt-5'>Associated with <a href="https://www.linkedin.com/company/petalnex/" target='_blank'><b className='text-yellow-500'>PETALNEX</b></a></p>
          <p className='mt-5'>Designed and implemented using FastAPI backend. This is basically a template to be used for AI systems. Contains implemented login and signup authentication. Built this project during my internship journey at Petalnex — an amazing experience where I got to learn FastAPI backend.</p>
          <p className='mt-5'>For complete code just click at <a href="https://github.com/Fawas-Anayat/AI-Powered-SaaS-Starter-Kit-" target='_blank'><b className='text-blue-400'>Github</b></a></p>
        </div>

        <div className='card bg-white p-5 rounded-2xl shadow-2xl hover:scale-105 transition-all ease-out'>
          <div className='text-2xl font-bold'>Image gallery using fastAPI</div>
          <p className='text-md font-light mt-3'>Jan-2026</p>
          <p className='mt-5'>Associated with <a href="https://www.linkedin.com/company/petalnex/" target='_blank'><b className='text-yellow-500'>PETALNEX</b></a></p>
          <p className='mt-5'>Designed and implemented an AI-driven document processing system using FastAPI, LangChain, and vector databases. The system enables users to upload documents, generate embeddings, and interact with the content through natural-language queries. This project strengthened my understanding of backend development, LLM pipelines, and semantic search workflows.</p>
          <p className='mt-5'>For complete code just click at <a href="https://github.com/Fawas-Anayat/image_gallery_using_fastapi" target='_blank'><b className='text-blue-400'>Github</b></a></p>
        </div>

        <div className='card bg-white p-5 rounded-2xl shadow-2xl hover:scale-105 transition-all ease-out'>
          <div className='text-2xl font-bold'>SMS spam detector</div>
          <p className='text-md font-light mt-3'>Jan-2026</p>
          <p className='mt-5'>Associated with <a href="https://www.linkedin.com/company/petalnex/" target='_blank'><b className='text-yellow-500'>PETALNEX</b></a></p>
          <p className='mt-5'>A simple machine learning project that detects whether an SMS message is spam or not spam (ham) using a Support Vector Machine (SVM) algorithm. Used machine learning algorithms like SVM. This project strengthened my understanding of AI/ML and data.</p>
          <p className='mt-5'>For complete code just click at <a href="https://github.com/Fawas-Anayat/SMS-spam-detector" target='_blank'><b className='text-blue-400'>Github</b></a></p>
        </div>

      </div>
    </div>
  )
}

export default Project