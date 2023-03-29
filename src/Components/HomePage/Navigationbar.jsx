import { Box, Center, HStack,Editable,
    EditableInput,EditablePreview,Flex, Image,Icon, Button } from '@chakra-ui/react'
import React from 'react'
import trendify_logo from '../../Assests/trendifyLogo.jpeg'
import {CiLocationOn} from 'react-icons/ci'
import {BsBell,BsHeart,BsCart3,BsSearch} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
const Navigationbar = () => {
  return (
  <Box  position='sticky' top='0' left='0' right='0' p={3} w='95%' overflow='hidden' m={'auto'} zIndex='1000' backgroundColor='#fff'>
    <Flex justify='space-around'>
  <Box w='20%'  mx='20px'>
<Center w='80%' >
   <Image  src={trendify_logo} />
</Center>
</Box>
<HStack h='2cm' role='search' w='60%'  display='inline-flex' >
<Icon cursor='pointer' w='20px' h='20px' width='20px' ml='5px'as={BsSearch}  backgroundColor='#e9f6f7'/>
<Editable align='left' defaultValue='What is on Your mind today?' p={1} w='70%' backgroundColor='#e9f6f7' color='#353535' fontWeight={'400'} border='1px solid #dbf0f2'>

  <EditablePreview mx='20px' border='none' _placeholder={{color:'gray.200',fontWeight:'400'}} />
  <EditableInput pl='20px' border='0px' textDecoration='none'  />
</Editable>
<Button borderRadius='0' width='100px' h='auto 40px' lineHeight='14px' p='13px 25px'cursor='pointer' backgroundImage='-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)'>Search</Button>
</HStack>

<HStack  color='#24a3b5' fontSize={22}  justify='space-between'  w='15%' >
<Icon  as={CiLocationOn} />
<Icon as={BsBell} />
<Icon as={BsHeart} />
<Icon as={BsCart3} />
</HStack>
  
  <Box w='5%'>
  {/* username */}
  </Box>
  </Flex>

<Box backgroundColor='#fff' >
  <Flex w='93%' justifyContent='space-between' align='center' m='auto' display='inline-flex'>
{
  ['Time Sales','Flu Care','Food & Beverage',"Personal Hygiene","Home Cleaning","Nutrition",
   "Kitchen & Dining","Refurbished Mobiles","Mobile Accessories"].map((el,i)=><LineNavCompo key={i} name={el}  />)
   
}

  </Flex>
</Box>

  </Box>    
  )
}

const LineNavCompo=({name,key})=>{

return(
  <Center cursor='pointer' textAlign='center'  w='180px' fontSize='13px' h='1cm'   key={key} href='#' _hover={{color:'#24a3b5'}}> 
{name}
  </Center>
)

}




export default Navigationbar