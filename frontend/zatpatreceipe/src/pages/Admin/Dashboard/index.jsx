import React from "react";
import Sidebar from "../Sidebar";
import AddProduct from "../AddProduct";
import Order from "../Orders";
import '../../../styles/Admin/Dashboard/index.css'; 

const Dashboard = () => {
  const [activeState, setActiveState] = React.useState("orders");

  return (
    <div className="dashboard">
      <Sidebar setActiveState={setActiveState} />

      {activeState === "addProduct" && <AddProduct />}
      {activeState === "orders" && <Order />}
    </div>
  );
};

export default Dashboard;
