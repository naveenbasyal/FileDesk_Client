import React from "react";

export const BindingCharges = () => {
  return (
    <>
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col" className="fw-bold dim">
              Binding
            </th>
            <th scope="col" className="dim">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spiral Binding</td>
            <td>₹40.00</td>
          </tr>
          <tr>
            <td> Plastic Cover</td>
            <td>₹10.00</td>
          </tr>
          <tr>
            <td> Staples only</td>
            <td> ₹5.00</td>
          </tr>
          <tr>
            <td> Loose Leaf</td>
            <td>₹0.00 </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export const PaperCharges = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="dim">
              Printing
            </th>
            <th scope="col" className="dim">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Black and White per page (Single Side)</td>
            <td>₹1.50</td>
          </tr>
          <tr>
            <td>Black and White per page (Both Side)</td>
            <td>₹2.00</td>
          </tr>
          <tr>
            <td> Color printing per page(Single Side)</td>
            <td> ₹6.00</td>
          </tr>
          <tr>
            <td> Color printing per page(Both Side)</td>
            <td>₹10.00 </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export const TotalPrices = () => {
  return (
    <div className="totalPrice my-5">
      <hr className="hr hr-blurry" />

      <div className="container my-5 ">
        <h2 className="dim pop fw-bold center">Total Price</h2>
        <h4 className="jsf fw-bold center my-3">Rs. 40</h4>

        <div className="my-4">
          <span className="fw-bold my-3 dim pop float-start">
            Any Instructions ?
          </span>
          <input
            type="text"
            className="form-control pop instructions"
            placeholder="Leave a message..."
          />
        </div>
        <div className="my-4 pop">
          <Link to="/cart" className=" add_to_cart ">
            Add to Cart
          </Link>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
