import React from 'react'
import fearuresArray from './fearuresArray'
import Headers from '../headers/headers'


function Features() {
  return (
    <div>   

        <Headers header="Our Features" text="he following features are offered on Buone to both users and merchants." />

        <div className='lg:flex xl:w-full  sm:m-8 mx-auto  lg:ml-0 md:ml-8 overflow-x-hidden '>

            <div className='xl:m-auto md:ml-2'>
                <img className='xl:w-[90%] lg:w-[90%] lg:ml-8 sm:m-0 mt-4 mx-auto sm:w-[70%] w-[90%]' src='images/ladybarber.png' alt='ladybabrber' />
            </div>

            <div className='md:ml-2 ml-4'>
                {fearuresArray.map((items)=>{
                   return <div key={items.id} className='flex lg:m-0  mt-8 items-center'>
                            <div>{items.icon}</div>
                            <div className='text-left lg:mt-2 m-auto  xl:w-[648px] lg:w-[500px] sm:w-[80%] w-full  ml-2 '>
                                <p className='font-nuni font-[700] xl:text-[24px] sm:text-[20px] text-[16px] text-[#000]'>{items.name}</p>
                                <p className='font-rubi sm:w-[75%] w-[95%] mt-2 sm:text-[14px] text-[9.56px] text-[#505056]'>{items.content}</p>
                            </div>
                    </div>
                })}
            </div>

        </div>
    </div>
  )
}

export default Features