import { Icon,Box,Center,Image,HStack,VStack, Card, CardBody, Heading,Stack, Text,useColorModeValue} from "@chakra-ui/react";
  import React, { useRef } from "react";
 import {FiTruck} from 'react-icons/fi'
 import {BsFillHeartFill} from 'react-icons/bs'
  import { useLocation, useNavigate, useParams } from "react-router-dom";
  
  import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { memo } from "react";
  
  function ProductCard(props) {
 const { id,path, category, sub_category } = useParams()
const {    image, title, price, discount_price,rating,params, } = props;
//console.log(path)
const imagezoom = useRef()
const handleimagezoomin=()=>{
    imagezoom.current.style.scale='1.03'
    imagezoom.current.style.transition='all .3s ease'
}
const handleimagezoomout=()=>{
    imagezoom.current.style.scale='1'
    
}
console.log(id,category)
    const navigate = useNavigate();
    const location = useLocation();

    return (
    
        <Link to={`/products/${category}/${id}/single?`}  >
        <Card maxW="sm" >
           
          <CardBody p={"5px"}   onMouseOver={handleimagezoomin}
    onMouseLeave={handleimagezoomout}  _hover={{border:'1px solid #24a3b5'}}>
           <Box  _hover={{color:'#24a3b5'}} pos='absolute' right='5' top='2' >
           <Icon size={7} as={BsFillHeartFill} />
           </Box>
         
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
             h:'4cm',
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
              </Box>
  
              <Stack mt="3" spacing="1">
                <Heading size="sm">{`${title.substring(0,20)}...`}</Heading>
             
             
                <HStack>
                  <Text fontSize="2xl" fontWeight="bold" mb={3} color={"#0076be"}>
                    Rs.{price}
                  </Text>
                  <Text
                    textDecorationLine={"line-through"}
                    color="gray.500"
                    fontSize="xl">
                    Rs.{price+350}
                  </Text>
                  <Text fontWeight={600}  color={"#24a3b5"}>
                {`${Math.floor(Math.random()*50)}% off`}
              </Text>
                </HStack>
                <StarRating  rating={rating}/> 
                <HStack >
                <Icon as={FiTruck} />
                <Text>Free Delivery</Text>
                </HStack>
              
              </Stack>
            </VStack>
          </CardBody>
        </Card>
   




       </Link>
    );
  }
  
  export default memo(ProductCard);