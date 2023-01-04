import React from 'react'
import fearuresArray from './fearuresArray'
import Headers from '../headers/headers'


function Features() {
  return (
    <div>   

        <Headers header="Our Features" text="he following features are offered on Buone to both users and merchants." />

        <div className='flex w-[90%] m-auto'>

            <div>
                <img src='images/ladybarber.png' alt='ladybabrber' />
            </div>

            <div className='ml-16 '>
                {fearuresArray.map((items)=>{
                   return <div key={items.id} className='flex  items-center'>
                            <div>{items.icon}</div>
                            <div className='text-left mt-8 w-[648px] ml-2 '>
                                <p className='font-nuni font-[700] text-[24px] text-[#000]'>{items.name}</p>
                                <p className='font-rubi w-[75%] mt-2 text-[14px] text-[#505056]'>{items.content}</p>
                            </div>
                    </div>
                })}
            </div>

        </div>
    </div>
  )
}

export default Features