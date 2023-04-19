import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <nav className='max-w-[1240px] mx-auto flex justify-between items-center p-4'>
        <Link href='/'>
          <h1 className='font-bold text-3xl'>TA</h1>
        </Link>
        {/* Desktop nav */}
        <ul className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>WORK</Link>
          </li>
          <li className='p-4'>
            <Link href='/#about'>ABOUT</Link>
          </li>
          <li className='p-4'>
            <Link href='/#brands'>BRANDS</Link>
          </li>
          <li className='p-4'>
            <Link href='/#office'>OFFICE</Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <div>
          <AiOutlineMenu size={20} />
        </div>
        <ul>
          <li>
            <Link href='/'>WORK</Link>
          </li>
          <li>
            <Link href='/#about'>ABOUT</Link>
          </li>
          <li>
            <Link href='/#brands'>BRANDS</Link>
          </li>
          <li>
            <Link href='/#office'>OFFICE</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
