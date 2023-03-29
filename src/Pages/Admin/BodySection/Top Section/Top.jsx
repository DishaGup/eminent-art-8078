import React from "react";
import "./top.css";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import user from "../../../../Assets/avatar.png";
import video from "../../../../Assets/production ID_4443773.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Trendify.</h1>
          <p>Hello Rahul, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
        </div>
        <button className="searchBtn">Search</button>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={user} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products!
          </p>

          <div className="buttons flex">
            <button className="btn">Explore Now</button>
            <button className="btn tranparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Top;
