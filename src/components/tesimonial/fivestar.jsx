import React from 'react'
import { Icon } from '@iconify/react';

function Fivestar() {
  return (
    <>
    <div className='w-[100px]  hidden sm:flex items-center  pb-4'>
        <Icon icon="material-symbols:star" color="#fbaf5b" width="20" />
        <Icon icon="material-symbols:star" color="#fbaf5b" width="20" />
        <Icon icon="material-symbols:star" color="#fbaf5b" width="20" />
        <Icon icon="material-symbols:star" color="#fbaf5b" width="20" />
        <Icon icon="material-symbols:star" color="#fbaf5b" width="20" />
    </div>
    <div className=' sm:hidden w-[100px] flex items-center  pb-4 '>
        <Icon icon="material-symbols:star" color="#fbaf5b" width="15" />
        <Icon icon="material-symbols:star" color="#fbaf5b" width="15" />
        <Icon icon="material-symbols:star" color="#fbaf5b" width="15" />
        <Icon icon="material-symbols:star" color="#fbaf5b" width="15" />
        <Icon icon="material-symbols:star" color="#fbaf5b" width="15" />
    </div>
    </>
  )
}

export default Fivestar