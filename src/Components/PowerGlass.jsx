import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../style/Swiper-1.css';
import { Navigation,Autoplay } from 'swiper/modules';
import cardData from '../Data/cardData';
import { Link } from 'react-router-dom';
export default function PowerGlass() {
    const handleImageClick = (index) => {
        localStorage.setItem('clickedImageIndex', cardData[4].images[index]);
      };
  return (
    <>
    <div className='d-flex justify-content-center pt-5 pb-5'>
            <h3>POWER GLASSES</h3>
    </div>
    <div className='container-fluid pt-2 pb-2'>
      <Swiper navigation={true}
        loop={true}
        breakpoints={{
            400: {
             slidesPerView: 2
            },
            568: {
              slidesPerView: 4,
            },
          }}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={{ delay: 2000, disableOnInteraction: false }} 
        modules={[Navigation, Autoplay]}
        className="mySwiper container">
         <SwiperSlide> 
        <div className="card" style={{border: 'none'}}>
            <div className="card-body">
            <img src={cardData[4].images[0]} alt="" />
            <Link to={`/Buy`} onClick={() => handleImageClick(0)}>
            <button className='btn w-75 mt-4 btn-primary cart'>Buy Now</button>
              </Link>
            </div>
        </div>
          </SwiperSlide>
         <SwiperSlide> 
        <div className="card" style={{border: 'none'}}>
            <div className="card-body">
            <img src={cardData[4].images[1]} alt="" />
            <Link to={`/Buy`} onClick={() => handleImageClick(1)}>
            <button className='btn w-75 mt-4 btn-primary cart'>Buy Now</button>
              </Link>
            </div>
        </div>
          </SwiperSlide>
         <SwiperSlide> 
        <div className="card" style={{border: 'none'}}>
            <div className="card-body">
            <img src={cardData[4].images[2]} alt="" />
            <Link to={`/Buy`} onClick={() => handleImageClick(2)}>
            <button className='btn w-75 mt-4 btn-primary cart'>Buy Now</button>
              </Link>
            </div>
        </div>
          </SwiperSlide>
         <SwiperSlide> 
        <div className="card" style={{border: 'none'}}>
            <div className="card-body">
            <img src={cardData[4].images[3]} alt="" />
            <Link to={`/Buy`} onClick={() => handleImageClick(3)}>
            <button className='btn w-75 mt-4 btn-primary cart'>Buy Now</button>
              </Link>
            </div>
        </div>
          </SwiperSlide>
         <SwiperSlide> 
        <div className="card" style={{border: 'none'}}>
            <div className="card-body">
            <img src={cardData[4].images[4]} alt="" />
            <Link to={`/Buy`} onClick={() => handleImageClick(4)}>
            <button className='btn w-75 mt-4 btn-primary cart'>Buy Now</button>
              </Link>
            </div>
        </div>
          </SwiperSlide>
         <SwiperSlide> 
        <div className="card" style={{border: 'none'}}>
            <div className="card-body">
            <img src={cardData[4].images[5]} alt="" />
            <Link to={`/Buy`} onClick={() => handleImageClick(5)}>
            <button className='btn w-75 mt-4 btn-primary cart'>Buy Now</button>
              </Link>
            </div>
        </div>
          </SwiperSlide>
         
        
       
      </Swiper>
      </div>
    </>
  );
}
