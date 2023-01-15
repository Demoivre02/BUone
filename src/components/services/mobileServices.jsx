import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function mobileService() {
  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

        <SwiperSlide>
            <div className='transition-all lg:w-[320px] md:w-[40%] w-[80%] my-2 lg:m-0 m-auto  hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center md:border border-0 border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/comb.png'/>
                <p className='font-nuni font-[500] sm:text-[24px] text-[10px]'>Trend Haircut</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='transition-all lg:w-[320px] md:w-[40%] w-[80%] my-2 lg:m-0 m-auto  hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center md:border border-0 border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/hair-coloring.png' />
                <p className='font-nuni font-[500] sm:text-[24px] text-[10px]'>Hair coloring</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className=' transition-all  lg:w-[320px] md:w-[40%] w-[80%] my-2 lg:m-0 m-auto hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center md:border border-0 border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/spa.png' />
                <p className='font-nuni font-[500] sm:text-[24px] text-[10px]'>Spa</p>
            </div>
        </SwiperSlide>
        
    </Swiper>
    </>
  );
}
