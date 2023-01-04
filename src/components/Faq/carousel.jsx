import React from 'react'
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box,ChakraProvider} from '@chakra-ui/react'
import carouselItems from './carouselItems'



function Carousel() {
  return (
    <div className='w-[1100px] m-auto p-[1em] pb-[5em] border-[#EEEEEE] rounded-[32px] border'>
        <ChakraProvider>
            <Accordion defaultIndex={[0]} allowMultiple>
                {carouselItems.map((items)=>{

                return <AccordionItem key={items.id} className='border-none p-3'>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <p className='font-nuni text-[16px] font-[500] text-[#181818]'>
                            {items.question}
                        </p> 
                        </Box>  
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <div className='text-left text-[14px] text-[#5A5A5A] font-nuni font-[500]'>
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