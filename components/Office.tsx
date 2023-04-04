import React from 'react';
import Image from 'next/image';
import office from '../assets/office.jpg';
import Link from 'next/link';

export const Office = () => {
  return (
    <div className='relative h-fit w-full py-5 px-3 bg-black text-white'>
      <div className='w-full h-[2px] bg-white'> </div>
      <div className='py-10 flex flex-col'>
        <h1 className='text-5xl md:text-7xl font-bold'>
          Located In The Heart of <br /> Fashion
        </h1>

        <div className='flex my-2 items-end w-full justify-end'>
          <h2 className='text-3xl md:text-5xl font-bold mx-4 lg:mx-10'>
            OFFICE
          </h2>
          <Image src={office} alt='' className='w-[50vw]' />
        </div>
        <h2 className='text-2xl md:text-7xl font-bold flex items-start'>
          LONDON
        </h2>
      </div>
      <div className='w-full h-[2px] bg-white'></div>
      <div className='flex flex-col lg:flex-row justify-between py-10 pb-32 '>
        <p className='text-lg'>
          01 street name <br /> london
          <br /> W1W 7LT
        </p>
        <Link href={'/'} className='text-2xl md:text-3xl lg:text-8xl font-bold'>
          THEAGENCY.COM
        </Link>
      </div>
      <div className='w-full h-[3px] bg-white'></div>
    </div>
  );
};
