import React from 'react'

function Nav() {
  return (
    <div className=' py-4' >

        <div className='  flex justify-between items-center'>

                <div>
                    <img src='images/buonelogo.png' alt='logo' />
                </div>

                <div className='flex justify-evenly w-[60%] items-center'>      
                  <div className=' w-[500px]'>
                      <ul className='flex justify-evenly items-center'>
                          <li className='font-[500] font-poppins text-[14px] cursor-pointer text-[#fff] w-[65px] mx-[1.5em]'>Home</li>
                          <li className='font-[500] font-poppins text-[14px] cursor-pointer text-[#fff] w-[65px] mx-[1.5em]'>Features</li>
                          <li className='font-[500] font-poppins text-[14px] cursor-pointer text-[#fff] w-[65px] mx-[1.5em]'>Solutions</li>
                          <li className='font-[500] font-poppins text-[14px] cursor-pointer text-[#fff] w-[65px] mx-[1.5em]'>Services</li>
                      </ul>
                  </div>


                  <div className='flex justify-evenly items-center'>

                    <div className='w-[120px] h-[53px] mx-4 cursor-pointer flex justify-center items-center bg-transparent rounded-[16px] border border-[#fff]'>
                        <p className='text-[18px] text-white font-[500]'>Log in</p>
                      </div>

                      <div className='w-[120px] h-[53px] mx-4 cursor-pointer flex justify-center items-center bg-[#A1EBE4] rounded-[16px]  '>
                        <p className='text-[18px] text-[#000] font-[500]'>Sign Up</p>
                      </div>

                  </div>

        
                </div>
               
                
        </div>
    </div>
  )
}

export default Nav