import React, { useState } from "react";
import { motion } from "framer-motion";
const DeliveryHeader = () => {
  return (
    <>
      <div className="delivery_header row">
        <motion.div className="container display-4 py-5 dim jsf text-capitalize fw-bold col-lg-6 col-sm-12">
          <motion.div
            initial={{ x: "-100vw" }}
            transition={{
              duration: 0.9,
              type: "spring",
              bounce: 0.5,
            }}
            animate={{ x: 0 }}
            className="mx-2 pd p-1"
          >
            <motion.span className="rubber stroke">P</motion.span>
            <motion.span className="rubber stroke">r</motion.span>
            <motion.span className="rubber stroke">i</motion.span>
            <motion.span className="rubber stroke">n</motion.span>
            <motion.span className="rubber stroke">t</motion.span>
            <motion.span className="rubber stroke">&nbsp;</motion.span>
            <motion.span className="rubber stroke">o</motion.span>
            <motion.span className="rubber stroke">n</motion.span>
            <motion.span className="rubber stroke">&nbsp;</motion.span>
            <motion.span className="rubber stroke">D</motion.span>
            <motion.span className="rubber stroke">e</motion.span>
            <motion.span className="rubber stroke">m</motion.span>
            <motion.span className="rubber stroke">a</motion.span>
            <motion.span className="rubber stroke">n</motion.span>
            <motion.span className="rubber stroke">d</motion.span>
            {/* <motion.span className="rubber stroke p-1">:</motion.span> */}
          </motion.div>
          <motion.span
            initial={{ x: "100vw" }}
            transition={{
              duration: 0.9,
              type: "spring",
              bounce: 0.5,
            }}
            animate={{ x: 0 }}
            className={`fs-1 ${window.screen.width > 500 ? "my-5" : "mt-3"} px-3 primary fw-bold center`}
          >
            Convenient online document printing services
          </motion.span>
        </motion.div>
        <div className="col-lg-5 center col-sm-12">
          <motion.img
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            initial={{ x: "100vw" }}
            transition={{
              duration: 0.7,
              type: "spring",
              bounce: 0.5,
              // damping: 5,
            }}
            animate={{ x: 0 }}
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
