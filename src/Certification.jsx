import React, { useRef, useState , useLayoutEffect } from 'react'
import capture1 from './assets/Capture1.png'
import capture2 from './assets/Capture2.png'
import capture3 from './assets/Capture3.png'
import capture4 from './assets/Capture4.png'
import capture5 from './assets/Capture5.png'
import capture6 from './assets/Capture6.png'
import capture7 from './assets/Capture7.png'
import capture8 from './assets/Capture8.png'
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Certification = () => {
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
  const [selectedImage, setSelectedImage] = useState(null)

  const certificates = [
    capture1,
    capture2,
    capture3,
    capture4,
    capture5,
    capture6,
    capture7,
    capture8
  ]

  return (
    <div className="min-h-screen bg-gray-800 p-5 sm:p-10">

      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-10">
        My Certifications
      </h1>

      {/* Responsive Grid */}
      <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">

        {certificates.map((image, index) => (
          <div key={index} className="relative group cursor-pointer">

            {/* Certificate Image */}
            <img
              src={image}
              alt={`Certificate ${index + 1}`}
              className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-contain rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <button
                onClick={() => setSelectedImage(image)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
              >
                View Certificate
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl sm:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Zoomed Certificate"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-md sm:px-4 sm:py-2 text-lg sm:text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

<div className='flex justify-center items-center mt-5'><p className='text-white text-2xl'>More to discover on my <a href="https://www.linkedin.com/in/fawas-anayat-32b120261/details/certifications/" target='_blank'><b className='text-yellow-300'>Linkdin</b></a></p></div>
    </div>
  )
}

export default Certification