import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../style/Swiper-1.css';

// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

export default function SwiperCard() {
  return (
    <>
    <div className='container-fluid pt-2 pb-2'>
      <Swiper navigation={true}
        loop={true} // Enable loop
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Enable autoplay
        modules={[Navigation, Autoplay]} // Include the Autoplay module
        className="mySwiper}
      ">
        <SwiperSlide><img src="/images/swip-1.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/swip-2.gif" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/swip-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/swip-4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/swip-5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/swip-6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/swip-7.gif" alt="" /></SwiperSlide>
       
      </Swiper>
      </div>
    </>
  );
}
