import React from "react";
import { motion } from "framer-motion";
const ToolsHeader = () => {
  return (
    <>
      <div className="tools_header p-2 row">
        <motion.img
          whileDrag={{ scale: 1.2 }}
          whileHover={{ scale: 1.2 }}
          initial={{ x: "100vw"}}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.5,
            // damping: 5,
          }}
          animate={{ x: 0 }}
          src="images/tools_header.jpg"
          className="img-fluid pointer container rounded center headerImage col-lg-4 col-12 p-2 shadow-out"
          alt="img"
        />
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.5,
            // damping: 5,
          }}
          className="container  display-4 py-5 dim jsf text-capitalize fw-bold col-lg-6 col-sm-12"
        >
          <div className="mx-3 ls-1">
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
              P
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
              D
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
              F
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
              &nbsp;{" "}
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
              T
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
              o
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
              o
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
              l
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
              k
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
              i
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
              t
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
              :
            </motion.span>
          </div>
          <br />
          <span className="fs-1 px-3 primary   fw-bold center">
            All the Tools You Need for Managing PDFs
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default ToolsHeader;
