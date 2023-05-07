import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { AiOutlineLock, AiFillCaretDown } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import OnClickMenu from "./OnClickMenu";

const Navbar = ({ showMenu, handleMenu }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const selectValue = () => {};

  return (
    <nav className={` ${showMenu ? "bg-green-800" : "md:bg-[#f2f9f5]"} `}>
      <div className='flex items-center justify-between pl-6 md:pl-20'>
        <div className={`flex gap-6 items-center `}>
          <Link href='/'>
            <Image src='/images/logo.svg' alt='logo' width={40} height={30} />
          </Link>
          <div
            className={`md:hidden flex items-center gap-1 cursor-pointer relative ${
              showMenu ? "hidden" : "flex"
            }`}
            onClick={handleModal}
          >
            <h3 className=' uppercase font-bold'>Personal</h3>
            <AiFillCaretDown size={15} />
          </div>

          {/* modal */}
          {showModal && (
            <div className='border text-left py-6 pr-16 pl-8 bg-white shadow-xl absolute top-12 left-24 md:hidden transition z-20'>
              <ul
                className='flex flex-col text-sm gap-2 font-light  '
                ref={modalRef}
              >
                <li>
                  <Link href='/'>Personal</Link>
                </li>
                <li>
                  <Link href='/private'>Private</Link>
                </li>
                <li>
                  <Link href='/wealth'>Wealth</Link>
                </li>
                <li>
                  <Link href='/business'>Business</Link>
                </li>
                <li>
                  <Link href='/corporate'>corporate</Link>
                </li>
              </ul>
            </div>
          )}

          <div className={`${showMenu ? "hidden" : "block"}`}>
            <ul className='md:flex gap-6 hidden font-semibold'>
              <li>
                <Link href='/'>Personal</Link>
              </li>
              <li>
                <Link href='/private'>Private</Link>
              </li>
              <li>
                <Link href='/wealth'>Wealth</Link>
              </li>
              <li>
                <Link href='/business'>Business</Link>
              </li>
              <li>
                <Link href='/corporate'>corporate</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div
            className={`text-green-800 cursor-pointer flex items-center gap-3 ${
              showMenu ? "hidden" : "flex"
            }`}
          >
            <span className='text-black hidden md:block text-md'>Log in</span>
            <AiOutlineLock size={30} />
          </div>
          <div
            className='p-3 bg-green-800 text-white cursor-pointer'
            onClick={handleMenu}
          >
            {showMenu ? <RxCross1 size={40} /> : <BiMenuAltRight size={40} />}
          </div>
        </div>
      </div>
      {showMenu && <OnClickMenu />}
    </nav>
  );
};

export default Navbar;
