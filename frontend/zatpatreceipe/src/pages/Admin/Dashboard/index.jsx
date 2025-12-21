import React from "react";
import Sidebar from "../Sidebar";
import "../../../styles/Admin/Dashboard/index.css";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
