import {
  Box,
  Center,
  HStack,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Image,
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import trendify_logo from "../../Assests/trendifyLogo.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { BsBell, BsHeart, BsCart3, BsSearch } from "react-icons/bs";
// import "./Navigationabar.module.css"
import { NavLink, Link } from "react-router-dom";

import { TbLogin } from "react-icons/tb";
import NavDrop from "./NavDrop";
import { AdminButton } from "../../Pages/Admin/AdminButton";
const Navigationbar = () => {
  return (
    <Box
      // position="fixed"
      // top="0"
      // left="0"
      display={{ base: "none", md: "block" }}
      right="0"
      p={3}
      w="100%"
      // overflow="hidden"
      m={"auto"}
      zIndex="1000"
      backgroundColor="#fff"
    >
      <Flex justify="space-around">
        <Box w="20%" mx="20px">
          <Center w="80%">
            <button>
              <NavLink to="/">
                <Image src={trendify_logo} />
              </NavLink>
            </button>
          </Center>
        </Box>
        <HStack h="2cm" role="search" w="60%" display="inline-flex">
          <Icon
            cursor="pointer"
            w="20px"
            h="20px"
            width="20px"
            ml="5px"
            as={BsSearch}
            backgroundColor="#e9f6f7"
          />
          <Editable
            align="left"
            placeholder="What is on Your mind today?"
            p={1}
            w="70%"
            backgroundColor="#e9f6f7"
            color="#353535"
            fontWeight={"400"}
            border="1px solid #dbf0f2"
          >
            <EditablePreview
              mx="20px"
              border="none"
              _placeholder={{ color: "gray.200", fontWeight: "400" }}
            />
            <EditableInput pl="20px" border="0px" textDecoration="none" />
          </Editable>
          <Button
            borderRadius="0"
            width="100px"
            h="auto 40px"
            lineHeight="14px"
            p="13px 25px"
            cursor="pointer"
            backgroundImage="-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)"
          >
            Search
          </Button>
        </HStack>

        <HStack color="#24a3b5" fontSize={22} justify="space-between" w="15%">
          <Icon as={CiLocationOn} />
          <Icon as={BsBell} />

          <Link to="/wishlistpage">
            {" "}
            <Icon as={BsHeart} />{" "}
          </Link>

          <Link to="/cartpage">
            {" "}
            <Icon as={BsCart3} />{" "}
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
        </HStack>
        <Box w="3%">{/* username */}</Box>
      </Flex>
      <NavDrop />
    </Box>
  );
};

export default Navigationbar;
