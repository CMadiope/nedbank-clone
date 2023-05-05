import React from "react";
import Head from "next/head";
import { BsArrowRight } from "react-icons/bs";
import header from "../../public/images/home/header-banner-3.png";
import Image from "next/image";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { BsCreditCard2Back, BsDot } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineMobile,
} from "react-icons/ai";
import headphones from "../../public/images/home/headphones.jpeg";
import card1 from "../../public/images/home/card1.jpeg";
import card2 from "../../public/images/home/card2.jpeg";
import card3 from "../../public/images/home/card3.png";
import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Personal banking services for better money choices | Nedbank
        </title>
      </Head>
      <div>
        <div className='bg-[#eeeeee] pl-6 md:pl-36 py-4 flex flex-col ss:flex-row  ss:gap-4'>
          <p className='font-light '>Need to resume your application?</p>
          <div className='text-green-700 flex items-center gap-3 text-lg'>
            <p>Apply</p>
            <BsArrowRight />
          </div>
        </div>
        <div className=' w-full relative'>
          <Image src={header} alt='header' className='w-full' />
          <div className='sm:absolute sm:top-0 sm:text-white md:left-20 md:top-20'>
            <h1 className='p-8 text-3xl font-bold   md:text-4xl'>
              Your money. Your goals. Your move.
            </h1>
            <button className='my-6 ml-8 py-4 px-16 bg-green-600 text-white/90 rounded-md hover:bg-green-700'>
              Open an account
            </button>
          </div>
          <div className='py-10 px-6 shadow-2xl bg-[#fafafa] m-8 rounded sm:absolute sm:-bottom-[180px] md:-bottom-[150px]   sm:left-[5%] sm:right-[5%] '>
            <h1 className='text-3xl font-bold pb-6'>Ready to join us?</h1>
            <p className='text-xl text-gray-500 text-justify'>
              Make the better money choice today and enjoy safe, simple banking
              with great rewards.
            </p>
          </div>
        </div>
        <div className='bg-[#f2f9f5] py-10 mt-10 sm:mt-48'>
          <h1 className='text-xl text-center font-bold md:text-2xl py-6'>
            Where you would you like to start?
          </h1>
          <div className='flex flex-col gap-6 md:grid md:grid-cols-3 px-8 md:px-24'>
            <div className='flex justify-between items-center border bg-white shadow-xl py-8 px-6 rounded-lg group cursor-pointer'>
              <div className='flex gap-6 items-center'>
                <div className='bg-[#fafafa] p-3 rounded-full'>
                  <MdOutlinePeopleAlt size={40} className='text-green-600 ' />
                </div>

                <div>
                  <h4 className='font-bold pb-1 '>Accounts</h4>
                  <p className='font-light text-sm text-gray-500'>
                    Manage your money
                  </p>
                </div>
              </div>
              <div className='text-lg text-green-600 group-hover:translate-x-2 duration-200'>
                <BsArrowRight />
              </div>
            </div>
            <div className='flex justify-between items-center border bg-white shadow-xl py-8 px-6 rounded-lg group cursor-pointer'>
              <div className='flex gap-6 items-center'>
                <div className='bg-[#fafafa] p-3 rounded-full'>
                  <GiMoneyStack size={40} className='text-green-600 ' />
                </div>

                <div>
                  <h4 className='font-bold pb-1 '>Personal loans</h4>
                  <p className='font-light text-sm text-gray-500'>
                    Achieve your goals
                  </p>
                </div>
              </div>
              <div className='text-lg text-green-600 group-hover:translate-x-2 duration-200'>
                <BsArrowRight />
              </div>
            </div>
            <div className='flex justify-between items-center border bg-white shadow-xl py-8 px-6 rounded-lg group cursor-pointer'>
              <div className='flex gap-6 items-center'>
                <div className='bg-[#fafafa] p-3 rounded-full'>
                  <BsCreditCard2Back size={40} className='text-green-600 ' />
                </div>

                <div>
                  <h4 className='font-bold pb-1 '>Credit cards</h4>
                  <p className='font-light text-sm text-gray-500'>Get ahead</p>
                </div>
              </div>
              <div className='text-lg text-green-600 group-hover:translate-x-2 duration-200'>
                <BsArrowRight />
              </div>
            </div>
            <div className='flex justify-between items-center border bg-white shadow-xl py-8 px-6 rounded-lg group cursor-pointer'>
              <div className='flex gap-6 items-center'>
                <div className='bg-[#fafafa] p-3 rounded-full'>
                  <AiOutlineHome size={40} className='text-green-600 ' />
                </div>

                <div>
                  <h4 className='font-bold pb-1 '>Home loans</h4>
                  <p className='font-light text-sm text-gray-500'>
                    Start your journey
                  </p>
                </div>
              </div>
              <div className='text-lg text-green-600 group-hover:translate-x-2 duration-200'>
                <BsArrowRight />
              </div>
            </div>
            <div className='flex justify-between items-center border bg-white shadow-xl py-8 px-6 rounded-lg group cursor-pointer'>
              <div className='flex gap-6 items-center'>
                <div className='bg-[#fafafa] p-3 rounded-full'>
                  <AiOutlineBarChart size={40} className='text-green-600 ' />
                </div>

                <div>
                  <h4 className='font-bold pb-1 '>Save & Invest</h4>
                  <p className='font-light text-sm text-gray-500'>
                    Grow your money
                  </p>
                </div>
              </div>
              <div className='text-lg text-green-600 group-hover:translate-x-2 duration-200'>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#eeeeee] p-4 sm:flex sm:justify-evenly'>
          <div>
            <Image src={headphones} alt='/' />
          </div>
          <div className='sm:pl-4 sm:py-6 md:p-16 md:text-2xl'>
            <h3 className='font-bold text-2xl md:text-3xl py-4'>
              Why partner with Nedbank?
            </h3>
            <p className='flex items-center text-gray-500 md:font-light'>
              <span>
                <BsDot />
              </span>
              <span>
                Honest guidance that helps you choose what works for you.
              </span>
            </p>
            <p className='flex items-center text-gray-500 md:font-light'>
              <span>
                <BsDot />
              </span>
              <span>Affordable offers that suit your goals and budget.</span>
            </p>
            <p className='flex items-center text-gray-500 md:font-light'>
              <span>
                <BsDot />
              </span>
              <span>Competitive interest rate based on how you spend.</span>
            </p>
            <p className='flex items-center text-gray-500 md:font-light'>
              <span>
                <BsDot />
              </span>
              <span>No hidden fees, just clear pricing and payment plans.</span>
            </p>
          </div>
        </div>
        <div className='bg-white px-4'>
          <div className='py-10 md:p-20 flex items-center justify-between'>
            <div className=''>
              <h3 className='text-2xl md:text-3xl font-bold'>Promotions</h3>
            </div>
            <div className='flex items-center gap-3 text-green-600 cursor-pointer group'>
              <p>See All</p>
              <BsArrowRight className='group-hover:translate-x-1 duration-200' />
            </div>
          </div>
          <div className='grid gap-10 py-10 sm:grid-cols-2 md:grid-cols-3 md:px-20 sm:px-40'>
            <div className='cursor-pointer'>
              <Image src={card1} alt='/' />
              <h4 className='pt-8 pb-12 text-xl font-semibold'>
                Greenbacks at bp
              </h4>
              <p className='text-gray-500'>
                Get 25c cash back for every litre of fuel when you fill up at
                BP. Plus stand to win your share of R200,000 in Greenbacks.
              </p>
              <div className='pt-10 flex items-center gap-3 text-lg text-green-600 group cursor-pointer'>
                <p>Learn more</p>
                <BsArrowRight className='group-hover:translate-x-1 duration-200' />
              </div>
            </div>
            <div className='cursor-pointer'>
              <Image src={card2} alt='/' />
              <h4 className='pt-8 pb-12 text-xl font-semibold'>
                Join the bank that's best for your money
              </h4>
              <p className='text-gray-500'>
                Value guaranteed. Seriously! Get cash Back, save on banking fees
                and funeral cover-the list goes on...
              </p>
              <div className='pt-10 flex items-center gap-3 text-lg text-green-600 group cursor-pointer'>
                <p>Learn more</p>
                <BsArrowRight className='group-hover:translate-x-1 duration-200' />
              </div>
            </div>
            <div className='cursor-pointer'>
              <Image src={card3} alt='/' />
              <h4 className='pt-8 pb-12 text-xl font-semibold'>
                Don't be extra, get EXTRA.
              </h4>
              <p className='text-gray-500'>
                Get EXTRA with Nedbank Insurance today nad enjoy much more value
                and EXTRA benefts.
              </p>
              <div className='pt-10 flex items-center gap-3 text-lg text-green-600 group cursor-pointer'>
                <p>Learn more</p>
                <BsArrowRight className='group-hover:translate-x-1 duration-200' />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-green-600 px-4 py-12'>
          <h4 className='text-white text-xl py-8'>Need help?</h4>
          <div className='flex flex-col md:flex-row'>
            <div className='grid sm:grid-cols-2 gap-8 sm:px-20 '>
              <div className='bg-white py-8 px-4 rounded-2xl'>
                <div className='text-green-400 text-4xl'>
                  <AiOutlineMobile />
                </div>
                <h2 className='font-semibold text-xl py-6'>Ways to bank</h2>
                <p className='text-gray-500 text-sm font-light'>
                  There are so many ways to manage your money at Nedbank. Simply
                  choose the option that works best for you.
                </p>
                <div className='flex gap-3 text-lg items-center pt-6 text-green-600 cursor-pointer group'>
                  <p>Choose how you bank</p>
                  <BsArrowRight className='group-hover:translate-x-1 duration-200' />
                </div>
              </div>
              <div className='bg-white py-8 px-4 rounded-2xl'>
                <div className='text-green-400 text-4xl'>
                  <FiPhoneCall />
                </div>
                <h2 className='font-semibold text-xl py-6'>Get in touch</h2>
                <p className='text-gray-500 text-sm font-light'>
                  To speak to one of our helpful staff, get in touch with the
                  right department or to find a branch near you see below
                </p>
                <div className='flex gap-3 text-lg items-center pt-6 text-green-600 cursor-pointer group'>
                  <p>Contact us</p>
                  <BsArrowRight className='group-hover:translate-x-1 duration-200' />
                </div>
                <div className='flex gap-3 text-lg items-center pt-6 text-green-600 cursor-pointer group'>
                  <p>Find a branch</p>
                  <FiArrowUpRight className='group-hover:translate-x-1 duration-200' />
                </div>
                <div className='flex gap-3 text-lg items-center pt-6 text-green-600 cursor-pointer group'>
                  <p>Chat to us</p>
                  <FiArrowUpRight className='group-hover:translate-x-1 duration-200' />
                </div>
                <div className='flex gap-3 text-lg items-center pt-6 text-green-600 cursor-pointer group'>
                  <p>Book a banker</p>
                  <FiArrowUpRight className='group-hover:translate-x-1 duration-200' />
                </div>
              </div>
            </div>

            <div className='sm:text-center md:text-left sm:px-28 md:px-0'>
              <h3 className='font-semibold text-white text-xl sm:text-2xl md:text-3xl py-10'>
                Switch to Nedbank,
                <span className='font-light pl-2'>hassle-free</span>
              </h3>
              <p className='text-white font-light text-sm'>
                From zero to affordable monthly fees, to rewards and benefits,
                get an account that fits into your lifestyle and budget.
              </p>
              <button className="bg-white text-green-700 rounded-md py-3 px-8 my-10 w-full">
                Make the switch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
