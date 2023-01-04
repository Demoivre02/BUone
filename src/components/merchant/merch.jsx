import React from 'react'


function Merch() {
  return (
    <div style={{background:"url('images/join-us.png')"}} className='bg-[#552AC1] h-[500px] mt-[8em] grid place-items-center bg-center bg-no-repeat'>
        <div>

            <div className='mb-10'>
                <p className='font-nuni text-[32px] font-[700] text-[#fff]'>Join today as a merchant</p>
            </div>

            <button className=' transition-all  hover:bg-transparent hover:text-white hover:border  w-[200px] py-4 bg-[#A1EBE4] rounded-[11px] font-nuni text-[#552AC1] font-[600] text-[20px]'>Get Started now</button>

        </div>
    </div>
  )
}

export default Merch