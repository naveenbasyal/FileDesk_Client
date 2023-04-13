import React, { useEffect, useState } from "react";
import getToken from "../../utils/getToken";
import moment from "moment";
import { HashLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = getToken();
  const fetchOrders = async () => {
    setLoading(true);
    const data = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/userorders`, // /api/userorders for getting orders of users
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Secret-Key": `${process.env.REACT_APP_SECRET_KEY}`,
        },
      }
    );
    const res = await data.json();
    setLoading(false);
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

  return (
    <div className="container my-5">
      <h4 className="center fs-3 ls-2 stroke my-4">Your Orders</h4>
      {orders.length > 0 ? (
        <>
          <div className="row d-flex justify-content-around">
            {orders.map((order, i) => {
              return (
                <div key={i} className="col-lg-5 col-sm-12">
                  <div
                    className={`card my-4 ${
                      window.screen.width < 500 ? "ps-1" : "ps-4 "
                    } py-2 bg-color border-none shadow-out`}
                    key={i}
                  >
                    <div className="card-body">
                      <span className="text-muted ">
                        Order ID - {" " + order?.orderId}
                      </span>
                      <button
                        title="Copy Order ID"
                        className={`border-none ${
                          window.screen.width < 500 ? "ms-1" : "mx-3"
                        }  shadow-btn copy roundedBorder`}
                        onClick={() => {
                          navigator.clipboard.writeText(order?.orderId);
                          toast.success("Order ID Copied");
                        }}
                      >
                        <i className="fa-solid fa-clipboard dim"></i>
                      </button>
                      <br />

                      <span className="text-muted">
                        Payment ID - {" " + order?.orderPaymentId}
                        <button
                          title="Copy Payment ID"
                          className={`border-none ${
                            window.screen.width < 500 ? "ms-1" : "mx-3"
                          } shadow-btn copy roundedBorder`}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              order?.orderPaymentId
                            );
                            toast.success("Payment ID Copied");
                          }}
                        >
                          <i className="fa-solid fa-clipboard dim"></i>
                        </button>
                      </span>
                      <hr />
                      <p className="card-text">
                        <span> Total Files :</span>
                        {" " + order?.orderTotalFiles}
                      </p>
                      <p className="card-title">
                        <span>
                          Total Price :{" "}
                          <i className="fa-solid fa-indian-rupee text-success"></i>
                          <span className="text-success">
                            {" " + order?.orderTotal}
                          </span>
                        </span>
                      </p>

                      <p className="card-text">
                        <span>Order Status : </span>

                        {order?.orderStatus === 0 ? (
                          <span className="text-success">
                            <i className="fa-solid fa-circle-check fa-beat mx-2"></i>
                            <span className="">Order Placed</span>
                          </span>
                        ) : order?.orderStatus === 1 ? (
                          <span className="text-success">
                            <i className="fa-solid fa-spinner fa-spin-pulse  mx-2"></i>
                            <span className="">In Progress</span>
                          </span>
                        ) : order?.orderStatus === 2 ? (
                          <span className="text-success">
                            <i className="fa-solid fa-truck mx-2 fa-fade"></i>
                            Out for Delivery
                          </span>
                        ) : (
                          <>
                            <span className=" text-success">
                              <i className="fa-solid fa-circle-check mx-2"></i>
                              Delivered
                            </span>
                          </>
                        )}
                      </p>
                      <p className="card-text">
                        <span>
                          Order Date :&nbsp;
                          {moment(order?.createdAt).format("DD/MM/YYYY")}
                        </span>
                      </p>
                      <p className="card-text">
                        <span>
                          Order Time :&nbsp;
                          {moment(order?.createdAt).format("hh:mm:ss a")}
                        </span>
                      </p>
                      <p className="card-text">
                        <span>Delivery Type : </span>
                        <span
                          className="text-success"
                          style={{ textTransform: "capitalize" }}
                        >
                          {" " + order?.deliveryType}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : loading ? (
        <div className="center" style={{ height: "50vh" }}>
          <HashLoader color="#5b4af1" size={70} />
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
  );
};

export default Orders;
