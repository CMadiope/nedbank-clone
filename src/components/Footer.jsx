import React from "react";
import ScrollToTop from "./ScrollToTop";
import Collapsible from "./Collapsible";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='bg-white py-16'>
      <div className='flex justify-end pr-10 md:pr-20 pb-10'>
        <ScrollToTop />
      </div>
      <div className='w-full border-y py-6 px-4'>
        <p className='text-lg font-semibold'>Stay safe</p>
        <p className='font-light text-sm sm:text-base text-gray-500 pb-6 pt-3'>
          Fraud awareness
        </p>
      </div>
      <Collapsible label='Nedbank Group'>
        <p className=' pl-4 pt-4 text-gray-500'>About us</p>
        <p className=' pl-4 py-2 text-gray-500'>Investor relations</p>
        <p className=' pl-4 py-2 text-gray-500'>News and insights</p>
        <p className=' pl-4 py-2 text-gray-500'>Careers</p>
      </Collapsible>
      <Collapsible label='Connect with us'>
        <p className=' pl-4 pt-4 text-gray-500'>Nedbank blog</p>
        <p className=' pl-4 py-2 text-gray-500'>Contact us</p>
        <p className=' pl-4 py-2 text-gray-500'>Join the bank</p>
        <p className=' pl-4 py-2 text-gray-500'>Resume application</p>
        <p className=' pl-4 py-2 text-gray-500'>Promotions</p>
      </Collapsible>
      <Collapsible label='Banking with us'>
        <p className=' pl-4 pt-4 text-gray-500'>2023 rates and fees</p>
        <p className=' pl-4 py-2 text-gray-500'>Digital banking</p>
        <p className=' pl-4 py-2 text-gray-500'>Log into online banking</p>
        <p className=' pl-4 py-2 text-gray-500'>Fraud awareness</p>
      </Collapsible>
      <Collapsible label='Legal'>
        <p className=' pl-4 pt-4 text-gray-500'>Code of Banking Practice</p>
        <p className=' pl-4 py-2 text-gray-500'>FICA</p>
        <p className=' pl-4 py-2 text-gray-500'>PAIA</p>
        <p className=' pl-4 py-2 text-gray-500'>Privacy notice</p>
        <p className=' pl-4 py-2 text-gray-500'>Terms and conditions</p>
        <p className=' pl-4 py-2 text-gray-500'>FAIS Conflict of Interest</p>
      </Collapsible>
      <div className='max-md:hidden grid grid-cols-4 bg-[#fafafa] py-10 px-28'>
        <div>
          <h4 className='text-xl font-semibold pb-8'>Nedbank Group</h4>
          <p className='text-gray-500'>Investor relations</p>
          <p className='text-gray-500'>News and insights</p>
          <p className='text-gray-500'>Careers</p>
        </div>
        <div>
          <h4 className='text-xl font-semibold pb-8'>Connect with us</h4>
          <p className='text-gray-500'>Nedbank blog</p>
          <p className='text-gray-500'>Contact us</p>
          <p className='text-gray-500'>Join the bank</p>
          <p className='text-gray-500'>Resume application</p>
          <p className='text-gray-500'>Promotions</p>
        </div>
        <div>
          <h4 className='text-xl font-semibold pb-8'>Banking with us</h4>
          <p className='text-gray-500'>2023 rates and fees</p>
          <p className='text-gray-500'>Digital banking</p>
          <p className='text-gray-500'>Log into online banking</p>
          <p className='text-gray-500'>Fraud aness</p>
        </div>
        <div>
          <h4 className='text-xl font-semibold pb-8'>Legal</h4>
          <p className='text-gray-500'>Code of banking practice</p>
          <p className='text-gray-500'>FICA</p>
          <p className='text-gray-500'>PAIA</p>
          <p className='text-gray-500'>Privacy notice</p>
          <p className='text-gray-500'>Terms and conditions</p>
          <p className='text-gray-500'>FAIS Conflict of Interest</p>
        </div>
      </div>
      <div className='bg-white pt-16'>
        <h1 className='uppercase font-extrabold text-green-900 text-xl pl-4 md:pl-28'>
          Nedbank
        </h1>
        <div className="md:flex gap-6 items-center px-4">
          <p className="py-6 text-gray-500 font-light px-4">
          Nedbank Ltd Reg No 1951/000009/06. Licensed financial services
          provider (FSP9363) and registered credit provider (NCRCP16)
        </p>
        <div className='text-xl text-gray-500 px-4 flex gap-6 md:gap-4'>
        <FaFacebookF/>
        <FaLinkedinIn/>
        <AiOutlineInstagram/>
        <AiOutlineTwitter/>
        <AiFillYoutube/>
        </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
