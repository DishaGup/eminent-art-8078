import React from "react";
import { Flex, Box, Center } from "@chakra-ui/react";
import MobileNavbar from "./MobileNavbar";
import Navigationbar from "./Navigationbar";
import NavDrop from "./NavDrop";
import style from "./navmain.module.css";
const Navmain = () => {

  let auth = JSON.parse(localStorage.getItem("auth"))
  

  return (
    <Flex w="100%">
      <MobileNavbar />
      <Flex
        display={{ base: "none", md: "flex" }}
        direction={"column"}
         width={"100%"}
        id="maindiv"
        backgroundColor="#fff"
      >
        <Navigationbar />
        <Box backgroundColor="#fff">
          <Flex
            w="93%"
            justifyContent="space-between"
            align="center"
            m="auto"
            display="inline-flex"
          >
            {[
              "Time Sales",
              "Flu Care",
              "Food & Beverage",
              "Personal Hygiene",
              "Home Cleaning",
              "Nutrition",
              "Kitchen & Dining",
              "Refurbished Mobiles",
              "Mobile Accessories",
            ].map((el, i) => (
              <LineNavCompo key={i} name={el} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navmain;
const LineNavCompo = ({ name }) => {
  return (
    <Center
      cursor="pointer"
      textAlign="center"
      w="180px"
      fontSize="14px"
      h="1cm"
      href="#"
      _hover={{ color: "#24a3b5" }}
    >
      {name}
    </Center>
  );
};
