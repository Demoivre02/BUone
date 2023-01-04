import React from 'react'
import whyArray from './whyarray'

function Reasaon() {
  return (
    <>
    <div className='flex ml-auto w-[90%] mt-[6em] items-center'>

        <div className='text-left w-[682px] mr-8'>
            <p className='font-nuni font-[700] text-[50px]'>Why BUone?</p>
            <p className='font-rubi font-[400] text-[16px] text-[#505056] w-[556px]'> BUone is here to assist businesses to
             operate more efficiently and effectively with highly automatic technology. Its main 
             purpose is to cut down human resource expenses.</p>

            <div className='mt-8'>
                {whyArray.map((items)=>{
                    return <div key={items.id} className='flex items-center mt-4'>
                        <div>{items.icon}</div>

                        <div className='text-left ml-4'>
                            <p className='font-nuni text-[22px]  font-[700] text-[#0E1133]'>{items.name}</p>
                            <p className='font-rubi font-[400] text-[14px] mt-2 text-[#505056]'>{items.content}</p>
                        </div>

                    </div>
                })}
            </div>

        </div>
        
        <div>
            <img className='w-[790px] h-[700px]' src='images/saloon.png' alt='saloon' />

        </div>

        

    </div>



        <div className='w-[806px] mx-auto mt-[7em] flex justify-between items-center '>

            <div className='text-center'>
                <p className='font-mont text-[38px] font-[600] text-[#7446D0]'>9,000+</p>
                <p className='text-[#333333] font-[600] font-mont text-[14px]'>Onboard Users</p>
            </div>

            <div className='text-center'>
                <p className='font-mont text-[38px] font-[600] text-[#7446D0]'>260+</p>
                <p className='text-[#333333] font-[600] font-mont text-[14px]'>B2C & D2C Commerce</p>
            </div>

            <div className='text-center'>
                <p className='font-mont text-[38px] font-[600] text-[#7446D0]'>1.87 Lakh</p>
                <p  className='text-[#333333] font-[600] font-mont text-[14px]'>Bay User Validation</p>
            </div>
        </div>

        </>
  )
}

export default Reasaon