import { Icon } from '@iconify/react';

const whyArray=[
    {
        id:1,
        name:"B2B Commerce",
        content:"Selling to businesses hasn't always been glamorous, but now it can be. Customize payment options and much more to give the experience a red carpet feel.",
        icon:<div className='bg-[#fff] sm:w-[100px] w-[52px] sm:h-[100px] h-[52px] rounded-full drop-shadow-lg flex justify-center items-center'>
        <Icon className='sm:block hidden'  icon="eos-icons:job" color="#7446d0" width="55" />
        <Icon className='sm:hidden block' icon="eos-icons:job" color="#7446d0" width="35" />
    </div>
    },
    {
        id:2,
        name:"D2C Commerce ",
        content:" This platform presents the best opportunity for innovative brands to build direct relationships with customers.",
        icon:<div className='bg-[#fff] sm:w-[100px] w-[52px] sm:h-[100px] h-[52px] rounded-full drop-shadow-lg flex justify-center items-center'>
        <Icon className='sm:block hidden'  icon="eos-icons:job" color="#1F85DE" width="55" />
        <Icon className='sm:hidden block' icon="eos-icons:job" color="#1F85DE" width="35" />
    </div>
    },
    {
        id:3,
        name:"AL & VR Technology",
        content:"Our technology helps to synchronise with current trends and find the products styles before trying.",
        icon:<div className='bg-[#fff] sm:w-[100px] w-[52px] sm:h-[100px] h-[52px] rounded-full drop-shadow-lg flex justify-center items-center'>
        <img className='sm:w-auto w-[70%]' src='images/al&vr.png' alt='al&vr' />
    </div>
    },
]
export default whyArray