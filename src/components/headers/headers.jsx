import React from 'react'

function Headers({header,text}) {
  return (
    <div className=' my-[4em]'>
        <p className='text-[#181818] font-nuni text-[40px] font-600'>{header}</p>
        <p className='text-[#5A5A5A] font-nuni text-[16px] font-[400]'>{text}</p>
    </div>

  )
}

export default Headers