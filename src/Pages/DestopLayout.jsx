import { Box,Button,Center,Divider,Text,useD,DrawerBody,Drawer,
} from '@chakra-ui/react'
import React from 'react'
import { keyframes } from '@emotion/react';
import MenuBar from '../components/MenuBar'
import {BsViewStacked,BsGlobe,BsLink, BsBox} from "react-icons/bs"
import {BiBriefcase,BiCalendar,BiDotsVerticalRounded} from "react-icons/bi"
import {VscBriefcase} from "react-icons/vsc"
import {AiOutlineLink} from "react-icons/ai"
import {MdOutlineGroup,MdOutlineViewStream,MdOutlineLink,MdAdd} from "react-icons/md"
import Form from '../components/Form'



const DestopLayout = () => {

     const [showForm, setShowForm] = React.useState(false);

     const handleShowForm = () => {
       setShowForm(true);
     };  
 
     
 

  return (
     <>
    

    <Form showForm={showForm}  setShowForm={setShowForm}  />
   

    <Box w={{lg:"1440px"}} h="1532px" bg={'#F6F8FA'} pos='relative'  display={{base:"none",sm:"flex"}} gap="10px"   >
      
   


        {/* <--------------------------Leftside Menu Box--------------------------------------------> */}
                
                 <MenuBar />




        {/* <--------------------------Rightside Menu Box--------------------------------------------> */}

          <Box h='1020px' w={{lg:'1264px'}}    pos={'relative'} left={{base:'0px',sm:"156px"}} top='2px'  zIndex={'10'} >

              <Box h='734px' w={{lg:'1264px'}}    top='3px'  >


                     {/* <-------------------------------------upper Box------------------------------------------>   */}
                      <Box h='70px' w={{lg:'1264px'}} borderBottom='1px' borderColor='#DADCE0'  gap='24px' bg='#FFFFFF' borderRadius='12px 12px 0 0' >
                           
                           <Box h='70px' w={{lg:'1224px'}} display='flex'  justifyContent='space-between' alignItems='center' p='0 20px' >
                               
                                <Box h='70px' w='276px' gap='20px'  display='flex' justifyContent='space-between' alignItems='center' >
                                    <Center w='120px' h='28px'  >
                                       <Text fontSize='20px' fontWeight='600' lineHeight='28px' color='#1C4980' >
                                           Assessment
                                       </Text>
                                    </Center>

                                    <Divider orientation="vertical" border='1px' h='46px' color='#DADCE0'  />

                                    <Center w='116px' h='70px'gap='20px'  borderBottom='4px'  color='#0073E6' p='10px 0 10px 0' fontSize='14px' fontWeight='600' lineHeight='16.94px' >
                                      My Assessments
                                    </Center>
                                </Box>

                           </Box>
                      </Box>


                     {/* <------------------------------------------Mid Box--------------------------------------------------->   */}
         

                     <Box w='1264px' h='664px' p='20px' gap='24px'  borderRadius='0 0 12px 12px' bg='#FFFFFF'   >

                         <Box w='1264px' h='624px' display='flex' flexDir='column' alignItems='flex-start' gap='40px' >

                              <Box w='1264px' h='155px' display='flex' flexDirection='column' gap='16px' alignItems='flex-start' >
                                   <Box  w='202px' h='25px' fontSize='18px' fontWeight='500' lineHeight='25.2px' color='#1C4980' >
                                     Assessments Overview
                                   </Box>

                                   <Box  w='1224px' h='144px' fontSize='18px' border='1px' borderRadius='12px' display='flex'   borderColor='#DADCE0' >
                                     
                                     {/* <----------------------------------------------mid box 1----------------------------------------------------> */}
                                        <Box  w='162px' h='114px' p='16px 20px'   borderColor='#DADCE0' display='flex' flexDirection='column' alignItems='flex-start' gap='16px' >
                                             <Box w='121px' h='20px' fontSize='14px' fontWeight='600' lineHeight='19.6px' color='#1C4980' >
                                                Total Assessment
                                             </Box>

                                             <Box w='77px' h='40px' display='flex' alignItems='center' gap='10px'  >
                                                  <Center w='40px' h='40px' bg='#EBE8FD' color='#7157ef' borderRadius='8px' >
                                                       <MdOutlineViewStream size='20px' />
                                                  </Center>
                                                  <Center w='27px' h='28px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                       34
                                                  </Center>
                                             </Box>
                                        </Box>


                                   {/* <----------------------------------------------mid box 2----------------------------------------------------> */}
                                        <Box  w='369px' h='114px' p='16px 20px' border='1px'  borderColor='#DADCE0' display='flex' flexDirection='column' alignItems='flex-start' gap='16px' >
                                             <Box w='78px' h='20px' fontSize='14px' fontWeight='600' lineHeight='19.6px' color='#1C4980' >
                                                Candidates
                                             </Box>

                                             <Box w='277px' h='46px' display='flex' alignItems='center' gap='20px'  >
                                                  <Center w='40px' h='40px' bg='#EBE8FD' color='#7157ef' borderRadius='8px' >
                                                       <MdOutlineGroup size='20px' />
                                                  </Center>

                                                  <Center w='91px' h='46px' display='flex' flexDirection='column' alignItems='flex-start' gap='1px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                       <Center w='88px' h='28px' display='flex'   gap='4px' >
                                                          <Center w='60px' h='28px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                             11,145
                                                          </Center>

                                                          <Center w='24px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#05C165' >
                                                             +89
                                                          </Center>
                                                       </Center>

                                                       <Center w='91px' h='17px' fontSize='12px' fontWeight='500' lineHeight='19.8px' color='#1C4980'  >
                                                        Total Candidate
                                                       </Center>
                                                  </Center>

                                                  <Divider orientation='vertical' h='40px' borderColor='#DADCE0' />

                                                  <Center w='91px' h='46px' display='flex' flexDirection='column' alignItems='flex-start' gap='1px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                       <Center w='88px' h='28px' display='flex'   gap='4px' >
                                                          <Center w='60px' h='28px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                             1,14
                                                          </Center>

                                                          <Center w='24px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#05C165' >
                                                             +89
                                                          </Center>
                                                       </Center>

                                                       <Center w='91px' h='17px' fontSize='12px' fontWeight='500' lineHeight='19.8px' color='#1C4980'  >
                                                         Who Attamped
                                                       </Center>
                                                  </Center>

                                             </Box>

                                        </Box>


                                   {/* <----------------------------------------------mid box 3----------------------------------------------------> */}
                                        <Box  w='499px' h='114px' p='16px 20px' border='1px'  borderColor='#DADCE0' display='flex' flexDirection='column' alignItems='flex-start' gap='16px' >
                                             <Box w='129px' h='20px' fontSize='14px' fontWeight='600' lineHeight='19.6px' color='#1C4980' >
                                                Candidates Source
                                             </Box>

                                             <Box w='373px' h='46px' display='flex' alignItems='center' gap='20px'  >
                                                  <Center w='40px' h='40px' bg='#fce8ef' color='#E9407A' borderRadius='8px' >
                                                       <BsGlobe size='20px' />
                                                  </Center>

                                                  <Center w='94px' h='46px' display='flex' flexDirection='column' alignItems='flex-start' gap='1px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                       <Center w='94px' h='28px' display='flex'   gap='4px' >
                                                          <Center w='66px' h='28px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                             11,000
                                                          </Center>

                                                          <Center w='24px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#05C165' >
                                                             +89
                                                          </Center>
                                                       </Center>

                                                       <Center w='37px' h='17px' fontSize='12px' fontWeight='500' lineHeight='19.8px' color='#1C4980'  >
                                                         E-mail
                                                       </Center>
                                                  </Center>

                                                  <Divider orientation='vertical' h='40px' borderColor='#DADCE0' />

                                                  <Center w='71px' h='46px' display='flex' flexDirection='column' alignItems='flex-start' gap='1px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                       <Center w='65px' h='28px' display='flex'   gap='4px' >
                                                          <Center w='37px' h='28px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                             145
                                                          </Center>

                                                          <Center w='24px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#05C165' >
                                                             +89
                                                          </Center>
                                                       </Center>

                                                       <Center w='71px' h='17px' fontSize='12px' fontWeight='500' lineHeight='19.8px' color='#1C4980'  >
                                                         Social Share
                                                       </Center>
                                                  </Center>


                                                    <Divider orientation='vertical' h='40px' borderColor='#DADCE0' />

                                                  <Center w='71px' h='46px' display='flex' flexDirection='column' alignItems='flex-start' gap='1px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                       <Center w='65px' h='28px' display='flex'   gap='4px' >
                                                          <Center w='37px' h='28px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                             145
                                                          </Center>

                                                          <Center w='24px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#05C165' >
                                                             +89
                                                          </Center>
                                                       </Center>

                                                       <Center w='71px' h='17px' fontSize='12px' fontWeight='500' lineHeight='19.8px' color='#1C4980'  >
                                                         Unique Link
                                                       </Center>
                                                  </Center>

                                             </Box>
  
                                        </Box>


                                    {/* <----------------------------------------------mid box 4----------------------------------------------------> */}
                                        <Box  w='188px' h='114px' p='16px 20px'   borderColor='#DADCE0' display='flex' flexDirection='column' alignItems='flex-start' gap='16px' >
                                             <Box w='94px' h='20px' fontSize='14px' fontWeight='600' lineHeight='19.6px' color='#1C4980' >
                                               Total Purpose
                                             </Box>

                                             <Box w='70px' h='40px' display='flex' alignItems='center' gap='10px'  >
                                                  <Center w='40px' h='40px' bg='#E5F1FC' color='#0073E6' borderRadius='8px' >
                                                       <MdOutlineLink size='20px' />
                                                  </Center>
                                                  <Center w='20px' h='28px' fontSize='20px' fontWeight='700' lineHeight='28px' color='#1C4980' >
                                                       11
                                                  </Center>
                                             </Box>
                                        </Box>

                                   </Box>

                              </Box>



                              
                             {/* <---------------------------------------lower box----------------------------------------> */}
                             <Box w='1224px' h='445px'  gap='16px'  display='flex' flexDir='column' alignItems='flex-start' >

                    
                                 <Box  w='1224px' h='40px' >
                                    <Box   w='137px' h='25px' fontSize='18px' fontWeight='500' lineHeight='25.2px'  >
                                       My Assessment
                                    </Box>
                                 </Box>

                                 <Box  w='1224px' h='389px'  display='flex'  alignItems='flex-start' gap='30px' >
                                      <Box  w='1224px' h='209px'  display='flex'  alignItems='flex-start' gap='30px' >

                                        {/* <-------------------------- 1st box inside lower box ---------------------------------> */}

                                                 <Center onClick={handleShowForm} cursor='pointer' w='388px' h='209px' border='1px dashed' borderRadius='12px' display='flex' flexDir='column'  gap='12px' p='30px' borderColor='#DADCE0' bg='#F6F8FA' >

                                                      <Center w='150px' h='102px'  display='flex' flexDir='column'  gap='10px'  >
                                                              <Center w='70px' h='70px' borderRadius='72px' color='#0073e6' bg='white' >
                                                                  <MdAdd  size='40px' />
                                                              </Center>
                                                              <Box w='150px' h='22px' fontSize='18px' fontWeight='500' lineHeight='21.78px' color='#1C4980' >
                                                                New Assessment
                                                              </Box>
                                                      </Center>
                                                      <Center w='328px' h='30px'  fontSize='12px' fontWeight='500' lineHeight='14.52px' color='#1C4980' >
                                                         From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
                                                      </Center>

                                                 </Center>

                                         {/* <-------------------------- 2st box inside lower box ---------------------------------> */}         
                                              
                                              
                                             <Center w='388px' h='209px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='16px' p='16px' borderColor='#DADCE0'  >

                                                       <Box w='356px' h='109px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='155px' h='109px'  display='flex' flexDir='column' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />

                                                                 </Center>
                                                                 <Box w='155px' h='49px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='155px' h='25px'  fontSize='18px' fontWeight='500' lineHeight='25.2px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='137px' h='22px' display='flex'  alignItems='center' gap='10px' >
                                                                          <Box w='26px' h='20px'  fontSize='14px' fontWeight='600' lineHeight='19.6px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Center w='91px' h='22px' >
                                                                           <BiCalendar style={{width:"11.67px",height:'12.83px',color:"#1C4980"}}  />
                                                                           <Text color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Center>
                                                                      </Box>

                                                                 </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='356px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='356px' h='36px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='123px' h='36px'   display='flex'  gap='14px' alignItems='flex-start'  >
                                                             <Box w='50px' h='36px'  color='#1C4980' >
                                                                 <Box w='19px' h='20px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='50px' h='17px'  fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='59px' h='36px'   color='#1C4980' >
                                                                 <Box w='19px' h='20px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='59px' h='17px'  fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='117px' h='30px'  display='flex' justifyContent='center' alignItems='center' gap='4px' p='2px 8px 2px 6px' color='#1C4980'  >
                                                             <Center  w='77px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='20px' />
                                                                 <Center w='39px' h='20px' fontSize='14px' fontWeight='500' lineHeight='19.6px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Center w='30px' h='30px' borderRadius='33px' fontSize='14px' fontWeight='700' lineHeight='16.94px'  bg='#6548EE' color='white'   >
                                                                 LP
                                                             </Center>
                                                          </Box>


                                                      </Box>

                                                     
                                                    

                                             </Center>

                                          {/* <-------------------------- 3rd box inside lower box ---------------------------------> */}         
                                              
                                              
                                             <Center w='388px' h='209px' border='1px' borderRadius='12px' display='flex' flexDir='column'  gap='16px' p='16px' borderColor='#DADCE0'  >

                                                       <Box w='356px' h='109px'   display='flex' justifyContent='space-between' alignItems='flex-start' alignSelf='stretch'  >

                                                            <Box w='155px' h='109px'  display='flex' flexDir='column' justifyContent='center' alignItems='flex-start' gap='10px'  >
                                                                 <Center w='50px' h='50px' borderRadius='12px' bg='#EBE8FD'  >
                                                                      <VscBriefcase  style={{width:"21.05px",height:'20px',color:"#6548EE"}} />

                                                                 </Center>
                                                                 <Box w='155px' h='49px'  display='flex' flexDir='column'  alignItems='flex-start' gap='2px' >
                                                                       <Box w='155px' h='25px'  fontSize='18px' fontWeight='500' lineHeight='25.2px' color='#1C4980' >
                                                                            Math Assessment
                                                                       </Box>
                                                                       <Box w='137px' h='22px' display='flex'  alignItems='center' gap='10px' >
                                                                          <Box w='26px' h='20px'  fontSize='14px' fontWeight='600' lineHeight='19.6px' color='#1C4980' >
                                                                            Job
                                                                         </Box>
                                                                         <Divider orientation='vertical' h='16px' borderColor='#DADCE0' />
                                                                         <Center w='91px' h='22px' >
                                                                           <BiCalendar style={{width:"11.67px",height:'12.83px',color:"#1C4980"}}  />
                                                                           <Text color='#8DA4BF' fontSize='12px' fontWeight='500' lineHeight='14.52px'  >
                                                                                20 Apr 2023
                                                                           </Text>
                                                                         </Center>
                                                                      </Box>

                                                                 </Box>
                                                            </Box>
                                                             
                                                            <Center w='30px' h='30px'  >
                                                                 <BiDotsVerticalRounded style={{width:"20px",height:'20px'}} />

                                                            </Center>

                                                       </Box>

                                                      <Divider w='356px' border='1px dashed' borderColor='#DADCE0' />

                                                      <Box w='356px' h='36px'   display='flex' justifyContent='space-between' alignItems='center' alignSelf='stretch'  >
                                                          <Box w='123px' h='36px'   display='flex'  gap='14px' alignItems='flex-start'  >
                                                             <Box w='50px' h='36px'  color='#1C4980' >
                                                                 <Box w='19px' h='20px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='50px' h='17px'  fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                    Duration
                                                                 </Box>
                                                              </Box>

                                                              <Box w='59px' h='36px'   color='#1C4980' >
                                                                 <Box w='19px' h='20px'  fontSize='14px' fontWeight='600' lineHeight='19.6px'  >
                                                                    00
                                                                 </Box>
                                                                 <Box w='59px' h='17px'  fontSize='12px' fontWeight='500' lineHeight='16.8px' color='#1C4980' >
                                                                    Questions
                                                                 </Box>
                                                              </Box>
                                                          </Box>

                                                          <Box w='145.82px' h='30px'   display='flex' justifyContent='center' alignItems='center' gap='10px'  color='#1C4980'  >
                                                             <Center  w='77px' h='30px' border='1px' borderRadius='50px'  >
                                                                 <AiOutlineLink size='20px' />
                                                                 <Center w='39px' h='20px' fontSize='14px' fontWeight='500' lineHeight='19.6px' color='#1C4980' >
                                                                   Share
                                                                 </Center>
                                                             </Center>
                                                             <Box   w='58.82px' h='30px' display='flex' alignItems='center' gap='4px' pos='relative' >
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
                                                          </Box>


                                                      </Box>

                                                     
                                                    

                                             </Center>    
                               
                               

                                     </Box>
                               
                                 </Box>

                            </Box>

                        


                         </Box>

                     </Box>
                    
  
               </Box>


          </Box>


    </Box>


  
    </>
  )
}

export default DestopLayout