import React, { useEffect } from 'react'
import Headers from '../headers/headers'
import MobileScreenShots from './mobileScreenShots'
import Aos from 'aos'
import 'aos/dist/aos.css'

function ScreenShot() {

    useEffect(()=>{
        Aos.init({duration:1500})
    })

  return (
    <div>
        <Headers header="Screenshots of the application" text="Get a glimpse of the app" />

        <div className='sm:grid hidden grid-cols-2 xl:w-[1100px] w-[90%] m-auto xl:gap-[100px] gap-[50px]'>
            <div data-aos="zoom-in" className='m-auto'>
                <img className='xl:w-[80%] w-[65%] m-auto' src='images/phone1.png' />
            </div>
            <div data-aos="zoom-in" className='m-auto'>
                <img className='xl:w-[80%] w-[65%] m-auto' src='images/phone2.png' />
            </div>
            <div data-aos="zoom-in" className='mt-[2em] lg:col-span-1 col-span-2 text-center'>
                <div className='sm:text-left text-center mt-[4em]  m-auto'>

                    <p className='font-nuni sm:ml-8 m-auto my-[10px] font-[700] lg:text-[45px] text-[35px]'>Mobile app available</p>

                    <p className='font-rubi sm:ml-8 m-auto font-[400] lg:w-[100%]  w-[60%] lg:text-[20px] text-[16px]'>Download the Buone app on play store or app store
                     to enjoy our seamless mobile application experience.
                    </p>

                    <div className='flex  mt-8 ml-8'>
                        <img className='lg:w-[30%] w-[20%]' src='images/Mobile play store badge.png'  alt='playstore' />
                        <img className='lg:w-[30%] w-[20%] ml-[1.5em]' src='images/Mobile app store badge.png' alt='appstore' />
                    </div>

                </div>
            </div>
            <div data-aos="zoom-in" className='m-auto lg:block hidden mt-[2em]'>
                <img className='w-[80%] m-auto' src='images/phone3.png' />
            </div>
        </div>

        <div className='sm:hidden block'>
            <MobileScreenShots/>
        </div>

    </div>
  )
}

export default ScreenShot