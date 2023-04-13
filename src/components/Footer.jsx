import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer pop">
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
