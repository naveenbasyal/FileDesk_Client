import React from "react";
const BindingCharges = ({cover , spiral}) => {
  return (
    <>
      <table
        
        className="table my-5 "
      >
        <thead>
          <tr >
            <th scope="col" className="fw-bold dim">
              Binding
            </th>
            <th scope="col" className="dim">
              <i className="p-1 stroke fa-solid fa-shake fa-sack-dollar"></i>
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
