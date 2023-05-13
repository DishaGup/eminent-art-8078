import React from "react";
import "../../Styles/Navbar/Navdrop.css";
import { gift } from "./data";
import { Link } from "react-router-dom";
const NavDrop = () => {
  return (
    <div className="bottom_cont">
      <ul id="bottom_category">
        {gift?.map((el, ind) => (
          <div id="dropdown" key={ind}>
            <li key={el} id="dropbtn">
              <Link to={`/products/${el.text.toLowerCase()}`}>{el.text}</Link>
            </li>
            <div id="dropcont">
              <div className="big_parent">
                <div id="parent">
                  <Link
                    to={`/products/${
                      el.text.toLowerCase
                    }/${el.lists.title.toLowerCase()}`}
                  >
                    <h2 className="q">{el.lists.title}</h2>
                  </Link>
                  {el.lists.Sidebar?.map((item, indi) => (
                    <div key={indi}>
                      <p className="hub">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="right_grid">
                  {el.lists.alldata?.map((divs, ind) => (
                    <div key={divs.heading + ind}>
                      <Link
                        to={`/products/${el.lists.title.toLowerCase()}/${divs.heading.toLowerCase()}`}
                      >
                        {" "}
                        <h2 className="grid_head">{divs.heading}</h2>
                      </Link>
                      {divs.child?.map((fields, ind) => (
                        <Link
                          key={fields + ind}
                          to={`/products/${el.lists.title.toLowerCase()}/${divs.heading.toLowerCase()}/${fields.toLowerCase()}`}
                        >
                          {" "}
                          <p className="hub" key={fields}>
                            {fields}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavDrop;
