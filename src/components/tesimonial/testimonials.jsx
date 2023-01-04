import React from 'react'
import Headers from '../headers/headers'
import testiArray from './testimonialArray'
import Fivestar from './fivestar'

function Testimonials() {
  return (
    <>
        <div className='my-[5em]'>
            <Headers text="See feedbacks from our esteemed customers" header="Customer testimonials"/>

            <div className='grid gap-[20px] p-[20px] w-[1070px]  grid-cols-2 m-auto'>
                {testiArray.map((items)=>{
                    return <div className='w-[500px] mt-4 shadow-[rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)] p-4 m-auto rounded-[4px] shadow-sm'>
                    <div>
                        <Fivestar/>
                    </div>

                    <div className=' text-left  h-[50px]'>
                        <p className='font-rubi text-[15px] text-[#505056] font-400'>{items.text}</p>
                    </div>

                    <div className='flex items-center pt-[1em] '>

                        <img  src={items.image} alt="people" /> 

                        <p className='ml-4 font-rubi font-[600] text-[16px]'>{items.name}</p>

                    </div>

                    </div>
                })}
            </div>
        </div>
    </>
  )
}

export default Testimonials