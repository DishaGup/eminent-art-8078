import React from "react";
import "./sidebar.css";
import trendifyLogo from "../../../Assests/trendifyLogo.jpeg";
import { IoMdSpeedometer } from "react-icons/io";
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy } from "react-icons/bs";
import {
  MdDeliveryDining,
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={trendifyLogo} alt="" />
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">Quick Menu</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/adminpage" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="/adminteam" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">Team Members</span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="/adminproducts" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Products</span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Earnings</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">Settings</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contacts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in Trendify, please contact us from for more
            questions.
          </p>
          <button className="bttn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
