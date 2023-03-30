import React from "react";
import "./body.css";
import Top from "./Top Section/Top";
import Listing from "./Listing Section/Listing";

const Body = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <Listing />
      </div>
    </div>
  );
};

export default Body;
