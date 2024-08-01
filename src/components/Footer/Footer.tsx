import React from 'react'
import Baner from './Baner'
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
const Footer:React.FC = () => {
  return (
    <section className='mt-[40px] pt-[20px]'>
      <div className='flex flex-col gap-[11px]'>
        <Baner />
       
       <div  className=' bg-black flex justify-center items-center w-full h-full'>
       <div className='bg-black m-3 h-full w-[400px] md:w-full lg:h-[229px]  flex flex-col md:flex-row md:py-[22px] justify-between items-center gap-5 md:gap-[87px] md:px-[100px] '>
          <div className=' w-full md:w-[40%] h-full md:h-[140px] flex flex-col items-center justify-center gap-3 '>
          <span className="flex justify-center items-start w-full h-full text-center">
              <img  className='' src="/logo2.svg" alt="" />
            </span>
            <span className='text-silver text-center leading-loose lg:text-p md:text-[14px] text-[11px] '>
            Copyright &copy; {new Date().getFullYear()} Landify UI Kit.
            <p className=' leading-snug lg:text-p md:text-[14px] text-[11px] text-grey '>All rights reserved</p>
            </span>
            <span className='flex items-center text-center justify-center gap-5'>
              <a href="#" className='text-silver  font-semibold text-[16px] lg:text-[20px]'> <FaGithub /> </a>
              <a href="#" className='text-silver font-semibold  text-[16px] lg:text-[20px]'> <PiInstagramLogoThin /> </a>
              <a href="#" className='text-silver  font-semibold  text-[16px] lg:text-[20px]'><FaXTwitter /></a>
              <a href="#" className='text-silver  font-semibold  text-[16px] lg:text-[20px]'><BiLogoGmail /></a>
            </span>
          </div>

          <div className='flex items-start justify-normal w-full h-full py-[20px]'>
          <div className='w-full h-full pb-2   gap-2 md:gap-[20px] grid grid-cols-3  '>
             <div className='w-full h-full'>
              <h2  className='md:text-md text-sm lg:text-xl text-silver font-semibold leading-snug py-2'>Company</h2>
              <ul>
                <li  className='li-link'><a href="#">About us</a></li>
                <li  className='li-link'><a href="#">Blog</a></li>
                <li  className='li-link'><a href="#">Contact us</a></li>
                <li  className='li-link'><a href="#">Pricing</a></li>
                <li  className='li-link'><a href="#">Testimonials</a></li>
              </ul>
             </div>
             <div className='w-full h-full'>
              <h2 className='md:text-md text-sm lg:text-xl text-silver font-semibold leading-snug py-2'>Support</h2>
              <ul>
                <li className='li-link'><a href="#">Help center</a></li>
                <li className='li-link'><a href="#">Terms of service</a></li>
                <li  className='li-link'><a href="#">Legal</a></li>
                <li  className='li-link'><a href="#">Privacy policy</a></li>
                <li  className='li-link'><a href="#">Status</a></li>
              </ul>
             </div>
             <div className='w-full h-full'>
              <h2 className='md:text-md text-sm lg:text-xl text-silver font-semibold leading-snug py-2 w-[200px]'>Stay up to date</h2>
               <div className='bg-gray-400 flex items-center justify-center border px-1 rounded-lg w-full'>
               <input className='bg-transparent w-full p-1 outline-none border-none' placeholder='Your email address' type="text" />
               <span>
               <TbSend className='text-white text-[20px] font-semibold ' />
               </span>
               </div>
             </div>
     
      
          </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Footer