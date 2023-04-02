import { Icon,Box,Center,Image,HStack,VStack, Card, CardBody, Heading,Stack, Text,useColorModeValue} from "@chakra-ui/react";
  import React, { useRef } from "react";
 import {FiTruck} from 'react-icons/fi'
 import {BsFillHeartFill} from 'react-icons/bs'
  import { useLocation, useNavigate, useParams } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { memo } from "react";
  

  function ProductCard(props) {
 const { path, category} = useParams()
const {   id, image, title, price,rating } = props;
let {loading, productsData,allData}=useSelector((store)=>store.ProductReducer)
const imagezoom = useRef()
const handleimagezoomin=()=>{
    imagezoom.current.style.scale='1.03'
    imagezoom.current.style.transition='all .3s ease'
}
const handleimagezoomout=()=>{
    imagezoom.current.style.scale='1'
    
}

const dispatch=useDispatch()
const addtowishlist=(id)=>{
  console.log('enter')

  allData.map((el)=>
 {
  if(el.id==id){
    dispatch(addtowishlist(el))
    console.log('added',el)
  }
 }) }


    const navigate = useNavigate();
    const location = useLocation();

    return (
    
        <Card maxW="sm" >
           
          <CardBody p={"5px"}   onMouseOver={handleimagezoomin}
    onMouseLeave={handleimagezoomout}  _hover={{border:'1px solid #24a3b5'}}>
                <Box zIndex='100' onClick={()=>addtowishlist(id)}   _hover={{color:'#24a3b5',zoom:'1.05'}}  pos='absolute' bottom='10' right='10' >
           <Icon   size='20px' as={BsFillHeartFill} />
           </Box>
        <Link to={`/products/${category}/${id}/single?`}  >
         
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
                {" "}
         
                </HStack>
              
              </Stack>
      
            </VStack> 
            </Link>
          </CardBody>
        </Card>
   




    );
  }
  
  export default memo(ProductCard);