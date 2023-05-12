import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { RxAvatar } from "react-icons/rx";
import { TbNotes } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHouseGear } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
export default function LeftDiv() {
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:4444/wishlist`).then((res) => {
      setItemCount(res.data.length);
    });
  });

// base: "0px",
//   sm: "30em", // 480px
//   md: "48em", // 768px
//   lg: "62em", // 992px
//   xl: "80em", // 1280px
//   "2xl": "96em", // 1536px

  return (
    <Box
      width={{ base: "70%",sm:"50%", md:"40%", lg: "40%", xl:"28%","2xl":"28%" }}  //{ base: "column",sm:"column", md:"row", lg: "row", xl:"row","2xl":"row" }
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      fontSize={{ base: "sm", md: "md", lg: "md", xl: "md", "2xl": "md" }}
      margin={"auto"}
     >
      <Stack p="3%">
        <HStack mb="20px" w={"100%"} justifyContent="space-around">
          <Text color="teal">My Account</Text>
          <Button
            ml="20%"
            bg="orange.400"
            color="white"
            size={["2xs", "sm", "md", "md","sm"]}
            fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >
            Join VIP Club
          </Button>
        </HStack>

        <HStack pl={"10%"} w={"55%"} justifyContent={"space-between"}>
          <TbNotes size="25px" justifyContent="space-around" />
          <Text pl="15%" 
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}>My Orders</Text>
        </HStack>

        <HStack justifyContent="space-around" w={"100%"} paddingLeft={"3%"}>
          <HiOutlineCurrencyRupee size={"25px"} />
          <Text ml="20px"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}>My Clues Bucks</Text>
          <Button
            color={"white"}
            bg={"teal.400"}
            size={["2xs", "sm", "md", "md"]}
            fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >
            0
          </Button>
        </HStack>

        <HStack justifyContent="space-around"  w={"100%"} paddingLeft={"3%"}>
          <HiOutlineCurrencyRupee size={"25px"} />
          <Text ml="20px"  fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}>My Clues Bucks+</Text>
          <Button
            color={"white"}
            bg={"teal.400"}
            size={["2xs", "sm", "md", "md"]}
            fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >
            0
          </Button>
        </HStack>

        <HStack pl={"10%"} w={"55%"} justifyContent={"space-between"}>
          <RxAvatar size="25px" />
          <Text pl="15%"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >My Profile</Text>
        </HStack>

        <HStack pl={"10%"} w={"65%"} justifyContent={"space-between"}>
          <AiOutlineStar size="25px" />
          <Text pl="15%"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >Rate Your Purchase</Text>
        </HStack>

        <HStack justifyContent="space-around">
          <AiOutlineHeart size="25px" />
          <Text
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >MY Wishlist</Text>
          <Button
            color={"white"}
            bg={"teal.400"}
            size={["2xs", "sm", "md", "md"]}
            fontSize={["2xs", "sm", "md", "md", "md"]}
          >
            {itemCount}
          </Button>
        </HStack>

        <HStack pl={"10%"} w={"65%"} justifyContent={"space-between"}>
          <BsHouseGear size="25px" />
          <Text pl="15%"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >My Favorite Stories</Text>
        </HStack>

        <HStack pl={"10%"} w={"65%"} justifyContent={"space-between"}>
          <BsHeadset size="25px" />
          <Text pl="15%"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >Help & Support</Text>
        </HStack>
      </Stack>
    </Box>
  );
}
