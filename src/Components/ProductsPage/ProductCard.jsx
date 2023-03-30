import { Box,Center,Image,HStack,VStack, Card, CardBody, Heading,Stack, Text,useColorModeValue} from "@chakra-ui/react";
  import React, { useRef } from "react";
 
  import { useLocation, useNavigate } from "react-router-dom";
  
  import { Link } from "react-router-dom";
import StarRating from "./StarRating";
  
  function ProductCard(props) {
const {   id, image, title, price, discount_price,   rating,  path,  params, } = props;
//console.log(props)
const imagezoom = useRef()
const handleimagezoomin=()=>{
    imagezoom.current.style.scale='1.03'
    imagezoom.current.style.transition='all .3s ease'
}
const handleimagezoomout=()=>{
    imagezoom.current.style.scale='1'
    
}

    const navigate = useNavigate();
    const location = useLocation();

    return (
    //   <Link
    //     to={`/products/${path}/${
    //       params.category === "" ? params.subCategory_like : params.category
    //     }/${id}/single`}>
        <Card maxW="sm">
          <CardBody p={"5px"}>
            <VStack p="10px">
              <Box h="300px" overflow="hidden">
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
                {/* <ImageHover image={image} /> */}
              </Box>
  
              <Stack mt="6" spacing="1">
                <Heading size="sm">{title}</Heading>
             
                <StarRating  rating={rating}/> 
                <HStack>
                  <Text fontSize="2xl" fontWeight="bold" mb={3} color={"#0076be"}>
                    Rs.{price}
                  </Text>
                  <Text
                    textDecorationLine={"line-through"}
                    color="gray.500"
                    fontSize="xl">
                    Rs.{price}
                  </Text>
                </HStack>
              </Stack>
            </VStack>
          </CardBody>
        </Card>
   




    //   </Link>
    );
  }
  
  export default ProductCard;