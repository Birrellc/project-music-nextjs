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
    w < 768 ? setSlides(1.1) : setSlides(1.5);
  }, []);

  return (
    <div className='relative'>
      <Swiper
        spaceBetween={100}
        slidesPerView={slides}
        grabCursor={true}
        className='w-full h-[50%] md:h-[65%] mt-[40vh] md:mt-[15vh] flex flex-col'
      >
        <SwiperSlide className='flex justify-start flex-col w-fit'>
          <div className='h-[100%] flex items-end'>
            <Image
              alt=''
              src={imageOne}
              className='w-full md:w-[80%] h-[100%] object-contain'
            />
          </div>
          <div className='flex justify-between items-end h-[100%]'>
            <div className='flex flex-col justify-between h-full py-1 px-2'>
              <p className='font'>WORLDWIDE</p>
              <p className='font-bold text-3xl'>
                <span className='text-red-700'>.</span>01
              </p>
            </div>
            <div className='text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none'>
              PARIS
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
