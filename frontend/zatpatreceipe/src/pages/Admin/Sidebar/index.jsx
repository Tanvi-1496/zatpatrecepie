// Sidebar.jsx
import React from "react";
import "../../../styles/Admin/Sidebar/index.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiPowerButton } from "react-icons/gi";

const Sidebar = ({ setActiveState }) => {
  const navigate = useNavigate();
  return (
    <aside className="admin-sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>

      <div className="sidebar-nav">
        {/* <NavLink className="sidebar-link" to="/admin-dashboard/add-product">
          ➕ Add New Product
        </NavLink> */}

        <NavLink className="sidebar-link" to="/admin-dashboard/orders">
          📦 Orders
        </NavLink>
        <button className="sidebar-logout"
          onClick={() => {
            localStorage.removeItem("adminToken");
            navigate("/myadmin-login");
          }}
        >
          <GiPowerButton />
          <p>Logout</p>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
