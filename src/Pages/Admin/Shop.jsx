import React, { useEffect, useState, useContext } from "react";
import Dashboard from "../Dashboard";
import { HashLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { useGlobalShop } from "../../Context/ShopProvider";
const Shop = () => {
  const { getShop, shop, inputDetails, setInputDetails, setShop } =
    useGlobalShop();

  const [disabled, setdisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intVal = parseInt(value);
    if (intVal < 1) {
      return;
    }

    setInputDetails({ ...inputDetails, [name]: intVal });
  };

  useEffect(() => {
    if (
      shop?.bwSingle === inputDetails?.bwSingle &&
      shop?.colorPrice === inputDetails?.colorPrice &&
      shop?.spiralPrice === inputDetails?.spiralPrice &&
      shop?.coverPrice === inputDetails?.coverPrice &&
      shop?.bwDouble === inputDetails?.bwDouble &&
      shop?.deliveryPrice === inputDetails?.deliveryPrice &&
      shop?.fastDeliveryPrice === inputDetails?.fastDeliveryPrice
    ) {
      setdisabled(true);
    } else {
      setdisabled(false);
    }
  }, [inputDetails]);


  const handleUpdateCharges = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/shop/editdetails`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputDetails),
      }
    );
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
      console.log(data.error);
      return;
    }
    if (data.msg) {
      setInputDetails(data.shop);
      setShop(data.shop);
      toast.success(data.msg);
    }
    console.log(data);
  };
  useEffect(() => {
    document.title = "FileDesk | Dashboard | Shop";
    getShop();
  }, []);

  return (
    <div className="container pop my-1">
      <Dashboard />
      {shop?.colorPrice ? (
        <>
          <div className="row justify-content-around">
            <div className="col-lg-3 col-sm-12 p-3 ">
              <div>
                <div className="d-flex justify-content-between">
                  <h4 className="dim fs-5">Binding Charges</h4>
                  <i className="fa-solid center dim p-2 fw-bold fa-inr"></i>
                </div>
                <div className="d-flex my-3 center justify-content-between">
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
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex my-2 center justify-content-between">
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
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-sm-12 p-3 ">
              <div>
                <div className="d-flex justify-content-between">
                  <h4 className="dim fs-5">Printing Charges</h4>
                  <i className="fa-solid center dim p-2 fw-bold fa-inr"></i>
                </div>
                <div className="d-flex my-3 center justify-content-between">
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
                <div className="d-flex my-3 center justify-content-between">
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
                <div className="d-flex my-2 center justify-content-between">
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
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 p-3 ">
              <div>
                <div className="d-flex justify-content-between">
                  <h4 className="dim fs-5">Delivery Charges</h4>
                  <i className="fa-solid center dim p-2 fw-bold fa-inr"></i>
                </div>
                <div className="d-flex my-3 center justify-content-between">
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
                <div className="d-flex my-3 center justify-content-between">
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
              </div>
            </div>
          </div>
          <button
            className="u-f-b  mt-5 center m-auto"
            onClick={handleUpdateCharges}
            disabled={disabled}
          >
            Update
          </button>
        </>
      ) : (
        <div className="center py-5 mt-5">
          <HashLoader color="#5b4af1" size={60} />
        </div>
      )}
    </div>
  );
};

export default Shop;
