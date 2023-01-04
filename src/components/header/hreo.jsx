import React from 'react'
import Nav from './nav'

function Hero() {
  return (
    <>
        <div className=' bg-[#552AC1] h-[100vh] overflow-y-hidden  '>
          
            <div className='w-[90%] isolate relative m-auto '>

                <div className='absolute z-[-1]'>
                  <img className='w-[70%]' src='images/Group.png' />
                </div>

              <Nav/>

              <div className='flex z-[1] justify-between items-center'>
                
                  <div className='text-left  mt-[1em] '>

                 

                      <div className='my-[1em]'> 
                        <small className='font-[400]  font-nuni text-[14px] text-white'>
                          Welcome To BUone
                        </small>
                      </div>


                      <div className='w-[105%] mb-4'>

                        <p className=' font-[500] font-nuni text-[45px] text-white'>
                          Buone is the world’s 1st AI-XR B2B
                          enabled digital platform with co-working
                          space for beauty industry. 
                        </p>

                      </div>

                      <div className='w-[688px] mt-[1em] h-[72px]'>
                        <p className='text-[20px] font-[400] text-white'>
                        Buone is a platform where individuals can get jobs,
                        work and hire professionals.
                        </p>
                      </div>

                      <div className='translate-x-[-4%]'>
                        <img className='w-[40%]' src='images/users.png' alt='users' /> 
                      </div>

                      <div className='w-[200px] h-[53px]  cursor-pointer flex justify-center items-center bg-[#A1EBE4] rounded-[11px] '>
                        <p>Get Started</p>
                      </div>

                    </div>

                    <div className=''>
                      <img className='translate-x-[8%]  max-w-[100%] mr-[8em] mt-[2em]' src='images/herolady.png' alt='hero-lady' />
                    </div>
                    
                      

                     
                    

              </div>

            </div>  
        </div>
    </>
  )
}

export default Hero