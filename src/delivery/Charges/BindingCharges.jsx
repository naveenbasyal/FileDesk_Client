import React from "react";
import { motion } from "framer-motion";
const BindingCharges = ({cover , spiral}) => {
  return (
    <>
      <table
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          bounce: 0.6,
          // damping: 5,
        }}
        className="table my-5 "
      >
        <thead>
          <tr >
            <th scope="col" className="fw-bold dim">
              Binding
            </th>
            <th scope="col" className="dim">
              <i className="p-1 stroke fa-solid fa-hand-holding-dollar"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spiral Binding</td>
            <td>₹{spiral}.00</td>
          </tr>
          <tr>
            <td> Plastic Cover</td>
            <td>₹{cover}.00</td>
          </tr>
         
        </tbody>
      </table>
    </>
  );
};

export default BindingCharges;
