import React, { useEffect, useState, useContext } from "react";
import Dashboard from "./Dashboard";
import { motion } from "framer-motion";
import { RingLoader } from "react-spinners";
import {toast} from 'react-hot-toast'
const Shop = () => {
  const [shop, setShop] = useState({});
  const [disabled, setdisabled] = useState(true);
  const [inputDetails, setInputDetails] = useState({})


  const handleChange = (e) => {
    const { name, value } = e.target
    const intVal = parseInt(value)
    if (intVal < 1) {
      return
    }

    setInputDetails({ ...inputDetails, [name]: intVal })
  };


  useEffect(() => {
    if (shop?.bwSingle === inputDetails?.bwSingle && shop?.colorPrice === inputDetails?.colorPrice && shop?.spiralPrice === inputDetails?.spiralPrice && shop?.coverPrice === inputDetails?.coverPrice && shop?.bwDouble === inputDetails?.bwDouble && shop?.deliveryPrice === inputDetails?.deliveryPrice && shop?.fastDeliveryPrice === inputDetails?.fastDeliveryPrice) {
      setdisabled(true)
    } else {
      setdisabled(false)
    }

  }, [inputDetails])

  const getShop = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/shop/details`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "x-auth-token": localStorage.getItem("filedesk"),
        },
      }
    );
    const data = await res.json();
    if (data.error) {
      console.log(data.error);
    }
    console.log(data.msg)
    setShop(data.msg);
    setInputDetails(data.msg)
  };

  useEffect(() => {
    document.title = "FileDesk | Dashboard | Shop";
    getShop();

  }, []);

  return (
    <div className="container pop my-1">
      <div className="row center">
        <Dashboard />
        {
          shop?.colorPrice ? (
            <div className="col-lg-5 col-sm-12 p-3 ">
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 0.7, bounce: 0.5 }}
              >
                <h4 className="dim center fs-4">Binding Charges</h4>
                <div className="d-flex my-3 center justify-content-around">
                  <label htmlFor="spiral" className="mt-3">
                    Spiral Price:{" "}
                  </label>
                  <input
                    style={{ width: "5rem" }}
                    type="number"
                    id="spiral"
                    name="spiralPrice"
                    className="fancyinput "
                    value={inputDetails?.spiralPrice}
                    onChange={handleChange
                    }
                  />
                </div>
                <div className="d-flex my-2 center justify-content-around">
                  <label htmlFor="coverPrice" className="mt-3">
                    Cover Price:{" "}
                  </label>
                  <input
                    style={{ width: "5rem" }}
                    type="number"
                    id="cover"
                    name="coverPrice"
                    className="fancyinput "
                    value={inputDetails?.coverPrice}
                    onChange={handleChange
                    }
                  />
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 0.7, bounce: 0.5 }}
              >
                <h4 className="dim mt-5 center fs-4">Printing Charges</h4>
                <div className="d-flex my-3 center justify-content-around">
                  <label htmlFor="bwSingle" className="mt-3">
                    Black & White: <i>Single</i>
                  </label>
                  <input
                    style={{ width: "5rem" }}
                    type="number"
                    id="bwSingle"
                    name="bwSingle"
                    className="fancyinput "
                    value={inputDetails?.bwSingle}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex my-3 center justify-content-around">
                  <label htmlFor="bwDouble" className="mt-3">
                    Black & White: <i>Double</i>
                  </label>
                  <input
                    style={{ width: "5rem" }}
                    type="number"
                    id="bwDouble"
                    name="bwDouble"
                    className="fancyinput "
                    value={inputDetails?.bwDouble}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex my-2 center justify-content-around">
                  <label htmlFor="colorPrice" className="mt-3">
                    Coloured:
                  </label>
                  <input
                    style={{ width: "5rem" }}
                    type="number"
                    id="colorPrice"
                    name="colorPrice"
                    className="fancyinput"
                    value={inputDetails?.colorPrice}
                    onChange={

                      handleChange
                    }
                  />
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 0.7, bounce: 0.5 }}
              >
                <h4 className="dim mt-5 center fs-4">Delivery Charges</h4>
                <div className="d-flex my-3 center justify-content-around">
                  <label htmlFor="deliveryPrice" className="mt-3">
                    Delivery Price
                  </label>
                  <input
                    style={{ width: "5rem" }}
                    type="number"
                    id="deliveryPrice"
                    name="deliveryPrice"
                    className="fancyinput "
                    value={inputDetails?.deliveryPrice}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex my-3 center justify-content-around">
                  <label htmlFor="fastDeliveryPrice" className="mt-3">
                   Fast Delivery Price
                  </label>
                  <input
                    style={{ width: "5rem" }}
                    type="number"
                    id="fastDeliveryPrice"
                    name="fastDeliveryPrice"
                    className="fancyinput "
                    value={inputDetails?.fastDeliveryPrice}
                    onChange={handleChange}
                  />
                </div>
                
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 0.7, bounce: 0.5 }}
                className="u-f-b mt-5 center m-auto"
                onClick={async () => {
                 
                

                  const res = await fetch(
                    `${process.env.REACT_APP_SERVER_URL}/api/shop/editdetails`,
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                        // "x-auth-token": localStorage.getItem("filedesk"),
                      },
                      body: JSON.stringify(inputDetails),
                    }
                  );
                  const data = await res.json();
                  if (data.error) {
                    toast.error(data.error);
                    console.log(data.error);
                    return
                  }
                  if (data.msg) {
                    setInputDetails(data.shop);
                    setShop(data.shop);
                    toast.success(data.msg);
                  }
                  console.log(data);
                }}
                disabled={disabled}
              >
                Update
              </motion.button>

            </div>
          ) : (
            <div className="center mt-5">

              <RingLoader color="#3f51b5" size={100} />
            </div>
          )

        }
      </div>
    </div>
  );
};

export default Shop;
