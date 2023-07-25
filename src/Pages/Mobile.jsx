import { Box ,Text,Center,  Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Button,Input,Divider} from '@chakra-ui/react'
import React from 'react'
import {BsFillBarChartFill,BsBatteryFull,BsBattery} from "react-icons/bs"
import {MdWifi,MdOutlineNotes,MdOutlineLaptopMac,MdAdd} from "react-icons/md"
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosFunnel} from "react-icons/io"
import {RiBarChartFill} from "react-icons/ri"
import { useDisclosure } from '@chakra-ui/react'
import {BiBriefcase,BiCalendar,BiDotsVerticalRounded} from "react-icons/bi"
import {VscBriefcase} from "react-icons/vsc"
import {AiOutlineLink} from "react-icons/ai"
import {GoClock} from "react-icons/go"


import {MdKeyboardArrowDown} from 'react-icons/md'
import {RxCross2} from "react-icons/rx"
import {GrFormClose} from "react-icons/gr"
import { keyframes } from '@emotion/react';
import Form from '../components/Form'
import {MdOutlineDashboard,MdOutlineNoteAlt,MdOutlineQuiz,MdEventNote} from "react-icons/md"
import MobileForm from '../components/MobileForm'

const Mobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [showForm, setShowForm] = React.useState(false);

    const handleShowForm = () => {
      setShowForm(true);
    };  


    const slideInAnimation = keyframes`
    from {
      transform: translateX(31.5%);
    }
    to {
      transform: translateX(35%);
    }  `
  return (
    <>



    <MobileForm showForm={showForm}  setShowForm={setShowForm} />
      
    <Box w='375px'  h='1390px'  display={{base:'inline-flex',sm:"none"}} gap='18px'  flexDir='column' alignItems='center' pos='relative' >

    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      
      >
        <DrawerOverlay />
       
        <DrawerContent>
        
    

          <DrawerBody>

            <Box w='275px' h='36px'  display='flex' justifyContent='space-between' >
               <Center w='38px' h='20px' fontSize='14px' fontWeight='500' lineHeight='19.6px' >
                  Menu
               </Center>
               <DrawerCloseButton />
            </Box>


                    
                       {/* <------------------------Leftside menu box upper side--------------------------------------------> */}
                       <Box    h='168px' w='275px' display='flex' flexDirection='column' gap="6px" >
                           
                       
                   
                               <Box h='50px' w='275px' p='10px'  display='flex'   alignItems='center' gap='10px' borderRadius='8px'  >
                                    
                                    <MdOutlineDashboard  size='20px' />
                                    <Text w='74px' h='20px' fontSize='14px' fontWeight='500' lineHeight='19.6px' >
                                         Dashboard
                                    </Text>
                   
                               </Box>
                   
                               <Box h='50px' w='275px' p='10px'   display='flex' alignItems='center' border='1px' gap='10px' borderRadius='8px' color='#0073E6' borderColor='#0073E6' bg='#E5F1FC' >
                                    <MdOutlineNoteAlt size='20px' />
                                    <Text w='84px' h='20px' fontSize='14px' fontWeight='600' lineHeight='19.6px' >
                                       Assessment
                                    </Text>
                               </Box>
                   
                               <Box h='50px' w='275px' p='10px'  display='flex' alignItems='center' gap='10px' borderRadius='8px' >
                                  <MdOutlineQuiz size='20px'  />
                                  <Text w='72px' h='20px' fontSize='14px' fontWeight='500' lineHeight='19.6px'  >
                                      My Library
                                  </Text>
                   
                               </Box>
                   
                        </Box>
                   
                   
                        <Divider border='1px' w='275px'  borderTop='dotted' borderBottom='0' borderColor='#BACBD5'  />
                   
                   {/* <------------------------Leftside menu box lower side--------------------------------------------> */}
                   
                   
                           <Box h='50px' w='275px'  display='flex'  justifyContent='space-between' alignItems='center' gap='6px' p='10px' >
                   
                               <Box h='20px' w='118px'   display='flex'  alignItems='center' gap='8px' borderRadius='8px' >
                                  <MdEventNote size='20px'  />
                                  <Text w='90px' h='20px' fontSize='14px' fontWeight='500' lineHeight='19.6px'  >
                                      Round Status
                                  </Text>
                               </Box>
                               <Center w='47px' h='18px' border='1px' borderRadius='22px' p='6px 8px 6px 8px' color="#D63500" borderColor='#D63500' bg='#FBEBEA' gap='6px'  >
                                   <Text w='31px' h='12px' fontSize='10px' lineHeight='12.1px' fontWeight='500'color="#D63500" >
                                      Admin
                                   </Text>
                               </Center>
                           </Box>

                  
                      
                      
           
           







          </DrawerBody>

         
        </DrawerContent>

       

      </Drawer>
  


        {/* <----------------------------------upper portion-------------------------------------------------> */}

            <Box  w='375px' h='140px'   mt='-1px' display='flex' flexDir='column' alignItems='flex-start' pos='fixed' zIndex='200' bg='white' >
                {/* <------------------------------menu bar---------------------------------------> */}
                <Box  w='375px' h='40px'  display='flex' justifyContent='space-between'  alignItems='center' p='7px 16px' >
                      <Box  w='39px' h='18px'   fontWeight='700' fontSize='17px' mt='-10px' >
                          9:41
                      </Box>
                      <Box  w='70px' h='20px'   display='flex' alignItems='center' gap='8px' p='0 1px'>
                         <BsFillBarChartFill   />
                         <MdWifi style={{width:'20px' , height:'18px' }}  />
                         < BsBatteryFull style={{width:'21px' , height:'21px' , color:"yellow", border:"1px", borderColor:'gray'}} />
                      </Box>
                </Box>
                {/* <----------------------------------------assessment box 1----------------------------------------> */}
                <Box  w='375px' h='50px' display='flex' justifyContent='space-between'  alignItems='center' p='0 15px' >
                      <Box  w='146px' h='40px'  display='flex'  alignItems='center' gap='10px' color="#1C4980" >
                          <Center  w='40px' h='40px' borderRadius='60px' p='1px' bg='#F2F8FE' cursor='pointer'  >
                            <MdOutlineNotes style={{width:'40px' , height:'30px' }} onClick={onOpen} />
                            {/* <-----------------------------------code for drawer--------------------------------------> */}
              
                          </Center>
                          <Box w='96px' h='22px' fontSize='18px' fontWeight='600' lineHeight='22.4px' >
                           Assessment
                          </Box>
                       </Box>  
                       <Center  w='40px' h='40px' borderRadius='70px'  color="#1C4980" >
                          <MdOutlineLaptopMac style={{width:'35px' , height:'25px' }}  />

                       </Center>
                </Box>
                  {/* <----------------------------------------assessment box 2----------------------------------------> */}
                  <Box  w='375px' h='50px' borderBottom='2px' borderColor='#F6F8FA' display='flex' justifyContent='space-between'  alignItems='center'  >
                       <Box  w='187.5px' h='50px'  borderBottom='2px' borderColor='#0073E6' color='#0073E6' display='flex' justifyContent='center'  alignItems='center' fontSize='14px' fontWeight='500' lineHeight='16.94px' >
                         My Assessments
                       </Box>
                       <Box  w='187.5px' h='50px'  color='#3E6493' display='flex' justifyContent='center'  alignItems='center' fontSize='14px' fontWeight='500' lineHeight='16.94px' >
                       Unstop Assessments
                       </Box>

                  </Box>

            </Box>

            <Box  w='375px' h='30px' display='flex' mt='160px' justifyContent='space-between'  alignItems='center' p='0 15px' >
                      <Box  w='146px' h='40px'  display='flex'  alignItems='center' fontSize='18px' fontWeight='600' lineHeight='22.4px' color="#1C4980" >
                           My Assessment
                       </Box>  
                       <Box  w='100px' h='40px' borderRadius='70px' display='flex' justifyContent='space-between' alignItems='center'  color="#1C4980" >
                          <AiOutlineSearch style={{width:'35px' , height:'22px' }}  />
                          <IoIosFunnel style={{width:'35px' , height:'21px' }}  />
                          <RiBarChartFill style={{width:'35px' , height:'21px' }}  />
                       </Box>
             </Box>



         {/* <-----------------------------------------lower 1st div---------------------------------------------------->    */}

          <Center  cursor='pointer' w='345px' h='159px' border='1px dashed' borderRadius='12px' onClick={handleShowForm} display='flex' flexDir='column'  gap='12px' p='30px' borderColor='#DADCE0' bg='#F6F8FA' >

                                                      <Center w='118px' h='77px'  display='flex' flexDir='column'  gap='10px'  >
                                                              <Center w='70px' h='70px' borderRadius='72px' color='#0073e6' bg='white' >
                                                                  <MdAdd  size='40px' />
                                                              </Center>
                                                              <Box w='150px' h='22px' fontSize='18px' fontWeight='500' lineHeight='21.78px' color='#1C4980' >
                                                                New Assessment
                                                              </Box>
                                                      </Center>
                                                      <Center w='285px' h='30px'  fontSize='12px' fontWeight='500' lineHeight='14.52px' color='#1C4980' >
                                                         From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
                                                      </Center>

          </Center>

          {/* <------------------------------------lower 2nd--------------------------------------------------------> */}

            <Center w='345px' h='128px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='10px' p='14px' borderColor='#DADCE0'  >

                                                       <Box w='317px' h='50px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='190px' h='50px'  display='flex' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />
                                                                 </Center>
                                                                 <Box w='133px' h='41px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='130px' h='17px'  fontSize='14px' fontWeight='600' textAlign='start' lineHeight='16.94px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='121px' h='22px'  display='flex'  alignItems='center' gap='3px' >
                                                                          <Box w='26px' h='17px'  fontSize='12px' fontWeight='500' textAlign='start'  lineHeight='16.8px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Box w='82px' h='22px' display='flex'  alignItems='center' gap='4px' >
                                                                           <GoClock style={{width:"11px",height:'12px',color:"#1C4980"}}  />
                                                                           <Text w='74px' color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Box>
                                                                  </Box>

                                                                </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='317px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='317px' h='30px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='100px' h='30px'   display='flex'  gap='10px' alignItems='flex-start'  >
                                                             <Box w='41px' h='30px'  color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='41px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='41px' h='30px'   color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='49px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='108px' h='30px'  display='flex' justifyContent='center' alignItems='center' gap='10px' color='#1C4980'  >
                                                             <Center  w='68px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='16px' />
                                                                 <Center w='34px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Center w='30px' h='30px' borderRadius='33px' fontSize='12px' fontWeight='700' lineHeight='14.52px'  bg='#6548EE' color='white'   >
                                                                 LP
                                                             </Center>
                                                          </Box>


                                                      </Box>

                                                     
                                                    

            </Center>

              {/* <------------------------------------lower 3rd--------------------------------------------------------> */}

            <Center w='345px' h='128px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='10px' p='14px' borderColor='#DADCE0'  >

                                                       <Box w='317px' h='50px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='190px' h='50px'  display='flex' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />
                                                                 </Center>
                                                                 <Box w='133px' h='41px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='130px' h='17px'  fontSize='14px' fontWeight='600' textAlign='start' lineHeight='16.94px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='121px' h='22px'  display='flex'  alignItems='center' gap='3px' >
                                                                          <Box w='26px' h='17px'  fontSize='12px' fontWeight='500' textAlign='start'  lineHeight='16.8px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Box w='82px' h='22px' display='flex'  alignItems='center' gap='4px' >
                                                                           <GoClock style={{width:"11px",height:'12px',color:"#1C4980"}}  />
                                                                           <Text w='74px' color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Box>
                                                                  </Box>

                                                                </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='317px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='317px' h='30px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='100px' h='30px'   display='flex'  gap='10px' alignItems='flex-start'  >
                                                             <Box w='41px' h='30px'  color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='41px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='41px' h='30px'   color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='49px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='167px' h='30px'  display='flex' justifyContent='center' alignItems='center' gap='4px' color='#1C4980'  >
                                                             <Center  w='68px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='16px' />
                                                                 <Center w='34px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Box   w='95px' h='30px' display='flex' alignItems='center' gap='4px' pos='relative' >
                                                               <Box w='59px' h='30px' > 
                                                                <Center w='30px' h='30px' pos='absolute' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#6548EE' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px'  pos='absolute' left='15px' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#3079e1' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px' pos='absolute' left='28.82px'  borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#e9407a' color='white'   >
                                                                 LP
                                                               </Center>
                                                              </Box>
                                                              <Box  w='32px' h='15px'  fontSize='12px' fontWeight='600' lineHeight='14.52px' >
                                                                  +324
                                                              </Box>
                                                             </Box>
                                                            
                                                          </Box>


                                                      </Box>

                                                     
                                                    

            </Center>

            {/* <------------------------------------lower 4th--------------------------------------------------------> */}

            <Center w='345px' h='128px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='10px' p='14px' borderColor='#DADCE0'  >

                                                       <Box w='317px' h='50px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='190px' h='50px'  display='flex' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />
                                                                 </Center>
                                                                 <Box w='133px' h='41px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='130px' h='17px'  fontSize='14px' fontWeight='600' textAlign='start' lineHeight='16.94px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='121px' h='22px'  display='flex'  alignItems='center' gap='3px' >
                                                                          <Box w='26px' h='17px'  fontSize='12px' fontWeight='500' textAlign='start'  lineHeight='16.8px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Box w='82px' h='22px' display='flex'  alignItems='center' gap='4px' >
                                                                           <GoClock style={{width:"11px",height:'12px',color:"#1C4980"}}  />
                                                                           <Text w='74px' color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Box>
                                                                  </Box>

                                                                </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='317px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='317px' h='30px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='100px' h='30px'   display='flex'  gap='10px' alignItems='flex-start'  >
                                                             <Box w='41px' h='30px'  color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='41px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='41px' h='30px'   color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='49px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='167px' h='30px'  display='flex' justifyContent='center' alignItems='center' gap='4px' color='#1C4980'  >
                                                             <Center  w='68px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='16px' />
                                                                 <Center w='34px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Box   w='95px' h='30px' display='flex' alignItems='center' gap='4px' pos='relative' >
                                                               <Box w='59px' h='30px' > 
                                                                <Center w='30px' h='30px' pos='absolute' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#6548EE' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px'  pos='absolute' left='15px' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#3079e1' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px' pos='absolute' left='28.82px'  borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#e9407a' color='white'   >
                                                                 LP
                                                               </Center>
                                                              </Box>
                                                              <Box  w='32px' h='15px'  fontSize='12px' fontWeight='600' lineHeight='14.52px' >
                                                                  +324
                                                              </Box>
                                                             </Box>
                                                            
                                                          </Box>


                                                      </Box>

                                                     
                                                    

            </Center>

             {/* <------------------------------------lower 5th-------------------------------------------------------> */}

            <Center w='345px' h='128px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='10px' p='14px' borderColor='#DADCE0'  >

                                                       <Box w='317px' h='50px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='190px' h='50px'  display='flex' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />
                                                                 </Center>
                                                                 <Box w='133px' h='41px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='130px' h='17px'  fontSize='14px' fontWeight='600' textAlign='start' lineHeight='16.94px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='121px' h='22px'  display='flex'  alignItems='center' gap='3px' >
                                                                          <Box w='26px' h='17px'  fontSize='12px' fontWeight='500' textAlign='start'  lineHeight='16.8px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Box w='82px' h='22px' display='flex'  alignItems='center' gap='4px' >
                                                                           <GoClock style={{width:"11px",height:'12px',color:"#1C4980"}}  />
                                                                           <Text w='74px' color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Box>
                                                                  </Box>

                                                                </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='317px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='317px' h='30px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='100px' h='30px'   display='flex'  gap='10px' alignItems='flex-start'  >
                                                             <Box w='41px' h='30px'  color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='41px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='41px' h='30px'   color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='49px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='167px' h='30px'  display='flex' justifyContent='center' alignItems='center' gap='4px' color='#1C4980'  >
                                                             <Center  w='68px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='16px' />
                                                                 <Center w='34px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Box   w='95px' h='30px' display='flex' alignItems='center' gap='4px' pos='relative' >
                                                               <Box w='59px' h='30px' > 
                                                                <Center w='30px' h='30px' pos='absolute' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#6548EE' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px'  pos='absolute' left='15px' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#3079e1' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px' pos='absolute' left='28.82px'  borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#e9407a' color='white'   >
                                                                 LP
                                                               </Center>
                                                              </Box>
                                                              <Box  w='32px' h='15px'  fontSize='12px' fontWeight='600' lineHeight='14.52px' >
                                                                  +324
                                                              </Box>
                                                             </Box>
                                                            
                                                          </Box>


                                                      </Box>

                                                     
                                                    

            </Center>

            {/* <------------------------------------lower 6th--------------------------------------------------------> */}

            <Center w='345px' h='128px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='10px' p='14px' borderColor='#DADCE0'  >

                                                       <Box w='317px' h='50px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='190px' h='50px'  display='flex' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />
                                                                 </Center>
                                                                 <Box w='133px' h='41px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='130px' h='17px'  fontSize='14px' fontWeight='600' textAlign='start' lineHeight='16.94px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='121px' h='22px'  display='flex'  alignItems='center' gap='3px' >
                                                                          <Box w='26px' h='17px'  fontSize='12px' fontWeight='500' textAlign='start'  lineHeight='16.8px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Box w='82px' h='22px' display='flex'  alignItems='center' gap='4px' >
                                                                           <GoClock style={{width:"11px",height:'12px',color:"#1C4980"}}  />
                                                                           <Text w='74px' color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Box>
                                                                  </Box>

                                                                </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='317px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='317px' h='30px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='100px' h='30px'   display='flex'  gap='10px' alignItems='flex-start'  >
                                                             <Box w='41px' h='30px'  color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='41px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='41px' h='30px'   color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='49px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='167px' h='30px'  display='flex' justifyContent='center' alignItems='center' gap='4px' color='#1C4980'  >
                                                             <Center  w='68px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='16px' />
                                                                 <Center w='34px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Box   w='95px' h='30px' display='flex' alignItems='center' gap='4px' pos='relative' >
                                                               <Box w='59px' h='30px' > 
                                                                <Center w='30px' h='30px' pos='absolute' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#6548EE' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px'  pos='absolute' left='15px' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#3079e1' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px' pos='absolute' left='28.82px'  borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#e9407a' color='white'   >
                                                                 LP
                                                               </Center>
                                                              </Box>
                                                              <Box  w='32px' h='15px'  fontSize='12px' fontWeight='600' lineHeight='14.52px' >
                                                                  +324
                                                              </Box>
                                                             </Box>
                                                            
                                                          </Box>


                                                      </Box>

                                                     
                                                    

            </Center>


             {/* <------------------------------------lower 7th--------------------------------------------------------> */}

            <Center w='345px' h='128px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='10px' p='14px' borderColor='#DADCE0'  >

                                                       <Box w='317px' h='50px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='190px' h='50px'  display='flex' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />
                                                                 </Center>
                                                                 <Box w='133px' h='41px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='130px' h='17px'  fontSize='14px' fontWeight='600' textAlign='start' lineHeight='16.94px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='121px' h='22px'  display='flex'  alignItems='center' gap='3px' >
                                                                          <Box w='26px' h='17px'  fontSize='12px' fontWeight='500' textAlign='start'  lineHeight='16.8px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Box w='82px' h='22px' display='flex'  alignItems='center' gap='4px' >
                                                                           <GoClock style={{width:"11px",height:'12px',color:"#1C4980"}}  />
                                                                           <Text w='74px' color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Box>
                                                                  </Box>

                                                                </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='317px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='317px' h='30px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='100px' h='30px'   display='flex'  gap='10px' alignItems='flex-start'  >
                                                             <Box w='41px' h='30px'  color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='41px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='41px' h='30px'   color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='49px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='167px' h='30px'  display='flex' justifyContent='center' alignItems='center' gap='4px' color='#1C4980'  >
                                                             <Center  w='68px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='16px' />
                                                                 <Center w='34px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Box   w='95px' h='30px' display='flex' alignItems='center' gap='4px' pos='relative' >
                                                               <Box w='59px' h='30px' > 
                                                                <Center w='30px' h='30px' pos='absolute' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#6548EE' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px'  pos='absolute' left='15px' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#3079e1' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px' pos='absolute' left='28.82px'  borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#e9407a' color='white'   >
                                                                 LP
                                                               </Center>
                                                              </Box>
                                                              <Box  w='32px' h='15px'  fontSize='12px' fontWeight='600' lineHeight='14.52px' >
                                                                  +324
                                                              </Box>
                                                             </Box>
                                                            
                                                          </Box>


                                                      </Box>

                                                     
                                                    

            </Center>

            {/* <------------------------------------lower 8th--------------------------------------------------------> */}

            <Center w='345px' h='128px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='10px' p='14px' borderColor='#DADCE0'  >

                                                       <Box w='317px' h='50px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='190px' h='50px'  display='flex' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />
                                                                 </Center>
                                                                 <Box w='133px' h='41px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='130px' h='17px'  fontSize='14px' fontWeight='600' textAlign='start' lineHeight='16.94px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='121px' h='22px'  display='flex'  alignItems='center' gap='3px' >
                                                                          <Box w='26px' h='17px'  fontSize='12px' fontWeight='500' textAlign='start'  lineHeight='16.8px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Box w='82px' h='22px' display='flex'  alignItems='center' gap='4px' >
                                                                           <GoClock style={{width:"11px",height:'12px',color:"#1C4980"}}  />
                                                                           <Text w='74px' color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Box>
                                                                  </Box>

                                                                </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='317px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='317px' h='30px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='100px' h='30px'   display='flex'  gap='10px' alignItems='flex-start'  >
                                                             <Box w='41px' h='30px'  color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='41px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='41px' h='30px'   color='#1C4980' >
                                                                 <Box w='17px' h='15px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='49px' h='14px'  fontSize='10px' fontWeight='500' lineHeight='14px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='167px' h='30px'  display='flex' justifyContent='center' alignItems='center' gap='4px' color='#1C4980'  >
                                                             <Center  w='68px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='16px' />
                                                                 <Center w='34px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Box   w='95px' h='30px' display='flex' alignItems='center' gap='4px' pos='relative' >
                                                               <Box w='59px' h='30px' > 
                                                                <Center w='30px' h='30px' pos='absolute' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#6548EE' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px'  pos='absolute' left='15px' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#3079e1' color='white'   >
                                                                 LP
                                                               </Center>
                                                               <Center w='30px' h='30px' pos='absolute' left='28.82px'  borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#e9407a' color='white'   >
                                                                 LP
                                                               </Center>
                                                              </Box>
                                                              <Box  w='32px' h='15px'  fontSize='12px' fontWeight='600' lineHeight='14.52px' >
                                                                  +324
                                                              </Box>
                                                             </Box>
                                                            
                                                          </Box>


                                                      </Box>

                                                     
                                                    

            </Center>


    </Box>
    </>
  )
}

export default Mobile