// import React from 'react'
// import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from '@chakra-ui/react';
// import { useRef } from 'react';



//Main function starts  


// Remove  ------------


export default function ProductCard({ image, brand, cutprice, discount, actualprice }) {


    const imagezoom = useRef()


    const handleimagezoomin = () => {
        imagezoom.current.style.scale = '1.03'
        imagezoom.current.style.transition = 'all .3s ease'
    }
    const handleimagezoomout = () => {
        imagezoom.current.style.scale = '1'

    }

    return (
        <Center py={8}>
            <Box role={'group'} p={6} maxW={'300px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                pos={'relative'}
                zIndex={1}
                _readOnly
                onMouseOver={handleimagezoomin}
                onMouseLeave={handleimagezoomout}
                _hover={{ border: '1px solid #24a3b5' }}
            >
                <Box
                    rounded={'lg'}
                    cursor='pointer'
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
                        // backgroundImage: `url(${image})`,
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
                        src={image}
                        p={3}
                        ref={imagezoom}
                    />
                </Box>
                <Stack pt={5} align={'center'}>
                    {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Brand
            </Text> */}
                    <Heading fontSize={'md'} color={'gray.500'} fontFamily={'body'} fontWeight={600}>
                        {/* {`${brand.substring(0,20)}...`} */} brand
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={600} fontSize={'xl'}>
                            {`₹${actualprice}`}
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                            {`₹${cutprice}`}
                        </Text>
                        <Text fontWeight={600} color={"#24a3b5"}>
                            {`${discount}% off`}
                        </Text>
                    </Stack>
                </Stack>

            </Box>
        </Center>
    )
}

//Main function ends

