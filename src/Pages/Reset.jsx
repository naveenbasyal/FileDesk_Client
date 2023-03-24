import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { toast } from "react-hot-toast";
const Reset = () => {
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
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/resetpassword/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    });
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
    <div
      className="container
    "
    >
      <label htmlFor="newPassword">Enter your new password:</label>
      <input type="text" id="newPassword"

        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirm"> Confirm Password</label>
      <input type="text" id="confirm"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={resetPassword}>Reset</button>
    </div>
  );
};

export default Reset;
