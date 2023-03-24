import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { toast } from "react-hot-toast";
const Reset = () => {
  const [showPass, setshowPass] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();
  const { decodedToken, isExpired } = useJwt(token);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  console.log(decodedToken);
  if (isExpired) {
    toast.error("Token Expired");
    navigate("/auth");
  }

  const resetPassword = async () => {
    if (!password || !confirm) {
      toast.error("Please fill all the fields");
      return;
    }
    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/user/resetpassword/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      }
    );
    const data = await res.json();
    // console.log(data);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      navigate("/auth");
    }
  };

  return (
    <div className="container pop my-5">
      <div className="row center my-5">
        <div className="col-lg-6 col-sm-12 my-5">
          <h3 className="stroke ls-2 fs-2 center my-3">Reset Password</h3>
          <div className="card shadow-out bg-color border-none p-3 position-relative">
            <label className="dim fs-5 my-3 fw-bold" htmlFor="newPassword">
              Enter your new password:
            </label>

            <input
              type={showPass ? "text" : "password"}
              id="newPassword"
              className="form-control shadow-in bg-color border-none "
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="dim fs-5 my-3 fw-bold" htmlFor="confirm">
              {" "}
              Confirm Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              id="confirm"
              className="form-control shadow-in bg-color border-none "
              placeholder="Re-enter Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <i
              onClick={() => setshowPass(!showPass)}
              className={`fa-solid fa-eye p-2 mt-3  ${
                showPass ? "shadow-in dim" : "shadow-out "
              } shadow-btn pointer center`}
            ></i>
          </div>
          <button
            onClick={resetPassword}
            className="shadow-out shadow-btn my-4 mx-2 dim"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
