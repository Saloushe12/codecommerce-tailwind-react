import React from 'react';
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {

  return (
    <div className='bg-white w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10'>
            <div className='w-full border-2 border-gray-100 rounded-xl shadow-xl flex flex-col justify-evenly my-4 p-4 hover:bg-gray-100 hover:scale-105 duration-300'>
                <img className="w-20 mx-auto mt-[-3rem] bg-trans" src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 User Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='mt-4 h-12 bg-[#00DF9A] w-[200px] px-0 rounded-md font-medium my-6 mx-auto text-[#000300]'>Start Trial</button>
            </div>
            <div className='w-full border-2 border-gray-100 rounded-xl shadow-xl flex flex-col justify-evenly my-4 p-4 hover:bg-gray-100 hover:scale-105 duration-300'>
                <img className="w-20 mx-auto mt-[-3rem] bg-trans" src={Double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                </div>
                <button className='mt-4 h-12 bg-[#00DF9A] w-[200px] px-0 rounded-md font-medium my-6 mx-auto text-[#000300]'>Start Trial</button>
            </div>
            <div className='w-full border-2 border-gray-100 rounded-xl shadow-xl flex flex-col justify-evenly my-4 p-4 hover:bg-gray-100 hover:scale-105 duration-300'>
                <img className="w-20 mx-auto mt-[-3rem] bg-trans" src={Triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Granted Users</p>
                    <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
                </div>
                <button className='mt-4 h-12 bg-[#00DF9A] w-[200px] px-0 rounded-md font-medium my-6 mx-auto text-[#000300]'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards;