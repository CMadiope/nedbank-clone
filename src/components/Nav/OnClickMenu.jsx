import React from "react";
import {
  AiOutlineRight,
  AiOutlineLock,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const OnClickMenu = () => {

  const containerVariants = {
    initial: {
      opacity:0,
      x:'-100vw'
    },
    animation:{
      opacity:1,
      x:0,
      transition:{
        
        duration:1.1
      }
    },
    exist:{
      x:"-100vw",
      transition:{
        ease:'easeInOut'
      }
    }
  }

  return (
    <div className='bg-green-800 text-white/90 transition duration-300'>
      {/* tablet and below */}
      <div className='flex flex-col gap-3  py-10 md:hidden'>
        <div className='flex items-center justify-between w-full border-t py-3 px-4 text-lg cursor-pointer'>
          <h3>Bank</h3>
          <AiOutlineRight />
        </div>
        <div className='flex items-center justify-between w-full border-t py-3 px-4 text-lg cursor-pointer'>
          <h3>Save & Invest</h3>
          <AiOutlineRight />
        </div>
        <div className='flex items-center justify-between w-full border-t py-3 px-4 text-lg cursor-pointer'>
          <h3>Borrow</h3>
          <AiOutlineRight />
        </div>
        <div className='flex items-center justify-between w-full border-t py-3 px-4 text-lg cursor-pointer'>
          <h3>Insure</h3>
          <AiOutlineRight />
        </div>
        <div className='flex items-center justify-between w-full border-t py-3 px-4 text-lg cursor-pointer'>
          <h3>Plan</h3>
          <AiOutlineRight />
        </div>
        <div className='flex items-center justify-between w-full border-t py-3 px-4 text-lg cursor-pointer'>
          <h3>Learn</h3>
          <AiOutlineRight />
        </div>
        <div className='flex items-center justify-between w-full border-y py-3 px-4 text-lg cursor-pointer'>
          <h3>Contact us</h3>
          <AiOutlineRight />
        </div>
        <div className='flex flex-col gap-6 text-lg py-8 cursor-pointer'>
          <div className='flex gap-2 items-center pl-4'>
            <BsSearch size={25} />
            <p>Search</p>
          </div>
          <div className='flex pl-4 gap-2 items-center cursor-pointer'>
            <AiOutlineLock size={25} />
            <p>Log In</p>
          </div>
        </div>
      </div>
      {/* tablet and above */}
      <motion.div className='max-md:hidden grid grid-cols-3 md:min-h-screen md:w-full py-16 px-12 gap-12 overflow-y-hidden'
      initial='initial'
      animate='animation'
      variants={containerVariants}
      exit='exit'
      >
        <div className='flex flex-col gap-6 font-bold text-3xl  text-right'>
          <h1 className='hover:text-white/80 cursor-pointer transition'>
            Bank
          </h1>
          <h1 className='hover:text-white text-white/70 cursor-pointer transition'>
            Save & Invest
          </h1>
          <h1 className='hover:text-white text-white/70 cursor-pointer transition'>
            Borrow
          </h1>
          <h1 className='hover:text-white text-white/70 cursor-pointer transition'>
            Insure
          </h1>
          <h1 className='hover:text-white text-white/70 cursor-pointer transition'>
            Plan
          </h1>
          <h1 className='hover:text-white text-white/70 cursor-pointer transition'>
            Learn
          </h1>
          <h1 className='hover:text-white text-white/70 cursor-pointer transition'>
            Contact us
          </h1>
          <div className='border-t'>
            <div className='text-sm flex justify-end gap-3 pt-6 cursor-pointer'>
              <BiPhoneCall size={20} />
              <p>Get in touch</p>
            </div>
            <div className='text-sm flex justify-end gap-3 cursor-pointer py-2 '>
              <CiLocationOn size={20} />
              <p>Find us</p>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <h1 className='font-light text-3xl'>Manage your money</h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 p-8 gap-4'>
            <div className='group  hover:bg-white/10 py-6 px-10 hover:shadow-xl hover:rounded-xl duration-50'>
              <div className='flex justify-between group-hover:scale-110'>
                <h4 className='font-bold pb-6'>Accounts</h4>
                <div className='font-bold hidden group-hover:block '>
                  <AiOutlineArrowRight size={20} />
                </div>
              </div>
              <p className='text-white/60 group-hover:scale-110'>
                Bank how and when you chose to , with the low fees or extra
                benefits you want.
              </p>
            </div>
            <div className='group  hover:bg-white/10 py-6 px-10 hover:shadow-xl hover:rounded-xl duration-50'>
              <div className='flex justify-between group-hover:scale-110'>
                <h4 className='font-bold pb-6'>Credit cards</h4>
                <div className='font-bold hidden group-hover:block '>
                  <AiOutlineArrowRight size={20} />
                </div>
              </div>
              <p className='text-white/60 group-hover:scale-110'>
                Shop online or instore and earn rewards for it, with up to 55
                days interest-free credit.
              </p>
            </div>
            <div className='group  hover:bg-white/10 py-6 px-10 hover:shadow-xl hover:rounded-xl duration-50'>
              <div className='flex justify-between group-hover:scale-110'>
                <h4 className='font-bold pb-6'>Digital banking</h4>
                <div className='font-bold hidden group-hover:block '>
                  <AiOutlineArrowRight size={20} />
                </div>
              </div>
              <p className='text-white/60 group-hover:scale-110'>
                Enjoy anytime-anywhere banking from your computer, cellphone or
                tablet.
              </p>
            </div>
            <div className='group  hover:bg-white/10 py-6 px-10 hover:shadow-xl hover:rounded-xl duration-50'>
              <div className='flex justify-between group-hover:scale-110'>
                <h4 className='font-bold pb-6'>Fraud awareness</h4>
                <div className='font-bold hidden group-hover:block '>
                  <AiOutlineArrowRight size={20} />
                </div>
              </div>
              <p className='text-white/60 group-hover:scale-110'>
                Protect yourself against the latest schemes and scams.
              </p>
            </div>
            <div className='group  hover:bg-white/10 py-6 px-10 hover:shadow-xl hover:rounded-xl duration-50'>
              <div className='flex justify-between group-hover:scale-110'>
                <h4 className='font-bold pb-6'>Forex</h4>
                <div className='font-bold hidden group-hover:block '>
                  <AiOutlineArrowRight size={20} />
                </div>
              </div>
              <p className='text-white/60 group-hover:scale-110'>
                Buy foreign banknotes, transfer funds or shop globally with a
                travel card.
              </p>
            </div>
            <div className='group  hover:bg-white/10 py-6 px-10 hover:shadow-xl hover:rounded-xl duration-50'>
              <div className='flex justify-between group-hover:scale-110'>
                <h4 className='font-bold pb-6'>Rewards</h4>
                <div className='font-bold hidden group-hover:block '>
                  <AiOutlineArrowRight size={20} />
                </div>
              </div>
              <p className='text-white/60 group-hover:scale-110'>
                Manage your money like a pro and get rewarded. Epic deals,
                discounts and more.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnClickMenu;
