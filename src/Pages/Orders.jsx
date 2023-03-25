import React, { useEffect } from "react";
import Dashboard from "./Dashboard";

const Orders = () => {
  useEffect(() => {
    document.title = "FileDesk | Dashboard | Orders";
  }, []);

  return (
    <div className="container my-1">
      <div className="row center">
        <Dashboard />
        <div className="col-lg-6">
          <h4 className="dim fs-4">Orders</h4>
        </div>
      </div>
    </div>
  );
};

export default Orders;
