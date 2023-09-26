import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App({carousalImg}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper h-[80vh]"
      >
        {
          carousalImg&&carousalImg.map( (ele,ind) => (
            <SwiperSlide key={ind}>
              
                <img src={ele} alt="" className='h-[80vh] w-[100vw] object-cover'/>
              
              </SwiperSlide>
          ))
        }
        
        
      </Swiper>
    </>
  );
}
