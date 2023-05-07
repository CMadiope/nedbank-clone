import React from "react";
import header from "../../public/images/wealth/woman-on-laptop-dark.jpg";
import Image from "next/image";
import { RiHandCoinLine } from "react-icons/ri";
import { BsArrowRight, BsBank, BsBarChartLine } from "react-icons/bs";
import { AiOutlineLock, AiOutlineCheck } from "react-icons/ai";
import { GiCash, GiTakeMyMoney } from "react-icons/gi";
import coffee from "../../public/images/wealth/young-man-holding-coffee-sitting.jpeg";
import tablet from "../../public/images/wealth/woman-looking-at-tablet-smiling.jpeg";
import laptop from "../../public/images/wealth/man-shaking-hands-in-meeting-smiling.jpeg";

const Wealth = () => {
  return (
    <div className='bg-black'>
      <div className='w-full relative bg-black'>
        <Image src={header} alt='header' />

        <div className='bg-black py-10'>
          <div className='sm:absolute sm:top-[30%] text-white md:left-15 '>
            <h1 className='p-8 text-4xl font-bold   md:text-5xl'>
              A wealth expert for every version of you
            </h1>
          </div>
          <div className='py-10 px-6 shadow-2xl bg-[#fafafa] m-8 rounded sm:absolute sm:-bottom-[180px] md:-bottom-[150px]   sm:left-[5%] sm:right-[5%] '>
            <h1 className='text-3xl font-bold pb-6'>
              Connected Wealth lies at the heart of everything we do
            </h1>
            <p className='text-xl text-gray-500 text-justify'>
              Through our professional, objective and globally integrated
              advice, we connect you to the solutions, services and expertise
              that you need to make the most of your money and achieve your
              definition of success.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-black py-10 mt-10 sm:mt-48 text-white'>
        <h3 className='text-center text-2xl font-bold sm:text-3xl md:text-4xl pb-4'>
          We can help you
        </h3>
        <div className='grid sm:grid-cols-3 md:grid-cols-4 p-6 gap-5 sm:px-10 md:px-20'>
          <div className='bg-[#262626] flex justify-between items-center py-5 px-6 rounded-lg group cursor-pointer'>
            <div className='flex items-center gap-3'>
              <RiHandCoinLine className='text-3xl text-green-400' />
              <div>
                <p className='text-lg font-bold'>Borrow</p>
                <span className='text-sm font-light'>
                  Long and short-term loans
                </span>
              </div>
            </div>
            <div>
              <BsArrowRight className='text-xl group-hover:translate-x-2 duration-200' />
            </div>
          </div>
          <div className='bg-[#262626] flex justify-between items-center py-5 px-6 rounded-lg group cursor-pointer'>
            <div className='flex items-center gap-3'>
              <AiOutlineLock className='text-3xl text-green-400' />
              <div>
                <p className='text-lg font-bold'>Protect</p>
                <span className='text-sm font-light'>Get insurance cover</span>
              </div>
            </div>
            <div>
              <BsArrowRight className='text-xl group-hover:translate-x-2 duration-200' />
            </div>
          </div>
          <div className='bg-[#262626] flex justify-between items-center py-5 px-6 rounded-lg group cursor-pointer'>
            <div className='flex items-center gap-3'>
              <BsBank className='text-3xl text-green-400' />
              <div>
                <p className='text-lg font-bold'>Bank</p>
                <span className='text-sm font-light'>
                  Locally and internationally
                </span>
              </div>
            </div>
            <div>
              <BsArrowRight className='text-xl group-hover:translate-x-2 duration-200' />
            </div>
          </div>
          <div className='bg-[#262626] flex justify-between items-center py-5 px-6 rounded-lg group cursor-pointer'>
            <div className='flex items-center gap-3'>
              <BsBarChartLine className='text-3xl text-green-400' />
              <div>
                <p className='text-lg font-bold'>Grow</p>
                <span className='text-sm font-light'>Invest your wealth</span>
              </div>
            </div>
            <div>
              <BsArrowRight className='text-xl group-hover:translate-x-2 duration-200' />
            </div>
          </div>
          <div className='bg-[#262626] flex justify-between items-center py-5 px-6 rounded-lg group cursor-pointer'>
            <div className='flex items-center gap-3'>
              <GiCash className='text-3xl text-green-400' />
              <div>
                <p className='text-lg font-bold'>Structure and transfer</p>
                <span className='text-sm font-light'>Plan for the future</span>
              </div>
            </div>
            <div>
              <BsArrowRight className='text-xl group-hover:translate-x-2 duration-200' />
            </div>
          </div>
          <div className='bg-[#262626] flex justify-between items-center py-5 px-6 rounded-lg group cursor-pointer'>
            <div className='flex items-center gap-3'>
              <GiTakeMyMoney className='text-3xl text-green-400' />
              <div>
                <p className='text-lg font-bold'>Give</p>
                <span className='text-sm font-light'>
                  Sustainable philanthropy
                </span>
              </div>
            </div>
            <div>
              <BsArrowRight className='text-xl group-hover:translate-x-2 duration-200' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-16'>
        <h3 className='text-xl font-semibold text-center sm:text-2xl md:text-3xl'>
          Why partner with Nedbank Private Wealth?
        </h3>
        <div className='grid sm:grid-cols-4 p-8 text-gray-600 gap-4 sm:px-10 md:px-20'>
          <div className='flex items-center gap-3'>
            <AiOutlineCheck className='text-lg' />
            <p>Connected Wealth for every version of you</p>
          </div>
          <div className='flex items-center gap-3'>
            <AiOutlineCheck className='text-lg' />
            <p>A wealth partner committed to your success</p>
          </div>
          <div className='flex items-center gap-3'>
            <AiOutlineCheck className='text-lg' />
            <p>Award-winning private banking and wealth management solutions</p>
          </div>
          <div className='flex items-center gap-3'>
            <AiOutlineCheck className='text-lg' />
            <p>
              Market-leading digital solutions so you can bank, invest and trade
              from anywhere
            </p>
          </div>
        </div>
      </div>
      <div className='bg-white py-10'>
        <h3 className='text-xl font-semibold text-center sm:text-2xl md:text-3xl'>
          Join Nedbank Private Wealth
        </h3>
        <div className='grid sm:grid-cols-3 sm:px-10 md:grid-cols-2 md:px-40 lg:grid-cols-3 lg:px-32 gap-10 pt-10 px-28'>
          <div className='border shadow-2xl rounded-lg px-6 py-8 text-center'>
            <h4 className='pb-4 text-lg font-semibold text-black/80'>
              Connect with an expert
            </h4>
            <p className='text-gray-500'>
              Complete our call-me-back form and one of our expert wealth
              advisers will contact you to start your wealth management journey.
            </p>
          </div>
          <div className='border shadow-2xl rounded-lg px-6 py-8 text-center'>
            <h4 className='pb-4 text-lg font-semibold text-black/80'>
              Explore your options
            </h4>
            <p className='text-gray-500'>
              Our wealth advisers will work closely with you to understand your
              short and long-term goals, identify your wants and needs, and
              evaluate what wealth protection you already have.
            </p>
          </div>
          <div className='border shadow-2xl rounded-lg px-6 py-8 text-center'>
            <h4 className='pb-4 text-lg font-semibold text-black/80'>
              Achieve your goals
            </h4>
            <p className='text-gray-500'>
              Our expert advisers will then connect you to the solutions,
              services and expertise that you need to make the most of your
              money.
            </p>
          </div>
        </div>
      </div>
      <div className='text-center py-10 sm:py-20 md:py-24 text-xl text-white'>
        <h3 className='py-6 sm:py-8 md:py-18 sm:text-2xl md:text-4xl'>
          Ready to join Nedbank Private Wealth?
        </h3>
        <button className='bg-green-400 text-black py-2  rounded-lg px-28'>
          Get in touch
        </button>
      </div>
      <div className='bg-[#fafafa] py-12 flex flex-col gap-8'>
        <div className='grid sm:grid-cols-2'>
          <div>
            <Image src={coffee} alt='/' />
          </div>
          <div className='p-8 sm:py-8 md:px-20 py-24'>
            <h3 className='text-2xl py-4 sm:text-3xl md:text-4xl font-semibold '>
              International banking
            </h3>
            <p className='text-gray-500 sm:text-lg md:text-xl'>
              Diversify your wealth globally with our International banking,
              investing and trading solutions.
            </p>
            <div className='flex gap-2 items-center text-lx sm:text-2xl  pt-4 group'>
              <p>Find out more</p>
              <BsArrowRight className='group-hover:translate-x-2 duration-200' />
            </div>
          </div>
        </div>
        <div className='sm:grid sm:grid-cols-2 flex flex-col-reverse'>
          <div className='p-8 sm:py-8 md:px-20 py-24'>
            <h3 className='text-2xl py-4 sm:text-3xl md:text-4xl font-semibold '>
              An award-winning bank
            </h3>
            <p className='text-gray-500 sm:text-lg md:text-xl'>
              We’re proud of the work we do and the recognition our solutions
              are getting.
            </p>
            <div className='flex gap-2 items-center text-lx sm:text-2xl  pt-4 group'>
              <p>Find out more</p>
              <BsArrowRight className='group-hover:translate-x-2 duration-200' />
            </div>
          </div>
          <div>
            <Image src={tablet} alt='/' />
          </div>
        </div>
        <div className='grid sm:grid-cols-2'>
          <div>
            <Image src={laptop} alt='/' />
          </div>
          <div className='p-8 sm:py-8 md:px-20 py-24'>
            <h3 className='text-2xl py-4 sm:text-3xl md:text-4xl font-semibold '>
              Banking with a personal touch
            </h3>
            <p className='text-gray-500 sm:text-lg md:text-xl'>
              Expert advice can transform your wealth. Find out what our expert
              wealth managers can do for you.
            </p>
            <div className='flex gap-2 items-center text-lx sm:text-2xl  pt-4 group'>
              <p>Find out more</p>
              <BsArrowRight className='group-hover:translate-x-2 duration-200' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wealth;
