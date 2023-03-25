import React, { useEffect, useState, useContext } from "react";
import Dashboard from "./Dashboard";
import { motion } from "framer-motion";

const Shop = () => {
  const [shop, setShop] = useState({});

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
    setShop(data.msg);
  };

  useEffect(() => {
    document.title = "FileDesk | Dashboard | Shop";
    getShop();
  }, []);

  return (
    <div className="container pop my-1">
      <div className="row center">
        <Dashboard />
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
              style={{width:"5rem"}}
                type="text"
                id="spiral"
                className="fancyinput "
                value={shop?.spiralPrice}
                onChange={(e) =>
                  setShop({ ...shop, spiralPrice: e.target.value })
                }
              />
            </div>
            <div className="d-flex my-2 center justify-content-around">
              <label htmlFor="cover" className="mt-3">
                Cover Price:{" "}
              </label>
              <input
              style={{width:"5rem"}}
                type="text"
                id="cover"
                className="fancyinput "
                value={shop?.coverPrice}
                onChange={(e) =>
                  setShop({ ...shop, coverPrice: e.target.value })
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
              <label htmlFor="bwPrice" className="mt-3">
                Black & White:
              </label>
              <input
              style={{width:"5rem"}}
                type="text"
                id="bwPrice"
                className="fancyinput "
                value={shop?.bwPrice}
                onChange={(e) => setShop({ ...shop, bwPrice: e.target.value })}
              />
            </div>
            <div className="d-flex my-2 center justify-content-around">
              <label htmlFor="colorPrice" className="mt-3">
                Coloured:
              </label>
              <input
              style={{width:"5rem"}}
                type="text"
                id="colorPrice"
                className="fancyinput"
                value={shop?.colorPrice}
                onChange={(e) =>
                  setShop({ ...shop, colorPrice: e.target.value })
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
