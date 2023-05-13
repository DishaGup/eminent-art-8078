
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Flex, IconButton, useDisclosure, Image, Icon } from "@chakra-ui/react";
import {BsCart3 } from 'react-icons/bs'

import { Link } from "react-router-dom";
import MobileMenu from "./Mobilemenu";
import logo from '../../Assests/trendifyLogo.jpeg'
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
      <Image h="60px" src={logo} alt="logo" />
    </Link>
 {' '}
 <Link to='/cart' >
     <Icon size='22px' colour='#24a3b5' as={BsCart3} />
     </Link>
  </Flex>
  )
}

export default MobileNavbar