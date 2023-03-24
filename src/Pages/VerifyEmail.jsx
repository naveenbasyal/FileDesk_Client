import React, { useEffect } from "react";
import { RingLoader, PulseLoader } from "react-spinners";
import { useJwt } from "react-jwt";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
const VerifyEmail = () => {
  const { token } = useParams();
  const { decodedToken, isExpired } = useJwt(token);
  const navigate = useNavigate();

  const verifyEmail = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/verifyemail/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    if (res.status === 200) {
      toast.success(data.message)
      navigate("/auth")
    } else {
      toast.error(data.error)
      navigate("/auth")
    }
  }
  useEffect(() => {
    if (isExpired) {
      toast.error("Token Expired");
      navigate("/auth");
    } else {
      verifyEmail();
    }
  }, []);



  return (
    <div className="container pop center" style={{ height: "70vh" }}>
      <div className="dim fs-3 p-1 center ">
        <RingLoader color="#5b4af1" size={100} />
        <h3 className="my-4 ">
          {" "}
          Verifying Email <span><PulseLoader color="#5b4af1" size={7} /></span>
        </h3>
      </div>
    </div>
  );
};

export default VerifyEmail;
