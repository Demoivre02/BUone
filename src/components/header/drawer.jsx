import React from "react"
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,ChakraProvider} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { Box } from '@chakra-ui/react'

function DrawerNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        <div onClick={onOpen}>
            <Icon icon="fluent-mdl2:global-nav-button" color="white" width="30" />
        </div>

        <ChakraProvider >
                <Drawer  placement={placement} colorScheme="#5730C1" size="full" onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody className="bg-[#5730C1]" >

                        <div onClick={onClose} className="w-[73px] bg-[#fff] float-right mt-4  rounded-[8px] justify-center flex items-center h-[40px]" > 
                            <p className="text-[#5730C1] font-rubi font-[500]">Close</p>
                        </div>
                        
                        <div className="h-[80vh]">
                            <div className=" mt-28 text-center">   
                                <p className="font-rubi text-[16px] font-[400] text-[#fff] my-6"  onClick={onClose}>
                                    <a href='#home'>Home</a>
                                </p>
                                <p className="font-rubi text-[16px] font-[400] text-[#fff] my-6"  onClick={onClose}>
                                    <a href='#features'>Features</a>
                                </p>
                                <p className="font-rubi text-[16px] font-[400] text-[#fff] my-6"  onClick={onClose}>
                                    <a href='#solutions'>Solutions</a>
                                </p>
                                <p className="font-rubi text-[16px] font-[400] text-[#fff] my-6"  onClick={onClose}>
                                    <a href='#services'>services</a>
                                </p>

                                <div onClick={onClose} className="w-[116px] mt-12 bg-transparent border mt-4 mx-auto rounded-[8px] justify-center flex items-center h-[40px]" > 
                                    <p className="text-[#fff] font-rubi font-[500]">Login</p>
                                </div>

                                <div onClick={onClose} className="w-[116px] bg-[#A1EBE4] mt-4 mx-auto rounded-[8px] justify-center flex items-center h-[40px]" > 
                                    <p className="text-[#5730C1] font-rubi font-[500]">Signup</p>
                                </div>

                            </div>
                        </div>
                      
                       
                    </DrawerBody>
                </DrawerContent>
                </Drawer>
        </ChakraProvider>
      </>
    )
  }

  export default DrawerNav