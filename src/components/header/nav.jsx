import React, { useEffect } from 'react'
import DrawerNav from './drawer'


function Nav() {



  return (
    <div className=' py-4' >

        <div className='  flex justify-between items-center'>

                <div>
                    <img src='images/buonelogo.png' alt='logo' />
                </div>

                <div className='md:flex hidden justify-evenly lg:w-[60%] w-[70%] items-center'>      
                  <div className=' lg:w-[500px] w-auto'>
                      <ul className='flex justify-evenly items-center'>
                      
                          <li className='font-[500] font-poppins lg:text-[14px] text-[12px] cursor-pointer text-[#fff] lg:w-[65px] w-[60px] lg:mx-[1.5em] mx-[12px]'>
                            <a href='#home'>Home</a>
                            </li>

                          <li className='font-[500] font-poppins lg:text-[14px] text-[12px] cursor-pointer text-[#fff] lg:w-[65px] w-[60px] lg:mx-[1.5em] mx-[12px]'>
                            <a href='#features'>Features</a>
                          </li>

                          <li className='font-[500] font-poppins lg:text-[14px] text-[12px] cursor-pointer text-[#fff] lg:w-[65px] w-[60px] lg:mx-[1.5em] mx-[12px]'>
                            <a href='#solutions'>Solutions</a>
                          </li>

                          <li className='font-[500] font-poppins lg:text-[14px] text-[12px] cursor-pointer text-[#fff] lg:w-[65px] w-[60px] lg:mx-[1.5em] mx-[12px]'>
                            <a href='#services'>services</a>
                          </li>

                      </ul>
                  </div>


                  <div className='flex justify-evenly items-center'>

                    <div className='xl:w-[120px] w-[100px] lg:h-[53px] h-[45px] lg:mx-4 mx-2 cursor-pointer flex justify-center items-center bg-transparent rounded-[16px] border border-[#fff]'>
                        <p className='lg:text-[18px] text-[16px] text-white font-[500]'>Log in</p>
                      </div>

                      <div className='xl:w-[120px] w-[100px] lg:h-[53px] h-[45px] lg:mx-4 mx-2 cursor-pointer flex justify-center items-center bg-[#A1EBE4] rounded-[16px]  '>
                        <p className='lg:text-[18px] text-[16px] text-[#000] font-[500]'>Sign Up</p>
                      </div>

                  </div>

                </div>

        <div className='md:hidden block'>
          <DrawerNav/>
        </div>

        </div>

       

    </div>
  )
}

export default Nav