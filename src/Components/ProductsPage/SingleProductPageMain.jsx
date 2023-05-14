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

import { Link, useParams, useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineQuestionCircle, AiFillStar } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import discountoff from "../../Assests/singlepage.png";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import Navmain from "../HomePage/Navmain.jsx";
import axios from "axios";

const SingleProductPageMain = () => {
  const token = localStorage.getItem("token");

  const { id } = useParams();

  const toast = useToast();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/products");
  };

  const [data, setData] = useState({});

  let { loading, productsData } = useSelector((store) => store.ProductReducer);

  //console.log(productsData.products);
  useEffect(() => {
    // window.scrollTo(0, 0);
    const data = productsData.products.find((el) => el._id === id);
    setData(data);
  }, []);

  // useEffect(() => {
  //   dispatch(getSingleProducts(id));
  // }, []);

  const handleClick = () => {
    const obj = {
      image: data.image,
      title: data.title,
      price: data.price,
      category: data.category,
      quantity: 1,
    };

    axios
      .post(`http://localhost:8080/trendify/cart/add`, obj, {
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

    // console.log(obj,"objClick")
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

  return (
    <>
      <Navmain />
      {productsData.products && (
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
          <Container
            maxW={{ base: "80%", md: "95%", lg: "90%" }}
            key={data._id}
          >
            <Grid
              gridTemplateColumns={{
                base: "100%",
                md: "50% 50%",
                lg: "60%,40%",
              }}
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
                      <Carousel autoPlay>
                        <div>
                          <img alt="1" src={data.image} />
                        </div>
                        <div>
                          <img alt="2" src={data.image2} />
                        </div>
                        <div>
                          <img
                            alt=""
                            src="https://th.bing.com/th/id/R.cbc82af939081036784d5a25eef97567?rik=kSY%2btYZ3WJEG%2bw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-0lMF5Ciqcc4%2fVqERZmlvEGI%2fAAAAAAAABVU%2fFLECfobh3Yg%2fs1600%2fShopclues-4th-aniversary-sale.png&ehk=MpFW%2fxBFlenYs8ePTe%2fJYjNOL19YnLcepuIGD5q2NWQ%3d&risl=&pid=ImgRaw&r=0"
                          />
                        </div>
                      </Carousel>
                    </div>
                  </HStack>
                </Box>
                {/* for small screen */}
                <Box display={{ base: "block", md: "block", lg: "none" }}>
                  <VStack>
                    <Box overflow="hidden">
                      <Image src={data.image} alt={"image"} objectFit="cover" />
                    </Box>
                    <HStack align="flex-start">
                      <Box h="100px" overflow="hidden">
                        <Image
                          src={data.image2 ? data.image2 : ""}
                          alt={`Image2`}
                          objectFit="cover"
                        />
                      </Box>
                    </HStack>
                  </VStack>
                </Box>
              </Box>

              {/* Right sections */}
              <Box py={{ base: 6, md: 0 }} pl={{ md: 6 }} align="left">
                <Heading
                  size={{ base: "md", md: "md", lg: "lg" }}
                  mb={3}
                  fontWeight={500}
                >
                  {data.title}
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
                              i < Math.floor(data.rating)
                                ? "yellow.500"
                                : "gray.300"
                            }
                          />
                        ))}
                    </Text>
                    <Text ml={2} color="gray.500">
                      ({data.rating})
                    </Text>
                    <Text color={"#0076be"} fontWeight="medium">
                      | <Link>Write a Review {data.reviews} </Link>
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
                    Rs.{data.price}
                  </Text>
                  <Text
                    textDecoration={"line-through"}
                    fontSize="xl"
                    mb={3}
                    color="gray.500"
                  >
                    Rs.{data.price + 623}
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

                  <Box my={3}>
                    <Image src={discountoff} />
                  </Box>
                </Box>

                {/* <Divider borderColor={"black"}></Divider> */}
                <HStack
                  fontSize={{ base: "16", md: "18px" }}
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

                <VStack spacing={3}>
                  <HStack spacing="100px">
                    <Button
                      isLoading={loading}
                      w="200px"
                      size="lg"
                      backgroundImage="-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)"
                      onClick={handleClick}
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
                  <HStack display="inline-flex">
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
                    >
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
                      <List spacing="1">
                        {/* {product &&
                    product.product_specifications.product_specification.map(
                      (spec, index) => ( */}
                        <ListItem key={1}>
                          <Text
                            fontSize={{ base: "16", md: "18px" }}
                            fontWeight="medium"
                            display="inline-block"
                            w="35%"
                          >
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
