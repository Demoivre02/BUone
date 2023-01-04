import React from 'react'
import Headers from '../headers/headers'

function Service() {
  return (
    <div className='w-[1050px] mx-auto my-[6em]'>

        <Headers header="Popular services available for you" text="Here are some of the services available on the app" />

       
        <div className='flex justify-between items-center mt-6'>
            <div className='transition-all w-[320px]  hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center border border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/comb.png'/>
            </div>

            <div className='transition-all w-[320px]  hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center border border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/hair-coloring.png' />
            </div>

            <div className=' transition-all  w-[320px] hover:shadow-lg hover:shadow-[#8B41D2] grid place-items-center border border-[#eeeeee] rounded-[32px] h-[300px]'>
                <img src='images/spa.png' />
            </div>
        </div>

        <div className='mt-[4em]'>
            <button className=' transition-all  w-[289px] hover:bg-transparent hover:text-[#552AC1] hover:border border-[#552AC1] py-4 bg-[#A1EBE4] rounded-[11px] font-nuni text-[#552AC1] font-[600] text-[20px]'>Explore over 1500 services</button>
        </div>


    </div>
  )
}

export default Service