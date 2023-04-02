import { border, Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { RxAvatar } from "react-icons/rx";
import { TbNotes } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCursor, BsHouseGear } from "react-icons/bs";
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
      width={{ base: "98%", lg: "28%" }}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      fontSize={{ base: "sm", md: "md", lg: "md", xl: "md", "2xl": "md" }}
    >
      <Stack p="3%">
        <HStack mb="20px" w={"100%"} justifyContent="space-around">
          <Text color="teal">My Account</Text>
          <Button
            ml="20%"
            bg="orange.400"
            color="white"
            size={["2xs", "sm", "md", "md"]}
            fontSize={["xs", "sm", "md", "md", "md"]}
          >
            Join VIP Club
          </Button>
        </HStack>

        <HStack pl={"10%"} w={"55%"} justifyContent={"space-between"}>
          <TbNotes size="25px" justifyContent="space-around" />
          <Text pl="15%">My Orders</Text>
        </HStack>

        <HStack justifyContent="space-around" w={"100%"} marginLeft={"30%"}>
          <HiOutlineCurrencyRupee size={"25px"} />
          <Text ml="20px">My Clues Bucks</Text>
          <Button
            color={"white"}
            bg={"teal.400"}
            size={["2xs", "sm", "md", "md"]}
            fontSize={["xs", "sm", "md", "md", "md"]}
          >
            0
          </Button>
        </HStack>

        <HStack justifyContent="space-around">
          <HiOutlineCurrencyRupee size={"25px"} />
          <Text ml="20px">My Clues Bucks+</Text>
          <Button
            color={"white"}
            bg={"teal.400"}
            size={["2xs", "sm", "md", "md"]}
            fontSize={["xs", "sm", "md", "md", "md"]}
          >
            0
          </Button>
        </HStack>

        <HStack pl={"10%"} w={"55%"} justifyContent={"space-between"}>
          <RxAvatar size="25px" />
          <Text pl="15%">My Profile</Text>
        </HStack>

        <HStack pl={"10%"} w={"65%"} justifyContent={"space-between"}>
          <AiOutlineStar size="25px" />
          <Text pl="15%">Rate Your Purchase</Text>
        </HStack>

        <HStack justifyContent="space-around">
          <AiOutlineHeart size="25px" />
          <Text>MY Wishlist</Text>
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
          <Text pl="15%">My Favorite Stories</Text>
        </HStack>

        <HStack pl={"10%"} w={"65%"} justifyContent={"space-between"}>
          <BsHeadset size="25px" />
          <Text pl="15%">Help & Support</Text>
        </HStack>
      </Stack>
    </Box>
  );
}
