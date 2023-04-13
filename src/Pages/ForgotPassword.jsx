import React, { useState } from "react";
import "../styles/Auth.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const forgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter email");
    }

    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Secret-Key": `${process.env.REACT_APP_SECRET_KEY}`
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      toast.success(data.message);
      navigate("/auth");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="container my-5 center forgotPassword">
      <div className="row d-flex justify-content-around my-5">
        <div className="col-lg-4">
          <motion.div
            whileHover={{ scale: 1.24 }}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 0.7, bounce: 0.5 }}
            className="center pointer"
          >
            <img src="/images/forgot_password.png" alt="img" className="img-fluid" />
          </motion.div>
        </div>
        <div className="col-lg-5">
          <div className="rightpart">
            <div className="heading">
              <motion.h1
                whileHover={{ scale: 1.1 }}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", duration: 0.7, bounce: 0.5 }}
                className="text-start pointer  stroke display-3"
              >
                Forgot
              </motion.h1>
              <motion.h1
                whileHover={{ scale: 1.1 }}
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 0.7, bounce: 0.5 }}
                className="text-start  pointer stroke display-3"
              >
                Password ?
              </motion.h1>
            </div>
            <div>
              <small className="pop text-muted">
                You will receive a link to create a new password via email.
              </small>
            </div>

            <motion.form
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 0.7, bounce: 0.5 }}
              onSubmit={forgotPassword}
            >
              <div className="form-group my-3">
                <label htmlFor="email" className="dim pop">
                  Email address
                </label>
                <motion.input
                  whileHover={{ scale: 1.05 }}
                  type="email"
                  className="form-control my-2 px-3 py-2 bg-color pop"
                  id="email"
                  placeholder="john@example.com"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.15 }}
                type="submit"
                className="shadow-btn  shadow-out dim pop"
              >
                Send
              </motion.button>
              <Link
                whileHover={{ scale: 1.1 }}
                to="/auth"
                className=" dim pop mx-4 forgotpass shadow-out shadow-btn"
              >
                Login
              </Link>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
