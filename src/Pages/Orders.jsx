import React, { useEffect } from "react";
import Dashboard from "./Dashboard";

const Orders = () => {
  useEffect(() => {
    document.title = "FileDesk | Dashboard | Orders";
  }, []);
  // const date = new Date()
  return (
    <div className="container my-1">
      <div className="row center">
        <Dashboard />
        <div className="col-lg-6">
          <h4 className="dim center fs-4">Orders</h4>
          <div className="card bg-color border-none p-3 shadow-out">
            <span>Date: {new Date().toLocaleString()} </span>
            <span>Order ID: 13341221 </span>
            <span>Total Files: center</span>
            <span>TotalPrice: 0 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
