import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className='py-10 px-4 md:hidden border-b'>
      <div
        className='cursor-pointer flex items-center justify-between'
        onClick={toggle}
      >
        <h2 className='text-xl font-semibold'>{props.label}</h2>
        <div className='text-lg text-green-600'>
          {open ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      <div className={`bg-[#fafafa]  `}>{open && <div>{props.children}</div>}</div>
    </div>
  );
};

export default Collapsible;
