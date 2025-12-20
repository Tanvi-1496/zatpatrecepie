// Sidebar.jsx
import React from "react";
import "../../../styles/Admin/Sidebar/index.css";

const Sidebar = ({ setActiveState }) => {
  return (
    <aside className="admin-sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>

      <div className="sidebar-nav">
        <button
          className="sidebar-link"
          onClick={() => setActiveState("addProduct")}
        >
          ➕ Add New Product
        </button>

        <button
          className="sidebar-link"
          onClick={() => setActiveState("orders")}
        >
          📦 Orders
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
