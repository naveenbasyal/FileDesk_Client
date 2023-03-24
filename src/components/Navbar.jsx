import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import getToken from "../utils/getToken";

const Navbar = ({ scrollToTop }) => {
  const [activeLink, setActiveLink] = useState("home");
  const token = getToken();
  console.log(token);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    scrollToTop();
  };

  return (
    <>
      <div className="navbar d-flex shadow-out">
        <div className="navbar-brand d-inline-block fs-1 ls-2">
          <Link
            to="/"
            className="brand stroke tt"
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
        <div className="nav-items">
          <Link
            to="/"
            className={`links tt ${
              activeLink === "home"
                ? "stroke shadow-in px-3 py-2 roundedBorder"
                : "stroke-grey"
            }`}
            data-tooltip="Home"
            onClick={() => handleLinkClick("home")}
          >
            <i class="fa-solid fa-house-chimney"></i>
          </Link>
          <Link
            to="/tools"
            className={`links tt ${
              activeLink === "tools"
                ? "stroke shadow-in p-2 roundedBorder"
                : "stroke-grey"
            }`}
            data-tooltip="Tools"

            onClick={() => handleLinkClick("tools")}
          >
            <i className="fa-solid fa-screwdriver-wrench p-2"></i>
          </Link>
          <Link
            to="/dashboard"
            className={`links tt ${
              activeLink === "dashboard"
                ? "stroke shadow-in p-2 roundedBorder"
                : "stroke-grey"
            }`}
            data-tooltip="Dashboard"
            onClick={() => handleLinkClick("dashboard")}
          >
            <i class="fa-solid p-2 fa-gauge"></i>
          </Link>
          {token ? (
            <Link
              to="/"
              className={`links tt ${
                activeLink === "logout"
                  ? "stroke shadow-in p-2 roundedBorder"
                  : "stroke-grey"
              }`}
              data-tooltip="Logout"
              onClick={() => {
                handleLinkClick("logout");
                localStorage.removeItem("filedesk");
              }}
            >
              logout
            </Link>
          ) : (
            <Link
              to="/auth"
              className={`links ${
                activeLink === "auth"
                  ? "stroke shadow-in p-2 roundedBorder"
                  : "stroke-grey"
              }`}
              data-tooltip="Login/Signup"
              onClick={() => handleLinkClick("auth")}
            >
              <i className="fas fa-sign-in-alt  p-2"></i>
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
      </div>
      {/* <div className={`sidebar ${sidebarActive ? "sidebarActive" : ""}`}>
        <div className="sidebar_items d-flex flex-column center my-4">
          <a href="">Home</a>
          <a href="">service</a>
          <a href="">About</a>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
