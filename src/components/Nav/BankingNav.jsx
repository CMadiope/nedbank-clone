import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import BankingModal from "./BankingModal";
import { useRouter } from "next/router";

const BankingNav = ({ showMenu }) => {
  const [isBankHovering, setIsBankHovering] = useState(false);
  const [isSaveHovering, setIsSaveHovering] = useState(false);
  const [isBorrowHovering, setIsBorrowHovering] = useState(false);
  const [isInsuranceHovering, setIsInsuranceHovering] = useState(false);
  const [isPlanHovering, setIsPlanHovering] = useState(false);
  const [isLearnHovering, setIsLearnHovering] = useState(false);
  const [isContactHovering, setIsContactHovering] = useState(false);
  const router = useRouter();

  const handleBankMouseOver = () => {
    setIsBankHovering(true);
  };

  const handleBankMouseOut = () => {
    setIsBankHovering(false);
  };
  const handleSaveMouseOver = () => {
    setIsSaveHovering(true);
  };

  const handleSaveMouseOut = () => {
    setIsSaveHovering(false);
  };
  const handleBorrowMouseOver = () => {
    setIsBorrowHovering(true);
  };

  const handleBorrowMouseOut = () => {
    setIsBorrowHovering(false);
  };
  const handleInsuranceMouseOver = () => {
    setIsInsuranceHovering(true);
  };

  const handleInsuranceMouseOut = () => {
    setIsInsuranceHovering(false);
  };
  const handlePlanMouseOver = () => {
    setIsPlanHovering(true);
  };

  const handlePlanMouseOut = () => {
    setIsPlanHovering(false);
  };
  const handleLearnMouseOver = () => {
    setIsLearnHovering(true);
  };

  const handleLearnMouseOut = () => {
    setIsLearnHovering(false);
  };
  const handleContactMouseOver = () => {
    setIsContactHovering(true);
  };

  const handleContactMouseOut = () => {
    setIsContactHovering(false);
  };

  return (
    <div
      className={`bg-white md:flex gap-8 hidden  pl-40 py-4 ${
        showMenu ? "md:hidden" : ""
      }
      ${router.pathname == "/private" ? "md:hidden" : ""}
      ${router.pathname == "/business" ? "md:hidden" : ""}
      `}
    >
      <div
        className='flex items-center gap-1 text-gray-500  cursor-pointer hover:border-b-4 transition border-green-900 pb-4 relative'
        onMouseOver={handleBankMouseOver}
        onMouseOut={handleBankMouseOut}
      >
        <p className='text-black'>Bank</p>
        <AiFillCaretDown />
        {isBankHovering && (
          <BankingModal title='Manage your money' link='Accounts' />
        )}
      </div>
      <div
        className='flex items-center gap-1 text-gray-500  cursor-pointer hover:border-b-4 transition border-green-900 pb-4 relative'
        onMouseOver={handleSaveMouseOver}
        onMouseOut={handleSaveMouseOut}
      >
        <p className='text-black'>Save & Invest </p>
        <AiFillCaretDown />
        {isSaveHovering && (
          <BankingModal title='Grow your money' link='Accounts' />
        )}
      </div>
      <div
        className='flex items-center gap-1 text-gray-500  cursor-pointer hover:border-b-4 transition border-green-900 pb-4 relative'
        onMouseOver={handleBorrowMouseOver}
        onMouseOut={handleBorrowMouseOut}
      >
        <p className='text-black'>Borrow </p>
        <AiFillCaretDown />
        {isBorrowHovering && (
          <BankingModal title='Achieve your goals' link='Personal loans' />
        )}
      </div>
      <div
        className='flex items-center gap-1 text-gray-500  cursor-pointer hover:border-b-4 transition border-green-900 pb-4 relative'
        onMouseOver={handleInsuranceMouseOver}
        onMouseOut={handleInsuranceMouseOut}
      >
        <p className='text-black'>Insurance </p>
        <AiFillCaretDown />
        {isInsuranceHovering && (
          <BankingModal title='Protect what you love' link='Personal loans' />
        )}
      </div>
      <div
        className='flex items-center gap-1 text-gray-500  cursor-pointer hover:border-b-4 transition border-green-900 pb-4 relative'
        onMouseOver={handlePlanMouseOver}
        onMouseOut={handlePlanMouseOut}
      >
        <p className='text-black'>Plan </p>
        <AiFillCaretDown />
        {isPlanHovering && (
          <BankingModal title='Plan your wealth' link='Financial planning' />
        )}
      </div>
      <div
        className='flex items-center gap-1 text-gray-500  cursor-pointer hover:border-b-4 transition border-green-900 pb-4 relative'
        onMouseOver={handleLearnMouseOver}
        onMouseOut={handleLearnMouseOut}
      >
        <p className='text-black'>Learn </p>
        <AiFillCaretDown />
        {isLearnHovering && (
          <BankingModal title='Financial guidance' link='blog' />
        )}
      </div>
      <div
        className='flex items-center gap-1 text-gray-500  cursor-pointer hover:border-b-4 transition border-green-900 pb-4 relative'
        onMouseOver={handleContactMouseOver}
        onMouseOut={handleContactMouseOut}
      >
        <p className='text-black'>Contact us </p>
        <AiFillCaretDown />
        {isContactHovering && (
          <BankingModal title='Get in touch' link='Talk to us' />
        )}
      </div>
    </div>
  );
};

export default BankingNav;
