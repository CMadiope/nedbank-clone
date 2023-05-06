import React from "react";
import privateWealth from "../../public/images/private/nedbank-private-wealth.jpg";
import privateClient from "../../public/images/private/private-clients-feature.jpg";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Private = () => {
  return (
    <div>
      <div className='bg-white max-md:hidden flex gap-10 pl-44 py-6 text-lg'>
        <h3 className='cursor-pointer hover:border-b-4 border-green-900 pb-3'>
          Private Clients
        </h3>
        <h3 className='cursor-pointer hover:border-b-4 border-green-900'>
          Private Wealth
        </h3>
      </div>
      <div className='bg-[#f2f9f5]'>
        <h1 className='text-center text-3xl md:text-4xl px-10 py-16 font-semibold text-green-950'>
          Welcome to the world of private offerings from Nedbank
        </h1>
        <div className='flex flex-col md:flex-row justify-evenly pb-16 md:px-24 px-10'>
          <div className='px-10 md:text-lg'>
            <h3 className='text-xl md:text-2xl py-5 text-green-950 font-semibold text-center'>
              Private Clients
            </h3>
            <p className='font-light text-gray-500'>
              Are you a specialist in your field, climbing the corporate ladder,
              pursuing entrepreneurial ventures, or simply looking for a
              professional banking service that emphasises convenience, quality
              and flexibility? Private Clients is the answer.
            </p>
            <div className='my-6 bg-white shadow-2xl'>
              <Image src={privateClient} alt='private-client' />
              <div>
                <p className='font-bold px-4 py-6'>
                  Our Private clients solutions are ideally suited for
                  individuals who earn a yearly salary income R750,00 or more,
                  however, anyone can join.
                </p>
                <div className='text-gray-500 p-4'>
                  <p className='pb-5'>We also offer tailored approaches to:</p>
                  <div className='flex gap-2 items-center'>
                    <AiOutlineCheck className='text-lg text-green-500' />
                    <p>Young Professionals and those over 55</p>
                  </div>
                  <div className='flex gap-2 items-center pt-2'>
                    <AiOutlineCheck className='text-lg text-green-500' />
                    <p>Medical professionals</p>
                  </div>
                  <div className='flex gap-2 items-center pt-2 '>
                    <AiOutlineCheck className='text-lg text-green-500' />
                    <p>
                      Non-residents, South Africans living abroad and foreign
                      registered businesses .
                    </p>
                  </div>
                </div>
                <div className='text-xl text-green-600 cursor-pointer group flex items-center gap-3 p-8'>
                  <p>Go to Private Clients</p>
                  <BsArrowRight className='group-hover:translate-x-2 duration-300' />
                </div>
              </div>
            </div>
          </div>
          <div className='px-10 md:text-lg'>
            <h3 className='text-xl md:text-2xl py-5 text-green-950 font-semibold text-center'>
              Private Wealth
            </h3>
            <p className='font-light text-gray-500 '>
              Optimise your private wealth with specialised banking and
              investment services that connect your financial needs through a
              globally integrated offering that is equipped to help you meet
              your short and long-term goals.
            </p>
            <div className='my-6 bg-white shadow-2xl'>
              <Image src={privateWealth} alt='private-client' />
              <div>
                <p className='font-bold px-4 py-6'>
                  Nedbank Private Wealth is suited for individuals with an
                  annual income of more than R2 million or those who have R5
                  million in investable assets.
                </p>
                <div className='text-gray-500 p-4'>
                  <p className='pb-5'>
                    You can trust that our team of experts is readily available
                    to:
                  </p>
                  <div className='flex gap-2 items-center'>
                    <AiOutlineCheck className='text-lg text-green-500' />
                    <p>Unpack your financial objectives</p>
                  </div>
                  <div className='flex gap-2 items-center pt-2'>
                    <AiOutlineCheck className='text-lg text-green-500' />
                    <p>
                      Draw from a wide range of top local and international
                      financial solutions
                    </p>
                  </div>
                  <div className='flex gap-2 items-center pt-2 '>
                    <AiOutlineCheck className='text-lg text-green-500' />
                    <p>
                      Create a tailored, comprehensive wealth-management
                      solution for you
                    </p>
                  </div>
                </div>
                <div className='text-xl text-green-600 cursor-pointer group flex items-center gap-3 p-8'>
                  <p>Go to Private Wealth</p>
                  <BsArrowRight className='group-hover:translate-x-2 duration-300' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Private;
