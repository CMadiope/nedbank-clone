import Image from "next/image";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import smallBusiness from "../../public/images/business/small-business-main.jpg";
import chess from "../../public/images/business/ncb-chess-board-split page.png";

const Business = () => {
  return (
    <div>
      <div className='bg-white max-md:hidden flex gap-10 pl-44 py-6 text-lg'>
        <h3 className='cursor-pointer hover:border-b-4 border-green-900 pb-3'>
          Small Business Services
        </h3>
        <h3 className='cursor-pointer hover:border-b-4 border-green-900'>
          Commercial Banking
        </h3>
      </div>
      <div className='max-sm:py-6  text-center px-20'>
        <h3 className='font-semibold text-xl sm:text-2xl md:text-3xl py-4'>
          Banking solutions for startups to big businesses
        </h3>
        <p className='text-gray-600 pb-8'>
          Our dedicated relationship teams are able to guide and offer you
          expert advice on a range of solutions best suited to help your
          business reach its goals.
        </p>
      </div>
      <div className='bg-[#f2f9f5] flex flex-col md:flex-row justify-evenly py-16 md:px-24 sm:px-10'>
        <div className='px-10 md:text-lg'>
          <h3 className='text-xl md:text-2xl py-5 text-green-950 font-semibold text-center'>
            Small Business Services
          </h3>
          <p className='font-light text-gray-500'>
            A cost-effective, streamlined banking offering for startups and
            established small businesses.
          </p>
          <div className='my-6 bg-white shadow-2xl'>
            <Image src={smallBusiness} alt='private-client' />
            <div>
              <p className='font-bold px-4 py-6'>
                Ideally suited for businesses with an annual profit turnover of
                us to R30 million.
              </p>
              <div className='text-gray-500 p-4'>
                <p className='pb-5'>
                  With over 500 small business bankers in over 200 locations,
                  you get access to the following:
                </p>
                <div className='flex gap-2 items-center'>
                  <AiOutlineCheck className='text-lg text-green-500' />
                  <p>
                    A dedicated relationship banker, who will guide and assist
                    you.
                  </p>
                </div>
                <div className='flex gap-2 items-center pt-2'>
                  <AiOutlineCheck className='text-lg text-green-500' />
                  <p>
                    A choice of digital channels to manage your personal and
                    business ﬁnances securely.
                  </p>
                </div>
                <div className='flex gap-2 items-center pt-2 '>
                  <AiOutlineCheck className='text-lg text-green-500' />
                  <p>Tailored credit and preferential investment rates.</p>
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
            Commercial Banking
          </h3>
          <p className='font-light text-gray-500'>
            A tailored commercial banking experience for businesses that are
            looking for sophisticated and integrated banking solutions.
          </p>
          <div className='my-6 bg-white shadow-2xl'>
            <Image src={chess} alt='private-client' />
            <div>
              <p className='font-bold px-4 py-6'>
                Ideally suited for medium, large and mi-corporate businesses
                with annual turnovers between R30 million and R2,5 billion.
              </p>
              <div className='text-gray-500 p-4'>
                <p className='pb-5'>
                  Through a dedicated banking relationship, you can:
                </p>
                <div className='flex gap-2 items-center'>
                  <AiOutlineCheck className='text-lg text-green-500' />
                  <p>
                    Gain access to our team of experts who can help you achieve
                    your daily operational and longer-term growth objectives.
                  </p>
                </div>
                <div className='flex gap-2 items-center pt-2'>
                  <AiOutlineCheck className='text-lg text-green-500' />
                  <p>
                    Get a full range of innovative and sophisticated commercial
                    banking solutions.
                  </p>
                </div>
                <div className='flex gap-2 items-center pt-2 '>
                  <AiOutlineCheck className='text-lg text-green-500' />
                  <p>
                    Access our world-class digital platform to perform
                    transactions securely, safely and eﬃciently.
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
      </div>
    </div>
  );
};

export default Business;
