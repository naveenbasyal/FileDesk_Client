import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    document.title = "FileDesk | Dashboard";
  }, []);

  return (
    <>
      <div className="container pop my-5 dashboard ">
        <div className="container center ">
          <div className="center"></div>
          <div className="d-flex">
            <Link
              data-tooltip="Orders"
              to="/dashboard/orders"
              className={` p-2 dim fw-bold ${
                active === "orders" ? "shadow-in" : "shadow-out "
              } mx-4 tt shadow-btn`}
              onClick={() => setActive("orders")}
            >
              <i className="fa-brands fa-shopify fs-4 mx-2 fa-shake"></i>
              Orders
            </Link>
            <Link
              data-tooltip="Charges"
              to="/dashboard/shop"
              className={`tt p-2  ${
                active === "charges" ? "shadow-in" : "shadow-out"
              } dim fw-bold  mx-4 shadow-btn`}
              onClick={() => setActive("charges")}
            >
              <i className="fa-solid fa-sack-dollar fs-4 mx-2 fa-fade"></i>
              Charges
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
