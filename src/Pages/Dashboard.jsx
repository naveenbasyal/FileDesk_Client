import React from "react";
import { Link } from "react-router-dom";
import Orders from "./Orders";
import Shop from "./Shop";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="container pop my-5">
        <div className="container center ">
          <div className="d-flex">
            <Link
              data-tooltip="Orders"
              to="/dashboard/orders"
              className="shadow-btn dim fw-bold shadow-out mx-4 tt"
            >
              <i class="fa-solid fa-box-open fs-4 py-1"></i>
            </Link>
            <Link
              data-tooltip="Shop"
              to="/dashboard/shop"
              className="tt shadow-out dim fw-bold shadow-btn mx-4"
            >
              <i class="fa-sharp fs-4 p-1 fa-solid fa-bag-shopping"></i>
            </Link>
          </div>
        </div>
        <div className="row center">
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
