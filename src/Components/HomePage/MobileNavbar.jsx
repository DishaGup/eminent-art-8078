
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Flex, IconButton, useDisclosure, Image } from "@chakra-ui/react";
import Bag from "./Bag";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
const MobileNavbar = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
    display={{ base: "flex", md: "none" }}
    justify={"space-between"}
    p="10px 60px 10px 30px"
    align="center"
    w="100%">
    <IconButton
      aria-label="hamburger"
      icon={<GiHamburgerMenu />}
      onClick={onOpen}
    />
    <MobileMenu isOpen={isOpen} onClose={onClose} />
    <Link to="/">
      {" "}
      <Image h="60px" src="lint_lightmode.png" alt="logo" />
    </Link>
    <Bag fontSize="30px" />
  </Flex>
  )
}

export default MobileNavbar