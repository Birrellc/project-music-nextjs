import React, { useRef } from 'react';
import Image from 'next/image';
import close from '../assets/close-outline.svg';
import menu from '../assets/menu-outline.svg';

const Header = () => {
  return (
    <div>
      <nav className='fixed w-full top-0 left-0 overflow-hidden h-screen-translate-y-[1200px]'>
        <div className='flex items-start justify-between w-[100%] h-fit py-[5px]'>
          <div className='mx-[5px] font-semibold text-[20px] text-red leading-none'>
            CB
          </div>
          <div className='block md:hidden cursor-pointer mx-[5px]'>
            <Image
              src={close}
              alt='close image'
              className='w-10 object-contain invert'
            />
          </div>
        </div>

        <div className='mx-2 my-10 space-y-1 text-white'>
          <span className='overflow-hidden block'>
            <div className='font-bold text-[30px]'>ABOUT</div>
          </span>
          <span className='overflow-hidden block'>
            <div className='font-bold text-[30px]'>WORK</div>
          </span>
          <span className='overflow-hidden block'>
            <div className='font-bold text-[30px]'>PUBLICATIONS</div>
          </span>
          <span className='overflow-hidden block'>
            <div className='font-bold text-[30px]'>OFFICE</div>
          </span>
        </div>
      </nav>

      <nav className='absolute bg-white top-0 py-[5px] h-[10vh] w-[100%] flex justify-between flex-col text-black border-black border-b-2'>
        <div
          id='header'
          className='flex items-start justify-between w-[100%] h-fit'
        >
          <div className='mx[5px] font-semibold text-[30px]'>CB</div>
          <div className='mx-1 md:block hidden font-bold text-[30px]'>
            ABOUT
          </div>
          <div className='mx-1 md:block hidden font-bold text-[30px]'>WORK</div>
          <div className='mx-1 md:block hidden font-bold text-[30px]'>
            PUBLICATIONS
          </div>
          <div className='mx-1 md:block hidden font-bold text-[30px]'>
            OFFICE
          </div>
          <div className='block md:hidden cursor-pointer mx-5'>
            <Image alt='' src={menu} className='w-10 object-contain' />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
