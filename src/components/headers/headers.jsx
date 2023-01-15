import React from 'react'


function Headers({header,text}) {

  return (
    <div className='my-[1em] lg:w-auto lg:my-[4em] md:w-[70%]'>
        <p className='text-[#181818] font-nuni lg:text-[40px] md:text-[30px] text-[20px] md:font-[600] font-[900]'>{header}</p>
        <p className='text-[#5A5A5A] sm:w-auto w-[80%] sm:m-0 m-auto font-nuni lg:text-[16px] sm:text-[14px] text-[8px] font-[400]'>{text}</p>
    </div>

  )
}

export default Headers