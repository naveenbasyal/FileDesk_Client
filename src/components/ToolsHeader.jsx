import React from "react";
import { motion } from "framer-motion";
const ToolsHeader = () => {
  return (
    <>
      <div className="tools_header p-2 row">
        <img
          src="images/tools_header.jpg"
          className="img-fluid  pointer container rounded center headerImage col-lg-4 col-12 p-2 shadow-out"
          alt="img"
        />
        <div className="container  display-4 py-5 dim jsf text-capitalize fw-bold col-lg-6 col-sm-12">
          <div className="mx-3 ls-1">
            <span className="rubber stroke">P</span>
            <span className="rubber stroke">D</span>
            <span className="rubber stroke">F</span>
            <span className="rubber stroke">&nbsp; </span>
            <span className="rubber stroke">T</span>
            <span className="rubber stroke">o</span>
            <span className="rubber stroke">o</span>
            <span className="rubber stroke">l</span>
            <span className="rubber stroke">k</span>
            <span className="rubber stroke">i</span>
            <span className="rubber stroke">t</span>
            <span className="rubber stroke">:</span>
          </div>
          <br />
          <span className="fs-1 px-3 primary   fw-bold center">
            All the Tools You Need for Managing PDFs
          </span>
        </div>
      </div>
    </>
  );
};

export default ToolsHeader;
