import React from "react";
// import styled from "styled-components";
import "./adminpage.css";
import Sidebar from "./SidebarSection/Sidebar";
import Body from "./BodySection/Body";

export const AdminPage = () => {
  return (
    <div className="body">
      <div className="container">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

// const DIV = styled.div`
//   /* background: linear-gradient(0deg, #ff934b 0%, #ff5e62 100%); */
//   /* background: #24a3b5; */
//   //main color : background: #24a3b5
// `;
