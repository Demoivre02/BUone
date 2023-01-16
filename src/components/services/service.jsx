import React, { useEffect } from 'react'
import Headers from '../headers/headers'
import MobileService from './mobileServices'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Service() {

    useEffect(()=>{
        Aos.init({duration:1500})
      },[])

  return (
    <div id='services' className='lg:w-[1024px] w-[95%] mx-auto sm:my-[6em] my-[3em]'>

        <Headers header="Popular services available for you" text="Here are some of the services available on the app" />

       
        <div className='lg:flex hidden gap-[3em] justify-between items-center mt-6'>
            <div data-aos="flip-left" className='transition-all lg:w-[320px] w-full  hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center border border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/comb.png'/>
                <p className='font-nuni font-[500] text-[24px]'>Trend Haircut</p>
            </div>

            <div data-aos="flip-left" className='transition-all lg:w-[320px] w-full  hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center border border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/hair-coloring.png' />
                <p className='font-nuni font-[500] text-[24px]'>Hair coloring</p>
            </div>

            <div data-aos="flip-left" className=' transition-all  lg:w-[320px] w-full hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center border border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/spa.png' />
                <p className='font-nuni font-[500] text-[24px]'>Spa</p>
            </div>
        </div>

        <div className='lg:hidden block mt-8'>
            <MobileService/>
        </div>

        <div data-aos="zoom-in-up" className='sm:mt-[4em] mt-4'>
            <button className=' transition-all  sm:w-[289px] w-[191px] hover:bg-transparent hover:text-[#552AC1] hover:border border-[#552AC1] py-4 bg-[#A1EBE4] rounded-[11px] font-nuni text-[#552AC1] font-[600] sm:text-[20px] text-[13px]'>Explore over 1500 services</button>
        </div>

       


    </div>
  )
}

export default Service