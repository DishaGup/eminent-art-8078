import React from "react";
import "./top.css";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
// import user from "../../../../Assests/avatar.png";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="admintitle">
          <h1>Welcome to Trendify.</h1>
          <p>Hello Rahul, Welcome back!</p>
        </div>

        <div className="adminsearchBar flex">
          <input
            className="adminSearchInput"
            type="text"
            placeholder="Search Dashboard"
          />
        </div>
        <button className="adminsearchBtn">Search</button>

        <div className="adminDiv flex">
          <TbMessageCircle className="adminicon" />
          <MdOutlineNotificationsNone className="adminicon" />
          <div className="adminImage">
            <img
              src="https://avatars.githubusercontent.com/u/90616584?v=4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
