
import {
    Box, Button,  Container,  Divider,  Grid,  Heading, HStack, Image,Input,Text, useToast, VStack,Icon, Accordion,  AccordionItem,
    AccordionButton, AccordionIcon,  AccordionPanel, List,  ListItem, useDisclosure, Flex} from "@chakra-ui/react";
  
import { Link, useParams, useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineQuestionCircle,AiFillStar } from "react-icons/ai";
import React,{useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../../Redux/ProductReducer/action";



const SingleProductPageMain = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    const toast = useToast();
    const { id } = useParams();
    const dispatch = useDispatch();
    let {loading, productsData, allData, params, filters}=useSelector((store)=>store.ProductReducer)
    const [product, setProduct] = React.useState({});
 
 const [imageHeight, setImageHeight] = React.useState("100");
  const handleAddToCart = () => {
    // Add logic to add product to cart
  };
  useEffect(()=>{
    dispatch(getSingleProducts(5)).then((res)=>setProduct(res.payload.data)).catch((err)=>console.log(err))
  },[])
  

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
                     
                        h={`${imageHeight}`}
                        overflow="hidden">
                        <Image
                          src={product.image}
                          alt={`Image`}
                          objectFit="contain"/>
                                                
                      </Box>
             
              </VStack>
              
            </HStack>
          </Box> </Box>
        

        {/* Right sections */}
        <Box py={{ base: 6, md: 0 }} pl={{ md: 6 }}>
          <Heading size={{ base: "md", md: "md", lg: "lg" }} mb={3}>
            {product.product_name}
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
                | <Link>Write a Review</Link>
              </Text>
            </HStack>
          </Box>
          <HStack>
            <Text fontSize="2xl" fontWeight="bold" mb={3} color={"#e53e3e"}>
              Rs.{product.discounted_price}
            </Text>
            <Text
              textDecoration={"line-through"}
              fontSize="xl"
              mb={3}
              color="gray.500">
              Rs.{product.retail_price}
            </Text>
          </HStack>
          <Box>
            <VStack>
              <HStack spacing={0}>
                <Text w="100%" fontSize={{ base: "16", md: "18px" }}>
                  or 4 interest-free payments of Rs.17.24 with
                </Text>
                <Box w="35%" h={"100%"}>
                  <Image
                    objectFit={"cover"}
                    src="./afterpay_logo.png"></Image>
                </Box>
              </HStack>
              <Divider borderColor={"black"}></Divider>
              <Box w="full">
                <Text
                  fontWeight={"medium"}
                  w="full"
                  fontSize={{ base: "16", md: "20px" }}>
                  Special Offers:{" "}
                </Text>
                <Text
                  color={"#e53e3e"}
                  fontWeight="medium"
                  w="full"
                  fontSize={{ base: "16", md: "18px" }}>
                  Bobbi Brown Must Haves Set, $15 with Belk purchase
                </Text>
              </Box>
              <Divider borderColor={"black"}></Divider>
            </VStack>
          </Box>
          <Box mt={3}>
            <Text
              fontWeight={"medium"}
              w="full"
              fontSize={{ base: "16", md: "20px" }}>
              Apply Coupon
            </Text>
            <Input
              w="full"
              placeholder="Enter coupon code"
              size="lg"
              mt={3}
            />
            <Button colorScheme="blue" size="md" mt={3} mb="3">
              Apply
            </Button>
          </Box>
          <Divider borderColor={"black"}></Divider>
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
            <Button
              isLoading={loading}
              w="full"
              colorScheme="blue"
              size="lg"
              onClick={handleAddToCart}>
              Add to cart
            </Button>
            
            <HStack>
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
                {product.description}
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

export default SingleProductPageMain