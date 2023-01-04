import React from 'react'
import Headers from '../headers/headers'

function ScreenShot() {
  return (
    <div>
        <Headers header="Screenshots of the application" text="Get a glimpse of the app" />

        <div className='grid grid-cols-2 w-[1100px] m-auto gap-[20px]'>
            <div className='m-auto'>
                <img className='w-[80%] m-auto' src='images/phone1.png' />
            </div>
            <div className='m-auto'>
                <img className='w-[80%] m-auto' src='images/phone2.png' />
            </div>
            <div className='mt-[2em] text-center'>
                <div className='text-left mt-[4em]  m-auto'>

                    <p className='font-nuni ml-8 my-[10px] font-[700] text-[45px]'>Mobile app available</p>

                    <p className='font-rubi ml-8 font-[400] text-[20px]'>Download the Buone app on play store or app store
                     to enjoy our seamless mobile application experience.
                    </p>

                    <div className='flex mt-8 ml-8'>
                        <img className='w-[30%]' src='images/Mobile play store badge.png'  alt='playstore' />
                        <img className='w-[30%] ml-[1.5em]' src='images/Mobile app store badge.png' alt='appstore' />
                    </div>

                </div>
            </div>
            <div className='m-auto mt-[2em]'>
                <img className='w-[80%] m-auto' src='images/phone3.png' />
            </div>
        </div>

    </div>
  )
}

export default ScreenShot