import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
  return (

<div className='bg-[#31156A] p-2 mt-[6em] overflow-x-hidden '>

    <div className='w-[90%] m-auto my-[5em]'>
        <div className='sm:flex grid grid-cols-2 sm:gap-0  gap-[20px] justify-between '>

                <div className=''>
                    <p className='font-jarkta font-[700] lg:text-[35px] sm:text-[25px] text-[20px] sm:w-auto w-full text-white'>Sign up today</p>
                </div>

                <div>
                    <ul>
                        <p className='font-jarkta font-[900] sm:text-[14px] text-[13px] text-white'>Services</p>
                        <div className='sm:text-left text-center'>
                            <li className='font-[400] my-4 cursor-pointer hover:underline opacity-90 sm:text-[14px] text-[11px] text-white'>Features</li>
                            <li className='font-[400] my-4 cursor-pointer hover:underline opacity-90 sm:text-[14px] text-[11px] text-white'>Works</li>
                            <li className='font-[400] my-4 cursor-pointer hover:underline opacity-90 sm:text-[14px] text-[11px] text-white'>Career</li>
                        </div>
                    </ul>
                </div>

                <div>
                    <ul>
                        <p className='font-jarkta font-[900] text-left sm:text-[14px] text-[13px] text-white'>About</p>
                        <div className='text-left'>
                            <li className='font-[400] my-4 cursor-pointer hover:underline opacity-90 sm:text-[14px] text-[11px] text-white'>Our Story</li>
                            <li className='font-[400] my-4 cursor-pointer hover:underline opacity-90 sm:text-[14px] text-[11px] text-white'>Benefits</li>
                            <li className='font-[400] my-4 cursor-pointer hover:underline opacity-90 sm:text-[14px] text-[11px] text-white'>Privacy Policy</li>
                        </div>
                    </ul>
                </div>
                
                
                
            <div className='sm:my-0 my-auto'>
                <button className='transition-all sm:w-[170px] w-[120px] bg-[#fff] rounded-[8px]
                 sm:py-4 py-2 font-nuni font-[600] text-[16px] hover:bg-transparent hover:border hover:text-white'>
                    Join us
                </button>
            </div>
        </div>

        <div className='my-8'>
            <hr/>
        </div>

        


        <div className='my-[2em]'>

            <div className='text-left my-8'>
                <p className='font-nuni sm:text-[20px] text-[15px] font-[700] text-white'>About BUone</p>
            </div>

           
            <div className='sm:w-[390px] w-[90%] text-left'>
                <p className='font-rubi font-[400] sm:text-[13px] text-[10px] text-white'>BUone is an all-in-one set
                    of tools designed to rapidly
                    set up and scale clients for
                    freelancers and business owners
                    to sell services.
                </p>
            </div>
            

            <div className='flex mt-8 w-[200px] justify-between'>
                <Icon icon="mdi:twitter" color="white" width="25" />
                <Icon icon="ri:facebook-fill" color="white" width="25" />
                <Icon icon="mdi:instagram" color="white" width="25" />
                <Icon icon="mdi:github" color="white" width="25" />
            </div>

        </div>
    </div>

</div>

  )
}

export default Footer