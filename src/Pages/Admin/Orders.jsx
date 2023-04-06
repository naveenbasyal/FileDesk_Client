import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import getToken from "../../utils/getToken";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = getToken();
  const fetchOrders = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/adminorders`, // /api/userorders for getting orders of users
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    console.log(res);
    if (res?.orders) {
      setOrders(res?.orders);
    }
  };
  useEffect(() => {
    document.title = "FileDesk | Dashboard | Orders";
    fetchOrders();
  }, []);
  console.log(orders);
  // const date = new Date()
  return (
    <div className="container my-1">
      <div className="row center">
        <Dashboard />
        {orders.length > 0 ? (
          <div className="col-lg-6">
            <h4 className="dim center fs-4">Orders</h4>
            {orders.map((order, i) => {
              return (
                <div className="card my-1" key={i}>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>ORDER ID :</span>
                      {" " + order?.orderId}
                    </h5>
                    <h5 className="card-title">
                      <span>PAYMENT ID :</span>
                      {" " + order?.orderPaymentId}
                    </h5>
                    <h5 className="card-title">
                      <span>ORDER TOTAL :</span>
                      {" " + order?.orderTotal}
                    </h5>
                    <p className="card-text">
                      <span>ORDER TOTAL FILES :</span>
                      {" " + order?.orderTotalFiles}
                    </p>

                    <p className="card-text">
                      <span>ORDER STATUS :</span>
                      {" " + order?.orderStatus}
                    </p>
                    <p className="card-text">
                      <span>ORDER DATE :</span>
                      {" " + order?.createdAt}
                    </p>
                    <p className="card-text">
                      <span>DELIVERY TYPE :</span>
                      {" " + order?.deliveryType}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="col-lg-6">
            <h4 className="dim center fs-4">Orders</h4>
            <div className="card my-1">
              <div className="card-body">
                <h5 className="card-title">No Orders</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
