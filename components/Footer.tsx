import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='relative font-neutralFace h-[50vh] md:h-[100vh] px-3 '>
      <div className='hidden lg:block mb-[10vh] border-b-2 border-black'>
        <h1 className='mx-1 font-monument font-semibold py-10 text-[13.2vmax] my-1 leading-none'>
          THE <br /> AGENCY
        </h1>
      </div>
      <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between '>
        <p>FOLLOW US</p>
        <Link href={'https://instagram.com'} className='text-4xl underline'>
          INSTAGRAM
        </Link>
        <Link href={'https://facebook.com'} className='text-4xl underline'>
          FACEBOOK
        </Link>
        <Link href={'https://twitter.com'} className='text-4xl underline'>
          TWITTER
        </Link>
        <Link href={'https://pintrest.com'} className='text-4xl underline'>
          PINTREST
        </Link>
      </div>
      <div className='flex pt-5 flex-col lg:flex-row items-end lg:items-center justify-between'>
        <Link href={'/'}>TOP</Link>
        <Link href={'/'} className='mx-1 font-bold text-[30px]'>
          WORK
        </Link>
        <Link href={'/'} className='mx-1 font-bold text-[30px]'>
          ABOUT
        </Link>
        <Link href={'/'} className='mx-1 font-bold text-[30px]'>
          BRANDS
        </Link>
        <Link href={'/'} className='mx-1 font-bold text-[30px]'>
          OFFICE
        </Link>
      </div>
    </div>
  );
};

export default Footer;
