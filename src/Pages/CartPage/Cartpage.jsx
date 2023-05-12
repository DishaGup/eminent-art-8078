import React from "react";
import "./Cartpage.css";
import trendifyLogo from "../../Assests/trendifyLogo.jpeg";

const Cartpage = () => {
  return (
    <>
      <div id="headercart">
        <img
          src="https://secure.shopclues.com/atom_view/images/prev.png"
          alt=""
        />
        <img src={trendifyLogo} alt="" />
      </div>
    </>
  );
};

export default Cartpage;
