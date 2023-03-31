import React from "react";
import { motion } from "framer-motion";
const DeliveryHeader = () => {
  return (
    <>
      <div className="delivery_header row">
        <div
          className="container display-4 py-5 dim jsf text-capitalize fw-bold col-lg-6 col-sm-12"
        >
          <div className="mx-2 pd p-1">
            <span className="rubber stroke">P</span>
            <span className="rubber stroke">r</span>
            <span className="rubber stroke">i</span>
            <span className="rubber stroke">n</span>
            <span className="rubber stroke">t</span>
            <span className="rubber stroke">&nbsp;</span>
            <span className="rubber stroke">o</span>
            <span className="rubber stroke">n</span>
            <span className="rubber stroke">&nbsp;</span>
            <span className="rubber stroke">D</span>
            <span className="rubber stroke">e</span>
            <span className="rubber stroke">m</span>
            <span className="rubber stroke">a</span>
            <span className="rubber stroke">n</span>
            <span className="rubber stroke">d</span>
            {/* <  span className="rubber stroke p-1">:</  span> */}
          </div>
          <span
            className={`fs-1 ${
              window.screen.width > 500 ? "my-5" : "mt-3"
            } px-3 primary fw-bold center`}
          >
            Convenient online document printing services
          </span>
        </div>
        <div className="col-lg-5 center col-sm-12">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              bounce: 0.5,
            }}
            src="/images/delivery_header.jpg"
            className="img-fluid  rounded headerImage p-2 shadow-out"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryHeader;
