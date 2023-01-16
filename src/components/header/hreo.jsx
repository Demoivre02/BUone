import {React,useEffect} from 'react'
import Nav from './nav'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Hero() {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <>
        <div id='home' className=' bg-[#552AC1] lg:h-[100vh] overflow-y-hidden  '>
          
            <div className='w-[90%] isolate relative m-auto '>

                <div className='absolute z-[-1]'>
                  <img className='w-[70%]' src='images/Group.png' />
                </div>

              <Nav/>

              <div className='lg:flex z-[1] justify-between items-center'>
                
                  <div data-aos="fade-left" className='text-left lg:mt-[1em] md:mt-[4em] mt-4 lg:text-left md:m-auto text-center m-auto '>
                      <div className='my-[1em] md:text-left text-left '> 
                        <small className='font-[400]  font-nuni text-[14px] text-white'>
                          Welcome To BUone
                        </small>
                      </div>


                      <div className='xl:w-[105%]  lg:w-[95%] w-[100%] md:m-auto m-0 mb-4'>

                        <p className=' font-[500] font-nuni xl:text-[45px] lg:text-[30px] text-left md:text-[28px] text-[24px] text-white'>
                          Buone is the world’s 1st AI-XR B2B
                          enabled digital platform with co-working
                          space for beauty industry. 
                        </p>

                      </div>

                      <div className='xl:w-[668px] sm:w-[450px] w-[90%] md:m-auto text-left  lg:mt-[1em] md:my-[2em] my-4 h-[72px]'>
                        <p className='xl:text-[20px] lg:text-[16px] md:text-[20px] text-[16px] font-[400] text-white'>
                        Buone is a platform where individuals can get jobs,
                        work and hire professionals.
                        </p>
                      </div>

                      <div className='lg:translate-x-[-4%]  '>
                        <img className='md:w-[40%] w-[80%] lg:m-0 m-auto' src='images/users.png' alt='users' /> 
                      </div>

                      <div className='md:w-[200px] md:translate-y-[-25%] w-[154px] md:h-[53px] h-[47px] lg:m-0 m-auto cursor-pointer flex justify-center items-center bg-[#A1EBE4] rounded-[11px] '>
                        <p className='text-[#552AC1] font-nuni'>Get Started now</p>
                      </div>

                  </div>

                    <div className='md:m-0 m-auto'>
                      <img className='md:translate-x-[8%]  max-w-[100%] md:mr-[8em] m-auto mt-[2em] ' src='images/herolady.png' alt='hero-lady' />
                    </div>
              </div>

            </div>  
        </div>
    </>
  )
}

export default Hero