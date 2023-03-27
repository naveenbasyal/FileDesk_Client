import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import getToken from "../utils/getToken";

const Navbar = ({ scrollToTop }) => {
  const sw = window.screen.width;
  const [activeLink, setActiveLink] = useState("home");
  const [showSidebar, setShowSidebar] = useState(false);
  const token = getToken();
  // console.log(token);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    scrollToTop();
    setShowSidebar(false);
  };

  // sidebar Function
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="navbar d-flex shadow-out">
        <div className="navbar-brand d-inline-block fs-1 ls-2">
          <Link
            to="/"
            className={`brand stroke ${sw > 500 ? "tt" : ""}`}
            data-tooltip="Home"
            onClick={() => handleLinkClick("home")}
          >
            <span className="rubber stroke ">F</span>
            <span className="rubber stroke ">I</span>
            <span className="rubber stroke ">L</span>
            <span className="rubber stroke ">E</span>
            <span className="rubber stroke ">D</span>
            <span className="rubber stroke ">E</span>
            <span className="rubber stroke ">S</span>
            <span className="rubber stroke ">K</span>
          </Link>
        </div>
        <div className={`nav-items ${showSidebar ? "show" : ""}`}>
          <Link
            to="/"
            className={`links ${sw > 500 ? "tt" : ""} ${
              activeLink === "home"
                ? "stroke shadow-in px-3 py-2 roundedBorder"
                : "stroke-grey"
            }`}
            data-tooltip="Home"
            onClick={() => handleLinkClick("home")}
          >
            <i className="fa-solid fa-house-chimney"></i>
            <span className="link-name px-3">Home</span>
          </Link>
          <Link
            to="/tools"
            className={`links ${sw > 500 ? "tt" : ""} ${
              activeLink === "tools"
                ? "stroke shadow-in p-2 roundedBorder"
                : "stroke-grey"
            }`}
            data-tooltip="Tools"
            onClick={() => handleLinkClick("tools")}
          >
            <i className="fa-solid fa-screwdriver-wrench p-2"></i>
            <span className="link-name px-3">Tools</span>
          </Link>
          <Link
            to="/dashboard"
            className={`links ${sw > 500 ? "tt" : ""} ${
              activeLink === "dashboard"
                ? "stroke shadow-in p-2 roundedBorder"
                : "stroke-grey"
            }`}
            data-tooltip="Dashboard"
            onClick={() => handleLinkClick("dashboard")}
          >
            <i className="fa-solid p-2 fa-gauge"></i>
            <span className="link-name px-3">Dashboard</span>
          </Link>
          {token ? (
            <Link
              to="/"
              className={`links pop logout ${sw > 500 ? "tt" : ""} p-2`}
              data-tooltip="Logout"
              onClick={() => {
                handleLinkClick("logout");
                localStorage.removeItem("filedesk");
              }}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/auth"
              className={`links tt ${
                activeLink === "auth"
                  ? "stroke shadow-in p-2 roundedBorder"
                  : "stroke-grey"
              }`}
              data-tooltip="Login/Signup"
              onClick={() => handleLinkClick("auth")}
            >
              <i className="fas fa-sign-in-alt  p-2"></i>
              <span className="link-name px-3">Login/Signup</span>
            </Link>
          )}
        </div>
        {/* ------------------Sidebar------------------ */}
        {/* <button
          onClick={() => !sidebarActive}
          className="shadow-btn shadow-out p-2 bar"
        >
          hh
        </button> */}

        {/* MenuBar */}
        <div className="menubar" onClick={handleToggleSidebar}>
          <i
            className={`fa-solid fa-bars  ${
              showSidebar ? "stroke shadow-in" : "stroke-grey"
            } p-2`}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
