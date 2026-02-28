import React from 'react';
import image from './assets/image.png';
import github from './assets/github-svgrepo-com.svg'
import linkdin from './assets/linkedin-svgrepo-com.svg'
import instagram from './assets/instagram-svgrepo-com.svg'
import facebook from './assets/facebook-svgrepo-com.svg'
import email from './assets/whatsapp-svgrepo-com.svg'

const Image = () => {
    return (
        <div className="flex flex-col items-center mt-10 w-1/2 max-lg:w-full max-lg:mt-6">
            <img
                src={image}
                alt="Fawas Anayat"
                className="h-130 max-lg:h-96 max-md:h-72 max-sm:h-60 w-auto hover:scale-105 transition-transform duration-300"
            />
            <div className='flex gap-8 mt-5 justify-center items-center bg-white rounded-md p-2 w-fit'>
                <a href="https://github.com/Fawas-Anayat" target='blank'>
                    <button className='cursor-pointer hover:scale-105 active:scale-95'><img src={github} className='w-7 max-sm:w-5' alt="" /></button>
                </a>
                <a href="https://wa.me/+92 342 6044166" target='_blank'>
                    <button className='cursor-pointer hover:scale-105 active:scale-95'><img src={email} className='w-7 max-sm:w-5' alt="" /></button>
                </a>
                <a href="https://www.facebook.com/share/1DpxEJfkLY/" target='_blank'>
                    <button className='cursor-pointer hover:scale-105 active:scale-95'><img src={facebook} className='w-7 max-sm:w-5' alt="" /></button>
                </a>
                <a href="https://linkedin.com/in/fawas-anayat-32b120261" target='_blank'>
                    <button className='cursor-pointer hover:scale-105 active:scale-95'><img src={linkdin} className='w-7 max-sm:w-5' alt="" /></button>
                </a>
            </div>
        </div>
    );
};

export default Image;