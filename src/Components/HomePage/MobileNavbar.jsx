import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Flex,
  IconButton,
  useDisclosure,
  Image,
  MenuDivider,
  Icon,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,HStack,VStack
} from "@chakra-ui/react";
import { BsCart3, BsHeart ,BsSearch} from "react-icons/bs";
import { TbLogin } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./Mobilemenu";
import logo from "../../Assests/trendifyLogo.jpeg";
import LocationBox from "../LocationBox";
import { AdminButton } from "../../Pages/Admin/AdminButton";
import  SearchBar from "../SearchBar" ;

const MobileNavbar = () => {
  let auth = JSON.parse(localStorage.getItem("UserName")) || { user: "user" };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    
    <VStack  width="100%" display={{ base: "flex", md: "none" }} >
     
       <Flex
        display={{ base: "flex", md: "none" }}
        justify={"space-between"}
        p="10px 60px 5px 30px"
        align="center"
        w="100%"
        >
        <IconButton
          aria-label="hamburger"
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
        />
        <MobileMenu isOpen={isOpen} onClose={onClose} />
        <Link to="/"  color="#24a3b5"
          fontSize={22}>
          {" "}
          <Image h="60px" src={logo} alt="logo" />
        </Link>{" "}
        <Link to="/cart"  color="#24a3b5"
          fontSize={22}>
       
          <Icon size="22px" colour="#24a3b5" as={BsCart3} />
        </Link>
        <Link to="/wishlistpage"  color="#24a3b5"
          fontSize={22}>
          <Icon size="28px" colour="#24a3b5" as={BsHeart} />
        </Link>
        <Menu zIndex={200}>
          <MenuButton
            as={Button}
            bg="white"
            size="20px"
            rightIcon={<TbLogin />}
          ></MenuButton>
          <MenuList fontSize="14px">
            <MenuItem>
              
                <NavLink to="/login">LOGIN/SIGNUP</NavLink>

            </MenuItem>
            <MenuDivider m={0} />
            <AdminButton />
          </MenuList>
        </Menu>
        
      </Flex>
      <HStack h="2cm" role="search" w="80%"  m='auto' justifyContent={'space-between'} >
          <Icon
            cursor="pointer"
            w="20px"
            h="20px"
            width={{ base: "10px", md: "10px", lg: "20px" }}
            ml="5px"
            as={BsSearch}
            backgroundColor="#e9f6f7"
            
          />
            <SearchBar  />
             <Button
            borderRadius="0"
            w='fit-content'
            h="auto 40px"
            lineHeight="14px"
            p="13px 25px"
            cursor="pointer"
            color='white'
            backgroundImage="-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)"
          >
            Search
          </Button>
          <LocationBox />
        </HStack>
     
    </VStack>
  );
};

export default MobileNavbar;
