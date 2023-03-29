import React from "react";
import "./listing.css";
import { BsArrowRightShort } from "react-icons/bs";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <button>
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Listing;
