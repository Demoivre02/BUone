import React from 'react'
import Headers from '../headers/headers'
import testiArray from './testimonialArray'
import Fivestar from './fivestar'

function Testimonials() {
  return (
    <>
        <div className='my-[5em]'>
            <Headers text="See feedbacks from our esteemed customers" header="Customer testimonials"/>

            <div className='lg:grid gap-[20px] lg:p-[20px] px-[10px]  lg:w-[1070px] sm:w-[90%] w-[98%]  grid-cols-2 md:m-auto'>
                {testiArray.map((items)=>{
                    return <div className='sm:w-[500px] w-[95%] mt-4 shadow-[rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)] sm:p-4 p-2 md:m-auto  rounded-[4px] shadow-sm'>
                    <div>
                        <Fivestar/>
                    </div>

                    <div className=' text-left  h-[50px]'>
                        <p className='font-rubi sm:text-[15px] text-[9.3px] text-[#505056] font-400'>{items.text}</p>
                    </div>

                    <div className='flex items-center sm:pt-[1em] '>

                        <img className='sm:w-auto sm:h-auto w-[31.85px] h-[31.85px]' src={items.image} alt="people" /> 

                        <p className='ml-4 font-rubi font-[600] sm:text-[16px] text-[9.3px]'>{items.name}</p>

                    </div>

                    </div>
                })}
            </div>
        </div>
    </>
  )
}

export default Testimonials