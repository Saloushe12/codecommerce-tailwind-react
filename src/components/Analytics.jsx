import React from 'react';
import Laptop from "../assets/laptop.jpg";


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row items-center'>
                <img className='w-[500px]' src={Laptop} alt="/" />
            <div className='flex flex-col '>
                <h2 className='font-bold pt-2 text-[#00DF9A] text-sm md:text-xl'>
                    DATA ANALYTICS DASHBOARD
                </h2>
                <h1 className='py-2 font-bold text-2xl md:text-3xl'>
                    Manage Data Analytics Centrally
                </h1>
                <p className='font-medium'>
                    Leverage the power of centralized data analytics to streamline your decision-making process. 
                    With our data analytics dashboard, you can visualize key metrics, track performance, and manage your data all in one place. 
                    This centralized approach ensures that insights are easily accessible, allowing you to identify trends, optimize operations, 
                    and make informed decisions quickly. Gain a comprehensive view of your data with customizable dashboards, 
                    and stay ahead with real-time analytics at your fingertips.
                </p>
                <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-gray-400' id='analytics-btn'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics;