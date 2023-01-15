import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



function MobileScreenShots() {
  return (
    <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

            <SwiperSlide>
                <div className='m-auto w-[80%]'>
                    <img className='w-[58%] m-auto ' src='images/phone1.png'/>
                </div>
            </SwiperSlide>

            <SwiperSlide className='mb-8'>
                <div className='m-auto w-[80%]'>
                    <img className='w-[58%] m-auto' src='images/phone2.png' />
                </div>
            </SwiperSlide>

        </Swiper>

            <div className='mt-[1em] lg:col-span-1 col-span-2 text-center'>
                <div className='sm:text-left text-center mt-[4em]  m-auto'>

                    <p className='font-nuni sm:ml-8 m-auto my-[10px] font-[700] lg:text-[45px] sm:text-[35px] text-[20px]'>Mobile app available</p>

                    <p className='font-rubi sm:ml-8 m-auto font-[400] lg:w-[100%]  sm:w-[60%] w-[90%] lg:text-[20px] text-[10px] sm:text-[16px]'>Download the Buone app on play store or app store
                     to enjoy our seamless mobile application experience.
                    </p>

                    <div className='flex sm:w-auto w-[60%] mt-8 sm:ml-8 mx-auto'>
                        <img className='lg:w-[30%] sm:m-0 m-auto sm:w-[22%] w-[40%]' src='images/Mobile play store badge.png'  alt='playstore' />
                        <img className='lg:w-[30%] sm:m-0 m-auto sm:w-[22%] w-[40%] ml-[1.5em]' src='images/Mobile app store badge.png' alt='appstore' />
                    </div>

                </div>
            </div>

        <div className='mx-auto mt-8'>
            <img className='w-[58%] m-auto ' src='images/phone3.png' />
        </div>


    </div>
  )
}

export default MobileScreenShots