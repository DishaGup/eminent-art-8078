import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import "./productspage.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineQuestionCircle, AiFillStar } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import discountoff from "../../Assests/singlepage.png";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import Navmain from "../HomePage/Navmain.jsx";
import axios from "axios";
import { getSingleProducts } from "../../Redux/ProductReducer/action";
import ColorPalette from "./ColorPalette";

import { Coupon, OneMoreOffer } from "./OneMoreOffer";


const SingleProductPageMain = () => {
  const token = localStorage.getItem("token");

  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("blue");
  const colors = ["blue", "green", "red", "yellow"];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const toast = useToast();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/products");
  };

  let { loading, productsData } = useSelector((store) => store.ProductReducer);
  let { product } = useSelector((store) => store.ProductReducer.productsData);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(getSingleProducts(id));
    getCartData();
  }, []);

  const getCartData = async () => {
    try {
      axios
        .get("https://erin-dizzy-clam.cyclic.app/trendify/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCartData(res.data.cart);
        });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(cartData);

  const handleAddToCart = () => {
    const obj = {
      image: product.image,
      title: product.title,
      price: product.price,
      category: product.category,
      quantity: 1,
    };

    axios
      .post(`https://erin-dizzy-clam.cyclic.app/trendify/cart/add`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.msg === "Please Login First!!") {
          toast({
            title: "Login First!",
            description:
              "Please do login to your account or signup to start a new journey with us!",
            status: "error",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Product added to cart!!",
            description: "The product is added to your cart",
            status: "success",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
        }
      })
      .catch((err) => {
        toast({
          title: "Login First!",
          description:
            "Please do login to your account or signup to start a new journey with us!",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const handlebuynow = () => {
    // Add logic to buy products
    toast({
      title: "Redirecting..",
      description: "Navigating To payment page.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });

    navigate("/payments");
  };

  const handleAddToWishlist = (data) => {

    let url = "https://erin-dizzy-clam.cyclic.app/trendify/wishlist"

    

    //dispatch(AddtoWishlist(item))
    let product = {
      image: data.image,
      name: data.title,
      price: data.price,
      category: data.category,
      quantity: 1,
    };

    axios
      .post(`${url}/add`, product, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // dispatch({ type: ADDTOWISHLIS_SUCCESS });
        console.log("success");
      });

    toast({
      title: "Successful!",
      description: "Product Added to wishlist!!",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Navmain />
      {product && (
        <Box display={"grid"} py={10} pt={{ base: "30px", md: "120px" }}>
          <Flex ml={{ base: "2%", sm: "2%", md: "2%", lg: "2%" }}>
            <Button
              onClick={handleGoBack}
              fontSize={{ base: "small", sm: "large", md: "larger" }}
            >
              Go Back
            </Button>
          </Flex>
          {/* Top section for image and prices */}
          <Container maxW={{ base: "80%", md: "95%", lg: "90%" }} m='auto'>
            <Grid
              gridTemplateColumns={{
                base: "90%",
                md: "50% 50%",
                lg: "60%,40%",
              }}
              gap='10px'
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              {/* images left section */}
              <Box p="10px">
                {/* for larger screen */}
                <Box display={{ base: "none", md: "none", lg: "block" }}>
                  <HStack justify={"space-between"}>
                    {/* left multiple images */}

                    <div style={{ width: "83%", marginTop: "80px", h: "7cm" }}>
                      <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        transitionTime={2000}
                        stopOnHover={false}
                      >
                        <div>
                          <img alt="1" src={product.image} />
                        </div>

                        {product.images?.map((el, ind) => (
                          <div key={ind}>
                            <img alt={el.substring(0, 5)} src={el} />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </HStack>
                </Box>
                {/* for small screen */}
                <Box display={{ base: "block", md: "block", lg: "none" }} w='90%' m='auto'>
                  <VStack w='90%' m='auto' >
                    <Carousel
                      width="80%"
                      autoPlay={true}
                      infiniteLoop={true}
                      transitionTime={2000}
                      axis="vertical"
                      stopOnHover={true} showThumbs={false}
                      showStatus={false}
                    >
                      <div>
                        <img alt="1" src={product.image} />
                      </div>
                  
                      {product.images?.map((el, ind) => (
                        <div key={ind}>
                          <img alt={el.substring(0, 5)} src={el} />
                        </div>
                      ))}
                    </Carousel>
                  </VStack>
                </Box>
              </Box>

              {/* Right sections */}
              <Box py={{ base: 6, md: 0 }}  align="left" w={{base:'80%',lg:'auto'}} m='auto' >
                <Heading
                  textAlign="center"
                  fontSize={{base:'19px',lg:"24px"}}
                  textTransform={"uppercase"}
                  color={"#0076be"}
                >
                  {product.brand}
                </Heading>
                <Heading
                  size={{ base: "md", md: "md", lg: "lg" }}
                  mb={3}
                  fontWeight={500}
                >
                  {product.title}
                </Heading>

                <Box d="flex" alignItems="center" mb={3}>
                  <HStack>
                    <Text>
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <Icon
                            as={AiFillStar}
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
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    mb={3}
                    color={"#e53e3e"}
                  >
                    Rs.{product.price}
                  </Text>
                  <Text
                    textDecoration={"line-through"}
                    fontSize="xl"
                    mb={3}
                    color="gray.500"
                  >
                    Rs.{product.price + 623}
                  </Text>
                  <Text fontSize="md" color="#24a3b5">
                    18% off
                  </Text>
                </HStack>
                <Box>
                  <VStack>
                    <Text fontSize="14px" color="gray.400">
                      Inclusive of all taxes
                    </Text>

                    <Divider borderColor={"#24a3b5"}></Divider>
                  </VStack>

                  <Box my={3} base={{display:'none',lg:'block'}} >
                    <Image src={discountoff} />

                    {/* <OneMoreOffer/> 
   <Coupon product={product} />*/}
                  </Box>

                  <Box
                    my={3}
                    border="3px solid #0076be"
                    w="max-content"
                    p={3}
                    borderRadius={"10px"}
                    base={{display:'none',lg:'block'}}
                  >
                    <ColorPalette
                      colors={colors}
                      selectedColor={selectedColor}
                      onColorChange={handleColorChange}
                    />
                  </Box>
                </Box>

                {/* <Divider borderColor={"black"}></Divider> */}
                <HStack
                  fontSize={{ base: "13px", md: "18px" }}
                  mt="20px"
                  mb="20px"
                >
                  <Icon
                    as={TbTruckDelivery}
                    fontSize={{ base: "35px", lg: "35px" }}
                  ></Icon>
                  <Text fontWeight={"medium"}>Same Day Delivery</Text>
                  <Icon as={AiOutlineQuestionCircle}></Icon>
                  <Text
                    color={"#0076be"}
                    fontWeight={"medium"}
                    cursor="pointer"
                  >
                    Check My Area
                  </Text>
                </HStack>
                <Divider borderColor={"black"}></Divider>

                <VStack spacing={3} display={{base:'none',lg:'flex'}}>
                  <HStack spacing="100px">
                    <Button
                      isLoading={loading}
                      w="200px"
                      size="lg"
                      backgroundImage="-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </Button>
                    <Button
                      isLoading={loading}
                      w="200px"
                      size="lg"
                      backgroundImage="-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)"
                      onClick={handlebuynow}
                    >
                      Buy Now
                    </Button>{" "}
                  </HStack>
                  <HStack textAlign="center" justifyContent="center">
                    <Text
                      color={"#0076be"}
                      fontWeight={"medium"}
                      cursor="pointer"
                    >
                      Add to Registry
                    </Text>
                    <Text>|</Text>
                    <Text
                      color={"#0076be"}
                      fontWeight={"medium"}
                      // onClick={addtowishlist}
                      cursor="pointer"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      Add to Wish List
                    </Text>
                  </HStack>
                </VStack>

<Box  display={{base:'block',lg:'flex'}}> 
                <VStack spacing={3} > 
                
                    <Button
                      isLoading={loading}
                      w="200px"
                      size="lg"
                      backgroundImage="-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </Button>
                
                 
                                       <Button

                      color={"#0076be"}
                      fontWeight={"medium"}
                      // onClick={addtowishlist}
                      cursor="pointer"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      Add to Wish List
                    </Button>
               
                </VStack>

</Box>



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
                      borderTop={"1px solid black"}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={{ base: "16", md: "20px" }}
                        fontWeight="bold"
                      >
                        Description
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box fontSize={{ base: "16", md: "18px" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Numquam dolore aut, vero tenetur illum odit atque eveniet
                      accusamus laborum optio architecto? Non dolores rerum
                      impedit quas laborum facilis blanditiis voluptatibus.
                    </Box>
                    <Box>
                      <Text
                        fontWeight="medium"
                        mb={{ base: "2", md: "3" }}
                        mt={{ base: "2", md: "3" }}
                        fontSize={{ base: "16", md: "20px" }}
                      >
                        Product Specifications:
                      </Text>
                      <Coupon Product={product} />
                      <List spacing="1">
                        <ListItem key={1}>
                          <Text
                            fontSize={{ base: "16", md: "18px" }}
                            fontWeight="medium"
                            display="inline-block"
                            w="35%"
                          ></Text>
                        </ListItem>
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
                        fontWeight="bold"
                      >
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
                      fontSize={{ base: "16", md: "20px" }}
                    >
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
                      fontSize={{ base: "16", md: "20px" }}
                    >
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
      )}
    </>
  );
};

export default SingleProductPageMain;
