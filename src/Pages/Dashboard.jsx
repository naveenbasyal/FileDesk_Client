import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container my-5">
        <div className="container center d-flex ">
          <Link to="/dashboard/orders" className="shadow-btn shadow-out mx-4"> Orders</Link>
          <Link to="/dashboard/shop" className="shadow-out shadow-btn mx-4"> Shop</Link>
        </div>
        <div className="row center">
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
