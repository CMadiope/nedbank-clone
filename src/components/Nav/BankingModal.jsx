import Link from "next/link";
import React from "react";

const BankingModal = ({ title, link }) => {
  return (
    <div className='border text-left py-6 pr-16 pl-8 bg-white shadow-xl absolute z-20 top-12 m-auto w-[250px] rounded-lg'>
      <h3 className='font-bold text-black pb-2'>{title}</h3>
      <div className='flex flex-col gap-3 py-2 hover:bg-gray-200 '>
        <Link href={`/${link}`} className='text-gray-500 cursor-pointer w-full'>
          {link}
        </Link>
      </div>
    </div>
  );
};

export default BankingModal;
