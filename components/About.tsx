import React from 'react';
import Image from 'next/image';
import theAgency from '../assets/theAgency.png';

const About = () => {
  return (
    <div className='relative w-full my-12 py-5 h-[100vh] border-t-2 border-black'>
      <div className='w-full my-28 flex justify-center'>
        <Image
          src={theAgency}
          alt=''
          className='flex'
          height={150}
          width={150}
        />
      </div>
      <div className='flex w-full flex-col md:mt-[14rem] bg-black text-white px-2'>
        <div className='text-4xl md:text-7xl font-bold'>
          <span className='text-red-700'>.</span>WHO WE ARE
        </div>
        <div className='text-2xl md:text-5xl font-bold leading-snug mt-[4px] indent-[30vw] my-2'>
          AN INDEPENDENT FASHION AGENCY HELPING BRANDS AND CLIENTS CONNECT
          <span className='text-red-700'>. </span>
          WORKING CLOSELY WITH OUR CLIENTS AND OUR CURATED GLOBAL NETWORK BRANDS
          & FASHION DESIGNERS<span className='text-red-700'>.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
