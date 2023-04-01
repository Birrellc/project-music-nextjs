import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import imageOne from '../assets/imageOne.png';
import imageTwo from '../assets/imageTwo.png';
import imageThree from '../assets/imageThree.png';
import imageFour from '../assets/imageFour.png';
import imageFive from '../assets/imageFive.png';
import imageSix from '../assets/imageSix.png';

const Slider = () => {
  const [slides, setSlides] = useState(1);
  useEffect(() => {
    let w = window.innerWidth;
    w < 768 ? setSlides(1.01) : setSlides(1.5);
  }, []);

  return (
    <div className='relative'>
      <Swiper
        spaceBetween={100}
        slidesPerView={slides}
        grabCursor={true}
        className='w-full h-[50%] md:h-[65%] mt-[20vh] md:mt-[15vh] flex flex-col'
      >
        <SwiperSlide className='flex justify-start flex-col w-fit'>
          <div className='h-[100%] flex items-end'>
            <Image
              alt=''
              src={imageOne}
              className='w-full md:w-[80%] h-[100%] object-contain'
            />
          </div>
          <div className='flex justify-between items-start md:items-end h-[100%]'>
            <div className='flex flex-col justify-between h-full bg-black text-white py-1 px-2'>
              <p className='font-bold text-3xl'>
                <span className='text-red-700'>.</span>01
              </p>
            </div>
            <div className='text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] bg-black text-white'>
              PARIS
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-end flex-col-reverse w-fit'>
          <div className='flex justify-between items-end md:items-start h-[100%]'>
            <div className='flex flex-col justify-between h-full bg-black text-white py-1 px-2'>
              <p className='font-bold text-3xl'>
                <span className='text-red-700'>.</span>02
              </p>
            </div>
            <div className='text-5xl font-bold md:text-7xl lg:text-9xl bg-black text-white'>
              LONDON
            </div>
          </div>
          <div className='h-[100%] flex items-end'>
            <Image
              alt=''
              src={imageTwo}
              className='w-full md:w-[80%] h-[100%] object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-start flex-col w-fit'>
          <div className='h-[100%] flex items-end'>
            <Image
              alt=''
              src={imageThree}
              className='w-full md:w-[80%] h-[100%] object-contain'
            />
          </div>
          <div className='flex justify-between items-start md:items-end h-[100%]'>
            <div className='flex flex-col justify-between h-full py-1 px-2 bg-black text-white'>
              <p className='font-bold text-3xl'>
                <span className='text-red-700'>.</span>03
              </p>
            </div>
            <div className='text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] bg-black text-white'>
              MILAN
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-end flex-col w-fit'>
          <div className='flex justify-between items-end md:items-start h-[100%]'>
            <div className='flex flex-col justify-between h-full py-1 px-2 bg-black text-white'>
              <p className='font-bold text-3xl'>
                <span className='text-red-700'>.</span>04
              </p>
            </div>
            <div className='text-5xl font-bold md:text-7xl lg:text-9xl bg-black text-white'>
              MADRID
            </div>
          </div>
          <div className='h-[100%] flex items-end'>
            <Image
              alt=''
              src={imageFour}
              className='w-full md:w-[80%] h-[100%] object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-start flex-col w-fit'>
          <div className='h-[100%] flex items-end'>
            <Image
              alt=''
              src={imageFive}
              className='w-full md:w-[80%] h-[100%] object-contain'
            />
          </div>
          <div className='flex justify-between items-start md:items-end h-[100%]'>
            <div className='flex flex-col justify-between h-full py-1 px-2 bg-black text-white'>
              <p className='font-bold text-3xl'>
                <span className='text-red-700'>.</span>05
              </p>
            </div>
            <div className='text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] bg-black text-white'>
              TOKYO
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-end flex-col w-fit'>
          <div className='flex justify-between items-end md:items-start h-[100%]'>
            <div className='flex flex-col justify-between h-full py-1 px-2 bg-black text-white'>
              <p className='font-bold text-3xl'>
                <span className='text-red-700'>.</span>06
              </p>
            </div>
            <div className='text-5xl font-bold md:text-7xl lg:text-9xl bg-black text-white'>
              BERLIN
            </div>
          </div>
          <div className='h-[100%] flex items-end'>
            <Image
              alt=''
              src={imageSix}
              className='w-full md:w-[80%] h-[100%] object-contain'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
