import {
  Spinner,
  Icon,
  Box,
  Center,
  Image,
  HStack,
  VStack,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useToast,Skeleton, SkeletonCircle, SkeletonText 
} from "@chakra-ui/react";
import React, { useRef,useState } from "react";
import { FiTruck } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { memo } from "react";
import NotfoundCategory from "../../Pages/NotfoundCategory";
// import { AddToWishList } from "../../Redux/WishList/action";
import { Addtowishlist } from "../../Redux/ProductReducer/action";
import { useEffect } from "react";

function ProductCard(props) {
  const { path, category } = useParams();
  const[times,settimes]=useState(0)
  const toast=useToast()
  const { id, image, title, price, rating,discount,_id } = props;
  let { loading, productsData, wishlistdata,error } = useSelector(
    (store) => store.ProductReducer
  );
  const imagezoom = useRef();

  const handleimagezoomin = () => {
    imagezoom.current.style.scale = "1.03";
    imagezoom.current.style.transition = "all .3s ease";
  };
  const handleimagezoomout = () => {
    imagezoom.current.style.scale = "1";
  };

  const dispatch = useDispatch();

  const addtowishlist = (ids) => {
    let data = {
      ...ids,
      brand: ids.brand,
      category: ids.category,
      id: ids.id,
      image: ids.image,
      image2: ids.image2,
      price: ids.price,
      rating: ids.rating,
      reviews: ids.reviews,
      tag: ids.tag,
      title: ids.title,
      _id:ids[_id]
      
    };
    toast({
      title: 'Product Added',
          description: "Product added to wishlist.",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top',
    })
    // console.log(data);
    dispatch(Addtowishlist(data));
  };

  const navigate = useNavigate();
  const location = useLocation();

useEffect(()=>{
  const timer = setTimeout(() => {
    settimes(times + 1);
  }, 1000);
  return () => clearTimeout(timer);

},[times])



 if(loading && times<5){
  return(
    <Box padding='6' boxShadow='lg' bg='white' w='150px'>
  <SkeletonCircle size='10' />
  <Skeleton
        p={"5px"}
        onMouseOver={handleimagezoomin}
        onMouseLeave={handleimagezoomout}
        _hover={{ border: "1px solid #24a3b5" }}
      ></Skeleton>
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>

  )
 }else if(productsData.products.length<=0 || error==true){
  return <NotfoundCategory />
}
// else if( loading==true && times>=10 ){
//   return <h1>SERVER ERROR </h1>
// }
  return (
    <Card maxW="sm">
      <CardBody
        p={"5px"}
        onMouseOver={handleimagezoomin}
        onMouseLeave={handleimagezoomout}
        _hover={{ border: "1px solid #24a3b5" }}
      >
        <Box
          zIndex="100"
          onClick={() => addtowishlist(props)}
          _hover={{ color: "#24a3b5", zoom: "1.05" }}
          pos="absolute"
          bottom="10"
          right="10"
        >
          <Icon size="20px" as={BsFillHeartFill} />
        </Box>
        <Link to={`/products/${category}/single/${_id}`} >
          <VStack p="10px">
            <Box h="300px" overflow="hidden">
              <Box
                rounded={"lg"}
                cursor="pointer"
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "4cm",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  // backgroundImage: `url(${image})`,
                  filter: "blur(25px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"md"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={image}
                  p={3}
                  ref={imagezoom}
                />
              </Box>
            </Box>

            <Stack mt="3" spacing="1">
              <Heading size="sm">{`${title.substring(0, 20)}...`}</Heading>

              <HStack>
                <Text fontSize="2xl" fontWeight="bold" mb={3} color={"#0076be"}>
                  Rs.{price}
                </Text>
                <Text
                  textDecorationLine={"line-through"}
                  color="gray.500"
                  fontSize="xl"
                >
                  Rs.{price + 350}
                </Text>
                <Text fontWeight={600} color={"#24a3b5"}>
                  {discount}% off
                </Text>
              </HStack>
              <StarRating rating={rating?rating : 3} />
              <HStack>
                <Icon as={FiTruck} />
                <Text>Free Delivery</Text>{" "}
              </HStack>
            </Stack>
          </VStack>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
