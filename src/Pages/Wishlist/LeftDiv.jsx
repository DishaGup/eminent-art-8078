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



  return (
    <Box
      width={{ base: "70%",sm:"50%", md:"40%", lg: "40%", xl:"28%","2xl":"28%" }}  
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      fontSize={{ base: "sm", md: "md", lg: "md", xl: "md", "2xl": "md" }}
      margin={"auto"}
     >
      <Stack p="3%" >
        <HStack mb="20px" w={"100%"} justifyContent="space-around" mt={"5px"}>
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

        <HStack pl={"10%"} w={"55%"} justifyContent={"space-between"} mt={"5px"}>
          <TbNotes size="25px" justifyContent="space-around" />
          <Text pl="15%" 
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}>My Orders</Text>
        </HStack>

        

        <HStack pl={"10%"} w={"55%"} justifyContent={"space-between"} mt={"5px"}>
          <RxAvatar size="25px" />
          <Text pl="15%"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >My Profile</Text>
        </HStack>

        <HStack pl={"10%"} w={"65%"} justifyContent={"space-between"} mt={"5px"}>
          <AiOutlineStar size={"25px"} />
          <Text pl="15%"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >Rate Your Purchase</Text>
        </HStack>

      

        <HStack pl={"10%"} w={"65%"} justifyContent={"space-between"} mt={"5px"}>
          <BsHouseGear size="25px" />
          <Text pl="15%"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >My Favorite Stories</Text>
        </HStack>

        <HStack pl={"10%"} w={"65%"} justifyContent={"space-between"} mt={"5px"}>
          <BsHeadset size="25px" />
          <Text pl="15%"
          fontSize={{ base: "2xs",sm:"sm", md:"sm", lg: "sm", xl:"sm","2xl":"sm" }}
          >Help & Support</Text>
        </HStack>

        <HStack justifyContent="space-around" w={"101%"}  paddingLeft={"2%"} mt={"5px"}>
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
      </Stack>
    </Box>
  );
}
