import React from "react";
import "./adminpage.css";
// import AllRoutes from "../../Routes/AllRoutes";
import Sidebar from "./SidebarSection/Sidebar";
import Body from "./BodySection/Body";

export const AdminPage = () => {
  return (
    <div className="body">
      <div className="containerAdmin">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};
