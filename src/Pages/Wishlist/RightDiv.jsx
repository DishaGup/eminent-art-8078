import { Box, HStack, Text, Image, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RightDiv = () => {

  const naigate=useNavigate()
  const Items = [
    {
      id: 1,
      title: "Stylish Men Watches",
      image:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/t/r/b/l-bonflower-511-light-green-fifth-u-original-imagj85mwejpz4fq.jpeg?q=70",
      price: 243,
      rating: "3.8",
      reviews: "4637 Reviews",
      category: "men",
      tag: "menaccessories",
    },
    {
      id: 2,
      title: "Ravishing Men Watches",
      image:
        "https://images.meesho.com/images/products/67584294/aycy1_400.webp",
      image2:
        "https://images.meesho.com/images/products/67584294/aycy1_400.webp",
      price: 203,
      rating: "3.9",
      reviews: "418 Reviews",
      category: "men",
      tag: "menaccessories",
    },
  ];
   const[ wishlistData,setWishlistData]=useState(Items)
  const handleDelete=(item)=>{
   let x = wishlistData.filter((el)=>
     +el.id!=+item.id
    )
 setWishlistData(x)
  }
  console.log(wishlistData)
  return (
    <Box
      w="67%"
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      fontSize={{ sm: "xs", md: "sm", lr: "sm", "2xl": "sm" }}
    >
      <Text fontWeight={"bold"} mt="10px">
        My Wishlist
      </Text>

      {wishlistData.map((item) => {
        return (
          <Box
            display={"flex"}
            justifyContent="space-around"
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
            mt="5px"
            key={item.id}
          >
            <HStack>
              <Image
                width={"100px"}
                src={item.image}
              />
              <Box>
                <Text>{item.title}</Text>
                <Text textDecoration={"line-through"}>₹{+item.price+100} </Text>
                <Text>
                 {item.price} <span style={{ color: "green" }}>50% Off</span>{" "}
                </Text>
              </Box>
            </HStack>
            <VStack mt={"1%"}>
              <Button
                bg="orange.400"
                color={"white"}
                size={["xs", "sm", "md", "md"]}
                fontSize={["sm", "md", "md", "md"]}
                onClick={()=>{ naigate("/payments")}}
              >
                Buy Now
              </Button>
              <Button
                border={"1px solid"}
                color="orange.300"
                size={["xs", "sm", "md", "md"]}
                fontSize={["xs", "md", "md", "md"]}
                onClick={()=>handleDelete(item)}

              >
                Remove
              </Button>
            </VStack>
          </Box>
        );
      })}
    </Box>
  );
};
