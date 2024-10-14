import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full bg-[#000300] py-16 px-4'>
        <div className='flex flex-col md:flex-row max-w-[1240px] mx-auto justify-between'>
            <div className='text-white'>
                <h1 className='font-bold text-xl md:text-3xl '>Want tips & tricks to optimize your flow?</h1>
                <p className='py-2 md:text-xl'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='py-4'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <input className="rounded-lg w-full px-2 py-2 h-10 md:mr-2" type="text" placeholder='Enter your email'/>
                    <button className='h-10 bg-[#00DF9A] w-[200px] px-0 rounded-md font-medium my-6 mx-auto text-[#000300]' id='newsletter-btn'>
                        Notify Me
                    </button>
                </div>
                <p className='text-white py-0'>We care about the protection of your data. Read our <a className='underline text-[#00DF9A]'href="#">Privacy Policy.</a></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;