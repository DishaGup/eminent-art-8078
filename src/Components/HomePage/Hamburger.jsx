import React, { useState } from 'react';

import '../../Styles/Navbar/Hamburger.css'
import { FiSearch } from "react-icons/fi"
import { RxCardStackPlus } from "react-icons/rx"
import { AiFillDollarCircle } from "react-icons/ai"
import { BsBagPlus, BsPerson } from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {Button, IconButton, useDisclosure} from "@chakra-ui/react"
import AccountDropdown from '../Model';
import MobileMenu from './Mobilemenu'
function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }


  return (
    <div className='cont'>
      <IconButton aria-label='hamburger' icon={<GiHamburgerMenu/>} onClick={onOpen}/>
      {menuOpen && (
        <nav className="navigation">
          <button className="close" onClick={toggleMenu}>
            <span>&times;</span>
          </button>
          <ul>
            <div className="side_search">
              <input type="text" placeholder="Search" />
              <span><FiSearch /></span>
            </div>
            <span><RxCardStackPlus /><li>Lint Rewards</li></span>
            <span><AiFillDollarCircle /><li>Coupons</li></span>
           
            <span><BsBagPlus /><li>Bag</li></span>
            <span><AccountDropdown /></span>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Hamburger;