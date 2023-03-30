import React from 'react'
import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { useRef } from 'react';

const IMAGE = "https://cdn.shopclues.com/images1/thumbnails/99370/200/200/145508146-99370521-1668508420.jpg"

export default function ProductCard() {

  const imagezoom = useRef()

  console.log(imagezoom.current)
  const handleimagezoomin = () => {
    imagezoom.current.style.scale = '1.03'

  }
  const handleimagezoomout = () => {
    imagezoom.current.style.scale = '1'

  }
  return (
    <Center py={12}>
      <Box role={'group'} p={6} maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        _readOnly
        onMouseOver={handleimagezoomin}
        onMouseLeave={handleimagezoomout}
        _hover={{ border: '1px solid #24a3b5' }}
      >

        <Box
          rounded={'lg'}

          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(25px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'md'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
            p={3}
            ref={imagezoom}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Brand
            </Text> */}
          <Heading fontSize={'xl'} color={'gray.500'} fontFamily={'body'} fontWeight={300}>
            i7S TWS Twins Wireless...
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ₹57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              ₹199
            </Text>
            <Text fontWeight={800} color={"#24a3b5"}>
              93% Off
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}