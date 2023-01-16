import {React,useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Merch() {

  useEffect(()=>{
    Aos.init({duration:1500})
  },[])

  return (
    <div  style={{background:"url('images/join-us.png')"}} className='bg-[#552AC1] sm:h-[500px] h-[290px] sm:mt-[8em] mt-[2em] grid place-items-center bg-center bg-no-repeat'>
        <div>

            <div className='sm:mb-10 mb-4'>
                <p className='font-nuni sm:text-[32px] text-[20px] font-[700] text-[#fff]'>Join today as a merchant</p>
            </div>

            <button data-aos="zoom-in-up" className=' transition-all  hover:bg-transparent hover:text-white hover:border  sm:w-[200px] w-[154px] py-4 bg-[#A1EBE4] rounded-[11px] font-nuni text-[#552AC1] font-[600] sm:text-[20px] text-[14px]'>Get Started now</button>

        </div>
    </div>
  )
}

export default Merch