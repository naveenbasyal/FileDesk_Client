import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer pop">
      {/* <div className="position-relative">
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div> */}
      <div className="d-flex fc justify-content-evenly my-5">
        <span>
          <i className="fa-regular fa-copyright"></i>FileDesk 2023 , All rights
          reserved.
        </span>
        <span>Made with 💖</span>
      </div>
    </div>
  );
};

export default Footer;
