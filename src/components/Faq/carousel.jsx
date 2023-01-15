import React from 'react'
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box,ChakraProvider} from '@chakra-ui/react'
import carouselItems from './carouselItems'



function Carousel() {
  return (
    <div className='lg:w-[1100px] w-[90%] m-auto p-[1em] sm:pb-[5em] border-[#EEEEEE] sm:rounded-[32px] rounded-[9px] border'>
        <ChakraProvider>
            <Accordion defaultIndex={[0]} allowMultiple>
                {carouselItems.map((items)=>{

                return <AccordionItem key={items.id} className='border-none sm:p-3'>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <p className='font-nuni sm:text-[16px] text-[10px] font-[500] text-[#181818]'>
                            {items.question}
                        </p> 
                        </Box>  
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <div className='text-left sm:text-[14px] sm:ml-0 ml-2 text-[10px] text-[#5A5A5A] font-nuni font-[500]'>
                        {items.answer}
                    </div>
                           
                    </AccordionPanel>
                </AccordionItem>
                })}
            </Accordion>
        </ChakraProvider>
    </div>
  )
}

export default Carousel