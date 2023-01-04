import React from 'react'
import Headers from '../headers/headers'
import Carousel from './carousel'

function Faq() {
  return (
    <div className=''>
        <Headers header="Frequently asked questions" text="This are the common questions asked by new and existing users" />

        <div>
            <Carousel/>
        </div>

    </div>
  )
}

export default Faq