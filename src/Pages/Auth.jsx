import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import "../styles/Auth.css";
import getToken from "../utils/getToken";
import Footer from "../components/Footer";
import { PulseLoader } from "react-spinners";
const LoginSignUp = ({scrollToTop}) => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPass, setshowPass] = useState(false);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    scrollToTop();
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSignUp = async (e) => {
    setSignUp(!signUp);
    setSignIn(!signIn);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (!name || !email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    setloading(true);
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    setloading(false);
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
      return;
    }
    toast.success("Account Created Successfully");
    setSignUp(false);
    setSignIn(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    setloading(true);
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    setloading(false);
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
      return;
    }
    toast.success("Login Successfully");
    localStorage.setItem("filedesk", data.token);
    navigate("/");
  };

  const handleSignIn = () => {
    setSignUp(!signUp);
    setSignIn(!signIn);
  };

  return (
    <div className="auth my-5 pop">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, bounce: 0.5, type: "spring" }}
        className={`container ${signUp ? "right-panel-active" : ""}  `}
        id="container "
      >
        {/* ---------SignUP----------- */}
        <div className="form-container sign-up-container  ">
          <form className="" onSubmit={handleRegister}>
            <h1 className="fs-4 stroke jsf p-1 ls-1">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social shadow-out shadow-btn ">
                <i className="fab fa-facebook-f "></i>
              </a>
              <a href="#" className="social shadow-out shadow-btn">
                <i className="fab fa-google-plus-g "></i>
              </a>
              <a href="#" className="social shadow-out shadow-btn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              style={{ width: "90%" }}
              type="text"
              className="fancyinput my-2 "
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              style={{ width: "90%" }}
              type="text"
              className="fancyinput my-2 "
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{ width: "90%" }}
              type={showPass ? "text" : "password"}
              className="fancyinput my-2 "
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex">
              <Link
                onClick={handleSignIn}
                className="me-2 text-decoration-underline"
              >
                Already have account? Login
              </Link>
              <i
                onClick={() => setshowPass(!showPass)}
                className={`fa-solid fa-eye center ${
                  showPass ? "dim" : ""
                } shadow-btn pointer center`}
              ></i>
            </div>
            <button
              className={`${
                loading ? "shadow-in " : "shadow-out"
              } shadow-btn my-2 dim fw-bold`}
            >
              {loading ? (
                <PulseLoader color="#9baacf" size={9} className="p-2" />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
        {/* ---------------SignIn---------- */}
        <div className="form-container sign-in-container col-sm-12">
          <form onSubmit={handleLogin}>
            <h1 className="stroke ls-1 jsf p-1">Sign in</h1>
            <div className="social-container">
              <a href="#" className="social shadow-out shadow-btn pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social shadow-out shadow-btn pointer">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social shadow-out shadow-btn pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              style={{ width: "90%" }}
              type="text"
              id="email"
              className="fancyinput my-2 "
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{ width: "90%" }}
              type={showPass ? "text" : "password"}
              id="password"
              className="fancyinput my-2 "
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex ">
              <Link
                className="forgotpass me-4 text-danger p-1"
                to="/forgotpassword"
              >
                Forgot your password?
              </Link>
              <i
                onClick={() => setshowPass(!showPass)}
                className={`fa-solid fa-eye center ${
                  showPass ? "dim" : ""
                } shadow-btn pointer center`}
              ></i>
            </div>
            <button
              className={`${
                loading ? "shadow-in " : "shadow-out"
              } shadow-btn d-flex align-items-center justify-content-center my-2 dim fw-bold`}
            >
              {loading ? (
                <PulseLoader color="#9baacf" size={9} className="p-2" />
              ) : (
                "Sign In"
              )}
            </button>
            <Link
              onClick={handleSignUp}
              className="text-decoration-underline border-none bg-color"
            >
              Create new account? Register here!
            </Link>
          </form>
        </div>
        <div className="overlay-container col-sm-12">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={handleSignIn}
                className="ghost shadow-btn"
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={handleSignUp}
                className="ghost shadow-btn "
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default LoginSignUp;
