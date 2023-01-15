import React from 'react'
import whyArray from './whyarray'
import Headers from '../headers/headers'

function Reasaon() {
  return (
    <>
    <div className='lg:flex lg:ml-auto sm:ml-8 mx-auto  w-[90%] sm:mt-[6em] mt-[4em] items-center '>

        <div className='text-left lg:w-[682px] w-[100%] mr-8'>


            <div className='my-[1em] sm:text-left text-center lg:w-auto lg:my-[4em] md:w-[70%]'>
                <p className='text-[#181818] font-nuni lg:text-[40px] md:text-[30px] text-[20px] md:font-[600] font-[900]'>
                Why BUone?
                </p>
                <p className='text-[#5A5A5A] font-nuni lg:text-[16px] sm:text-[14px] text-[12px] font-[400]'>BUone is here to assist businesses to
                operate more efficiently and effectively with highly automatic technology. Its main 
                purpose is to cut down human resource expenses.</p>
            </div>
           

            <div className='mt-8 mr-8'>
                {whyArray.map((items)=>{
                    return <div key={items.id} className='flex   items-center mt-4'>
                        <div>{items.icon}</div>

                        <div className='text-left lg:w-auto w-[75%] ml-4'>
                            <p className='font-nuni sm:text-[22px] text-[16px]  font-[700] text-[#0E1133]'>{items.name}</p>
                            <p className='font-rubi font-[400] sm:text-[14px] text-[9.65px] mt-2 text-[#505056]'>{items.content}</p>
                        </div>

                    </div>
                })}
            </div>

        </div>
        
        <div className='lg:mt-o mt-16'>
            <img className='lg:w-[100%] sm:w-[70%] xl:w-auto ' src='images/saloon.png' alt='saloon' />

        </div>

        

    </div>



        <div className='xl:w-[806px] w-[80%] mx-auto sm:mt-[7em] mt-[2em] flex justify-between items-center '>

            <div className='text-center'>
                <p className='font-mont sm:text-[38px] text-[15px] font-[600] text-[#7446D0]'>9,000+</p>
                <p className='text-[#333333] font-[600] font-mont sm:text-[14px] text-[6px]'>Onboard Users</p>
            </div>

            <div className='text-center'>
                <p className='font-mont sm:text-[38px] text-[15px] font-[600] text-[#7446D0]'>260+</p>
                <p className='text-[#333333] font-[600] font-mont sm:text-[14px] text-[6px]'>B2C & D2C Commerce</p>
            </div>

            <div className='text-center'>
                <p className='font-mont sm:text-[38px] text-[15px] font-[600] text-[#7446D0]'>1.87 Lakh</p>
                <p  className='text-[#333333] font-[600] font-mont sm:text-[14px] text-[6px]'>Bay User Validation</p>
            </div>
        </div>

        </>
  )
}

export default Reasaon