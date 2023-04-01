import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  useEffect(() => {
    document.title = "FileDesk | Dashboard";
  }, [])

  return (
    <>
      <div className="container pop my-5 dashboard ">
        <div className="container center ">
          <div className="d-flex">
            <Link
              data-tooltip="Orders"
              to="/dashboard/orders"
              className="shadow-btn dim fw-bold shadow-out mx-4 tt"
            >
              <i class="fa-brands fa-shopify fs-2 fa-shake"></i>
            </Link>
            <Link
              data-tooltip="Charges"
              to="/dashboard/shop"
              className="tt shadow-out dim fw-bold shadow-btn mx-4"
            >
              <i class="fa-solid fa-sack-dollar fs-2 fa-fade"></i>
            </Link>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Dashboard;