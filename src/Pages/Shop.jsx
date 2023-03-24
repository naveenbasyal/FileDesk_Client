import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "../styles/Auth.css"

const Shop = () => {


  return (

    
    <div className="container pop my-5">
      <div className="row center">
        <div className="col-lg-6">
          <div className="card shadow-out bg-color border-none p-3">
            <div className="card-title">
              <h1>Product Name</h1>
            </div>
            <div className="card-body bg-color d-flex w-100 ">
              <label htmlFor="binding">
                Binding
                <input type="text" className="shadow-out form-control bg-color border-none mx-3" name="binding" id="binding" value={1.5} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
