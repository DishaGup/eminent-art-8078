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
  MenuItem,
} from "@chakra-ui/react";
import { BsCart3, BsHeart } from "react-icons/bs";
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
    
    <Flex display={{ base: "flex", md: "none" }} flexDirection='column'  width="100%" >
     <Flex paddingLeft="20%" width="95%" border="1px solid " margin="auto"> <SearchBar/></Flex>
       <Flex
        display={{ base: "flex", md: "none" }}
        justify={"space-between"}
        p="10px 60px 10px 30px"
        align="center"
        w="100%"
        >
        <IconButton
          aria-label="hamburger"
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
        />
        <MobileMenu isOpen={isOpen} onClose={onClose} />
        <Link to="/">
          {" "}
          <Image h="60px" src={logo} alt="logo" />
        </Link>{" "}
        <Link to="/cart">
       
          <Icon size="22px" colour="#24a3b5" as={BsCart3} />
        </Link>
        <Link to="/wishlistpage">
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
     
     
    </Flex>
  );
};

export default MobileNavbar;
