import React, { useRef } from 'react';
import Image from 'next/image';
import close from '../assets/close-outline.svg';
import menu from '../assets/menu-outline.svg';

const Header = () => {
  return (
    <div>
      <div className='absolute bg-black top-0 py-[5px] h-[20vh] w-[100%] flex justify-between flex-col text-white'>
        <nav
          id='header'
          className='flex items-start justify-between w-[100%] h-fit'
        >
          <div className='mx[-5px] mix-blend-difference font-semibold text-[20px] leading-none'>
            CB
          </div>
          <div className='mx-1 md:block hidden mix-blend-difference font-bold text-[30px]'>
            ABOUT
          </div>
          <div className='mx-1 md:block hidden mix-blend-difference font-bold text-[30px]'>
            WORK
          </div>
          <div className='mx-1 md:block hidden mix-blend-difference font-bold text-[30px]'>
            PUBLICATIONS
          </div>
          <div className='mx-1 md:block hidden mix-blend-difference font-bold text-[30px]'>
            OFFICE
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
