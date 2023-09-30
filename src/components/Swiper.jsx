import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App({swiper}) {
  return (
    <>

      <Swiper
        spaceBetween={30}
        
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Define breakpoints for different screen sizes
          50: {
            slidesPerView: 1, // Change the number of slides per view on screens wider than 640px
          },
          480: {
            slidesPerView: 2, // Change the number of slides per view on screens wider than 768px
          },
          1024: {
            slidesPerView: 4, // Change the number of slides per view on screens wider than 1024px
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper py-[2rem] md:px-[3rem]"
      >
        
        
        
  {
swiper && swiper.map( (ele,index) => (
  <SwiperSlide className='py-[1rem] md:px-[1.2rem]'>
<div className='  w-[50%] md:w-[100%] mx-auto object-cover'>
    <div>
      <img src={ele.photo} className='w-[11rem] h-[11rem]' alt="founder" />
    </div>
    <div className='text-[0.7rem]    py-[0.5rem] '>
      <p className='text-red-600 font-semibold'>{ele.name}</p>
      <p className=''>{ele.designation}</p>
      <p>{ele.role}</p>
      
    </div>
   </div>
   </SwiperSlide>
)

)
  }
   

        
      </Swiper>
     
    </>
  );
}
