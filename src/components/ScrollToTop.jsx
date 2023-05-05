import React, {useEffect} from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const ScrollToTop = () => {

  // useEffect(()=>{
  //   window.scrollTo({top:0, left:0, behavior:'smooth'})
  // },[])

  return (
    <div
      className='text-4xl cursor-pointer'
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <BsFillArrowUpCircleFill />
    </div>
  );
}

export default ScrollToTop