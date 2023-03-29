import { Box, Center, HStack,Editable,
    EditableInput,EditablePreview,Flex, Image } from '@chakra-ui/react'
import React from 'react'
import trendify_logo from '../../Assests/trendify_logo.jpeg'
const Navigationbar = () => {
  return (
  <Box h='1cm' position='fixed' top='0' p={3} w='95%' m={'auto'}>
    <Flex justify='space-around'>
  <Box w='20%'>
<Center>
   <Image src={trendify_logo} />
</Center>
</Box>
<HStack role='search' w='60%' border='2px solid green'>

<Editable defaultValue='What is on Your mind today' border={'1px solid black'} >
  <EditablePreview  />
  <EditableInput  />
</Editable>
</HStack>

<HStack>



</HStack>
  

  </Flex>
  </Box>    
  )
}




export default Navigationbar