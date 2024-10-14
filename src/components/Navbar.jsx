import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false);

    const toggleSidebar = () => {
        setSidebarStatus(!sidebarStatus);
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00DF9A]'>REACT</h1>
        <ul id='desktop-navs' className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div id='navbar-btn' className='block md:hidden'>
            {sidebarStatus ?  <AiOutlineClose size={20} onClick={toggleSidebar}/> : <AiOutlineMenu size={20} onClick={toggleSidebar}/>}
        </div>
        <div className={sidebarStatus ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'  : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl my-7 font-bold text-[#00DF9A] m-4'>REACT</h1>
            <ul className='p-4'>
                <li className='p-4 border-b border-b-gray-900'>Home</li>
                <li className='p-4 border-b border-b-gray-900'>Company</li>
                <li className='p-4 border-b border-b-gray-900'>Resources</li>
                <li className='p-4 border-b border-b-gray-900'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;

