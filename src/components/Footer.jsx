import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00DF9A]'>REACT</h1>
            <p className='py-4'>lorem ipsum. lorem ipsum. lorem ipsum. 
                lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum. lorem ipsum.
            </p>
            <div className='flex flex-row'>
                <FaFacebookSquare size={40}/>
                <FaInstagram size={40}/>
                <FaTwitterSquare size={40}/>
                <FaGithubSquare size={40}/>
                <FaDribbbleSquare size={40}/>
            </div>
        </div>
        <div className='flex lg:col-span-2 justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400 py-2'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>Insights</li>
                    <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 py-2'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                    <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 py-2'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 py-2'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;