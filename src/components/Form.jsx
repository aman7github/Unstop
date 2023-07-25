import { Box,Center,    DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,Input,useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {RxCross2} from "react-icons/rx"
import {GrFormClose} from "react-icons/gr"
import { keyframes } from '@emotion/react';

const Form = ({showForm,setShowForm}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef() 
  
    const slideInAnimation = keyframes`
  from {
    transform: translateY(90%);
  }
  to {
    transform: translateY(25%);
  }  `
 
  const close=()=>{
    setShowForm(false)
  }
 

  return (
    <>
     
     { showForm && <Box w='591px' h='764px'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start'  position='fixed'
          bottom="0"
          left={{base:'0px',sm:"30%"}}
          right="0"
          animation={`${slideInAnimation} 0.3s forwards`} zIndex={200} bg='white' >
            
            <Box w="591px" h='70px' border='1px' display={{base:"none",sm:"flex"}} borderRadius='8px 8px 0 0'  borderColor='#DADCE0'  justifyContent='space-between' alignItems='center' p='30px' >
                  <Center w='233px' h='24px' fontSize='20px' fontWeight='600' lineHeight='24.2px' color='#1C4980' >
                    Create new assessment
                  </Center>
                  <Center w='30px' h='30px'  >
                    <RxCross2 size='18px' onClick={close} cursor='pointer' />
                  </Center>
            </Box>
            <Box w="375px" h='60px' border='1px' display={{base:"flex",sm:"none"}} borderRadius='12px 12px 0 0'  borderColor='#DADCE0'  justifyContent='space-between' alignItems='center' p='0px' >
                  <Center w='233px' h='24px' fontSize='20px' fontWeight='600' lineHeight='24.2px' color='#1C4980' >
                    Create new assessment
                  </Center>
                  <Center w='30px' h='30px'  >
                    <RxCross2 size='18px' onClick={close} cursor='pointer' />
                  </Center>
            </Box>
            
            {/* <----------------------------  ------mid section of form--------------------------------------------------> */}

            <Box w='591px' h='616px' border='1px'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='20px' p='20px 30px' bg='#fefefe' >

                  {/* <----------------------------1st input box with lable--------------------------------> */}
                  <Box w='531px' h='79px'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='10px' color='#1C4980' >
                        <Box w='531px' h='19px'  borderColor='#DADCE0' fontSize='16px' fontWeight='500' lineHeight='19.36px' textAlign='centeere' display='flex' flexDir='column' alignItems='flex-start' gap='4px' alignSelf='stretch' >
                           Name of assessment
                        </Box>
                        <Box w='531px' h='50px' border='1px'borderRadius='8px' fontSize='14px' fontWeight='500' lineHeight='16.94px' borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='10px' p='15px' alignSelf='stretch' >
                           Type Here
                        </Box>
                  </Box>

                  {/* <----------------------------2nd input box with lable--------------------------------> */}
                  <Box w='531px' h='79px'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='10px' color='#1C4980' >
                        <Box w='531px' h='19px'  fontSize='16px' fontWeight='500' lineHeight='19.36px' borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='4px' alignSelf='stretch' >
                          Purpose of the test is
                        </Box>
                        <Box w='531px' h='50px' border='1px'borderRadius='8px'fontSize='14px' fontWeight='500' lineHeight='16.94px' borderColor='#DADCE0' display='flex' justifyContent='space-between' alignItems='center' p='15px' alignSelf='stretch' >
                           Select
                           <Center  w='24px' h='24px'  >
                             <MdKeyboardArrowDown size='20px' />
                           </Center>
                        </Box>
                  </Box>

                  {/* <----------------------------3rd input box with lable--------------------------------> */}
                  <Box w='531px' h='79px'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='10px' color='#1C4980' >
                        <Box w='531px' h='19px'  fontSize='16px' fontWeight='500' lineHeight='19.36px' borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='4px' alignSelf='stretch' >
                          Description
                        </Box>
                        <Box w='531px' h='50px' border='1px'borderRadius='8px' fontSize='14px' fontWeight='500' lineHeight='16.94px' borderColor='#DADCE0' display='flex' justifyContent='space-between' alignItems='center' p='15px' alignSelf='stretch' >
                           Select
                           <Center  w='24px' h='24px'  >
                             <MdKeyboardArrowDown size='20px' />
                           </Center>
                        </Box>
                  </Box>

                  {/* <----------------------------4th input box with lable--------------------------------> */}
                  <Box w='531px' h='180px'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='10px' color='#1C4980' >
                        <Box w='531px' h='19px'  fontSize='16px' fontWeight='500' lineHeight='19.36px' borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='4px' alignSelf='stretch' >
                           Skills
                        </Box>
                        <Box w='531px' h='151px' border='1px'borderRadius='8px'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start'  alignSelf='stretch' >
                             <Box w='531px' h='102px' border='1px'borderRadius='8px 8px 0 0'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='10px' p='16px' alignSelf='stretch' >
                                 <Box w='499px' h='30px'  borderColor='#DADCE0' display='flex' alignItems='flex-start' gap='10px'  alignSelf='stretch' >
                                         <Box w='142px' h='30px'   borderRadius='22px' p='6px 8px 6px 10px' bg='#DDEDFF' color='#1C4980' display='flex' alignItems='center' justifyContent='flex-end' gap='2px'   >
                                            <Box  w='124px' h='18px'  display='flex' gap='5px'  alignItems='center' fontSize='12px' fontWeight='500' lineHeight='14.52px' >
                                               UI/UX and Design 
                                               <GrFormClose style={{width:"18px", height:"18px"}} /> 
                                            </Box>
                                        </Box>
                                        <Box w='142px' h='30px'   borderRadius='22px' p='6px 8px 6px 10px' bg='#DDEDFF' color='#1C4980' display='flex' alignItems='center' justifyContent='flex-end' gap='2px'   >
                                            <Box  w='124px' h='18px'  display='flex' gap='5px'  alignItems='center' fontSize='12px' fontWeight='500' lineHeight='14.52px' >
                                            No of Question
                                               <GrFormClose style={{width:"18px", height:"18px"}} /> 
                                            </Box>
                                        </Box>
                                        <Box w='146px' h='30px'   borderRadius='22px' p='6px 8px 6px 10px' bg='#DDEDFF' color='#1C4980' display='flex' alignItems='center' justifyContent='flex-end' gap='2px'   >
                                            <Box  w='128px' h='18px'  display='flex' gap='5px'  alignItems='center' fontSize='12px' fontWeight='500' lineHeight='14.52px' >
                                            Web Development
                                               <GrFormClose style={{width:"18px", height:"18px"}} /> 
                                            </Box>
                                        </Box>
                                        
                                </Box>
                                <Box w='499px' h='30px'   borderColor='#DADCE0' display='flex' alignItems='flex-start' gap='10px'  alignSelf='stretch' >
                                         <Box w='142px' h='30px'   borderRadius='22px' p='6px 8px 6px 10px' bg='#DDEDFF' color='#1C4980' display='flex' alignItems='center' justifyContent='flex-end' gap='2px'   >
                                            <Box  w='124px' h='18px'  display='flex' gap='5px'  alignItems='center' fontSize='12px' fontWeight='500' lineHeight='14.52px' >
                                               UI/UX and Design 
                                               <GrFormClose style={{width:"18px", height:"18px"}} /> 
                                            </Box>
                                        </Box>
                                        <Box w='146px' h='30px'   borderRadius='22px' p='6px 8px 6px 10px' bg='#DDEDFF' color='#1C4980' display='flex' alignItems='center' justifyContent='flex-end' gap='2px'   >
                                            <Box  w='128px' h='18px'  display='flex' gap='5px'  alignItems='center' fontSize='12px' fontWeight='500' lineHeight='14.52px' >
                                            Web Development
                                               <GrFormClose style={{width:"18px", height:"18px"}} /> 
                                            </Box>
                                        </Box>      
                                </Box>
                                
                                
                                
                                
                 

                             </Box>
                             <Box w='531px' h='50px' border='1px' borderRadius='0 0 8px 8px' fontSize='14px' fontWeight='500' lineHeight='16.94px' borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='10px' p='15px' alignSelf='stretch'  >
                               Type here
                             </Box>
                        </Box>
                  </Box>

                  {/* <----------------------------5th input box with lable--------------------------------> */}
                  <Box w='531px' h='79px'  borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='10px' color='#1C4980' >
                        <Box w='531px' h='19px'  fontSize='16px' fontWeight='500' lineHeight='19.36px' borderColor='#DADCE0' display='flex' flexDir='column' alignItems='flex-start' gap='4px' alignSelf='stretch' >
                          Duration of assessment
                        </Box>
                        <Box w='531px' h='50px' border='1px'borderRadius='8px' fontSize='14px' fontWeight='500' lineHeight='16.94px' borderColor='#DADCE0' color='#8DA4BF' display='flex' flexDir='column' alignItems='flex-start' gap='10px' p='15px' alignSelf='stretch' >
                          HH:MM:SS
                        </Box>
                  </Box>

            </Box>

             {/* <----------------------------------------------------submit button-----------------------------------------> */}
              
              <Center w='591px' h='80px'  >
                <Center  w='531px' h='40px' bg='#0073E6' color='white' fontSize='14px' borderRadius='8px' fontWeight='600' lineHeight='16.94px' >
                    Save
                </Center>
              </Center>





       </Box>


  }
    </>
  
  )
}

export default Form