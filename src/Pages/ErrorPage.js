import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container my-0">
      <div className="row center mt-5">
        <h1 className="center dim mt-5 display-2">404</h1>
        <h2 className="center mt-4 fw-bold">Look like you're lost</h2>
        <h5 className="center">the page you are looking for not avaible!</h5>
        <Link to="/" style={{width:"10rem"}} className="my-4 shadow-btn shadow-out p-2 dim center">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
