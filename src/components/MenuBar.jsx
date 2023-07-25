import { Box,Button,Center,Divider,Text } from '@chakra-ui/react'
import React from 'react'
import {MdOutlineDashboard,MdOutlineNoteAlt,MdOutlineQuiz,MdEventNote} from "react-icons/md"
import {PiNotepadLight} from "react-icons/pi"

const MenuBar = () => {
  return (
    <Box h='992px' display={{base:"none",sm:"block"}} w='140px' p='16px 20px 20px 30px'  pos={'fixed'} top='2px' bg={'white'} zIndex={'100'} >
                       
    {/* <------------------------Leftside menu box upper side--------------------------------------------> */}
    <Box   h='361px' w='90px' display='flex' flexDirection='column' gap="16px" >
        
        <Box h='225px' w='90px'  display='flex' flexDirection='column' gap="2px"   >

            <Box h='70px' w='90px' p='10px 20px 10px 20px'  display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='6px' borderRadius='8px'  >
                 
                 <MdOutlineDashboard  size='20px' />
                 <Text w='63px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' >
                      Dashboard
                 </Text>

            </Box>

            <Box h='70px' w={{lg:'90px'}} p='10px 20px 10px 20px' border="1px"  display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='6px' borderRadius='8px' color='#0073E6' borderColor='#0073E6' bg='#E5F1FC' >
                 <MdOutlineNoteAlt size='20px' />
                 <Text w='71px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' >
                    Assessment
                 </Text>
            </Box>

            <Box h='70px' w='90px' p='10px 20px 10px 20px'  display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='6px' borderRadius='8px' >
               <MdOutlineQuiz size='20px'  />
               <Text w='61px' h='17px' fontSize='12px' fontWeight='500' lineHeight='16.8px' >
                   My Library
               </Text>

            </Box>

        </Box>


           <Divider border='1px'  borderTop='dotted' borderBottom='0' borderColor='#BACBD5'  />

{/* <------------------------Leftside menu box lower side--------------------------------------------> */}


        <Box h='120px' w='90px'  display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='16px' >
            
            <Center w='47px' h='18px' border='1px' borderRadius='22px' p='6px 8px 6px 8px' color="#D63500" borderColor='#D63500' bg='#FBEBEA' gap='6px'  >
                <Text w='31px' h='12px' fontSize='10px' lineHeight='12.1px' fontWeight='500'color="#D63500" >
                   Admin
                </Text>
            </Center>

            <Box h='80px' w='90px' p='10px 20px 10px 20px'   display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='6px' borderRadius='8px' >
               <MdEventNote size='20px'  />
               <Text w='38px' h='34px' fontSize='12px' fontWeight='500' lineHeight='16.8px' >
                   Round Status
               </Text>

            </Box>
        </Box>

    </Box>
    </Box>
  )
}

export default MenuBar