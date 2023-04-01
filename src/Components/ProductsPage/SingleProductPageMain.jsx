import {
    Box, Button,  Container,  Divider,  Grid,  Heading, HStack, Image,Input,Text, useToast, VStack,Icon, Accordion,  AccordionItem,
    AccordionButton, AccordionIcon,  AccordionPanel, List,  ListItem, useDisclosure, Flex, Spinner} from "@chakra-ui/react";
  
import { Link, useParams, useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineQuestionCircle,AiFillStar } from "react-icons/ai";
import React,{useEffect} from "react";
import discountoff from '../../Assests/singlepage.png'
import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../../Redux/ProductReducer/action";
import { memo } from "react";



const SingleProductPageMain = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    const toast = useToast();
    const { id } = useParams();
    const dispatch = useDispatch();
    let {loading, productsData}=useSelector((store)=>store.ProductReducer)
    const [product, setProduct] = React.useState({});
 
  const handleAddToCart = () => {
    // Add logic to add product to cart
  };
  useEffect(()=>{
    dispatch(getSingleProducts(5)).then((res)=>setProduct(res.payload.data)).catch((err)=>console.log(err))
  },[])
  
const handlebuynow=()=>{
  // Add logic to buy products
}
const addtowishlist=()=>{
  
}
  if (product.length === 0) {
    return (
      <Box pt={"23%"} pb="15%">
        <Spinner />
      </Box>
    );
  } else {

  return (
    <Box display={"grid"} py={10} pt={{ base: "30px", md: "120px" }}>
    <Flex ml={{ base: "2%", sm: "2%", md: "2%", lg: "2%" }}>
      <Button
        onClick={handleGoBack}
        fontSize={{ base: "small", sm: "large", md: "larger" }}>
        Go Back
      </Button>
    </Flex>
    {/* Top section for image and prices */}
    <Container maxW={{ base: "80%", md: "95%", lg: "90%" }}>
      <Grid
        gridTemplateColumns={{ base: "100%", md: "50% 50%", lg: "60%,40%" }}
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between">
        {/* images left section */}
        <Box p="10px">
          {/* for larger screen */}
          <Box display={{ base: "none", md: "none", lg: "block" }}>
            <HStack justify={"space-between"}>
              {/* left multiple images */}

              <VStack
                align="flex-start"
                gap={0}
                w={{ base: "20%", md: "30%" }}>
              
                      <Box
                     
                      
                        overflow="hidden">
                        <Image
                          src={product.image}
                          alt={`Image`}
                         
                          objectFit="contain"/>
                                          
                      </Box>
             
                      <Box h="100px" overflow="hidden">
                              <Image
                                src={product.image2?product.image2:''}
                                alt={`Image2`}
                                objectFit="cover"                              
                              />
                            </Box>


              </VStack>
              
            </HStack>
          </Box> 
             {/* for small screen */}
             <Box display={{ base: "block", md: "block", lg: "none" }}>
                <VStack>
                  <Box
                    overflow="hidden"        >
                   
                      <Image
                        src={product.image}
                        alt={'image'}
                        objectFit="cover"
                      />
                  </Box>
                  <HStack align="flex-start">
                  
                            <Box h="100px" overflow="hidden">
                              <Image
                               src={product.image2?product.image2:''}
                                alt={`Image2`}
                                objectFit="cover"                              
                              />
                            </Box>
                       
                  </HStack>
                </VStack>
              </Box>
          



          
          
          </Box>
        

        {/* Right sections */}
        <Box py={{ base: 6, md: 0 }} pl={{ md: 6 }} align='left'>
          <Heading size={{ base: "md", md: "md", lg: "lg" }} mb={3} fontWeight={500}>
            {product.title}
          </Heading>

          <Box d="flex" alignItems="center" mb={3}>
            <HStack>
              <Text>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <Icon as={AiFillStar}
                      key={i}
                      color={
                        i < Math.floor(product.rating)
                          ? "yellow.500"
                          : "gray.300"
                      }
                    />
                  ))}
              </Text>
              <Text ml={2} color="gray.500">
                ({product.rating})
              </Text>
              <Text color={"#0076be"} fontWeight="medium">
                | <Link>Write a Review {product.reviews} </Link>
              </Text>
            </HStack>
          </Box>
          <HStack>
            <Text fontSize="2xl" fontWeight="bold" mb={3} color={"#e53e3e"}>
              Rs.{product.price}
            </Text>
            <Text
              textDecoration={"line-through"}
              fontSize="xl"
              mb={3}
              color="gray.500">
              Rs.{product.price+623}
            </Text>
            <Text fontSize='md' color='#24a3b5' >18% off</Text>
          </HStack>
          <Box>
            <VStack>
              <Text fontSize='14px' color='gray.400' >Inclusive of all taxes</Text>
             
              <Divider borderColor={"#24a3b5"}></Divider>
            </VStack>
       
    <Box my={3}>
      <Image src={discountoff}  />
    </Box>


          </Box> 

          {/* <Divider borderColor={"black"}></Divider> */}
          <HStack fontSize={{ base: "16", md: "18px" }} mt="20px" mb="20px">
            <Icon
              as={TbTruckDelivery}
              fontSize={{ base: "35px", lg: "35px" }}></Icon>
            <Text fontWeight={"medium"}>Same Day Delivery</Text>
            <Icon as={AiOutlineQuestionCircle}></Icon>
            <Text color={"#0076be"} fontWeight={"medium"} cursor="pointer">
              Check My Area
            </Text>
          </HStack>
          <Divider borderColor={"black"}></Divider>

          <VStack spacing={3}>
            <HStack spacing='100px'> 
            <Button
              isLoading={loading}
              w="200px"
      
              size="lg"
              backgroundImage='-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)'
              onClick={handleAddToCart}>
              Add to cart
            </Button>
            <Button
              isLoading={loading}
              w="200px"
      
              size="lg"
              backgroundImage='-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)'
              onClick={handlebuynow}>
             Buy Now
            </Button>  </HStack>
            <HStack display='inline-flex'>
              <Text
                color={"#0076be"}
                fontWeight={"medium"}
                cursor="pointer">
                Add to Registry
              </Text>
              <Text>|</Text>
              <Text
                color={"#0076be"}
                fontWeight={"medium"}
                onClick={addtowishlist}
                cursor="pointer">
                Add to Wish List
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Grid>
      {/* Bottom section for description */}
      <Box mt="30px">
        <Accordion defaultIndex={[0]} allowMultiple>
          {/* description */}
          <AccordionItem>
            <h2>
              <AccordionButton
                borderBottom={"1px solid black"}
                borderTop={"1px solid black"}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "16", md: "20px" }}
                  fontWeight="bold">
                  Description
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box fontSize={{ base: "16", md: "18px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam dolore aut, vero tenetur illum odit atque eveniet accusamus laborum optio architecto? Non dolores rerum impedit quas laborum facilis blanditiis voluptatibus.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam dolore aut, vero tenetur illum odit atque eveniet accusamus laborum optio architecto? Non dolores rerum impedit quas laborum facilis blanditiis voluptatibus.
              </Box>
              <Box>
                <Text
                  fontWeight="medium"
                  mb={{ base: "2", md: "3" }}
                  mt={{ base: "2", md: "3" }}
                  fontSize={{ base: "16", md: "20px" }}>
                  Product Specifications:
                </Text>
                <List spacing="1">
                  {/* {product &&
                    product.product_specifications.product_specification.map(
                      (spec, index) => ( */}
                        <ListItem key={1}>
                          <Text
                            fontSize={{ base: "16", md: "18px" }}
                            fontWeight="medium"
                            display="inline-block"
                            w="35%">
                            {/* {spec.key}: */}
                          </Text>
                          <Text display="inline-block">{4}</Text>
                        </ListItem>
                      {/* )
                    )} */}
                </List>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          {/* Shipping and Returns */}
          <AccordionItem>
            <h2>
              <AccordionButton borderBottom={"1px solid black"}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "16", md: "20px" }}
                  fontWeight="bold">
                  Shipping & Returns
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontWeight="medium"
                mb={{ base: "2", md: "3" }}
                mt={{ base: "2", md: "3" }}
                fontSize={{ base: "16", md: "20px" }}>
                Shipping Details
              </Text>

              <Text fontSize={{ base: "16", md: "18px" }}>
                Shipping your purchase is easy at belk.com. Depending on
                your shipping method and the destination of your package,
                you can expect it to arrive within 3-10 business days
                Details
              </Text>
              <Text
                fontWeight="medium"
                mb={{ base: "2", md: "3" }}
                mt={{ base: "2", md: "3" }}
                fontSize={{ base: "16", md: "20px" }}>
                Return Details
              </Text>
              <Text fontSize={{ base: "16", md: "18px" }}>
                Returns are easy at belk.com. Easy returns
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Container>
  </Box>
  )
}
}
export default memo(SingleProductPageMain)