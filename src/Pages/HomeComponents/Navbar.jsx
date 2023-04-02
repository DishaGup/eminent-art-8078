



//////REMOVINGGGGGGGGGGGG




import React, { useState } from "react";
import Button from "./Button";
import "./NavBar.css";
import { TbSearch } from "react-icons/tb";
import {
    Box, Center, HStack, Editable,
    EditableInput, EditablePreview, Flex, Grid
  } from '@chakra-ui/react'
import trendify_logo from '../../Assests/trendifyLogo.jpeg'
import { NavLink } from "react-router-dom";

import { TbLogin } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { BsBell, BsHeart, BsCart3, BsSearch } from "react-icons/bs";
const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
        <nav className="navbar">
            <h1 className="navbar-logo">
                <img className="img-tag" src={trendify_logo} alt="" />
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div className="Menu-Input-Box">
                <TbSearch className="Search-icon" />
                <input
                    className="Input-Tag"
                    type="text"
                    placeholder="What is on Your mind today?"
                />
                <button className="Input-Search-btn">Search</button>
            </div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
                <CiLocationOn />
                <BsBell />
                <BsHeart />
                <BsCart3 />
            </ul>
            <Button className="Sign-In-Btn">SIGN IN</Button>
        </nav>

        {/* sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: */}
        <Box backgroundColor='#fff' >
        <Grid w='93%'gridTemplateColumns={{sm:"repeat(2,1fr)",md:"repeat(4,1fr)", base: "repeat(6,1fr)", lg: "repeat(16,1fr)" }} justifyContent='space-between' align='center' m='auto' >
          {
            ['Time Sales', 'Flu Care', 'Food & Beverage', "Personal Hygiene", "Home Cleaning", "Nutrition",
              "Kitchen & Dining", "Refurbished Mobiles"].map((el, i) => <LineNavCompo key={i} name={el} />)

          }

        </Grid>
      </Box>
      </>
    );
};

export default Navbar;

const LineNavCompo = ({ name, key }) => {

    return (
      <Center cursor='pointer' textAlign='center' w='180px' fontSize='13px' h='1cm' key={key} href='#' _hover={{ color: '#24a3b5' }}>
        {name}
      </Center>
    )
  
  }
  