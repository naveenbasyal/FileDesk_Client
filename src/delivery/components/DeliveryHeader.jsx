import React, { useState } from "react";
import { motion } from "framer-motion";
const DeliveryHeader = () => {
  return (
    <>
      <div className="delivery_header row">
        <motion.div
          className="container display-4 py-5 dim jsf text-capitalize fw-bold col-lg-6 col-sm-12"
        >
          <motion.div className="mx-1 p-1">
            <motion.span
              initial={{ y: "--100vw" }}
              transition={{
                duration: 0.3,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              P
            </motion.span>
            <motion.span
              initial={{ y: "--100vw" }}
              transition={{
                duration: 0.4,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              r
            </motion.span>
            <motion.span
              initial={{ y: "--100vw" }}
              transition={{
                duration: 0.5,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              i
            </motion.span>
            <motion.span
              initial={{ y: "--100vw" }}
              transition={{
                duration: 0.6,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              n
            </motion.span>
            <motion.span
              initial={{ y: "--100vw" }}
              transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              t
            </motion.span>
            <motion.span className="rubber stroke">&nbsp;</motion.span>
            <motion.span
              initial={{ y: "--100vw" }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              o
            </motion.span>
            <motion.span
              initial={{ y: "--100vw" }}
              transition={{
                duration: 0.9,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              n
            </motion.span>
            <motion.span className="rubber stroke">&nbsp;</motion.span>
            <motion.span
              initial={{ y: "-100vw" }}
              transition={{
                duration: 0.9,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              D
            </motion.span>
            <motion.span
              initial={{ y: "-100vw" }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              e
            </motion.span>
            <motion.span
              initial={{ y: "-100vw" }}
              transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              m
            </motion.span>
            <motion.span
              initial={{ y: "-100vw" }}
              transition={{
                duration: 0.6,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              a
            </motion.span>
            <motion.span
              initial={{ y: "-100vw" }}
              transition={{
                duration: 0.5,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              n
            </motion.span>
            <motion.span
              initial={{ y: "-100vw" }}
              transition={{
                duration: 0.4,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              d
            </motion.span>
            <motion.span
              initial={{ y: "-100vw" }}
              transition={{
                duration: 0.3,
                type: "spring",
                bounce: 0.5,
                // damping: 5,
              }}
              animate={{ y: 0 }}
              className="rubber stroke"
            >
              :
            </motion.span>
          </motion.div>
          <br />
          <motion.span
            initial={{ x: "100vw" }}
            transition={{
              duration: 0.9,
              type: "spring",
              bounce: 0.5,
              // damping: 5,
            }}
            animate={{ x: 0 }}
            className="fs-1 px-3 primary   fw-bold center"
          >
            Convenient online document printing services
          </motion.span>
        </motion.div>
        <div className="col-lg-5 center col-sm-12">
          <motion.img
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 1.2 }}
            whileHover={{ scale: 1.2 }}
            initial={{ x: "100vw" }}
            transition={{
              duration: 0.7,
              type: "spring",
              bounce: 0.5,
              // damping: 5,
            }}
            animate={{ x: 0 }}
            src="/images/delivery_header.jpg"
            className="img-fluid rounded headerImage p-2 shadow-out"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryHeader;
