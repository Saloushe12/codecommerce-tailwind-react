import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00DF9A] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='text-xl sm:text-4xl md:text-5xl font-bold py-4'>
                    Fast, flexible financing for {<ReactTyped strings={['BTB.', 'BTC.', 'SASS.']} typeSpeed={40} backSpeed={50} loop/>}
                </p>
            </div>
            <p className='text-ml md:text-2xl text-gray-500 font-bold'>
                Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
            </p>
            <button className='bg-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#000300]' id='hero-btn'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Hero;