import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import "../styles/Auth.css";
import getToken from "../utils/getToken";
const LoginSignUp = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);
  
  const handleSignUp = async (e) => {
    setSignUp(true);
    setSignIn(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (!name || !email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    const res = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/api/user/register`,
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
    console.log(email, password);
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    const res = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/api/user/login`,
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
    setSignUp(false);
    setSignIn(true);
  };

  return (
    <div className="auth my-5 pop">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 ,bounce: 0.5,type:"spring"}}
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
              className="form-control pop shadow-in input "
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="form-control pop shadow-in input "
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-control pop shadow-in input "
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="shadow-out dim my-2">Sign Up</button>
            <button onClick={handleSignIn}>Login</button>
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
              className="form-control pop shadow-in input"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-control pop shadow-in input"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link className="forgotpass p-1" to="/forgotpassword">Forgot your password?</Link>
            <button onClick={handleSignUp} className="signUp-1" id="signUp-1">
              Sign Up
            </button>
            <button className="shadow-out dim">Sign In</button>
          </form>
        </div>
        <div className="overlay-container col-sm-12">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={handleSignIn} className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={handleSignUp} className="ghost " id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginSignUp;
